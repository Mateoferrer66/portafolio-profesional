import fs from 'fs';
let content = fs.readFileSync('src/pages/shop.astro', 'utf8');
content = content.replace(/import \{ products \} from "\.\.\/data\/products";/, 'import { services as products } from "../data/services";');
content = content.replace('Tienda Digital Mateo Ferrer | Plantillas Notion, Apps & Servicios', 'Servicios Mateo Ferrer | Software, Web, Diseño y Más');
content = content.replace('Tienda Digital & Servicios', 'Servicios Profesionales');
content = content.replace('<span class="badge-premium">NUEVO LANZAMIENTO</span>', '<span class="badge-premium">NUESTROS SERVICIOS</span>');
fs.writeFileSync('src/pages/services.astro', content, 'utf8');
console.log("Done");
