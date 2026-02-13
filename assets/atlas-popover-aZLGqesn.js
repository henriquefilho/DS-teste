class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["arrow","title","text","image-src","image-alt","action-type","action-label","action-href","closable","open","max-width"]}connectedCallback(){this.render(),this._setupEventListeners()}disconnectedCallback(){this._removeEventListeners()}attributeChangedCallback(r,a,s){this._isRendering||a===s||this.shadowRoot&&this.render()}get arrow(){return this.getAttribute("arrow")||"top-center"}get title(){return this.getAttribute("title")||""}get text(){return this.getAttribute("text")||""}get imageSrc(){return this.getAttribute("image-src")||""}get imageAlt(){return this.getAttribute("image-alt")||""}get actionType(){return this.getAttribute("action-type")||"none"}get actionLabel(){return this.getAttribute("action-label")||"Button"}get actionHref(){return this.getAttribute("action-href")||"#"}get closable(){return this.hasAttribute("closable")&&this.getAttribute("closable")!=="false"}get open(){return this.hasAttribute("open")&&this.getAttribute("open")!=="false"}get maxWidth(){return this.getAttribute("max-width")||"278px"}_setupEventListeners(){this._escHandler=r=>{r.key==="Escape"&&this.open&&this.close("programmatic")},document.addEventListener("keydown",this._escHandler)}_removeEventListeners(){this._escHandler&&document.removeEventListener("keydown",this._escHandler)}close(r="programmatic"){this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("atlas-popover-close",{bubbles:!0,composed:!0,detail:{reason:r}}))}show(){this.setAttribute("open","")}_handleCloseClick(r){r.preventDefault(),r.stopPropagation(),this.close("close-button")}_handleActionClick(r){this.dispatchEvent(new CustomEvent("atlas-popover-action",{bubbles:!0,composed:!0,detail:{actionType:this.actionType,label:this.actionLabel}}))}render(){this._isRendering=!0;const r=this.title?"popover-title":"",a="popover-text";if(this.shadowRoot.innerHTML=`
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

        /* Header: Título + Close Button */
        .popover-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--atlas-spacing-100);
          width: 100%;
        }

        .popover-header:empty {
          display: none;
        }

        .popover-title {
          font-family: 'Open Sans', sans-serif;
          font-size: var(--atlas-typescale-heading-6-size);
          font-weight: var(--atlas-typescale-heading-6-weight);
          letter-spacing: var(--atlas-typescale-heading-6-letter-spacing);
          line-height: 1.2;
          color: var(--atlas-color-text-static-neutral-hard);
          margin: 0;
          flex: 1;
        }

        .close-button {
          flex-shrink: 0;
        }

        /* Image */
        .popover-image {
          width: calc(100% + var(--atlas-padding-md) * 2);
          margin-left: calc(var(--atlas-padding-md) * -1);
          margin-right: calc(var(--atlas-padding-md) * -1);
          display: block;
          object-fit: cover;
          max-height: 146px;
          border-radius: 0;
        }

        /* Content */
        .popover-content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-spacing-100);
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
        ${r?`aria-labelledby="${r}"`:""}
        aria-describedby="${a}"
      >
        ${this.title||this.closable?`
          <div class="popover-header">
            ${this.title?`
              <h3 id="${r}" class="popover-title">${this.title}</h3>
            `:""}
            ${this.closable?`
              <atlas-icon-button
                class="close-button"
                icon-name="x"
                color="secondary"
                size="sm"
                aria-label="Fechar"
              ></atlas-icon-button>
            `:""}
          </div>
        `:""}

        ${this.imageSrc?`
          <img 
            src="${this.imageSrc}" 
            alt="${this.imageAlt}"
            class="popover-image"
          />
        `:""}

        <div class="popover-content">
          <p id="${a}" class="popover-text">${this.text}</p>
        </div>

        ${this._renderFooter()}
      </div>
    `,this.closable){const t=this.shadowRoot.querySelector(".close-button");t&&t.addEventListener("click",this._handleCloseClick.bind(this))}const s=this.shadowRoot.querySelector(".action-button, .action-link");s&&s.addEventListener("click",this._handleActionClick.bind(this)),this._isRendering=!1}_getArrowStyles(){const r=this.arrow;if(r==="none")return"";const a="var(--atlas-color-border-default)",s="var(--atlas-color-surface-static-container-neutral-ultra-soft)",t="6px",i="6px",e="5px",n="5px",o="-5px";return{"top-center":`
        :host([arrow="top-center"][open])::before,
        :host([arrow="top-center"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="top-center"][open])::before {
          left: 50%;
          top: ${o};
          transform: translateX(-50%);
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-bottom: ${i} solid ${a};
        }
        :host([arrow="top-center"][open])::after {
          left: 50%;
          top: calc(${o} + 1px);
          transform: translateX(-50%);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-bottom: ${n} solid ${s};
        }
      `,"top-left":`
        :host([arrow="top-left"][open])::before,
        :host([arrow="top-left"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="top-left"][open])::before {
          left: 20px;
          top: ${o};
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-bottom: ${i} solid ${a};
        }
        :host([arrow="top-left"][open])::after {
          left: calc(20px + 1px);
          top: calc(${o} + 1px);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-bottom: ${n} solid ${s};
        }
      `,"top-right":`
        :host([arrow="top-right"][open])::before,
        :host([arrow="top-right"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="top-right"][open])::before {
          right: 20px;
          top: ${o};
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-bottom: ${i} solid ${a};
        }
        :host([arrow="top-right"][open])::after {
          right: calc(20px + 1px);
          top: calc(${o} + 1px);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-bottom: ${n} solid ${s};
        }
      `,"bottom-center":`
        :host([arrow="bottom-center"][open])::before,
        :host([arrow="bottom-center"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="bottom-center"][open])::before {
          left: 50%;
          bottom: ${o};
          transform: translateX(-50%);
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-top: ${i} solid ${a};
        }
        :host([arrow="bottom-center"][open])::after {
          left: 50%;
          bottom: calc(${o} + 1px);
          transform: translateX(-50%);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-top: ${n} solid ${s};
        }
      `,"bottom-left":`
        :host([arrow="bottom-left"][open])::before,
        :host([arrow="bottom-left"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="bottom-left"][open])::before {
          left: 20px;
          bottom: ${o};
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-top: ${i} solid ${a};
        }
        :host([arrow="bottom-left"][open])::after {
          left: calc(20px + 1px);
          bottom: calc(${o} + 1px);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-top: ${n} solid ${s};
        }
      `,"bottom-right":`
        :host([arrow="bottom-right"][open])::before,
        :host([arrow="bottom-right"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="bottom-right"][open])::before {
          right: 20px;
          bottom: ${o};
          border-left: ${t} solid transparent;
          border-right: ${t} solid transparent;
          border-top: ${i} solid ${a};
        }
        :host([arrow="bottom-right"][open])::after {
          right: calc(20px + 1px);
          bottom: calc(${o} + 1px);
          border-left: ${e} solid transparent;
          border-right: ${e} solid transparent;
          border-top: ${n} solid ${s};
        }
      `,"side-left":`
        :host([arrow="side-left"][open])::before,
        :host([arrow="side-left"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="side-left"][open])::before {
          top: 50%;
          left: ${o};
          transform: translateY(-50%);
          border-top: ${t} solid transparent;
          border-bottom: ${t} solid transparent;
          border-right: ${i} solid ${a};
        }
        :host([arrow="side-left"][open])::after {
          top: 50%;
          left: calc(${o} + 1px);
          transform: translateY(-50%);
          border-top: ${e} solid transparent;
          border-bottom: ${e} solid transparent;
          border-right: ${n} solid ${s};
        }
      `,"side-right":`
        :host([arrow="side-right"][open])::before,
        :host([arrow="side-right"][open])::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
        }
        :host([arrow="side-right"][open])::before {
          top: 50%;
          right: ${o};
          transform: translateY(-50%);
          border-top: ${t} solid transparent;
          border-bottom: ${t} solid transparent;
          border-left: ${i} solid ${a};
        }
        :host([arrow="side-right"][open])::after {
          top: 50%;
          right: calc(${o} + 1px);
          transform: translateY(-50%);
          border-top: ${e} solid transparent;
          border-bottom: ${e} solid transparent;
          border-left: ${n} solid ${s};
        }
      `}[r]||""}_renderFooter(){return this.actionType==="none"?'<div class="popover-footer"></div>':this.actionType==="button"?`
        <div class="popover-footer">
          <atlas-button
            class="action-button"
            variant="filled"
            color="primary"
            size="sm"
            label="${this.actionLabel}"
          ></atlas-button>
        </div>
      `:this.actionType==="link"?`
        <div class="popover-footer">
          <atlas-link-button
            class="action-link"
            size="sm"
            label="${this.actionLabel}"
            href="${this.actionHref}"
          ></atlas-link-button>
        </div>
      `:'<div class="popover-footer"></div>'}}customElements.define("atlas-popover",l);
