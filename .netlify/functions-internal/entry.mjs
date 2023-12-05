import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_928d75ef.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_3cf84f16.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_7a1e0850.mjs');
const _page1  = () => import('./chunks/index_590cc2b3.mjs');
const _page2  = () => import('./chunks/_page__d7c30dd2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/[page].astro", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
