// By Westbrook Johnson @westbrookj

import { LitElement, html, customElement, TemplateResult } from "lit-element";
import "@spectrum-web-components/accordion/sp-accordion.js";
import "@spectrum-web-components/accordion/sp-accordion-item.js";

@customElement("my-accordion")
export default class MyAccordion extends LitElement {
  protected render(): TemplateResult {
    return html`
      <h1>
        The many layers of Spectrum
      </h1>
      <sp-accordion open>
        <sp-accordion-item open label="Spectrum design">
          <p>
            The visual rules of Adobe's Spectrum design system are developed by
            the Spectrum design team to work across a number of digital
            contexts. Spectrum design is delivered across web, desktop native,
            iOS, Android, etc.
          </p>
        </sp-accordion-item>
        <sp-accordion-item label="Spectrum DNA">
          <p>
            These visual rules are then deconstructed into individual colors,
            measurements and values that are required to describe them across
            each of these contexts. This dictionary of design tokens in known as
            Spectrum DNA.
          </p>
        </sp-accordion-item>
        <sp-accordion-item label="Spectrum CSS">
          <p>
            Along with the various other platforms for which Spectrum design is
            destined, Spectrum CSS consumed the tokens distributed as Spectrum
            DNA to give life to a CSS Custom Property powered CSS implementation
            of the design system. Those CSS Custom Properties are the foundation
            on top of which all of the themeing and customization available when
            deploying Spectrum on the web are built.
          </p>
        </sp-accordion-item>
        <sp-accordion-item label="Spectrum Web Components">
          <p>
            Where Spectrum CSS ensures design fidelity on the web, Spectrum Web
            Component consumes those rules and beathes functional life into
            those visual patterns for use in your web applications. Across a
            diverse and growing number of Spectrum design patterns the custom
            elements that are ditributed by SWC make deploying a Spectrum design
            powered application on the web about as complicated as leveraging an
            <code>${"<input />"}</code> element.
          </p>
        </sp-accordion-item>
      </sp-accordion>
    `;
  }
}
