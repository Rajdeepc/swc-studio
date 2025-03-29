import { swcThemeDecorator } from "@spectrum-web-components/story-decorator/decorator.js";
import { html } from "lit-html";
import "./index.ts";

export default {
  decorators: [swcThemeDecorator],
};

export const story1 = () => html`<my-accordion></my-accordion> `;
