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
        <h1 class="container-title">Call for paper is closed! 🙅‍♀️</h1>
        <p>
          Our Call for Paper is now closed! Hold tight, we'll be announcing the final agenda soon!
          In the meanwhile we collected some statistics about our C4P for you.
        </p>
        <a href="/blog/closing-the-c4p">
          <div class="cta-button">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">Read the blogpost</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }
}
