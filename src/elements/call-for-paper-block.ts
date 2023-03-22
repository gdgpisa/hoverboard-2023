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
          background: #f9bb04;
          color: var(--text-primary-color);
          padding: 16px 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">⚠️ Join the waiting list</h1>
        <p>
          Oops. We're sold out. But you can still join the waiting list! We'll let you know as soon
          as a spot for you frees up.
        </p>
        <a href="https://bit.ly/dfpi23-tickets">
          <div class="cta-button">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">Join the list</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }
}
