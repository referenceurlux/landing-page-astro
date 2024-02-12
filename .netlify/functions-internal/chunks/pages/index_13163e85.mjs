/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent } from '../astro_3cf84f16.mjs';
import 'clsx';
import { W as WordpressServices, $ as $$Layout, a as $$Header, b as $$HeroSwitcher, c as $$ValeursSwitcher, d as $$AboutSwitcher, e as $$InfosSwitcher, f as $$CtaSwitcher, g as $$GalerieSwitcher, h as $$NumbersSwitcher, i as $$ContactSwitcher, j as $$FooterSwitcher } from './_page__02f9ba93.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const menu = await WordpressServices.getPrimaryMenu();
  const currentPages = menu.map((data) => {
    return {
      slug: data.title
    };
  });
  const page = currentPages.find((page2) => page2.slug === Astro2.params.page);
  const currentPage = await WordpressServices.getPageBySlug(page.slug);
  const clientName = currentPage.acf.nom_du_client;
  if (!page)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page.slug, "siteName": clientName }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slug": page.slug })}${renderComponent($$result2, "HeroSwitcher", $$HeroSwitcher, { "slug": page.slug })}${renderComponent($$result2, "ValeursSwitcher", $$ValeursSwitcher, { "slug": page.slug })}${renderComponent($$result2, "AboutSwitcher", $$AboutSwitcher, { "slug": page.slug })}${renderComponent($$result2, "InfosSwitcher", $$InfosSwitcher, { "slug": page.slug })}${renderComponent($$result2, "CtaSwitcher", $$CtaSwitcher, { "slug": page.slug })}${renderComponent($$result2, "GalerieSwitcher", $$GalerieSwitcher, { "slug": page.slug })}${renderComponent($$result2, "NumbersSwitcher", $$NumbersSwitcher, { "slug": page.slug })}${renderComponent($$result2, "ContactSwitcher", $$ContactSwitcher, { "slug": page.slug })}${renderComponent($$result2, "FooterSwitcher", $$FooterSwitcher, { "slug": page.slug })}` })}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Referenceur/Works/landing-page-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
