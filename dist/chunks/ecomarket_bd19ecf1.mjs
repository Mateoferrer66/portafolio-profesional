import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>EcoMarket conecta a consumidores conscientes con productores locales. La aplicación no solo facilita la compra de productos orgánicos, sino que educa al usuario sobre el impacto ambiental de sus elecciones.</p>\n<p><strong>Puntos Fuertes:</strong></p>\n<ul>\n<li><strong>Rastreo de Origen:</strong> Conoce la historia detrás de cada producto escaneando un QR.</li>\n<li><strong>Diseño Sostenible:</strong> UI minimalista inspirada en la naturaleza.</li>\n<li><strong>Logística Verde:</strong> Optimización de rutas de entrega para minimizar emisiones.</li>\n</ul>";

				const frontmatter = {"title":"EcoMarket App","publishDate":"2024-06-15T00:00:00.000Z","img":"/assets/work-ecomarket.png","img_alt":"App de mercado sostenible","description":"Marketplace móvil para productos orgánicos y sostenibles con huella de carbono rastreable.\n","tags":["Flutter","E-commerce","Green Tech","Mobile"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/ecomarket.md";
				const url = undefined;
				function rawContent() {
					return "EcoMarket conecta a consumidores conscientes con productores locales. La aplicación no solo facilita la compra de productos orgánicos, sino que educa al usuario sobre el impacto ambiental de sus elecciones.\r\n\r\n**Puntos Fuertes:**\r\n*   **Rastreo de Origen:** Conoce la historia detrás de cada producto escaneando un QR.\r\n*   **Diseño Sostenible:** UI minimalista inspirada en la naturaleza.\r\n*   **Logística Verde:** Optimización de rutas de entrega para minimizar emisiones.\r\n\r\n\r\n";
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
