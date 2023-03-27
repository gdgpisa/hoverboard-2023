import { customElement } from '@polymer/decorators';
import '@polymer/iron-icon';
import '@polymer/paper-button';
import { html, PolymerElement } from '@polymer/polymer';
import '../utils/icons';
import './shared-styles';

@customElement('podcast-embed-block')
export class PodcastEmbedBlock extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles flex flex-alignment">
        :host {
          display: block;
          width: 100%;
          background: var(--default-primary-color);
          color: var(--text-primary-color);
          padding: 0 0;
        }

        paper-button {
          color: #000;
        }
      </style>

      <div class="container">
        <h1 class="container-title">Hear the story behind DevFest Pisa!</h1>
        <p>
          Together with the folks from <strong>Pointer Podcast</strong>, we've recorded a
          <strong>special episode</strong> about the history of DevFest Pisa. While you wait for
          DevFest Pisa, please enjoy this episode. It's also a great way to get to know the team
          behind the event!
        </p>
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/episode/3JHkecxEJUrXHlXwwndmjP?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    `;
  }
}
