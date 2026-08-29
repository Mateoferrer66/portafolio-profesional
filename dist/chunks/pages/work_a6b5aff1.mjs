/* empty css                           */import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro_f095f7eb.mjs';
import { g as getCollection, $ as $$ContactCTA } from './__186db482.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_750208d9.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_79c76c65.mjs';
/* empty css                          */
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const courseProjects = allProjects.filter((p) => p.data.category === "courses");
  const personalProjects = allProjects.filter(
    (p) => p.data.category === "personal"
  );
  const clientProjects = allProjects.filter(
    (p) => p.data.category === "client-work"
  );
  const allTags = allProjects.flatMap((p) => p.data.tags || []);
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {}
  );
  const topTags = Object.keys(tagCounts).sort((a, b) => {
    const diff = tagCounts[b] - tagCounts[a];
    if (diff !== 0)
      return diff;
    return a.localeCompare(b);
  }).slice(0, 10);
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Mateo Ferrer", "description": "Explore my portfolio of professional projects, courses, and personal work", "data-astro-cid-jljc7dey": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-jljc7dey> <main class="wrapper stack gap-8" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "Explore my comprehensive portfolio of client projects, educational courses, and personal initiatives.", "align": "start", "data-astro-cid-jljc7dey": true })} <!-- Search Bar --> <div class="search-container" data-astro-cid-jljc7dey> <input type="text" id="work-search" placeholder="Search projects..." data-astro-cid-jljc7dey> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon" data-astro-cid-jljc7dey> <circle cx="11" cy="11" r="8" data-astro-cid-jljc7dey></circle> <line x1="21" y1="21" x2="16.65" y2="16.65" data-astro-cid-jljc7dey></line> </svg> </div> <!-- Filter Tags --> <div class="filter-container" data-astro-cid-jljc7dey> <button class="filter-tag active" data-tag="all" data-astro-cid-jljc7dey>All</button> ${topTags.map((tag) => renderTemplate`<button class="filter-tag"${addAttribute(tag, "data-tag")} data-astro-cid-jljc7dey> ${tag} </button>`)} </div> <!-- Cursos de React Section --> ${courseProjects.length > 0 && renderTemplate`<section class="category-section" data-astro-cid-jljc7dey> <header class="section-header" data-astro-cid-jljc7dey> <h2 class="section-title" data-astro-cid-jljc7dey> <span class="icon" data-astro-cid-jljc7dey>📚</span> Cursos
</h2> <p class="section-description" data-astro-cid-jljc7dey>
Comprehensive training courses covering
								fundamentals to advanced topics.
</p> </header> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`${courseProjects.map((project) => renderTemplate`<li class="project-item" data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-jljc7dey": true })} </li>`)}` })} </section>`} <!-- Personal Projects Section --> ${personalProjects.length > 0 && renderTemplate`<section class="category-section" data-astro-cid-jljc7dey> <header class="section-header" data-astro-cid-jljc7dey> <h2 class="section-title" data-astro-cid-jljc7dey> <span class="icon" data-astro-cid-jljc7dey>🚀</span> Personal Projects
</h2> <p class="section-description" data-astro-cid-jljc7dey>
Innovative personal initiatives including
								Freelance work, MilMexico, and Tradership.
</p> </header> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`${personalProjects.map((project) => renderTemplate`<li class="project-item" data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-jljc7dey": true })} </li>`)}` })} </section>`} <!-- Client Work Section --> ${clientProjects.length > 0 && renderTemplate`<section class="category-section" data-astro-cid-jljc7dey> <header class="section-header" data-astro-cid-jljc7dey> <h2 class="section-title" data-astro-cid-jljc7dey> <span class="icon" data-astro-cid-jljc7dey>💼</span> Client Projects
</h2> <p class="section-description" data-astro-cid-jljc7dey>
Professional work delivered for clients,
								showcasing real-world solutions.
</p> </header> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`${clientProjects.map((project) => renderTemplate`<li class="project-item" data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-jljc7dey": true })} </li>`)}` })} </section>`} <!-- Live Web Projects Section --> <section class="category-section" data-astro-cid-jljc7dey> <header class="section-header" data-astro-cid-jljc7dey> <h2 class="section-title" data-astro-cid-jljc7dey> <span class="icon" data-astro-cid-jljc7dey>🌍</span> Live Web Experiences
</h2> <p class="section-description" data-astro-cid-jljc7dey>
Una colección de aplicaciones web y plataformas e-commerce reales diseñadas y desarrolladas para impacto en el mundo real.
</p> </header> <div class="gallery" style="margin-top: 2rem;" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`${liveWebsites.map((site) => renderTemplate`<li class="web-card tilt-card" style="list-style: none;" data-astro-cid-jljc7dey> <a${addAttribute(site.url, "href")} target="_blank" rel="noopener noreferrer" class="web-link" data-astro-cid-jljc7dey> <div class="web-image" data-astro-cid-jljc7dey> <div class="browser-header" data-astro-cid-jljc7dey> <span class="dot red" data-astro-cid-jljc7dey></span> <span class="dot yellow" data-astro-cid-jljc7dey></span> <span class="dot green" data-astro-cid-jljc7dey></span> </div> <img${addAttribute(site.image, "src")}${addAttribute(`Screenshot of ${site.name}`, "alt")} loading="lazy" data-astro-cid-jljc7dey> </div> <div class="web-info" data-astro-cid-jljc7dey> <h3 data-astro-cid-jljc7dey>${site.name}</h3> <p class="web-url" data-astro-cid-jljc7dey>${site.url.replace("https://", "").replace(/\/$/, "")}</p> <span class="visit-btn" data-astro-cid-jljc7dey>Visitar Sitio <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jljc7dey><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-jljc7dey></line><polyline points="12 5 19 12 12 19" data-astro-cid-jljc7dey></polyline></svg></span> </div> </a> </li>`)}` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-jljc7dey": true })} </div> ` })}  `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/work.astro", void 0);

const $$file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
