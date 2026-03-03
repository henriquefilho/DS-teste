const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      --radio-size: 24px;
      --dot-size: 12px;
      --gap: var(--atlas-gap-xs, 8px);
      --border-width: var(--atlas-border-solid-default, 1px);
      --border-radius: 50%;
      --font-family: var(--atlas-font-face-general, 'Open Sans');
      --font-size: var(--atlas-typescale-label-inline-md-size, 16px);
      --font-weight: var(--atlas-typescale-label-inline-md-weight-default, 400);
      --line-height: 1;
      --label-color: var(--atlas-color-text-static-neutral-hard, #1d2125);
      --border-color: var(--atlas-color-border-primary-hard, #0030b9);
      --background: var(--atlas-color-surface-control-inactive-default, #fcfcfd);
      --dot-color: var(--atlas-color-border-primary-hard, #0030b9);
      --focus-outline: 0 0 0 var(--atlas-focus-outline-size, 2px) var(--atlas-focus-outline-color, #3359c7);
      cursor: pointer;
    }
    :host([state="error"]) {
      --border-color: var(--atlas-color-border-error-hard, #b02a37);
      --label-color: var(--atlas-color-text-static-error-medium, #b02a37);
      --dot-color: var(--atlas-color-border-error-hard, #b02a37);
    }
    :host([state="read-only"]) {
      --border-color: var(--atlas-color-border-default, #d1d6dc);
      --dot-color: var(--atlas-color-border-default, #d1d6dc);
      cursor: default;
    }
    :host([state="disabled"]) {
      --border-color: var(--atlas-color-border-disabled, #d1d6dc);
      --label-color: var(--atlas-color-text-static-disabled-level-1, #d1d6dc);
      --dot-color: var(--atlas-color-border-disabled, #d1d6dc);
      cursor: not-allowed;
      opacity: 1;
    }
    .container {
      display: inline-flex;
      align-items: center;
      gap: var(--gap);
    }
    .radio {
      width: var(--radio-size);
      height: var(--radio-size);
      border-radius: var(--border-radius);
      border: var(--border-width) solid var(--border-color);
      background: var(--background);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: inherit;
    }
    .dot {
      width: var(--dot-size);
      height: var(--dot-size);
      border-radius: 50%;
      background: var(--dot-color);
      display: none;
      pointer-events: none;
    }
    :host([checked]) .dot {
      display: block;
    }
    .label {
      font-family: var(--font-family);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      line-height: var(--line-height);
      letter-spacing: var(--atlas-typescale-label-inline-md-letter-spacing, 0px);
      color: var(--label-color);
      user-select: none;
    }
    :host(:focus-visible) .radio {
      box-shadow: var(--focus-outline);
      outline: none;
    }
  </style>
  <span class="container">
    <span class="radio">
      <input type="radio" />
      <span class="dot"></span>
    </span>
    <span class="label"></span>
  </span>
`;

class AtlasRadioButton extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'state', 'label', 'name', 'value', 'disabled', 'read-only'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._input = this.shadowRoot.querySelector('input[type="radio"]');
    this._label = this.shadowRoot.querySelector('.label');
    this._container = this.shadowRoot.querySelector('.container');
    this._radio = this.shadowRoot.querySelector('.radio');
  }

  connectedCallback() {
    this._upgradeProperty('checked');
    this._upgradeProperty('state');
    this._upgradeProperty('label');
    this._upgradeProperty('name');
    this._upgradeProperty('value');
    this._render();
    this._input.addEventListener('change', this._onChange.bind(this));
    this._input.addEventListener('focus', () => this._radio.classList.add('focus'));
    this._input.addEventListener('blur', () => this._radio.classList.remove('focus'));
    this._container.addEventListener('click', this._onClick.bind(this));
  }

  disconnectedCallback() {
    this._input.removeEventListener('change', this._onChange);
    this._container.removeEventListener('click', this._onClick);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  _onClick(e) {
    if (this.state === 'disabled' || this.state === 'read-only') {
      e.preventDefault();
      return;
    }
    if (!this.checked) {
      this._uncheckSiblings();
      this.checked = true;
      this.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  _uncheckSiblings() {
    if (!this.name) return;
    const root = this.getRootNode();
    const siblings = root.querySelectorAll
      ? root.querySelectorAll(`atlas-radio-button[name="${this.name}"]`)
      : document.querySelectorAll(`atlas-radio-button[name="${this.name}"]`);
    siblings.forEach((radio) => {
      if (radio !== this && radio.checked) {
        radio.removeAttribute('checked');
        radio._render();
      }
    });
  }

  _onChange(e) {
    if (this.state === 'disabled' || this.state === 'read-only') {
      e.preventDefault();
      return;
    }
    this.checked = this._input.checked;
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  _render() {
    // checked
    this._input.checked = this.checked;
    if (this.checked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
    // state
    if (this.state === 'disabled') {
      this._input.disabled = true;
    } else {
      this._input.disabled = false;
    }
    // name
    if (this.name) {
      this._input.name = this.name;
    }
    // value
    if (this.value) {
      this._input.value = this.value;
    }
    // label
    this._label.textContent = this.label || '';
    // aria
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', this.state === 'disabled' ? '-1' : '0');
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    if (this.state === 'disabled') {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.removeAttribute('aria-disabled');
    }
  }

  get checked() {
    return this.hasAttribute('checked');
  }
  set checked(val) {
    if (val || val === '') {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
    this._render();
  }

  get state() {
    return this.getAttribute('state') || 'default';
  }
  set state(val) {
    this.setAttribute('state', val);
    this._render();
  }

  get label() {
    return this.getAttribute('label') || '';
  }
  set label(val) {
    this.setAttribute('label', val);
    this._render();
  }

  get name() {
    return this.getAttribute('name') || '';
  }
  set name(val) {
    this.setAttribute('name', val);
    this._render();
  }

  get value() {
    return this.getAttribute('value') || '';
  }
  set value(val) {
    this.setAttribute('value', val);
    this._render();
  }
}

customElements.define('atlas-radio-button', AtlasRadioButton);
