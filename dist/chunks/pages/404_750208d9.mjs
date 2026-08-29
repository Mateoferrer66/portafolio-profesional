/* empty css                           */import { c as createComponent, r as renderTemplate, a as createAstro, d as defineScriptVars, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, u as unescapeHTML, e as renderComponent, f as renderSlot, g as renderHead, F as Fragment } from '../astro_f095f7eb.mjs';
import 'clsx';
/* empty css                           *//* empty css                           */import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect, Suspense, useRef } from 'react';

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$5 || (_a$5 = __template$5([`<!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-HD5XWZYCZQ">
<\/script> <script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HD5XWZYCZQ');
<\/script>`])));
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/GoogleAnalytics.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$9 = createAstro("https://mateo-ferrer.pages.dev/");
const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$GoogleTagManager;
  const { id = "GTM-58K8HFNK" } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["<!-- Google Tag Manager --><script>(function(){", '\n    (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n            j = d.createElement(s),\n            dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n    })(window, document, "script", "dataLayer", id);\n})();<\/script> <!-- End Google Tag Manager -->'])), defineScriptVars({ id }));
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/GoogleTagManager.astro", void 0);

const $$Astro$8 = createAstro("https://mateo-ferrer.pages.dev/");
const $$GoogleTagManagerNoScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GoogleTagManagerNoScript;
  const { id = "GTM-58K8HFNK" } = Astro2.props;
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead()}<noscript><iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${id}`, "src")} height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/GoogleTagManagerNoScript.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$7 = createAstro("https://mateo-ferrer.pages.dev/");
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainHead;
  const {
    title = "Mateo Ferrer | Desarrollador & Emprendedor Digital",
    description = "Portafolio profesional de Mateo Ferrer. Descubre proyectos de desarrollo web, recursos digitales y servicios tecnol\xF3gicos.",
    robots = "index, follow",
    keywords = "Mateo Ferrer, Desarrollo Web, Astro, React, Frontend, E-commerce, Portafolio, Tienda Digital, Productos Digitales, Plantillas Notion, E-books, Cursos Online, Servicios Tecnol\xF3gicos, Desarrollo de Software, Dise\xF1o Web, Colombia, Freelance, Recursos Digitales, Apps, Gaming, Tech",
    image = "https://mateoferrer.com/assets/og-image.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="keywords"', '><meta name="author" content="Mateo Ferrer"><meta name="robots"', '><meta name="language" content="Spanish"><meta name="revisit-after" content="7 days"><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="Mateo Ferrer"><meta property="og:locale" content="es_CO"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Performance Optimizations --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="https://www.google-analytics.com"><!-- Preload Critical Images for LCP --><!-- Default (Light) --><link rel="preload" as="image" href="/assets/backgrounds/bg-main-light-800w.jpg" media="(max-width: 50em) and (prefers-color-scheme: light)"><link rel="preload" as="image" href="/assets/backgrounds/bg-main-light-1440w.jpg" media="(min-width: 50em) and (prefers-color-scheme: light)"><!-- Dark Mode (Default in JS but good to have if prefers-color-scheme matches or for fast discovery) --><link rel="preload" as="image" href="/assets/backgrounds/bg-main-dark-800w.jpg" media="(max-width: 50em) and (prefers-color-scheme: dark)"><link rel="preload" as="image" href="/assets/backgrounds/bg-main-dark-1440w.jpg" media="(min-width: 50em) and (prefers-color-scheme: dark)"><!-- Favicon Complete Set --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- PWA & Mobile --><meta name="theme-color" content="#7611a6"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Mateo Ferrer"><meta name="mobile-web-app-capable" content="yes"><meta name="format-detection" content="telephone=no"><!-- Fonts with preload for performance --><link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet"><script>\n	// This code is inlined in the head to make dark mode instant & blocking.\n	const getThemePreference = () => {\n		return "dark";\n	};\n	const isDark = getThemePreference() === "dark";\n	document.documentElement.classList[isDark ? "add" : "remove"]("theme-dark");\n	document.documentElement.classList.remove("theme-light"); // Ensure light mode is removed\n\n	if (typeof localStorage !== "undefined") {\n		// Watch the document element and persist user preference when it changes.\n		const observer = new MutationObserver(() => {\n			const isDark =\n				document.documentElement.classList.contains("theme-dark");\n			localStorage.setItem("theme", isDark ? "dark" : "light");\n		});\n		observer.observe(document.documentElement, {\n			attributes: true,\n			attributeFilter: ["class"],\n		});\n	}\n\n	document.addEventListener("astro:after-swap", () => {\n		document.documentElement.classList.add("theme-dark");\n		document.documentElement.classList.remove("theme-light");\n	});\n<\/script>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(robots, "content"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"));
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/MainHead.astro", void 0);

const iconPaths = {
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
  "whatsapp-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198 178.6a88 88 0 0 0-16.7-126.3 87.6 87.6 0 0 0-126 5.8 88 88 0 0 0 11.2 118.8L32 224l48.8-17.6a88 88 0 0 0 117.2-27.8Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m146.5 156.9-18.2-12.1a16.3 16.3 0 0 1-5.6-18.7 51.5 51.5 0 0 0 0-33.8 16.2 16.2 0 0 1 5.6-18.7l18.2-12.1a3.8 3.8 0 0 0 1-5.1 63.8 63.8 0 0 0-21.4-23.8 4 4 0 0 0-5.1 1l-11.8 13.9a16 16 0 0 1-19.6 3.1c-13.6-7.3-25-18.7-32.3-32.3a16 16 0 0 1 3.1-19.6l13.9-11.8a4 4 0 0 0 1-5.1 63.8 63.8 0 0 0-23.8-21.4 3.8 3.8 0 0 0-5.1 1l-12.1 18.2a16 16 0 0 0 8.1 21.6 135.5 135.5 0 0 0 78.4 78.4 16 16 0 0 0 21.6 8.1l18.2-12.1a3.8 3.8 0 0 0 1-5.1Z"/>`,
  "shopping-cart": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M32 48h21l24.4 126.9a26 26 0 0 0 25.6 21.1h91a26 26 0 0 0 25.6-21.1L236 96H78"/><circle cx="109" cy="223" r="13" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="199" cy="223" r="13" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
  "chat-centered-text": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M88 112h80m-80 32h56M40 216V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24v112a24 24 0 0 1-24 24H77.3L40 234.6Z"/>`,
  "x": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M200 56 56 200m144 0L56 56"/>`
};

const $$Astro$6 = createAstro("https://mateo-ferrer.pages.dev/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const { color = "currentcolor", gradient, icon, size } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size)
    attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, void 0, { "class": "astro-patnjmll" })} data-astro-cid-patnjmll> <g data-astro-cid-patnjmll>${unescapeHTML(iconPath)}</g> ${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" data-astro-cid-patnjmll> <stop stop-color="var(--gradient-stop-1)" data-astro-cid-patnjmll></stop> <stop offset=".5" stop-color="var(--gradient-stop-2)" data-astro-cid-patnjmll></stop> <stop offset="1" stop-color="var(--gradient-stop-3)" data-astro-cid-patnjmll></stop> </linearGradient>`} </svg> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Icon.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-x3pjskd3": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Dark theme</span> <span class="icon light" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "data-astro-cid-x3pjskd3": true })}</span> <span class="icon dark" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "data-astro-cid-x3pjskd3": true })}</span> </button> ` })}  `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ThemeToggle.astro", void 0);

const $$Astro$5 = createAstro("https://mateo-ferrer.pages.dev/");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" },
    { label: "Shop", href: "/shop/" },
    { label: "Services", href: "/services/" }
  ];
  const iconLinks = [
    {
      label: "Twitter",
      href: "https://twitter.com/mateoferrer66",
      icon: "twitter-logo"
    },
    {
      label: "GitHub",
      href: "https://github.com/Mateoferrer66",
      icon: "github-logo"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mateoferrer_oficial/",
      icon: "instagram-logo"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mateo-ferrer-a679a713a/",
      icon: "linkedin-logo"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <div class="menu-header" data-astro-cid-dmqpwcec> <a href="/" class="site-title" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "1.6em", "gradient": true, "data-astro-cid-dmqpwcec": true })}
Mateo Ferrer
</a> ${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-dmqpwcec": true }, { "default": () => renderTemplate` <template data-astro-cid-dmqpwcec> <button class="menu-button" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "data-astro-cid-dmqpwcec": true })} </button> </template> ` })} </div> <noscript> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(
        href
      )
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> </noscript> <noscript> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> </div> </noscript> <div id="menu-content" hidden data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(
        href
      )
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> <div class="theme-toggle" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> </div> </div> </nav>  `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <!-- CTA Section --> <div class="footer-cta glass-effect" data-astro-cid-sz7xmlte> <div class="cta-glow" data-astro-cid-sz7xmlte></div> <div class="cta-content" data-astro-cid-sz7xmlte> <span class="cta-badge" data-astro-cid-sz7xmlte>💡 ¡Hagamos realidad tu proyecto!</span> <h3 data-astro-cid-sz7xmlte>¿Tienes una idea en mente?</h3> <p data-astro-cid-sz7xmlte>
Transformemos tu visión en una experiencia digital
					extraordinaria
</p> <a href="https://wa.me/573005059987" class="cta-button" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-sz7xmlte></path> </svg>
Cotizar Proyecto Ahora
</a> </div> </div> <!-- Footer Main --> <div class="footer-main" data-astro-cid-sz7xmlte> <!-- Brand & Copyright --> <div class="footer-brand" data-astro-cid-sz7xmlte> <div class="brand-icon" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.5em", "data-astro-cid-sz7xmlte": true })} </div> <div class="brand-text" data-astro-cid-sz7xmlte> <p class="brand-name" data-astro-cid-sz7xmlte>Mateo Ferrer</p> <p class="copyright" data-astro-cid-sz7xmlte>
&copy; ${currentYear} Todos los derechos reservados
</p> </div> </div> <!-- Social Links --> <div class="footer-socials" data-astro-cid-sz7xmlte> <a href="https://twitter.com/mateoferrer66" aria-label="Twitter" class="social-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://github.com/Mateoferrer66" aria-label="GitHub" class="social-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://www.instagram.com/mateoferrer_oficial/" aria-label="Instagram" class="social-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://www.facebook.com/mateoferrer66/" aria-label="Facebook" class="social-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-sz7xmlte></path> </svg> </a> <a href="https://www.linkedin.com/in/mateo-ferrer-a679a713a/" aria-label="LinkedIn" class="social-link" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div> </div> </footer> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Footer.astro", void 0);

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://api.whatsapp.com/send?phone=573005059987&text=Hola%20Mateo,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" class="whatsapp-button" aria-label="Contact us on WhatsApp" title="Chat with us on WhatsApp" id="whatsapp-btn" data-astro-cid-iehx2mtc> <svg viewBox="0 0 24 24" data-astro-cid-iehx2mtc><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.414z" data-astro-cid-iehx2mtc></path></svg> </a> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/WhatsAppButton.astro", void 0);

const LazyBackground = React.lazy(() => import('../ThreeDBackgroundContent_4e2d4d12.mjs'));
const ThreeDBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(t);
  }, []);
  if (!mounted)
    return null;
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-0 pointer-events-none" }), children: /* @__PURE__ */ jsx(LazyBackground, {}) });
};

const $$Astro$4 = createAstro("https://mateo-ferrer.pages.dev/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$ScrollReveal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ScrollReveal.astro", void 0);

const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="scrollToTop" aria-label="Scroll to top" class="fixed bottom-28 right-8 z-50 p-4 rounded-full bg-slate-900 border border-slate-700 text-white opacity-0 translate-y-10 transition-all duration-300 hover:bg-[var(--accent-regular)] hover:border-[var(--accent-regular)] hover:shadow-lg hover:shadow-[var(--accent-regular)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-regular)] focus:ring-offset-2 focus:ring-offset-slate-900"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m18 15-6-6-6 6"></path> </svg> </button> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ScrollToTop.astro", void 0);

const ChatWidget = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 0) {
        addBotMessage("¡Hola! 👋 Soy el asistente virtual de Mateo.");
        setTimeout(() => {
          addBotMessage("¿En qué puedo ayudarte hoy?", [
            "Ver Portafolio 🎨",
            "Cotizar Servicio 🚀",
            "Soporte Tienda 🛒",
            "Hablemos 💬"
          ]);
        }, 800);
      }
    }, 2e3);
    return () => clearTimeout(timer);
  }, []);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBadge(false);
    setHasInteracted(true);
  };
  const addBotMessage = (text, options) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, {
        id: Date.now(),
        text,
        sender: "bot",
        options
      }]);
    }, 1200);
  };
  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, {
      id: Date.now(),
      text: option,
      sender: "user"
    }]);
    processUserResponse(option);
  };
  const processUserResponse = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("portafolio")) {
      addBotMessage("¡Excelente elección! Puedes ver mis proyectos más recientes en la sección de 'Work'.", ["Ir a Portafolio", "Volver al menú"]);
    } else if (lowerText.includes("cotizar")) {
      addBotMessage("Me encantaría colaborar contigo. ¿Qué tipo de proyecto tienes en mente?", [
        "Web App / Sitio Web 🌐",
        "Diseño UX/UI 🖌️",
        "E-commerce 🏦",
        "Otro"
      ]);
    } else if (lowerText.includes("tienda") || lowerText.includes("soporte")) {
      addBotMessage("Para temas de la tienda, revisa la sección 'Shop' o escríbeme directamente si tuviste un problema con una compra.", ["Ir a la Tienda", "Contactar Soporte"]);
    } else if (lowerText.includes("hablemos") || lowerText.includes("contactar")) {
      addBotMessage("Puedes escribirme directamente a mi WhatsApp para una respuesta rápida.", ["Abrir WhatsApp 📱"]);
    } else if (lowerText.includes("web") || lowerText.includes("design") || lowerText.includes("e-commerce")) {
      addBotMessage("¡Genial! Ese es mi fuerte. Te sugiero que me envíes los detalles por WhatsApp para darte un estimado.", ["Abrir WhatsApp 📱"]);
    } else if (lowerText.includes("ir a portafolio")) {
      window.location.href = "/work/";
    } else if (lowerText.includes("ir a la tienda")) {
      window.location.href = "/shop/";
    } else if (lowerText.includes("abrir whatsapp")) {
      window.open("https://wa.me/573005059987", "_blank");
    } else {
      addBotMessage("Entendido. ¿Deseas saber algo más?", [
        "Ver Portafolio 🎨",
        "Cotizar Servicio 🚀"
      ]);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: className || "fixed right-5 z-[11001] flex flex-col items-end gap-4 bottom-24 pointer-events-auto", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `
                    w-[320px] sm:w-[350px]
                    bg-white/90 dark:bg-slate-900/90
                    backdrop-blur-xl border border-white/20 dark:border-slate-700/50
                    shadow-2xl rounded-2xl overflow-hidden
                    transition-all duration-300 origin-bottom-right
                    ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none absolute bottom-16"}
                `,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex justify-between items-center text-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl", children: "🤖" }),
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-indigo-600 rounded-full" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm", children: "Asistente Virtual" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-indigo-200", children: "En línea ahora" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: toggleChat, "aria-label": "Cerrar chat", className: "text-white/80 hover:text-white transition p-1 hover:bg-white/10 rounded-full", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "h-[350px] overflow-y-auto p-4 bg-slate-50 dark:bg-slate-800/50 scroll-smooth custom-scrollbar", children: [
            messages.map((msg) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col mb-4 ${msg.sender === "user" ? "items-end" : "items-start"}`, children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `
                                    max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm
                                    ${msg.sender === "user" ? "bg-violet-600 text-white rounded-br-none" : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-100 dark:border-slate-600"}
                                `,
                  children: msg.text
                }
              ),
              msg.options && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3 animate-fade-in", children: msg.options.map((option) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleOptionClick(option),
                  className: "text-xs py-1.5 px-3 bg-white dark:bg-slate-700 border border-violet-200 dark:border-slate-600 text-violet-600 dark:text-violet-300 rounded-full hover:bg-violet-50 dark:hover:bg-slate-600 hover:scale-105 transition-all shadow-sm",
                  children: option
                },
                option
              )) })
            ] }, msg.id)),
            isTyping && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 ml-2 mb-4 bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none w-fit shadow-sm border border-slate-100 dark:border-slate-600", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" }),
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" }),
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" })
            ] }),
            /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-slate-500 dark:text-slate-400", children: "Selecciona una opción para continuar" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleChat,
        className: `
                    group relative flex items-center justify-center w-14 h-14 rounded-full 
                    bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/30 
                    transition-all duration-300 hover:scale-110
                    ${isOpen ? "rotate-90 scale-0 opacity-0 hidden" : "scale-100 opacity-100"}
                `,
        "aria-label": "Chatbot",
        children: [
          !hasInteracted && showBadge && /* @__PURE__ */ jsxs("span", { className: "absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4", children: [
            /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center", children: "1" })
          ] }),
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-7 h-7", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) })
        ]
      }
    )
  ] });
};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://mateo-ferrer.pages.dev/");
const $$FAQSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FAQSchema;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">\n    {\n        "@context": "https://schema.org",\n        "@type": "FAQPage",\n        "mainEntity": [\n            {\n                "@type": "Question",\n                "name": "\xBFQu\xE9 servicios ofrece Mateo Ferrer?",\n                "acceptedAnswer": {\n                    "@type": "Answer",\n                    "text": "Ofrezco servicios de desarrollo web, dise\xF1o UX/UI, e-commerce, y consultor\xEDa tecnol\xF3gica. Especializado en crear sitios web modernos y aplicaciones con React, Astro, y tecnolog\xEDas de vanguardia."\n                }\n            },\n            {\n                "@type": "Question",\n                "name": "\xBFC\xF3mo puedo contactar para un proyecto?",\n                "acceptedAnswer": {\n                    "@type": "Answer",\n                    "text": "Puedes contactarme directamente por WhatsApp haciendo clic en el bot\xF3n verde en la esquina inferior derecha, o mediante el chatbot inteligente en la esquina inferior izquierda. Tambi\xE9n puedes escribirme a trav\xE9s del formulario de contacto en la p\xE1gina About."\n                }\n            },\n            {\n                "@type": "Question",\n                "name": "\xBFQu\xE9 tecnolog\xEDas utiliza?",\n                "acceptedAnswer": {\n                    "@type": "Answer",\n                    "text": "Trabajo con tecnolog\xEDas modernas como Astro, React, TypeScript, Tailwind CSS, Three.js para 3D, y frameworks como Next.js. Tambi\xE9n ofrezco integraci\xF3n de APIs, bases de datos, y soluciones cloud."\n                }\n            },\n            {\n                "@type": "Question",\n                "name": "\xBFCu\xE1l es el tiempo de entrega de un proyecto?",\n                "acceptedAnswer": {\n                    "@type": "Answer",\n                    "text": "El tiempo var\xEDa seg\xFAn la complejidad. Un landing page simple puede tomar 1-2 semanas, mientras que un e-commerce completo puede requerir 4-8 semanas. Siempre proporciono un cronograma detallado antes de iniciar."\n                }\n            }\n        ]\n    }\n<\/script>'])));
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/FAQSchema.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://mateo-ferrer.pages.dev/");
const $$GlobalControls = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GlobalControls;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="global-ai-controls" class="global-ai-container" data-astro-transition-persist="global-ai" data-astro-cid-sq3iaajl> <!-- Bot\xF3n Global Flotante para encender/apagar IA --> <button id="global-ai-btn" class="ai-toggle-btn" type="button" title="Activar IA (Gestos y Voz)" data-astro-cid-sq3iaajl> <span class="ai-icon" data-astro-cid-sq3iaajl>\u{1F916}</span> <span class="ai-text" data-astro-cid-sq3iaajl>IA Apagada</span> </button> <!-- Contenedor de la Webcam y Canvas de Gestos (Oculto por defecto) --> <div id="global-webcam-container" class="webcam-box hidden" data-astro-cid-sq3iaajl> <video id="global-webcam-feed" autoplay playsinline data-astro-cid-sq3iaajl></video> <canvas id="global-webcam-canvas" data-astro-cid-sq3iaajl></canvas> <div class="voice-status" id="voice-status" data-astro-cid-sq3iaajl> <span class="mic-icon" data-astro-cid-sq3iaajl>\u{1F399}\uFE0F</span> <span id="voice-text" data-astro-cid-sq3iaajl>Escuchando comandos...</span> </div> </div> <!-- Virtual Cursor Global --> <div class="virtual-cursor" id="global-virtual-cursor" data-astro-cid-sq3iaajl> <div class="cursor-ring" data-astro-cid-sq3iaajl></div> <div class="cursor-dot" data-astro-cid-sq3iaajl></div> </div> <!-- Hidden link for bypass popup blocker navigation --> <a id="global-gesture-nav-link" href="#" target="_blank" rel="noopener noreferrer" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;z-index:-1;" data-astro-cid-sq3iaajl></a> <!-- Toast Notificaciones IA (Voice / Gestures) --> <div id="ai-toast" class="ai-toast hidden" data-astro-cid-sq3iaajl> <span id="ai-toast-icon" data-astro-cid-sq3iaajl>\u2139\uFE0F</span> <span id="ai-toast-msg" data-astro-cid-sq3iaajl>Mensaje</span> </div> </div>  <!-- Script global de IA que maneja Gestos y Voz --> <!-- Nota: Usamos is:inline para evitar que Astro lo reinicie al hacer ViewTransitions. El componente persistir\xE1. --> <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" crossorigin="anonymous"><\/script> <script>
(function() {
  'use strict';
  
  // Prevenir inicializaci\xF3n m\xFAltiple si ViewTransitions hace algo raro
  if (window.GlobalAIInitialized) return;
  window.GlobalAIInitialized = true;

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  ELEMENTOS DEL DOM
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  var aiBtn = document.getElementById('global-ai-btn');
  var aiBtnText = aiBtn.querySelector('.ai-text');
  var webcamBox = document.getElementById('global-webcam-container');
  var videoElement = document.getElementById('global-webcam-feed');
  var canvasElement = document.getElementById('global-webcam-canvas');
  var virtualCursor = document.getElementById('global-virtual-cursor');
  var aiToast = document.getElementById('ai-toast');
  var aiToastIcon = document.getElementById('ai-toast-icon');
  var aiToastMsg = document.getElementById('ai-toast-msg');
  var voiceStatusText = document.getElementById('voice-text');

  var canvasCtx = canvasElement.getContext('2d');
  var cameraActive = false;
  
  // Variables Gestos
  var handsInstance = null;
  var stream = null;
  var cursorX = 0, cursorY = 0;
  var pinchCooldown = false;
  var scrollCooldown = false;

  // Variables Voz
  var recognition = null;
  var isListening = false;

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  RUTAS DE COMANDOS DE VOZ
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  const voiceCommands = {
    'inicio': '/',
    'hogar': '/',
    'home': '/',
    'acerca': '/about',
    'sobre mi': '/about',
    'trabajo': '/work',
    'proyectos': '/work',
    'servicios': '/services',
    'tienda': '/shop',
    'comercio': '/shop'
  };

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  INICIALIZACI\xD3N
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  
  aiBtn.addEventListener('click', function() {
    if (cameraActive) {
      stopAI();
    } else {
      startAI();
    }
  });

  function showToast(msg, icon = '\u2139\uFE0F', duration = 3000) {
    aiToastMsg.textContent = msg;
    aiToastIcon.textContent = icon;
    aiToast.classList.remove('hidden');
    
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      aiToast.classList.add('hidden');
    }, duration);
  }

  async function startAI() {
    aiBtnText.textContent = 'Iniciando IA...';
    aiBtn.classList.add('active');
    
    try {
      // 1. Iniciar Web Speech API
      initVoiceControl();
      
      // 2. Iniciar C\xE1mara para Gestos
      stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      videoElement.srcObject = stream;
      
      videoElement.onloadedmetadata = () => {
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        
        initMediaPipe();
        webcamBox.classList.remove('hidden');
        cameraActive = true;
        aiBtnText.textContent = 'IA Encendida';
        showToast('Gestos y Voz Activados', '\u{1F7E2}');
        
        // Loop de renderizado
        function renderLoop() {
          if (cameraActive) {
            if (handsInstance) {
              handsInstance.send({image: videoElement});
            }
            requestAnimationFrame(renderLoop);
          }
        }
        renderLoop();
      };

    } catch (err) {
      console.error(err);
      aiBtnText.textContent = 'IA Apagada';
      aiBtn.classList.remove('active');
      showToast('Error de permisos. Permite c\xE1mara y micr\xF3fono.', '\u274C', 5000);
    }
  }

  function stopAI() {
    cameraActive = false;
    
    // Detener C\xE1mara
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    webcamBox.classList.add('hidden');
    virtualCursor.style.display = 'none';
    
    // Detener Voz
    if (recognition && isListening) {
      recognition.stop();
      isListening = false;
    }
    
    aiBtnText.textContent = 'IA Apagada';
    aiBtn.classList.remove('active');
    showToast('IA Desactivada', '\u{1F534}');
  }

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  CONTROL DE VOZ
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  function initVoiceControl() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech API no soportada en este navegador.");
      voiceStatusText.textContent = "\u{1F399}\uFE0F Voz no soportada";
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // O es-CO
    recognition.continuous = true;
    recognition.interimResults = false;
    
    recognition.onstart = function() {
      isListening = true;
      voiceStatusText.textContent = "Escuchando...";
    };

    recognition.onresult = function(event) {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.toLowerCase().trim();
      
      console.log("[Voz] Escuch\xE9:", transcript);
      
      // Buscar comandos
      let foundCommand = false;
      for (const [keyword, path] of Object.entries(voiceCommands)) {
        if (transcript.includes(keyword) || transcript.includes(\`ir a \${keyword}\`) || transcript.includes(\`entrar a \${keyword}\`)) {
          foundCommand = true;
          showToast(\`Navegando a \${keyword}...\`, '\u{1F5E3}\uFE0F');
          setTimeout(() => {
             window.location.href = path; // Usar Astro routing default
          }, 800);
          break;
        }
      }
      
      if (!foundCommand) {
        showToast(\`Escuch\xE9: "\${transcript}"\`, '\u{1F442}', 2000);
      }
    };

    recognition.onerror = function(event) {
      console.error("[Voz] Error:", event.error);
      if (event.error === 'not-allowed') {
        showToast("Permiso de micr\xF3fono denegado", "\u{1F6AB}");
      }
    };

    recognition.onend = function() {
      if (cameraActive) {
        // Reiniciar si se cort\xF3 pero la IA sigue activa
        try { recognition.start(); } catch(e){}
      } else {
        isListening = false;
      }
    };

    try {
      recognition.start();
    } catch(e) {}
  }

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  GESTOS (MediaPipe)
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  function initMediaPipe() {
    if (typeof Hands === 'undefined') {
      setTimeout(initMediaPipe, 500); // Re-intentar si no ha cargado el CDN
      return;
    }

    if (handsInstance) return; // ya existe

    handsInstance = new Hands({locateFile: (file) => \`https://cdn.jsdelivr.net/npm/@mediapipe/hands/\${file}\`});
    handsInstance.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.65,
      minTrackingConfidence: 0.65
    });

    handsInstance.onResults(onHandResults);
  }

  function onHandResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      virtualCursor.style.display = 'block';
      
      var landmarks = results.multiHandLandmarks[0];
      
      // Dibujar landmarks b\xE1sicos (opcional, para feedback visual en la camarita)
      for (let i = 0; i < landmarks.length; i++) {
        let x = landmarks[i].x * canvasElement.width;
        let y = landmarks[i].y * canvasElement.height;
        canvasCtx.beginPath();
        canvasCtx.arc(x, y, 3, 0, 2 * Math.PI);
        canvasCtx.fillStyle = '#D4AF37';
        canvasCtx.fill();
      }

      var indexTip = landmarks[8];
      
      // Espejo del X para que coincida con el movimiento real del usuario
      var normX = 1 - indexTip.x;
      var normY = indexTip.y;

      // Mapear a toda la ventana (Viewport)
      cursorX = normX * window.innerWidth;
      cursorY = normY * window.innerHeight;

      // Limitar coordenadas
      cursorX = Math.max(0, Math.min(window.innerWidth, cursorX));
      cursorY = Math.max(0, Math.min(window.innerHeight, cursorY));

      virtualCursor.style.left = cursorX + 'px';
      virtualCursor.style.top = cursorY + 'px';

      var gesture = detectGesture(landmarks);
      executeGlobalGesture(gesture);
    } else {
      virtualCursor.style.display = 'none';
    }
    canvasCtx.restore();
  }

  function detectGesture(landmarks) {
    var thumbTip = landmarks[4];
    var indexTip = landmarks[8];
    var middleTip = landmarks[12];
    var ringTip = landmarks[16];
    var pinkyTip = landmarks[20];
    var thumbIp = landmarks[3];
    var indexPip = landmarks[6];
    var middlePip = landmarks[10];
    var ringPip = landmarks[14];
    var pinkyPip = landmarks[18];
    var wrist = landmarks[0];

    var pinchDist = dist3d(thumbTip, indexTip);
    
    var indexUp = indexTip.y < indexPip.y;
    var middleUp = middleTip.y < middlePip.y;
    var ringUp = ringTip.y < ringPip.y;
    var pinkyUp = pinkyTip.y < pinkyPip.y;
    var thumbUp = Math.abs(thumbTip.x - wrist.x) > Math.abs(thumbIp.x - wrist.x);

    var fingersUp = (indexUp ? 1 : 0) + (middleUp ? 1 : 0) + (ringUp ? 1 : 0) + (pinkyUp ? 1 : 0) + (thumbUp ? 1 : 0);

    if (pinchDist < 0.05) return 'pinch';
    if (indexUp && middleUp && !ringUp && !pinkyUp) return 'peace';
    if (fingersUp >= 4) return 'open';
    if (fingersUp <= 1 && !indexUp) return 'fist';
    if (indexUp && !middleUp && !ringUp && !pinkyUp) return 'point';
    
    return 'none';
  }

  function dist3d(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dz = (a.z || 0) - (b.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function executeGlobalGesture(gesture) {
    switch (gesture) {
      case 'pinch':
        if (!pinchCooldown) {
          pinchCooldown = true;
          virtualCursor.classList.add('clicking');
          setTimeout(() => virtualCursor.classList.remove('clicking'), 300);
          performGlobalClick(cursorX, cursorY);
          setTimeout(() => pinchCooldown = false, 800);
        }
        break;
        
      case 'open':
        // Scroll Up r\xE1pido
        if (!scrollCooldown) {
          window.scrollBy({ top: -50, behavior: 'auto' });
        }
        break;
        
      case 'fist':
        // Scroll Down r\xE1pido
        if (!scrollCooldown) {
          window.scrollBy({ top: 50, behavior: 'auto' });
        }
        break;
    }
  }

  function performGlobalClick(x, y) {
    // Esconder cursor temporalmente
    var prev = virtualCursor.style.visibility;
    virtualCursor.style.visibility = 'hidden';
    var el = document.elementFromPoint(x, y);
    virtualCursor.style.visibility = prev;

    if (!el) return;

    createClickRipple(x, y);

    // Enviar evento click real si posible
    var link = el.closest('a[href]');
    if (link) {
      if (link.target === '_blank') {
        var newWin = window.open(link.href, '_blank');
        if (!newWin) window.location.href = link.href;
      } else {
        window.location.href = link.href;
      }
      return;
    }

    var button = el.closest('button');
    if (button) {
      button.click();
      return;
    }
    
    // Si es otro interactivo
    el.click();
  }

  function createClickRipple(x, y) {
    var ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

})();
<\/script>`], ["", `<div id="global-ai-controls" class="global-ai-container" data-astro-transition-persist="global-ai" data-astro-cid-sq3iaajl> <!-- Bot\xF3n Global Flotante para encender/apagar IA --> <button id="global-ai-btn" class="ai-toggle-btn" type="button" title="Activar IA (Gestos y Voz)" data-astro-cid-sq3iaajl> <span class="ai-icon" data-astro-cid-sq3iaajl>\u{1F916}</span> <span class="ai-text" data-astro-cid-sq3iaajl>IA Apagada</span> </button> <!-- Contenedor de la Webcam y Canvas de Gestos (Oculto por defecto) --> <div id="global-webcam-container" class="webcam-box hidden" data-astro-cid-sq3iaajl> <video id="global-webcam-feed" autoplay playsinline data-astro-cid-sq3iaajl></video> <canvas id="global-webcam-canvas" data-astro-cid-sq3iaajl></canvas> <div class="voice-status" id="voice-status" data-astro-cid-sq3iaajl> <span class="mic-icon" data-astro-cid-sq3iaajl>\u{1F399}\uFE0F</span> <span id="voice-text" data-astro-cid-sq3iaajl>Escuchando comandos...</span> </div> </div> <!-- Virtual Cursor Global --> <div class="virtual-cursor" id="global-virtual-cursor" data-astro-cid-sq3iaajl> <div class="cursor-ring" data-astro-cid-sq3iaajl></div> <div class="cursor-dot" data-astro-cid-sq3iaajl></div> </div> <!-- Hidden link for bypass popup blocker navigation --> <a id="global-gesture-nav-link" href="#" target="_blank" rel="noopener noreferrer" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;z-index:-1;" data-astro-cid-sq3iaajl></a> <!-- Toast Notificaciones IA (Voice / Gestures) --> <div id="ai-toast" class="ai-toast hidden" data-astro-cid-sq3iaajl> <span id="ai-toast-icon" data-astro-cid-sq3iaajl>\u2139\uFE0F</span> <span id="ai-toast-msg" data-astro-cid-sq3iaajl>Mensaje</span> </div> </div>  <!-- Script global de IA que maneja Gestos y Voz --> <!-- Nota: Usamos is:inline para evitar que Astro lo reinicie al hacer ViewTransitions. El componente persistir\xE1. --> <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" crossorigin="anonymous"><\/script> <script>
(function() {
  'use strict';
  
  // Prevenir inicializaci\xF3n m\xFAltiple si ViewTransitions hace algo raro
  if (window.GlobalAIInitialized) return;
  window.GlobalAIInitialized = true;

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  ELEMENTOS DEL DOM
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  var aiBtn = document.getElementById('global-ai-btn');
  var aiBtnText = aiBtn.querySelector('.ai-text');
  var webcamBox = document.getElementById('global-webcam-container');
  var videoElement = document.getElementById('global-webcam-feed');
  var canvasElement = document.getElementById('global-webcam-canvas');
  var virtualCursor = document.getElementById('global-virtual-cursor');
  var aiToast = document.getElementById('ai-toast');
  var aiToastIcon = document.getElementById('ai-toast-icon');
  var aiToastMsg = document.getElementById('ai-toast-msg');
  var voiceStatusText = document.getElementById('voice-text');

  var canvasCtx = canvasElement.getContext('2d');
  var cameraActive = false;
  
  // Variables Gestos
  var handsInstance = null;
  var stream = null;
  var cursorX = 0, cursorY = 0;
  var pinchCooldown = false;
  var scrollCooldown = false;

  // Variables Voz
  var recognition = null;
  var isListening = false;

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  RUTAS DE COMANDOS DE VOZ
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  const voiceCommands = {
    'inicio': '/',
    'hogar': '/',
    'home': '/',
    'acerca': '/about',
    'sobre mi': '/about',
    'trabajo': '/work',
    'proyectos': '/work',
    'servicios': '/services',
    'tienda': '/shop',
    'comercio': '/shop'
  };

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  INICIALIZACI\xD3N
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  
  aiBtn.addEventListener('click', function() {
    if (cameraActive) {
      stopAI();
    } else {
      startAI();
    }
  });

  function showToast(msg, icon = '\u2139\uFE0F', duration = 3000) {
    aiToastMsg.textContent = msg;
    aiToastIcon.textContent = icon;
    aiToast.classList.remove('hidden');
    
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      aiToast.classList.add('hidden');
    }, duration);
  }

  async function startAI() {
    aiBtnText.textContent = 'Iniciando IA...';
    aiBtn.classList.add('active');
    
    try {
      // 1. Iniciar Web Speech API
      initVoiceControl();
      
      // 2. Iniciar C\xE1mara para Gestos
      stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      videoElement.srcObject = stream;
      
      videoElement.onloadedmetadata = () => {
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        
        initMediaPipe();
        webcamBox.classList.remove('hidden');
        cameraActive = true;
        aiBtnText.textContent = 'IA Encendida';
        showToast('Gestos y Voz Activados', '\u{1F7E2}');
        
        // Loop de renderizado
        function renderLoop() {
          if (cameraActive) {
            if (handsInstance) {
              handsInstance.send({image: videoElement});
            }
            requestAnimationFrame(renderLoop);
          }
        }
        renderLoop();
      };

    } catch (err) {
      console.error(err);
      aiBtnText.textContent = 'IA Apagada';
      aiBtn.classList.remove('active');
      showToast('Error de permisos. Permite c\xE1mara y micr\xF3fono.', '\u274C', 5000);
    }
  }

  function stopAI() {
    cameraActive = false;
    
    // Detener C\xE1mara
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    webcamBox.classList.add('hidden');
    virtualCursor.style.display = 'none';
    
    // Detener Voz
    if (recognition && isListening) {
      recognition.stop();
      isListening = false;
    }
    
    aiBtnText.textContent = 'IA Apagada';
    aiBtn.classList.remove('active');
    showToast('IA Desactivada', '\u{1F534}');
  }

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  CONTROL DE VOZ
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  function initVoiceControl() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech API no soportada en este navegador.");
      voiceStatusText.textContent = "\u{1F399}\uFE0F Voz no soportada";
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // O es-CO
    recognition.continuous = true;
    recognition.interimResults = false;
    
    recognition.onstart = function() {
      isListening = true;
      voiceStatusText.textContent = "Escuchando...";
    };

    recognition.onresult = function(event) {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript.toLowerCase().trim();
      
      console.log("[Voz] Escuch\xE9:", transcript);
      
      // Buscar comandos
      let foundCommand = false;
      for (const [keyword, path] of Object.entries(voiceCommands)) {
        if (transcript.includes(keyword) || transcript.includes(\\\`ir a \\\${keyword}\\\`) || transcript.includes(\\\`entrar a \\\${keyword}\\\`)) {
          foundCommand = true;
          showToast(\\\`Navegando a \\\${keyword}...\\\`, '\u{1F5E3}\uFE0F');
          setTimeout(() => {
             window.location.href = path; // Usar Astro routing default
          }, 800);
          break;
        }
      }
      
      if (!foundCommand) {
        showToast(\\\`Escuch\xE9: "\\\${transcript}"\\\`, '\u{1F442}', 2000);
      }
    };

    recognition.onerror = function(event) {
      console.error("[Voz] Error:", event.error);
      if (event.error === 'not-allowed') {
        showToast("Permiso de micr\xF3fono denegado", "\u{1F6AB}");
      }
    };

    recognition.onend = function() {
      if (cameraActive) {
        // Reiniciar si se cort\xF3 pero la IA sigue activa
        try { recognition.start(); } catch(e){}
      } else {
        isListening = false;
      }
    };

    try {
      recognition.start();
    } catch(e) {}
  }

  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  //  GESTOS (MediaPipe)
  // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
  function initMediaPipe() {
    if (typeof Hands === 'undefined') {
      setTimeout(initMediaPipe, 500); // Re-intentar si no ha cargado el CDN
      return;
    }

    if (handsInstance) return; // ya existe

    handsInstance = new Hands({locateFile: (file) => \\\`https://cdn.jsdelivr.net/npm/@mediapipe/hands/\\\${file}\\\`});
    handsInstance.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.65,
      minTrackingConfidence: 0.65
    });

    handsInstance.onResults(onHandResults);
  }

  function onHandResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      virtualCursor.style.display = 'block';
      
      var landmarks = results.multiHandLandmarks[0];
      
      // Dibujar landmarks b\xE1sicos (opcional, para feedback visual en la camarita)
      for (let i = 0; i < landmarks.length; i++) {
        let x = landmarks[i].x * canvasElement.width;
        let y = landmarks[i].y * canvasElement.height;
        canvasCtx.beginPath();
        canvasCtx.arc(x, y, 3, 0, 2 * Math.PI);
        canvasCtx.fillStyle = '#D4AF37';
        canvasCtx.fill();
      }

      var indexTip = landmarks[8];
      
      // Espejo del X para que coincida con el movimiento real del usuario
      var normX = 1 - indexTip.x;
      var normY = indexTip.y;

      // Mapear a toda la ventana (Viewport)
      cursorX = normX * window.innerWidth;
      cursorY = normY * window.innerHeight;

      // Limitar coordenadas
      cursorX = Math.max(0, Math.min(window.innerWidth, cursorX));
      cursorY = Math.max(0, Math.min(window.innerHeight, cursorY));

      virtualCursor.style.left = cursorX + 'px';
      virtualCursor.style.top = cursorY + 'px';

      var gesture = detectGesture(landmarks);
      executeGlobalGesture(gesture);
    } else {
      virtualCursor.style.display = 'none';
    }
    canvasCtx.restore();
  }

  function detectGesture(landmarks) {
    var thumbTip = landmarks[4];
    var indexTip = landmarks[8];
    var middleTip = landmarks[12];
    var ringTip = landmarks[16];
    var pinkyTip = landmarks[20];
    var thumbIp = landmarks[3];
    var indexPip = landmarks[6];
    var middlePip = landmarks[10];
    var ringPip = landmarks[14];
    var pinkyPip = landmarks[18];
    var wrist = landmarks[0];

    var pinchDist = dist3d(thumbTip, indexTip);
    
    var indexUp = indexTip.y < indexPip.y;
    var middleUp = middleTip.y < middlePip.y;
    var ringUp = ringTip.y < ringPip.y;
    var pinkyUp = pinkyTip.y < pinkyPip.y;
    var thumbUp = Math.abs(thumbTip.x - wrist.x) > Math.abs(thumbIp.x - wrist.x);

    var fingersUp = (indexUp ? 1 : 0) + (middleUp ? 1 : 0) + (ringUp ? 1 : 0) + (pinkyUp ? 1 : 0) + (thumbUp ? 1 : 0);

    if (pinchDist < 0.05) return 'pinch';
    if (indexUp && middleUp && !ringUp && !pinkyUp) return 'peace';
    if (fingersUp >= 4) return 'open';
    if (fingersUp <= 1 && !indexUp) return 'fist';
    if (indexUp && !middleUp && !ringUp && !pinkyUp) return 'point';
    
    return 'none';
  }

  function dist3d(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var dz = (a.z || 0) - (b.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function executeGlobalGesture(gesture) {
    switch (gesture) {
      case 'pinch':
        if (!pinchCooldown) {
          pinchCooldown = true;
          virtualCursor.classList.add('clicking');
          setTimeout(() => virtualCursor.classList.remove('clicking'), 300);
          performGlobalClick(cursorX, cursorY);
          setTimeout(() => pinchCooldown = false, 800);
        }
        break;
        
      case 'open':
        // Scroll Up r\xE1pido
        if (!scrollCooldown) {
          window.scrollBy({ top: -50, behavior: 'auto' });
        }
        break;
        
      case 'fist':
        // Scroll Down r\xE1pido
        if (!scrollCooldown) {
          window.scrollBy({ top: 50, behavior: 'auto' });
        }
        break;
    }
  }

  function performGlobalClick(x, y) {
    // Esconder cursor temporalmente
    var prev = virtualCursor.style.visibility;
    virtualCursor.style.visibility = 'hidden';
    var el = document.elementFromPoint(x, y);
    virtualCursor.style.visibility = prev;

    if (!el) return;

    createClickRipple(x, y);

    // Enviar evento click real si posible
    var link = el.closest('a[href]');
    if (link) {
      if (link.target === '_blank') {
        var newWin = window.open(link.href, '_blank');
        if (!newWin) window.location.href = link.href;
      } else {
        window.location.href = link.href;
      }
      return;
    }

    var button = el.closest('button');
    if (button) {
      button.click();
      return;
    }
    
    // Si es otro interactivo
    el.click();
  }

  function createClickRipple(x, y) {
    var ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

})();
<\/script>`])), maybeRenderHead());
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/GlobalControls.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://mateo-ferrer.pages.dev/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, robots, keywords, image } = Astro2.props;
  const { pathname } = Astro2.url;
  const isHome = pathname === "/" || pathname === "";
  const isWork = pathname.startsWith("/work");
  const isAbout = pathname.startsWith("/about");
  const isShop = pathname.startsWith("/shop");
  const shouldStack = isHome || isWork || isAbout || isShop;
  const chatWidgetClass = shouldStack ? "relative flex flex-col items-end gap-4 pointer-events-auto" : void 0;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="theme-dark" data-astro-cid-37fxchfa> <head>', "<!-- Google Tag Manager -->", "<!-- Google analytics code -->", "", '<script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@graph": [\n					{\n						"@type": "Person",\n						"name": "Mateo Ferrer",\n						"url": "https://mateoferrer.com",\n						"image": "https://mateoferrer.com/assets/portrait.jpg",\n						"sameAs": [\n							"https://twitter.com/mateoferrer66",\n							"https://github.com/Mateoferrer66",\n							"https://www.linkedin.com/in/mateo-ferrer-a679a713a/"\n						],\n						"jobTitle": "Desarrollador Web & Emprendedor",\n						"worksFor": {\n							"@type": "Organization",\n							"name": "Freelance"\n						}\n					},\n					{\n						"@type": "ProfessionalService",\n						"name": "Mateo Ferrer - Servicios Digitales",\n						"url": "https://mateo-ferrer.pages.dev/",\n						"image": "https://mateo-ferrer.pages.dev/assets/og-image.jpg",\n						"description": "Desarrollo de sitios web, aplicaciones y venta de recursos digitales.",\n						"address": {\n							"@type": "PostalAddress",\n							"addressCountry": "CO"\n						},\n						"priceRange": "$$"\n					}\n				]\n			}\n		<\/script>', "", "", "</head> <body data-astro-cid-37fxchfa> ", ' <div id="scroll-progress" data-astro-cid-37fxchfa></div> <div class="backgrounds-wrapper" data-astro-cid-37fxchfa> <!-- Dark Mode Background (Default) --> <img src="/assets/backgrounds/bg-main-dark-800w.jpg" srcset="/assets/backgrounds/bg-main-dark-800w.jpg 800w, /assets/backgrounds/bg-main-dark-1440w.jpg 1440w" sizes="100vw" alt="" class="bg-img bg-dark" fetchpriority="high" data-astro-cid-37fxchfa> <!-- Light Mode Background --> <img src="/assets/backgrounds/bg-main-light-800w.jpg" srcset="/assets/backgrounds/bg-main-light-800w.jpg 800w, /assets/backgrounds/bg-main-light-1440w.jpg 1440w" sizes="100vw" alt="" class="bg-img bg-light" data-astro-cid-37fxchfa> </div> ', ' <div class="stack gap-20 backgrounds" data-astro-cid-37fxchfa> ', " ", " ", ' </div> <div id="floating-buttons"', " data-astro-cid-37fxchfa> ", " ", " </div> ", " ", " ", " <!-- Global AI Controls (Voz y Gestos) --> ", " <!-- Gesture Control Bridge: listens for postMessage commands from the gesture controller --> ", "   </body> </html>"])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "robots": robots, "keywords": keywords, "image": image, "data-astro-cid-37fxchfa": true }), renderComponent($$result, "FAQSchema", $$FAQSchema, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "GoogleTagManagerNoScript", $$GoogleTagManagerNoScript, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "ThreeDBackground", ThreeDBackground, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ThreeDBackground", "client:component-export": "default", "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), addAttribute([{ stacked: shouldStack }], "class:list"), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "ChatWidget", ChatWidget, { "client:load": true, "className": chatWidgetClass, "client:component-hydration": "load", "client:component-path": "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ChatWidget", "client:component-export": "default", "data-astro-cid-37fxchfa": true }), renderComponent($$result, "ScrollReveal", $$ScrollReveal, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "ScrollToTop", $$ScrollToTop, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "MagicCursor", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-37fxchfa": true, "client:component-path": "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/MagicCursor", "client:component-export": "default" }), renderComponent($$result, "GlobalControls", $$GlobalControls, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<script src="/gesture-bridge.js"><\/script>`)}` }));
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/layouts/BaseLayout.astro", void 0);

const $$AnimatedBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="animated-bg" data-astro-cid-5a2bynky> <div class="shape shape-1" data-astro-cid-5a2bynky></div> <div class="shape shape-2" data-astro-cid-5a2bynky></div> <div class="shape shape-3" data-astro-cid-5a2bynky></div> </div> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/AnimatedBackground.astro", void 0);

const $$Astro = createAstro("https://mateo-ferrer.pages.dev/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="stack gap-2" data-astro-cid-bbe6dxrz> <h1 class="title typewriter" data-astro-cid-bbe6dxrz>${title}</h1> ${tagline && renderTemplate`<p class="tagline" data-astro-cid-bbe6dxrz>${tagline}</p>`} </div> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "AnimatedBackground", $$AnimatedBackground, { "data-astro-cid-bbe6dxrz": true })} </div>  `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Hero.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found", "robots": "noindex" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/404.astro", void 0);

const $$file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, _404 as _, $$BaseLayout as a, $$Hero as b };
