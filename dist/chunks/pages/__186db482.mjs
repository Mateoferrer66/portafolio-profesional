import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           */import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderTemplate, e as renderComponent, u as unescapeHTML, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderSlot } from '../astro_f095f7eb.mjs';
import 'clsx';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero } from './404_750208d9.mjs';
/* empty css                           *//* empty css                           *//* empty css                            */
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://mateo-ferrer.pages.dev/","ASSETS_PREFIX":undefined},{}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/api-gateway.md": () => import('../api-gateway_5fac072c.mjs'),"/src/content/work/appgoals.md": () => import('../appgoals_a841aff2.mjs'),"/src/content/work/codelearn.md": () => import('../codelearn_747a07cb.mjs'),"/src/content/work/cryptovault.md": () => import('../cryptovault_894ddf5a.mjs'),"/src/content/work/cursos-react.md": () => import('../cursos-react_92fec098.mjs'),"/src/content/work/deploywizard-cli.md": () => import('../deploywizard-cli_7349a5eb.mjs'),"/src/content/work/ecomarket.md": () => import('../ecomarket_93bc1fb9.mjs'),"/src/content/work/ecommerce.md": () => import('../ecommerce_31a5eb21.mjs'),"/src/content/work/fittrack-pro.md": () => import('../fittrack-pro_1c3bea9f.mjs'),"/src/content/work/freelance.md": () => import('../freelance_146b4988.mjs'),"/src/content/work/gusto-pos.md": () => import('../gusto-pos_b5cdd3cf.mjs'),"/src/content/work/homeofcode.md": () => import('../homeofcode_6a7f0961.mjs'),"/src/content/work/medicare-portal.md": () => import('../medicare-portal_500ec6fe.mjs'),"/src/content/work/milmexico.md": () => import('../milmexico_76f6086f.mjs'),"/src/content/work/neobank.md": () => import('../neobank_4b270f7b.mjs'),"/src/content/work/nested/webpages.md": () => import('../webpages_38905fae.mjs'),"/src/content/work/netguard-security.md": () => import('../netguard-security_28535785.mjs'),"/src/content/work/nexus-law.md": () => import('../nexus-law_22f7c34e.mjs'),"/src/content/work/saas-dashboard.md": () => import('../saas-dashboard_c79b972c.mjs'),"/src/content/work/smarthome-iot.md": () => import('../smarthome-iot_a2ee9c5a.mjs'),"/src/content/work/studyflow.md": () => import('../studyflow_cc74a7ec.mjs'),"/src/content/work/taskmaster-ai.md": () => import('../taskmaster-ai_8b9857cc.mjs'),"/src/content/work/tradership.md": () => import('../tradership_3019b1aa.mjs'),"/src/content/work/urban-real-estate.md": () => import('../urban-real-estate_00415065.mjs'),"/src/content/work/vitality.md": () => import('../vitality_458965a2.mjs'),"/src/content/work/wanderlust-journal.md": () => import('../wanderlust-journal_4b30ca5d.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"codelearn":"/src/content/work/codelearn.md","api-gateway":"/src/content/work/api-gateway.md","cryptovault":"/src/content/work/cryptovault.md","appgoals":"/src/content/work/appgoals.md","cursos-react":"/src/content/work/cursos-react.md","ecommerce":"/src/content/work/ecommerce.md","deploywizard-cli":"/src/content/work/deploywizard-cli.md","ecomarket":"/src/content/work/ecomarket.md","freelance":"/src/content/work/freelance.md","fittrack-pro":"/src/content/work/fittrack-pro.md","homeofcode":"/src/content/work/homeofcode.md","gusto-pos":"/src/content/work/gusto-pos.md","netguard-security":"/src/content/work/netguard-security.md","medicare-portal":"/src/content/work/medicare-portal.md","milmexico":"/src/content/work/milmexico.md","nexus-law":"/src/content/work/nexus-law.md","neobank":"/src/content/work/neobank.md","studyflow":"/src/content/work/studyflow.md","smarthome-iot":"/src/content/work/smarthome-iot.md","saas-dashboard":"/src/content/work/saas-dashboard.md","taskmaster-ai":"/src/content/work/taskmaster-ai.md","vitality":"/src/content/work/vitality.md","tradership":"/src/content/work/tradership.md","wanderlust-journal":"/src/content/work/wanderlust-journal.md","urban-real-estate":"/src/content/work/urban-real-estate.md","nested/webpages":"/src/content/work/nested/webpages.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/api-gateway.md": () => import('../api-gateway_27468d0b.mjs'),"/src/content/work/appgoals.md": () => import('../appgoals_c0c12870.mjs'),"/src/content/work/codelearn.md": () => import('../codelearn_be2f9a85.mjs'),"/src/content/work/cryptovault.md": () => import('../cryptovault_928be4d4.mjs'),"/src/content/work/cursos-react.md": () => import('../cursos-react_817a4f6d.mjs'),"/src/content/work/deploywizard-cli.md": () => import('../deploywizard-cli_c9e9ae02.mjs'),"/src/content/work/ecomarket.md": () => import('../ecomarket_c3b2c274.mjs'),"/src/content/work/ecommerce.md": () => import('../ecommerce_635b48fa.mjs'),"/src/content/work/fittrack-pro.md": () => import('../fittrack-pro_00cc7ab6.mjs'),"/src/content/work/freelance.md": () => import('../freelance_25a736d7.mjs'),"/src/content/work/gusto-pos.md": () => import('../gusto-pos_119c4cdb.mjs'),"/src/content/work/homeofcode.md": () => import('../homeofcode_94bc8cc3.mjs'),"/src/content/work/medicare-portal.md": () => import('../medicare-portal_89573779.mjs'),"/src/content/work/milmexico.md": () => import('../milmexico_8cecfbfd.mjs'),"/src/content/work/neobank.md": () => import('../neobank_9240eeef.mjs'),"/src/content/work/nested/webpages.md": () => import('../webpages_8a7b7bd2.mjs'),"/src/content/work/netguard-security.md": () => import('../netguard-security_33a0d3a6.mjs'),"/src/content/work/nexus-law.md": () => import('../nexus-law_acb1d48b.mjs'),"/src/content/work/saas-dashboard.md": () => import('../saas-dashboard_6cc7f8ec.mjs'),"/src/content/work/smarthome-iot.md": () => import('../smarthome-iot_39ae1675.mjs'),"/src/content/work/studyflow.md": () => import('../studyflow_4a11b239.mjs'),"/src/content/work/taskmaster-ai.md": () => import('../taskmaster-ai_aa0cd488.mjs'),"/src/content/work/tradership.md": () => import('../tradership_d32e96db.mjs'),"/src/content/work/urban-real-estate.md": () => import('../urban-real-estate_98426da9.mjs'),"/src/content/work/vitality.md": () => import('../vitality_73e6a238.mjs'),"/src/content/work/wanderlust-journal.md": () => import('../wanderlust-journal_a77d669e.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro("https://mateo-ferrer.pages.dev/");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/CallToAction.astro", void 0);

const $$Pill = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pill" data-astro-cid-2qeywk4b>${renderSlot($$result, $$slots["default"])}</div> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/Pill.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="cta-section" data-astro-cid-rcdzuq3a> <div class="cta-glow cta-glow--left" data-astro-cid-rcdzuq3a></div> <div class="cta-glow cta-glow--right" data-astro-cid-rcdzuq3a></div> <div class="cta-inner" data-astro-cid-rcdzuq3a> <div class="cta-badge" data-astro-cid-rcdzuq3a>Available for new projects</div> <h2 class="cta-heading" data-astro-cid-rcdzuq3a>
Interested in<br data-astro-cid-rcdzuq3a>working together?
</h2> <p class="cta-sub" data-astro-cid-rcdzuq3a>
Let's build something extraordinary. Drop me a message and I'll get back to you within 24 hours.
</p> <div class="cta-actions" data-astro-cid-rcdzuq3a> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "https://wa.me/3005059987", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </div> </div> </aside> `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/components/ContactCTA.astro", void 0);

const $$Astro = createAstro("https://mateo-ferrer.pages.dev/");
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-qwekciqp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-qwekciqp> <div class="stack gap-15" data-astro-cid-qwekciqp> <header data-astro-cid-qwekciqp> <div class="wrapper stack gap-2" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "data-astro-cid-qwekciqp": true }, { "default": async ($$result3) => renderTemplate` <div class="details" data-astro-cid-qwekciqp> <div class="tags" data-astro-cid-qwekciqp> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-qwekciqp": true }, { "default": async ($$result4) => renderTemplate`${t}` })}`)} </div> <p class="description" data-astro-cid-qwekciqp>${entry.data.description}</p> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-qwekciqp> <div class="stack gap-10 content" data-astro-cid-qwekciqp> ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} data-astro-cid-qwekciqp>`} <div class="content" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qwekciqp": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> ` })} `;
}, "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/work/[...slug].astro", void 0);

const $$file = "C:/Users/mateo/OneDrive/Desktop/2026/PROYECTOS CODIGO/PROYECTOS CODIGO/portafolio-profesional/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$Pill as a, $$CallToAction as b, getCollection as g };
