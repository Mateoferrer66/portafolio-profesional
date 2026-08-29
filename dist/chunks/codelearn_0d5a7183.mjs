import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>CodeLearn makes the journey from “Hello World” to full-stack developer fun and effective. It features a browser-based IDE and a curriculum structured around building real projects.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>In-Browser IDE</strong>: Write and run code instantly without any setup.</li>\n<li><strong>Interactive Challenges</strong>: Solve bite-sized coding puzzles to reinforce concepts.</li>\n<li><strong>Pathways</strong>: Structured learning paths for Web Development, Data Science, and Mobile Apps.</li>\n<li><strong>Community Mentorship</strong>: Code reviews and Q&#x26;A with experienced developers.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: Vue.js, Nuxt.js</li>\n<li><strong>Backend</strong>: Docker containers for code execution, Node.js</li>\n<li><strong>Database</strong>: MongoDB</li>\n</ul>";

				const frontmatter = {"title":"CodeLearn","publishDate":"2024-09-10T00:00:00.000Z","img":"/assets/shop-tech-code.png","img_alt":"CodeLearn learning platform interface","description":"An interactive coding platform designed to make learning programming accessible and engaging through gamified challenges and real-time feedback.\n","tags":["Education","Web Dev","Interactive","Vue.js"]};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/codelearn.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nCodeLearn makes the journey from \"Hello World\" to full-stack developer fun and effective. It features a browser-based IDE and a curriculum structured around building real projects.\r\n\r\n## Key Features\r\n\r\n- **In-Browser IDE**: Write and run code instantly without any setup.\r\n- **Interactive Challenges**: Solve bite-sized coding puzzles to reinforce concepts.\r\n- **Pathways**: Structured learning paths for Web Development, Data Science, and Mobile Apps.\r\n- **Community Mentorship**: Code reviews and Q&A with experienced developers.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: Vue.js, Nuxt.js\r\n- **Backend**: Docker containers for code execution, Node.js\r\n- **Database**: MongoDB\r\n\r\n\r\n";
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
