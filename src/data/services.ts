export interface Service {
    id: string | number;
    name: string;
    price: string;
    category: string;
    image: string;
    tags: string[];
    description?: string;
}

export const services: Service[] = [
    {
        id: 1,
        name: "Software a la Medida",
        price: "Cotizar",
        category: "development",
        image: "/assets/service-software.png",
        tags: ["software", "development"],
        description: "Desarrollo de software personalizado adaptado a las necesidades específicas de tu empresa o negocio."
    },
    {
        id: 2,
        name: "Páginas Web Robustas",
        price: "Cotizar",
        category: "development",
        image: "/assets/service-web.png",
        tags: ["web", "development"],
        description: "Creación de sitios web profesionales, rápidos, escalables y optimizados para buscadores (SEO)."
    },
    {
        id: 3,
        name: "Sistemas de Facturación Electrónica",
        price: "Cotizar",
        category: "development",
        image: "/assets/service-pos.png",
        tags: ["software", "business"],
        description: "Sistemas integrados completos para gestión de ventas, inventario y facturación electrónica."
    },
    {
        id: 4,
        name: "E-Commerce",
        price: "Cotizar",
        category: "development",
        image: "/assets/service-ecommerce.png",
        tags: ["web", "ecommerce"],
        description: "Tiendas online completas con pasarelas de pago y gestión de productos."
    },
    {
        id: 5,
        name: "Diseño Gráfico",
        price: "Cotizar",
        category: "design",
        image: "/assets/service-design.png",
        tags: ["design", "branding"],
        description: "Diseño de identidad visual, logotipos, banners y material publicitario."
    },
    {
        id: 6,
        name: "Flyers y Publicidad",
        price: "Cotizar",
        category: "design",
        image: "/assets/service-flyers.png",
        tags: ["design", "marketing"],
        description: "Diseño de flyers, afiches y piezas gráficas impactantes para redes sociales y medios impresos."
    },
    {
        id: 7,
        name: "Impresión 3D",
        price: "Cotizar",
        category: "tech",
        image: "/assets/service-3d.png",
        tags: ["3d", "tech"],
        description: "Servicio de modelado e impresión 3D para prototipos, maquetas y piezas personalizadas."
    },
    {
        id: 8,
        name: "Asesorías Tecnológicas",
        price: "Cotizar",
        category: "consulting",
        image: "/assets/service-consulting.png",
        tags: ["consulting", "tech"],
        description: "Consultoría especializada para optimizar los recursos tecnológicos de tu negocio o proyecto."
    },
    {
        id: 9,
        name: "Tesis y Proyectos Universitarios",
        price: "Cotizar",
        category: "education",
        image: "/assets/service-education.png",
        tags: ["education", "academic"],
        description: "Asesoría y desarrollo de software para tesis, proyectos universitarios y trabajos de colegio."
    },
    {
        id: 10,
        name: "Ropa",
        price: "Cotizar",
        category: "clothing",
        image: "/assets/service-clothing.png",
        tags: ["clothing", "custom"],
        description: "Ropa con estilos únicos o con el branding de tu empresa/marca."
    }
];
