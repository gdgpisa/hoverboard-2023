import { customElement } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import '../utils/icons';
import './shared-styles';

@customElement('call-for-paper-block')
export class CallForPaperBlock extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          display: flex;
          width: 100%;
          background: var(--default-primary-color);
          color: var(--text-primary-color);
          padding: 16px 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">Call for paper is open! 📣</h1>
        <p>
          Our Call for Paper is open! We are looking for speakers to share their knowledge and
          experience with the community. If you have something to share, submit your talk proposal
          now! The deadline is the 31st of January.
        </p>
        <a href="https://sessionize.com/devfest-pisa-2023">
          <div class="cta-button">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">Submit your Talk!</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }
}
