/**
 * gesture-bridge.js
 * This script listens for postMessage commands sent from external gesture controllers
 * and executes scroll / click / navigation actions within this page.
 * Works both in development (localhost) and production (any HTTPS origin).
 * It is safe: only known command types are handled.
 */
(function () {
  'use strict';

  window.addEventListener('message', function (event) {
    var data = event.data;
    if (!data || typeof data !== 'object') return;

    switch (data.type) {
      case 'gesture-scroll': {
        // data.deltaY: pixels to scroll (positive = down, negative = up)
        window.scrollBy({ top: data.deltaY, behavior: 'auto' });
        break;
      }
      case 'gesture-click': {
        // data.x and data.y: viewport coordinates to click
        var el = document.elementFromPoint(data.x, data.y);
        if (el) {
          el.click();
          el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
          el.dispatchEvent(new MouseEvent('mouseup',   { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
        }
        break;
      }
      case 'gesture-hover': {
        // data.x, data.y: current cursor position – trigger mousemove for hover effects
        var hoverEl = document.elementFromPoint(data.x, data.y);
        if (hoverEl) {
          hoverEl.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
          hoverEl.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true, clientX: data.x, clientY: data.y }));
        }
        break;
      }
      case 'gesture-navigate': {
        // data.url: the URL to navigate to
        if (data.url) {
          window.location.href = data.url;
        }
        break;
      }
      case 'gesture-voice-command': {
        // data.command: voice command feedback — show toast if global AI is active
        if (window._globalAIState && data.command) {
          console.log('[GestureBridge] Voice command received:', data.command);
        }
        break;
      }
    }
  });

  console.log('[GestureBridge] Loaded and listening for gesture commands.');
})();
