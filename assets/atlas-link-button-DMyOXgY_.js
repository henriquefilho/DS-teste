class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["label","color","size","icon","icon-name","disabled","loading","href","target"]}get label(){return this.getAttribute("label")||"Link button"}get color(){return this.getAttribute("color")||"primary"}get size(){return this.getAttribute("size")||"md"}get icon(){return this.hasAttribute("icon")}get iconName(){return this.getAttribute("icon-name")||"arrow-up-right"}get disabled(){return this.hasAttribute("disabled")}get loading(){return this.hasAttribute("loading")}get href(){return this.getAttribute("href")}get target(){return this.getAttribute("target")||"_self"}static get sizeMap(){return{sm:{fontSize:"var(--atlas-typescale-label-block-sm-size, 14px)",lineHeight:"1.4",iconSize:"sm"},md:{fontSize:"var(--atlas-typescale-label-block-md-size, 16px)",lineHeight:"1.4",iconSize:"sm"},lg:{fontSize:"var(--atlas-typescale-label-block-lg-size, 18px)",lineHeight:"1.4",iconSize:"md"}}}static get colorMap(){return{primary:{default:"var(--atlas-button-typography-color-static-primary)",hover:"var(--atlas-button-typography-color-interaction-primary-hover)",pressed:"var(--atlas-button-typography-color-interaction-primary-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},danger:{default:"var(--atlas-button-typography-color-interaction-error-default)",hover:"var(--atlas-button-typography-color-interaction-error-hover)",pressed:"var(--atlas-button-typography-color-interaction-error-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},success:{default:"var(--atlas-button-typography-color-interaction-success-default)",hover:"var(--atlas-button-typography-color-interaction-success-hover)",pressed:"var(--atlas-button-typography-color-interaction-success-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},white:{default:"var(--atlas-button-typography-color-interaction-white-default)",hover:"var(--atlas-button-typography-color-interaction-white-hover)",pressed:"var(--atlas-button-typography-color-interaction-white-pressed)",disabled:"var(--atlas-button-typography-color-disabled-inverse)"},black:{default:"var(--atlas-button-typography-color-interaction-black-default)",hover:"var(--atlas-button-typography-color-interaction-black-hover)",pressed:"var(--atlas-button-typography-color-interaction-black-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"}}}connectedCallback(){this.render()}attributeChangedCallback(r,e,t){e!==t&&this.render()}render(){const r=a.sizeMap[this.size]||a.sizeMap.md,e=a.colorMap[this.color]||a.colorMap.primary,t=this.disabled||this.loading,o=this.href&&!t?"a":"button",n=this.icon||this.loading,s=this.loading?"loader":this.iconName,l=o==="a"?`href="${this.href}" target="${this.target}" ${t?'aria-disabled="true"':""}`:`type="button" ${t?"disabled":""}`;this.shadowRoot.innerHTML=`
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
          font-size: ${r.fontSize};
          font-weight: 600;
          line-height: ${r.lineHeight};
          letter-spacing: 0;
          
          color: ${e.default};
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
          color: ${e.hover};
        }

        .link-button:hover:not(:disabled):not([aria-disabled="true"]) .label {
          text-decoration: underline;
        }

        /* Focus state */
        .link-button:focus-visible {
          color: ${e.hover};
          outline: var(--atlas-focus-outline-size, 2px) solid var(--atlas-focus-outline-color, #3359c7);
          outline-offset: 2px;
        }

        .link-button:focus-visible .label {
          text-decoration: underline;
        }

        /* Pressed state */
        .link-button:active:not(:disabled):not([aria-disabled="true"]) {
          color: ${e.pressed};
        }

        /* Disabled state */
        .link-button:disabled,
        .link-button[aria-disabled="true"] {
          color: ${e.disabled};
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

      <${o} 
        class="link-button ${this.loading?"loading":""}" 
        ${l}
        ${t?'aria-disabled="true"':""}
      >
        <span class="label">${this.label}</span>
        ${n?`<atlas-icon name="${s}" size="${r.iconSize}"></atlas-icon>`:""}
      </${o}>
    `,o==="a"&&t&&this.shadowRoot.querySelector("a").addEventListener("click",i=>{i.preventDefault()}),o==="button"&&this.shadowRoot.querySelector("button").addEventListener("click",i=>{t||this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0,detail:{originalEvent:i}}))})}}customElements.get("atlas-link-button")||customElements.define("atlas-link-button",a);
