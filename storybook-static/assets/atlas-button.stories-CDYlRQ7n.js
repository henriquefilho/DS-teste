var ht=Object.defineProperty;var yt=(t,e,o)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var I=(t,e,o)=>yt(t,typeof e!="symbol"?e+"":e,o);class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["label","variant","color","size","icon","icon-name","disabled","loading","full-width"]}connectedCallback(){this.render(),this.setupEventListeners()}attributeChangedCallback(){this.shadowRoot&&this.render()}get label(){return this.getAttribute("label")||this.textContent.trim()||"Button"}get variant(){return this.getAttribute("variant")||"filled"}get color(){return this.getAttribute("color")||"primary"}get size(){return this.getAttribute("size")||"md"}get icon(){return this.hasAttribute("icon")}get iconName(){return this.getAttribute("icon-name")||"plus"}get disabled(){return this.hasAttribute("disabled")}get loading(){return this.hasAttribute("loading")}get fullWidth(){return this.hasAttribute("full-width")}setupEventListeners(){const e=this.shadowRoot.querySelector("button");e&&e.addEventListener("click",o=>{if(this.disabled||this.loading){o.preventDefault(),o.stopPropagation();return}})}render(){const e=this.disabled||this.loading,o=this.loading?`<atlas-icon name="loader" size="${this.size==="xl"?"md":"sm"}" class="btn__spinner"></atlas-icon>`:this.icon?`<atlas-icon name="${this.iconName}" size="${this.size==="xl"?"md":"sm"}" class="btn__icon"></atlas-icon>`:"";this.shadowRoot.innerHTML=`
      <style>
        @import url('../../tokens/atlas-design-tokens.css');

        :host {
          display: ${this.fullWidth?"block":"inline-block"};
          width: ${this.fullWidth?"100%":"auto"};
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
          outline: 2px solid rgba(0, 85, 204, 0.4);
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
          outline: 2px solid rgba(204, 0, 0, 0.4);
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
          outline: 2px solid rgba(25, 135, 84, 0.4);
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
          outline: 2px solid rgba(217, 119, 6, 0.4);
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
          outline: 2px solid rgba(13, 110, 253, 0.4);
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
          outline: 2px solid rgba(255, 255, 255, 0.4);
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
          outline: 2px solid rgba(0, 85, 204, 0.4);
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
          outline: 2px solid rgba(204, 0, 0, 0.4);
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
          outline: 2px solid rgba(25, 135, 84, 0.4);
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
          outline: 2px solid rgba(217, 119, 6, 0.4);
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
          outline: 2px solid rgba(13, 110, 253, 0.4);
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
          outline: 2px solid rgba(255, 255, 255, 0.4);
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
          outline: 2px solid rgba(0, 85, 204, 0.4);
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
          outline: 2px solid rgba(204, 0, 0, 0.4);
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
          outline: 2px solid rgba(25, 135, 84, 0.4);
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
          outline: 2px solid rgba(217, 119, 6, 0.4);
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
          outline: 2px solid rgba(13, 110, 253, 0.4);
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
          outline: 2px solid rgba(255, 255, 255, 0.4);
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
        ${e?"disabled":""}
        ${this.loading?'aria-busy="true"':""}>
        ${o}
        ${this.label?`<span class="btn__label">${this.label}</span>`:""}
      </button>
    `}}customElements.define("atlas-button",xt);const p=class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["name","size"]}connectedCallback(){this.render()}attributeChangedCallback(){this.shadowRoot&&this.render()}get name(){return this.getAttribute("name")||"circle"}get size(){return this.getAttribute("size")||"md"}getUnicode(){return p.iconMap[this.name]||p.iconMap.circle}getFontSize(){return p.sizeMap[this.size]||p.sizeMap.md}render(){const e=this.getUnicode(),o=this.getFontSize(),n=this.name;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          font-family: 'Atlas-Icons' !important;
          speak: never;
          font-style: normal !important;
          font-weight: normal !important;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          font-size: ${o};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      </style>
      <span class="icon ati-${n}" aria-hidden="true">${e}</span>
    `}};I(p,"sizeMap",{xs:"8px",sm:"16px",md:"24px",lg:"32px",xl:"40px",xxl:"48px"}),I(p,"iconMap",{"address-book":"",alert:"","alert-circle":"","alert-triangle":"","alert-triangle-filled":"","align-justify":"",android:"",apps:"","arrow-down":"","arrow-down-circle":"","arrow-left":"","arrow-right":"","arrow-right-left":"","arrow-up":"","arrow-up-circle":"","arrow-up-right":"","asaas-logo":"",award:"",backspace:"","banco-abc-brasil":"","banco-bmg":"","banco-brb":"","banco-da-amazonia":"","banco-do-brasil":"","banco-industrial-do-brasil":"","banco-original":"",banese:"",bank:"","bank-of-america":"",banpara:"","bar-chart":"",barcode:"",bars:"","base-logo":"",bell:"",bnb:"",box:"",bradesco:"",briefcase:"","btg-pactual":"","c6-bank":"",caixa:"",calendar:"","calendar-check":"","calendar-clock":"","calendar-magnifier":"","calendar-sync":"",camera:"",card:"","card-mastercard":"","cash-machine-with-ticket":"","cash-machine-with-ticket-1":"",celebrate:"","chart-line":"",check:"","check-circle":"","check-filled":"","chevron-down":"","chevron-left":"","chevron-right":"","chevron-up":"",circle:"","citi-bank":"",clock:"","clock-filled":"",cloud:"",cog:"","color-picker":"",companies:"","concentric-circles":"",contactless:"",copy:"","corner-up-right":"",credisis:"",cutlery:"",dashboard:"",daycoval:"","deutsche-bank":"",discord:"","dollar-sign":"","dollar-zap":"","double-check":"",download:"",email:"",envelope:"",equal:"","external-link":"",eye:"","eye-filled":"","eye-off":"","eye-off-filled":"",facebook:"",file:"","file-check":"","file-dollar":"","file-import":"","file-invoice":"","file-plus":"","file-text":"","file-users":"",files:"",filter:"","flapp-store-logo":"",flash:"",gift:"",github:"",globe:"",hammer:"","hand-card":"","hand-holding-money":"","hand-shake":"",headset:"","help-circle":"",hierarchy:"",home:"","id-card":"",image:"",info:"",instagram:"",inter:"",itau:"",key:"",keyboard:"",link:"",linkedin:"",list:"",loader:"",lock:"","lock-filled":"","log-in":"",magnifier:"","mail-box":"","map-pin":"","market-pin":"",maximize:"",megaphone:"","mercado-pago":"","message-circle":"","message-circle-dollar":"","message-circles":"",mic:"",minus:"","minus-circle":"",money:"","money-filled":"","money-notes":"",monitor:"","monitor-chart-up":"",moon:"",neon:"",nubank:"","open-finance":"",pagbank:"",paperclip:"",pencil:"",percentage:"",phone:"","pic-pay":"",pix:"","pix-filled":"",play:"",plus:"","plus-circle":"",power:"",printer:"",qrcode:"","quotation-marks":"",receipt:"",refresh:"","refresh-dollar":"",repeat:"","reverse-clock":"",rotate:"","rotate-cw":"","rotate-dollar":"",safra:"",santander:"",send:"",serasa:"",share:"",shield:"","shopping-bag":"","shopping-cart-down":"","shopping-cart-right":"",sicoob:"",sicredi:"",slash:"",sliders:"",smartphone:"","smartphone-contactless":"","smile-face":"",sort:"","sort-amount-down":"","sort-amount-up":"","sort-horizontal":"",spanner:"","split-arrows":"",spotify:"",square:"","square-signs":"",star:"","star-filled":"",stone:"",sun:"",tag:"",target:"","three-dots":"","three-dots-horinzontal":"","thumbs-down":"","thumbs-up":"",ticket:"",tiktok:"",trash:"",truck:"",unlink:"",unlock:"","unlock-filled":"",upload:"",user:"","user-filled":"","user-plus":"",users:"",video:"","virtual-card":"",wallet:"",whatsapp:"",x:"","x-circle":"","x-filled":"","x-logo":"","xp-investimentos":"",youtube:"",zero:""});let L=p;customElements.define("atlas-icon",L);const kt={title:"Components/AtlasButton",tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto do botão",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},variant:{control:"select",options:["filled","outlined","ghost"],description:"Variante do botão",table:{type:{summary:"string"},defaultValue:{summary:"filled"}}},color:{control:"select",options:["primary","danger","success","warning","info","inverse"],description:"Cor do botão",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Tamanho do botão",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},iconName:{control:"text",description:"Nome do ícone",table:{type:{summary:"string"},defaultValue:{summary:"plus"}}},icon:{control:"boolean",description:"Mostrar ícone",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Botão desabilitado",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Estado de carregamento",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Largura total",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},g=t=>{const e=document.createElement("atlas-button");return t.label&&e.setAttribute("label",t.label),t.variant&&e.setAttribute("variant",t.variant),t.color&&e.setAttribute("color",t.color),t.size&&e.setAttribute("size",t.size),t.icon&&e.setAttribute("icon",""),t.iconName&&e.setAttribute("icon-name",t.iconName),t.disabled&&e.setAttribute("disabled",""),t.loading&&e.setAttribute("loading",""),t.fullWidth&&e.setAttribute("full-width",""),e},h=g.bind({});h.args={label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,disabled:!1,loading:!1,fullWidth:!1};const y=g.bind({});y.args={label:"Filled Button",variant:"filled",color:"primary",size:"md"};const x=g.bind({});x.args={label:"Outlined Button",variant:"outlined",color:"primary",size:"md"};const A=g.bind({});A.args={label:"Ghost Button",variant:"ghost",color:"primary",size:"md"};const z=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",["primary","danger","success","warning","info","inverse"].forEach(o=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const a=document.createElement("span");a.textContent=o.charAt(0).toUpperCase()+o.slice(1),a.style.minWidth="80px",n.appendChild(a),["filled","outlined","ghost"].forEach(r=>{const i=document.createElement("atlas-button");i.setAttribute("label",r.charAt(0).toUpperCase()+r.slice(1)),i.setAttribute("variant",r),i.setAttribute("color",o),i.setAttribute("size","md"),n.appendChild(i)}),t.appendChild(n)}),t},B=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",t.style.alignItems="flex-start",[{name:"Small (32px)",value:"sm"},{name:"Medium (40px)",value:"md"},{name:"Large (48px)",value:"lg"},{name:"Extra Large (56px)",value:"xl"}].forEach(({name:o,value:n})=>{const a=document.createElement("atlas-button");a.setAttribute("label",o),a.setAttribute("variant","filled"),a.setAttribute("color","primary"),a.setAttribute("size",n),t.appendChild(a)}),t},k=g.bind({});k.args={label:"Button with Icon",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"};const E=g.bind({});E.args={label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0};const C=g.bind({});C.args={label:"Loading...",variant:"filled",color:"primary",size:"md",loading:!0};const w=g.bind({});w.args={label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0};const S=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",[{label:"Default",props:{}},{label:"Hover",props:{},info:"(hover com o mouse)"},{label:"Disabled",props:{disabled:!0}},{label:"Loading",props:{loading:!0}},{label:"With Icon",props:{icon:!0,iconName:"plus"}}].forEach(({label:o,props:n,info:a})=>{const r=document.createElement("div");r.style.display="flex",r.style.gap="8px",r.style.alignItems="center";const i=document.createElement("span");i.textContent=o,i.style.minWidth="100px",r.appendChild(i);const l=document.createElement("atlas-button");if(l.setAttribute("label",o),l.setAttribute("variant","filled"),l.setAttribute("color","primary"),l.setAttribute("size","md"),n.disabled&&l.setAttribute("disabled",""),n.loading&&l.setAttribute("loading",""),n.icon&&l.setAttribute("icon",""),n.iconName&&l.setAttribute("icon-name",n.iconName),r.appendChild(l),a){const s=document.createElement("span");s.textContent=a,s.style.fontSize="12px",s.style.color="#666",r.appendChild(s)}t.appendChild(r)}),t},N=()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="24px";const e=document.createElement("div"),o=document.createElement("h3");o.textContent="Botões de Ação",o.style.marginBottom="12px",e.appendChild(o);const n=document.createElement("div");n.style.display="flex",n.style.gap="8px";const a=document.createElement("atlas-button");a.setAttribute("label","Salvar"),a.setAttribute("variant","filled"),a.setAttribute("color","success"),a.setAttribute("icon",""),a.setAttribute("icon-name","check"),n.appendChild(a);const r=document.createElement("atlas-button");r.setAttribute("label","Cancelar"),r.setAttribute("variant","outlined"),r.setAttribute("color","danger"),n.appendChild(r),e.appendChild(n),t.appendChild(e);const i=document.createElement("div"),l=document.createElement("h3");l.textContent="Botões de Navegação",l.style.marginBottom="12px",i.appendChild(l);const s=document.createElement("div");s.style.display="flex",s.style.gap="8px";const u=document.createElement("atlas-button");u.setAttribute("label","Voltar"),u.setAttribute("variant","ghost"),u.setAttribute("color","primary"),s.appendChild(u);const c=document.createElement("atlas-button");c.setAttribute("label","Próximo"),c.setAttribute("variant","filled"),c.setAttribute("color","primary"),c.setAttribute("icon",""),c.setAttribute("icon-name","arrow-right"),s.appendChild(c),i.appendChild(s),t.appendChild(i);const b=document.createElement("div"),d=document.createElement("h3");d.textContent="Botões de Alerta",d.style.marginBottom="12px",b.appendChild(d);const v=document.createElement("div");v.style.display="flex",v.style.gap="8px";const m=document.createElement("atlas-button");m.setAttribute("label","Excluir"),m.setAttribute("variant","filled"),m.setAttribute("color","danger"),m.setAttribute("icon",""),m.setAttribute("icon-name","trash"),v.appendChild(m);const f=document.createElement("atlas-button");return f.setAttribute("label","Atenção"),f.setAttribute("variant","outlined"),f.setAttribute("color","warning"),f.setAttribute("icon",""),f.setAttribute("icon-name","alert-triangle"),v.appendChild(f),b.appendChild(v),t.appendChild(b),t},D=()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="32px";const e=["filled","outlined","ghost"],o=["primary","danger","success","warning","info","inverse"];return e.forEach(n=>{const a=document.createElement("div"),r=document.createElement("h3");r.textContent=n.charAt(0).toUpperCase()+n.slice(1),r.style.marginBottom="12px",a.appendChild(r);const i=document.createElement("div");i.style.display="grid",i.style.gridTemplateColumns="repeat(3, 1fr)",i.style.gap="12px",o.forEach(l=>{const s=document.createElement("div");s.style.padding="16px",s.style.border="1px solid #e0e0e0",s.style.borderRadius="8px";const u=document.createElement("div");u.textContent=l.charAt(0).toUpperCase()+l.slice(1),u.style.fontSize="12px",u.style.marginBottom="8px",u.style.color="#666",s.appendChild(u);const c=document.createElement("div");c.style.display="flex",c.style.flexDirection="column",c.style.gap="8px";const b=document.createElement("atlas-button");b.setAttribute("label","Normal"),b.setAttribute("variant",n),b.setAttribute("color",l),b.setAttribute("size","md"),c.appendChild(b);const d=document.createElement("atlas-button");d.setAttribute("label","Disabled"),d.setAttribute("variant",n),d.setAttribute("color",l),d.setAttribute("size","md"),d.setAttribute("disabled",""),c.appendChild(d),s.appendChild(c),i.appendChild(s)}),a.appendChild(i),t.appendChild(a)}),t};var W,F,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var T,M,$;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...($=(M=y.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,V,U;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(U=(V=x.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var G,_,H;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(H=(_=A.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var q,P,j;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  const colors = ['primary', 'danger', 'success', 'warning', 'info', 'inverse'];
  colors.forEach(color => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.alignItems = 'center';
    const label = document.createElement('span');
    label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    label.style.minWidth = '80px';
    row.appendChild(label);
    ['filled', 'outlined', 'ghost'].forEach(variant => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', variant.charAt(0).toUpperCase() + variant.slice(1));
      button.setAttribute('variant', variant);
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      row.appendChild(button);
    });
    container.appendChild(row);
  });
  return container;
}`,...(j=(P=z.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var X,Z,J;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  container.style.alignItems = 'flex-start';
  const sizes = [{
    name: 'Small (32px)',
    value: 'sm'
  }, {
    name: 'Medium (40px)',
    value: 'md'
  }, {
    name: 'Large (48px)',
    value: 'lg'
  }, {
    name: 'Extra Large (56px)',
    value: 'xl'
  }];
  sizes.forEach(({
    name,
    value
  }) => {
    const button = document.createElement('atlas-button');
    button.setAttribute('label', name);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', value);
    container.appendChild(button);
  });
  return container;
}`,...(J=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var tt,et,nt;E.parameters={...E.parameters,docs:{...(tt=E.parameters)==null?void 0:tt.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(nt=(et=E.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var ot,at,rt;C.parameters={...C.parameters,docs:{...(ot=C.parameters)==null?void 0:ot.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(rt=(at=C.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var it,lt,st;w.parameters={...w.parameters,docs:{...(it=w.parameters)==null?void 0:it.docs,source:{originalSource:`args => {
  const button = document.createElement('atlas-button');
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  return button;
}`,...(st=(lt=w.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var ct,ut,dt;S.parameters={...S.parameters,docs:{...(ct=S.parameters)==null?void 0:ct.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  const states = [{
    label: 'Default',
    props: {}
  }, {
    label: 'Hover',
    props: {},
    info: '(hover com o mouse)'
  }, {
    label: 'Disabled',
    props: {
      disabled: true
    }
  }, {
    label: 'Loading',
    props: {
      loading: true
    }
  }, {
    label: 'With Icon',
    props: {
      icon: true,
      iconName: 'plus'
    }
  }];
  states.forEach(({
    label,
    props,
    info
  }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.alignItems = 'center';
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    labelSpan.style.minWidth = '100px';
    row.appendChild(labelSpan);
    const button = document.createElement('atlas-button');
    button.setAttribute('label', label);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'md');
    if (props.disabled) button.setAttribute('disabled', '');
    if (props.loading) button.setAttribute('loading', '');
    if (props.icon) button.setAttribute('icon', '');
    if (props.iconName) button.setAttribute('icon-name', props.iconName);
    row.appendChild(button);
    if (info) {
      const infoSpan = document.createElement('span');
      infoSpan.textContent = info;
      infoSpan.style.fontSize = '12px';
      infoSpan.style.color = '#666';
      row.appendChild(infoSpan);
    }
    container.appendChild(row);
  });
  return container;
}`,...(dt=(ut=S.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var bt,pt,gt;N.parameters={...N.parameters,docs:{...(bt=N.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';

  // Exemplo 1: Botões de ação
  const section1 = document.createElement('div');
  const title1 = document.createElement('h3');
  title1.textContent = 'Botões de Ação';
  title1.style.marginBottom = '12px';
  section1.appendChild(title1);
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';
  const saveBtn = document.createElement('atlas-button');
  saveBtn.setAttribute('label', 'Salvar');
  saveBtn.setAttribute('variant', 'filled');
  saveBtn.setAttribute('color', 'success');
  saveBtn.setAttribute('icon', '');
  saveBtn.setAttribute('icon-name', 'check');
  actions.appendChild(saveBtn);
  const cancelBtn = document.createElement('atlas-button');
  cancelBtn.setAttribute('label', 'Cancelar');
  cancelBtn.setAttribute('variant', 'outlined');
  cancelBtn.setAttribute('color', 'danger');
  actions.appendChild(cancelBtn);
  section1.appendChild(actions);
  container.appendChild(section1);

  // Exemplo 2: Botões de navegação
  const section2 = document.createElement('div');
  const title2 = document.createElement('h3');
  title2.textContent = 'Botões de Navegação';
  title2.style.marginBottom = '12px';
  section2.appendChild(title2);
  const navigation = document.createElement('div');
  navigation.style.display = 'flex';
  navigation.style.gap = '8px';
  const backBtn = document.createElement('atlas-button');
  backBtn.setAttribute('label', 'Voltar');
  backBtn.setAttribute('variant', 'ghost');
  backBtn.setAttribute('color', 'primary');
  navigation.appendChild(backBtn);
  const nextBtn = document.createElement('atlas-button');
  nextBtn.setAttribute('label', 'Próximo');
  nextBtn.setAttribute('variant', 'filled');
  nextBtn.setAttribute('color', 'primary');
  nextBtn.setAttribute('icon', '');
  nextBtn.setAttribute('icon-name', 'arrow-right');
  navigation.appendChild(nextBtn);
  section2.appendChild(navigation);
  container.appendChild(section2);

  // Exemplo 3: Botões de alerta
  const section3 = document.createElement('div');
  const title3 = document.createElement('h3');
  title3.textContent = 'Botões de Alerta';
  title3.style.marginBottom = '12px';
  section3.appendChild(title3);
  const alerts = document.createElement('div');
  alerts.style.display = 'flex';
  alerts.style.gap = '8px';
  const deleteBtn = document.createElement('atlas-button');
  deleteBtn.setAttribute('label', 'Excluir');
  deleteBtn.setAttribute('variant', 'filled');
  deleteBtn.setAttribute('color', 'danger');
  deleteBtn.setAttribute('icon', '');
  deleteBtn.setAttribute('icon-name', 'trash');
  alerts.appendChild(deleteBtn);
  const warningBtn = document.createElement('atlas-button');
  warningBtn.setAttribute('label', 'Atenção');
  warningBtn.setAttribute('variant', 'outlined');
  warningBtn.setAttribute('color', 'warning');
  warningBtn.setAttribute('icon', '');
  warningBtn.setAttribute('icon-name', 'alert-triangle');
  alerts.appendChild(warningBtn);
  section3.appendChild(alerts);
  container.appendChild(section3);
  return container;
}`,...(gt=(pt=N.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var mt,ft,vt;D.parameters={...D.parameters,docs:{...(mt=D.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '32px';
  const variants = ['filled', 'outlined', 'ghost'];
  const colors = ['primary', 'danger', 'success', 'warning', 'info', 'inverse'];
  variants.forEach(variant => {
    const section = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    title.style.marginBottom = '12px';
    section.appendChild(title);
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '12px';
    colors.forEach(color => {
      const card = document.createElement('div');
      card.style.padding = '16px';
      card.style.border = '1px solid #e0e0e0';
      card.style.borderRadius = '8px';
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorLabel.style.fontSize = '12px';
      colorLabel.style.marginBottom = '8px';
      colorLabel.style.color = '#666';
      card.appendChild(colorLabel);
      const btnContainer = document.createElement('div');
      btnContainer.style.display = 'flex';
      btnContainer.style.flexDirection = 'column';
      btnContainer.style.gap = '8px';

      // Normal
      const normalBtn = document.createElement('atlas-button');
      normalBtn.setAttribute('label', 'Normal');
      normalBtn.setAttribute('variant', variant);
      normalBtn.setAttribute('color', color);
      normalBtn.setAttribute('size', 'md');
      btnContainer.appendChild(normalBtn);

      // Disabled
      const disabledBtn = document.createElement('atlas-button');
      disabledBtn.setAttribute('label', 'Disabled');
      disabledBtn.setAttribute('variant', variant);
      disabledBtn.setAttribute('color', color);
      disabledBtn.setAttribute('size', 'md');
      disabledBtn.setAttribute('disabled', '');
      btnContainer.appendChild(disabledBtn);
      card.appendChild(btnContainer);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
  return container;
}`,...(vt=(ft=D.parameters)==null?void 0:ft.docs)==null?void 0:vt.source}}};const Et=["Default","Filled","Outlined","Ghost","AllColors","Sizes","WithIcon","Disabled","Loading","FullWidth","AllStates","UsageExamples","CompleteMatrix"];export{z as AllColors,S as AllStates,D as CompleteMatrix,h as Default,E as Disabled,y as Filled,w as FullWidth,A as Ghost,C as Loading,x as Outlined,B as Sizes,N as UsageExamples,k as WithIcon,Et as __namedExportsOrder,kt as default};
