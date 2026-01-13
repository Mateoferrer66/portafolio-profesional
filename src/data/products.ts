export interface Product {
    id: string | number;
    name: string;
    price: string;
    category: string;
    image: string;
    tags: string[];
    description?: string;
}

export const products: Product[] = [
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
        id: 16,
        name: "Netflix Premium",
        price: "$60.000 / Año",
        category: "apps",
        image: "/assets/app-netflix.png",
        tags: ["streaming", "video"],
        description: "Películas, series y documentales ilimitados en 4K UHD."
    },
    {
        id: 17,
        name: "Disney+ Premium",
        price: "$60.000 / Año",
        category: "apps",
        image: "/assets/app-disney.png",
        tags: ["streaming", "video"],
        description: "Las mejores historias de Disney, Pixar, Marvel, Star Wars y National Geographic."
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
        id: 19,
        name: "Amazon Prime",
        price: "$55.000 / Año",
        category: "apps",
        image: "/assets/app-amazon.png",
        tags: ["streaming", "shopping"],
        description: "Envíos rápidos y gratuitos, Prime Video y mucho más."
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
        id: 28,
        name: "HBO Max",
        price: "$45.000 / Año",
        category: "apps",
        image: "/assets/app-hbo.png",
        tags: ["streaming", "video"],
        description: "El hogar de las series y películas más icónicas de Warner Bros, DC y HBO."
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
    {
        id: 30,
        name: "Apple TV+",
        price: "$50.000 / Año",
        category: "apps",
        image: "/assets/app-apple.png",
        tags: ["streaming", "video"],
        description: "Apple Originals: series y películas exclusivas con las estrellas más grandes."
    },

    // Gaming (NEW)
    {
        id: 37,
        name: "Xbox Game Pass Ultimate",
        price: "$120.000 / Año",
        category: "gaming",
        image: "/assets/app-xbox.png",
        tags: ["gaming", "cloud"],
        description: "Accede a más de 100 juegos de alta calidad en consola, PC y la nube."
    },
    {
        id: 38,
        name: "PlayStation Plus Deluxe",
        price: "$150.000 / Año",
        category: "gaming",
        image: "/assets/app-psplus.png",
        tags: ["gaming", "console"],
        description: "Juegos mensuales, multijugador online y catálogo de clásicos."
    },
    {
        id: 39,
        name: "Nintendo Switch Online",
        price: "$70.000 / Año",
        category: "gaming",
        image: "/assets/app-nintendo.png",
        tags: ["gaming", "console"],
        description: "Juego en línea, guardado en la nube y catálogo de juegos clásicos de NES y SNES."
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
        id: 26,
        name: "Armado de PC",
        price: "Cotizar",
        category: "tech",
        image: "/assets/shop-tech-pc.png",
        tags: ["hardware", "pc"],
        description: "Asesoría y ensamblaje de computadoras gaming o de trabajo profesional."
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
    {
        id: 36,
        name: "Instalación Redes",
        price: "Cotizar",
        category: "tech",
        image: "/assets/shop-tech-network.png",
        tags: ["network", "setup"],
        description: "Diseño e instalación de redes cableadas y Wi-Fi empresariales o domésticas."
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
        id: 202,
        name: "Pack de Presets Lightroom - Urban",
        price: "$25.000",
        category: "templates",
        image: "/assets/shop-digital-presets.jpg",
        tags: ["design", "photography", "assets"],
        description: "15 Presets profesionales para darle un estilo urbano y moody a tus fotografías."
    },
    {
        id: 203,
        name: "E-book: Guía de SEO para Principiantes",
        price: "$35.000",
        category: "ebooks",
        image: "/assets/shop-digital-ebook-seo.jpg",
        tags: ["education", "seo", "marketing"],
        description: "Aprende los fundamentos del posicionamiento web y cómo rankear en Google paso a paso."
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
    },
    {
        id: 208,
        name: "Planner Digital 2026 (iPad/Tablet)",
        price: "$30.000",
        category: "templates",
        image: "/assets/shop-apps.png",
        tags: ["productivity", "planning", "digital"],
        description: "Agenda digital interactiva para GoodNotes y Notability. Planifica tu éxito."
    },
];
