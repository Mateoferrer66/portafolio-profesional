import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<h2 id=\"overview\">Overview</h2>\n<p>DeployWizard abstracts away the complexity of Kubernetes manifests and CI/CD pipelines, allowing developers to deploy with a single command.</p>\n<h2 id=\"key-features\">Key Features</h2>\n<ul>\n<li><strong>Interactive Config</strong>: Guided setup for new services.</li>\n<li><strong>Plugin System</strong>: Extensible architecture for different cloud providers.</li>\n<li><strong>Secrets Management</strong>: Securely injects environment variables.</li>\n<li><strong>Rollback Safety</strong>: Automatic verification of health checks before traffic switch.</li>\n</ul>\n<h2 id=\"technologies-used\">Technologies Used</h2>\n<ul>\n<li><strong>Language</strong>: Go (Golang)</li>\n<li><strong>Libraries</strong>: Cobra, Viper</li>\n<li><strong>Integration</strong>: Kubernetes API, AWS SDK</li>\n</ul>";

				const frontmatter = {"title":"DeployWizard CLI","publishDate":"2024-05-05T00:00:00.000Z","img":"/assets/shop-tech-maintenance.png","img_alt":"Terminal screen showing code","description":"An open-source command-line interface tool designed to simplify and standardize deployment workflows for microservices.\n","tags":["DevOps","Open Source","Go","CLI"],"category":"personal"};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/deploywizard-cli.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Overview\r\n\r\nDeployWizard abstracts away the complexity of Kubernetes manifests and CI/CD pipelines, allowing developers to deploy with a single command.\r\n\r\n## Key Features\r\n\r\n- **Interactive Config**: Guided setup for new services.\r\n- **Plugin System**: Extensible architecture for different cloud providers.\r\n- **Secrets Management**: Securely injects environment variables.\r\n- **Rollback Safety**: Automatic verification of health checks before traffic switch.\r\n\r\n## Technologies Used\r\n\r\n- **Language**: Go (Golang)\r\n- **Libraries**: Cobra, Viper\r\n- **Integration**: Kubernetes API, AWS SDK\r\n\r\n\r\n";
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
