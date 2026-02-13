class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["alignment","checked","label","strong-label","description","state","error-text","icon-popover","icon-popover-name","hide-label"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,r){this._isRendering||a===r||this.render()}get alignment(){return this.getAttribute("alignment")||"left"}get checked(){return this.hasAttribute("checked")}get label(){return this.getAttribute("label")||"Label"}get strongLabel(){return this.hasAttribute("strong-label")}get description(){return this.getAttribute("description")||""}get state(){return this.getAttribute("state")||"default"}get errorText(){return this.getAttribute("error-text")||"Error text"}get iconPopover(){return this.hasAttribute("icon-popover")}get iconPopoverName(){return this.getAttribute("icon-popover-name")||"info"}get hideLabel(){return this.hasAttribute("hide-label")}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}setupEventListeners(){const e=this.shadowRoot.querySelector(".switch-control"),a=this.state==="default"||this.state==="error";e&&a?(e.style.cursor="pointer",e.onclick=()=>this.toggle()):e&&(e.style.cursor="not-allowed",e.onclick=null)}toggle(){(this.state==="default"||this.state==="error")&&(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){if(this._isRendering)return;this._isRendering=!0;const e=this.checked,a=this.alignment==="left",r=this.description.length>0,o=this.state==="error",t=this.state==="disabled",l=this.state==="read-only";this.shadowRoot.innerHTML=`
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
        ${this.hideLabel?`
          ${this.renderSwitch(e,t,l)}
        `:`
          ${a?this.renderSwitch(e,t,l):""}
          
          <div class="switch-content">
            <div class="label-row">
              <span class="switch-label ${this.strongLabel?"strong":""} ${t?"disabled":""}">
                ${this.label}
              </span>
              ${this.iconPopover?`
                <atlas-icon-button 
                  icon-name="${this.iconPopoverName}" 
                  size="sm" 
                  color="primary"
                  aria-label="Informações adicionais">
                </atlas-icon-button>
              `:""}
            </div>
            
            ${r?`
              <div class="switch-description ${t?"disabled":""}">
                ${this.description}
              </div>
            `:""}
            
            ${o?`
              <div class="error-text">
                ${this.errorText}
              </div>
            `:""}
          </div>

          ${a?"":this.renderSwitch(e,t,l)}
        `}
      </div>
    `,this._isRendering=!1,this.setupEventListeners()}renderSwitch(e,a,r){return`
      <div class="${["switch-control",e?"checked":"unchecked",a?"disabled":"",r?"read-only":"",this.state==="error"?"error":""].filter(Boolean).join(" ")}">
        <div class="switch-thumb"></div>
      </div>
    `}}customElements.define("atlas-switch",s);
