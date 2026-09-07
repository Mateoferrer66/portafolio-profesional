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
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80",
        tags: ["software", "development"],
        description: "Desarrollo de software personalizado adaptado a las necesidades específicas de tu empresa o negocio."
    },
    {
        id: 2,
        name: "Páginas Web Robustas",
        price: "Cotizar",
        category: "development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
        tags: ["web", "development"],
        description: "Creación de sitios web profesionales, rápidos, escalables y optimizados para buscadores (SEO)."
    },
    {
        id: 3,
        name: "Sistemas de Facturación Electrónica",
        price: "Cotizar",
        category: "development",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
        tags: ["software", "business"],
        description: "Sistemas integrados completos para gestión de ventas, inventario y facturación electrónica."
    },
    {
        id: 4,
        name: "E-Commerce",
        price: "Cotizar",
        category: "development",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80",
        tags: ["web", "ecommerce"],
        description: "Tiendas online completas con pasarelas de pago y gestión de productos."
    },
    {
        id: 5,
        name: "Diseño Gráfico",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&q=80",
        tags: ["design", "branding"],
        description: "Diseño de identidad visual, logotipos, banners y material publicitario."
    },
    {
        id: 6,
        name: "Flyers y Publicidad",
        price: "Cotizar",
        category: "design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=80",
        tags: ["design", "marketing"],
        description: "Diseño de flyers, afiches y piezas gráficas impactantes para redes sociales y medios impresos."
    },
    {
        id: 7,
        name: "Impresión 3D",
        price: "Cotizar",
        category: "tech",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80",
        tags: ["3d", "tech"],
        description: "Servicio de modelado e impresión 3D para prototipos, maquetas y piezas personalizadas."
    },
    {
        id: 8,
        name: "Asesorías Tecnológicas",
        price: "Cotizar",
        category: "consulting",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80",
        tags: ["consulting", "tech"],
        description: "Consultoría especializada para optimizar los recursos tecnológicos de tu negocio o proyecto."
    },
    {
        id: 9,
        name: "Tesis y Proyectos Universitarios",
        price: "Cotizar",
        category: "education",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=600&fit=crop&q=80",
        tags: ["education", "academic"],
        description: "Asesoría y desarrollo de software para tesis, proyectos universitarios y trabajos de colegio."
    },
    {
        id: 10,
        name: "Ropa",
        price: "Cotizar",
        category: "clothing",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop&q=80",
        tags: ["clothing", "custom"],
        description: "Ropa con estilos únicos o con el branding de tu empresa/marca."
    }
];
