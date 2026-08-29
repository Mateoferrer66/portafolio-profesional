import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Security should be proactive. NetGuard scans local networks for open ports, outdated services, and known vulnerabilities.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Port Scanning</strong>: Multi-threaded scanner for rapid discovery.</li>\n<li><strong>Service Detection</strong>: Identifies services running on open ports.</li>\n<li><strong>Report Generation</strong>: Exports detailed PDF reports.</li>\n<li><strong>Alerting</strong>: Real-time notifications for critical vulnerabilities.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Language</strong>: Python</li>\n<li><strong>Libraries</strong>: Scapy, Nmap</li>\n<li><strong>UI</strong>: Custom CLI</li>\n</ul>";

				const frontmatter = {"title":"NetGuard Security Tool","publishDate":"2023-12-05T00:00:00.000Z","img":"/assets/netguard-new.png","img_alt":"Security shield icon","description":"A network vulnerability scanner built for system administrators to identify and patch security loopholes.\n","tags":["Security","Personal","Python","Networking"],"category":"personal"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/netguard-security.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nSecurity should be proactive. NetGuard scans local networks for open ports, outdated services, and known vulnerabilities.\r\n\r\n## Key Features\r\n\r\n- **Port Scanning**: Multi-threaded scanner for rapid discovery.\r\n- **Service Detection**: Identifies services running on open ports.\r\n- **Report Generation**: Exports detailed PDF reports.\r\n- **Alerting**: Real-time notifications for critical vulnerabilities.\r\n\r\n## Technologies Used\r\n\r\n- **Language**: Python\r\n- **Libraries**: Scapy, Nmap\r\n- **UI**: Custom CLI\r\n\r\n";
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
