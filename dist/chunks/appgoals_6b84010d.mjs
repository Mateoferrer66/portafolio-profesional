import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_f095f7eb.mjs';
import 'clsx';

const html = "<p>“App Goals  es una innovadora aplicación que utiliza la tecnología de React para ayudarte a organizar y administrar tus tareas de manera eficiente. Con App Goals , puedes crear listas de tareas personalizadas, establecer recordatorios y realizar un seguimiento de tu progreso, todo en un solo lugar.</p>\n<p>Una de las características destacadas de App Goals  es su interfaz de usuario intuitiva y fácil de usar. Gracias a la potencia de React, la aplicación es altamente receptiva y te permite agregar, editar y eliminar tareas de forma rápida y sencilla. Además, la aplicación utiliza componentes reutilizables de React, lo que la hace altamente modular y escalable.</p>\n<p>Con App Goals , puedes crear múltiples listas de tareas para diferentes proyectos o áreas de tu vida. Puedes asignar fechas de vencimiento, establecer prioridades y agregar notas adicionales a cada tarea. Además, la aplicación te permite marcar las tareas completadas y te muestra visualmente tu progreso a medida que avanzas en tus listas.</p>\n<p>Otra característica destacada de App Goals  es su capacidad para enviar recordatorios y notificaciones. Puedes configurar alertas personalizadas para asegurarte de que nunca olvides una tarea importante. Ya sea que estés en tu computadora o en tu dispositivo móvil, TaskMaster te mantendrá al tanto de tus tareas pendientes.</p>\n<p>Además, App Goals  se integra perfectamente con otras aplicaciones y servicios populares. Puedes sincronizar tus tareas con tu calendario, compartir listas con colaboradores y exportar tus datos en diferentes formatos. La aplicación también ofrece opciones de personalización, lo que te permite adaptarla a tus preferencias y necesidades individuales.</p>\n<p>En resumen, App Goals  es una aplicación de gestión de tareas impulsada por la tecnología de React que te ayuda a mantener tus tareas organizadas y bajo control. Con su interfaz intuitiva, características avanzadas y capacidad de personalización, App Goals  es la herramienta perfecta para aumentar tu productividad y lograr tus objetivos de manera eficiente.”</p>";

				const frontmatter = {"title":"App Goals","publishDate":"2023-08-23T00:00:00.000Z","img":"/assets/app-goals-new.png","img_alt":"Aplicacion para llevar control de tareas diarias por medio de checklist","description":"Application to keep track of daily tasks by means of checklists.\n","tags":["Dev","Branding","Backend","React.Js"],"category":"client-work","featured":false};
				const file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/content/work/appgoals.md";
				const url = undefined;
				function rawContent() {
					return "\"App Goals  es una innovadora aplicación que utiliza la tecnología de React para ayudarte a organizar y administrar tus tareas de manera eficiente. Con App Goals , puedes crear listas de tareas personalizadas, establecer recordatorios y realizar un seguimiento de tu progreso, todo en un solo lugar.\r\n\r\nUna de las características destacadas de App Goals  es su interfaz de usuario intuitiva y fácil de usar. Gracias a la potencia de React, la aplicación es altamente receptiva y te permite agregar, editar y eliminar tareas de forma rápida y sencilla. Además, la aplicación utiliza componentes reutilizables de React, lo que la hace altamente modular y escalable.\r\n\r\nCon App Goals , puedes crear múltiples listas de tareas para diferentes proyectos o áreas de tu vida. Puedes asignar fechas de vencimiento, establecer prioridades y agregar notas adicionales a cada tarea. Además, la aplicación te permite marcar las tareas completadas y te muestra visualmente tu progreso a medida que avanzas en tus listas.\r\n\r\nOtra característica destacada de App Goals  es su capacidad para enviar recordatorios y notificaciones. Puedes configurar alertas personalizadas para asegurarte de que nunca olvides una tarea importante. Ya sea que estés en tu computadora o en tu dispositivo móvil, TaskMaster te mantendrá al tanto de tus tareas pendientes.\r\n\r\nAdemás, App Goals  se integra perfectamente con otras aplicaciones y servicios populares. Puedes sincronizar tus tareas con tu calendario, compartir listas con colaboradores y exportar tus datos en diferentes formatos. La aplicación también ofrece opciones de personalización, lo que te permite adaptarla a tus preferencias y necesidades individuales.\r\n\r\nEn resumen, App Goals  es una aplicación de gestión de tareas impulsada por la tecnología de React que te ayuda a mantener tus tareas organizadas y bajo control. Con su interfaz intuitiva, características avanzadas y capacidad de personalización, App Goals  es la herramienta perfecta para aumentar tu productividad y lograr tus objetivos de manera eficiente.\"\r\n";
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
