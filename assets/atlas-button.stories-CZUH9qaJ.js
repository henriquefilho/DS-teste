import"./atlas-icon-ClNXfHK9.js";class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["label","variant","color","size","icon","icon-name","disabled","loading","full-width"]}connectedCallback(){this.render()}attributeChangedCallback(e,n,l){this._isRendering||n===l||this.shadowRoot&&this.render()}get label(){return this.getAttribute("label")||this.textContent.trim()||"Button"}get variant(){return this.getAttribute("variant")||"filled"}get color(){return this.getAttribute("color")||"primary"}get size(){return this.getAttribute("size")||"md"}get icon(){return this.hasAttribute("icon")}get iconName(){return this.getAttribute("icon-name")||"plus"}get disabled(){return this.hasAttribute("disabled")}get loading(){return this.hasAttribute("loading")}get fullWidth(){return this.hasAttribute("full-width")}setupEventListeners(){const e=this.shadowRoot.querySelector("button");e&&e.addEventListener("click",n=>{if(this.disabled||this.loading){n.preventDefault(),n.stopPropagation();return}})}render(){if(this._isRendering)return;this._isRendering=!0;const e=this.disabled||this.loading,n=this.loading?`<atlas-icon name="loader" size="${this.size==="xl"?"md":"sm"}" class="btn__spinner"></atlas-icon>`:this.icon?`<atlas-icon name="${this.iconName}" size="${this.size==="xl"?"md":"sm"}" class="btn__icon"></atlas-icon>`:"";this.shadowRoot.innerHTML=`
      <style>
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
          outline: 2px solid var(--atlas-focus-outline-color);
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
        ${n}
        ${this.label?`<span class="btn__label">${this.label}</span>`:""}
      </button>
    `,this._isRendering=!1,this.setupEventListeners()}}customElements.define("atlas-button",Lt);const It={title:"Components/Atlas Button",tags:["autodocs"],render:t=>{const e=document.createElement("atlas-button");return e.setAttribute("label",t.label),e.setAttribute("variant",t.variant),e.setAttribute("color",t.color),e.setAttribute("size",t.size),t.icon?(e.setAttribute("icon",""),e.setAttribute("icon-name",t.iconName)):e.removeAttribute("icon"),t.ariaLabel?e.setAttribute("aria-label",t.ariaLabel):e.removeAttribute("aria-label"),t.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"),t.loading?e.setAttribute("loading",""):e.removeAttribute("loading"),t.fullWidth?e.setAttribute("full-width",""):e.removeAttribute("full-width"),e.addEventListener("click",t.onClick),e},argTypes:{label:{control:"text",description:"Texto exibido no botão",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Button"}}},variant:{control:"select",options:["filled","outlined","ghost"],description:"Define o estilo visual do botão",table:{category:"Appearance",type:{summary:"'filled' | 'outlined' | 'ghost'"},defaultValue:{summary:"filled"}}},color:{control:"select",options:["primary","danger","success","warning","info","inverse"],description:"Cor semântica que define o propósito do botão",table:{category:"Appearance",type:{summary:"'primary' | 'danger' | 'success' | 'warning' | 'info' | 'inverse'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg","xl"],description:"Tamanho do botão (altura e padding)",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg' | 'xl'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Ativa a exibição de um ícone no botão",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"plus"}}},ariaLabel:{control:"text",description:"Label de acessibilidade para leitores de tela. Use quando o label visual não for suficientemente descritivo",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Desabilita o botão, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Faz o botão ocupar 100% da largura do container",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"Callback executado ao clicar no botão",table:{category:"Actions",type:{summary:"() => void"}}}},args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",ariaLabel:"",disabled:!1,loading:!1,fullWidth:!1}},b={args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",ariaLabel:"",disabled:!1,loading:!1,fullWidth:!1}},p={args:{label:"Primary Action",variant:"filled",color:"primary",size:"md"}},g={args:{label:"Secondary Action",variant:"outlined",color:"primary",size:"md"}},m={args:{label:"Tertiary Action",variant:"ghost",color:"primary",size:"md"}},v={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash"}},f={args:{label:"Confirm",variant:"filled",color:"success",size:"md",icon:!0,iconName:"check"}},y={args:{label:"Warning",variant:"filled",color:"warning",size:"md",icon:!0,iconName:"alert-triangle"}},h={args:{label:"Information",variant:"filled",color:"info",size:"md",icon:!0,iconName:"info"}},x={args:{label:"Inverse Theme",variant:"filled",color:"inverse",size:"md"},parameters:{backgrounds:{default:"dark"}}},k={render:()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",t.style.alignItems="flex-start",[{size:"sm",label:"Small (32px)"},{size:"md",label:"Medium (40px)"},{size:"lg",label:"Large (48px)"},{size:"xl",label:"Extra Large (56px)"}].forEach(({size:n,label:l})=>{const s=document.createElement("atlas-button");s.setAttribute("label",l),s.setAttribute("size",n),s.setAttribute("variant","filled"),s.setAttribute("color","primary"),t.appendChild(s)}),t}},E={args:{label:"Add Item",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"}},A={args:{label:"Processing...",variant:"filled",color:"primary",size:"md",loading:!0}},z={args:{label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0}},C={args:{label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0},parameters:{layout:"padded"}},w={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash",ariaLabel:"Excluir item permanentemente da lista de produtos"},parameters:{docs:{description:{story:"Use `aria-label` para fornecer contexto adicional aos leitores de tela quando o label visual for muito curto ou ambíguo."}}}},S={render:()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="24px",t.style.padding="20px";const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px";const n=document.createElement("p");n.textContent="Estado de foco (use Tab para navegar):",n.style.margin="0",n.style.fontSize="14px",n.style.fontWeight="600",n.style.color="#333";const l=document.createElement("div");l.style.display="flex",l.style.gap="12px",[{variant:"filled",label:"Filled"},{variant:"outlined",label:"Outlined"},{variant:"ghost",label:"Ghost"}].forEach(({variant:a,label:d})=>{const u=document.createElement("atlas-button");u.setAttribute("label",d),u.setAttribute("variant",a),u.setAttribute("color","primary"),u.setAttribute("size","md"),l.appendChild(u)}),e.appendChild(n),e.appendChild(l);const o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.gap="8px",o.style.marginTop="16px";const r=document.createElement("p");r.textContent="Navegação por teclado:",r.style.margin="0",r.style.fontSize="14px",r.style.fontWeight="600",r.style.color="#333";const i=document.createElement("ul");return i.style.margin="0",i.style.paddingLeft="20px",i.style.fontSize="14px",i.style.color="#666",["Tab: Navega para o próximo botão","Shift + Tab: Navega para o botão anterior","Enter ou Space: Ativa o botão","O outline de foco é visível em todos os estados"].forEach(a=>{const d=document.createElement("li");d.textContent=a,d.style.marginBottom="4px",i.appendChild(d)}),o.appendChild(r),o.appendChild(i),t.appendChild(e),t.appendChild(o),t},parameters:{controls:{disable:!0},docs:{description:{story:"Todos os botões suportam navegação por teclado e exibem um outline de foco visível. Use Tab para navegar entre os botões e Enter/Space para ativá-los."}}}},D={render:()=>{const t=document.createElement("div");t.style.padding="20px",t.style.maxWidth="800px";const e=document.createElement("h3");return e.textContent="Boas Práticas de Acessibilidade",e.style.marginTop="0",e.style.marginBottom="16px",e.style.fontSize="18px",e.style.color="#333",[{title:"✅ Labels Descritivos",description:'Use labels que descrevam claramente a ação do botão. Evite labels genéricos como "Clique aqui".',example:{label:"Salvar alterações",good:!0}},{title:"✅ Aria-label para Contexto",description:"Adicione aria-label quando o label visual for muito curto ou precisar de contexto adicional.",example:{label:"Excluir",ariaLabel:'Excluir produto "iPhone 14" do carrinho',good:!0}},{title:"✅ Estados Visíveis",description:"Estados de loading e disabled são comunicados visualmente e para leitores de tela via aria-busy e disabled.",example:{label:"Processando...",loading:!0,good:!0}},{title:"❌ Evite Ícones Sem Label",description:"Nunca use botões apenas com ícone sem um label de texto ou aria-label.",example:{iconOnly:!0,good:!1}}].forEach(({title:l,description:s,example:o})=>{const r=document.createElement("div");r.style.marginBottom="24px",r.style.padding="16px",r.style.border="1px solid #e0e0e0",r.style.borderRadius="8px",r.style.backgroundColor=o.good?"#f0f9ff":"#fff5f5";const i=document.createElement("h4");i.textContent=l,i.style.margin="0 0 8px 0",i.style.fontSize="16px",i.style.color=o.good?"#0c4a6e":"#991b1b";const c=document.createElement("p");if(c.textContent=s,c.style.margin="0 0 12px 0",c.style.fontSize="14px",c.style.color="#666",c.style.lineHeight="1.6",r.appendChild(i),r.appendChild(c),o.iconOnly){const a=document.createElement("code");a.textContent='<atlas-button icon="search" /> ❌ Inacessível!',a.style.padding="8px 12px",a.style.backgroundColor="#fee2e2",a.style.border="1px solid #fecaca",a.style.borderRadius="4px",a.style.fontSize="13px",a.style.color="#991b1b",r.appendChild(a)}else{const a=document.createElement("atlas-button");a.setAttribute("label",o.label),a.setAttribute("variant","filled"),a.setAttribute("color","primary"),a.setAttribute("size","md"),o.ariaLabel&&a.setAttribute("aria-label",o.ariaLabel),o.loading&&a.setAttribute("loading",""),r.appendChild(a)}t.appendChild(r)}),t.insertBefore(e,t.firstChild),t},parameters:{controls:{disable:!0},docs:{description:{story:"Guia completo de boas práticas de acessibilidade para o componente Atlas Button."}}}},T={render:()=>{const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="repeat(3, 1fr)",t.style.gap="24px",t.style.padding="20px";const e=["filled","outlined","ghost"];return["primary","danger","success","warning","info"].forEach(l=>{e.forEach(s=>{const o=document.createElement("atlas-button");o.setAttribute("label",`${s} ${l}`),o.setAttribute("variant",s),o.setAttribute("color",l),o.setAttribute("size","md"),t.appendChild(o)})}),t},parameters:{controls:{disable:!0}}};var L,B,I;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'plus',
    ariaLabel: '',
    disabled: false,
    loading: false,
    fullWidth: false
  }
}`,...(I=(B=b.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var N,O,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Primary Action',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var R,F,P;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    color: 'primary',
    size: 'md'
  }
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var _,G,V;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Action',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var $,q,U;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash'
  }
}`,...(U=(q=v.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var H,M,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'md',
    icon: true,
    iconName: 'check'
  }
}`,...(X=(M=f.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var Z,j,J;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'filled',
    color: 'warning',
    size: 'md',
    icon: true,
    iconName: 'alert-triangle'
  }
}`,...(J=(j=y.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,Q,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Information',
    variant: 'filled',
    color: 'info',
    size: 'md',
    icon: true,
    iconName: 'info'
  }
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var tt,et,ot;x.parameters={...x.parameters,docs:{...(tt=x.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    label: 'Inverse Theme',
    variant: 'filled',
    color: 'inverse',
    size: 'md'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(ot=(et=x.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var at,nt,rt;k.parameters={...k.parameters,docs:{...(at=k.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.alignItems = 'flex-start';
    const sizes = [{
      size: 'sm',
      label: 'Small (32px)'
    }, {
      size: 'md',
      label: 'Medium (40px)'
    }, {
      size: 'lg',
      label: 'Large (48px)'
    }, {
      size: 'xl',
      label: 'Extra Large (56px)'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', label);
      button.setAttribute('size', size);
      button.setAttribute('variant', 'filled');
      button.setAttribute('color', 'primary');
      container.appendChild(button);
    });
    return container;
  }
}`,...(rt=(nt=k.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var lt,it,st;E.parameters={...E.parameters,docs:{...(lt=E.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'plus'
  }
}`,...(st=(it=E.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var ct,dt,ut;A.parameters={...A.parameters,docs:{...(ct=A.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    label: 'Processing...',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    loading: true
  }
}`,...(ut=(dt=A.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var bt,pt,gt;z.parameters={...z.parameters,docs:{...(bt=z.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(gt=(pt=z.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var mt,vt,ft;C.parameters={...C.parameters,docs:{...(mt=C.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(ft=(vt=C.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var yt,ht,xt;w.parameters={...w.parameters,docs:{...(yt=w.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash',
    ariaLabel: 'Excluir item permanentemente da lista de produtos'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`aria-label\` para fornecer contexto adicional aos leitores de tela quando o label visual for muito curto ou ambíguo.'
      }
    }
  }
}`,...(xt=(ht=w.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var kt,Et,At;S.parameters={...S.parameters,docs:{...(kt=S.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.padding = '20px';
    const wrapper1 = document.createElement('div');
    wrapper1.style.display = 'flex';
    wrapper1.style.flexDirection = 'column';
    wrapper1.style.gap = '8px';
    const title1 = document.createElement('p');
    title1.textContent = 'Estado de foco (use Tab para navegar):';
    title1.style.margin = '0';
    title1.style.fontSize = '14px';
    title1.style.fontWeight = '600';
    title1.style.color = '#333';
    const buttonRow = document.createElement('div');
    buttonRow.style.display = 'flex';
    buttonRow.style.gap = '12px';
    const variants = [{
      variant: 'filled',
      label: 'Filled'
    }, {
      variant: 'outlined',
      label: 'Outlined'
    }, {
      variant: 'ghost',
      label: 'Ghost'
    }];
    variants.forEach(({
      variant,
      label
    }) => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', label);
      button.setAttribute('variant', variant);
      button.setAttribute('color', 'primary');
      button.setAttribute('size', 'md');
      buttonRow.appendChild(button);
    });
    wrapper1.appendChild(title1);
    wrapper1.appendChild(buttonRow);
    const wrapper2 = document.createElement('div');
    wrapper2.style.display = 'flex';
    wrapper2.style.flexDirection = 'column';
    wrapper2.style.gap = '8px';
    wrapper2.style.marginTop = '16px';
    const title2 = document.createElement('p');
    title2.textContent = 'Navegação por teclado:';
    title2.style.margin = '0';
    title2.style.fontSize = '14px';
    title2.style.fontWeight = '600';
    title2.style.color = '#333';
    const list = document.createElement('ul');
    list.style.margin = '0';
    list.style.paddingLeft = '20px';
    list.style.fontSize = '14px';
    list.style.color = '#666';
    const items = ['Tab: Navega para o próximo botão', 'Shift + Tab: Navega para o botão anterior', 'Enter ou Space: Ativa o botão', 'O outline de foco é visível em todos os estados'];
    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.style.marginBottom = '4px';
      list.appendChild(li);
    });
    wrapper2.appendChild(title2);
    wrapper2.appendChild(list);
    container.appendChild(wrapper1);
    container.appendChild(wrapper2);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Todos os botões suportam navegação por teclado e exibem um outline de foco visível. Use Tab para navegar entre os botões e Enter/Space para ativá-los.'
      }
    }
  }
}`,...(At=(Et=S.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var zt,Ct,wt;D.parameters={...D.parameters,docs:{...(zt=D.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '800px';
    const title = document.createElement('h3');
    title.textContent = 'Boas Práticas de Acessibilidade';
    title.style.marginTop = '0';
    title.style.marginBottom = '16px';
    title.style.fontSize = '18px';
    title.style.color = '#333';
    const sections = [{
      title: '✅ Labels Descritivos',
      description: 'Use labels que descrevam claramente a ação do botão. Evite labels genéricos como "Clique aqui".',
      example: {
        label: 'Salvar alterações',
        good: true
      }
    }, {
      title: '✅ Aria-label para Contexto',
      description: 'Adicione aria-label quando o label visual for muito curto ou precisar de contexto adicional.',
      example: {
        label: 'Excluir',
        ariaLabel: 'Excluir produto "iPhone 14" do carrinho',
        good: true
      }
    }, {
      title: '✅ Estados Visíveis',
      description: 'Estados de loading e disabled são comunicados visualmente e para leitores de tela via aria-busy e disabled.',
      example: {
        label: 'Processando...',
        loading: true,
        good: true
      }
    }, {
      title: '❌ Evite Ícones Sem Label',
      description: 'Nunca use botões apenas com ícone sem um label de texto ou aria-label.',
      example: {
        iconOnly: true,
        good: false
      }
    }];
    sections.forEach(({
      title: sectionTitle,
      description,
      example
    }) => {
      const section = document.createElement('div');
      section.style.marginBottom = '24px';
      section.style.padding = '16px';
      section.style.border = '1px solid #e0e0e0';
      section.style.borderRadius = '8px';
      section.style.backgroundColor = example.good ? '#f0f9ff' : '#fff5f5';
      const h4 = document.createElement('h4');
      h4.textContent = sectionTitle;
      h4.style.margin = '0 0 8px 0';
      h4.style.fontSize = '16px';
      h4.style.color = example.good ? '#0c4a6e' : '#991b1b';
      const p = document.createElement('p');
      p.textContent = description;
      p.style.margin = '0 0 12px 0';
      p.style.fontSize = '14px';
      p.style.color = '#666';
      p.style.lineHeight = '1.6';
      section.appendChild(h4);
      section.appendChild(p);
      if (!example.iconOnly) {
        const button = document.createElement('atlas-button');
        button.setAttribute('label', example.label);
        button.setAttribute('variant', 'filled');
        button.setAttribute('color', 'primary');
        button.setAttribute('size', 'md');
        if (example.ariaLabel) button.setAttribute('aria-label', example.ariaLabel);
        if (example.loading) button.setAttribute('loading', '');
        section.appendChild(button);
      } else {
        const warning = document.createElement('code');
        warning.textContent = '<atlas-button icon="search" /> ❌ Inacessível!';
        warning.style.padding = '8px 12px';
        warning.style.backgroundColor = '#fee2e2';
        warning.style.border = '1px solid #fecaca';
        warning.style.borderRadius = '4px';
        warning.style.fontSize = '13px';
        warning.style.color = '#991b1b';
        section.appendChild(warning);
      }
      container.appendChild(section);
    });
    container.insertBefore(title, container.firstChild);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Guia completo de boas práticas de acessibilidade para o componente Atlas Button.'
      }
    }
  }
}`,...(wt=(Ct=D.parameters)==null?void 0:Ct.docs)==null?void 0:wt.source}}};var St,Dt,Tt;T.parameters={...T.parameters,docs:{...(St=T.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '24px';
    container.style.padding = '20px';
    const variants = ['filled', 'outlined', 'ghost'];
    const colors = ['primary', 'danger', 'success', 'warning', 'info'];
    colors.forEach(color => {
      variants.forEach(variant => {
        const button = document.createElement('atlas-button');
        button.setAttribute('label', \`\${variant} \${color}\`);
        button.setAttribute('variant', variant);
        button.setAttribute('color', color);
        button.setAttribute('size', 'md');
        container.appendChild(button);
      });
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Tt=(Dt=T.parameters)==null?void 0:Dt.docs)==null?void 0:Tt.source}}};const Nt=["Playground","FilledPrimary","OutlinedSecondary","GhostTertiary","DangerButton","SuccessButton","WarningButton","InfoButton","InverseButton","SizeComparison","WithIcon","LoadingState","DisabledState","FullWidthButton","WithAriaLabel","FocusStates","AccessibilityBestPractices","AllVariantsGrid"];export{D as AccessibilityBestPractices,T as AllVariantsGrid,v as DangerButton,z as DisabledState,p as FilledPrimary,S as FocusStates,C as FullWidthButton,m as GhostTertiary,h as InfoButton,x as InverseButton,A as LoadingState,g as OutlinedSecondary,b as Playground,k as SizeComparison,f as SuccessButton,y as WarningButton,w as WithAriaLabel,E as WithIcon,Nt as __namedExportsOrder,It as default};
