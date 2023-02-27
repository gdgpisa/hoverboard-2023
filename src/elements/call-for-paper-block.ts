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
          // background: var(--default-primary-color);
          background: #f57c00;
          color: var(--text-primary-color);
          padding: 16px 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">🚧 Part of the schedule is live!</h1>
        <p>
          We're publishing the schedule over the next days. It's not finalized yet, but you can
          check it out already:
        </p>
        <a href="/schedule">
          <div class="cta-button">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">Checkout the schedule</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }
}
