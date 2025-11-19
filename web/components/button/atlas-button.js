const template = document.createElement("template");
template.innerHTML = `
  <button part="button" type="button">
    <slot name="icon-start"></slot>
    <span class="label"><slot></slot></span>
    <slot name="icon-end"></slot>
  </button>
`;

export class AtlasButton extends HTMLElement {
  static get observedAttributes() {
    return ["variant", "tone", "size", "disabled", "type", "icon-only"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute(
      "href",
      new URL("./atlas-button.css", import.meta.url)
    );

    this.shadowRoot.append(styleLink, template.content.cloneNode(true));
    this._button = this.shadowRoot.querySelector("button");
    this._upgradeProperty("variant");
    this._upgradeProperty("tone");
    this._upgradeProperty("size");
    this._upgradeProperty("iconOnly");
  }

  connectedCallback() {
    if (!this.hasAttribute("variant")) {
      this.variant = "filled";
    }
    if (!this.hasAttribute("tone")) {
      this.tone = "primary";
    }
    if (!this.hasAttribute("size")) {
      this.size = "md";
    }
    this._syncDisabled();
    this._syncType();
  }

  attributeChangedCallback(name) {
    if (name === "disabled") {
      this._syncDisabled();
    } else if (name === "type") {
      this._syncType();
    }
    if (name === "icon-only") {
      this._reflectBoolean(name, this.iconOnly);
    }
  }

  get variant() {
    return this.getAttribute("variant");
  }

  set variant(value) {
    if (value) {
      this.setAttribute("variant", value);
    } else {
      this.removeAttribute("variant");
    }
  }

  get tone() {
    return this.getAttribute("tone");
  }

  set tone(value) {
    if (value) {
      this.setAttribute("tone", value);
    } else {
      this.removeAttribute("tone");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(value) {
    if (value) {
      this.setAttribute("size", value);
    } else {
      this.removeAttribute("size");
    }
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(isDisabled) {
    if (Boolean(isDisabled)) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get type() {
    return this.getAttribute("type") ?? "button";
  }

  set type(value) {
    if (value) {
      this.setAttribute("type", value);
    } else {
      this.removeAttribute("type");
    }
  }

  get iconOnly() {
    return this.hasAttribute("icon-only");
  }

  set iconOnly(value) {
    if (Boolean(value)) {
      this.setAttribute("icon-only", "true");
    } else {
      this.removeAttribute("icon-only");
    }
  }

  _syncDisabled() {
    if (!this._button) return;
    this._button.disabled = this.disabled;
  }

  _syncType() {
    if (!this._button) return;
    this._button.type = this.type;
  }

  _reflectBoolean(attribute, value) {
    if (Boolean(value)) {
      this.setAttribute(attribute, "true");
    } else {
      this.removeAttribute(attribute);
    }
  }

  _upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}

if (!customElements.get("atlas-button")) {
  customElements.define("atlas-button", AtlasButton);
}

