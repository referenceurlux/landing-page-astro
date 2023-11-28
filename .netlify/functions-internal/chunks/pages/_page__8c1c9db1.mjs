/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, g as renderSlot, h as addAttribute, i as renderHead, m as maybeRenderHead, j as renderComponent, u as unescapeHTML, F as Fragment } from '../astro_3cf84f16.mjs';
import 'clsx';

class WordpressServices {
  static async getPageBySlug(slug) {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages?slug=${slug}`);
      const [data] = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
  static async getPages() {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
  static async getPrimaryMenu() {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/menu`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
  static async getOptionsPage() {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/options`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$r = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, siteName } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(title);
  const primaryColor = page.acf.couleur_principale;
  const secondaryColor = page.acf.couleur_secondaire;
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><meta name="generator"', "><title>", "</title>", "</head><body", ' class="overflow-x-hidden">', '<script src="https://unpkg.com/aos@next/dist/aos.js"><\/script><script>\n      AOS.init();\n    <\/script></body></html>'])), addAttribute(Astro2.generator, "content"), siteName, renderHead(), addAttribute({
    "--primary-color": primaryColor,
    "--secondary-color": secondaryColor
  }, "style"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Referenceur/Works/landing-page-astro/src/layouts/Layout.astro", void 0);

const $$Astro$q = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Header;
  const menu = await WordpressServices.getPrimaryMenu();
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const logo = page.acf.logo_de_la_landing_page;
  const phone = page.acf.telephone;
  const template = page.acf.template;
  return renderTemplate`${maybeRenderHead()}<header class="py-4 fixed w-full bg-white z-10  font-montserrat"><div class="container mx-auto"><nav class="flex justify-between items-center"><a class="z-10" href="/"><img${addAttribute(logo.url, "src")}${addAttribute(logo.description, "alt")}></a><ul class="gap-8 hidden xl:flex">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul><a${addAttribute(`bg-[--primary-color] hidden xl:block text-white font-semibold py-4 px-8 ${template === "Template 1" || template === "Template 2" || template === "Template 5" ? "rounded-full" : "rounded-xl"} transition-all`, "class")}${addAttribute(`tel:${phone}`, "href")}>${phone}</a><button class="relative block xl:hidden group z-10 menuBtn font-semibold uppercase group"><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="stroke-black open transition-all"><path fill="" stroke="" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"></path></svg><svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="fill-black hidden close transition-all"><path fill="" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"></path></svg></button><div class="menu-mobile h-screen w-screen bg-white absolute top-0 left-0 -translate-y-full transition-all"><div class="container mx-auto py-40 flex flex-col justify-center items-center gap-8"><ul class="gap-8 flex xl:hidden text-xl uppercase">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.slug, "href")}>${item.title}</a></li>`)}</ul><a${addAttribute(`bg-[--primary-color] block w-fit xl:hidden text-white font-semibold py-4 px-8 ${template === "Template 1" || template === "Template 2" || template === "Template 5" ? "rounded-full" : "rounded-xl"}  transition-all`, "class")}${addAttribute(`tel:${phone}`, "href")}>${phone}</a></div></div></nav></div></header>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/header/Header.astro", void 0);

const $$Astro$p = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Hero;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const bandeau = page.acf.bandeau_hero;
  page.acf.couleur_principale;
  return renderTemplate`${maybeRenderHead()}<section class="lg:h-screen w-full relative"><img class="absolute w-full h-full object-cover aspect-video"${addAttribute(page.acf.background_hero.url, "src")}${addAttribute(page.acf.background_hero.description, "alt")}><div class="absolute w-full h-3/4 top-0 left-0 bg-gradient-to-b from-black to-transparent z-2"></div><div class="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-2"></div><div class="container mx-auto flex items-center flex-col justify-center h-screen lg:h-full"><div data-aos="fade-up" class="text-3xl xl:text-6xl text-white z-3 font-semibold font-montserrat w-3/4 mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_hero)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="bg-[--primary-color] font-montserrat text-white font-semibold py-4 px-16 rounded-full transition-all z-3" href="">${page.acf.cta_hero}</a></div><div class="relative lg:absolute w-full bottom-0 left-0 bg-[--primary-color] z-3"><div class="container mx-auto flex gap-8 lg:gap-4 justify-center flex-wrap lg:flex-row xl:justify-between items-center font-montserrat text-white text-xl py-8">${bandeau.map((item) => renderTemplate`<div class="flex items-center justify-center text-sm lg:text-base"><img class="mr-4"${addAttribute(item.icone.url, "src")}${addAttribute(item.icone.description, "alt")}><span>${item.texte}</span></div>`)}</div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/hero/Hero.astro", void 0);

const $$Astro$o = createAstro();
const $$Hero3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Hero3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  page.acf.bandeau_hero;
  page.acf.couleur_principale;
  return renderTemplate`${maybeRenderHead()}<section class="lg:h-screen w-full relative pt-24"><div class="container mx-auto h-full flex items-center"><div class="grid grid-cols-12 gap-4"><div class="col-span-6 flex flex-col justify-center items-start"><div data-aos="fade-up" class="text-3xl xl:text-6xl text-black uppercase z-3 font-bold font-montserrat mb-4">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_hero_3)}` })}</div><h4 class="font-montserrat font-medium uppercase text-[--primary-color] text-xl xl:text-3xl mb-8">${page.acf.accroche_hero_3}</h4><div class="font-montserrat text-lg mb-12 w-4/5">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_hero_3)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="bg-[--primary-color] font-montserrat text-white font-semibold py-4 px-16 rounded-xl transition-all z-3" href="">${page.acf.cta_hero_3}</a></div><div class="col-span-5 col-end-13 background-hero-3 relative"><img class="w-full h-full object-cover rounded-3xl"${addAttribute(page.acf.background_hero_3.url, "src")}${addAttribute(page.acf.background_hero_3.description, "alt")}><button class="bg-[--primary-color] p-8 rounded-3xl absolute bottom-0 right-0 translate-x-1/3 -translate-y-1/2"><svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.428 48.185"><path id="arrow-up-long-thin" d="M47.313.189a.739.739,0,0,0-1.04,0L32.289,14.174a.735.735,0,0,0,1.04,1.04L46.053,2.489V46.347a.736.736,0,1,0,1.472,0V2.489L60.249,15.222a.735.735,0,1,0,1.04-1.04L47.3.2Z" transform="translate(62.003 47.584) rotate(180)"></path></svg></button></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/hero/Hero3.astro", void 0);

const $$Astro$n = createAstro();
const $$Hero5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Hero5;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const bandeau = page.acf.bandeau_hero_5;
  page.acf.couleur_principale;
  return renderTemplate`${maybeRenderHead()}<section class="lg:h-screen w-full relative pt-24"><div class="container mx-auto h-full flex items-center relative"><div class="grid grid-cols-12 gap-4"><div class="col-span-5 col-start-1 flex flex-col justify-center items-start relative row-span-full h-full z-2"><div class="backdrop-blur-lg py-16 pr-12 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" class="fill-[--primary-color] absolute top-0 left-0 translate-x-full -translate-y-1/2" width="76" height="94" viewBox="0 0 76 94"><g id="Groupe_9366" data-name="Groupe 9366" transform="translate(-526.629 -833)" opacity="0.5"><circle id="Ellipse_354" data-name="Ellipse 354" cx="2" cy="2" r="2" transform="translate(526.629 833)"></circle><circle id="Ellipse_361" data-name="Ellipse 361" cx="2" cy="2" r="2" transform="translate(526.629 851)"></circle><circle id="Ellipse_365" data-name="Ellipse 365" cx="2" cy="2" r="2" transform="translate(526.629 869)"></circle><circle id="Ellipse_369" data-name="Ellipse 369" cx="2" cy="2" r="2" transform="translate(526.629 887)"></circle><circle id="Ellipse_373" data-name="Ellipse 373" cx="2" cy="2" r="2" transform="translate(526.629 905)"></circle><circle id="Ellipse_377" data-name="Ellipse 377" cx="2" cy="2" r="2" transform="translate(526.629 923)"></circle><circle id="Ellipse_355" data-name="Ellipse 355" cx="2" cy="2" r="2" transform="translate(544.629 833)"></circle><circle id="Ellipse_358" data-name="Ellipse 358" cx="2" cy="2" r="2" transform="translate(544.629 851)"></circle><circle id="Ellipse_362" data-name="Ellipse 362" cx="2" cy="2" r="2" transform="translate(544.629 869)"></circle><circle id="Ellipse_366" data-name="Ellipse 366" cx="2" cy="2" r="2" transform="translate(544.629 887)"></circle><circle id="Ellipse_370" data-name="Ellipse 370" cx="2" cy="2" r="2" transform="translate(544.629 905)"></circle><circle id="Ellipse_374" data-name="Ellipse 374" cx="2" cy="2" r="2" transform="translate(544.629 923)"></circle><circle id="Ellipse_356" data-name="Ellipse 356" cx="2" cy="2" r="2" transform="translate(562.629 833)"></circle><circle id="Ellipse_359" data-name="Ellipse 359" cx="2" cy="2" r="2" transform="translate(562.629 851)"></circle><circle id="Ellipse_363" data-name="Ellipse 363" cx="2" cy="2" r="2" transform="translate(562.629 869)"></circle><circle id="Ellipse_367" data-name="Ellipse 367" cx="2" cy="2" r="2" transform="translate(562.629 887)"></circle><circle id="Ellipse_371" data-name="Ellipse 371" cx="2" cy="2" r="2" transform="translate(562.629 905)"></circle><circle id="Ellipse_375" data-name="Ellipse 375" cx="2" cy="2" r="2" transform="translate(562.629 923)"></circle><circle id="Ellipse_357" data-name="Ellipse 357" cx="2" cy="2" r="2" transform="translate(580.629 833)"></circle><circle id="Ellipse_384" data-name="Ellipse 384" cx="2" cy="2" r="2" transform="translate(598.629 833)"></circle><circle id="Ellipse_360" data-name="Ellipse 360" cx="2" cy="2" r="2" transform="translate(580.629 851)"></circle><circle id="Ellipse_383" data-name="Ellipse 383" cx="2" cy="2" r="2" transform="translate(598.629 851)"></circle><circle id="Ellipse_364" data-name="Ellipse 364" cx="2" cy="2" r="2" transform="translate(580.629 869)"></circle><circle id="Ellipse_385" data-name="Ellipse 385" cx="2" cy="2" r="2" transform="translate(598.629 869)"></circle><circle id="Ellipse_368" data-name="Ellipse 368" cx="2" cy="2" r="2" transform="translate(580.629 887)"></circle><circle id="Ellipse_386" data-name="Ellipse 386" cx="2" cy="2" r="2" transform="translate(598.629 887)"></circle><circle id="Ellipse_372" data-name="Ellipse 372" cx="2" cy="2" r="2" transform="translate(580.629 905)"></circle><circle id="Ellipse_387" data-name="Ellipse 387" cx="2" cy="2" r="2" transform="translate(598.629 905)"></circle><circle id="Ellipse_376" data-name="Ellipse 376" cx="2" cy="2" r="2" transform="translate(580.629 923)"></circle><circle id="Ellipse_388" data-name="Ellipse 388" cx="2" cy="2" r="2" transform="translate(598.629 923)"></circle></g></svg><div data-aos="fade-up" class="text-3xl xl:text-6xl text-[--primary-color] font-semibold font-montserrat mb-4">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_hero_5)}` })}</div><div class="font-montserrat text-lg mb-8 w-4/5">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_hero_5)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="font-montserrat text-[--primary-color] border-2 border-[--primary-color] font-semibold py-4 px-16 rounded-full transition-all z-3" href="">${page.acf.cta_hero_5}</a></div></div><div class="col-span-9 col-end-13 row-span-full"><div class="h-[90%] relative"><button class="bg-white/20 p-8 absolute bottom-0 right-0 backdrop-blur-lg"><svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.428 48.185"><path id="arrow-up-long-thin" d="M47.313.189a.739.739,0,0,0-1.04,0L32.289,14.174a.735.735,0,0,0,1.04,1.04L46.053,2.489V46.347a.736.736,0,1,0,1.472,0V2.489L60.249,15.222a.735.735,0,1,0,1.04-1.04L47.3.2Z" transform="translate(62.003 47.584) rotate(180)"></path></svg></button><img class="w-full h-full object-cover"${addAttribute(page.acf.background_hero_5.url, "src")}${addAttribute(page.acf.background_hero_5.description, "alt")}></div></div></div></div></section><section class="bg-[--primary-color]"><div class="container mx-auto flex gap-8 lg:gap-4 justify-center flex-wrap lg:flex-row xl:justify-between items-center font-montserrat text-white text-xl py-16">${bandeau.map((item) => renderTemplate`<div class="flex flex-col flex-wrap w-[15%] items-center justify-between gap-4 font-montserrat text-white text-sm lg:text-base"><img${addAttribute(item.icone.url, "src")}${addAttribute(item.icone.description, "alt")}><span class="text-center">${item.texte}</span></div>`)}</div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/hero/Hero5.astro", void 0);

const $$Astro$m = createAstro();
const $$HeroSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$HeroSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" ? renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "slug": page.slug })}` : null}${template === "Template 3" ? renderTemplate`${renderComponent($$result, "Hero3", $$Hero3, { "slug": page.slug })}` : null}${template === "Template 5" ? renderTemplate`${renderComponent($$result, "Hero5", $$Hero5, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/hero/HeroSwitcher.astro", void 0);

const $$Astro$l = createAstro();
const $$Valeurs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Valeurs;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const valeurs = page.acf.liste_valeurs;
  return renderTemplate`${maybeRenderHead()}<section class="pt-40"><div class="container mx-auto"><div class="grid grid-cols-12 gap-8 relative"><div class="col-span-12 lg:col-span-3 lg:col-start-1 row-span-full translate-x-1/4 relative"><img data-aos="zoom-in-up" class="w-full h-full object-cover relative rounded-3xl"${addAttribute(page.acf.image_gauche_3.url, "src")}${addAttribute(page.acf.image_gauche_3.description, "alt")}></div><div class="col-span-12 lg:col-span-3 lg:col-start-5 row-span-full relative"><img data-aos="zoom-in-up" class="w-full h-full object-cover relative rounded-3xl"${addAttribute(page.acf.image_droite_3.url, "src")}${addAttribute(page.acf.image_droite_3.description, "alt")}></div><div class="col-span-12 lg:col-span-5 lg:col-end-13 row-span-full relative flex gap-4 -translate-x-[15%] flex-col justify-center">${valeurs.map((valeur) => renderTemplate`<div class="font-montserrat flex items-center gap-4"><div class="relative bg-black rounded-xl w-28 h-28 p-4 flex justify-center items-center"><img class="object-cover"${addAttribute(valeur.icone.url, "src")}${addAttribute(valeur.icone.description, "alt")}><div class="absolute w-6 h-6 bg-[--primary-color] rounded-full -translate-y-full translate-x-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="11.784" height="7.996" viewBox="0 0 11.784 7.996"><path id="check-light_1_" data-name="check-light (1)" d="M11.712,96.172a.422.422,0,0,1,0,.595l-7.156,7.156a.422.422,0,0,1-.595,0L.172,100.135a.42.42,0,0,1,.595-.595l3.491,3.491,6.859-6.859A.422.422,0,0,1,11.712,96.172Z" transform="translate(-0.05 -96.05)" fill="#fff"></path></svg></div></div><div class="w-3/4"><h5 class="font-semibold text-2xl">${valeur.titre}</h5><span>${valeur.description}</span></div></div>`)}</div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/valeurs/Valeurs.astro", void 0);

const $$Astro$k = createAstro();
const $$ValeursSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ValeursSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Valeurs", $$Valeurs, { "slug": page.slug })}` : null}<!-- {template === "Template 5" ? <Valeurs5 slug={page.slug} /> : null} -->`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/valeurs/ValeursSwitcher.astro", void 0);

const $$Astro$j = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$About;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="pt-40 pb-40 md:pb-56"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4 relative"><span class="col-span-12 text-center font-montserrat text-[--secondary-color] opacity-50 -z-1 xl:absolute right-0 top-0 text-6xl lg:text-9xl font-bold uppercase -translate-y-2/3">${page.acf.titre_about}</span><div class="col-span-12 lg:col-span-5 relative mb-20 lg:mb-0"><svg class="fill-[--primary-color] absolute top-0 right-0 lg:translate-x-1/2 -translate-y-1/3" xmlns="http://www.w3.org/2000/svg" width="89" height="145" viewBox="0 0 89 145"><g id="Groupe_9366" data-name="Groupe 9366" transform="translate(-527 -833)" opacity="0.5"><circle id="Ellipse_354" data-name="Ellipse 354" cx="2.5" cy="2.5" r="2.5" transform="translate(527 833)"></circle><circle id="Ellipse_361" data-name="Ellipse 361" cx="2.5" cy="2.5" r="2.5" transform="translate(527 861)"></circle><circle id="Ellipse_365" data-name="Ellipse 365" cx="2.5" cy="2.5" r="2.5" transform="translate(527 889)"></circle><circle id="Ellipse_369" data-name="Ellipse 369" cx="2.5" cy="2.5" r="2.5" transform="translate(527 917)"></circle><circle id="Ellipse_373" data-name="Ellipse 373" cx="2.5" cy="2.5" r="2.5" transform="translate(527 945)"></circle><circle id="Ellipse_377" data-name="Ellipse 377" cx="2.5" cy="2.5" r="2.5" transform="translate(527 973)"></circle><circle id="Ellipse_355" data-name="Ellipse 355" cx="2.5" cy="2.5" r="2.5" transform="translate(555 833)"></circle><circle id="Ellipse_358" data-name="Ellipse 358" cx="2.5" cy="2.5" r="2.5" transform="translate(555 861)"></circle><circle id="Ellipse_362" data-name="Ellipse 362" cx="2.5" cy="2.5" r="2.5" transform="translate(555 889)"></circle><circle id="Ellipse_366" data-name="Ellipse 366" cx="2.5" cy="2.5" r="2.5" transform="translate(555 917)"></circle><circle id="Ellipse_370" data-name="Ellipse 370" cx="2.5" cy="2.5" r="2.5" transform="translate(555 945)"></circle><circle id="Ellipse_374" data-name="Ellipse 374" cx="2.5" cy="2.5" r="2.5" transform="translate(555 973)"></circle><circle id="Ellipse_356" data-name="Ellipse 356" cx="2.5" cy="2.5" r="2.5" transform="translate(583 833)"></circle><circle id="Ellipse_359" data-name="Ellipse 359" cx="2.5" cy="2.5" r="2.5" transform="translate(583 861)"></circle><circle id="Ellipse_363" data-name="Ellipse 363" cx="2.5" cy="2.5" r="2.5" transform="translate(583 889)"></circle><circle id="Ellipse_367" data-name="Ellipse 367" cx="2.5" cy="2.5" r="2.5" transform="translate(583 917)"></circle><circle id="Ellipse_371" data-name="Ellipse 371" cx="2.5" cy="2.5" r="2.5" transform="translate(583 945)"></circle><circle id="Ellipse_375" data-name="Ellipse 375" cx="2.5" cy="2.5" r="2.5" transform="translate(583 973)"></circle><circle id="Ellipse_357" data-name="Ellipse 357" cx="2.5" cy="2.5" r="2.5" transform="translate(611 833)"></circle><circle id="Ellipse_360" data-name="Ellipse 360" cx="2.5" cy="2.5" r="2.5" transform="translate(611 861)"></circle><circle id="Ellipse_364" data-name="Ellipse 364" cx="2.5" cy="2.5" r="2.5" transform="translate(611 889)"></circle><circle id="Ellipse_368" data-name="Ellipse 368" cx="2.5" cy="2.5" r="2.5" transform="translate(611 917)"></circle><circle id="Ellipse_372" data-name="Ellipse 372" cx="2.5" cy="2.5" r="2.5" transform="translate(611 945)"></circle><circle id="Ellipse_376" data-name="Ellipse 376" cx="2.5" cy="2.5" r="2.5" transform="translate(611 973)"></circle></g></svg><img data-aos="zoom-in-up" class="w-full h-full object-cover aspect-video lg:aspect-square relative z-1"${addAttribute(page.acf.grande_image_about.url, "src")}${addAttribute(page.acf.grande_image_about.description, "alt")}><img class="absolute z-2 bottom-0 right-1/2 lg:right-0 w-1/2 h-1/2 object-cover aspect-square translate-x-1/2 lg:translate-x-16 translate-y-16 drop-shadow-2xl"${addAttribute(page.acf.petite_image_about.url, "src")}${addAttribute(page.acf.petite_image_about.description, "alt")}></div><div data-aos="fade-up" class="col-span-12 lg:col-span-5 lg:col-end-13 font-montserrat"><h2 class="font-semibold text-3xl lg:text-6xl mb-8">${page.acf.titre_about}</h2><div class="font-light lg:w-4/5 leading-7 mb-16 text-lg">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_about)}` })}</div><a class="bg-[--primary-color] font-montserrat text-white font-semibold py-4 px-16 rounded-full transition-all z-3" href="">${page.acf.bouton_about}</a></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/about/About.astro", void 0);

const $$Astro$i = createAstro();
const $$About3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$About3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="pt-40"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4 relative"><div data-aos="fade-up" class="col-span-12 lg:col-span-6 font-montserrat flex flex-col justify-center items-start"><h2 class="font-bold text-3xl lg:text-5xl mb-8 uppercase">${page.acf.titre_about_3}</h2><div class="font-light leading-7 mb-16 text-lg">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_about_3)}` })}</div><a class="bg-[--primary-color] font-montserrat text-white md:text-lg font-semibold py-4 px-16 rounded-xl transition-all z-3" href="">${page.acf.bouton_about_3}</a></div><div class="col-span-12 lg:col-span-5 lg:col-end-13 relative mb-20 lg:mb-0"><img data-aos="zoom-in-up" class="w-full h-full object-cover aspect-video lg:aspect-square relative rounded-3xl"${addAttribute(page.acf.image_about_3.url, "src")}${addAttribute(page.acf.image_about_3.description, "alt")}></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/about/About3.astro", void 0);

const $$Astro$h = createAstro();
const $$AboutSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AboutSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" || template === "Template 2" ? renderTemplate`${renderComponent($$result, "About", $$About, { "slug": page.slug })}` : null}${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "About3", $$About3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/about/AboutSwitcher.astro", void 0);

const $$Astro$g = createAstro();
const $$Infos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Infos;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const services = page.acf.services;
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40 bg-[--secondary-color]"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4"><div data-aos="fade-up" class="col-span-12 lg:col-span-6 mb-20 lg:mb-0"><div class="font-montserrat font-semibold text-2xl md:text-5xl mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_infos)}` })}</div><div class="font-montserrat font-light leading-7 text-lg mb-16">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_infos)}` })}</div><div class="font-montserrat font-semibold text-2xl md:text-5xl mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_services_infos)}` })}</div><div class="flex flex-col sm:flex-row justify-between sm:items-end gap-8 md:gap-0">${services.map((service) => renderTemplate`<div class="font-montserrat texte-xl uppercase flex flex-col justify-center items-center"><img class="mb-8"${addAttribute(service.icone.url, "src")}${addAttribute(service.icone.description, "alt")}><span>${service.texte}</span></div>`)}</div></div><div class="col-span-12 lg:col-span-4 lg:col-start-8 relative"><div class="absolute top-0 left-1/2 md:left-0 w-40 h-40 md:w-52 md:h-52 text-center bg-[--primary-color] -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/4 rounded-3xl flex justify-center items-center font-montserrat text-2xl md:text-5xl font-semibold text-white drop-shadow-2xl">${page.acf.encart_infos}</div><img class="w-full h-full object-cover"${addAttribute(page.acf.image_infos.url, "src")}${addAttribute(page.acf.image_infos.description, "alt")}><svg class="fill-[--primary-color] absolute bottom-0 right-0 md:translate-x-1/2 translate-y-1/3" xmlns="http://www.w3.org/2000/svg" width="89" height="145" viewBox="0 0 89 145"><g id="Groupe_9366" data-name="Groupe 9366" transform="translate(-527 -833)" opacity="0.5"><circle id="Ellipse_354" data-name="Ellipse 354" cx="2.5" cy="2.5" r="2.5" transform="translate(527 833)"></circle><circle id="Ellipse_361" data-name="Ellipse 361" cx="2.5" cy="2.5" r="2.5" transform="translate(527 861)"></circle><circle id="Ellipse_365" data-name="Ellipse 365" cx="2.5" cy="2.5" r="2.5" transform="translate(527 889)"></circle><circle id="Ellipse_369" data-name="Ellipse 369" cx="2.5" cy="2.5" r="2.5" transform="translate(527 917)"></circle><circle id="Ellipse_373" data-name="Ellipse 373" cx="2.5" cy="2.5" r="2.5" transform="translate(527 945)"></circle><circle id="Ellipse_377" data-name="Ellipse 377" cx="2.5" cy="2.5" r="2.5" transform="translate(527 973)"></circle><circle id="Ellipse_355" data-name="Ellipse 355" cx="2.5" cy="2.5" r="2.5" transform="translate(555 833)"></circle><circle id="Ellipse_358" data-name="Ellipse 358" cx="2.5" cy="2.5" r="2.5" transform="translate(555 861)"></circle><circle id="Ellipse_362" data-name="Ellipse 362" cx="2.5" cy="2.5" r="2.5" transform="translate(555 889)"></circle><circle id="Ellipse_366" data-name="Ellipse 366" cx="2.5" cy="2.5" r="2.5" transform="translate(555 917)"></circle><circle id="Ellipse_370" data-name="Ellipse 370" cx="2.5" cy="2.5" r="2.5" transform="translate(555 945)"></circle><circle id="Ellipse_374" data-name="Ellipse 374" cx="2.5" cy="2.5" r="2.5" transform="translate(555 973)"></circle><circle id="Ellipse_356" data-name="Ellipse 356" cx="2.5" cy="2.5" r="2.5" transform="translate(583 833)"></circle><circle id="Ellipse_359" data-name="Ellipse 359" cx="2.5" cy="2.5" r="2.5" transform="translate(583 861)"></circle><circle id="Ellipse_363" data-name="Ellipse 363" cx="2.5" cy="2.5" r="2.5" transform="translate(583 889)"></circle><circle id="Ellipse_367" data-name="Ellipse 367" cx="2.5" cy="2.5" r="2.5" transform="translate(583 917)"></circle><circle id="Ellipse_371" data-name="Ellipse 371" cx="2.5" cy="2.5" r="2.5" transform="translate(583 945)"></circle><circle id="Ellipse_375" data-name="Ellipse 375" cx="2.5" cy="2.5" r="2.5" transform="translate(583 973)"></circle><circle id="Ellipse_357" data-name="Ellipse 357" cx="2.5" cy="2.5" r="2.5" transform="translate(611 833)"></circle><circle id="Ellipse_360" data-name="Ellipse 360" cx="2.5" cy="2.5" r="2.5" transform="translate(611 861)"></circle><circle id="Ellipse_364" data-name="Ellipse 364" cx="2.5" cy="2.5" r="2.5" transform="translate(611 889)"></circle><circle id="Ellipse_368" data-name="Ellipse 368" cx="2.5" cy="2.5" r="2.5" transform="translate(611 917)"></circle><circle id="Ellipse_372" data-name="Ellipse 372" cx="2.5" cy="2.5" r="2.5" transform="translate(611 945)"></circle><circle id="Ellipse_376" data-name="Ellipse 376" cx="2.5" cy="2.5" r="2.5" transform="translate(611 973)"></circle></g></svg></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/infos/Infos.astro", void 0);

const $$Astro$f = createAstro();
const $$Infos3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Infos3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="pt-40"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4 relative"><div class="col-span-12 lg:col-span-5 relative mb-20 lg:mb-0"><img data-aos="zoom-in-up" class="w-full h-full object-cover aspect-video lg:aspect-square relative rounded-3xl"${addAttribute(page.acf.image_infos_3.url, "src")}${addAttribute(page.acf.image_infos_3.description, "alt")}></div><div data-aos="fade-up" class="col-span-12 lg:col-span-6 lg:col-end-13 font-montserrat flex flex-col justify-center items-start"><h2 class="font-bold text-3xl lg:text-5xl mb-8 uppercase">${page.acf.titre_infos_3}</h2><div class="font-light leading-7 mb-16 text-lg">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_infos_3)}` })}</div><a class="bg-[--primary-color] font-montserrat text-white font-semibold md:text-lg py-4 px-16 rounded-xl transition-all z-3" href="">${page.acf.bouton_infos_3}</a></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/infos/Infos3.astro", void 0);

const $$Astro$e = createAstro();
const $$InfosSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$InfosSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" || template === "Template 2" ? renderTemplate`${renderComponent($$result, "Infos", $$Infos, { "slug": page.slug })}` : null}${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Infos3", $$Infos3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/infos/InfosSwitcher.astro", void 0);

const $$Astro$d = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Cta;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40"><div class="container mx-auto"><div class="relative w-full h-auto py-28 px-16 lg:px-40 bg-[--primary-color] rounded-3xl flex flex-col justify-center items-center overflow-hidden"><div class="absolute top-0 left-0 w-full h-full bg-[--primary-color] z-2 opacity-80"></div><img class="absolute top-0 left-0 w-full h-full object-cover"${addAttribute(page.acf.background_cta.url, "src")}${addAttribute(page.acf.background_cta.description, "alt")}><div data-aos="fade-up" class="font-montserrat font-semibold text-2xl lg:text-5xl text-white text-center mb-8 z-3">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_cta)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="bg-white font-montserrat text-xs md:text-base text-[--primary-color] font-semibold py-4 px-8 md:px-16 rounded-full transition-all z-3" href="">${page.acf.bouton_cta}</a></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/cta/Cta.astro", void 0);

const $$Astro$c = createAstro();
const $$Cta3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Cta3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const nombres = page.acf.nombres_cta_3;
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 xl:col-span-8 relative"><img class="absolute bottom-0 left-0 w-full h-2/3 object-cover -z-1 rounded-3xl"${addAttribute(page.acf.background_cta_3.url, "src")}${addAttribute(page.acf.background_cta_3.description, "alt")}><div class="bg-[--primary-color] font-montserrat text-white w-1/2 px-8 py-24 rounded-3xl translate-x-8 -translate-y-8"><h2 class="uppercase font-bold text-3xl lg:text-5xl mb-8">${page.acf.titre_cta_3}</h2><p class="mb-12 w-4/5">${page.acf.texte_cta_3}</p><a data-aos="fade-up" data-aos-delay="300" class="bg-black block w-fit font-montserrat text-xs md:text-lg font-semibold py-4 px-8 md:px-16 rounded-xl transition-all z-3" href="">${page.acf.bouton_cta_3}</a></div></div><div class="col-span-4 flex flex-col justify-end gap-4 -translate-y-8">${nombres.map((nombre) => renderTemplate`<div class="bg-[--secondary-color] font-montserrat text-black rounded-xl py-8 px-10"><span class="uppercase font-bold text-4xl">${nombre.nombre}</span><p class="text-xl uppercase">${nombre.texte}</p></div>`)}</div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/cta/Cta3.astro", void 0);

const $$Astro$b = createAstro();
const $$CtaSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CtaSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" || template === "Template 2" ? renderTemplate`${renderComponent($$result, "Cta", $$Cta, { "slug": page.slug })}` : null}${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Cta3", $$Cta3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/cta/CtaSwitcher.astro", void 0);

const $$Astro$a = createAstro();
const $$Galerie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Galerie;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  page.acf.template;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative"><div class="container mx-auto"><span class="font-montserrat text-[--secondary-color] opacity-50 -z-1 absolute left-1/2 -translate-x-1/2 top-0 text-6xl lg:text-9xl font-bold uppercase">${page.acf.gros_titre_galerie}</span><div class="font-montserrat font-semibold text-2xl md:text-5xl text-center mb-20">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.petit_titre_galerie)}` })}</div><div class="grid grid-cols-12 gap-4"><div${addAttribute(`col-span-12 md:col-span-8 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_1_galerie.url, "src")}${addAttribute(page.acf.image_1_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_2_galerie.url, "src")}${addAttribute(page.acf.image_2_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_3_galerie.url, "src")}${addAttribute(page.acf.image_3_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_4_galerie.url, "src")}${addAttribute(page.acf.image_4_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_5_galerie.url, "src")}${addAttribute(page.acf.image_5_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_6_galerie.url, "src")}${addAttribute(page.acf.image_6_galerie.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-8 overflow-hidden`, "class")}><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_7_galerie.url, "src")}${addAttribute(page.acf.image_7_galerie.description, "alt")}></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/galerie/Galerie.astro", void 0);

const $$Astro$9 = createAstro();
const $$Galerie3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Galerie3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  page.acf.template;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative"><div class="container mx-auto"><h2 class="font-montserrat uppercase text-3xl lg:text-5xl mb-8 font-bold text-center">${page.acf.titre_galerie_3}</h2><div class="grid grid-cols-12 gap-4"><div${addAttribute(`col-span-12 md:col-span-8 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_1_galerie_3.url, "src")}${addAttribute(page.acf.image_1_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_2_galerie_3.url, "src")}${addAttribute(page.acf.image_2_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_3_galerie_3.url, "src")}${addAttribute(page.acf.image_3_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_4_galerie_3.url, "src")}${addAttribute(page.acf.image_4_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_5_galerie_3.url, "src")}${addAttribute(page.acf.image_5_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-4 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_6_galerie_3.url, "src")}${addAttribute(page.acf.image_6_galerie_3.description, "alt")}></div><div${addAttribute(`col-span-12 md:col-span-8 overflow-hidden rounded-3xl`, "class")}><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_7_galerie_3.url, "src")}${addAttribute(page.acf.image_7_galerie_3.description, "alt")}></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/galerie/Galerie3.astro", void 0);

const $$Astro$8 = createAstro();
const $$GalerieSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GalerieSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" || template === "Template 2" ? renderTemplate`${renderComponent($$result, "Galerie", $$Galerie, { "slug": page.slug })}` : null}${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Galerie3", $$Galerie3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/galerie/GalerieSwitcher.astro", void 0);

const $$Astro$7 = createAstro();
const $$Numbers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Numbers;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  const chiffres = page.acf.chiffres;
  return renderTemplate`${maybeRenderHead()}<section class="pt-20 pb-40 relative"><div class="container mx-auto"><span${addAttribute(`font-montserrat text-[--secondary-color] opacity-50 -z-1 absolute left-1/2 -translate-x-1/2 top-0 text-6xl lg:text-9xl font-bold uppercase ${template === "Template 4" ? "hidden" : ""}`, "class")}>${page.acf.gros_titre_chiffres}</span><h2${addAttribute(`font-montserrat text-3xl lg:text-5xl mb-16 font-bold text-center ${template === "Template 4" ? "uppercase" : ""}`, "class")}>${page.acf.titre_chiffres}</h2><div class="grid grid-cols-12 gap-4 divide-x-2 divide-[--primary-color] mb-16">${chiffres.map((chiffre) => renderTemplate`<div class="col-span-4 flex flex-col items-center justify-center font-montserrat"><span class="font-semibold lg:text-7xl mb-4">${chiffre.nombre}</span><p class="lg:text-xl">${chiffre.texte}</p></div>`)}</div><div class="flex justify-center"><a data-aos="fade-up" data-aos-delay="300"${addAttribute(`text-white mx-auto font-montserrat text-xs md:text-base bg-[--primary-color] font-semibold py-4 px-8 md:px-16 transition-all z-3 ${template === "Template 4" ? "rounded-xl" : "rounded-full"}`, "class")} href="">${page.acf.bouton_chiffres}</a></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/numbers/Numbers.astro", void 0);

const $$Astro$6 = createAstro();
const $$NumbersSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NumbersSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 2" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Numbers", $$Numbers, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/numbers/NumbersSwitcher.astro", void 0);

const $$Astro$5 = createAstro();
const $$Contact3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Contact3;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4 relative bg-[--primary-color] rounded-3xl overflow-hidden py-24"><div class="absolute top-0 left-0 w-full h-full bg-[--primary-color] z-1 opacity-80"></div><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[--primary-color] to-transparent z-1"></div><img class="absolute top-0 left-0 w-full h-full object-cover z-0"${addAttribute(page.acf.background_cta.url, "src")}${addAttribute(page.acf.background_cta.description, "alt")}><div class="col-span-4 col-start-2 z-1 font-montserrat text-white"><h2 class="font-bold uppercase text-3xl lg:text-5xl mb-6">${page.acf.titre_contact_3}</h2><p class="text-lg">${page.acf.texte_contact_3}</p></div><div class="col-span-5 col-end-12 z-1 font-montserrat font-medium text-[--secondary-color]"><form class="flex flex-wrap justify-between gap-4" action="" method="post"><input class="p-5 w-[48%] rounded-xl outline-none" type="text" name="nom" placeholder="Nom" id=""><input class="p-5 w-[48%] rounded-xl outline-none" type="text" name="prenom" placeholder="Prénom" id=""><input class="p-5 w-[48%] rounded-xl outline-none" type="email" name="email" placeholder="Email" id=""><input class="p-5 w-[48%] rounded-xl outline-none" type="tel" name="telephone" placeholder="Téléphone" id=""><textarea class="p-5 rounded-xl outline-none w-full" name="message" id="" cols="30" rows="3" placeholder="Message"></textarea><button class="rounded-xl border-white bg-transparent border text-white font-semibold py-4 px-12 mt-6 hover:bg-white hover:text-[--primary-color] transition-all" type="submit">Envoyer</button></form></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/contact/Contact3.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContactSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`<!-- {template === "Template 1" ? <Contact slug={page.slug} /> : null} -->${template === "Template 3" ? renderTemplate`${renderComponent($$result, "Contact3", $$Contact3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/contact/ContactSwitcher.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const menu = await WordpressServices.getPrimaryMenu();
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const logo = page.acf.logo_footer;
  const phone = page.acf.telephone;
  const texte = page.acf.texte_footer;
  const email = page.acf.email;
  const adresse = page.acf.adresse;
  const facebook = page.acf.facebook;
  const instagram = page.acf.instagram;
  const linkedin = page.acf.linkedin;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white font-montserrat overflow-x-hidden"><div class="container mx-auto pt-16 pb-4 border-b-2 border-white"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 lg:col-span-3 flex flex-col items-center lg:block"><img class="mb-8 w-1/4 lg:w-auto"${addAttribute(logo.url, "src")}${addAttribute(logo.description, "alt")}><p class="mb-8 lg:mb-40 opacity-80">${texte}</p><div><ul class="flex gap-4"><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(facebook, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="12.362" height="23.081" viewBox="0 0 12.362 23.081"><path id="facebook-f" d="M34.442,12.983l.641-4.177H31.075V6.1a2.089,2.089,0,0,1,2.355-2.257h1.822V.282A22.22,22.22,0,0,0,32.017,0c-3.3,0-5.458,2-5.458,5.622V8.806H22.89v4.177h3.669v10.1h4.516v-10.1Z" transform="translate(-22.89)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(instagram, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.662" height="19.658" viewBox="0 0 19.662 19.658"><path id="instagram_1_" data-name="instagram (1)" d="M9.758,36.614a5.04,5.04,0,1,0,5.04,5.04A5.032,5.032,0,0,0,9.758,36.614Zm0,8.317a3.277,3.277,0,1,1,3.277-3.277,3.283,3.283,0,0,1-3.277,3.277Zm6.422-8.523A1.176,1.176,0,1,1,15,35.232,1.173,1.173,0,0,1,16.18,36.408ZM19.518,37.6a5.818,5.818,0,0,0-1.588-4.119,5.856,5.856,0,0,0-4.119-1.588c-1.623-.092-6.488-.092-8.111,0a5.847,5.847,0,0,0-4.119,1.584A5.837,5.837,0,0,0-.006,37.6c-.092,1.623-.092,6.488,0,8.111a5.818,5.818,0,0,0,1.588,4.119A5.863,5.863,0,0,0,5.7,51.414c1.623.092,6.488.092,8.111,0a5.818,5.818,0,0,0,4.119-1.588,5.856,5.856,0,0,0,1.588-4.119c.092-1.623.092-6.483,0-8.106Zm-2.1,9.848a3.317,3.317,0,0,1-1.869,1.869c-1.294.513-4.365.395-5.795.395s-4.5.114-5.795-.395A3.317,3.317,0,0,1,2.1,47.448c-.513-1.294-.395-4.365-.395-5.795s-.114-4.5.395-5.795a3.317,3.317,0,0,1,1.869-1.869c1.294-.513,4.365-.395,5.795-.395s4.5-.114,5.795.395a3.317,3.317,0,0,1,1.869,1.869c.513,1.294.395,4.365.395,5.795S17.935,46.159,17.421,47.448Z" transform="translate(0.075 -31.825)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(linkedin, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.658" height="19.658" viewBox="0 0 19.658 19.658"><path id="linkedin-in" d="M4.4,19.668H.325V6.543H4.4ZM2.36,4.753A2.372,2.372,0,1,1,4.721,2.37,2.38,2.38,0,0,1,2.36,4.753ZM19.654,19.668H15.587V13.279c0-1.523-.031-3.475-2.119-3.475-2.119,0-2.444,1.654-2.444,3.366v6.5H6.953V6.543h3.909v1.79h.057a4.282,4.282,0,0,1,3.856-2.119c4.125,0,4.883,2.716,4.883,6.244v7.209Z" transform="translate(0 -0.01)"></path></svg></a></li></ul></div></div><div class="col-span-12 lg:col-span-3 lg:translate-x-1/3 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Menu</h5><ul class="opacity-80 flex flex-col gap-6">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul></div><div class="col-span-12 lg:col-span-2 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Contact</h5><ul class="opacity-80 flex flex-col items-center lg:items-start gap-6"><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`tel:${phone}`, "href")}>${phone}</a></li><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`mailto:${email}`, "href")}>${email}</a></li><li>${adresse}</li></ul></div><div class="col-span-12 lg:col-span-3 flex flex-col lg:translate-x-1/4"><h5 class="text-2xl font-semibold mb-8">Newsletter</h5><p class="mb-8 opacity-80">
Ne manquez aucune de nos dernières inspirations et offres exclusives
</p><div class="w-full border flex items-center justify-between rounded-full border-white p-4"><input class="bg-transparent w-4/5" placeholder="Adresse mail" type="text"><button type="submit"><svg class="fill-[--primary-color]" xmlns="http://www.w3.org/2000/svg" width="20.904" height="20.909" viewBox="0 0 20.904 20.909"><path id="paper-plane-solid" d="M20.327.225A1.306,1.306,0,0,1,20.878,1.5L18.265,18.484a1.308,1.308,0,0,1-1.8,1l-4.883-2.029-2.8,3.025a1.306,1.306,0,0,1-2.266-.89V16.181a.639.639,0,0,1,.171-.437l6.843-7.468a.652.652,0,0,0-.915-.927l-8.3,7.378-3.605-1.8A1.3,1.3,0,0,1-.01,11.792,1.316,1.316,0,0,1,.647,10.62L18.939.168a1.311,1.311,0,0,1,1.388.057Z" transform="translate(0.01 0.004)" fill=""></path></svg></button></div></div></div></div><div class="container mx-auto py-6 text-xs"><ul class="flex justify-center flex-wrap gap-4"><li><a href="#">
Conditions générales d'utilisation du site
</a></li><li><a href="#">
Charte de la protection de la vie privée
</a></li><li><a href="#">
Configuration des cookies
</a></li><li><a class="flex items-center gap-2" href=""><span>
© 2023 Site internet by
</span><svg xmlns="http://www.w3.org/2000/svg" width="12.126" height="16.083" viewBox="0 0 12.126 16.083"><path id="Tracé_520" data-name="Tracé 520" d="M11.5,16.083h-.857A7.065,7.065,0,0,1,4.4,12.477,4.236,4.236,0,0,0,.672,10.258H.427A.427.427,0,0,1,0,9.831V8.016a.427.427,0,0,1,.427-.427h6.5A2.508,2.508,0,0,0,9.446,5.366,2.463,2.463,0,0,0,7,2.668H2.966a.2.2,0,0,0-.2.2V5.4a.427.427,0,0,1-.427.427H.525A.427.427,0,0,1,.1,5.4V.427A.426.426,0,0,1,.525,0H6.881a5.224,5.224,0,0,1,5.244,5.217A5.134,5.134,0,0,1,7,10.258h-.87a6.911,6.911,0,0,1,.616.943,4.318,4.318,0,0,0,3.808,2.213H11.5a.427.427,0,0,1,.426.427v1.816a.427.427,0,0,1-.426.427" fill="#fff"></path></svg></a></li></ul></div></footer>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/footer/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer3;
  const menu = await WordpressServices.getPrimaryMenu();
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const logo = page.acf.logo_footer;
  const phone = page.acf.telephone;
  const texte = page.acf.texte_footer;
  const email = page.acf.email;
  const adresse = page.acf.adresse;
  const facebook = page.acf.facebook;
  const instagram = page.acf.instagram;
  const linkedin = page.acf.linkedin;
  return renderTemplate`${maybeRenderHead()}<footer class="text-black font-montserrat overflow-x-hidden"><div class="container mx-auto pt-16 pb-4 border-b-2 border-white"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 lg:col-span-3 flex flex-col items-center lg:block"><img class="mb-8 w-1/4 invert lg:w-auto"${addAttribute(logo.url, "src")}${addAttribute(logo.description, "alt")}><p class="mb-8 opacity-80">${texte}</p><div><ul class="flex gap-4"><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(facebook, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="12.362" height="23.081" viewBox="0 0 12.362 23.081"><path id="facebook-f" d="M34.442,12.983l.641-4.177H31.075V6.1a2.089,2.089,0,0,1,2.355-2.257h1.822V.282A22.22,22.22,0,0,0,32.017,0c-3.3,0-5.458,2-5.458,5.622V8.806H22.89v4.177h3.669v10.1h4.516v-10.1Z" transform="translate(-22.89)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(instagram, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.662" height="19.658" viewBox="0 0 19.662 19.658"><path id="instagram_1_" data-name="instagram (1)" d="M9.758,36.614a5.04,5.04,0,1,0,5.04,5.04A5.032,5.032,0,0,0,9.758,36.614Zm0,8.317a3.277,3.277,0,1,1,3.277-3.277,3.283,3.283,0,0,1-3.277,3.277Zm6.422-8.523A1.176,1.176,0,1,1,15,35.232,1.173,1.173,0,0,1,16.18,36.408ZM19.518,37.6a5.818,5.818,0,0,0-1.588-4.119,5.856,5.856,0,0,0-4.119-1.588c-1.623-.092-6.488-.092-8.111,0a5.847,5.847,0,0,0-4.119,1.584A5.837,5.837,0,0,0-.006,37.6c-.092,1.623-.092,6.488,0,8.111a5.818,5.818,0,0,0,1.588,4.119A5.863,5.863,0,0,0,5.7,51.414c1.623.092,6.488.092,8.111,0a5.818,5.818,0,0,0,4.119-1.588,5.856,5.856,0,0,0,1.588-4.119c.092-1.623.092-6.483,0-8.106Zm-2.1,9.848a3.317,3.317,0,0,1-1.869,1.869c-1.294.513-4.365.395-5.795.395s-4.5.114-5.795-.395A3.317,3.317,0,0,1,2.1,47.448c-.513-1.294-.395-4.365-.395-5.795s-.114-4.5.395-5.795a3.317,3.317,0,0,1,1.869-1.869c1.294-.513,4.365-.395,5.795-.395s4.5-.114,5.795.395a3.317,3.317,0,0,1,1.869,1.869c.513,1.294.395,4.365.395,5.795S17.935,46.159,17.421,47.448Z" transform="translate(0.075 -31.825)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(linkedin, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.658" height="19.658" viewBox="0 0 19.658 19.658"><path id="linkedin-in" d="M4.4,19.668H.325V6.543H4.4ZM2.36,4.753A2.372,2.372,0,1,1,4.721,2.37,2.38,2.38,0,0,1,2.36,4.753ZM19.654,19.668H15.587V13.279c0-1.523-.031-3.475-2.119-3.475-2.119,0-2.444,1.654-2.444,3.366v6.5H6.953V6.543h3.909v1.79h.057a4.282,4.282,0,0,1,3.856-2.119c4.125,0,4.883,2.716,4.883,6.244v7.209Z" transform="translate(0 -0.01)"></path></svg></a></li></ul></div></div><div class="col-span-12 lg:col-span-3 lg:translate-x-1/3 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Menu</h5><ul class="opacity-80 flex flex-col gap-6">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul></div><div class="col-span-12 lg:col-span-2 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Contact</h5><ul class="opacity-80 flex flex-col items-center lg:items-start gap-6"><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`tel:${phone}`, "href")}>${phone}</a></li><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`mailto:${email}`, "href")}>${email}</a></li><li>${adresse}</li></ul></div><div class="col-span-12 lg:col-span-3 flex flex-col lg:translate-x-1/4"><h5 class="text-2xl font-semibold mb-8">Newsletter</h5><p class="mb-8 opacity-80">
Ne manquez aucune de nos dernières inspirations et offres exclusives
</p><div class="w-full border flex items-center justify-between rounded-xl border-black p-4"><input class="bg-transparent w-4/5 outline-none" placeholder="Adresse mail" type="text"><button type="submit"><svg class="fill-[--primary-color]" xmlns="http://www.w3.org/2000/svg" width="20.904" height="20.909" viewBox="0 0 20.904 20.909"><path id="paper-plane-solid" d="M20.327.225A1.306,1.306,0,0,1,20.878,1.5L18.265,18.484a1.308,1.308,0,0,1-1.8,1l-4.883-2.029-2.8,3.025a1.306,1.306,0,0,1-2.266-.89V16.181a.639.639,0,0,1,.171-.437l6.843-7.468a.652.652,0,0,0-.915-.927l-8.3,7.378-3.605-1.8A1.3,1.3,0,0,1-.01,11.792,1.316,1.316,0,0,1,.647,10.62L18.939.168a1.311,1.311,0,0,1,1.388.057Z" transform="translate(0.01 0.004)" fill=""></path></svg></button></div></div></div></div><div class="container mx-auto py-6 text-xs"><ul class="flex justify-center flex-wrap gap-4"><li><a href="#">
Conditions générales d'utilisation du site
</a></li><li><a href="#">
Charte de la protection de la vie privée
</a></li><li><a href="#">
Configuration des cookies
</a></li><li><a class="flex items-center gap-2" href=""><span>
© 2023 Site internet by
</span><svg xmlns="http://www.w3.org/2000/svg" width="12.126" height="16.083" viewBox="0 0 12.126 16.083"><path id="Tracé_520" data-name="Tracé 520" d="M11.5,16.083h-.857A7.065,7.065,0,0,1,4.4,12.477,4.236,4.236,0,0,0,.672,10.258H.427A.427.427,0,0,1,0,9.831V8.016a.427.427,0,0,1,.427-.427h6.5A2.508,2.508,0,0,0,9.446,5.366,2.463,2.463,0,0,0,7,2.668H2.966a.2.2,0,0,0-.2.2V5.4a.427.427,0,0,1-.427.427H.525A.427.427,0,0,1,.1,5.4V.427A.426.426,0,0,1,.525,0H6.881a5.224,5.224,0,0,1,5.244,5.217A5.134,5.134,0,0,1,7,10.258h-.87a6.911,6.911,0,0,1,.616.943,4.318,4.318,0,0,0,3.808,2.213H11.5a.427.427,0,0,1,.426.427v1.816a.427.427,0,0,1-.426.427" fill="#fff"></path></svg></a></li></ul></div></footer>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/footer/Footer3.astro", void 0);

const $$Astro$1 = createAstro();
const $$FooterSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterSwitcher;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const template = page.acf.template;
  return renderTemplate`${template === "Template 1" || template === "Template 2" ? renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "slug": page.slug })}` : null}${template === "Template 3" || template === "Template 4" ? renderTemplate`${renderComponent($$result, "Footer3", $$Footer3, { "slug": page.slug })}` : null}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/footer/FooterSwitcher.astro", void 0);

const $$Astro = createAstro();
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
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
}, "C:/Users/Referenceur/Works/landing-page-astro/src/pages/[page].astro", void 0);

const $$file = "C:/Users/Referenceur/Works/landing-page-astro/src/pages/[page].astro";
const $$url = "/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, WordpressServices as W, _page_ as _ };
