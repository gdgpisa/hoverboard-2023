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

        .action-buttons {
          margin: 0 -8px;
          font-size: 14px;
        }

        .action-buttons paper-button {
          margin: 8px;
        }

        .action-buttons .watch-video {
          color: #fff;
        }

        .action-buttons iron-icon {
          --iron-icon-fill-color: currentColor;
          margin-right: 8px;
        }
      </style>

      <div class="container container-narrow">
        <h1 class="container-title">DevFest Pisa is Today 🎉</h1>
        <p>
          You can check the schedule directly on the website to find your talk. If you're liking the
          even, make sure to leave us a feedback!
        </p>
        <div class="action-buttons" layout horizontal wrap>
          <a href="/schedule">
            <paper-button primary invert class="icon-right">
              <span class="cta-label">See the schedule</span>
            </paper-button>
          </a>
          <a href="https://gdgpisa.it/feedbackform/">
            <paper-button class="icon-right" primary invert>
              <span class="cta-label">Leave a feedback</span>
            </paper-button>
          </a>
        </div>
      </div>
    `;
  }
}
