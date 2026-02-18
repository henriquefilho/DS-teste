/**
 * Atlas Resource List Component
 * Web Component para exibir lista de recursos com informações resumidas e ação principal
 * 
 * @element atlas-resource-list
 * @attr {string} type - Tipo de ação: "navigation" | "icon-button" | "switch" | "informational" (default: "navigation")
 * @attr {string} label - Texto principal do item (título)
 * @attr {string} description - Texto descritivo secundário
 * @attr {boolean} visual-support - Exibe ícone ou imagem decorativa à esquerda (default: false)
 * @attr {string} visual-support-icon - Nome do ícone para visual support (default: "cog")
 * @attr {string} visual-support-image - URL da imagem para visual support (se definido, tem prioridade sobre o ícone)
 * @attr {string} action-icon - Nome do ícone para action button ou navigation chevron (default: "chevron-right" para navigation, "three-dots" para icon-button)
 * @attr {boolean} checked - Estado do switch (usado apenas quando type="switch") (default: false)
 * @attr {boolean} disabled - Estado desabilitado (default: false)
 * @attr {string} href - URL de navegação (usado quando type="navigation")
 * @attr {boolean} show-divider - Exibe linha divisória na parte inferior (default: true)
 * 
 * @slot default - Conteúdo customizado (substitui label e description)
 * 
 * @fires resource-list-click - Disparado quando item é clicado (type: navigation)
 * @fires action-click - Disparado quando botão de ação é clicado (type: icon-button)
 * @fires switch-change - Disparado quando switch muda de estado (type: switch)
 * 
 * @dependencies
 * - atlas-icon (visual support + navigation chevron)
 * - atlas-icon-button (action button no type="icon-button")
 * - atlas-switch (controle toggle no type="switch")
 */

class AtlasResourceList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  static get observedAttributes() {
    return [
      'type',
      'label',
      'description',
      'visual-support',
      'visual-support-icon',
      'visual-support-image',
      'action-icon',
      'checked',
      'disabled',
      'href',
      'show-divider'
    ];
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

  // Getters para propriedades
  get type() {
    return this.getAttribute('type') || 'navigation';
  }

  get label() {
    return this.getAttribute('label') || '';
  }

  get description() {
    return this.getAttribute('description') || '';
  }

  get visualSupport() {
    return this.hasAttribute('visual-support');
  }

  get visualSupportIcon() {
    return this.getAttribute('visual-support-icon') || 'cog';
  }

  get visualSupportImage() {
    return this.getAttribute('visual-support-image') || '';
  }

  get actionIcon() {
    const defaultIcon = this.type === 'navigation' ? 'chevron-right' : 'three-dots';
    return this.getAttribute('action-icon') || defaultIcon;
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  get href() {
    return this.getAttribute('href') || '';
  }

  get showDivider() {
    return this.getAttribute('show-divider') !== 'false';
  }

  // Verifica se há conteúdo no slot default
  get hasCustomContent() {
    return this.children.length > 0;
  }

  setupEventListeners() {
    const container = this.shadowRoot.querySelector('.resource-list-item');
    const actionButton = this.shadowRoot.querySelector('.action-button');
    const switchControl = this.shadowRoot.querySelector('atlas-switch');

    // Clique no container (apenas para navigation)
    if (container && this.type === 'navigation') {
      container.addEventListener('click', (e) => {
        if (this.disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Não dispara evento se clicar no action button (icon-button tem seu próprio handler)
        if (e.target.closest('.action-button')) {
          return;
        }

        this.dispatchEvent(new CustomEvent('resource-list-click', {
          bubbles: true,
          composed: true,
          detail: {
            type: this.type,
            label: this.label,
            href: this.href
          }
        }));
      });
    }

    // Clique no action button (type: icon-button)
    if (actionButton && this.type === 'icon-button') {
      actionButton.addEventListener('click', (e) => {
        if (this.disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        e.stopPropagation(); // Previne propagação para o container

        this.dispatchEvent(new CustomEvent('action-click', {
          bubbles: true,
          composed: true,
          detail: {
            label: this.label
          }
        }));
      });
    }

    // Mudança no switch (type: switch)
    if (switchControl && this.type === 'switch') {
      switchControl.addEventListener('change', (e) => {
        if (this.disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        // Atualiza o atributo checked
        if (e.detail.checked) {
          this.setAttribute('checked', '');
        } else {
          this.removeAttribute('checked');
        }

        this.dispatchEvent(new CustomEvent('switch-change', {
          bubbles: true,
          composed: true,
          detail: {
            checked: e.detail.checked,
            label: this.label
          }
        }));
      });
    }
  }

  render() {
    if (this._isRendering) return;
    this._isRendering = true;

    const isInteractive = this.type === 'navigation' || this.type === 'icon-button';
    const hasHoverActive = this.type === 'navigation' || this.type === 'icon-button';
    const containerTag = this.type === 'navigation' && this.href ? 'a' : 'div';
    const hrefAttr = containerTag === 'a' ? `href="${this.href}"` : '';

    // Visual Support HTML
    const visualSupportHTML = this.visualSupport ? `
      <div class="visual-support ${this.visualSupportImage ? 'has-image' : ''}">
        ${this.visualSupportImage ? `
          <img src="${this.visualSupportImage}" alt="" class="visual-support-image">
        ` : `
          <atlas-icon name="${this.visualSupportIcon}" size="24"></atlas-icon>
        `}
      </div>
    ` : '';

    // Content HTML (slot ou label+description)
    const contentHTML = `
      <div class="content">
        ${this.label ? `<div class="label">${this.label}</div>` : ''}
        ${this.description ? `<div class="description">${this.description}</div>` : ''}
        <slot></slot>
      </div>
    `;

    // Action HTML (baseado no tipo)
    let actionHTML = '';
    if (this.type === 'navigation') {
      actionHTML = `
        <div class="action-navigation">
          <atlas-icon name="${this.actionIcon}" size="16" color="neutral"></atlas-icon>
        </div>
      `;
    } else if (this.type === 'icon-button') {
      actionHTML = `
        <atlas-icon-button 
          class="action-button"
          icon-name="${this.actionIcon}" 
          color="secondary" 
          size="md"
          ${this.disabled ? 'disabled' : ''}
          aria-label="Ação"
        ></atlas-icon-button>
      `;
    } else if (this.type === 'switch') {
      actionHTML = `
        <atlas-switch 
          ${this.checked ? 'checked' : ''} 
          ${this.disabled ? 'state="disabled"' : ''}
          hide-label
          alignment="right"
        ></atlas-switch>
      `;
    }

    // Divider HTML
    const dividerHTML = this.showDivider ? `<div class="divider"></div>` : '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .resource-list-container {
          display: flex;
          flex-direction: column;
          background: var(--atlas-color-surface-interaction-neutral-ultra-soft-default);
          transition: background-color 0.15s ease-in-out;
        }

        .resource-list-item {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-md);
          padding: var(--atlas-padding-md);
          cursor: ${isInteractive && !this.disabled ? 'pointer' : 'default'};
          text-decoration: none;
          color: inherit;
          ${this.disabled ? 'pointer-events: none;' : ''}
        }

        /* Estados do container (apenas para types que suportam) */
        ${hasHoverActive && !this.disabled ? `
          .resource-list-container:hover {
            background: var(--atlas-color-surface-interaction-primary-ultra-soft-hover);
          }

          .resource-list-container:active,
          .resource-list-item:active {
            background: var(--atlas-color-surface-interaction-primary-ultra-soft-pressed);
          }
        ` : ''}

        .resource-list-item:focus-visible {
          outline: var(--atlas-focus-outline-size) solid var(--atlas-focus-outline-color);
          outline-offset: var(--atlas-focus-outline-offset-default);
        }

        /* Estado disabled */
        ${this.disabled ? `
          .resource-list-container {
            background: var(--atlas-color-surface-interaction-disabled);
          }
          .resource-list-item {
            cursor: not-allowed;
            opacity: 0.6;
          }
        ` : ''}

        /* Visual Support Container */
        .visual-content-wrapper {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-sm);
          flex: 1;
          min-width: 0;
        }

        .visual-support {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          min-width: 32px;
          background: var(--atlas-color-surface-static-container-neutral-soft);
          border-radius: 999px;
          padding: var(--atlas-padding-2xs);
          overflow: hidden;
        }

        .visual-support.has-image {
          padding: 0;
        }

        .visual-support-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
        }

        /* Content */
        .content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-gap-2xs);
          flex: 1;
          min-width: 0;
        }

        .label {
          font-family: var(--atlas-font-face-general);
          font-size: var(--atlas-typescale-label-inline-sm-size);
          font-weight: var(--atlas-typescale-label-inline-sm-weight-strong);
          line-height: 1.5;
          color: var(--atlas-color-text-static-neutral-hard);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .description {
          font-family: var(--atlas-font-face-general);
          font-size: var(--atlas-typescale-label-inline-xs-size);
          font-weight: var(--atlas-typescale-label-inline-xs-weight-default);
          line-height: 1;
          color: var(--atlas-color-text-static-neutral-medium);
          word-wrap: break-word;
        }

        /* Slot customizado */
        ::slotted(*) {
          flex: 1;
        }

        /* Action Área */
        .action-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
        }

        .action-button {
          flex-shrink: 0;
        }

        /* Divider */
        .divider {
          width: 100%;
          height: 1px;
          background: var(--atlas-color-surface-static-shape-neutral-super-soft);
        }
      </style>

      <div class="resource-list-container">
        <${containerTag} 
          class="resource-list-item" 
          ${hrefAttr}
          ${this.disabled ? 'aria-disabled="true"' : ''}
          role="${this.type === 'navigation' ? (this.href ? 'link' : 'button') : 'listitem'}"
          tabindex="${this.disabled ? '-1' : '0'}"
        >
          <div class="visual-content-wrapper">
            ${visualSupportHTML}
            ${contentHTML}
          </div>
          ${actionHTML}
        </${containerTag}>
        ${dividerHTML}
      </div>
    `;

    this._isRendering = false;
    this.setupEventListeners();
  }
}

// Define o custom element
customElements.define('atlas-resource-list', AtlasResourceList);
