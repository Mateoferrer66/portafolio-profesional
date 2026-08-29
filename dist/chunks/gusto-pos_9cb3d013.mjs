import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Built for a chain of Italian restaurants, Gusto POS handles the chaos of a busy kitchen with ease.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Table Layout</strong>: Drag-and-drop interface for managing floor plans.</li>\n<li><strong>Kitchen Display</strong>: Real-time order routing to specific stations (Bar, Kitchen, Pizza).</li>\n<li><strong>Inventory</strong>: Automatic ingredient deduction based on recipes.</li>\n<li><strong>Analytics</strong>: Sales reports by hour, server, and item.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: React, Socket.io</li>\n<li><strong>Backend</strong>: Node.js, Express</li>\n<li><strong>Database</strong>: PostgreSQL</li>\n</ul>";

				const frontmatter = {"title":"Gusto POS System","publishDate":"2023-10-30T00:00:00.000Z","img":"/assets/shop-tech-pc.png","img_alt":"Point of Sale system","description":"A complete Point of Sale solution for high-volume restaurants, featuring table management, kitchen display system, and inventory tracking.\n","tags":["Client Work","SaaS","Web","Real-time"],"category":"client-work"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/gusto-pos.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nBuilt for a chain of Italian restaurants, Gusto POS handles the chaos of a busy kitchen with ease.\r\n\r\n## Key Features\r\n\r\n- **Table Layout**: Drag-and-drop interface for managing floor plans.\r\n- **Kitchen Display**: Real-time order routing to specific stations (Bar, Kitchen, Pizza).\r\n- **Inventory**: Automatic ingredient deduction based on recipes.\r\n- **Analytics**: Sales reports by hour, server, and item.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: React, Socket.io\r\n- **Backend**: Node.js, Express\r\n- **Database**: PostgreSQL\r\n\r\n\r\n";
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
