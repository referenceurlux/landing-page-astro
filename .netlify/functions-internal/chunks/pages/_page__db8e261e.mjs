/* empty css                            */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, i as renderSlot, j as renderHead, u as unescapeHTML, F as Fragment } from '../astro_0c15cc80.mjs';
import 'clsx';

class WordpressServices {
  static async getPageBySlug(slug2) {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages?slug=${slug2}`);
      const [data] = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
  static async getPageByID(id) {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages?slug=${slug}`);
      const [data] = await res.json();
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

const $$Astro$9 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  const menu = await WordpressServices.getPrimaryMenu();
  const options = await WordpressServices.getOptionsPage();
  const logo = options.logo_de_la_landing_page;
  const phone = options.telephone;
  return renderTemplate`${maybeRenderHead()}<header class="py-4 fixed w-full bg-white z-10 border-b-2 font-montserrat"><div class="container mx-auto"><nav class="flex justify-between items-center"><a class="z-10" href="/"><img${addAttribute(logo.url, "src")}${addAttribute(logo.description, "alt")}></a><ul class="gap-8 hidden xl:flex">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul><a class="bg-[--primary-color] hidden xl:block text-white font-semibold py-4 px-8 rounded-full transition-all"${addAttribute(`tel:${phone}`, "href")}>${phone}</a><button class="relative block xl:hidden group z-10 menuBtn font-semibold uppercase group"><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="stroke-black open transition-all"><path fill="" stroke="" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"></path></svg><svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="fill-black hidden close transition-all"><path fill="" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"></path></svg></button><div class="menu-mobile h-screen w-screen bg-white absolute top-0 left-0 -translate-y-full transition-all"><div class="container mx-auto py-40 flex flex-col justify-center items-center gap-8"><ul class="gap-8 flex xl:hidden text-xl uppercase">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul><a class="bg-[--primary-color] block w-fit xl:hidden text-white font-semibold py-4 px-8 rounded-full transition-all"${addAttribute(`tel:${phone}`, "href")}>${phone}</a></div></div></nav></div></header>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/header/Header.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  const menu = await WordpressServices.getPrimaryMenu();
  const options = await WordpressServices.getOptionsPage();
  const logo = options.logo_footer;
  const phone = options.telephone;
  const texte = options.texte_footer;
  const email = options.email;
  const adresse = options.adresse;
  const facebook = options.facebook;
  const instagram = options.instagram;
  const linkedin = options.linkedin;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white font-montserrat overflow-x-hidden"><div class="container mx-auto pt-16 pb-4 border-b-2 border-white"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 lg:col-span-3 flex flex-col items-center lg:block"><img class="mb-8 w-1/4 lg:w-auto"${addAttribute(logo.url, "src")}${addAttribute(logo.description, "alt")}><p class="mb-8 lg:mb-40 opacity-80 text-center">${texte}</p><div><ul class="flex gap-4"><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(facebook, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="12.362" height="23.081" viewBox="0 0 12.362 23.081"><path id="facebook-f" d="M34.442,12.983l.641-4.177H31.075V6.1a2.089,2.089,0,0,1,2.355-2.257h1.822V.282A22.22,22.22,0,0,0,32.017,0c-3.3,0-5.458,2-5.458,5.622V8.806H22.89v4.177h3.669v10.1h4.516v-10.1Z" transform="translate(-22.89)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(instagram, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.662" height="19.658" viewBox="0 0 19.662 19.658"><path id="instagram_1_" data-name="instagram (1)" d="M9.758,36.614a5.04,5.04,0,1,0,5.04,5.04A5.032,5.032,0,0,0,9.758,36.614Zm0,8.317a3.277,3.277,0,1,1,3.277-3.277,3.283,3.283,0,0,1-3.277,3.277Zm6.422-8.523A1.176,1.176,0,1,1,15,35.232,1.173,1.173,0,0,1,16.18,36.408ZM19.518,37.6a5.818,5.818,0,0,0-1.588-4.119,5.856,5.856,0,0,0-4.119-1.588c-1.623-.092-6.488-.092-8.111,0a5.847,5.847,0,0,0-4.119,1.584A5.837,5.837,0,0,0-.006,37.6c-.092,1.623-.092,6.488,0,8.111a5.818,5.818,0,0,0,1.588,4.119A5.863,5.863,0,0,0,5.7,51.414c1.623.092,6.488.092,8.111,0a5.818,5.818,0,0,0,4.119-1.588,5.856,5.856,0,0,0,1.588-4.119c.092-1.623.092-6.483,0-8.106Zm-2.1,9.848a3.317,3.317,0,0,1-1.869,1.869c-1.294.513-4.365.395-5.795.395s-4.5.114-5.795-.395A3.317,3.317,0,0,1,2.1,47.448c-.513-1.294-.395-4.365-.395-5.795s-.114-4.5.395-5.795a3.317,3.317,0,0,1,1.869-1.869c1.294-.513,4.365-.395,5.795-.395s4.5-.114,5.795.395a3.317,3.317,0,0,1,1.869,1.869c.513,1.294.395,4.365.395,5.795S17.935,46.159,17.421,47.448Z" transform="translate(0.075 -31.825)"></path></svg></a></li><li class="w-12 h-12 bg-white rounded-full"><a class="w-full h-full flex justify-center items-center"${addAttribute(linkedin, "href")} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="19.658" height="19.658" viewBox="0 0 19.658 19.658"><path id="linkedin-in" d="M4.4,19.668H.325V6.543H4.4ZM2.36,4.753A2.372,2.372,0,1,1,4.721,2.37,2.38,2.38,0,0,1,2.36,4.753ZM19.654,19.668H15.587V13.279c0-1.523-.031-3.475-2.119-3.475-2.119,0-2.444,1.654-2.444,3.366v6.5H6.953V6.543h3.909v1.79h.057a4.282,4.282,0,0,1,3.856-2.119c4.125,0,4.883,2.716,4.883,6.244v7.209Z" transform="translate(0 -0.01)"></path></svg></a></li></ul></div></div><div class="col-span-12 lg:col-span-3 lg:translate-x-1/3 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Menu</h5><ul class="opacity-80 flex flex-col gap-6">${menu.map((item) => renderTemplate`<li class="hover:text-[--primary-color] transition-all"><a${addAttribute(item.title, "href")}>${item.title}</a></li>`)}</ul></div><div class="col-span-12 lg:col-span-2 flex flex-col items-center lg:block"><h5 class="text-2xl font-semibold mb-8">Contact</h5><ul class="opacity-80 flex flex-col items-center lg:items-start gap-6"><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`tel:${phone}`, "href")}>${phone}</a></li><li><a class="hover:text-[--primary-color] transition-all"${addAttribute(`mailto:${email}`, "href")}>${email}</a></li><li>${adresse}</li></ul></div><div class="col-span-12 lg:col-span-3 flex flex-col items-center lg:translate-x-1/4"><h5 class="text-2xl font-semibold mb-8">Newsletter</h5><p class="mb-8 opacity-80 lg:w-3/4 text-center">
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const options = await WordpressServices.getOptionsPage();
  const primaryColor = options.couleur_principale;
  const secondaryColor = options.couleur_secondaire;
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><meta name="generator"', "><title>", "</title>", "</head><body", ' class="overflow-x-hidden">', "", "", '<script src="https://unpkg.com/aos@next/dist/aos.js"><\/script><script>\n      AOS.init();\n    <\/script></body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute({
    "--primary-color": primaryColor,
    "--secondary-color": secondaryColor
  }, "style"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Referenceur/Works/landing-page-astro/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const bandeau = page.acf.bandeau_hero;
  return renderTemplate`${maybeRenderHead()}<section class="lg:h-screen w-full relative"><img class="absolute w-full h-full object-cover aspect-video"${addAttribute(page.acf.background_hero.url, "src")}${addAttribute(page.acf.background_hero.description, "alt")}><div class="absolute w-full h-3/4 top-0 left-0 bg-gradient-to-b from-black to-transparent z-2"></div><div class="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-2"></div><div class="container mx-auto flex items-center flex-col justify-center h-screen lg:h-full"><div data-aos="fade-up" class="text-3xl xl:text-6xl text-white z-3 font-semibold font-montserrat w-3/4 mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_hero)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="bg-[--primary-color] font-montserrat text-white font-semibold py-4 px-16 rounded-full transition-all z-3" href="">${page.acf.cta_hero}</a></div><div class="relative lg:absolute w-full bottom-0 left-0 bg-[--primary-color] z-3"><div class="container mx-auto flex gap-8 lg:gap-4 justify-center flex-wrap lg:flex-row xl:justify-between items-center font-montserrat text-white text-xl py-8">${bandeau.map((item) => renderTemplate`<div class="flex items-center justify-center text-sm lg:text-base"><img class="mr-4"${addAttribute(item.icone.url, "src")}${addAttribute(item.icone.description, "alt")}><span>${item.texte}</span></div>`)}</div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/hero/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="pt-40 pb-40 md:pb-56"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4 relative"><span class="col-span-12 text-center font-montserrat text-[--secondary-color] opacity-50 -z-1 xl:absolute right-0 top-0 text-6xl lg:text-9xl font-bold uppercase -translate-y-2/3">${page.acf.titre_about}</span><div class="col-span-12 lg:col-span-5 relative mb-20 lg:mb-0"><svg class="fill-[--primary-color] absolute top-0 right-0 lg:translate-x-1/2 -translate-y-1/3" xmlns="http://www.w3.org/2000/svg" width="89" height="145" viewBox="0 0 89 145"><g id="Groupe_9366" data-name="Groupe 9366" transform="translate(-527 -833)" opacity="0.5"><circle id="Ellipse_354" data-name="Ellipse 354" cx="2.5" cy="2.5" r="2.5" transform="translate(527 833)"></circle><circle id="Ellipse_361" data-name="Ellipse 361" cx="2.5" cy="2.5" r="2.5" transform="translate(527 861)"></circle><circle id="Ellipse_365" data-name="Ellipse 365" cx="2.5" cy="2.5" r="2.5" transform="translate(527 889)"></circle><circle id="Ellipse_369" data-name="Ellipse 369" cx="2.5" cy="2.5" r="2.5" transform="translate(527 917)"></circle><circle id="Ellipse_373" data-name="Ellipse 373" cx="2.5" cy="2.5" r="2.5" transform="translate(527 945)"></circle><circle id="Ellipse_377" data-name="Ellipse 377" cx="2.5" cy="2.5" r="2.5" transform="translate(527 973)"></circle><circle id="Ellipse_355" data-name="Ellipse 355" cx="2.5" cy="2.5" r="2.5" transform="translate(555 833)"></circle><circle id="Ellipse_358" data-name="Ellipse 358" cx="2.5" cy="2.5" r="2.5" transform="translate(555 861)"></circle><circle id="Ellipse_362" data-name="Ellipse 362" cx="2.5" cy="2.5" r="2.5" transform="translate(555 889)"></circle><circle id="Ellipse_366" data-name="Ellipse 366" cx="2.5" cy="2.5" r="2.5" transform="translate(555 917)"></circle><circle id="Ellipse_370" data-name="Ellipse 370" cx="2.5" cy="2.5" r="2.5" transform="translate(555 945)"></circle><circle id="Ellipse_374" data-name="Ellipse 374" cx="2.5" cy="2.5" r="2.5" transform="translate(555 973)"></circle><circle id="Ellipse_356" data-name="Ellipse 356" cx="2.5" cy="2.5" r="2.5" transform="translate(583 833)"></circle><circle id="Ellipse_359" data-name="Ellipse 359" cx="2.5" cy="2.5" r="2.5" transform="translate(583 861)"></circle><circle id="Ellipse_363" data-name="Ellipse 363" cx="2.5" cy="2.5" r="2.5" transform="translate(583 889)"></circle><circle id="Ellipse_367" data-name="Ellipse 367" cx="2.5" cy="2.5" r="2.5" transform="translate(583 917)"></circle><circle id="Ellipse_371" data-name="Ellipse 371" cx="2.5" cy="2.5" r="2.5" transform="translate(583 945)"></circle><circle id="Ellipse_375" data-name="Ellipse 375" cx="2.5" cy="2.5" r="2.5" transform="translate(583 973)"></circle><circle id="Ellipse_357" data-name="Ellipse 357" cx="2.5" cy="2.5" r="2.5" transform="translate(611 833)"></circle><circle id="Ellipse_360" data-name="Ellipse 360" cx="2.5" cy="2.5" r="2.5" transform="translate(611 861)"></circle><circle id="Ellipse_364" data-name="Ellipse 364" cx="2.5" cy="2.5" r="2.5" transform="translate(611 889)"></circle><circle id="Ellipse_368" data-name="Ellipse 368" cx="2.5" cy="2.5" r="2.5" transform="translate(611 917)"></circle><circle id="Ellipse_372" data-name="Ellipse 372" cx="2.5" cy="2.5" r="2.5" transform="translate(611 945)"></circle><circle id="Ellipse_376" data-name="Ellipse 376" cx="2.5" cy="2.5" r="2.5" transform="translate(611 973)"></circle></g></svg><img data-aos="zoom-in-up" class="w-full h-full object-cover aspect-video lg:aspect-square relative z-1"${addAttribute(page.acf.grande_image_about.url, "src")}${addAttribute(page.acf.grande_image_about.description, "alt")}><img class="absolute z-2 bottom-0 right-1/2 lg:right-0 w-1/2 h-1/2 object-cover aspect-square translate-x-1/2 lg:translate-x-16 translate-y-16 drop-shadow-2xl"${addAttribute(page.acf.petite_image_about.url, "src")}${addAttribute(page.acf.petite_image_about.description, "alt")}></div><div data-aos="fade-up" class="col-span-12 lg:col-span-5 lg:col-end-13 font-montserrat"><h2 class="font-semibold text-3xl lg:text-6xl mb-8">${page.acf.titre_about}</h2><div class="font-light lg:w-4/5 leading-7 mb-16 text-lg">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_about)}` })}</div><a class="bg-[--primary-color] font-montserrat text-white font-semibold py-4 px-16 rounded-full transition-all z-3" href="">${page.acf.bouton_about}</a></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/about/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  const page = await WordpressServices.getPageBySlug("accueil");
  return renderTemplate`${maybeRenderHead()}<section class="pt-20 pb-40 relative"><div class="container mx-auto"><span class="font-montserrat text-[--secondary-color] opacity-50 -z-1 absolute left-1/2 -translate-x-1/2 top-0 text-6xl lg:text-9xl font-bold uppercase">${page.acf.gros_titre_contact}</span><div class="font-montserrat font-semibold text-2xl md:text-5xl text-center mb-20">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.petit_titre_contact)}` })}</div><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.shortcode_formulaire_contact)}` })}</div><div class="grid grid-cols-12 gap-4"><div class="col-span-12 xl:col-span-6 xl:col-start-4"><iframe class="h-[900px] xl:h-[700px]" src="https://pages.lu/wordpress/contact/" frameborder="0" width="100%" height=""></iframe></div></div><!-- <form id="contactForm">
      <div class="grid grid-cols-12 gap-4 font-montserrat font-semibold">
        <div class="col-span-3 col-start-4">
          <input
            class="bg-[--secondary-color] outline-none py-8 px-16 rounded-3xl w-full focus:border focus:border-[--primary-color] transition-all"
            type="text"
            id="nom"
            name="nom"
            placeholder="Nom"
            required
          />
        </div>
        <div class="col-span-3">
          <input
            class="bg-[--secondary-color] outline-none py-8 px-16 rounded-3xl w-full focus:border focus:border-[--primary-color] transition-all"
            type="text"
            id="prenom"
            name="prenom"
            placeholder="Prénom"
            required
          />
        </div>
        <div class="col-span-3 col-start-4">
          <input
            class="bg-[--secondary-color] outline-none py-8 px-16 rounded-3xl w-full focus:border focus:border-[--primary-color] transition-all"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="col-span-3">
          <input
            class="bg-[--secondary-color] outline-none py-8 px-16 rounded-3xl w-full focus:border focus:border-[--primary-color] transition-all"
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Téléphone"
            required
          />
        </div>
        <div class="col-span-6 col-start-4">
          <textarea
            class="bg-[--secondary-color] outline-none py-8 px-16 rounded-3xl w-full focus:border focus:border-[--primary-color] transition-all"
            id="message"
            name="message"
            placeholder="Message"
            rows="5"
            required></textarea>
        </div>
        <div class="col-span-2 col-start-6 mt-16">
          <button
            class="bg-[--primary-color] py-4 w-full text-white rounded-full sendBtn"
            type="submit"
            value="Envoyer"></button>
        </div>
      </div>
    </form> --></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/contact/Contact.astro", void 0);

const $$Astro$3 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cta;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40"><div class="container mx-auto"><div class="relative w-full h-auto py-28 px-16 lg:px-40 bg-[--primary-color] rounded-3xl flex flex-col justify-center items-center overflow-hidden"><div class="absolute top-0 left-0 w-full h-full bg-[--primary-color] z-2 opacity-80"></div><img class="absolute top-0 left-0 w-full h-full object-cover"${addAttribute(page.acf.background_cta.url, "src")}${addAttribute(page.acf.background_cta.description, "alt")}><div data-aos="fade-up" class="font-montserrat font-semibold text-2xl lg:text-5xl text-white text-center mb-8 z-3">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_cta)}` })}</div><a data-aos="fade-up" data-aos-delay="300" class="bg-white font-montserrat text-xs md:text-base text-[--primary-color] font-semibold py-4 px-8 md:px-16 rounded-full transition-all z-3" href="">${page.acf.bouton_cta}</a></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/cta/Cta.astro", void 0);

const $$Astro$2 = createAstro();
const $$Galerie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galerie;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative"><div class="container mx-auto"><span class="font-montserrat text-[--secondary-color] opacity-50 -z-1 absolute left-1/2 -translate-x-1/2 top-0 text-6xl lg:text-9xl font-bold uppercase">${page.acf.gros_titre_galerie}</span><div class="font-montserrat font-semibold text-2xl md:text-5xl text-center mb-20">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.petit_titre_galerie)}` })}</div><div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-8"><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_1_galerie.url, "src")}${addAttribute(page.acf.image_1_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-4"><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_2_galerie.url, "src")}${addAttribute(page.acf.image_2_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-4"><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_3_galerie.url, "src")}${addAttribute(page.acf.image_3_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-4"><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_4_galerie.url, "src")}${addAttribute(page.acf.image_4_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-4"><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_5_galerie.url, "src")}${addAttribute(page.acf.image_5_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-4"><img class="w-full h-full object-cover aspect-square"${addAttribute(page.acf.image_6_galerie.url, "src")}${addAttribute(page.acf.image_6_galerie.description, "alt")}></div><div class="col-span-12 md:col-span-8"><img class="w-full h-full object-cover aspect-video"${addAttribute(page.acf.image_7_galerie.url, "src")}${addAttribute(page.acf.image_7_galerie.description, "alt")}></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/galerie/Galerie.astro", void 0);

const $$Astro$1 = createAstro();
const $$Infos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Infos;
  const { slug } = Astro2.props;
  const page = await WordpressServices.getPageBySlug(slug);
  const services = page.acf.services;
  return renderTemplate`${maybeRenderHead()}<section class="py-28 md:py-40 bg-[--secondary-color]"><div class="container mx-auto"><div class="grid grid-cols-12 gap-4"><div data-aos="fade-up" class="col-span-12 lg:col-span-6 mb-20 lg:mb-0"><div class="font-montserrat font-semibold text-2xl md:text-5xl mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_infos)}` })}</div><div class="font-montserrat font-light leading-7 text-lg mb-16">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.texte_infos)}` })}</div><div class="font-montserrat font-semibold text-2xl md:text-5xl mb-8">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(page.acf.titre_services_infos)}` })}</div><div class="flex flex-col sm:flex-row justify-between sm:items-end gap-8 md:gap-0">${services.map((service) => renderTemplate`<div class="font-montserrat texte-xl uppercase flex flex-col justify-center items-center"><img class="mb-8"${addAttribute(service.icone.url, "src")}${addAttribute(service.icone.description, "alt")}><span>${service.texte}</span></div>`)}</div></div><div class="col-span-12 lg:col-span-4 lg:col-start-8 relative"><div class="absolute top-0 left-1/2 md:left-0 w-40 h-40 md:w-52 md:h-52 text-center bg-[--primary-color] -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/4 rounded-3xl flex justify-center items-center font-montserrat text-2xl md:text-5xl font-semibold text-white drop-shadow-2xl">${page.acf.encart_infos}</div><img class="w-full h-full object-cover"${addAttribute(page.acf.image_infos.url, "src")}${addAttribute(page.acf.image_infos.description, "alt")}><svg class="fill-[--primary-color] absolute bottom-0 right-0 md:translate-x-1/2 translate-y-1/3" xmlns="http://www.w3.org/2000/svg" width="89" height="145" viewBox="0 0 89 145"><g id="Groupe_9366" data-name="Groupe 9366" transform="translate(-527 -833)" opacity="0.5"><circle id="Ellipse_354" data-name="Ellipse 354" cx="2.5" cy="2.5" r="2.5" transform="translate(527 833)"></circle><circle id="Ellipse_361" data-name="Ellipse 361" cx="2.5" cy="2.5" r="2.5" transform="translate(527 861)"></circle><circle id="Ellipse_365" data-name="Ellipse 365" cx="2.5" cy="2.5" r="2.5" transform="translate(527 889)"></circle><circle id="Ellipse_369" data-name="Ellipse 369" cx="2.5" cy="2.5" r="2.5" transform="translate(527 917)"></circle><circle id="Ellipse_373" data-name="Ellipse 373" cx="2.5" cy="2.5" r="2.5" transform="translate(527 945)"></circle><circle id="Ellipse_377" data-name="Ellipse 377" cx="2.5" cy="2.5" r="2.5" transform="translate(527 973)"></circle><circle id="Ellipse_355" data-name="Ellipse 355" cx="2.5" cy="2.5" r="2.5" transform="translate(555 833)"></circle><circle id="Ellipse_358" data-name="Ellipse 358" cx="2.5" cy="2.5" r="2.5" transform="translate(555 861)"></circle><circle id="Ellipse_362" data-name="Ellipse 362" cx="2.5" cy="2.5" r="2.5" transform="translate(555 889)"></circle><circle id="Ellipse_366" data-name="Ellipse 366" cx="2.5" cy="2.5" r="2.5" transform="translate(555 917)"></circle><circle id="Ellipse_370" data-name="Ellipse 370" cx="2.5" cy="2.5" r="2.5" transform="translate(555 945)"></circle><circle id="Ellipse_374" data-name="Ellipse 374" cx="2.5" cy="2.5" r="2.5" transform="translate(555 973)"></circle><circle id="Ellipse_356" data-name="Ellipse 356" cx="2.5" cy="2.5" r="2.5" transform="translate(583 833)"></circle><circle id="Ellipse_359" data-name="Ellipse 359" cx="2.5" cy="2.5" r="2.5" transform="translate(583 861)"></circle><circle id="Ellipse_363" data-name="Ellipse 363" cx="2.5" cy="2.5" r="2.5" transform="translate(583 889)"></circle><circle id="Ellipse_367" data-name="Ellipse 367" cx="2.5" cy="2.5" r="2.5" transform="translate(583 917)"></circle><circle id="Ellipse_371" data-name="Ellipse 371" cx="2.5" cy="2.5" r="2.5" transform="translate(583 945)"></circle><circle id="Ellipse_375" data-name="Ellipse 375" cx="2.5" cy="2.5" r="2.5" transform="translate(583 973)"></circle><circle id="Ellipse_357" data-name="Ellipse 357" cx="2.5" cy="2.5" r="2.5" transform="translate(611 833)"></circle><circle id="Ellipse_360" data-name="Ellipse 360" cx="2.5" cy="2.5" r="2.5" transform="translate(611 861)"></circle><circle id="Ellipse_364" data-name="Ellipse 364" cx="2.5" cy="2.5" r="2.5" transform="translate(611 889)"></circle><circle id="Ellipse_368" data-name="Ellipse 368" cx="2.5" cy="2.5" r="2.5" transform="translate(611 917)"></circle><circle id="Ellipse_372" data-name="Ellipse 372" cx="2.5" cy="2.5" r="2.5" transform="translate(611 945)"></circle><circle id="Ellipse_376" data-name="Ellipse 376" cx="2.5" cy="2.5" r="2.5" transform="translate(611 973)"></circle></g></svg></div></div></div></section>`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/components/infos/Infos.astro", void 0);

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
  console.log(page);
  if (!page)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page.slug }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "slug": page.slug })}${renderComponent($$result2, "About", $$About, { "slug": page.slug })}${renderComponent($$result2, "Infos", $$Infos, { "slug": page.slug })}${renderComponent($$result2, "Cta", $$Cta, { "slug": page.slug })}${renderComponent($$result2, "Galerie", $$Galerie, { "slug": page.slug })}${renderComponent($$result2, "Contact", $$Contact, { "slug": page.slug })}` })}`;
}, "C:/Users/Referenceur/Works/landing-page-astro/src/pages/[page].astro", void 0);

const $$file = "C:/Users/Referenceur/Works/landing-page-astro/src/pages/[page].astro";
const $$url = "/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, WordpressServices as W, _page_ as _, $$Layout as a };
