class AtlasPopover extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isRendering = false;
  }

  static get observedAttributes() {
    return [
      'arrow',
      'title',
      'text',
      'image-src',
      'image-alt',
      'action-type',
      'action-label',
      'action-href',
      'closable',
      'open',
      'max-width'
    ];
  }

  connectedCallback() {
    this.render();
    this._setupEventListeners();
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this._isRendering || oldValue === newValue) return;
    
    if (this.shadowRoot) {
      this.render();
    }
  }

  // Getters para propriedades
  get arrow() {
    return this.getAttribute('arrow') || 'top-center';
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  get text() {
    return this.getAttribute('text') || '';
  }

  get imageSrc() {
    return this.getAttribute('image-src') || '';
  }

  get imageAlt() {
    return this.getAttribute('image-alt') || '';
  }

  get actionType() {
    return this.getAttribute('action-type') || 'none';
  }

  get actionLabel() {
    return this.getAttribute('action-label') || 'Button';
  }

  get actionHref() {
    return this.getAttribute('action-href') || '#';
  }

  get closable() {
    return this.hasAttribute('closable') && this.getAttribute('closable') !== 'false';
  }

  get open() {
    return this.hasAttribute('open') && this.getAttribute('open') !== 'false';
  }

  get maxWidth() {
    return this.getAttribute('max-width') || '278px';
  }

  // Event Listeners
  _setupEventListeners() {
    // ESC key handler
    this._escHandler = (e) => {
      if (e.key === 'Escape' && this.open) {
        this.close('programmatic');
      }
    };
    document.addEventListener('keydown', this._escHandler);
  }

  _removeEventListeners() {
    if (this._escHandler) {
      document.removeEventListener('keydown', this._escHandler);
    }
  }

  // Métodos públicos
  close(reason = 'programmatic') {
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('atlas-popover-close', {
      bubbles: true,
      composed: true,
      detail: { reason }
    }));
  }

  show() {
    this.setAttribute('open', '');
  }

  // Handlers internos
  _handleCloseClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.close('close-button');
  }

  _handleActionClick(e) {
    this.dispatchEvent(new CustomEvent('atlas-popover-action', {
      bubbles: true,
      composed: true,
      detail: {
        actionType: this.actionType,
        label: this.actionLabel
      }
    }));
  }

  render() {
    this._isRendering = true;

    const titleId = this.title ? 'popover-title' : '';
    const textId = 'popover-text';

    this.shadowRoot.innerHTML = `
      <style>
        /* Imports */
        @import url('/tokens/atlas-design-tokens.css');
        @import url('/assets/fonts/style.css');

        :host {
          display: inline-block;
          position: relative;
        }

        :host([open]) .popover-container {
          display: flex;
        }

        .popover-container {
          display: none;
          flex-direction: column;
          position: relative;
          background-color: var(--atlas-color-surface-static-container-neutral-ultra-soft);
          border: var(--atlas-stroke-weight-100) solid var(--atlas-color-border-default);
          border-radius: var(--atlas-radius-composite-lg);
          padding: var(--atlas-padding-md);
          gap: var(--atlas-spacing-100);
          max-width: ${this.maxWidth};
          min-width: 278px;
          box-shadow: 0px var(--atlas-spacing-100) var(--atlas-blur-200) 0px var(--atlas-color-opacity-black-200);
        }

        /* Arrow Styles - CSS Border Triangle Technique */
        ${this._getArrowStyles()}

        /* Close Button */
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--atlas-padding-2xs);
          border: none;
          background: transparent;
          border-radius: var(--atlas-radius-composite-full);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .close-button:hover {
          background-color: var(--atlas-color-surface-interaction-neutral-ultra-soft-hover);
        }

        .close-button:active {
          background-color: var(--atlas-color-surface-interaction-neutral-ultra-soft-pressed);
        }

        .close-icon {
          color: var(--atlas-color-icon-static-neutral-medium);
          font-size: 16px;
          line-height: 1;
        }

        /* Image */
        .popover-image {
          width: 100%;
          display: block;
          object-fit: cover;
          max-height: 146px;
          border-radius: var(--atlas-radius-100);
          margin: calc(var(--atlas-padding-md) * -1) calc(var(--atlas-padding-md) * -1) 0;
          width: calc(100% + var(--atlas-padding-md) * 2);
        }

        /* Content */
        .popover-content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-spacing-100);
        }

        .popover-title {
          font-family: 'Open Sans', sans-serif;
          font-size: var(--atlas-typescale-heading-6-size);
          font-weight: var(--atlas-typescale-heading-6-weight);
          letter-spacing: var(--atlas-typescale-heading-6-letter-spacing);
          line-height: 1.2;
          color: var(--atlas-color-text-static-neutral-hard);
          margin: 0;
          padding-right: ${this.closable ? '24px' : '0'};
        }

        .popover-text {
          font-family: 'Open Sans', sans-serif;
          font-size: var(--atlas-typescale-body-sm-size);
          font-weight: var(--atlas-typescale-body-sm-weight-default);
          letter-spacing: var(--atlas-typescale-body-sm-letter-spacing);
          line-height: 1.5;
          color: var(--atlas-color-text-static-neutral-hard);
          margin: 0;
        }

        /* Footer */
        .popover-footer {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .popover-footer:empty {
          display: none;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .popover-container {
            min-width: 328px;
          }
          
          /* No arrow on mobile */
          :host([arrow])::before,
          :host([arrow])::after {
            display: none;
          }
        }

        /* Accessibility */
        :host(:focus-within) {
          outline: 2px solid var(--atlas-color-border-primary-hard);
          outline-offset: 2px;
        }
      </style>

      <div 
        class="popover-container" 
        role="dialog"
        ${titleId ? `aria-labelledby="${titleId}"` : ''}
        aria-describedby="${textId}"
      >
        ${this.imageSrc ? `
          <img 
            src="${this.imageSrc}" 
            alt="${this.imageAlt}"
            class="popover-image"
          />
        ` : ''}

        ${this.closable ? `
          <button 
            class="close-button" 
            aria-label="Fechar"
            type="button"
          >
            <span class="close-icon icon-x" aria-hidden="true"></span>
          </button>
        ` : ''}

        <div class="popover-content">
          ${this.title ? `
            <h3 id="${titleId}" class="popover-title">${this.title}</h3>
          ` : ''}
          
          <p id="${textId}" class="popover-text">${this.text}</p>
        </div>

        ${this._renderFooter()}
      </div>
    `;

    // Setup event handlers after render
    if (this.closable) {
      const closeBtn = this.shadowRoot.querySelector('.close-button');
      if (closeBtn) {
        closeBtn.addEventListener('click', this._handleCloseClick.bind(this));
      }
    }

    // Setup action button/link event
    const actionElement = this.shadowRoot.querySelector('.action-button, .action-link');
    if (actionElement) {
      actionElement.addEventListener('click', this._handleActionClick.bind(this));
    }

    this._isRendering = false;
  }

  _getArrowStyles() {
    const arrow = this.arrow;
    
    if (arrow === 'none') {
      return '';
    }

    const borderColor = 'var(--atlas-color-border-default)';
    const fillColor = 'var(--atlas-color-surface-static-container-neutral-ultra-soft)';
    const arrowSize = '6px'; // 12px total width (6px each side)
    const arrowHeight = '5px';

    const positions = {
      'top-center': `
        :host([arrow="top-center"])::before,
        :host([arrow="top-center"])::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="top-center"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-bottom: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="top-center"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-bottom: ${arrowHeight} solid ${fillColor};
        }
      `,
      'top-left': `
        :host([arrow="top-left"])::before,
        :host([arrow="top-left"])::after {
          content: '';
          position: absolute;
          left: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="top-left"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-bottom: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="top-left"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-bottom: ${arrowHeight} solid ${fillColor};
        }
      `,
      'top-right': `
        :host([arrow="top-right"])::before,
        :host([arrow="top-right"])::after {
          content: '';
          position: absolute;
          right: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="top-right"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-bottom: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="top-right"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-bottom: ${arrowHeight} solid ${fillColor};
        }
      `,
      'bottom-center': `
        :host([arrow="bottom-center"])::before,
        :host([arrow="bottom-center"])::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="bottom-center"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-top: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="bottom-center"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-top: ${arrowHeight} solid ${fillColor};
        }
      `,
      'bottom-left': `
        :host([arrow="bottom-left"])::before,
        :host([arrow="bottom-left"])::after {
          content: '';
          position: absolute;
          left: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="bottom-left"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-top: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="bottom-left"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-top: ${arrowHeight} solid ${fillColor};
        }
      `,
      'bottom-right': `
        :host([arrow="bottom-right"])::before,
        :host([arrow="bottom-right"])::after {
          content: '';
          position: absolute;
          right: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${arrowSize} solid transparent;
          border-right: ${arrowSize} solid transparent;
        }
        :host([arrow="bottom-right"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-top: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="bottom-right"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-top: ${arrowHeight} solid ${fillColor};
        }
      `,
      'side-left': `
        :host([arrow="side-left"])::before,
        :host([arrow="side-left"])::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: ${arrowSize} solid transparent;
          border-bottom: ${arrowSize} solid transparent;
        }
        :host([arrow="side-left"])::before {
          left: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-right: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="side-left"])::after {
          left: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-right: ${arrowHeight} solid ${fillColor};
        }
      `,
      'side-right': `
        :host([arrow="side-right"])::before,
        :host([arrow="side-right"])::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: ${arrowSize} solid transparent;
          border-bottom: ${arrowSize} solid transparent;
        }
        :host([arrow="side-right"])::before {
          right: calc(var(--atlas-padding-md) * -1 - ${arrowHeight});
          border-left: ${arrowHeight} solid ${borderColor};
        }
        :host([arrow="side-right"])::after {
          right: calc(var(--atlas-padding-md) * -1 - ${arrowHeight} + 1px);
          border-left: ${arrowHeight} solid ${fillColor};
        }
      `
    };

    return positions[arrow] || '';
  }

  _renderFooter() {
    if (this.actionType === 'none') {
      return '<div class="popover-footer"></div>';
    }

    if (this.actionType === 'button') {
      return `
        <div class="popover-footer">
          <atlas-button
            class="action-button"
            variant="filled"
            color="primary"
            size="small"
            label="${this.actionLabel}"
          ></atlas-button>
        </div>
      `;
    }

    if (this.actionType === 'link') {
      return `
        <div class="popover-footer">
          <atlas-link-button
            class="action-link"
            size="small"
            label="${this.actionLabel}"
            href="${this.actionHref}"
          ></atlas-link-button>
        </div>
      `;
    }

    return '<div class="popover-footer"></div>';
  }
}

// Define o custom element
customElements.define('atlas-popover', AtlasPopover);
