import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>FitTrack Pro goes beyond counting steps. It’s a complete health companion that helps users understand the relationship between activity, nutrition, and rest.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Custom Workout Plans</strong>: dynamically generated based on user goals and available equipment.</li>\n<li><strong>Macro Tracking</strong>: Easy food logging with a massive barcode database.</li>\n<li><strong>Sleep Quality Analysis</strong>: Connects with wearables to provide deep insights into sleep stages.</li>\n<li><strong>Social Challenges</strong>: Compete with friends to stay motivated.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Mobile</strong>: Flutter (iOS &#x26; Android)</li>\n<li><strong>Backend</strong>: Firebase, Node.js</li>\n<li><strong>Wearable Integration</strong>: HealthKit, Google Fit API</li>\n</ul>";

				const frontmatter = {"title":"FitTrack Pro","publishDate":"2024-10-02T00:00:00.000Z","img":"/assets/shop-medical.png","img_alt":"FitTrack Pro mobile application interface","description":"A comprehensive fitness tracking application focused on holistic health, combining workout logging with nutrition planning and sleep analysis.\n","tags":["Mobile App","Health","Flutter","UX/UI"]};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/fittrack-pro.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nFitTrack Pro goes beyond counting steps. It's a complete health companion that helps users understand the relationship between activity, nutrition, and rest.\r\n\r\n## Key Features\r\n\r\n- **Custom Workout Plans**: dynamically generated based on user goals and available equipment.\r\n- **Macro Tracking**: Easy food logging with a massive barcode database.\r\n- **Sleep Quality Analysis**: Connects with wearables to provide deep insights into sleep stages.\r\n- **Social Challenges**: Compete with friends to stay motivated.\r\n\r\n## Technologies Used\r\n\r\n- **Mobile**: Flutter (iOS & Android)\r\n- **Backend**: Firebase, Node.js\r\n- **Wearable Integration**: HealthKit, Google Fit API\r\n\r\n\r\n";
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
