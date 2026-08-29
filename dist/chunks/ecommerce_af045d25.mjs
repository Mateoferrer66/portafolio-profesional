import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"project-overview\">Project Overview</h2>\n<p>”Matius Store” is a full-featured e-commerce platform designed to sell digital and physical products ranging from premium software subscriptions to custom 3D printed executables. The goal was to build a scalable, secure, and user-friendly marketplace that integrates seamless payment processing and automated delivery systems.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Hybrid Product Support</strong>: Uniquely architected to handle both digital downloads (instant delivery via email) and physical goods (shipping logic and tracking).</li>\n<li><strong>Payment Integration</strong>: Secure checkout flow integrated with local payment gateways (Wompi/Mercado Pago) for widely accepted payment methods.</li>\n<li><strong>Admin Dashboard</strong>: Custom CMS for managing inventory, tracking orders in real-time, and generating sales reports.</li>\n</ul>\n<h2 id=\"technical-highlights\">Technical Highlights</h2>\n<ul>\n<li><strong>Frontend</strong>: Built with Astro for blazing fast static initial loads, hydrated with React components for dynamic cart management and checkout interactivity.</li>\n<li><strong>Performance</strong>: Achieved a <strong>98/100 Lighthouse score</strong> by optimizing image delivery (WebP/AVIF) and minimizing main-thread JavaScript.</li>\n<li><strong>SEO Strategy</strong>: Implemented structured data (Schema.org) for products, resulting in rich snippets in search results and a <strong>30% increase</strong> in organic traffic.</li>\n</ul>\n<p>This project showcases my ability to deliver end-to-end commercial solutions that prioritize both user experience and business metrics.</p>";

				const frontmatter = {"title":"E-Commerce","publishDate":"2024-03-09T00:00:00.000Z","img":"/assets/project-ecommerce.png","img_alt":"Imagen del e-commerce de proyectos personales.","description":"We developed brand positioning and design assets for the launch\nproduct.\n","tags":["Design","Marketing","Personal Brand"],"category":"client-work","featured":true};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/ecommerce.md";
				const url = undefined;
				function rawContent() {
					return "## Project Overview\r\n\r\n\"Matius Store\" is a full-featured e-commerce platform designed to sell digital and physical products ranging from premium software subscriptions to custom 3D printed executables. The goal was to build a scalable, secure, and user-friendly marketplace that integrates seamless payment processing and automated delivery systems.\r\n\r\n## Key Features\r\n\r\n- **Hybrid Product Support**: Uniquely architected to handle both digital downloads (instant delivery via email) and physical goods (shipping logic and tracking).\r\n- **Payment Integration**: Secure checkout flow integrated with local payment gateways (Wompi/Mercado Pago) for widely accepted payment methods.\r\n- **Admin Dashboard**: Custom CMS for managing inventory, tracking orders in real-time, and generating sales reports.\r\n\r\n## Technical Highlights\r\n\r\n- **Frontend**: Built with Astro for blazing fast static initial loads, hydrated with React components for dynamic cart management and checkout interactivity.\r\n- **Performance**: Achieved a **98/100 Lighthouse score** by optimizing image delivery (WebP/AVIF) and minimizing main-thread JavaScript.\r\n- **SEO Strategy**: Implemented structured data (Schema.org) for products, resulting in rich snippets in search results and a **30% increase** in organic traffic.\r\n\r\nThis project showcases my ability to deliver end-to-end commercial solutions that prioritize both user experience and business metrics.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"project-overview","text":"Project Overview"},{"depth":2,"slug":"key-features","text":"Key Features"},{"depth":2,"slug":"technical-highlights","text":"Technical Highlights"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
