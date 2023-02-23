import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import '../components/hero/simple-hero';
import '../components/markdown/remote-markdown';
import '../elements/footer-block';
import { locationPage, heroSettings } from '../utils/data';
import { updateMetadata } from '../utils/metadata';

@customElement('location-page')
export class LocationPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <simple-hero page="location"></simple-hero>

      <remote-markdown path="[[source]]"></remote-markdown>

      <footer-block></footer-block>
    `;
  }

  private heroSettings = heroSettings.location;

  @property({ type: String })
  source = locationPage;

  override connectedCallback() {
    super.connectedCallback();
    updateMetadata(this.heroSettings.title, this.heroSettings.metaDescription);
  }
}
