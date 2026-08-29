import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Keep your travel memories alive. Wanderlust Journal allows you to save photos, notes, and locations offline.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Offline Mode</strong>: Works perfectly in remote areas.</li>\n<li><strong>Map Integration</strong>: Visual timeline of your trip on a world map.</li>\n<li><strong>Photo Gallery</strong>: Auto-organized albums by location.</li>\n<li><strong>Social Sharing</strong>: Generate beautiful shareable cards for Instagram.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Framework</strong>: React Native</li>\n<li><strong>Maps</strong>: Mapbox</li>\n<li><strong>Storage</strong>: Realm DB</li>\n</ul>";

				const frontmatter = {"title":"Wanderlust Journal","publishDate":"2023-11-15T00:00:00.000Z","img":"/assets/wanderlust-new.png","img_alt":"Travel scenery","description":"A digital diary for travelers to document their journeys, pin locations, and share stories with friends.\n","tags":["Travel","Personal","Mobile","React Native"],"category":"personal"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/wanderlust-journal.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nKeep your travel memories alive. Wanderlust Journal allows you to save photos, notes, and locations offline.\r\n\r\n## Key Features\r\n\r\n- **Offline Mode**: Works perfectly in remote areas.\r\n- **Map Integration**: Visual timeline of your trip on a world map.\r\n- **Photo Gallery**: Auto-organized albums by location.\r\n- **Social Sharing**: Generate beautiful shareable cards for Instagram.\r\n\r\n## Technologies Used\r\n\r\n- **Framework**: React Native\r\n- **Maps**: Mapbox\r\n- **Storage**: Realm DB\r\n\r\n\r\n";
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
