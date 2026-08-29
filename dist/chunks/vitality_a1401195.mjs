import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>Vitality es más que una simple aplicación de seguimiento de pasos; es un compañero integral de bienestar. Diseñada para dispositivos móviles, esta aplicación motiva a los usuarios a alcanzar sus objetivos de salud a través de una interfaz vibrante y dinámica.</p>\n<p>El uso de gradientes de color naranja y verde azulado sobre un fondo oscuro no solo crea una estética “sporty” atractiva, sino que también facilita la lectura de métricas clave durante el ejercicio. Los anillos de progreso animados proporcionan una retroalimentación visual satisfactoria al completar objetivos.</p>\n<p><strong>Funcionalidades Clave:</strong></p>\n<ul>\n<li><strong>Tracking Multideporte:</strong> Seguimiento preciso para correr, ciclismo, natación y más.</li>\n<li><strong>Monitor de Salud:</strong> Integración con sensores para ritmo cardíaco y calidad del sueño.</li>\n<li><strong>Retos Sociales:</strong> Compite con amigos y comparte tus logros.</li>\n<li><strong>Insights Personalizados:</strong> Recomendaciones basadas en tus datos de actividad.</li>\n</ul>\n<p>Este proyecto destaca la importancia de la micro-interacción y la animación en la retención del usuario en aplicaciones móviles.</p>";

				const frontmatter = {"title":"Vitality Fitness App","publishDate":"2024-04-10T00:00:00.000Z","img":"/assets/work-vitality.png","img_alt":"Interfaz de aplicación móvil de fitness","description":"Aplicación móvil para seguimiento de actividad física, salud y bienestar con métricas en tiempo real.\n","tags":["React Native","Mobile Design","Health Tech","UX Research"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/vitality.md";
				const url = undefined;
				function rawContent() {
					return "Vitality es más que una simple aplicación de seguimiento de pasos; es un compañero integral de bienestar. Diseñada para dispositivos móviles, esta aplicación motiva a los usuarios a alcanzar sus objetivos de salud a través de una interfaz vibrante y dinámica.\r\n\r\nEl uso de gradientes de color naranja y verde azulado sobre un fondo oscuro no solo crea una estética \"sporty\" atractiva, sino que también facilita la lectura de métricas clave durante el ejercicio. Los anillos de progreso animados proporcionan una retroalimentación visual satisfactoria al completar objetivos.\r\n\r\n**Funcionalidades Clave:**\r\n\r\n*   **Tracking Multideporte:** Seguimiento preciso para correr, ciclismo, natación y más.\r\n*   **Monitor de Salud:** Integración con sensores para ritmo cardíaco y calidad del sueño.\r\n*   **Retos Sociales:** Compite con amigos y comparte tus logros.\r\n*   **Insights Personalizados:** Recomendaciones basadas en tus datos de actividad.\r\n\r\nEste proyecto destaca la importancia de la micro-interacción y la animación en la retención del usuario en aplicaciones móviles.\r\n\r\n\r\n";
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
