import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>Trust and professionalism were the key requirements for Nexus Law. The site combines elegant design with robust functionality.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Client Portal</strong>: Secure file sharing and case status updates.</li>\n<li><strong>Blog &#x26; News</strong>: CMS for publishing legal insights.</li>\n<li><strong>Appointment Booking</strong>: Integrated with outlook calendars.</li>\n<li><strong>Accessibility</strong>: Fully WCAG 2.1 AA compliant.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>CMS</strong>: WordPress (Custom Theme)</li>\n<li><strong>Frontend</strong>: PHP, jQuery, SASS</li>\n<li><strong>Security</strong>: 2FA, SSL, Firewall</li>\n</ul>";

				const frontmatter = {"title":"Nexus Law Firm","publishDate":"2023-09-10T00:00:00.000Z","img":"/assets/shop-digital-contracts.jpg","img_alt":"Law firm branding","description":"A prestigious corporate website for a top-tier law firm, featuring a secure client portal and automated consultation scheduling.\n","tags":["Client Work","Corporate","Web","CMS"],"category":"client-work"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/nexus-law.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nTrust and professionalism were the key requirements for Nexus Law. The site combines elegant design with robust functionality.\r\n\r\n## Key Features\r\n\r\n- **Client Portal**: Secure file sharing and case status updates.\r\n- **Blog & News**: CMS for publishing legal insights.\r\n- **Appointment Booking**: Integrated with outlook calendars.\r\n- **Accessibility**: Fully WCAG 2.1 AA compliant.\r\n\r\n## Technologies Used\r\n\r\n- **CMS**: WordPress (Custom Theme)\r\n- **Frontend**: PHP, jQuery, SASS\r\n- **Security**: 2FA, SSL, Firewall\r\n\r\n\r\n";
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
