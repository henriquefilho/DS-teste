/**
 * Atlas Checkbox Web Component
 * 
 * Checkbox interativo com suporte a estados:
 * - default, error, readonly, disabled
 * - unchecked, checked, indeterminate
 * 
 * @element atlas-checkbox
 * @attr {boolean} checked - Checkbox marcado
 * @attr {boolean} indeterminate - Estado indeterminado (seleção parcial)
 * @attr {boolean} disabled - Desabilita interação
 * @attr {boolean} error - Aplica estilo de erro
 * @attr {boolean} readonly - Somente leitura
 * @attr {string} label - Texto do label
 * @attr {string} value - Valor do checkbox
 * @attr {string} name - Nome do campo
 */
class AtlasCheckbox extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'indeterminate', 'disabled', 'error', 'readonly', 'label', 'value', 'name'];
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
    this.render();
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  set checked(value) {
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  get indeterminate() {
    return this.hasAttribute('indeterminate');
  }

  set indeterminate(value) {
    if (value) {
      this.setAttribute('indeterminate', '');
    } else {
      this.removeAttribute('indeterminate');
    }
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

  get error() {
    return this.hasAttribute('error');
  }

  set error(value) {
    if (value) {
      this.setAttribute('error', '');
    } else {
      this.removeAttribute('error');
    }
  }

  get readonly() {
    return this.hasAttribute('readonly');
  }

  set readonly(value) {
    if (value) {
      this.setAttribute('readonly', '');
    } else {
      this.removeAttribute('readonly');
    }
  }

  get label() {
    return this.getAttribute('label') || '';
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  set value(val) {
    this.setAttribute('value', val);
  }

  get name() {
    return this.getAttribute('name') || '';
  }

  set name(val) {
    this.setAttribute('name', val);
  }

  attachEventListeners() {
    const label = this.shadowRoot.querySelector('.checkbox');
    if (label) {
      label.addEventListener('click', (e) => this.handleClick(e));
    }

    const input = this.shadowRoot.querySelector('.checkbox__input');
    if (input) {
      input.addEventListener('change', (e) => this.handleChange(e));
    }
  }

  handleClick(e) {
    // Previne toggle se disabled ou readonly
    if (this.disabled || this.readonly) {
      e.preventDefault();
      return;
    }
  }

  handleChange(e) {
    // Atualiza propriedade checked
    this.checked = e.target.checked;
    
    // Remove indeterminate quando usuário clica
    if (this.indeterminate) {
      this.indeterminate = false;
    }

    // Dispara evento customizado
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        checked: this.checked,
        value: this.value,
        name: this.name
      }
    }));
  }

  render() {
    // Protege contra re-renderizações durante a renderização
    if (this._isRendering) return;
    this._isRendering = true;

    const checked = this.checked;
    const indeterminate = this.indeterminate;
    const disabled = this.disabled;
    const error = this.error;
    const readonly = this.readonly;
    const label = this.label;
    const value = this.value;
    const name = this.name;

    // Determina estado para classes CSS
    let stateClass = 'checkbox--default';
    if (disabled) stateClass = 'checkbox--disabled';
    else if (readonly) stateClass = 'checkbox--readonly';
    else if (error) stateClass = 'checkbox--error';

    // Determina ícone
    let icon = '';
    if (indeterminate) {
      icon = `<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox__icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.57628e-07 1C3.57628e-07 0.447715 3.57628e-07 0 3.57628e-07 0H14C14 0 14 0.447715 14 1C14 1.55228 14 2 14 2H3.57628e-07C3.57628e-07 2 3.57628e-07 1.55228 3.57628e-07 1Z" fill="currentColor"/>
</svg>`;
    } else if (checked) {
      icon = `<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox__icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4597 1.33488L3.68009 11.1303L0 7.36656L1.43001 5.96832L3.61659 8.2046L10.9703 0L12.4597 1.33488Z" fill="currentColor"/>
</svg>`;
    }

    // aria-checked: true, false, ou "mixed" para indeterminate
    let ariaChecked = 'false';
    if (indeterminate) ariaChecked = 'mixed';
    else if (checked) ariaChecked = 'true';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: 'Open Sans', sans-serif;
          
          /* Importa tokens globais para o Shadow DOM */
          --local-surface-inactive-default: var(--atlas-color-surface-control-inactive-default, #FCFCFD);
          --local-surface-active-default: var(--atlas-color-surface-control-active-default, #0030B9);
          --local-surface-inactive-error: var(--atlas-color-surface-control-inactive-error, #FCFCFD);
          --local-surface-active-error: var(--atlas-color-surface-control-active-error, #B02A37);
          --local-surface-inactive-readonly: var(--atlas-color-surface-control-inactive-read-only, #FCFCFD);
          --local-surface-active-readonly: var(--atlas-color-surface-control-active-read-only, #B8C0CB);
          --local-surface-inactive-disabled: var(--atlas-color-surface-control-inactive-disabled, #FCFCFD);
          --local-surface-active-disabled: var(--atlas-color-surface-control-active-disabled, #D1D6DC);
          
          --local-border-primary: var(--atlas-color-border-primary-hard, #0030B9);
          --local-border-error: var(--atlas-color-border-error-hard, #B02A37);
          --local-border-default: var(--atlas-color-border-default, #D1D6DC);
          --local-border-disabled: var(--atlas-color-border-disabled, #D1D6DC);
          
          --local-text-neutral-hard: var(--atlas-color-text-static-neutral-hard, #1D2125);
          --local-text-error: var(--atlas-color-text-static-error-medium, #B02A37);
          --local-text-disabled: var(--atlas-color-text-static-disabled-level-1, #D1D6DC);
          
          --local-icon-color: var(--atlas-color-pale-sky-10, #FCFCFD);
          --local-focus-primary: var(--atlas-color-persian-blue-400, #3359C7);
          --local-focus-error: var(--atlas-color-red-ribbon-400, #E35D6A);
        }

        .checkbox {
          display: inline-flex;
          align-items: center;
          gap: var(--atlas-spacing-100, 8px);
          cursor: pointer;
          user-select: none;
        }

        .checkbox--disabled,
        .checkbox--readonly {
          cursor: not-allowed;
        }

        .checkbox__wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .checkbox__input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
          margin: 0;
        }

        .checkbox__box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex: 0 0 20px; /* Impede encolhimento/crescimento flex */
          border-radius: var(--atlas-radius-standalone-md, var(--atlas-radius-50, 4px));
          border-width: 1px;
          border-style: solid;
          box-sizing: border-box;
          transition: all 0.15s ease;
          position: relative;
          background-color: transparent;
        }

        /* ===== DEFAULT STATE ===== */
        .checkbox--default .checkbox__box {
          background-color: var(--local-surface-inactive-default);
          border-color: var(--local-border-primary);
        }

        .checkbox--default .checkbox__input:checked + .checkbox__box,
        .checkbox--default .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-default);
          border-color: var(--local-border-primary);
        }

        .checkbox--default .checkbox__label {
          color: var(--local-text-neutral-hard);
        }

        .checkbox--default .checkbox__input:focus-visible + .checkbox__box {
          outline: 2px solid var(--local-focus-primary);
          outline-offset: 2px;
        }

        /* ===== ERROR STATE ===== */
        .checkbox--error .checkbox__box {
          background-color: var(--local-surface-inactive-error);
          border-color: var(--local-border-error);
        }

        .checkbox--error .checkbox__input:checked + .checkbox__box,
        .checkbox--error .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-error);
          border-color: var(--local-border-error);
        }

        .checkbox--error .checkbox__label {
          color: var(--local-text-error);
        }

        .checkbox--error .checkbox__input:focus-visible + .checkbox__box {
          outline: 2px solid var(--local-focus-error);
          outline-offset: 2px;
        }

        /* ===== READONLY STATE ===== */
        .checkbox--readonly .checkbox__box {
          background-color: var(--local-surface-inactive-readonly);
          border-color: var(--local-border-default);
        }

        .checkbox--readonly .checkbox__input:checked + .checkbox__box,
        .checkbox--readonly .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-readonly);
          border-color: var(--local-border-default);
        }

        .checkbox--readonly .checkbox__label {
          color: var(--local-text-neutral-hard);
        }

        /* ===== DISABLED STATE ===== */
        .checkbox--disabled .checkbox__box {
          background-color: var(--local-surface-inactive-disabled);
          border-color: var(--local-border-disabled);
        }

        .checkbox--disabled .checkbox__input:checked + .checkbox__box,
        .checkbox--disabled .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-disabled);
          border-color: var(--local-border-disabled);
        }

        .checkbox--disabled .checkbox__label {
          color: var(--local-text-disabled);
        }

        /* ===== ICON STYLING ===== */
        .checkbox__icon {
          color: var(--local-icon-color);
          display: block;
        }

        /* ===== LABEL ===== */
        .checkbox__label {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0;
        }

        /* Hide icon when unchecked */
        .checkbox__input:not(:checked):not([aria-checked="mixed"]) ~ .checkbox__box .checkbox__icon {
          display: none;
        }
      </style>

      <label class="checkbox ${stateClass}">
        <span class="checkbox__wrapper">
          <input 
            type="checkbox"
            class="checkbox__input"
            ${checked ? 'checked' : ''}
            ${disabled ? 'disabled' : ''}
            ${readonly ? 'disabled' : ''}
            ${value ? `value="${value}"` : ''}
            ${name ? `name="${name}"` : ''}
            aria-checked="${ariaChecked}"
            role="checkbox"
          />
          <span class="checkbox__box">
            ${icon}
          </span>
        </span>
        ${label ? `<span class="checkbox__label">${label}</span>` : ''}
      </label>
    `;

    // Re-attach event listeners após re-render
    this.attachEventListeners();

    // Sincroniza propriedade indeterminate do input (JavaScript only)
    const input = this.shadowRoot.querySelector('.checkbox__input');
    if (input) {
      input.indeterminate = indeterminate;
    }
    
    this._isRendering = false;
  }
}

// Registra o custom element
if (!customElements.get('atlas-checkbox')) {
  customElements.define('atlas-checkbox', AtlasCheckbox);
}
