class AtlasButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  static get observedAttributes() {
    return ['label', 'variant', 'color', 'size', 'icon', 'icon-name', 'disabled', 'loading', 'full-width'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Evita re-renderizações durante a renderização ou se o valor não mudou
    if (this._isRendering || oldValue === newValue) return;
    
    if (this.shadowRoot) {
      this.render();
    }
  }

  get label() {
    return this.getAttribute('label') || this.textContent.trim() || 'Button';
  }

  get variant() {
    return this.getAttribute('variant') || 'filled';
  }

  get color() {
    return this.getAttribute('color') || 'primary';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }

  get icon() {
    return this.hasAttribute('icon');
  }

  get iconName() {
    return this.getAttribute('icon-name') || 'plus';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  get loading() {
    return this.hasAttribute('loading');
  }

  get fullWidth() {
    return this.hasAttribute('full-width');
  }

  setupEventListeners() {
    const button = this.shadowRoot.querySelector('button');
    if (!button) return;

    button.addEventListener('click', (e) => {
      if (this.disabled || this.loading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    });
  }

  render() {
    // Protege contra re-renderizações durante a renderização
    if (this._isRendering) return;
    this._isRendering = true;

    const isDisabled = this.disabled || this.loading;
    
    // Ícone ou Spinner
    const iconHTML = this.loading
      ? `<atlas-icon name="loader" size="${this.size === 'xl' ? 'md' : 'sm'}" class="btn__spinner"></atlas-icon>`
      : this.icon
        ? `<atlas-icon name="${this.iconName}" size="${this.size === 'xl' ? 'md' : 'sm'}" class="btn__icon"></atlas-icon>`
        : '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${this.fullWidth ? 'block' : 'inline-block'};
          width: ${this.fullWidth ? '100%' : 'auto'};
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--atlas-gap-2xs, 4px);
          border: none;
          border-radius: var(--atlas-button-border-radius-default, 9999px);
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          position: relative;
          white-space: nowrap;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
        }

        /* CRÍTICO: Ícones NUNCA devem herdar font-weight do botão */
        .btn__icon,
        .btn__spinner {
          font-weight: normal !important;
          font-style: normal !important;
        }

        /* Size: sm (32px) */
        button.size-sm {
          height: 32px;
          min-height: 32px;
          padding: var(--atlas-padding-xs, 8px) var(--atlas-padding-lg, 16px);
          font-size: var(--atlas-typescale-label-inline-sm-size, 14px);
        }

        /* Size: md (40px) */
        button.size-md {
          height: 40px;
          min-height: 40px;
          padding: var(--atlas-padding-sm, 12px) var(--atlas-padding-xl, 24px);
          font-size: var(--atlas-typescale-label-inline-md-size, 16px);
        }

        /* Size: lg (48px) */
        button.size-lg {
          height: 48px;
          min-height: 48px;
          padding: var(--atlas-padding-md, 16px) var(--atlas-padding-xl, 24px);
          font-size: var(--atlas-typescale-label-inline-lg-size, 18px);
        }

        /* Size: xl (56px) */
        button.size-xl {
          height: 56px;
          min-height: 56px;
          padding: var(--atlas-padding-lg, 20px) var(--atlas-padding-2xl, 32px);
          font-size: var(--atlas-typescale-label-inline-xl-size, 20px);
          gap: var(--atlas-gap-xs, 8px);
        }

        /* ========== FILLED VARIANT ========== */
        
        /* Filled - Primary */
        button.variant-filled.color-primary {
          background-color: var(--atlas-button-background-color-filled-primary-default);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-filled.color-primary:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-primary-hover);
        }

        button.variant-filled.color-primary:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-primary-pressed);
        }

        button.variant-filled.color-primary:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Filled - Danger */
        button.variant-filled.color-danger {
          background-color: var(--atlas-button-background-color-filled-danger-default);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-filled.color-danger:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-danger-hover);
        }

        button.variant-filled.color-danger:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-danger-pressed);
        }

        button.variant-filled.color-danger:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Filled - Success */
        button.variant-filled.color-success {
          background-color: var(--atlas-button-background-color-filled-success-default);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-filled.color-success:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-success-hover);
        }

        button.variant-filled.color-success:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-success-pressed);
        }

        button.variant-filled.color-success:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Filled - Warning */
        button.variant-filled.color-warning {
          background-color: var(--atlas-button-background-color-filled-warning-default);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-filled.color-warning:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-warning-hover);
        }

        button.variant-filled.color-warning:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-warning-pressed);
        }

        button.variant-filled.color-warning:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Filled - Info */
        button.variant-filled.color-info {
          background-color: var(--atlas-button-background-color-filled-info-default);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-filled.color-info:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-info-hover);
        }

        button.variant-filled.color-info:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-info-pressed);
        }

        button.variant-filled.color-info:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Filled - Inverse */
        button.variant-filled.color-inverse {
          background-color: var(--atlas-button-background-color-filled-inverse-default);
          color: var(--atlas-button-typography-color-static-primary);
        }

        button.variant-filled.color-inverse:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-inverse-hover);
        }

        button.variant-filled.color-inverse:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-filled-inverse-pressed);
        }

        button.variant-filled.color-inverse:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* CRÍTICO: Filled Disabled - texto BRANCO sobre fundo cinza */
        button.variant-filled:disabled {
          background-color: var(--atlas-button-background-color-filled-disabled);
          color: var(--atlas-button-typography-color-static-inverse);
          cursor: not-allowed;
        }

        /* EXCEÇÃO: Filled Inverse Disabled - usa tokens inverse */
        button.variant-filled.color-inverse:disabled {
          background-color: var(--atlas-button-background-color-filled-disabled);
          color: var(--atlas-button-typography-color-disabled-inverse);
        }

        /* ========== OUTLINED VARIANT ========== */

        /* Outlined - Primary */
        button.variant-outlined.color-primary {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-primary);
          color: var(--atlas-button-typography-color-static-primary);
        }

        button.variant-outlined.color-primary:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-primary-hover);
        }

        button.variant-outlined.color-primary:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-primary-pressed);
        }

        button.variant-outlined.color-primary:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Outlined - Danger */
        button.variant-outlined.color-danger {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-danger);
          color: var(--atlas-button-typography-color-static-danger);
        }

        button.variant-outlined.color-danger:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-danger-hover);
        }

        button.variant-outlined.color-danger:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-danger-pressed);
        }

        button.variant-outlined.color-danger:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Outlined - Success */
        button.variant-outlined.color-success {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-success);
          color: var(--atlas-button-typography-color-static-success);
        }

        button.variant-outlined.color-success:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-success-hover);
        }

        button.variant-outlined.color-success:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-success-pressed);
        }

        button.variant-outlined.color-success:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Outlined - Warning */
        button.variant-outlined.color-warning {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-warning);
          color: var(--atlas-button-typography-color-static-warning);
        }

        button.variant-outlined.color-warning:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-warning-hover);
        }

        button.variant-outlined.color-warning:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-warning-pressed);
        }

        button.variant-outlined.color-warning:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Outlined - Info */
        button.variant-outlined.color-info {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-info);
          color: var(--atlas-button-typography-color-static-info);
        }

        button.variant-outlined.color-info:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-info-hover);
        }

        button.variant-outlined.color-info:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-info-pressed);
        }

        button.variant-outlined.color-info:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Outlined - Inverse */
        button.variant-outlined.color-inverse {
          background-color: transparent;
          border: var(--atlas-border-solid-default, 1px) solid var(--atlas-button-border-color-inverse);
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-outlined.color-inverse:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-inverse-hover);
        }

        button.variant-outlined.color-inverse:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-outlined-inverse-pressed);
        }

        button.variant-outlined.color-inverse:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* CRÍTICO: Outlined Disabled - texto CINZA */
        button.variant-outlined:disabled {
          background-color: transparent;
          border-color: var(--atlas-button-border-color-disabled);
          color: var(--atlas-button-typography-color-disabled-default);
          cursor: not-allowed;
        }

        /* EXCEÇÃO: Outlined Inverse Disabled - usa tokens inverse */
        button.variant-outlined.color-inverse:disabled {
          border-color: var(--atlas-button-border-color-disabled);
          color: var(--atlas-button-typography-color-disabled-inverse);
        }

        /* ========== GHOST VARIANT ========== */

        /* Ghost - Primary */
        button.variant-ghost.color-primary {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-primary);
        }

        button.variant-ghost.color-primary:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-primary-hover);
        }

        button.variant-ghost.color-primary:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-primary-pressed);
        }

        button.variant-ghost.color-primary:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Ghost - Danger */
        button.variant-ghost.color-danger {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-danger);
        }

        button.variant-ghost.color-danger:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-danger-hover);
        }

        button.variant-ghost.color-danger:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-danger-pressed);
        }

        button.variant-ghost.color-danger:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Ghost - Success */
        button.variant-ghost.color-success {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-success);
        }

        button.variant-ghost.color-success:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-success-hover);
        }

        button.variant-ghost.color-success:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-success-pressed);
        }

        button.variant-ghost.color-success:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Ghost - Warning */
        button.variant-ghost.color-warning {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-warning);
        }

        button.variant-ghost.color-warning:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-warning-hover);
        }

        button.variant-ghost.color-warning:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-warning-pressed);
        }

        button.variant-ghost.color-warning:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Ghost - Info */
        button.variant-ghost.color-info {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-info);
        }

        button.variant-ghost.color-info:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-info-hover);
        }

        button.variant-ghost.color-info:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-info-pressed);
        }

        button.variant-ghost.color-info:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* Ghost - Inverse */
        button.variant-ghost.color-inverse {
          background-color: transparent;
          border: none;
          color: var(--atlas-button-typography-color-static-inverse);
        }

        button.variant-ghost.color-inverse:hover:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-inverse-hover);
        }

        button.variant-ghost.color-inverse:active:not(:disabled) {
          background-color: var(--atlas-button-background-color-ghost-inverse-pressed);
        }

        button.variant-ghost.color-inverse:focus-visible {
          outline: 2px solid var(--atlas-focus-outline-color);
          outline-offset: 2px;
        }

        /* CRÍTICO: Ghost Disabled - texto CINZA */
        button.variant-ghost:disabled {
          background-color: transparent;
          color: var(--atlas-button-typography-color-disabled-default);
          cursor: not-allowed;
        }

        /* EXCEÇÃO: Ghost Inverse Disabled - usa tokens inverse */
        button.variant-ghost.color-inverse:disabled {
          color: var(--atlas-button-typography-color-disabled-inverse);
        }

        /* ========== LOADING STATE ========== */
        
        .btn__spinner {
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
      <button 
        class="variant-${this.variant} color-${this.color} size-${this.size}"
        ${isDisabled ? 'disabled' : ''}
        ${this.loading ? 'aria-busy="true"' : ''}>
        ${iconHTML}
        ${this.label ? `<span class="btn__label">${this.label}</span>` : ''}
      </button>
    `;
    
    this._isRendering = false;
    this.setupEventListeners();
  }
}

customElements.define('atlas-button', AtlasButton);
