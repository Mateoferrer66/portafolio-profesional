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
        name: "Landing Pages de Alta Conversión",
        price: "Desde $199 USD",
        category: "development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
        tags: ["web", "conversion", "sales", "landing"],
        description: "Páginas web ultrarrápidas (carga < 1s), optimizadas para campañas publicitarias (Google/Meta Ads) con embudo directo a tu WhatsApp para captar clientes en automático."
    },
    {
        id: 2,
        name: "Tiendas Online & Catálogos WhatsApp",
        price: "Desde $399 USD",
        category: "development",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80",
        tags: ["ecommerce", "ventas", "web", "tienda"],
        description: "E-Commerce moderno de alto rendimiento con pasarelas de pago (Wompi, MercadoPago, Stripe) o catálogo interactivo con pedidos directos a WhatsApp para aumentar tus ventas."
    },
    {
        id: 3,
        name: "Software a la Medida & Facturación Electrónica",
        price: "Desde $799 USD",
        category: "development",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
        tags: ["software", "facturacion", "saas", "gestion"],
        description: "Sistemas web centralizados para control de inventarios, gestión de clientes (CRM), administración de ventas y emisión de facturación electrónica."
    },
    {
        id: 4,
        name: "Chatbots & Automatización de Negocios",
        price: "Desde $299 USD",
        category: "tech",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&h=600&fit=crop&q=80",
        tags: ["automation", "chatbots", "eficiencia", "productividad"],
        description: "Asistentes virtuales inteligentes integrados en tu web o WhatsApp para calificar prospectos 24/7 y flujos automatizados para ahorrar más de 15 horas operativas a la semana."
    },
    {
        id: 5,
        name: "Auditoría Web & Optimización Core Web Vitals",
        price: "Desde $149 USD",
        category: "consulting",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
        tags: ["seo", "speed", "audit", "rendimiento"],
        description: "Diagnóstico exhaustivo y optimización técnica para que tu sitio web alcance puntuaciones de 95+ en Google Lighthouse, mejore su posicionamiento SEO y retenga más visitantes."
    },
    {
        id: 6,
        name: "Diseño UI/UX & Branding Digital",
        price: "Desde $180 USD",
        category: "design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&q=80",
        tags: ["design", "branding", "ui-ux", "prototipos"],
        description: "Identidad visual corporativa, prototipos interactivos en Figma y diseño de interfaces que transmiten autoridad, confianza y elevan la percepción de valor de tu marca."
    }
];
