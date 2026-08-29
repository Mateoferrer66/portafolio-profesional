/* empty css                           */import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, e as renderComponent } from '../astro_f095f7eb.mjs';
import { g as getCollection, a as $$Pill, b as $$CallToAction, $ as $$ContactCTA } from './__186db482.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404_750208d9.mjs';
import 'clsx';
/* empty css                           *//* empty css                           */
const $$Astro$8 = createAstro("https://mateo-ferrer.pages.dev/");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Grid.astro", void 0);

const $$Astro$7 = createAstro("https://mateo-ferrer.pages.dev/");
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${slug}`, "href")}${addAttribute(data.tags?.join(",") || "", "data-tags")} data-astro-cid-lgkm4u2a> <div class="card-img-wrap" data-astro-cid-lgkm4u2a> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" width="800" height="600" data-astro-cid-lgkm4u2a> <div class="card-overlay" data-astro-cid-lgkm4u2a></div> </div> <div class="card-content" data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> ${data.tags && data.tags.length > 0 && renderTemplate`<div class="card-tags" data-astro-cid-lgkm4u2a> ${data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="card-tag" data-astro-cid-lgkm4u2a>${tag}</span>`)} </div>`} </div> </a> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/PortfolioPreview.astro", void 0);

const $$Astro$6 = createAstro("https://mateo-ferrer.pages.dev/");
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    {
      icon: "terminal-window",
      title: "Full Stack",
      description: "Specialized in Frontend and Backend with React, Angular, Astro, Node.js, Java, Tailwind CSS and TypeScript. Scalable architectures connected to SQL/NoSQL databases and deployed to AWS, Azure & Google Cloud.",
      tags: ["React", "Node.js", "Astro", "TypeScript"]
    },
    {
      icon: "trophy",
      title: "Industry Leader",
      description: "200+ certifications from Platzi, Google, Udemy and more. Excellent communication and creative skills, self-driven innovation mindset and the ability to deliver quality results under pressure.",
      tags: ["200+ Certs", "Agile", "DevOps", "AI"]
    },
    {
      icon: "strategy",
      title: "Strategy-Minded",
      description: "I combine technical deep-dives with strategic vision. I drive campaigns for software products, design UX-first products and grow digital brands with measurable and data-driven results.",
      tags: ["Marketing", "UX", "SEO", "Analytics"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="skills-wrapper" data-astro-cid-ab4ihpzs> ${skills.map((skill) => renderTemplate`<div class="skill-card" data-astro-cid-ab4ihpzs> <div class="skill-glow" data-astro-cid-ab4ihpzs></div> <div class="skill-header" data-astro-cid-ab4ihpzs> <div class="skill-icon-wrap" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": skill.icon, "color": "var(--accent-regular)", "size": "2rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} </div> <h2 class="skill-title" data-astro-cid-ab4ihpzs>${skill.title}</h2> </div> <p class="skill-description" data-astro-cid-ab4ihpzs>${skill.description}</p> <div class="skill-tags" data-astro-cid-ab4ihpzs> ${skill.tags.map((tag) => renderTemplate`<span class="skill-tag" data-astro-cid-ab4ihpzs>${tag}</span>`)} </div> </div>`)} </section> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Skills.astro", void 0);

const $$Astro$5 = createAstro("https://mateo-ferrer.pages.dev/");
const $$StatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StatCard;
  const { number, label, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="stat reveal-stat" data-astro-cid-f47nkzfd> <div class="stat-glow" data-astro-cid-f47nkzfd></div> <div class="stat-number"${addAttribute(number, "data-value")} data-astro-cid-f47nkzfd>${number}</div> <div class="stat-label" data-astro-cid-f47nkzfd>${label}</div> ${description && renderTemplate`<div class="stat-description" data-astro-cid-f47nkzfd>${description}</div>`} </div> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/StatCard.astro", void 0);

const $$Astro$4 = createAstro("https://mateo-ferrer.pages.dev/");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, icon, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-card" data-astro-cid-uhzbvkqe> <div class="card-glow" data-astro-cid-uhzbvkqe></div> <div class="service-icon" data-astro-cid-uhzbvkqe> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "size": "2em", "data-astro-cid-uhzbvkqe": true })} </div> <h4 class="service-title" data-astro-cid-uhzbvkqe>${title}</h4> <p class="service-description" data-astro-cid-uhzbvkqe>${description}</p> <div class="card-bottom-line" data-astro-cid-uhzbvkqe></div> </div> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ServiceCard.astro", void 0);

const $$Astro$3 = createAstro("https://mateo-ferrer.pages.dev/");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { name, role, comment, image, company } = Astro2.props;
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return renderTemplate`${maybeRenderHead()}<div class="testimonial" data-astro-cid-3ba2o4vp> <div class="testimonial-glow" data-astro-cid-3ba2o4vp></div> <!-- Stars --> <div class="stars" aria-label="5 stars" data-astro-cid-3ba2o4vp> ${"\u2605".repeat(5)} </div> <blockquote class="testimonial-quote" data-astro-cid-3ba2o4vp> <span class="quote-mark" data-astro-cid-3ba2o4vp>"</span>${comment}<span class="quote-mark" data-astro-cid-3ba2o4vp>"</span> </blockquote> <div class="testimonial-author" data-astro-cid-3ba2o4vp> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="author-image" width="48" height="48" loading="lazy" data-astro-cid-3ba2o4vp>` : renderTemplate`<div class="author-avatar" data-astro-cid-3ba2o4vp>${initials}</div>`} <div class="author-info" data-astro-cid-3ba2o4vp> <div class="author-name" data-astro-cid-3ba2o4vp>${name}</div> <div class="author-role" data-astro-cid-3ba2o4vp> ${role} ${company && renderTemplate`<span class="author-company" data-astro-cid-3ba2o4vp> · ${company}</span>`} </div> </div> </div> </div> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/TestimonialCard.astro", void 0);

const $$Astro$2 = createAstro("https://mateo-ferrer.pages.dev/");
const $$TechMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TechMarquee;
  const technologies = [
    { name: "React", icon: "react-original" },
    { name: "Astro", icon: "astro-original" },
    { name: "Node.js", icon: "nodejs-plain" },
    { name: "TypeScript", icon: "typescript-plain" },
    { name: "Python", icon: "python-plain" },
    { name: "AWS", icon: "amazonwebservices-original" },
    { name: "Docker", icon: "docker-plain" },
    { name: "PostgreSQL", icon: "postgresql-plain" },
    { name: "MongoDB", icon: "mongodb-plain" },
    { name: "Git", icon: "git-plain" },
    { name: "TailwindCSS", icon: "tailwindcss-original" },
    { name: "Figma", icon: "figma-plain" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="marquee-container reveal" data-astro-cid-rnyjsqfh> <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"> <header class="section-header" data-astro-cid-rnyjsqfh> <h3 data-astro-cid-rnyjsqfh>My Tech Stack</h3> </header> <div class="marquee" data-astro-cid-rnyjsqfh> <div class="marquee-content" data-astro-cid-rnyjsqfh> ${technologies.map((tech) => renderTemplate`<div class="tech-item" data-astro-cid-rnyjsqfh> <i${addAttribute(`devicon-${tech.icon} colored`, "class")} data-astro-cid-rnyjsqfh></i> <span data-astro-cid-rnyjsqfh>${tech.name}</span> </div>`)}  ${technologies.map((tech) => renderTemplate`<div class="tech-item" aria-hidden="true" data-astro-cid-rnyjsqfh> <i${addAttribute(`devicon-${tech.icon} colored`, "class")} data-astro-cid-rnyjsqfh></i> <span data-astro-cid-rnyjsqfh>${tech.name}</span> </div>`)} </div> </div> </section> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/TechMarquee.astro", void 0);

const $$Astro$1 = createAstro("https://mateo-ferrer.pages.dev/");
const $$ExperienceTimeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceTimeline;
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Freelance & Consulting",
      period: "2022 - Present",
      description: "Leading the architecture and development of custom software solutions, scalable web platforms, and e-commerce websites for international clients. Specialized in React, Node.js, and Astro."
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - 2022",
      description: "Developed and maintained robust backend APIs and modern frontend interfaces. Implemented CI/CD pipelines and optimized database queries, reducing load times by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2018 - 2020",
      description: "Created interactive, high-performance user interfaces for various marketing campaigns and corporate websites. Worked closely with UI/UX designers to ensure pixel-perfect implementation."
    }
  ];
  const education = [
    {
      title: "Software Engineering & Dev Ops Specialist",
      company: "Platzi, Google, Udemy",
      period: "Continuous Learning",
      description: "Completed over 220 certified courses covering advanced topics in Artificial Intelligence, Cloud Computing (AWS), Advanced React Patterns, and DevOps methodologies."
    },
    {
      title: "Bachelor's in Computer Science",
      company: "Universidad Nacional",
      period: "2014 - 2018",
      description: "Core foundation in algorithms, data structures, software architecture, and systems design."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="timeline-section wrapper reveal" data-astro-cid-tpf24scq> <header class="section-header" data-astro-cid-tpf24scq> <h2 data-astro-cid-tpf24scq>Trayectoria & Experiencia</h2> <p data-astro-cid-tpf24scq>Un resumen de mi carrera profesional y educación continua.</p> </header> <div class="timeline-container" data-astro-cid-tpf24scq> <div class="timeline-column" data-astro-cid-tpf24scq> <h3 class="column-title" data-astro-cid-tpf24scq><i class="devicon-devicon-plain" data-astro-cid-tpf24scq></i> Experiencia Laboral</h3> <div class="timeline" data-astro-cid-tpf24scq> ${experiences.map((exp) => renderTemplate`<div class="timeline-item" data-astro-cid-tpf24scq> <div class="timeline-dot" data-astro-cid-tpf24scq></div> <div class="timeline-content" data-astro-cid-tpf24scq> <span class="timeline-period" data-astro-cid-tpf24scq>${exp.period}</span> <h4 data-astro-cid-tpf24scq>${exp.title}</h4> <span class="timeline-company" data-astro-cid-tpf24scq>${exp.company}</span> <p data-astro-cid-tpf24scq>${exp.description}</p> </div> </div>`)} </div> </div> <div class="timeline-column" data-astro-cid-tpf24scq> <h3 class="column-title" data-astro-cid-tpf24scq><i class="devicon-aarch64-plain" data-astro-cid-tpf24scq></i> Educación & Certificaciones</h3> <div class="timeline" data-astro-cid-tpf24scq> ${education.map((edu) => renderTemplate`<div class="timeline-item" data-astro-cid-tpf24scq> <div class="timeline-dot" data-astro-cid-tpf24scq></div> <div class="timeline-content" data-astro-cid-tpf24scq> <span class="timeline-period" data-astro-cid-tpf24scq>${edu.period}</span> <h4 data-astro-cid-tpf24scq>${edu.title}</h4> <span class="timeline-company" data-astro-cid-tpf24scq>${edu.company}</span> <p data-astro-cid-tpf24scq>${edu.description}</p> </div> </div>`)} </div> </div> </div> </section> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ExperienceTimeline.astro", void 0);

const products = [
  // Premium Apps
  {
    id: 1,
    name: "YouTube Premium",
    price: "$50.000 / Año",
    category: "apps",
    image: "/assets/app-youtube.png",
    tags: ["streaming", "video"],
    description: "Disfruta de YouTube sin anuncios, descargas y reproducción en segundo plano."
  },
  {
    id: 2,
    name: "Spotify Premium",
    price: "$50.000 / Año",
    category: "apps",
    image: "/assets/app-spotify.png",
    tags: ["music", "streaming"],
    description: "Música sin interrupciones, modo offline y la mejor calidad de sonido."
  },
  {
    id: 3,
    name: "Deezer Premium",
    price: "$50.000 / Año",
    category: "apps",
    image: "/assets/app-deezer.png",
    tags: ["music", "streaming"],
    description: "Toda tu música favorita en un solo lugar, sin límites."
  },
  {
    id: 4,
    name: "Duolingo Premium",
    price: "$50.000 / Año",
    category: "apps",
    image: "/assets/app-duolingo.png",
    tags: ["education", "languages"],
    description: "Aprende idiomas más rápido, sin anuncios y con vidas ilimitadas."
  },
  {
    id: 18,
    name: "Canva Pro",
    price: "$40.000 / Año",
    category: "apps",
    image: "/assets/app-canva.png",
    tags: ["design", "tools"],
    description: "Diseña profesionalmente con acceso ilimitado a plantillas y herramientas premium."
  },
  {
    id: 20,
    name: "Microsoft 365",
    price: "$80.000 / Año",
    category: "apps",
    image: "/assets/app-office.png",
    tags: ["productivity", "office"],
    description: "La suite de productividad más completa con Word, Excel, PowerPoint y 1TB de nube."
  },
  {
    id: 29,
    name: "Adobe Creative Cloud",
    price: "$120.000 / Año",
    category: "apps",
    image: "/assets/app-adobe.png",
    tags: ["design", "tools"],
    description: "Todas las aplicaciones creativas de Adobe: Photoshop, Illustrator, Premiere y más."
  },
  // Software (NEW)
  {
    id: 40,
    name: "Windows 11 Pro",
    price: "$45.000",
    category: "software",
    image: "/assets/app-windows.png",
    tags: ["os", "productivity"],
    description: "Licencia original para el sistema operativo más moderno y productivo."
  },
  {
    id: 41,
    name: "NordVPN (1 Año)",
    price: "$90.000",
    category: "software",
    image: "/assets/app-nordvpn.png",
    tags: ["security", "vpn"],
    description: "Navega con privacidad y seguridad. Desbloquea contenido global."
  },
  {
    id: 42,
    name: "Kaspersky Total Security",
    price: "$60.000 / Año",
    category: "software",
    image: "/assets/app-kaspersky.png",
    tags: ["security", "antivirus"],
    description: "Protección premium contra virus, malware y amenazas en línea para todos tus dispositivos."
  },
  // 3D Products
  {
    id: 5,
    name: "Artículos útiles hogar",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-home.png",
    tags: ["home", "decor"],
    description: "Soluciones impresas en 3D para organizar y mejorar tu hogar."
  },
  {
    id: 6,
    name: "Figuras Personalizadas",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-figures.png",
    tags: ["custom", "figures"],
    description: "Tus personajes favoritos o diseños propios convertidos en figuras reales."
  },
  {
    id: 7,
    name: "Artículos decoración",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-decor-new.png",
    tags: ["decor"],
    description: "Piezas decorativas únicas con texturas y formas imposibles de conseguir tradicionalmente."
  },
  {
    id: 8,
    name: "Productos salud",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-health.png",
    tags: ["health"],
    description: "Herramientas y accesorios ergonómicos para el bienestar diario."
  },
  {
    id: 21,
    name: "Lámparas Lithoplana",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-lamp.png",
    tags: ["decor", "lighting"],
    description: "Lámparas personalizadas donde la imagen aparece al encender la luz."
  },
  {
    id: 22,
    name: "Soportes Audífonos",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-stand.png",
    tags: ["accessories", "tech"],
    description: "Exhibe tus audífonos con estilo. Diseños minimalistas o temáticos."
  },
  {
    id: 23,
    name: "Macetas Geométricas",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-pot.png",
    tags: ["decor", "plants"],
    description: "Macetas modernas con diseños geométricos para tus plantas suculentas."
  },
  {
    id: 31,
    name: "Llaveros Personalizados",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-keychain.png",
    tags: ["custom", "accessories"],
    description: "Llaveros únicos con tu nombre, logo o diseño favorito."
  },
  {
    id: 32,
    name: "Maquetas Arquitectónicas",
    price: "Cotizar",
    category: "3d",
    image: "/assets/shop-3d-arch.png",
    tags: ["arch", "models"],
    description: "Modelos a escala precisos para proyectos de arquitectura y urbanismo."
  },
  // Graphic Design
  {
    id: 9,
    name: "Identidad Corporativa",
    price: "$200.000",
    category: "design",
    image: "/assets/shop-design-branding.png",
    tags: ["branding", "logo"],
    description: "Creación completa de marca: Logo, paleta de colores, tipografía y manual de uso."
  },
  {
    id: 10,
    name: "Flyers o Banners",
    price: "$30.000",
    category: "design",
    image: "/assets/shop-design-flyer.png",
    tags: ["marketing", "social"],
    description: "Diseños atractivos para promocionar tus eventos o productos en redes sociales."
  },
  {
    id: 11,
    name: "Pieza Publicitaria",
    price: "$30.000",
    category: "design",
    image: "/assets/shop-design-social.png",
    tags: ["ads"],
    description: "Creatividades optimizadas para campañas publicitarias digitales."
  },
  {
    id: 12,
    name: "Logos",
    price: "$30.000",
    category: "design",
    image: "/assets/shop-design-logo.png",
    tags: ["logo", "branding"],
    description: "Diseño de logotipos memorables y profesionales."
  },
  {
    id: 24,
    name: "Diseño UI/UX App",
    price: "Cotizar",
    category: "design",
    image: "/assets/shop-design-ui.png",
    tags: ["ui", "app"],
    description: "Diseño de interfaces intuitivas y hermosas para aplicaciones móviles y web."
  },
  {
    id: 25,
    name: "Edición de Video",
    price: "Cotizar",
    category: "design",
    image: "/assets/shop-design-video.png",
    tags: ["video", "social"],
    description: "Edición profesional para YouTube, Reels, TikTok y videos corporativos."
  },
  {
    id: 33,
    name: "Diseño de Empaques",
    price: "Cotizar",
    category: "design",
    image: "/assets/shop-design-pack.png",
    tags: ["branding", "packaging"],
    description: "Packaging creativo que destaca tu producto en el estante."
  },
  {
    id: 34,
    name: "Ilustración Digital",
    price: "Cotizar",
    category: "design",
    image: "/assets/shop-design-illu.png",
    tags: ["art", "digital"],
    description: "Ilustraciones personalizadas para libros, webs o uso personal."
  },
  // Tech Consulting
  {
    id: 13,
    name: "Desarrollo Web",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-web.png",
    tags: ["development", "web"],
    description: "Sitios web modernos, rápidos y responsivos a la medida."
  },
  {
    id: 14,
    name: "Programación",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-code.png",
    tags: ["coding", "scripts"],
    description: "Soluciones de software personalizadas, scripts y automatización."
  },
  {
    id: 15,
    name: "Soporte Técnico",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-support.png",
    tags: ["support", "hardware"],
    description: "Diagnóstico y resolución de problemas de hardware y software."
  },
  {
    id: 27,
    name: "Consultoría TI",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-consulting.png",
    tags: ["consulting", "business"],
    description: "Optimización tecnológica para empresas y negocios."
  },
  {
    id: 35,
    name: "Mantenimiento PC",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-maintenance.png",
    tags: ["hardware", "support"],
    description: "Limpieza profunda, cambio de pasta térmica y optimización del sistema."
  },
  // Education (NEW)
  {
    id: 101,
    name: "Asesorías Matemáticas",
    price: "Cotizar",
    category: "education",
    image: "/assets/shop-math.png",
    tags: ["education", "math", "tutoring"],
    description: "Clases personalizadas de matemáticas, cálculo, álgebra y estadística para todos los niveles."
  },
  {
    id: 102,
    name: "Trabajos Académicos",
    price: "Cotizar",
    category: "education",
    image: "/assets/shop-edu-coursework.png",
    tags: ["education", "homework"],
    description: "Apoyo en la realización de trabajos, ensayos y actividades académicas."
  },
  {
    id: 103,
    name: "Realización de Talleres",
    price: "Cotizar",
    category: "education",
    image: "/assets/shop-edu-workshop.png",
    tags: ["education", "workshop"],
    description: "Desarrollo completo de talleres y guías de estudio paso a paso."
  },
  {
    id: 104,
    name: "Tesis y Grados",
    price: "Cotizar",
    category: "education",
    image: "/assets/shop-edu-thesis.png",
    tags: ["education", "thesis", "research"],
    description: "Asesoría y redacción de tesis, monografías y proyectos de grado."
  },
  {
    id: 105,
    name: "Parciales Virtuales",
    price: "Cotizar",
    category: "education",
    image: "/assets/shop-edu-exam.png",
    tags: ["education", "exam"],
    description: "Acompañamiento y soporte en exámenes y evaluaciones virtuales."
  },
  // Tech Services Expansion
  {
    id: 106,
    name: "Asesorías Tecnológicas",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-consulting.png",
    tags: ["tech", "consulting"],
    description: "Consultoría experta para resolver dudas y optimizar tu uso de la tecnología."
  },
  {
    id: 107,
    name: "Creación de E-commerce",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-ecommerce.png",
    tags: ["web", "ecommerce", "business"],
    description: "Tiendas online completas con pasarelas de pago y gestión de inventario."
  },
  {
    id: 108,
    name: "Páginas Web Corporativas",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-web.png",
    tags: ["web", "business"],
    description: "Sitios web profesionales para potenciar la presencia digital de tu empresa."
  },
  {
    id: 109,
    name: "Software a la Medida",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-custom-soft.png",
    tags: ["software", "development"],
    description: "Desarrollo de aplicaciones y sistemas específicos para necesidades únicas."
  },
  {
    id: 110,
    name: "Modernización de Software",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-maintenance.png",
    tags: ["software", "legacy", "upgrade"],
    description: "Actualización y mejora de proyectos existentes a tecnologías recientes."
  },
  // Fashion/Clothing (NEW)
  {
    id: 111,
    name: "Ropa a Medida",
    price: "Cotizar",
    category: "clothing",
    image: "/assets/shop-fashion.png",
    tags: ["fashion", "custom"],
    description: "Confección de prendas al gusto y a la medida, con los materiales que elijas."
  },
  // Marketing/Design Expansion
  {
    id: 112,
    name: "Creación de Marca",
    price: "Cotizar",
    category: "marketing",
    image: "/assets/shop-design-branding.png",
    tags: ["branding", "marketing"],
    description: "Estrategia completa de branding para diferenciar y posicionar tu negocio."
  },
  {
    id: 113,
    name: "Publicidad Digital",
    price: "Cotizar",
    category: "marketing",
    image: "/assets/shop-design-social.png",
    tags: ["marketing", "ads"],
    description: "Gestión de campañas publicitarias en redes sociales y Google Ads."
  },
  // Clothing (Expanded)
  {
    id: 114,
    name: "Camiseta Developer",
    price: "$45.000",
    category: "clothing",
    image: "/assets/shop-fashion.png",
    tags: ["fashion", "clothing", "dev"],
    description: "Camiseta 100% algodón con diseños minimalistas para desarrolladores."
  },
  {
    id: 115,
    name: "Hoodie Minimalista",
    price: "$120.000",
    category: "clothing",
    image: "/assets/shop-pants.png",
    tags: ["fashion", "clothing", "winter"],
    description: "Hoodie cómodo y cálido, perfecto para largas sesiones de código."
  },
  {
    id: 116,
    name: "Gorra Tech",
    price: "$35.000",
    category: "clothing",
    image: "/assets/shop-hero.png",
    tags: ["fashion", "accessories"],
    description: "Estilo urbano con el toque tech que te identifica."
  },
  // Tech Gadgets (New)
  {
    id: 117,
    name: "Teclado Mecánico Custom",
    price: "Cotizar",
    category: "tech",
    image: "/assets/shop-tech-pc.png",
    tags: ["tech", "hardware", "gaming"],
    description: "Teclados mecánicos personalizados a tu gusto, switches y keycaps a elección."
  },
  {
    id: 118,
    name: "Mouse Ergonómico",
    price: "$150.000",
    category: "tech",
    image: "/assets/shop-tech-network.png",
    tags: ["tech", "hardware", "office"],
    description: "Diseño vertical para evitar el túnel carpiano y mejorar tu productividad."
  },
  // Design Assets (Expanded)
  {
    id: 119,
    name: "Pack de Texturas 4K",
    price: "$25.000",
    category: "design",
    image: "/assets/shop-design-pack.png",
    tags: ["design", "assets", "3d"],
    description: "Más de 100 texturas en alta resolución para tus renders y diseños."
  },
  // Digital Products (Inventory Free)
  {
    id: 201,
    name: "Notion Life OS Template",
    price: "$40.000",
    category: "templates",
    image: "/assets/shop-digital-notion.jpg",
    tags: ["productivity", "notion", "template"],
    description: "Organiza toda tu vida, proyectos y metas con este sistema operativo completo para Notion."
  },
  {
    id: 204,
    name: "Kit de Contratos para Freelancers",
    price: "$45.000",
    category: "templates",
    image: "/assets/shop-tech-consulting.png",
    tags: ["business", "legal", "freelance"],
    description: "Plantillas de contratos legales editables para proteger tu trabajo y asegurar tus pagos."
  },
  {
    id: 205,
    name: "Curso: Intro a Programación Web",
    price: "$60.000",
    category: "education",
    image: "/assets/shop-digital-course-code.jpg",
    tags: ["education", "coding", "course"],
    description: "Guía intensiva de 4 semanas para aprender HTML, CSS y JS desde cero. (Contenido Digital)"
  },
  {
    id: 206,
    name: "Plantilla CV Moderno + Portafolio",
    price: "$20.000",
    category: "templates",
    image: "/assets/shop-design-ui.png",
    tags: ["design", "career", "template"],
    description: "Destaca en tus entrevistas con esta plantilla de hoja de vida y portafolio editable."
  },
  {
    id: 207,
    name: "Pack de Iconos 3D Premium",
    price: "$30.000",
    category: "design",
    image: "/assets/shop-3d-figures.png",
    tags: ["design", "3d", "assets"],
    description: "Colección de 50+ iconos 3D en alta resolución para tus proyectos web y apps."
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mateo-ferrer.pages.dev/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  const featuredProducts = products.filter(
    (p) => [2, 40, 201].includes(Number(p.id))
  );
  const liveWebsites = [
    { name: "Coffee Lemon", url: "https://coffee-lemon-seven.vercel.app/", image: "/assets/live/coffee-lemon.jpg" },
    { name: "Esmeralds", url: "https://esmeralds.vercel.app/", image: "/assets/live/esmeralds.jpg" },
    { name: "Impcel", url: "https://impcel.vercel.app/", image: "/assets/live/impcel.jpg" },
    { name: "Juice Khaki", url: "https://juice-khaki.vercel.app/", image: "/assets/live/juice-khaki.jpg" },
    { name: "PC Master", url: "https://pc-master-chi.vercel.app/", image: "/assets/live/pc-master.jpg" },
    { name: "Radical Customs", url: "https://radical-customs.vercel.app/", image: "/assets/live/radical-customs.jpg" },
    { name: "Restaurants Coral", url: "https://restaurants-coral-two.vercel.app/", image: "/assets/live/restaurants-coral.jpg" },
    { name: "Shoes Ten", url: "https://shoes-ten-orcin.vercel.app/", image: "/assets/live/shoes-ten.jpg" },
    { name: "Catalogo Web", url: "https://catalogo-web-two.vercel.app/", image: "/assets/live/catalogo-web.jpg" },
    { name: "MG Sports", url: "https://mg-sports.vercel.app/", image: "/assets/live/mg-sports.jpg" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20 reveal" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hello, My name is Mateo Ferrer!", "tagline": "Master Software Engineer | Full Stack Developer | Dev Ops and IA Specialist | Software Enginner | +220 certified courses", "align": "center", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Software Engineer` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} E-Commerce` })} ${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "pencil-line", "size": "1.33em", "data-astro-cid-j7pv25f6": true })} Marketing` })} </div> <div class="cta-buttons" data-astro-cid-j7pv25f6> <a href="/about/" class="cta-button primary" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} View My Work
</a> <a href="https://wa.me/573005059987" target="_blank" rel="noopener noreferrer" class="cta-button secondary" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} Let's Talk
</a> <a href="/assets/HV_MATEOFERRER_2026-01.pdf" download class="cta-button secondary" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} Download
							CV
</a> </div> ` })} <img alt="Portada Mateo Ferrer" width="480" height="620" src="/assets/portrait-new.jpg" id="hero-portrait" fetchpriority="high" loading="eager" data-astro-cid-j7pv25f6> </header>  ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "TechMarquee", $$TechMarquee, { "data-astro-cid-j7pv25f6": true })} <!-- Statistics Section --> <section class="stats-section wrapper reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>By The Numbers</h2> <p data-astro-cid-j7pv25f6>A snapshot of my professional journey and impact.</p> </header> <div class="stats-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "StatCard", $$StatCard, { "number": "5+", "label": "Years of Experience", "description": "In Software Development & Design", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatCard", $$StatCard, { "number": "50+", "label": "Projects Completed", "description": "From startups to enterprises", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatCard", $$StatCard, { "number": "200+", "label": "Certifications", "description": "From Platzi, Google, Udemy & more", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StatCard", $$StatCard, { "number": "100%", "label": "Client Satisfaction", "description": "Dedicated to excellence", "data-astro-cid-j7pv25f6": true })} </div> </section>  ${renderComponent($$result2, "ExperienceTimeline", $$ExperienceTimeline, { "data-astro-cid-j7pv25f6": true })} <!-- Services Section --> <section class="services-section wrapper reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Services I Offer</h2> <p data-astro-cid-j7pv25f6>Comprehensive solutions tailored to your needs.</p> </header> <div class="services-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Full Stack Development", "icon": "code", "description": "Build scalable web applications with React, Angular, Astro, Node.js, and more.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "UI/UX Design", "icon": "pencil-line", "description": "Create beautiful, user-centric interfaces that engage and convert.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "DevOps & Cloud", "icon": "rocket-launch", "description": "Deploy and manage applications with confidence using modern DevOps practices.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "AI Integration", "icon": "trophy", "description": "Leverage artificial intelligence to enhance your business processes.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Digital Marketing", "icon": "strategy", "description": "Drive growth through strategic digital marketing and social media management.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "E-Commerce Solutions", "icon": "rocket-launch", "description": "Build robust, scalable e-commerce platforms that drive sales.", "data-astro-cid-j7pv25f6": true })} </div> </section> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Featured Projects</h2> <p data-astro-cid-j7pv25f6>
Take a look below at some of my featured work for
						clients from the past few years.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
View All Projects
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <!-- Live Web Projects Section --> <section class="section with-background bg-variant reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Live Web Experiences</h2> <p data-astro-cid-j7pv25f6>
Una colección de aplicaciones web y plataformas e-commerce diseñadas y desarrolladas para impacto en el mundo real.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${liveWebsites.map((site) => renderTemplate`<li class="web-card tilt-card" data-astro-cid-j7pv25f6> <a${addAttribute(site.url, "href")} target="_blank" rel="noopener noreferrer" class="web-link" data-astro-cid-j7pv25f6> <div class="web-image" data-astro-cid-j7pv25f6> <div class="browser-header" data-astro-cid-j7pv25f6> <span class="dot red" data-astro-cid-j7pv25f6></span> <span class="dot yellow" data-astro-cid-j7pv25f6></span> <span class="dot green" data-astro-cid-j7pv25f6></span> </div> <img${addAttribute(site.image, "src")}${addAttribute(`Screenshot of ${site.name}`, "alt")} loading="lazy" data-astro-cid-j7pv25f6> </div> <div class="web-info" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${site.name}</h3> <p class="web-url" data-astro-cid-j7pv25f6>${site.url.replace("https://", "").replace(/\/$/, "")}</p> <span class="visit-btn" data-astro-cid-j7pv25f6>Visitar Sitio ${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })}</span> </div> </a> </li>`)}` })} </div> </section> <!-- Featured Products Section (NEW) --> <section class="section with-background reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Destacados de la Tienda</h2> <p data-astro-cid-j7pv25f6>
Herramientas y recursos premium para llevar tu
						productividad al siguiente nivel.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${featuredProducts.map((product) => renderTemplate`<li class="product-card-home tilt-card" data-astro-cid-j7pv25f6> <a${addAttribute(`/shop/#product-${product.id}`, "href")} class="product-link" data-astro-cid-j7pv25f6> <div class="product-image" data-astro-cid-j7pv25f6> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} loading="lazy" data-astro-cid-j7pv25f6> <span class="price-badge" data-astro-cid-j7pv25f6> ${product.price} </span> </div> <div class="product-info" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${product.name}</h3> <p data-astro-cid-j7pv25f6> ${product.category.toUpperCase()} </p> </div> </a> </li>`)}` })} </div>  <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/shop/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Ver Tienda Completa
${renderComponent($$result3, "Icon", $$Icon, { "icon": "shopping-cart", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <!-- Testimonials Section --> <section class="testimonials-section reveal" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>What Clients Say</h2> <p data-astro-cid-j7pv25f6>
Don't just take my word for it. Here's what my clients
						have to say about working with me.
</p> </header> <div class="testimonials-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": "Sarah Johnson", "role": "CEO", "company": "TechStart Inc", "comment": "Mateo delivered an exceptional e-commerce platform that increased our sales by 150%. His professionalism and attention to detail is unmatched.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": "Carlos Rodriguez", "role": "Project Manager", "company": "Digital Solutions", "comment": "Working with Mateo was a game-changer. He transformed our outdated website into a modern, responsive platform that our customers love.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "name": "Maria Garc\xEDa", "role": "Marketing Director", "company": "Creative Agency", "comment": "Mateo's understanding of both design and development made collaboration seamless. He consistently exceeded expectations on every project.", "data-astro-cid-j7pv25f6": true })} </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Featured In</h2> <p data-astro-cid-j7pv25f6>
I have been fortunate enough to recieve praise for my
						work in several publications.
</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> <div class="marquee-container" data-astro-cid-j7pv25f6> <div class="marquee-content" data-astro-cid-j7pv25f6> ${/* Duplicate items for seamless loop */
  [...Array(10)].map((_, index) => renderTemplate`<div class="mention-card" data-astro-cid-j7pv25f6> <img${addAttribute(`/assets/mentions/${index % 5}.png`, "src")}${addAttribute(`Client ${index % 5}`, "alt")} width="150" height="75" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'" data-astro-cid-j7pv25f6> <span style="display:none; font-weight:bold; color:var(--gray-300)" data-astro-cid-j7pv25f6>
CLIENTE ${index % 5 + 1} </span> </div>`)} </div> </div> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> `, "head": async ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n		{\n			"@context": "https://schema.org",\n			"@type": "WebSite",\n			"name": "Mateo Ferrer - Desarrollador Web",\n			"url": "https://mateo-ferrer.pages.dev/",\n			"potentialAction": {\n				"@type": "SearchAction",\n				"target": "https://mateo-ferrer.pages.dev/shop/?search={search_term_string}",\n				"query-input": "required name=search_term_string"\n			}\n		}\n	<\/script>']))) })} `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/index.astro", void 0);

const $$file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i, products as p };
