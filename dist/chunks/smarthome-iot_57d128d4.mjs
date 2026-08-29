import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Frustrated by having ten different apps for my lightbulbs, plugs, and sensors, I built this unified dashboard.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Protocol Agnostic</strong>: Supports Zigbee, Z-Wave, and Wi-Fi devices.</li>\n<li><strong>Local Control</strong>: No cloud dependency; everything runs on a Raspberry Pi.</li>\n<li><strong>Automation Engine</strong>: Node-based editor for creating complex rules.</li>\n<li><strong>Energy Monitoring</strong>: Real-time vizualization of power consumption.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: React, D3.js</li>\n<li><strong>Backend</strong>: Node.js, MQTT</li>\n<li><strong>Hardware</strong>: Raspberry Pi 4, Zigbee2MQTT</li>\n</ul>";

				const frontmatter = {"title":"SmartHome IoT Hub","publishDate":"2024-06-10T00:00:00.000Z","img":"/assets/shop-3d-home.png","img_alt":"3D printed home model with smart sensors","description":"A personal project to centralize control of various smart home devices into a single, privacy-focused dashboard.\n","tags":["IoT","Personal","React","Node.js"],"category":"personal"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/smarthome-iot.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nFrustrated by having ten different apps for my lightbulbs, plugs, and sensors, I built this unified dashboard.\r\n\r\n## Key Features\r\n\r\n- **Protocol Agnostic**: Supports Zigbee, Z-Wave, and Wi-Fi devices.\r\n- **Local Control**: No cloud dependency; everything runs on a Raspberry Pi.\r\n- **Automation Engine**: Node-based editor for creating complex rules.\r\n- **Energy Monitoring**: Real-time vizualization of power consumption.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: React, D3.js\r\n- **Backend**: Node.js, MQTT\r\n- **Hardware**: Raspberry Pi 4, Zigbee2MQTT\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"overview","text":"Overview"},{"depth":2,"slug":"key-features","text":"Key Features"},{"depth":2,"slug":"technologies-used","text":"Technologies Used"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
