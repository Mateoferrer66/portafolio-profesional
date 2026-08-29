import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>StudyFlow transforma la educación digital con una interfaz centrada en el estudiante. Este LMS permite a los profesores crear contenido dinámico y a los estudiantes seguir su progreso de manera visual y motivadora.</p>\n<p><strong>Características:</strong></p>\n<ul>\n<li><strong>Aulas Virtuales:</strong> Videoconferencias integradas con herramientas colaborativas.</li>\n<li><strong>Gamificación:</strong> Sistema de medallas y puntos para incentivar el aprendizaje.</li>\n<li><strong>Analíticas:</strong> Reportes detallados de rendimiento por estudiante y curso.</li>\n</ul>";

				const frontmatter = {"title":"StudyFlow LMS","publishDate":"2024-05-02T00:00:00.000Z","img":"/assets/work-studyflow.png","img_alt":"Plataforma educativa moderna","description":"Sistema de gestión de aprendizaje (LMS) intuitivo para instituciones educativas.\n","tags":["Next.js","Tailwind","Education","SaaS"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/studyflow.md";
				const url = undefined;
				function rawContent() {
					return "StudyFlow transforma la educación digital con una interfaz centrada en el estudiante. Este LMS permite a los profesores crear contenido dinámico y a los estudiantes seguir su progreso de manera visual y motivadora.\r\n\r\n**Características:**\r\n*   **Aulas Virtuales:** Videoconferencias integradas con herramientas colaborativas.\r\n*   **Gamificación:** Sistema de medallas y puntos para incentivar el aprendizaje.\r\n*   **Analíticas:** Reportes detallados de rendimiento por estudiante y curso.\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
