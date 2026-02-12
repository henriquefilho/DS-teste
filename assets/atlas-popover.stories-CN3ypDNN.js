import"./atlas-button-CE0kwCcy.js";import"./atlas-link-button-C5n062qN.js";class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["arrow","title","text","image-src","image-alt","action-type","action-label","action-href","closable","open","max-width"]}connectedCallback(){this.render(),this._setupEventListeners()}disconnectedCallback(){this._removeEventListeners()}attributeChangedCallback(e,n,r){this._isRendering||n===r||this.shadowRoot&&this.render()}get arrow(){return this.getAttribute("arrow")||"top-center"}get title(){return this.getAttribute("title")||""}get text(){return this.getAttribute("text")||""}get imageSrc(){return this.getAttribute("image-src")||""}get imageAlt(){return this.getAttribute("image-alt")||""}get actionType(){return this.getAttribute("action-type")||"none"}get actionLabel(){return this.getAttribute("action-label")||"Button"}get actionHref(){return this.getAttribute("action-href")||"#"}get closable(){return this.hasAttribute("closable")&&this.getAttribute("closable")!=="false"}get open(){return this.hasAttribute("open")&&this.getAttribute("open")!=="false"}get maxWidth(){return this.getAttribute("max-width")||"278px"}_setupEventListeners(){this._escHandler=e=>{e.key==="Escape"&&this.open&&this.close("programmatic")},document.addEventListener("keydown",this._escHandler)}_removeEventListeners(){this._escHandler&&document.removeEventListener("keydown",this._escHandler)}close(e="programmatic"){this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("atlas-popover-close",{bubbles:!0,composed:!0,detail:{reason:e}}))}show(){this.setAttribute("open","")}_handleCloseClick(e){e.preventDefault(),e.stopPropagation(),this.close("close-button")}_handleActionClick(e){this.dispatchEvent(new CustomEvent("atlas-popover-action",{bubbles:!0,composed:!0,detail:{actionType:this.actionType,label:this.actionLabel}}))}render(){this._isRendering=!0;const e=this.title?"popover-title":"",n="popover-text";if(this.shadowRoot.innerHTML=`
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

        /* Close Button */
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--atlas-padding-2xs);
          border: none;
          background: transparent;
          border-radius: var(--atlas-radius-composite-full);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .close-button:hover {
          background-color: var(--atlas-color-surface-interaction-neutral-ultra-soft-hover);
        }

        .close-button:active {
          background-color: var(--atlas-color-surface-interaction-neutral-ultra-soft-pressed);
        }

        .close-icon {
          color: var(--atlas-color-icon-static-neutral-medium);
          font-size: 16px;
          line-height: 1;
        }

        /* Image */
        .popover-image {
          width: 100%;
          display: block;
          object-fit: cover;
          max-height: 146px;
          border-radius: var(--atlas-radius-100);
          margin: calc(var(--atlas-padding-md) * -1) calc(var(--atlas-padding-md) * -1) 0;
          width: calc(100% + var(--atlas-padding-md) * 2);
        }

        /* Content */
        .popover-content {
          display: flex;
          flex-direction: column;
          gap: var(--atlas-spacing-100);
        }

        .popover-title {
          font-family: 'Open Sans', sans-serif;
          font-size: var(--atlas-typescale-heading-6-size);
          font-weight: var(--atlas-typescale-heading-6-weight);
          letter-spacing: var(--atlas-typescale-heading-6-letter-spacing);
          line-height: 1.2;
          color: var(--atlas-color-text-static-neutral-hard);
          margin: 0;
          padding-right: ${this.closable?"24px":"0"};
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
        ${e?`aria-labelledby="${e}"`:""}
        aria-describedby="${n}"
      >
        ${this.imageSrc?`
          <img 
            src="${this.imageSrc}" 
            alt="${this.imageAlt}"
            class="popover-image"
          />
        `:""}

        ${this.closable?`
          <button 
            class="close-button" 
            aria-label="Fechar"
            type="button"
          >
            <span class="close-icon icon-x" aria-hidden="true"></span>
          </button>
        `:""}

        <div class="popover-content">
          ${this.title?`
            <h3 id="${e}" class="popover-title">${this.title}</h3>
          `:""}
          
          <p id="${n}" class="popover-text">${this.text}</p>
        </div>

        ${this._renderFooter()}
      </div>
    `,this.closable){const a=this.shadowRoot.querySelector(".close-button");a&&a.addEventListener("click",this._handleCloseClick.bind(this))}const r=this.shadowRoot.querySelector(".action-button, .action-link");r&&r.addEventListener("click",this._handleActionClick.bind(this)),this._isRendering=!1}_getArrowStyles(){const e=this.arrow;if(e==="none")return"";const n="var(--atlas-color-border-default)",r="var(--atlas-color-surface-static-container-neutral-ultra-soft)",a="6px",t="5px";return{"top-center":`
        :host([arrow="top-center"])::before,
        :host([arrow="top-center"])::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="top-center"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${t});
          border-bottom: ${t} solid ${n};
        }
        :host([arrow="top-center"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-bottom: ${t} solid ${r};
        }
      `,"top-left":`
        :host([arrow="top-left"])::before,
        :host([arrow="top-left"])::after {
          content: '';
          position: absolute;
          left: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="top-left"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${t});
          border-bottom: ${t} solid ${n};
        }
        :host([arrow="top-left"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-bottom: ${t} solid ${r};
        }
      `,"top-right":`
        :host([arrow="top-right"])::before,
        :host([arrow="top-right"])::after {
          content: '';
          position: absolute;
          right: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="top-right"])::before {
          top: calc(var(--atlas-padding-md) * -1 - ${t});
          border-bottom: ${t} solid ${n};
        }
        :host([arrow="top-right"])::after {
          top: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-bottom: ${t} solid ${r};
        }
      `,"bottom-center":`
        :host([arrow="bottom-center"])::before,
        :host([arrow="bottom-center"])::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="bottom-center"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t});
          border-top: ${t} solid ${n};
        }
        :host([arrow="bottom-center"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-top: ${t} solid ${r};
        }
      `,"bottom-left":`
        :host([arrow="bottom-left"])::before,
        :host([arrow="bottom-left"])::after {
          content: '';
          position: absolute;
          left: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="bottom-left"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t});
          border-top: ${t} solid ${n};
        }
        :host([arrow="bottom-left"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-top: ${t} solid ${r};
        }
      `,"bottom-right":`
        :host([arrow="bottom-right"])::before,
        :host([arrow="bottom-right"])::after {
          content: '';
          position: absolute;
          right: var(--atlas-padding-md);
          width: 0;
          height: 0;
          border-left: ${a} solid transparent;
          border-right: ${a} solid transparent;
        }
        :host([arrow="bottom-right"])::before {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t});
          border-top: ${t} solid ${n};
        }
        :host([arrow="bottom-right"])::after {
          bottom: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-top: ${t} solid ${r};
        }
      `,"side-left":`
        :host([arrow="side-left"])::before,
        :host([arrow="side-left"])::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: ${a} solid transparent;
          border-bottom: ${a} solid transparent;
        }
        :host([arrow="side-left"])::before {
          left: calc(var(--atlas-padding-md) * -1 - ${t});
          border-right: ${t} solid ${n};
        }
        :host([arrow="side-left"])::after {
          left: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-right: ${t} solid ${r};
        }
      `,"side-right":`
        :host([arrow="side-right"])::before,
        :host([arrow="side-right"])::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: ${a} solid transparent;
          border-bottom: ${a} solid transparent;
        }
        :host([arrow="side-right"])::before {
          right: calc(var(--atlas-padding-md) * -1 - ${t});
          border-left: ${t} solid ${n};
        }
        :host([arrow="side-right"])::after {
          right: calc(var(--atlas-padding-md) * -1 - ${t} + 1px);
          border-left: ${t} solid ${r};
        }
      `}[e]||""}_renderFooter(){return this.actionType==="none"?'<div class="popover-footer"></div>':this.actionType==="button"?`
        <div class="popover-footer">
          <atlas-button
            class="action-button"
            variant="filled"
            color="primary"
            size="small"
            label="${this.actionLabel}"
          ></atlas-button>
        </div>
      `:this.actionType==="link"?`
        <div class="popover-footer">
          <atlas-link-button
            class="action-link"
            size="small"
            label="${this.actionLabel}"
            href="${this.actionHref}"
          ></atlas-link-button>
        </div>
      `:'<div class="popover-footer"></div>'}}customElements.define("atlas-popover",Lt);const Wt={title:"Components/Atlas Popover",tags:["autodocs"],render:o=>{const e=document.createElement("atlas-popover");e.setAttribute("arrow",o.arrow),o.title?e.setAttribute("title",o.title):e.removeAttribute("title"),e.setAttribute("text",o.text),o.imageSrc?(e.setAttribute("image-src",o.imageSrc),e.setAttribute("image-alt",o.imageAlt||"")):(e.removeAttribute("image-src"),e.removeAttribute("image-alt")),e.setAttribute("action-type",o.actionType),o.actionType!=="none"&&(e.setAttribute("action-label",o.actionLabel),o.actionType==="link"&&e.setAttribute("action-href",o.actionHref)),o.closable?e.setAttribute("closable",""):e.removeAttribute("closable"),o.open?e.setAttribute("open",""):e.removeAttribute("open"),o.maxWidth&&e.setAttribute("max-width",o.maxWidth),e.addEventListener("atlas-popover-close",r=>{var a;console.log("atlas-popover-close",r.detail),(a=o.onClose)==null||a.call(o,r.detail)}),e.addEventListener("atlas-popover-action",r=>{var a;console.log("atlas-popover-action",r.detail),(a=o.onAction)==null||a.call(o,r.detail)});const n=document.createElement("div");return n.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
      padding: 40px;
      background: #f5f5f5;
    `,n.appendChild(e),n},argTypes:{arrow:{control:"select",options:["top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","side-left","side-right","none"],description:"Posição da seta indicadora que aponta para o elemento acionador",table:{type:{summary:"string"},defaultValue:{summary:"top-center"},category:"Appearance"}},title:{control:"text",description:"Título do popover (opcional)",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},text:{control:"text",description:"Texto do corpo do popover (obrigatório)",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},imageSrc:{control:"text",description:"URL da imagem opcional",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},imageAlt:{control:"text",description:"Texto alternativo da imagem",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},actionType:{control:"select",options:["none","button","link"],description:"Tipo de ação no footer do popover",table:{type:{summary:"string"},defaultValue:{summary:"none"},category:"Action"}},actionLabel:{control:"text",description:"Label do botão ou link de ação",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Action"}},actionHref:{control:"text",description:'URL do link (quando action-type="link")',table:{type:{summary:"string"},defaultValue:{summary:"#"},category:"Action"}},closable:{control:"boolean",description:"Exibe botão X para fechar o popover",table:{type:{summary:"boolean"},defaultValue:{summary:!0},category:"State"}},open:{control:"boolean",description:"Define se o popover está visível",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"State"}},maxWidth:{control:"text",description:"Largura máxima do popover",table:{type:{summary:"string"},defaultValue:{summary:"278px"},category:"Layout"}},onClose:{action:"atlas-popover-close",description:"Disparado quando o popover é fechado",table:{category:"Events",type:{summary:"CustomEvent<{ reason: string }>"}}},onAction:{action:"atlas-popover-action",description:"Disparado quando a ação é clicada",table:{category:"Events",type:{summary:"CustomEvent<{ actionType: string, label: string }>"}}}},args:{arrow:"top-center",title:"Title",text:"Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.",imageSrc:"",imageAlt:"",actionType:"none",actionLabel:"Button",actionHref:"#",closable:!0,open:!0,maxWidth:"278px"}},p={},c={args:{title:"",text:"Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod."}},d={args:{title:"Título",text:"Clique no botão para realizar uma ação.",actionType:"button",actionLabel:"Confirmar"}},m={args:{title:"Saiba Mais",text:"Acesse a documentação para mais informações.",actionType:"link",actionLabel:"Ver Documentação",actionHref:"https://example.com"}},u={args:{title:"Novo Recurso",text:"Confira a nova funcionalidade disponível no sistema.",imageSrc:"https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=200&fit=crop",imageAlt:"Exemplo de novo recurso",actionType:"button",actionLabel:"Explorar"}},b={args:{title:"Título Completo",text:"Este é um popover completo com imagem, título, texto e ação. Use-o quando precisar de máximo contexto.",imageSrc:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",imageAlt:"Imagem de exemplo",actionType:"button",actionLabel:"Entendi"}},h={args:{title:"Importante",text:"Esta mensagem não pode ser fechada manualmente.",closable:!1}},g={args:{arrow:"none",title:"Sem Seta",text:"Este popover não possui seta indicadora."}},v={render:()=>{const o=document.createElement("div");return o.style.cssText=`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `,[{arrow:"top-center",label:"Top Center"},{arrow:"top-left",label:"Top Left"},{arrow:"top-right",label:"Top Right"},{arrow:"bottom-center",label:"Bottom Center"},{arrow:"bottom-left",label:"Bottom Left"},{arrow:"bottom-right",label:"Bottom Right"},{arrow:"side-left",label:"Side Left"},{arrow:"side-right",label:"Side Right"},{arrow:"none",label:"No Arrow"}].forEach(({arrow:n,label:r})=>{const a=document.createElement("div");a.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;const t=document.createElement("div");t.textContent=r,t.style.cssText=`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;const s=document.createElement("div");s.style.cssText=`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;const i=document.createElement("atlas-popover");i.setAttribute("arrow",n),i.setAttribute("title",r),i.setAttribute("text",`Popover com seta ${n}`),i.setAttribute("open",""),i.setAttribute("closable",""),s.appendChild(i),a.appendChild(t),a.appendChild(s),o.appendChild(a)}),o}},x={render:()=>{const o=document.createElement("div");return o.style.cssText=`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `,[{type:"none",label:"None",desc:"Sem ação"},{type:"button",label:"Button",desc:"Com botão"},{type:"link",label:"Link",desc:"Com link"}].forEach(({type:n,label:r,desc:a})=>{const t=document.createElement("div");t.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;const s=document.createElement("div");s.textContent=r,s.style.cssText=`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;const i=document.createElement("div");i.style.cssText=`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;const l=document.createElement("atlas-popover");l.setAttribute("arrow","top-center"),l.setAttribute("title",r),l.setAttribute("text",a),l.setAttribute("action-type",n),l.setAttribute("action-label",n==="link"?"Ver mais":"Ação"),l.setAttribute("open",""),l.setAttribute("closable",""),i.appendChild(l),t.appendChild(s),t.appendChild(i),o.appendChild(t)}),o}},f={args:{title:"Popover Responsivo",text:"Redimensione a janela para ver a adaptação mobile (< 768px). A seta desaparece em telas menores.",actionType:"button",actionLabel:"OK"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1280px",height:"800px"}}}}}},y={args:{title:"Teste de Eventos",text:"Clique no botão X ou na ação para disparar eventos. Veja o console do navegador.",actionType:"button",actionLabel:"Disparar Ação"},render:o=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 40px;
      background: #f5f5f5;
    `;const n=document.createElement("div");n.style.cssText=`
      display: flex;
      justify-content: center;
      min-height: 200px;
    `;const r=document.createElement("atlas-popover");r.setAttribute("arrow",o.arrow),r.setAttribute("title",o.title),r.setAttribute("text",o.text),r.setAttribute("action-type",o.actionType),r.setAttribute("action-label",o.actionLabel),r.setAttribute("open",""),r.setAttribute("closable","");const a=document.createElement("div");a.style.cssText=`
      background: #1D2125;
      color: #E5E8EC;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      max-height: 200px;
      overflow-y: auto;
    `,a.innerHTML='<div style="font-weight: 600; margin-bottom: 8px;">📋 Console de Eventos:</div>';const t=(s,i)=>{const l=new Date().toLocaleTimeString(),E=document.createElement("div");E.textContent=`[${l}] ${s}: ${JSON.stringify(i)}`,E.style.marginTop="4px",a.appendChild(E)};return r.addEventListener("atlas-popover-close",s=>{t("atlas-popover-close",s.detail)}),r.addEventListener("atlas-popover-action",s=>{t("atlas-popover-action",s.detail)}),n.appendChild(r),e.appendChild(n),e.appendChild(a),e}};var w,A,$,C,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...($=(A=p.parameters)==null?void 0:A.docs)==null?void 0:$.source},description:{story:"Popover padrão com título e texto. Este é o uso mais comum do componente.",...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var k,L,S,D,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '',
    text: 'Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.'
  }
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"Popover simples sem título, apenas com texto informativo.",...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.description}}};var R,B,_,P,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Título',
    text: 'Clique no botão para realizar uma ação.',
    actionType: 'button',
    actionLabel: 'Confirmar'
  }
}`,...(_=(B=d.parameters)==null?void 0:B.docs)==null?void 0:_.source},description:{story:"Popover com botão de ação no footer.",...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.description}}};var N,V,H,j,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Saiba Mais',
    text: 'Acesse a documentação para mais informações.',
    actionType: 'link',
    actionLabel: 'Ver Documentação',
    actionHref: 'https://example.com'
  }
}`,...(H=(V=m.parameters)==null?void 0:V.docs)==null?void 0:H.source},description:{story:"Popover com link de ação no footer.",...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var O,I,M,F,X;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Novo Recurso',
    text: 'Confira a nova funcionalidade disponível no sistema.',
    imageSrc: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=200&fit=crop',
    imageAlt: 'Exemplo de novo recurso',
    actionType: 'button',
    actionLabel: 'Explorar'
  }
}`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"Popover com imagem ilustrativa no topo.",...(X=(F=u.parameters)==null?void 0:F.docs)==null?void 0:X.description}}};var U,J,K,Q,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Título Completo',
    text: 'Este é um popover completo com imagem, título, texto e ação. Use-o quando precisar de máximo contexto.',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    imageAlt: 'Imagem de exemplo',
    actionType: 'button',
    actionLabel: 'Entendi'
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Popover completo com todos os elementos: imagem, título, texto e ação.",...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var G,Z,tt,et,ot;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Importante',
    text: 'Esta mensagem não pode ser fechada manualmente.',
    closable: false
  }
}`,...(tt=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:tt.source},description:{story:"Popover sem botão de fechar (não-fechável pelo usuário).",...(ot=(et=h.parameters)==null?void 0:et.docs)==null?void 0:ot.description}}};var at,rt,nt,st,it;g.parameters={...g.parameters,docs:{...(at=g.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    arrow: 'none',
    title: 'Sem Seta',
    text: 'Este popover não possui seta indicadora.'
  }
}`,...(nt=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:nt.source},description:{story:"Popover sem seta indicadora.",...(it=(st=g.parameters)==null?void 0:st.docs)==null?void 0:it.description}}};var lt,pt,ct,dt,mt;v.parameters={...v.parameters,docs:{...(lt=v.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const positions = [{
      arrow: 'top-center',
      label: 'Top Center'
    }, {
      arrow: 'top-left',
      label: 'Top Left'
    }, {
      arrow: 'top-right',
      label: 'Top Right'
    }, {
      arrow: 'bottom-center',
      label: 'Bottom Center'
    }, {
      arrow: 'bottom-left',
      label: 'Bottom Left'
    }, {
      arrow: 'bottom-right',
      label: 'Bottom Right'
    }, {
      arrow: 'side-left',
      label: 'Side Left'
    }, {
      arrow: 'side-right',
      label: 'Side Right'
    }, {
      arrow: 'none',
      label: 'No Arrow'
    }];
    positions.forEach(({
      arrow,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = \`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      \`;
      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = \`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      \`;
      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = \`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      \`;
      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', arrow);
      popover.setAttribute('title', label);
      popover.setAttribute('text', \`Popover com seta \${arrow}\`);
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');
      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(ct=(pt=v.parameters)==null?void 0:pt.docs)==null?void 0:ct.source},description:{story:`## Posições da Seta

O popover suporta 9 posições diferentes para a seta:
- **Top:** center, left, right
- **Bottom:** center, left, right  
- **Side:** left, right
- **None:** sem seta`,...(mt=(dt=v.parameters)==null?void 0:dt.docs)==null?void 0:mt.description}}};var ut,bt,ht,gt,vt;x.parameters={...x.parameters,docs:{...(ut=x.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const types = [{
      type: 'none',
      label: 'None',
      desc: 'Sem ação'
    }, {
      type: 'button',
      label: 'Button',
      desc: 'Com botão'
    }, {
      type: 'link',
      label: 'Link',
      desc: 'Com link'
    }];
    types.forEach(({
      type,
      label,
      desc
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = \`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      \`;
      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = \`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      \`;
      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = \`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      \`;
      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', 'top-center');
      popover.setAttribute('title', label);
      popover.setAttribute('text', desc);
      popover.setAttribute('action-type', type);
      popover.setAttribute('action-label', type === 'link' ? 'Ver mais' : 'Ação');
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');
      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(ht=(bt=x.parameters)==null?void 0:bt.docs)==null?void 0:ht.source},description:{story:`## Tipos de Ação

O componente suporta três tipos de ação no footer:
- **None:** Sem ação
- **Button:** Botão de ação
- **Link:** Link de navegação`,...(vt=(gt=x.parameters)==null?void 0:gt.docs)==null?void 0:vt.description}}};var xt,ft,yt,Et,wt;f.parameters={...f.parameters,docs:{...(xt=f.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    title: 'Popover Responsivo',
    text: 'Redimensione a janela para ver a adaptação mobile (< 768px). A seta desaparece em telas menores.',
    actionType: 'button',
    actionLabel: 'OK'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px'
          }
        }
      }
    }
  }
}`,...(yt=(ft=f.parameters)==null?void 0:ft.docs)==null?void 0:yt.source},description:{story:`## Responsividade

O popover adapta-se automaticamente para diferentes tamanhos de tela:
- **Desktop:** min-width 278px, seta visível
- **Mobile:** min-width 328px, seta oculta`,...(wt=(Et=f.parameters)==null?void 0:Et.docs)==null?void 0:wt.description}}};var At,$t,Ct,Tt,kt;y.parameters={...y.parameters,docs:{...(At=y.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    title: 'Teste de Eventos',
    text: 'Clique no botão X ou na ação para disparar eventos. Veja o console do navegador.',
    actionType: 'button',
    actionLabel: 'Disparar Ação'
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const popoverWrapper = document.createElement('div');
    popoverWrapper.style.cssText = \`
      display: flex;
      justify-content: center;
      min-height: 200px;
    \`;
    const popover = document.createElement('atlas-popover');
    popover.setAttribute('arrow', args.arrow);
    popover.setAttribute('title', args.title);
    popover.setAttribute('text', args.text);
    popover.setAttribute('action-type', args.actionType);
    popover.setAttribute('action-label', args.actionLabel);
    popover.setAttribute('open', '');
    popover.setAttribute('closable', '');
    const console = document.createElement('div');
    console.style.cssText = \`
      background: #1D2125;
      color: #E5E8EC;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      max-height: 200px;
      overflow-y: auto;
    \`;
    console.innerHTML = '<div style="font-weight: 600; margin-bottom: 8px;">📋 Console de Eventos:</div>';
    const logEvent = (name, detail) => {
      const timestamp = new Date().toLocaleTimeString();
      const line = document.createElement('div');
      line.textContent = \`[\${timestamp}] \${name}: \${JSON.stringify(detail)}\`;
      line.style.marginTop = '4px';
      console.appendChild(line);
    };
    popover.addEventListener('atlas-popover-close', e => {
      logEvent('atlas-popover-close', e.detail);
    });
    popover.addEventListener('atlas-popover-action', e => {
      logEvent('atlas-popover-action', e.detail);
    });
    popoverWrapper.appendChild(popover);
    wrapper.appendChild(popoverWrapper);
    wrapper.appendChild(console);
    return wrapper;
  }
}`,...(Ct=($t=y.parameters)==null?void 0:$t.docs)==null?void 0:Ct.source},description:{story:`## Eventos Customizados

O componente dispara eventos customizados que podem ser capturados:
- \`atlas-popover-close\`: Quando o popover é fechado
- \`atlas-popover-action\`: Quando a ação é clicada

Abra o console do navegador para ver os eventos sendo disparados.`,...(kt=(Tt=y.parameters)==null?void 0:Tt.docs)==null?void 0:kt.description}}};const Rt=["Default","TextOnly","WithButton","WithLink","WithImage","Complete","NotClosable","NoArrow","ArrowPositions","ActionTypes","Responsive","CustomEvents"];export{x as ActionTypes,v as ArrowPositions,b as Complete,y as CustomEvents,p as Default,g as NoArrow,h as NotClosable,f as Responsive,c as TextOnly,d as WithButton,u as WithImage,m as WithLink,Rt as __namedExportsOrder,Wt as default};
