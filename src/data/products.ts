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

    // Software
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
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&h=600&fit=crop&q=80",
        tags: ["home", "decor"],
        description: "Soluciones impresas en 3D para organizar y mejorar tu hogar."
    },
    {
        id: 6,
        name: "Figuras Personalizadas",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=600&fit=crop&q=80",
        tags: ["custom", "figures"],
        description: "Tus personajes favoritos o diseños propios convertidos en figuras reales."
    },
    {
        id: 7,
        name: "Artículos decoración",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&h=600&fit=crop&q=80",
        tags: ["decor"],
        description: "Piezas decorativas únicas con texturas y formas imposibles de conseguir tradicionalmente."
    },
    {
        id: 8,
        name: "Productos salud",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop&q=80",
        tags: ["health"],
        description: "Herramientas y accesorios ergonómicos para el bienestar diario."
    },
    {
        id: 21,
        name: "Lámparas Lithoplana",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop&q=80",
        tags: ["decor", "lighting"],
        description: "Lámparas personalizadas donde la imagen aparece al encender la luz."
    },
    {
        id: 22,
        name: "Soportes Audífonos",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80",
        tags: ["accessories", "tech"],
        description: "Exhibe tus audífonos con estilo. Diseños minimalistas o temáticos."
    },
    {
        id: 23,
        name: "Macetas Geométricas",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop&q=80",
        tags: ["decor", "plants"],
        description: "Macetas modernas con diseños geométricos para tus plantas suculentas."
    },
    {
        id: 31,
        name: "Llaveros Personalizados",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop&q=80",
        tags: ["custom", "accessories"],
        description: "Llaveros únicos con tu nombre, logo o diseño favorito."
    },
    {
        id: 32,
        name: "Maquetas Arquitectónicas",
        price: "Cotizar",
        category: "3d",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
        tags: ["arch", "models"],
        description: "Modelos a escala precisos para proyectos de arquitectura y urbanismo."
    },

    // Graphic Design
    {
        id: 9,
        name: "Identidad Corporativa",
        price: "$200.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop&q=80",
        tags: ["branding", "logo"],
        description: "Creación completa de marca: Logo, paleta de colores, tipografía y manual de uso."
    },
    {
        id: 10,
        name: "Flyers o Banners",
        price: "$30.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop&q=80",
        tags: ["marketing", "social"],
        description: "Diseños atractivos para promocionar tus eventos o productos en redes sociales."
    },
    {
        id: 11,
        name: "Pieza Publicitaria",
        price: "$30.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&q=80",
        tags: ["ads"],
        description: "Creatividades optimizadas para campañas publicitarias digitales."
    },
    {
        id: 12,
        name: "Logos",
        price: "$30.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=600&fit=crop&q=80",
        tags: ["logo", "branding"],
        description: "Diseño de logotipos memorables y profesionales."
    },
    {
        id: 24,
        name: "Diseño UI/UX App",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80",
        tags: ["ui", "app"],
        description: "Diseño de interfaces intuitivas y hermosas para aplicaciones móviles y web."
    },
    {
        id: 25,
        name: "Edición de Video",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80",
        tags: ["video", "social"],
        description: "Edición profesional para YouTube, Reels, TikTok y videos corporativos."
    },
    {
        id: 33,
        name: "Diseño de Empaques",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop&q=80",
        tags: ["branding", "packaging"],
        description: "Packaging creativo que destaca tu producto en el estante."
    },
    {
        id: 34,
        name: "Ilustración Digital",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80",
        tags: ["art", "digital"],
        description: "Ilustraciones personalizadas para libros, webs o uso personal."
    },

    // Tech Consulting
    {
        id: 13,
        name: "Desarrollo Web",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop&q=80",
        tags: ["development", "web"],
        description: "Sitios web modernos, rápidos y responsivos a la medida."
    },
    {
        id: 14,
        name: "Programación",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
        tags: ["coding", "scripts"],
        description: "Soluciones de software personalizadas, scripts y automatización."
    },
    {
        id: 15,
        name: "Soporte Técnico",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80",
        tags: ["support", "hardware"],
        description: "Diagnóstico y resolución de problemas de hardware y software."
    },
    {
        id: 27,
        name: "Consultoría TI",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
        tags: ["consulting", "business"],
        description: "Optimización tecnológica para empresas y negocios."
    },
    {
        id: 35,
        name: "Mantenimiento PC",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop&q=80",
        tags: ["hardware", "support"],
        description: "Limpieza profunda, cambio de pasta térmica y optimización del sistema."
    },

    // Education
    {
        id: 101,
        name: "Asesorías Matemáticas",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&q=80",
        tags: ["education", "math", "tutoring"],
        description: "Clases personalizadas de matemáticas, cálculo, álgebra y estadística para todos los niveles."
    },
    {
        id: 102,
        name: "Trabajos Académicos",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
        tags: ["education", "homework"],
        description: "Apoyo en la realización de trabajos, ensayos y actividades académicas."
    },
    {
        id: 103,
        name: "Realización de Talleres",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&q=80",
        tags: ["education", "workshop"],
        description: "Desarrollo completo de talleres y guías de estudio paso a paso."
    },
    {
        id: 104,
        name: "Tesis y Grados",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
        tags: ["education", "thesis", "research"],
        description: "Asesoría y redacción de tesis, monografías y proyectos de grado."
    },
    {
        id: 105,
        name: "Parciales Virtuales",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop&q=80",
        tags: ["education", "exam"],
        description: "Acompañamiento y soporte en exámenes y evaluaciones virtuales."
    },

    // Tech Services Expansion
    {
        id: 106,
        name: "Asesorías Tecnológicas",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80",
        tags: ["tech", "consulting"],
        description: "Consultoría experta para resolver dudas y optimizar tu uso de la tecnología."
    },
    {
        id: 107,
        name: "Creación de E-commerce",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
        tags: ["web", "ecommerce", "business"],
        description: "Tiendas online completas con pasarelas de pago y gestión de inventario."
    },
    {
        id: 108,
        name: "Páginas Web Corporativas",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop&q=80",
        tags: ["web", "business"],
        description: "Sitios web profesionales para potenciar la presencia digital de tu empresa."
    },
    {
        id: 109,
        name: "Software a la Medida",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
        tags: ["software", "development"],
        description: "Desarrollo de aplicaciones y sistemas específicos para necesidades únicas."
    },
    {
        id: 110,
        name: "Modernización de Software",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&q=80",
        tags: ["software", "legacy", "upgrade"],
        description: "Actualización y mejora de proyectos existentes a tecnologías recientes."
    },

    // Fashion/Clothing
    {
        id: 111,
        name: "Ropa a Medida",
        price: "Cotizar",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80",
        tags: ["fashion", "custom"],
        description: "Confección de prendas al gusto y a la medida, con los materiales que elijas."
    },

    // Marketing/Design Expansion
    {
        id: 112,
        name: "Creación de Marca",
        price: "Cotizar",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop&q=80",
        tags: ["branding", "marketing"],
        description: "Estrategia completa de branding para diferenciar y posicionar tu negocio."
    },
    {
        id: 113,
        name: "Publicidad Digital",
        price: "Cotizar",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop&q=80",
        tags: ["marketing", "ads"],
        description: "Gestión de campañas publicitarias en redes sociales y Google Ads."
    },

    // Clothing (Expanded)
    {
        id: 114,
        name: "Camiseta Developer",
        price: "$45.000",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&h=600&fit=crop&q=80",
        tags: ["fashion", "clothing", "dev"],
        description: "Camiseta 100% algodón con diseños minimalistas para desarrolladores."
    },
    {
        id: 115,
        name: "Hoodie Minimalista",
        price: "$120.000",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop&q=80",
        tags: ["fashion", "clothing", "winter"],
        description: "Hoodie cómodo y cálido, perfecto para largas sesiones de código."
    },
    {
        id: 116,
        name: "Gorra Tech",
        price: "$35.000",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=600&fit=crop&q=80",
        tags: ["fashion", "accessories"],
        description: "Estilo urbano con el toque tech que te identifica."
    },

    // Tech Gadgets
    {
        id: 117,
        name: "Teclado Mecánico Custom",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop&q=80",
        tags: ["tech", "hardware", "gaming"],
        description: "Teclados mecánicos personalizados a tu gusto, switches y keycaps a elección."
    },
    {
        id: 118,
        name: "Mouse Ergonómico",
        price: "$150.000",
        category: "tech",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=600&fit=crop&q=80",
        tags: ["tech", "hardware", "office"],
        description: "Diseño vertical para evitar el túnel carpiano y mejorar tu productividad."
    },

    // Design Assets
    {
        id: 119,
        name: "Pack de Texturas 4K",
        price: "$25.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&h=600&fit=crop&q=80",
        tags: ["design", "assets", "3d"],
        description: "Más de 100 texturas en alta resolución para tus renders y diseños."
    },

    // Digital Products
    {
        id: 201,
        name: "Notion Life OS Template",
        price: "$40.000",
        category: "templates",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80",
        tags: ["productivity", "notion", "template"],
        description: "Organiza toda tu vida, proyectos y metas con este sistema operativo completo para Notion."
    },
    {
        id: 204,
        name: "Kit de Contratos para Freelancers",
        price: "$45.000",
        category: "templates",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&h=600&fit=crop&q=80",
        tags: ["business", "legal", "freelance"],
        description: "Plantillas de contratos legales editables para proteger tu trabajo y asegurar tus pagos."
    },
    {
        id: 205,
        name: "Curso: Intro a Programación Web",
        price: "$60.000",
        category: "education",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
        tags: ["education", "coding", "course"],
        description: "Guía intensiva de 4 semanas para aprender HTML, CSS y JS desde cero. (Contenido Digital)"
    },
    {
        id: 206,
        name: "Plantilla CV Moderno + Portafolio",
        price: "$20.000",
        category: "templates",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&q=80",
        tags: ["design", "career", "template"],
        description: "Destaca en tus entrevistas con esta plantilla de hoja de vida y portafolio editable."
    },
    {
        id: 207,
        name: "Pack de Iconos 3D Premium",
        price: "$30.000",
        category: "design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&q=80",
        tags: ["design", "3d", "assets"],
        description: "Colección de 50+ iconos 3D en alta resolución para tus proyectos web y apps."
    }
];
