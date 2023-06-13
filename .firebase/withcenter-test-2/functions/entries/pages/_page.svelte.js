import { c as create_ssr_component, f as add_attribute, h as each, e as escape } from "../../chunks/index.js";
import _ from "lodash";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.s-y_bCXRrkrYfP{display:flex;flex-direction:column;position:absolute;background-color:pink;top:10%;right:50%;transform:translateX(50%)}input.s-y_bCXRrkrYfP,button.s-y_bCXRrkrYfP,.container.s-y_bCXRrkrYfP{border-radius:0.25rem}.amount.s-y_bCXRrkrYfP,.currency.s-y_bCXRrkrYfP,.container.s-y_bCXRrkrYfP{padding:0.75rem}.currency.s-y_bCXRrkrYfP{margin-top:0.2rem}.convert.s-y_bCXRrkrYfP{margin-top:0.5rem;padding:0.5rem}.result.s-y_bCXRrkrYfP,.currency.s-y_bCXRrkrYfP{text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currency = 0;
  let amount = 1;
  let currencies = {};
  let displayCurrency = "";
  $$result.css.add(css);
  return `<div class="container s-y_bCXRrkrYfP"><h1>Currency Converter</h1>
    <span>amount</span>
    <input class="amount s-y_bCXRrkrYfP" type="text"${add_attribute("value", amount, 0)}>
    <br>
    <select class="currency s-y_bCXRrkrYfP">${each(_.orderBy(Object.entries(currencies), [], ["asc"]), ([name, id]) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}  ${escape(id.currencyName)}</option>`;
  })}</select>
    <select class="currency s-y_bCXRrkrYfP">${each(_.orderBy(Object.entries(currencies), [], ["asc"]), ([name, id]) => {
    return `<option${add_attribute("value", name, 0)}>${escape(name)}  ${escape(id.currencyName)}</option>`;
  })}</select>
    <button class="convert s-y_bCXRrkrYfP">convert</button>
    <p class="result s-y_bCXRrkrYfP">${escape(currency.toFixed(2))} ${escape(displayCurrency.toUpperCase())}</p>
</div>`;
});
export {
  Page as default
};
