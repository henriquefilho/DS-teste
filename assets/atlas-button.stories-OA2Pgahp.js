import"./atlas-icon-C7XCDMfu.js";class Et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["label","variant","color","size","icon","icon-name","disabled","loading","full-width"]}connectedCallback(){this.render(),this.setupEventListeners()}attributeChangedCallback(){this.shadowRoot&&this.render()}get label(){return this.getAttribute("label")||this.textContent.trim()||"Button"}get variant(){return this.getAttribute("variant")||"filled"}get color(){return this.getAttribute("color")||"primary"}get size(){return this.getAttribute("size")||"md"}get icon(){return this.hasAttribute("icon")}get iconName(){return this.getAttribute("icon-name")||"plus"}get disabled(){return this.hasAttribute("disabled")}get loading(){return this.hasAttribute("loading")}get fullWidth(){return this.hasAttribute("full-width")}setupEventListeners(){const o=this.shadowRoot.querySelector("button");o&&o.addEventListener("click",a=>{if(this.disabled||this.loading){a.preventDefault(),a.stopPropagation();return}})}render(){const o=this.disabled||this.loading,a=this.loading?`<atlas-icon name="loader" size="${this.size==="xl"?"md":"sm"}" class="btn__spinner"></atlas-icon>`:this.icon?`<atlas-icon name="${this.iconName}" size="${this.size==="xl"?"md":"sm"}" class="btn__icon"></atlas-icon>`:"";this.shadowRoot.innerHTML=`
      <link rel="stylesheet" href="/tokens/atlas-design-tokens.css">
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
        ${o?"disabled":""}
        ${this.loading?'aria-busy="true"':""}>
        ${a}
        ${this.label?`<span class="btn__label">${this.label}</span>`:""}
      </button>
    `}}customElements.define("atlas-button",Et);const Ct=["plus","minus","check","x","arrow-right","arrow-left","arrow-up","arrow-down","chevron-right","chevron-left","chevron-down","chevron-up","trash","pencil","copy","eye","eye-off","download","upload","send","magnifier","filter","cog","bell","user","home","calendar","clock","envelope","lock","unlock","star","star-filled","heart","loader","info","alert-circle","alert-triangle","check-circle","x-circle","help-circle","external-link","link","share","refresh","pix","money","card","bank","dollar-sign","shopping-cart-right","shopping-bag","gift","file","files"],wt={title:"Components/AtlasButton",tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto do botão",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Conteúdo"}},variant:{control:{type:"radio"},options:["filled","outlined","ghost"],description:"Variante visual do botão",table:{type:{summary:"string"},defaultValue:{summary:"filled"},category:"Aparência"}},color:{control:{type:"select"},options:["primary","danger","success","warning","info","inverse"],description:"Cor temática do botão",table:{type:{summary:"string"},defaultValue:{summary:"primary"},category:"Aparência"}},size:{control:{type:"radio"},options:["sm","md","lg","xl"],description:"Tamanho do botão (sm: 32px, md: 40px, lg: 48px, xl: 56px)",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Aparência"}},icon:{control:{type:"boolean"},description:"Ativar/desativar ícone no botão",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Ícone"}},iconName:{control:{type:"select"},options:Ct,description:"Selecione o ícone a ser exibido",table:{type:{summary:"string"},defaultValue:{summary:"plus"},category:"Ícone"}},disabled:{control:{type:"boolean"},description:"Desabilitar o botão (impede interação)",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Estado"}},loading:{control:{type:"boolean"},description:"Ativar estado de carregamento (mostra spinner)",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Estado"}},fullWidth:{control:{type:"boolean"},description:"Botão ocupa 100% da largura disponível",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Layout"}},onClick:{action:"clicked",description:"Evento disparado ao clicar no botão",table:{category:"Eventos"}}}},p=t=>{const o=document.createElement("atlas-button");return t.label&&o.setAttribute("label",t.label),t.variant&&o.setAttribute("variant",t.variant),t.color&&o.setAttribute("color",t.color),t.size&&o.setAttribute("size",t.size),t.icon&&o.setAttribute("icon",""),t.iconName&&o.setAttribute("icon-name",t.iconName),t.disabled&&o.setAttribute("disabled",""),t.loading&&o.setAttribute("loading",""),t.fullWidth&&o.setAttribute("full-width",""),t.onClick&&o.addEventListener("click",t.onClick),o},v=p.bind({});v.args={label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",disabled:!1,loading:!1,fullWidth:!1};v.parameters={docs:{description:{story:"Use os controles abaixo para experimentar todas as propriedades do botão de forma interativa."}}};const h=p.bind({});h.args={label:"Filled Button",variant:"filled",color:"primary",size:"md"};h.parameters={docs:{description:{story:"Variante Filled: estilo sólido com fundo colorido, ideal para ações primárias."}}};const y=p.bind({});y.args={label:"Outlined Button",variant:"outlined",color:"primary",size:"md"};y.parameters={docs:{description:{story:"Variante Outlined: botão com borda e fundo transparente, ideal para ações secundárias."}}};const x=p.bind({});x.args={label:"Ghost Button",variant:"ghost",color:"primary",size:"md"};x.parameters={docs:{description:{story:"Variante Ghost: sem borda, apenas texto e hover sutil, ideal para ações terciárias."}}};const w=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",["primary","danger","success","warning","info","inverse"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.alignItems="center";const i=document.createElement("span");i.textContent=a.charAt(0).toUpperCase()+a.slice(1),i.style.minWidth="80px",i.style.fontWeight="600",i.style.fontSize="14px",n.appendChild(i),["filled","outlined","ghost"].forEach(e=>{const r=document.createElement("atlas-button");r.setAttribute("label",e.charAt(0).toUpperCase()+e.slice(1)),r.setAttribute("variant",e),r.setAttribute("color",a),r.setAttribute("size","md"),n.appendChild(r)}),t.appendChild(n)}),t};w.parameters={docs:{description:{story:"Todas as cores disponíveis (primary, danger, success, warning, info, inverse) em cada variante."}},controls:{disable:!0}};const B=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",t.style.alignItems="flex-start",[{name:"Small",value:"sm",height:"32px"},{name:"Medium",value:"md",height:"40px"},{name:"Large",value:"lg",height:"48px"},{name:"Extra Large",value:"xl",height:"56px"}].forEach(({name:a,value:n,height:i})=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="16px";const r=document.createElement("atlas-button");r.setAttribute("label",`${a} (${i})`),r.setAttribute("variant","filled"),r.setAttribute("color","primary"),r.setAttribute("size",n),e.appendChild(r),t.appendChild(e)}),t};B.parameters={docs:{description:{story:"Quatro tamanhos disponíveis para se adaptar a diferentes contextos de uso."}},controls:{disable:!0}};const A=p.bind({});A.args={label:"Button with Icon",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"};A.parameters={docs:{description:{story:'Botão com ícone à esquerda do texto. Use o controle "iconName" para mudar o ícone.'}}};const k=p.bind({});k.args={label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0};k.parameters={docs:{description:{story:"Estado desabilitado: impede interação do usuário e aplica estilo visual reduzido."}}};const C=p.bind({});C.args={label:"Loading...",variant:"filled",color:"primary",size:"md",loading:!0};C.parameters={docs:{description:{story:"Estado de carregamento: mostra um spinner animado e desabilita a interação."}}};const E=p.bind({});E.args={label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0};E.parameters={docs:{description:{story:"Botão ocupa 100% da largura do container pai."}}};const S=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",[{label:"Default",props:{}},{label:"Hover",props:{},info:"(hover com o mouse)"},{label:"Disabled",props:{disabled:!0}},{label:"Loading",props:{loading:!0}},{label:"With Icon",props:{icon:!0,iconName:"plus"}}].forEach(({label:a,props:n,info:i})=>{const e=document.createElement("div");e.style.display="flex",e.style.gap="8px",e.style.alignItems="center";const r=document.createElement("span");r.textContent=a,r.style.minWidth="100px",r.style.fontWeight="600",r.style.fontSize="14px",e.appendChild(r);const l=document.createElement("atlas-button");if(l.setAttribute("label",a),l.setAttribute("variant","filled"),l.setAttribute("color","primary"),l.setAttribute("size","md"),n.disabled&&l.setAttribute("disabled",""),n.loading&&l.setAttribute("loading",""),n.icon&&l.setAttribute("icon",""),n.iconName&&l.setAttribute("icon-name",n.iconName),e.appendChild(l),i){const s=document.createElement("span");s.textContent=i,s.style.fontSize="12px",s.style.color="#666",e.appendChild(s)}t.appendChild(e)}),t};S.parameters={docs:{description:{story:"Comparação visual de todos os estados do botão."}},controls:{disable:!0}};const N=()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="24px";const o=document.createElement("div"),a=document.createElement("h3");a.textContent="Botões de Ação",a.style.marginBottom="12px",a.style.fontSize="16px",a.style.fontWeight="600",o.appendChild(a);const n=document.createElement("div");n.style.display="flex",n.style.gap="8px",n.style.flexWrap="wrap";const i=document.createElement("atlas-button");i.setAttribute("label","Salvar"),i.setAttribute("variant","filled"),i.setAttribute("color","success"),i.setAttribute("icon",""),i.setAttribute("icon-name","check"),n.appendChild(i);const e=document.createElement("atlas-button");e.setAttribute("label","Cancelar"),e.setAttribute("variant","outlined"),e.setAttribute("color","danger"),n.appendChild(e),o.appendChild(n),t.appendChild(o);const r=document.createElement("div"),l=document.createElement("h3");l.textContent="Botões de Navegação",l.style.marginBottom="12px",l.style.fontSize="16px",l.style.fontWeight="600",r.appendChild(l);const s=document.createElement("div");s.style.display="flex",s.style.gap="8px",s.style.flexWrap="wrap";const c=document.createElement("atlas-button");c.setAttribute("label","Voltar"),c.setAttribute("variant","ghost"),c.setAttribute("color","primary"),c.setAttribute("icon",""),c.setAttribute("icon-name","arrow-left"),s.appendChild(c);const d=document.createElement("atlas-button");d.setAttribute("label","Próximo"),d.setAttribute("variant","filled"),d.setAttribute("color","primary"),d.setAttribute("icon",""),d.setAttribute("icon-name","arrow-right"),s.appendChild(d),r.appendChild(s),t.appendChild(r);const b=document.createElement("div"),u=document.createElement("h3");u.textContent="Botões de Alerta",u.style.marginBottom="12px",u.style.fontSize="16px",u.style.fontWeight="600",b.appendChild(u);const g=document.createElement("div");g.style.display="flex",g.style.gap="8px",g.style.flexWrap="wrap";const m=document.createElement("atlas-button");m.setAttribute("label","Excluir"),m.setAttribute("variant","filled"),m.setAttribute("color","danger"),m.setAttribute("icon",""),m.setAttribute("icon-name","trash"),g.appendChild(m);const f=document.createElement("atlas-button");return f.setAttribute("label","Atenção"),f.setAttribute("variant","outlined"),f.setAttribute("color","warning"),f.setAttribute("icon",""),f.setAttribute("icon-name","alert-triangle"),g.appendChild(f),b.appendChild(g),t.appendChild(b),t};N.parameters={docs:{description:{story:"Exemplos práticos de uso em diferentes contextos: ações, navegação e alertas."}},controls:{disable:!0}};const W=()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="32px";const o=["filled","outlined","ghost"],a=["primary","danger","success","warning","info","inverse"];return o.forEach(n=>{const i=document.createElement("div"),e=document.createElement("h3");e.textContent=n.charAt(0).toUpperCase()+n.slice(1),e.style.marginBottom="12px",e.style.fontSize="16px",e.style.fontWeight="600",i.appendChild(e);const r=document.createElement("div");r.style.display="grid",r.style.gridTemplateColumns="repeat(3, 1fr)",r.style.gap="12px",a.forEach(l=>{const s=document.createElement("div");s.style.padding="16px",s.style.border="1px solid #e0e0e0",s.style.borderRadius="8px",s.style.backgroundColor="#fafafa";const c=document.createElement("div");c.textContent=l.charAt(0).toUpperCase()+l.slice(1),c.style.fontSize="12px",c.style.marginBottom="8px",c.style.color="#666",c.style.fontWeight="600",s.appendChild(c);const d=document.createElement("div");d.style.display="flex",d.style.flexDirection="column",d.style.gap="8px";const b=document.createElement("atlas-button");b.setAttribute("label","Normal"),b.setAttribute("variant",n),b.setAttribute("color",l),b.setAttribute("size","md"),d.appendChild(b);const u=document.createElement("atlas-button");u.setAttribute("label","Disabled"),u.setAttribute("variant",n),u.setAttribute("color",l),u.setAttribute("size","md"),u.setAttribute("disabled",""),d.appendChild(u),s.appendChild(d),r.appendChild(s)}),i.appendChild(r),t.appendChild(i)}),t};W.parameters={docs:{description:{story:"Matriz completa mostrando todas as combinações de variantes, cores e estados."}},controls:{disable:!0}};const D=()=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="24px";const o=document.createElement("h3");o.textContent="Ícones Disponíveis",o.style.marginBottom="12px",o.style.fontSize="16px",o.style.fontWeight="600",t.appendChild(o);const a=document.createElement("p");a.textContent='Use qualquer um desses ícones no controle "iconName" do botão padrão.',a.style.fontSize="14px",a.style.color="#666",a.style.marginBottom="8px",t.appendChild(a);const n=document.createElement("div");return n.style.display="grid",n.style.gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))",n.style.gap="12px",Ct.forEach(i=>{const e=document.createElement("atlas-button");e.setAttribute("label",i),e.setAttribute("variant","outlined"),e.setAttribute("color","primary"),e.setAttribute("size","sm"),e.setAttribute("icon",""),e.setAttribute("icon-name",i),e.style.fontSize="10px",n.appendChild(e)}),t.appendChild(n),t};D.parameters={docs:{description:{story:"Galeria visual de todos os ícones populares disponíveis no seletor."}},controls:{disable:!0}};const z=p.bind({});z.args={label:"Clique aqui",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"star",disabled:!1,loading:!1,fullWidth:!1};z.parameters={docs:{description:{story:'Experimente livremente todas as combinações de propriedades. Ative o ícone e depois selecione diferentes opções no controle "iconName".'}}};var I,L,O;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(O=(L=v.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,T,V;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(V=(T=h.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,G,$;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...($=(G=y.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var U,_,R;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(R=(_=x.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var M,P,H;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
    label.style.fontWeight = '600';
    label.style.fontSize = '14px';
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
}`,...(H=(P=w.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var X,Z,j;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  container.style.alignItems = 'flex-start';
  const sizes = [{
    name: 'Small',
    value: 'sm',
    height: '32px'
  }, {
    name: 'Medium',
    value: 'md',
    height: '40px'
  }, {
    name: 'Large',
    value: 'lg',
    height: '48px'
  }, {
    name: 'Extra Large',
    value: 'xl',
    height: '56px'
  }];
  sizes.forEach(({
    name,
    value,
    height
  }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '16px';
    const button = document.createElement('atlas-button');
    button.setAttribute('label', \`\${name} (\${height})\`);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', value);
    row.appendChild(button);
    container.appendChild(row);
  });
  return container;
}`,...(j=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var Q,J,K;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(K=(J=A.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,tt,et;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(et=(tt=k.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,ot,at;C.parameters={...C.parameters,docs:{...(nt=C.parameters)==null?void 0:nt.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(at=(ot=C.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};var rt,it,lt;E.parameters={...E.parameters,docs:{...(rt=E.parameters)==null?void 0:rt.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(lt=(it=E.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var st,ct,dt;S.parameters={...S.parameters,docs:{...(st=S.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
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
    labelSpan.style.fontWeight = '600';
    labelSpan.style.fontSize = '14px';
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
}`,...(dt=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,bt,pt;N.parameters={...N.parameters,docs:{...(ut=N.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';

  // Exemplo 1: Botões de ação
  const section1 = document.createElement('div');
  const title1 = document.createElement('h3');
  title1.textContent = 'Botões de Ação';
  title1.style.marginBottom = '12px';
  title1.style.fontSize = '16px';
  title1.style.fontWeight = '600';
  section1.appendChild(title1);
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';
  actions.style.flexWrap = 'wrap';
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
  title2.style.fontSize = '16px';
  title2.style.fontWeight = '600';
  section2.appendChild(title2);
  const navigation = document.createElement('div');
  navigation.style.display = 'flex';
  navigation.style.gap = '8px';
  navigation.style.flexWrap = 'wrap';
  const backBtn = document.createElement('atlas-button');
  backBtn.setAttribute('label', 'Voltar');
  backBtn.setAttribute('variant', 'ghost');
  backBtn.setAttribute('color', 'primary');
  backBtn.setAttribute('icon', '');
  backBtn.setAttribute('icon-name', 'arrow-left');
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
  title3.style.fontSize = '16px';
  title3.style.fontWeight = '600';
  section3.appendChild(title3);
  const alerts = document.createElement('div');
  alerts.style.display = 'flex';
  alerts.style.gap = '8px';
  alerts.style.flexWrap = 'wrap';
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
}`,...(pt=(bt=N.parameters)==null?void 0:bt.docs)==null?void 0:pt.source}}};var gt,mt,ft;W.parameters={...W.parameters,docs:{...(gt=W.parameters)==null?void 0:gt.docs,source:{originalSource:`() => {
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
    title.style.fontSize = '16px';
    title.style.fontWeight = '600';
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
      card.style.backgroundColor = '#fafafa';
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorLabel.style.fontSize = '12px';
      colorLabel.style.marginBottom = '8px';
      colorLabel.style.color = '#666';
      colorLabel.style.fontWeight = '600';
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
}`,...(ft=(mt=W.parameters)==null?void 0:mt.docs)==null?void 0:ft.source}}};var vt,ht,yt;D.parameters={...D.parameters,docs:{...(vt=D.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';
  const title = document.createElement('h3');
  title.textContent = 'Ícones Disponíveis';
  title.style.marginBottom = '12px';
  title.style.fontSize = '16px';
  title.style.fontWeight = '600';
  container.appendChild(title);
  const description = document.createElement('p');
  description.textContent = 'Use qualquer um desses ícones no controle "iconName" do botão padrão.';
  description.style.fontSize = '14px';
  description.style.color = '#666';
  description.style.marginBottom = '8px';
  container.appendChild(description);
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
  grid.style.gap = '12px';
  popularIcons.forEach(iconName => {
    const button = document.createElement('atlas-button');
    button.setAttribute('label', iconName);
    button.setAttribute('variant', 'outlined');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'sm');
    button.setAttribute('icon', '');
    button.setAttribute('icon-name', iconName);
    button.style.fontSize = '10px';
    grid.appendChild(button);
  });
  container.appendChild(grid);
  return container;
}`,...(yt=(ht=D.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var xt,At,kt;z.parameters={...z.parameters,docs:{...(xt=z.parameters)==null?void 0:xt.docs,source:{originalSource:`args => {
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

  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  return button;
}`,...(kt=(At=z.parameters)==null?void 0:At.docs)==null?void 0:kt.source}}};const Bt=["Default","Filled","Outlined","Ghost","AllColors","Sizes","WithIcon","Disabled","Loading","FullWidth","AllStates","UsageExamples","CompleteMatrix","IconGallery","InteractivePlayground"];export{w as AllColors,S as AllStates,W as CompleteMatrix,v as Default,k as Disabled,h as Filled,E as FullWidth,x as Ghost,D as IconGallery,z as InteractivePlayground,C as Loading,y as Outlined,B as Sizes,N as UsageExamples,A as WithIcon,Bt as __namedExportsOrder,wt as default};
