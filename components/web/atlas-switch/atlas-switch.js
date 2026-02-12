/**
 * Atlas Switch Component
 * Web Component para alternar entre dois estados (liga/desliga)
 * 
 * @element atlas-switch
 * @attr {string} alignment - Posição do controle: "left" | "right" (default: "left")
 * @attr {boolean} checked - Estado do switch (default: false)
 * @attr {string} label - Texto do label (default: "Label")
 * @attr {boolean} strong-label - Usa fonte semi-bold no label (default: false)
 * @attr {string} description - Texto descritivo opcional
 * @attr {string} state - Estado: "default" | "disabled" | "read-only" | "error" (default: "default")
 * @attr {string} error-text - Mensagem de erro (quando state="error")
 * @attr {boolean} icon-popover - Exibe ícone de informação ao lado do label
 * @attr {string} icon-popover-name - Nome do ícone do popover (default: "info")
 * 
 * @fires change - Disparado quando o estado do switch muda
 * 
 * @note A thumb (círculo) muda de cor por estado:
 *       - Default: Azul (#0030B9) unchecked, Branco (#FCFCFD) checked
 *       - Error: Azul (#0030B9) unchecked, Branco (#FCFCFD) checked
 *       - Read-only: Cinza neutro (#B8C0CB) para ambos checked/unchecked
 *       - Disabled unchecked: Cinza claro (#D1D6DC)
 *       - Disabled checked: Cinza médio (#9AA4B3)
 */

class AtlasSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  static get observedAttributes() {
    return ['alignment', 'checked', 'label', 'strong-label', 'description', 'state', 'error-text', 'icon-popover', 'icon-popover-name'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Evita re-renderizações durante a renderização ou se o valor não mudou
    if (this._isRendering || oldValue === newValue) return;
    this.render();
  }

  // Getters para propriedades
  get alignment() {
    return this.getAttribute('alignment') || 'left';
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  get label() {
    return this.getAttribute('label') || 'Label';
  }

  get strongLabel() {
    return this.hasAttribute('strong-label');
  }

  get description() {
    return this.getAttribute('description') || '';
  }

  get state() {
    return this.getAttribute('state') || 'default';
  }

  get errorText() {
    return this.getAttribute('error-text') || 'Error text';
  }

  get iconPopover() {
    return this.hasAttribute('icon-popover');
  }

  get iconPopoverName() {
    return this.getAttribute('icon-popover-name') || 'info';
  }

  // Setters para propriedades
  set checked(value) {
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  setupEventListeners() {
    const switchControl = this.shadowRoot.querySelector('.switch-control');
    const isInteractive = this.state === 'default' || this.state === 'error';
    
    if (switchControl && isInteractive) {
      switchControl.style.cursor = 'pointer';
      switchControl.onclick = () => this.toggle();
    } else if (switchControl) {
      switchControl.style.cursor = 'not-allowed';
      switchControl.onclick = null;
    }
  }

  toggle() {
    const isInteractive = this.state === 'default' || this.state === 'error';
    if (!isInteractive) return;

    this.checked = !this.checked;
    
    // Dispara evento personalizado
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    // Protege contra re-renderizações durante a renderização
    if (this._isRendering) return;
    this._isRendering = true;

    const isChecked = this.checked;
    const isLeft = this.alignment === 'left';
    const hasDescription = this.description.length > 0;
    const showError = this.state === 'error';
    const isDisabled = this.state === 'disabled';
    const isReadOnly = this.state === 'read-only';

    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :host {
          display: inline-flex;
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          
          /* Importa tokens globais para o Shadow DOM */
          --local-surface-inactive-default: var(--atlas-color-surface-control-inactive-default, var(--atlas-color-pale-sky-10, #FCFCFD));
          --local-surface-active-default: var(--atlas-color-surface-control-active-default, var(--atlas-color-persian-blue-500, #0030B9));
          --local-surface-inactive-disabled: var(--atlas-color-surface-control-inactive-disabled, var(--atlas-color-pale-sky-10, #FCFCFD));
          --local-surface-active-disabled: var(--atlas-color-surface-control-active-disabled, var(--atlas-color-pale-sky-200, #D1D6DC));
          --local-surface-inactive-readonly: var(--atlas-color-surface-control-inactive-read-only, var(--atlas-color-pale-sky-10, #FCFCFD));
          --local-surface-active-readonly: var(--atlas-color-surface-control-active-read-only, var(--atlas-color-pale-sky-300, #B8C0CB));
          --local-surface-inactive-error: var(--atlas-color-surface-control-inactive-error, var(--atlas-color-pale-sky-10, #FCFCFD));
          --local-surface-active-error: var(--atlas-color-surface-control-active-error, var(--atlas-color-red-ribbon-600, #B02A37));
          
          --local-border-primary: var(--atlas-color-border-primary-hard, var(--atlas-color-persian-blue-500, #0030B9));
          --local-border-disabled: var(--atlas-color-border-disabled, var(--atlas-color-pale-sky-200, #D1D6DC));
          --local-border-default: var(--atlas-color-border-default, var(--atlas-color-pale-sky-200, #D1D6DC));
          --local-border-error: var(--atlas-color-border-error-hard, var(--atlas-color-red-ribbon-600, #B02A37));
          
          --local-thumb-primary: var(--atlas-color-surface-static-shape-primary-hard, var(--atlas-color-persian-blue-500, #0030B9));
          --local-thumb-inverse: var(--atlas-color-pale-sky-10, #FCFCFD);
          --local-thumb-disabled-light: var(--atlas-color-pale-sky-200, #D1D6DC);
          --local-thumb-disabled-medium: var(--atlas-color-pale-sky-400, #9AA4B3);
          --local-thumb-neutral: var(--atlas-color-surface-static-shape-neutral-soft, var(--atlas-color-pale-sky-300, #B8C0CB));
          --local-thumb-neutral-inverse: var(--atlas-color-surface-static-container-neutral-ultra-soft, var(--atlas-color-pale-sky-10, #FCFCFD));
          --local-thumb-error: var(--atlas-color-surface-static-shape-error-hard, var(--atlas-color-red-ribbon-600, #B02A37));
          
          --local-text-neutral-hard: var(--atlas-color-text-static-neutral-hard, var(--atlas-color-pale-sky-900, #1d2125));
          --local-text-neutral-medium: var(--atlas-color-text-static-neutral-medium, var(--atlas-color-pale-sky-600, #5e6877));
          --local-text-disabled: var(--atlas-color-text-static-disabled-level-2, var(--atlas-color-pale-sky-400, #9aa4b3));
          --local-text-error: var(--atlas-color-text-static-error-medium, var(--atlas-color-red-ribbon-600, #B02A37));
          
          --local-bg-hover: var(--atlas-color-surface-interaction-neutral-ultra-soft-hover, var(--atlas-color-pale-sky-50, #F2F4F7));
        }

        .switch-wrapper {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-xs, 8px);
        }

        /* Switch Control */
        .switch-control {
          position: relative;
          width: 42px;
          height: 24px;
          flex-shrink: 0;
          border-radius: var(--atlas-radius-composite-full, 9999px);
          transition: background 0.2s ease;
        }

        /* Background - Default State */
        .switch-control.unchecked {
          background: var(--local-surface-inactive-default);
          border: 1px solid var(--local-border-primary);
        }

        .switch-control.checked {
          background: var(--local-surface-active-default);
          border: none;
        }

        /* Disabled State */
        .switch-control.disabled.unchecked {
          background: var(--local-surface-inactive-disabled);
          border: 1px solid var(--local-border-disabled);
        }

        .switch-control.disabled.checked {
          background: var(--local-surface-active-disabled);
          border: none;
        }

        /* Read-only State */
        .switch-control.read-only.unchecked {
          background: var(--local-surface-inactive-readonly);
          border: 1px solid var(--local-border-default);
        }

        .switch-control.read-only.checked {
          background: var(--local-surface-active-readonly);
          border: none;
        }

        /* Error State */
        .switch-control.error.unchecked {
          background: var(--local-surface-inactive-error);
          border: 1px solid var(--local-border-error);
        }

        .switch-control.error.checked {
          background: var(--local-surface-active-error);
          border: none;
        }

        /* Thumb (círculo) - Cores por estado:
         * - Default unchecked: Azul primário (#0030B9)
         * - Default checked: Branco (#FCFCFD)
         * - Error unchecked: Azul primário (#0030B9)
         * - Error checked: Branco (#FCFCFD)
         * - Read-only: Cinza neutro (#B8C0CB) para ambos checked/unchecked
         * - Disabled unchecked: Cinza claro (#D1D6DC)
         * - Disabled checked: Cinza médio (#9AA4B3)
         */
        .switch-thumb {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--local-thumb-primary);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .switch-control.unchecked .switch-thumb {
          left: 3px;
        }

        .switch-control.checked .switch-thumb {
          left: 21px;
          background: var(--local-thumb-inverse);
        }

        /* Thumb Colors - Disabled State */
        .switch-control.disabled.unchecked .switch-thumb {
          background: var(--local-thumb-disabled-light);
        }

        .switch-control.disabled.checked .switch-thumb {
          background: var(--local-thumb-disabled-medium);
        }

        /* Thumb Colors - Read-only State (cinza neutro para unchecked, branco para checked) */
        .switch-control.read-only.unchecked .switch-thumb {
          background: var(--local-thumb-neutral);
        }

        .switch-control.read-only.checked .switch-thumb {
          background: var(--local-thumb-neutral-inverse);
        }

        /* Thumb Colors - Error State */
        .switch-control.error.unchecked .switch-thumb {
          background: var(--local-thumb-error);
        }

        /* Content Area */
        .switch-content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-gap-2xs, 4px);
          flex: 1;
          min-width: 0;
        }

        .label-row {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-2xs, 4px);
          height: 24px;
        }

        /* Label */
        .switch-label {
          font-size: var(--atlas-typescale-label-inline-md-size, 16px);
          line-height: 1;
          letter-spacing: var(--atlas-typescale-label-inline-md-letter-spacing, 0px);
          color: var(--local-text-neutral-hard);
        }

        .switch-label.strong {
          font-weight: var(--atlas-typescale-label-inline-md-weight-strong, 600);
        }

        .switch-label.disabled {
          color: var(--local-text-disabled);
        }

        /* Description */
        .switch-description {
          font-size: var(--atlas-typescale-label-block-sm-size, 14px);
          line-height: 1.4;
          letter-spacing: var(--atlas-typescale-label-block-sm-letter-spacing, 0px);
          color: var(--local-text-neutral-medium);
        }

        .switch-description.disabled {
          color: var(--local-text-disabled);
        }

        /* Error Text */
        .error-text {
          font-size: var(--atlas-typescale-label-block-xs-size, 12px);
          line-height: 1.4;
          letter-spacing: var(--atlas-typescale-label-block-xs-letter-spacing, 0px);
          color: var(--local-text-error);
        }

        /* Non-interactive states */
        .switch-control.disabled,
        .switch-control.read-only {
          pointer-events: none;
        }
      </style>

      <div class="switch-wrapper">
        ${isLeft ? this.renderSwitch(isChecked, isDisabled, isReadOnly) : ''}
        
        <div class="switch-content">
          <div class="label-row">
            <span class="switch-label ${this.strongLabel ? 'strong' : ''} ${isDisabled ? 'disabled' : ''}">
              ${this.label}
            </span>
            ${this.iconPopover ? `
              <atlas-icon-button 
                icon-name="${this.iconPopoverName}" 
                size="sm" 
                color="primary"
                aria-label="Informações adicionais">
              </atlas-icon-button>
            ` : ''}
          </div>
          
          ${hasDescription ? `
            <div class="switch-description ${isDisabled ? 'disabled' : ''}">
              ${this.description}
            </div>
          ` : ''}
          
          ${showError ? `
            <div class="error-text">
              ${this.errorText}
            </div>
          ` : ''}
        </div>

        ${!isLeft ? this.renderSwitch(isChecked, isDisabled, isReadOnly) : ''}
      </div>
    `;

    this._isRendering = false;
    this.setupEventListeners();
  }

  renderSwitch(isChecked, isDisabled, isReadOnly) {
    const classes = [
      'switch-control',
      isChecked ? 'checked' : 'unchecked',
      isDisabled ? 'disabled' : '',
      isReadOnly ? 'read-only' : '',
      this.state === 'error' ? 'error' : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="${classes}">
        <div class="switch-thumb"></div>
      </div>
    `;
  }
}

// Registra o componente
customElements.define('atlas-switch', AtlasSwitch);
