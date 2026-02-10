/**
 * Atlas Helper Text Component
 * 
 * Texto curto e contextual posicionado abaixo de campos de entrada.
 * Fornece orientações, informações úteis e feedbacks sobre o estado do campo.
 * 
 * @element atlas-helper-text
 * 
 * @attr {string} state - Estado visual: "default" | "error" | "warning"
 * @attr {string} text - Conteúdo do texto (alternativa ao slot)
 * 
 * @slot - Slot padrão para conteúdo do texto
 */
class AtlasHelperText extends HTMLElement {
  static get observedAttributes() {
    return ['state', 'text'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._initialized = false;
  }

  connectedCallback() {
    if (!this._initialized) {
      this._setupTemplate();
      this._initialized = true;
    }
    this._updateState();
    this._updateText();
  }

  attributeChangedCallback(name) {
    if (!this._initialized) return;
    
    if (name === 'state') {
      this._updateState();
    } else if (name === 'text') {
      this._updateText();
    }
  }

  get state() {
    return this.getAttribute('state') || 'default';
  }

  set state(value) {
    this.setAttribute('state', value);
  }

  get text() {
    return this.getAttribute('text') || '';
  }

  set text(value) {
    this.setAttribute('text', value);
  }

  _setupTemplate() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          box-sizing: border-box;
        }

        .helper-text {
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0;
          white-space: normal;
          text-align: left;
          flex: 1 0 0;
          min-width: 0;
          margin: 0;
        }

        /* Estados de cor - com fallbacks */
        .helper-text--default {
          color: var(--atlas-color-text-static-neutral-medium);
          color: var(--atlas-color-pale-sky-600, #5e6877);
        }

        .helper-text--error {
          color: var(--atlas-color-text-static-error-medium);
          color: var(--atlas-color-red-ribbon-600, #b02a37);
        }

        .helper-text--warning {
          color: var(--atlas-color-text-static-warning-medium);
          color: var(--atlas-color-clementine-600, #b45309);
        }

        .helper-text__attr {
          display: none;
        }

        .helper-text__attr--visible {
          display: inline;
        }

        .helper-text__slot {
          display: inline;
        }

        .helper-text__slot--hidden {
          display: none;
        }
      </style>
      <p class="helper-text helper-text--default">
        <span class="helper-text__attr"></span>
        <span class="helper-text__slot"><slot></slot></span>
      </p>
    `;
  }

  _updateState() {
    const p = this.shadowRoot.querySelector('.helper-text');
    if (!p) return;

    const state = this.state;
    
    // Remove todas as classes de estado
    p.classList.remove('helper-text--default', 'helper-text--error', 'helper-text--warning');
    
    // Adiciona a classe correspondente ao estado atual
    const stateClass = `helper-text--${state}`;
    p.classList.add(stateClass);
  }

  _updateText() {
    const attrSpan = this.shadowRoot.querySelector('.helper-text__attr');
    const slotSpan = this.shadowRoot.querySelector('.helper-text__slot');
    if (!attrSpan || !slotSpan) return;

    const text = this.text;
    const hasTextAttr = text.length > 0;

    if (hasTextAttr) {
      attrSpan.textContent = text;
      attrSpan.classList.add('helper-text__attr--visible');
      slotSpan.classList.add('helper-text__slot--hidden');
    } else {
      attrSpan.textContent = '';
      attrSpan.classList.remove('helper-text__attr--visible');
      slotSpan.classList.remove('helper-text__slot--hidden');
    }
  }
}

customElements.define('atlas-helper-text', AtlasHelperText);
