import"./atlas-icon-B_0Pd0rQ.js";import"./atlas-icon-button-D_fTdWvm.js";import"./atlas-switch-B-gLJBPG.js";class Ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["type","label","description","visual-support","visual-support-icon","visual-support-image","action-icon","checked","disabled","href","show-divider"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){this._isRendering||a===s||this.shadowRoot&&this.render()}get type(){return this.getAttribute("type")||"navigation"}get label(){return this.getAttribute("label")||""}get description(){return this.getAttribute("description")||""}get visualSupport(){return this.hasAttribute("visual-support")}get visualSupportIcon(){return this.getAttribute("visual-support-icon")||"cog"}get visualSupportImage(){return this.getAttribute("visual-support-image")||""}get actionIcon(){const e=this.type==="navigation"?"chevron-right":"three-dots";return this.getAttribute("action-icon")||e}get checked(){return this.hasAttribute("checked")}get disabled(){return this.hasAttribute("disabled")}get href(){return this.getAttribute("href")||""}get showDivider(){return this.getAttribute("show-divider")!=="false"}get hasCustomContent(){return this.children.length>0}setupEventListeners(){const e=this.shadowRoot.querySelector(".resource-list-item"),a=this.shadowRoot.querySelector(".action-button"),s=this.shadowRoot.querySelector("atlas-switch");e&&this.type==="navigation"&&e.addEventListener("click",t=>{if(this.disabled){t.preventDefault(),t.stopPropagation();return}t.target.closest(".action-button")||this.dispatchEvent(new CustomEvent("resource-list-click",{bubbles:!0,composed:!0,detail:{type:this.type,label:this.label,href:this.href}}))}),a&&this.type==="icon-button"&&a.addEventListener("click",t=>{if(this.disabled){t.preventDefault(),t.stopPropagation();return}t.stopPropagation(),this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,composed:!0,detail:{label:this.label}}))}),s&&this.type==="switch"&&s.addEventListener("change",t=>{if(this.disabled){t.preventDefault(),t.stopPropagation();return}t.detail.checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.dispatchEvent(new CustomEvent("switch-change",{bubbles:!0,composed:!0,detail:{checked:t.detail.checked,label:this.label}}))})}render(){if(this._isRendering)return;this._isRendering=!0;const e=this.type==="navigation"||this.type==="icon-button",a=this.type==="navigation"||this.type==="icon-button",s=this.type==="navigation"&&this.href?"a":"div",t=s==="a"?`href="${this.href}"`:"",Ee=this.visualSupport?`
      <div class="visual-support ${this.visualSupportImage?"has-image":""}">
        ${this.visualSupportImage?`
          <img src="${this.visualSupportImage}" alt="" class="visual-support-image">
        `:`
          <atlas-icon name="${this.visualSupportIcon}" size="24"></atlas-icon>
        `}
      </div>
    `:"",ke=`
      <div class="content">
        ${this.label?`<div class="label">${this.label}</div>`:""}
        ${this.description?`<div class="description">${this.description}</div>`:""}
        <slot></slot>
      </div>
    `;let r="";this.type==="navigation"?r=`
        <div class="action-navigation">
          <atlas-icon name="${this.actionIcon}" size="16" color="neutral"></atlas-icon>
        </div>
      `:this.type==="icon-button"?r=`
        <atlas-icon-button 
          class="action-button"
          icon-name="${this.actionIcon}" 
          color="secondary" 
          size="md"
          ${this.disabled?"disabled":""}
          aria-label="Ação"
        ></atlas-icon-button>
      `:this.type==="switch"&&(r=`
        <atlas-switch 
          ${this.checked?"checked":""} 
          ${this.disabled?'state="disabled"':""}
          hide-label
          alignment="right"
        ></atlas-switch>
      `);const De=this.showDivider?'<div class="divider"></div>':"";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .resource-list-container {
          display: flex;
          flex-direction: column;
          background: var(--atlas-color-surface-interaction-neutral-ultra-soft-default);
          transition: background-color 0.15s ease-in-out;
        }

        .resource-list-item {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-md);
          padding: var(--atlas-padding-md);
          cursor: ${e&&!this.disabled?"pointer":"default"};
          text-decoration: none;
          color: inherit;
          ${this.disabled?"pointer-events: none;":""}
        }

        /* Estados do container (apenas para types que suportam) */
        ${a&&!this.disabled?`
          .resource-list-container:hover {
            background: var(--atlas-color-surface-interaction-primary-ultra-soft-hover);
          }

          .resource-list-container:active,
          .resource-list-item:active {
            background: var(--atlas-color-surface-interaction-primary-ultra-soft-pressed);
          }
        `:""}

        .resource-list-item:focus-visible {
          outline: var(--atlas-focus-outline-size) solid var(--atlas-focus-outline-color);
          outline-offset: var(--atlas-focus-outline-offset-default);
        }

        /* Estado disabled */
        ${this.disabled?`
          .resource-list-container {
            background: var(--atlas-color-surface-interaction-disabled);
          }
          .resource-list-item {
            cursor: not-allowed;
            opacity: 0.6;
          }
        `:""}

        /* Visual Support Container */
        .visual-content-wrapper {
          display: flex;
          align-items: center;
          gap: var(--atlas-gap-sm);
          flex: 1;
          min-width: 0;
        }

        .visual-support {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          min-width: 32px;
          background: var(--atlas-color-surface-static-container-neutral-soft);
          border-radius: 999px;
          padding: var(--atlas-padding-2xs);
          overflow: hidden;
        }

        .visual-support.has-image {
          padding: 0;
        }

        .visual-support-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 999px;
        }

        /* Content */
        .content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-gap-2xs);
          flex: 1;
          min-width: 0;
        }

        .label {
          font-family: var(--atlas-font-face-general);
          font-size: var(--atlas-typescale-label-inline-sm-size);
          font-weight: var(--atlas-typescale-label-inline-sm-weight-strong);
          line-height: 1.5;
          color: var(--atlas-color-text-static-neutral-hard);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .description {
          font-family: var(--atlas-font-face-general);
          font-size: var(--atlas-typescale-label-inline-xs-size);
          font-weight: var(--atlas-typescale-label-inline-xs-weight-default);
          line-height: 1;
          color: var(--atlas-color-text-static-neutral-medium);
          word-wrap: break-word;
        }

        /* Slot customizado */
        ::slotted(*) {
          flex: 1;
        }

        /* Action Área */
        .action-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
        }

        .action-button {
          flex-shrink: 0;
        }

        /* Divider */
        .divider {
          width: 100%;
          height: 1px;
          background: var(--atlas-color-surface-static-shape-neutral-super-soft);
        }
      </style>

      <div class="resource-list-container">
        <${s} 
          class="resource-list-item" 
          ${t}
          ${this.disabled?'aria-disabled="true"':""}
          role="${this.type==="navigation"?this.href?"link":"button":"listitem"}"
          tabindex="${this.disabled?"-1":"0"}"
        >
          <div class="visual-content-wrapper">
            ${Ee}
            ${ke}
          </div>
          ${r}
        </${s}>
        ${De}
      </div>
    `,this._isRendering=!1,this.setupEventListeners()}}customElements.define("atlas-resource-list",Ie);const ze={title:"Components/Atlas Resource List",tags:["autodocs"],render:i=>{const e=document.createElement("atlas-resource-list");return e.setAttribute("type",i.type),i.label&&e.setAttribute("label",i.label),i.description&&e.setAttribute("description",i.description),i.visualSupport?e.setAttribute("visual-support",""):e.removeAttribute("visual-support"),i.visualSupportIcon&&e.setAttribute("visual-support-icon",i.visualSupportIcon),i.visualSupportImage&&e.setAttribute("visual-support-image",i.visualSupportImage),i.actionIcon&&e.setAttribute("action-icon",i.actionIcon),i.href&&e.setAttribute("href",i.href),i.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),i.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"),i.showDivider?e.removeAttribute("show-divider"):e.setAttribute("show-divider","false"),i.customContent&&(e.innerHTML=i.customContent),e.addEventListener("resource-list-click",a=>{i.onResourceListClick(a.detail)}),e.addEventListener("action-click",a=>{i.onActionClick(a.detail)}),e.addEventListener("switch-change",a=>{i.onSwitchChange(a.detail)}),e},argTypes:{type:{control:"select",options:["navigation","icon-button","switch","informational"],description:"Tipo de ação do item",table:{category:"Type & Content",type:{summary:"'navigation' | 'icon-button' | 'switch' | 'informational'"},defaultValue:{summary:"navigation"}}},label:{control:"text",description:"Texto principal do item (título em negrito)",table:{category:"Type & Content",type:{summary:"string"},defaultValue:{summary:""}}},description:{control:"text",description:"Texto descritivo secundário (menor e cinza)",table:{category:"Type & Content",type:{summary:"string"},defaultValue:{summary:""}}},customContent:{control:"text",description:"HTML customizado que substitui label e description (usa slot default)",table:{category:"Type & Content",type:{summary:"string (HTML)"},defaultValue:{summary:""}}},visualSupport:{control:"boolean",description:"Exibe ícone decorativo à esquerda",table:{category:"Visual Support",type:{summary:"boolean"},defaultValue:{summary:!1}}},visualSupportIcon:{control:"text",description:"Nome do ícone para o visual support (ex: cog, bell, lock, wifi)",table:{category:"Visual Support",type:{summary:"string"},defaultValue:{summary:"cog"}},if:{arg:"visualSupport",truthy:!0}},visualSupportImage:{control:"text",description:"URL da imagem para o visual support (tem prioridade sobre o ícone)",table:{category:"Visual Support",type:{summary:"string"},defaultValue:{summary:""}},if:{arg:"visualSupport",truthy:!0}},actionIcon:{control:"text",description:"Nome do ícone para ação (chevron-right para navigation, three-dots para icon-button)",table:{category:"Action Configuration",type:{summary:"string"},defaultValue:{summary:"chevron-right / three-dots"}},if:{arg:"type",neq:"switch"}},href:{control:"text",description:'URL de navegação (usado apenas quando type="navigation")',table:{category:"Action Configuration",type:{summary:"string"},defaultValue:{summary:""}},if:{arg:"type",eq:"navigation"}},checked:{control:"boolean",description:'Estado do switch (usado apenas quando type="switch")',table:{category:"Action Configuration",type:{summary:"boolean"},defaultValue:{summary:!1}},if:{arg:"type",eq:"switch"}},disabled:{control:"boolean",description:"Estado desabilitado do componente",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:!1}}},showDivider:{control:"boolean",description:"Exibe linha divisória na parte inferior",table:{category:"State",type:{summary:"boolean"},defaultValue:{summary:!0}}},onResourceListClick:{action:"resource-list-click",description:"Disparado quando item é clicado (type: navigation)",table:{category:"Actions",type:{summary:"CustomEvent<{ type, label, href }>"}}},onActionClick:{action:"action-click",description:"Disparado quando botão de ação é clicado (type: icon-button)",table:{category:"Actions",type:{summary:"CustomEvent<{ label }>"}}},onSwitchChange:{action:"switch-change",description:"Disparado quando switch muda de estado (type: switch)",table:{category:"Actions",type:{summary:"CustomEvent<{ checked, label }>"}}}}},o={args:{type:"navigation",label:"Configurações do sistema",description:"Gerencie preferências e configurações",href:"#settings",visualSupport:!1,disabled:!1,showDivider:!0}},n={args:{type:"navigation",label:"Notificações",description:"Configure suas notificações",href:"#notifications",visualSupport:!0,visualSupportIcon:"bell",disabled:!1,showDivider:!0}},l={args:{type:"navigation",label:"Meu Perfil",description:"Edite suas informações pessoais",href:"#profile",visualSupport:!0,visualSupportImage:"https://i.pravatar.cc/32?img=1",disabled:!1,showDivider:!0},parameters:{docs:{description:{story:"Navigation com imagem no visual support. A imagem tem prioridade sobre o ícone quando ambos são definidos."}}}},c={args:{type:"navigation",label:"Funcionalidade desabilitada",description:"Esta opção não está disponível",href:"#disabled",visualSupport:!0,visualSupportIcon:"alert-triangle",disabled:!0,showDivider:!0}},u={args:{type:"navigation",label:"Item único sem divider",description:"Útil para listas com um único item",href:"#single",visualSupport:!1,disabled:!1,showDivider:!1}},d={args:{type:"icon-button",label:"Opções avançadas",description:"Acesse configurações adicionais",actionIcon:"three-dots",visualSupport:!1,disabled:!1,showDivider:!0}},p={args:{type:"icon-button",label:"Minha conta",description:"Editar informações do perfil",actionIcon:"pencil",visualSupport:!0,visualSupportIcon:"user",disabled:!1,showDivider:!0}},m={args:{type:"icon-button",label:"Ação desabilitada",description:"Não disponível no momento",actionIcon:"x",visualSupport:!1,disabled:!0,showDivider:!0}},h={args:{type:"switch",label:"Modo escuro",description:"Ative o tema escuro",checked:!1,visualSupport:!1,disabled:!1,showDivider:!0},parameters:{docs:{description:{story:"Switch no resource list (sempre renderizado sem label interno, usando apenas o toggle)."}}}},v={args:{type:"switch",label:"Notificações push",description:"Receba notificações no dispositivo",checked:!0,visualSupport:!1,disabled:!1,showDivider:!0}},f={args:{type:"switch",label:"Pagamento por aproximação",description:"Ative para pagar sem inserir o cartão",checked:!0,visualSupport:!0,visualSupportIcon:"contactless",disabled:!1,showDivider:!0}},b={args:{type:"switch",label:"Recurso premium",description:"Requer assinatura ativa",checked:!1,visualSupport:!1,disabled:!0,showDivider:!0}},g={args:{type:"switch",label:"Sincronização automática",description:"Sincronize dados automaticamente",checked:!0,visualSupport:!1,disabled:!0,showDivider:!0}},y={args:{type:"informational",label:"Versão do aplicativo",description:"v2.4.1 - Build 1234",visualSupport:!1,disabled:!1,showDivider:!0},parameters:{docs:{description:{story:"Tipo informational não possui interação (sem hover, pressed ou clique). Usado apenas para exibir informações estáticas."}}}},x={args:{type:"informational",label:"Limite utilizado",description:"R$ 2.450,00 de R$ 5.000,00",visualSupport:!0,visualSupportIcon:"hand-card",disabled:!1,showDivider:!0}},w={args:{type:"navigation",href:"#uber-credito",visualSupport:!0,visualSupportImage:"https://t2.tudocdn.net/693919?w=1200&h=1200",disabled:!1,showDivider:!0,customContent:`
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);">
        <div style="display: flex; flex-direction: column; gap: var(--atlas-gap-2xs, 4px);">
          <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Uber
          </div>
          <div style="color: var(--atlas-color-text-static-neutral-medium, #5e6877); font-size: var(--atlas-font-size-150, 12px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Crédito
          </div>
        </div>
        <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-700, 700); line-height: 1.5;">
          R$ 28,60
        </div>
      </div>
    `}},S={render:()=>{const i=document.createElement("div");i.style.cssText="max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;";const e=[{type:"navigation",label:"Perfil",description:"Edite suas informações",icon:"user",href:"#profile"},{type:"navigation",label:"Segurança",description:"Senha e autenticação",icon:"lock",href:"#security"},{type:"switch",label:"Notificações",description:"Alertas e avisos",icon:"bell",checked:!0},{type:"navigation",label:"Privacidade",description:"Controle seus dados",icon:"shield",href:"#privacy"}];return e.forEach((a,s)=>{const t=document.createElement("atlas-resource-list");t.setAttribute("type",a.type),t.setAttribute("label",a.label),t.setAttribute("description",a.description),t.setAttribute("visual-support",""),t.setAttribute("visual-support-icon",a.icon),a.href&&t.setAttribute("href",a.href),a.checked&&t.setAttribute("checked",""),s===e.length-1&&t.setAttribute("show-divider","false"),i.appendChild(t)}),i}},A={render:()=>{const i=document.createElement("div");i.style.cssText="max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;";const e=[{name:"John Doe",email:"john.doe@example.com",image:"https://i.pravatar.cc/32?img=1",href:"#user-1"},{name:"Jane Smith",email:"jane.smith@example.com",image:"https://i.pravatar.cc/32?img=5",href:"#user-2"},{name:"Bob Johnson",email:"bob.johnson@example.com",image:"https://i.pravatar.cc/32?img=3",href:"#user-3"},{name:"Alice Williams",email:"alice.williams@example.com",image:"https://i.pravatar.cc/32?img=9",href:"#user-4"}];return e.forEach((a,s)=>{const t=document.createElement("atlas-resource-list");t.setAttribute("type","navigation"),t.setAttribute("label",a.name),t.setAttribute("description",a.email),t.setAttribute("visual-support",""),t.setAttribute("visual-support-image",a.image),t.setAttribute("href",a.href),s===e.length-1&&t.setAttribute("show-divider","false"),i.appendChild(t)}),i},parameters:{docs:{description:{story:"Lista de usuários usando imagens no visual support. Ideal para exibir perfis, contatos ou participantes."}}}};var E,k,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    label: 'Configurações do sistema',
    description: 'Gerencie preferências e configurações',
    href: '#settings',
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var I,C,$;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    label: 'Notificações',
    description: 'Configure suas notificações',
    href: '#notifications',
    visualSupport: true,
    visualSupportIcon: 'bell',
    disabled: false,
    showDivider: true
  }
}`,...($=(C=n.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var L,z,R;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    label: 'Meu Perfil',
    description: 'Edite suas informações pessoais',
    href: '#profile',
    visualSupport: true,
    visualSupportImage: 'https://i.pravatar.cc/32?img=1',
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation com imagem no visual support. A imagem tem prioridade sobre o ícone quando ambos são definidos.'
      }
    }
  }
}`,...(R=(z=l.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,T,N;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    label: 'Funcionalidade desabilitada',
    description: 'Esta opção não está disponível',
    href: '#disabled',
    visualSupport: true,
    visualSupportIcon: 'alert-triangle',
    disabled: true,
    showDivider: true
  }
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var q,F,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    label: 'Item único sem divider',
    description: 'Útil para listas com um único item',
    href: '#single',
    visualSupport: false,
    disabled: false,
    showDivider: false
  }
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,P,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'icon-button',
    label: 'Opções avançadas',
    description: 'Acesse configurações adicionais',
    actionIcon: 'three-dots',
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,H,U;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'icon-button',
    label: 'Minha conta',
    description: 'Editar informações do perfil',
    actionIcon: 'pencil',
    visualSupport: true,
    visualSupportIcon: 'user',
    disabled: false,
    showDivider: true
  }
}`,...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var _,J,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'icon-button',
    label: 'Ação desabilitada',
    description: 'Não disponível no momento',
    actionIcon: 'x',
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
}`,...(O=(J=m.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var G,K,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Modo escuro',
    description: 'Ative o tema escuro',
    checked: false,
    visualSupport: false,
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no resource list (sempre renderizado sem label interno, usando apenas o toggle).'
      }
    }
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Notificações push',
    description: 'Receba notificações no dispositivo',
    checked: true,
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ie;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Pagamento por aproximação',
    description: 'Ative para pagar sem inserir o cartão',
    checked: true,
    visualSupport: true,
    visualSupportIcon: 'contactless',
    disabled: false,
    showDivider: true
  }
}`,...(ie=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Recurso premium',
    description: 'Requer assinatura ativa',
    checked: false,
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
}`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ne,le;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    label: 'Sincronização automática',
    description: 'Sincronize dados automaticamente',
    checked: true,
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
}`,...(le=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,ue,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    type: 'informational',
    label: 'Versão do aplicativo',
    description: 'v2.4.1 - Build 1234',
    visualSupport: false,
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tipo informational não possui interação (sem hover, pressed ou clique). Usado apenas para exibir informações estáticas.'
      }
    }
  }
}`,...(de=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    type: 'informational',
    label: 'Limite utilizado',
    description: 'R$ 2.450,00 de R$ 5.000,00',
    visualSupport: true,
    visualSupportIcon: 'hand-card',
    disabled: false,
    showDivider: true
  }
}`,...(he=(me=x.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ve,fe,be;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    type: 'navigation',
    href: '#uber-credito',
    visualSupport: true,
    visualSupportImage: 'https://t2.tudocdn.net/693919?w=1200&h=1200',
    disabled: false,
    showDivider: true,
    customContent: \`
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);">
        <div style="display: flex; flex-direction: column; gap: var(--atlas-gap-2xs, 4px);">
          <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Uber
          </div>
          <div style="color: var(--atlas-color-text-static-neutral-medium, #5e6877); font-size: var(--atlas-font-size-150, 12px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Crédito
          </div>
        </div>
        <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-700, 700); line-height: 1.5;">
          R$ 28,60
        </div>
      </div>
    \`
  }
}`,...(be=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ge,ye,xe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;';
    const items = [{
      type: 'navigation',
      label: 'Perfil',
      description: 'Edite suas informações',
      icon: 'user',
      href: '#profile'
    }, {
      type: 'navigation',
      label: 'Segurança',
      description: 'Senha e autenticação',
      icon: 'lock',
      href: '#security'
    }, {
      type: 'switch',
      label: 'Notificações',
      description: 'Alertas e avisos',
      icon: 'bell',
      checked: true
    }, {
      type: 'navigation',
      label: 'Privacidade',
      description: 'Controle seus dados',
      icon: 'shield',
      href: '#privacy'
    }];
    items.forEach((item, index) => {
      const element = document.createElement('atlas-resource-list');
      element.setAttribute('type', item.type);
      element.setAttribute('label', item.label);
      element.setAttribute('description', item.description);
      element.setAttribute('visual-support', '');
      element.setAttribute('visual-support-icon', item.icon);
      if (item.href) element.setAttribute('href', item.href);
      if (item.checked) element.setAttribute('checked', '');
      if (index === items.length - 1) element.setAttribute('show-divider', 'false');
      container.appendChild(element);
    });
    return container;
  }
}`,...(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var we,Se,Ae;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;';
    const users = [{
      name: 'John Doe',
      email: 'john.doe@example.com',
      image: 'https://i.pravatar.cc/32?img=1',
      href: '#user-1'
    }, {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      image: 'https://i.pravatar.cc/32?img=5',
      href: '#user-2'
    }, {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      image: 'https://i.pravatar.cc/32?img=3',
      href: '#user-3'
    }, {
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      image: 'https://i.pravatar.cc/32?img=9',
      href: '#user-4'
    }];
    users.forEach((user, index) => {
      const element = document.createElement('atlas-resource-list');
      element.setAttribute('type', 'navigation');
      element.setAttribute('label', user.name);
      element.setAttribute('description', user.email);
      element.setAttribute('visual-support', '');
      element.setAttribute('visual-support-image', user.image);
      element.setAttribute('href', user.href);
      if (index === users.length - 1) element.setAttribute('show-divider', 'false');
      container.appendChild(element);
    });
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista de usuários usando imagens no visual support. Ideal para exibir perfis, contatos ou participantes.'
      }
    }
  }
}`,...(Ae=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};const Re=["NavigationDefault","NavigationWithVisualSupport","NavigationWithVisualSupportImage","NavigationDisabled","NavigationWithoutDivider","IconButtonDefault","IconButtonWithVisualSupport","IconButtonDisabled","SwitchUnchecked","SwitchChecked","SwitchWithVisualSupport","SwitchDisabled","SwitchDisabledChecked","InformationalDefault","InformationalWithVisualSupport","CustomContent","ConfigurationList","UserListWithImages"];export{S as ConfigurationList,w as CustomContent,d as IconButtonDefault,m as IconButtonDisabled,p as IconButtonWithVisualSupport,y as InformationalDefault,x as InformationalWithVisualSupport,o as NavigationDefault,c as NavigationDisabled,n as NavigationWithVisualSupport,l as NavigationWithVisualSupportImage,u as NavigationWithoutDivider,v as SwitchChecked,b as SwitchDisabled,g as SwitchDisabledChecked,h as SwitchUnchecked,f as SwitchWithVisualSupport,A as UserListWithImages,Re as __namedExportsOrder,ze as default};
