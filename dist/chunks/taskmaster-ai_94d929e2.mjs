import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>TaskMaster AI redefines project management by integrating machine learning to analyze work patterns and suggest optimal schedules.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Smart Scheduling</strong>: AI automatically blocks time for tasks based on priority and estimated effort.</li>\n<li><strong>Predictive Analytics</strong>: Estimates project completion dates with 95% accuracy.</li>\n<li><strong>Natural Language Input</strong>: Create tasks and projects simply by typing or speaking natural sentences.</li>\n<li><strong>Team Insights</strong>: Visualizes team velocity and potential burnout risks.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Frontend</strong>: React, TailwindCSS, Framer Motion</li>\n<li><strong>Backend</strong>: Python, FastAPI</li>\n<li><strong>AI Engine</strong>: TensorFlow, OpenAI API</li>\n<li><strong>Database</strong>: PostgreSQL</li>\n</ul>";

				const frontmatter = {"title":"TaskMaster","publishDate":"2024-11-15T00:00:00.000Z","img":"/assets/project-saas.png","img_alt":"Interface of TaskMaster AI dashboard","description":"An intelligent productivity platform that uses AI to organize tasks, predict deadlines, and optimize workflow efficiency.\n","tags":["AI","Productivity","SaaS","React"]};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/taskmaster-ai.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nTaskMaster AI redefines project management by integrating machine learning to analyze work patterns and suggest optimal schedules.\r\n\r\n## Key Features\r\n\r\n- **Smart Scheduling**: AI automatically blocks time for tasks based on priority and estimated effort.\r\n- **Predictive Analytics**: Estimates project completion dates with 95% accuracy.\r\n- **Natural Language Input**: Create tasks and projects simply by typing or speaking natural sentences.\r\n- **Team Insights**: Visualizes team velocity and potential burnout risks.\r\n\r\n## Technologies Used\r\n\r\n- **Frontend**: React, TailwindCSS, Framer Motion\r\n- **Backend**: Python, FastAPI\r\n- **AI Engine**: TensorFlow, OpenAI API\r\n- **Database**: PostgreSQL\r\n\r\n";
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
