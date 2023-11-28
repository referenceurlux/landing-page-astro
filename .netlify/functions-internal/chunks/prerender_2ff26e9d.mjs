/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from './astro_3cf84f16.mjs';
import 'clsx';
import { W as WordpressServices, $ as $$Layout } from './pages/_page__8c1c9db1.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.props;
  await WordpressServices.getPageBySlug(slug);
  Astro2.response.headers.set("Cache-Control", "max-age=600, must-revalidate");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "accueil", "siteName": "Landing Page" }, { "default": ($$result2) => renderTemplate`
Test
` })}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Referenceur/Works/landing-page-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
