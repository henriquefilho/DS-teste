/**
 * Atlas Segmented Control Component
 * 
 * Controle de entrada que permite ao usuário alternar entre diferentes visualizações
 * ou categorias de conteúdo relacionadas dentro de um mesmo contexto.
 * 
 * @element atlas-segmented-control
 * 
 * @attr {string} size - Tamanho: "sm" | "md" | "lg"
 * @attr {boolean} disabled - Define se o componente está desabilitado
 * @attr {number} selected-index - Índice do botão selecionado (0-indexed)
 * @attr {string} labels - Labels dos botões separados por vírgula
 * @attr {string} helper-text - Texto de ajuda exibido quando disabled=true
 * 
 * @fires change - Dispara quando a seleção muda { detail: { selectedIndex, label } }
 */
class AtlasSegmentedControl extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'disabled', 'selected-index', 'labels', 'helper-text'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Evita re-renderizações durante a renderização ou se o valor não mudou
    if (this._isRendering || oldValue === newValue) return;
    
    if (this.shadowRoot.innerHTML) {
      this.render();
    }
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get selectedIndex() {
    const index = parseInt(this.getAttribute('selected-index'));
    return isNaN(index) ? 0 : index;
  }

  set selectedIndex(value) {
    this.setAttribute('selected-index', value);
  }

  get labels() {
    const labelsAttr = this.getAttribute('labels') || 'Label 1,Label 2';
    const allLabels = labelsAttr.split(',').map(label => label.trim());
    
    // Limita a no máximo 3 labels
    if (allLabels.length > 3) {
      console.warn('AtlasSegmentedControl: O componente suporta no máximo 3 botões. Labels excedentes serão ignorados.');
      return allLabels.slice(0, 3);
    }
    
    return allLabels;
  }

  set labels(value) {
    if (Array.isArray(value)) {
      this.setAttribute('labels', value.join(','));
    } else {
      this.setAttribute('labels', value);
    }
  }

  get helperText() {
    return this.getAttribute('helper-text') || '';
  }

  set helperText(value) {
    this.setAttribute('helper-text', value);
  }

  handleButtonClick(index) {
    if (this.disabled) return;

    const oldIndex = this.selectedIndex;
    if (oldIndex !== index) {
      // Atualiza o atributo (vai disparar attributeChangedCallback e re-render)
      this.setAttribute('selected-index', index.toString());

      // Emitir evento de mudança
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          selectedIndex: index,
          label: this.labels[index]
        },
        bubbles: true,
        composed: true
      }));
    }
  }

  attachEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll('.segmented-control__button');
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.handleButtonClick(index));
    });
  }

  render() {
    // Protege contra re-renderizações durante a renderização
    if (this._isRendering) return;
    this._isRendering = true;

    const size = this.size;
    const disabled = this.disabled;
    const selectedIndex = this.selectedIndex;
    const labels = this.labels;
    const helperText = this.helperText;
    const showHelperText = disabled && helperText;

    // Validação: suporta apenas 2 ou 3 botões
    if (labels.length < 2) {
      console.warn('AtlasSegmentedControl: O componente requer no mínimo 2 botões');
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          box-sizing: border-box;
        }

        .segmented-control {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }

        .segmented-control__container {
          background: var(--atlas-color-surface-static-container-neutral-ultra-soft);
          background: var(--atlas-color-pale-sky-10, #FCFCFD);
          border: 1px solid var(--atlas-color-border-primary-hard);
          border: 1px solid var(--atlas-color-persian-blue-500, #0030B9);
          border-radius: var(--atlas-radius-composite-pill, 999px);
          padding: 3px;
          display: flex;
          gap: 4px;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        /* Container quando disabled */
        :host([disabled]) .segmented-control__container {
          border-color: var(--atlas-color-border-disabled);
          border-color: var(--atlas-color-pale-sky-200, #D1D6DC);
        }

        .segmented-control__button {
          flex: 1 0 0;
          background: var(--atlas-color-surface-control-inactive-default);
          background: var(--atlas-color-pale-sky-10, #FCFCFD);
          border: none;
          border-radius: var(--atlas-radius-composite-pill, 999px);
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
          color: var(--atlas-color-text-static-primary-medium);
          color: var(--atlas-color-persian-blue-500, #0030B9);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Tamanhos - Small */
        :host([size="sm"]) .segmented-control__button {
          height: 32px;
          padding: 8px 12px;
          font-size: 14px;
          min-width: 40px;
        }

        /* Tamanhos - Medium */
        :host([size="md"]) .segmented-control__button,
        :host(:not([size])) .segmented-control__button {
          height: 40px;
          padding: 8px 24px;
          font-size: 16px;
        }

        /* Tamanhos - Large */
        :host([size="lg"]) .segmented-control__button {
          height: 48px;
          padding: 12px 32px;
          font-size: 16px;
        }

        /* Botão Ativo (Selecionado) */
        .segmented-control__button--active {
          background: var(--atlas-color-surface-control-active-default);
          background: var(--atlas-color-persian-blue-500, #0030B9);
          color: var(--atlas-color-text-static-neutral-ultra-soft);
          color: var(--atlas-color-pale-sky-10, #FCFCFD);
          z-index: 1;
        }

        /* Hover - apenas botões inativos e não disabled */
        :host(:not([disabled])) .segmented-control__button:not(.segmented-control__button--active):hover {
          background: var(--atlas-color-surface-interaction-primary-ultra-soft-hover);
          background: var(--atlas-color-persian-blue-100, #CCD6F1);
        }

        /* Active/Pressed - apenas botões inativos e não disabled */
        :host(:not([disabled])) .segmented-control__button:not(.segmented-control__button--active):active {
          background: var(--atlas-color-surface-interaction-primary-ultra-soft-pressed);
          background: var(--atlas-color-persian-blue-200, #99ACE3);
        }

        /* Focus - acessibilidade */
        :host(:not([disabled])) .segmented-control__button:focus-visible {
          outline: 2px solid var(--atlas-color-border-primary-hard);
          outline: 2px solid var(--atlas-color-persian-blue-500, #0030B9);
          outline-offset: 2px;
        }

        /* Estado Disabled */
        :host([disabled]) .segmented-control__button {
          cursor: not-allowed;
          background: transparent;
          color: var(--atlas-color-text-static-disabled-level-1);
          color: var(--atlas-color-pale-sky-200, #D1D6DC);
        }

        :host([disabled]) .segmented-control__button--active {
          background: var(--atlas-color-surface-control-active-disabled);
          background: var(--atlas-color-pale-sky-200, #D1D6DC);
          color: var(--atlas-color-text-static-disabled-level-2);
          color: var(--atlas-color-pale-sky-400, #9AA4B3);
        }

        /* Helper Text (apenas quando disabled) */
        .segmented-control__helper {
          display: ${showHelperText ? 'block' : 'none'};
        }
      </style>
      <div class="segmented-control">
        <div class="segmented-control__container">
          ${labels.map((label, index) => `
            <button 
              class="segmented-control__button ${index === selectedIndex ? 'segmented-control__button--active' : ''}"
              ${disabled ? 'disabled' : ''}
              aria-pressed="${index === selectedIndex}"
              type="button"
            >
              ${label}
            </button>
          `).join('')}
        </div>
        ${showHelperText ? `
          <div class="segmented-control__helper">
            <atlas-helper-text state="default" text="${helperText}"></atlas-helper-text>
          </div>
        ` : ''}
      </div>
    `;
    
    this._isRendering = false;
    this.attachEventListeners();
  }
}

customElements.define('atlas-segmented-control', AtlasSegmentedControl);
