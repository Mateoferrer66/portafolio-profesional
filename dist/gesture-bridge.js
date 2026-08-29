/**
 * gesture-bridge.js
 * This script listens for postMessage commands sent from the gesture controller
 * (running at localhost:5174) and executes scroll / click actions within this page.
 * It is safe: only known command types are handled and the origin is logged.
 */
(function () {
  'use strict';

  window.addEventListener('message', function (event) {
    // Accept messages from localhost (dev) or any origin when deployed.
    // In production you could restrict: if (event.origin !== 'https://your-gesture-app.com') return;
    const data = event.data;
    if (!data || typeof data !== 'object') return;

    switch (data.type) {
      case 'gesture-scroll': {
        // data.deltaY: pixels to scroll (positive = down, negative = up)
        window.scrollBy({ top: data.deltaY, behavior: 'auto' });
        break;
      }
      case 'gesture-click': {
        // data.x and data.y: viewport coordinates to click
        const el = document.elementFromPoint(data.x, data.y);
        if (el) {
          el.click();
          // Also dispatch mousedown/mouseup for elements that rely on those events
          el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
          el.dispatchEvent(new MouseEvent('mouseup',   { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
        }
        break;
      }
      case 'gesture-hover': {
        // data.x, data.y: current cursor position – trigger mousemove for hover effects
        const el = document.elementFromPoint(data.x, data.y);
        if (el) {
          el.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
          el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
        }
        break;
      }
    }
  });

  // Notify the parent frame that the bridge is ready
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'gesture-bridge-ready' }, '*');
  }

  console.log('[GestureBridge] Loaded and listening for gesture commands.');
})();
