import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>CryptoVault ofrece una experiencia de usuario de nivel institucional para el inversor individual. La seguridad y la estética se unen en una interfaz que inspira confianza y control total sobre los activos digitales.</p>\n<p><strong>Innovaciones:</strong></p>\n<ul>\n<li><strong>Multi-chain Support:</strong> Gestión de activos en Ethereum, Solana y Polygon.</li>\n<li><strong>Visualización 3D:</strong> Gráficos interactivos de tendencias de mercado.</li>\n<li><strong>Seguridad Biométrica:</strong> Integración con hardware keys y autenticación avanzada.</li>\n</ul>";

				const frontmatter = {"title":"CryptoVault Web3","publishDate":"2024-07-01T00:00:00.000Z","img":"/assets/work-cryptovault.png","img_alt":"Billetera Web3 futurista","description":"Interfaz de billetera digital de alta seguridad para gestión de activos criptográficos y NFTs.\n","tags":["Web3","Blockchain","Security","Dark Mode"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/cryptovault.md";
				const url = undefined;
				function rawContent() {
					return "CryptoVault ofrece una experiencia de usuario de nivel institucional para el inversor individual. La seguridad y la estética se unen en una interfaz que inspira confianza y control total sobre los activos digitales.\r\n\r\n**Innovaciones:**\r\n*   **Multi-chain Support:** Gestión de activos en Ethereum, Solana y Polygon.\r\n*   **Visualización 3D:** Gráficos interactivos de tendencias de mercado.\r\n*   **Seguridad Biométrica:** Integración con hardware keys y autenticación avanzada.\r\n\r\n\r\n";
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
