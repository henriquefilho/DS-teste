/**
 * Atlas Link Button Component
 * 
 * Componente híbrido que visualmente se comporta como um link (sem bordas ou backgrounds sólidos),
 * mas funcionalmente pode disparar uma ação de sistema ou navegar para outra página.
 * 
 * @element atlas-link-button
 * @attr {string} label - Texto exibido no link-button
 * @attr {string} color - Cor semântica: primary (default), success, danger, white, black
 * @attr {string} size - Tamanho: sm, md (default), lg
 * @attr {string} icon - Nome do ícone à direita (padrão: arrow-up-right)
 * @attr {boolean} disabled - Estado desabilitado
 * @attr {boolean} loading - Estado de carregamento
 * @attr {string} href - URL de destino (renderiza como <a>)
 * @attr {string} target - Target do link: _self (default), _blank, _parent, _top
 * 
 * @example
 * <atlas-link-button label="Ver mais" color="primary" size="md"></atlas-link-button>
 * <atlas-link-button label="Link externo" href="https://example.com" target="_blank" icon="arrow-up-right"></atlas-link-button>
 * <atlas-link-button label="Excluir" color="danger" size="sm"></atlas-link-button>
 */
class AtlasLinkButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['label', 'color', 'size', 'icon', 'icon-name', 'disabled', 'loading', 'href', 'target'];
  }

  // Getters
  get label() {
    return this.getAttribute('label') || 'Link button';
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
    return this.getAttribute('icon-name') || 'arrow-up-right';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  get loading() {
    return this.hasAttribute('loading');
  }

  get href() {
    return this.getAttribute('href');
  }

  get target() {
    return this.getAttribute('target') || '_self';
  }

  // Mapeamento de tamanhos (tipografia)
  static get sizeMap() {
    return {
      'sm': {
        fontSize: 'var(--atlas-typescale-label-block-sm-size, 14px)',
        lineHeight: '1.4',
        iconSize: 'sm' // 16px
      },
      'md': {
        fontSize: 'var(--atlas-typescale-label-block-md-size, 16px)',
        lineHeight: '1.4',
        iconSize: 'sm' // 16px
      },
      'lg': {
        fontSize: 'var(--atlas-typescale-label-block-lg-size, 18px)',
        lineHeight: '1.4',
        iconSize: 'md' // 24px
      }
    };
  }

  // Mapeamento de cores (tokens)
  static get colorMap() {
    return {
      'primary': {
        default: 'var(--atlas-button-typography-color-static-primary)',
        hover: 'var(--atlas-button-typography-color-interaction-primary-hover)',
        pressed: 'var(--atlas-button-typography-color-interaction-primary-pressed)',
        disabled: 'var(--atlas-button-typography-color-disabled-default)'
      },
      'danger': {
        default: 'var(--atlas-button-typography-color-interaction-error-default)',
        hover: 'var(--atlas-button-typography-color-interaction-error-hover)',
        pressed: 'var(--atlas-button-typography-color-interaction-error-pressed)',
        disabled: 'var(--atlas-button-typography-color-disabled-default)'
      },
      'success': {
        default: 'var(--atlas-button-typography-color-interaction-success-default)',
        hover: 'var(--atlas-button-typography-color-interaction-success-hover)',
        pressed: 'var(--atlas-button-typography-color-interaction-success-pressed)',
        disabled: 'var(--atlas-button-typography-color-disabled-default)'
      },
      'white': {
        default: 'var(--atlas-button-typography-color-interaction-white-default)',
        hover: 'var(--atlas-button-typography-color-interaction-white-hover)',
        pressed: 'var(--atlas-button-typography-color-interaction-white-pressed)',
        disabled: 'var(--atlas-button-typography-color-disabled-inverse)'
      },
      'black': {
        default: 'var(--atlas-button-typography-color-interaction-black-default)',
        hover: 'var(--atlas-button-typography-color-interaction-black-hover)',
        pressed: 'var(--atlas-button-typography-color-interaction-black-pressed)',
        disabled: 'var(--atlas-button-typography-color-disabled-default)'
      }
    };
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const sizeConfig = AtlasLinkButton.sizeMap[this.size] || AtlasLinkButton.sizeMap['md'];
    const colorTokens = AtlasLinkButton.colorMap[this.color] || AtlasLinkButton.colorMap['primary'];
    
    const isDisabled = this.disabled || this.loading;
    const tagName = this.href && !isDisabled ? 'a' : 'button';
    const showIcon = this.icon || this.loading;
    const iconName = this.loading ? 'loader' : this.iconName;

    // Atributos específicos para cada tag
    const specificAttrs = tagName === 'a' 
      ? `href="${this.href}" target="${this.target}" ${isDisabled ? 'aria-disabled="true"' : ''}`
      : `type="button" ${isDisabled ? 'disabled' : ''}`;

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

        :host {
          display: inline-block;
        }

        .link-button {
          display: inline-flex;
          align-items: center;
          gap: var(--atlas-gap-2xs, 4px);
          
          font-family: 'Open Sans', sans-serif;
          font-size: ${sizeConfig.fontSize};
          font-weight: 600;
          line-height: ${sizeConfig.lineHeight};
          letter-spacing: 0;
          
          color: ${colorTokens.default};
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          
          /* Focus outline */
          outline: none;
          border-radius: var(--atlas-radius-standalone-md, 4px);
        }

        .label {
          transition: text-decoration 0.2s ease;
        }

        /* Hover state */
        .link-button:hover:not(:disabled):not([aria-disabled="true"]) {
          color: ${colorTokens.hover};
        }

        .link-button:hover:not(:disabled):not([aria-disabled="true"]) .label {
          text-decoration: underline;
        }

        /* Focus state */
        .link-button:focus-visible {
          color: ${colorTokens.hover};
          outline: var(--atlas-focus-outline-size, 2px) solid var(--atlas-focus-outline-color, #3359c7);
          outline-offset: 2px;
        }

        .link-button:focus-visible .label {
          text-decoration: underline;
        }

        /* Pressed state */
        .link-button:active:not(:disabled):not([aria-disabled="true"]) {
          color: ${colorTokens.pressed};
        }

        /* Disabled state */
        .link-button:disabled,
        .link-button[aria-disabled="true"] {
          color: ${colorTokens.disabled};
          cursor: default;
          pointer-events: none;
        }

        /* Loading animation */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .link-button.loading atlas-icon {
          animation: spin 1s linear infinite;
        }

        /* Garante que o ícone herde a cor mas não o font-weight */
        atlas-icon {
          color: inherit;
          font-weight: normal !important;
          font-style: normal !important;
        }
      </style>

      <${tagName} 
        class="link-button ${this.loading ? 'loading' : ''}" 
        ${specificAttrs}
        ${isDisabled ? 'aria-disabled="true"' : ''}
      >
        <span class="label">${this.label}</span>
        ${showIcon ? `<atlas-icon name="${iconName}" size="${sizeConfig.iconSize}"></atlas-icon>` : ''}
      </${tagName}>
    `;

    // Se for link desabilitado, prevenir navegação
    if (tagName === 'a' && isDisabled) {
      const linkElement = this.shadowRoot.querySelector('a');
      linkElement.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }

    // Propagar eventos de click do shadow DOM para o host
    if (tagName === 'button') {
      const buttonElement = this.shadowRoot.querySelector('button');
      buttonElement.addEventListener('click', (e) => {
        if (!isDisabled) {
          // Dispara evento customizado no host element
          this.dispatchEvent(new CustomEvent('click', {
            bubbles: true,
            composed: true,
            detail: { originalEvent: e }
          }));
        }
      });
    }
  }
}

// Registra o componente
if (!customElements.get('atlas-link-button')) {
  customElements.define('atlas-link-button', AtlasLinkButton);
}
