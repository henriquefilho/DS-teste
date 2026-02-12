class AtlasIconButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  static get observedAttributes() {
    return ['icon-name', 'color', 'size', 'disabled', 'aria-label'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this._isRendering || oldValue === newValue) return;
    
    if (this.shadowRoot) {
      this.render();
    }
  }

  get iconName() {
    return this.getAttribute('icon-name') || 'plus';
  }

  get color() {
    return this.getAttribute('color') || 'secondary';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  get ariaLabel() {
    return this.getAttribute('aria-label') || '';
  }

  // Mapeia tamanho do botão para tamanho do ícone
  getIconSize() {
    const iconSizeMap = {
      'sm': '16px',   // botão 24px -> ícone 16px
      'md': '20px',   // botão 32px -> ícone 20px
      'lg': '24px',   // botão 40px -> ícone 24px
      'xl': '28px',   // botão 48px -> ícone 28px
      'xxl': '32px',  // botão 56px -> ícone 32px
      'auto': '12px'  // botão 20px -> ícone 12px
    };
    return iconSizeMap[this.size] || iconSizeMap['md'];
  }

  // Mapeia tamanho do botão para dimensões do container
  getButtonSize() {
    const buttonSizeMap = {
      'sm': '24px',
      'md': '32px',
      'lg': '40px',
      'xl': '48px',
      'xxl': '56px',
      'auto': '20px'
    };
    return buttonSizeMap[this.size] || buttonSizeMap['md'];
  }

  setupEventListeners() {
    const button = this.shadowRoot.querySelector('button');
    if (!button) return;

    button.addEventListener('click', (e) => {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    });
  }

  render() {
    if (this._isRendering) return;
    this._isRendering = true;

    const buttonSize = this.getButtonSize();
    const iconSize = this.getIconSize();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${buttonSize};
          height: ${buttonSize};
          min-width: ${buttonSize};
          min-height: ${buttonSize};
          padding: var(--atlas-padding-2xs, 4px);
          border: none;
          border-radius: var(--atlas-radius-composite-full, 9999px);
          background-color: transparent;
          cursor: pointer;
          transition: background-color 0.2s ease;
          position: relative;
          box-sizing: border-box;
        }

        /* ===== ESTADO DEFAULT: Sem background ===== */
        button.color-secondary atlas-icon {
          color: var(--atlas-button-icon-color-static-neutral, #495563);
        }

        button.color-primary atlas-icon {
          color: var(--atlas-button-icon-color-static-primary, #2851c7);
        }

        button.color-success atlas-icon {
          color: var(--atlas-button-icon-color-static-success, #146c43);
        }

        button.color-warning atlas-icon {
          color: var(--atlas-button-icon-color-static-warning, #b45309);
        }

        button.color-danger atlas-icon {
          color: var(--atlas-button-icon-color-static-danger, #b02a37);
        }

        button.color-info atlas-icon {
          color: var(--atlas-button-icon-color-static-info, #1462c7);
        }

        button.color-white atlas-icon {
          color: var(--atlas-button-icon-color-static-inverse, #fcfcfd);
        }

        /* ===== ESTADO HOVER: Background ghost ===== */
        button.color-secondary:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-neutral-hover, #e5e8ec);
        }

        button.color-primary:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-primary-hover, #ccd6f1);
        }

        button.color-success:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-success-hover, #c4e4d5);
        }

        button.color-warning:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-warning-hover, #fcebc9);
        }

        button.color-danger:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-danger-hover, #f8d1d5);
        }

        button.color-info:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-info-hover, #c4d6f1);
        }

        button.color-white:not(:disabled):hover {
          background-color: var(--atlas-button-background-color-ghost-inverse-hover, #7293e3);
        }

        /* ===== ESTADO PRESSED/ACTIVE ===== */
        button.color-secondary:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-neutral-pressed, #d1d6dc);
        }

        button.color-primary:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-primary-pressed, #9fb3e3);
        }

        button.color-success:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-success-pressed, #8fc9ab);
        }

        button.color-warning:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-warning-pressed, #f9d79a);
        }

        button.color-danger:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-danger-pressed, #f1a4ab);
        }

        button.color-info:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-info-pressed, #8fade3);
        }

        button.color-white:not(:disabled):active {
          background-color: var(--atlas-button-background-color-ghost-inverse-pressed, #476fc7);
        }

        /* ===== ESTADO FOCUS: Outline ===== */
        button:not(:disabled):focus-visible {
          outline: none;
          box-shadow: 0 0 0 var(--atlas-focus-outline-size, 2px) var(--atlas-focus-outline-color, #3359c7);
        }

        /* ===== ESTADO DISABLED ===== */
        button:disabled {
          cursor: not-allowed;
          pointer-events: none;
        }

        button.color-secondary:disabled atlas-icon,
        button.color-primary:disabled atlas-icon,
        button.color-success:disabled atlas-icon,
        button.color-warning:disabled atlas-icon,
        button.color-danger:disabled atlas-icon,
        button.color-info:disabled atlas-icon {
          color: var(--atlas-button-icon-color-disabled-default, #d1d6dc);
        }

        button.color-white:disabled atlas-icon {
          color: var(--atlas-button-icon-color-disabled-inverse, rgba(252, 252, 253, 0.5));
        }

        /* ===== ICON WRAPPER ===== */
        .btn__icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${iconSize};
          height: ${iconSize};
          font-size: ${iconSize};
          flex-shrink: 0;
        }

        /* O atlas-icon sem atributo size vai herdar o font-size do wrapper */
        .btn__icon-wrapper atlas-icon {
          width: ${iconSize};
          height: ${iconSize};
        }

        /* CRÍTICO: Ícones NUNCA devem herdar font-weight */
        .btn__icon-wrapper atlas-icon {
          font-weight: normal !important;
          font-style: normal !important;
        }
      </style>

      <button
        class="color-${this.color} size-${this.size}"
        ${this.disabled ? 'disabled' : ''}
        ${this.ariaLabel ? `aria-label="${this.ariaLabel}"` : ''}
        type="button"
      >
        <span class="btn__icon-wrapper">
          <atlas-icon name="${this.iconName}"></atlas-icon>
        </span>
      </button>
    `;

    this.setupEventListeners();
    this._isRendering = false;
  }
}

customElements.define('atlas-icon-button', AtlasIconButton);
