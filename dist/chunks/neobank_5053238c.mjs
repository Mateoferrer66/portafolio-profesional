import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>NeoBank Dashboard redefine la experiencia de la banca en línea. Este proyecto se centró en la claridad, la velocidad y la seguridad, ofreciendo a los usuarios una visión completa de su salud financiera de un vistazo.</p>\n<p>Utilizando una paleta de colores limpia con acentos de verde eléctrico, cada elemento de la interfaz ha sido diseñado para transmitir confianza y modernidad. Los gráficos interactivos, impulsados por D3.js, permiten a los usuarios profundizar en sus hábitos de gasto con solo pasar el mouse.</p>\n<p><strong>Puntos destacados del desarrollo:</strong></p>\n<ul>\n<li><strong>Arquitectura modular:</strong> Componentes Vue.js altamente reutilizables.</li>\n<li><strong>Visualización de datos:</strong> Gráficos de ingresos vs. gastos dinámicos e interactivos.</li>\n<li><strong>Seguridad:</strong> Implementación de prácticas recomendadas para la protección de datos sensibles.</li>\n<li><strong>Diseño Responsivo:</strong> Perfectamente funcional en tablets y escritorio.</li>\n</ul>\n<p>Este dashboard demuestra cómo una interfaz bien diseñada puede hacer que la gestión financiera sea una tarea sencilla y hasta agradable.</p>";

				const frontmatter = {"title":"NeoBank Dashboard","publishDate":"2024-03-20T00:00:00.000Z","img":"/assets/work-neobank.png","img_alt":"Dashboard de banca digital minimalista","description":"Dashboard financiero moderno para la gestión de cuentas, transacciones y análisis de gastos.\n","tags":["Vue.js","D3.js","Fintech","Dashboard"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/neobank.md";
				const url = undefined;
				function rawContent() {
					return "NeoBank Dashboard redefine la experiencia de la banca en línea. Este proyecto se centró en la claridad, la velocidad y la seguridad, ofreciendo a los usuarios una visión completa de su salud financiera de un vistazo.\r\n\r\nUtilizando una paleta de colores limpia con acentos de verde eléctrico, cada elemento de la interfaz ha sido diseñado para transmitir confianza y modernidad. Los gráficos interactivos, impulsados por D3.js, permiten a los usuarios profundizar en sus hábitos de gasto con solo pasar el mouse.\r\n\r\n**Puntos destacados del desarrollo:**\r\n\r\n*   **Arquitectura modular:** Componentes Vue.js altamente reutilizables.\r\n*   **Visualización de datos:** Gráficos de ingresos vs. gastos dinámicos e interactivos.\r\n*   **Seguridad:** Implementación de prácticas recomendadas para la protección de datos sensibles.\r\n*   **Diseño Responsivo:** Perfectamente funcional en tablets y escritorio.\r\n\r\nEste dashboard demuestra cómo una interfaz bien diseñada puede hacer que la gestión financiera sea una tarea sencilla y hasta agradable.\r\n\r\n\r\n";
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
