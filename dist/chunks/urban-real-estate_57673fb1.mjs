import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Built for a leading real estate agency, this platform focuses on high-quality visuals and lead generation.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Virtual Tours</strong>: 360-degree interactive walkthroughs of properties.</li>\n<li><strong>Map Search</strong>: Dynamic map clustering with price filters.</li>\n<li><strong>CRM Integration</strong>: Leads are automatically pushed to the agency’s Salesforce instance.</li>\n<li><strong>Agent Portal</strong>: Backend for agents to manage listings and appointments.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: Vue.js, Nuxt.js</li>\n<li><strong>Backend</strong>: Laravel API</li>\n<li><strong>Maps</strong>: Google Maps Platform</li>\n</ul>";

				const frontmatter = {"title":"Urban Real Estate","publishDate":"2024-04-12T00:00:00.000Z","img":"/assets/shop-3d-arch.png","img_alt":"Architectural 3D model","description":"A high-end property listing platform featuring virtual tours, mortgage calculators, and direct agent scheduling.\n","tags":["Client Work","Real Estate","Web","Vue.js"],"category":"client-work"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/urban-real-estate.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nBuilt for a leading real estate agency, this platform focuses on high-quality visuals and lead generation.\r\n\r\n## Key Features\r\n\r\n- **Virtual Tours**: 360-degree interactive walkthroughs of properties.\r\n- **Map Search**: Dynamic map clustering with price filters.\r\n- **CRM Integration**: Leads are automatically pushed to the agency's Salesforce instance.\r\n- **Agent Portal**: Backend for agents to manage listings and appointments.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: Vue.js, Nuxt.js\r\n- **Backend**: Laravel API\r\n- **Maps**: Google Maps Platform\r\n\r\n\r\n";
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
