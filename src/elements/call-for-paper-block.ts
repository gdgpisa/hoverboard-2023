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
          background: #34a853;
          color: var(--text-primary-color);
          padding: 16px 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">🎟️ Make sure you get your ticket!</h1>
        <p>
          Tickets are close to run out, so make sure you get yours before it's too late!
          We'll start the waiting list as soon as we run out of tickets.
        </p>
        <a href="https://bit.ly/dfpi23-tickets">
          <div class="cta-button">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">Get a ticket</span>
            </paper-button>
          </div>
        </a>
      </div>
    `;
  }
}
