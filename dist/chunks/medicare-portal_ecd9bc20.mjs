import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>MediCare Portal streamlines clinic operations, reducing administrative overhead and improving patient experience.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Telemedicine</strong>: Integrated video calls for remote consultations.</li>\n<li><strong>Electronic Health Records (EHR)</strong>: Secure storage of patient history.</li>\n<li><strong>Automated Reminders</strong>: SMS and Email notifications to reduce no-shows.</li>\n<li><strong>Insurance Processing</strong>: Direct integration with major insurance providers.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: React, Redux</li>\n<li><strong>Backend</strong>: .NET Core</li>\n<li><strong>Database</strong>: SQL Server</li>\n<li><strong>Security</strong>: AES-256 Encryption</li>\n</ul>";

				const frontmatter = {"title":"MediCare Portal","publishDate":"2024-03-01T00:00:00.000Z","img":"/assets/medicare-new.png","img_alt":"Medical health icons","description":"A HIPAA-compliant patient management system designed for private clinics to manage appointments, records, and billing.\n","tags":["Client Work","HealthTech","SaaS","Security"],"category":"client-work"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/medicare-portal.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nMediCare Portal streamlines clinic operations, reducing administrative overhead and improving patient experience.\r\n\r\n## Key Features\r\n\r\n- **Telemedicine**: Integrated video calls for remote consultations.\r\n- **Electronic Health Records (EHR)**: Secure storage of patient history.\r\n- **Automated Reminders**: SMS and Email notifications to reduce no-shows.\r\n- **Insurance Processing**: Direct integration with major insurance providers.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: React, Redux\r\n- **Backend**: .NET Core\r\n- **Database**: SQL Server\r\n- **Security**: AES-256 Encryption\r\n\r\n";
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
