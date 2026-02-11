class Oe extends HTMLElement{static get observedAttributes(){return["size","disabled","selected-index","labels","helper-text"]}constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}connectedCallback(){this.render()}attributeChangedCallback(e,t,a){this._isRendering||t===a||this.shadowRoot.innerHTML&&this.render()}get size(){return this.getAttribute("size")||"md"}set size(e){this.setAttribute("size",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get selectedIndex(){const e=parseInt(this.getAttribute("selected-index"));return isNaN(e)?0:e}set selectedIndex(e){this.setAttribute("selected-index",e)}get labels(){const t=(this.getAttribute("labels")||"Label 1,Label 2").split(",").map(a=>a.trim());return t.length>3?(console.warn("AtlasSegmentedControl: O componente suporta no máximo 3 botões. Labels excedentes serão ignorados."),t.slice(0,3)):t}set labels(e){Array.isArray(e)?this.setAttribute("labels",e.join(",")):this.setAttribute("labels",e)}get helperText(){return this.getAttribute("helper-text")||""}set helperText(e){this.setAttribute("helper-text",e)}handleButtonClick(e){if(this.disabled)return;this.selectedIndex!==e&&(this.setAttribute("selected-index",e.toString()),this.dispatchEvent(new CustomEvent("change",{detail:{selectedIndex:e,label:this.labels[e]},bubbles:!0,composed:!0})))}attachEventListeners(){this.shadowRoot.querySelectorAll(".segmented-control__button").forEach((t,a)=>{t.addEventListener("click",()=>this.handleButtonClick(a))})}render(){if(this._isRendering)return;this._isRendering=!0,this.size;const e=this.disabled,t=this.selectedIndex,a=this.labels,n=this.helperText,o=e&&n;a.length<2&&console.warn("AtlasSegmentedControl: O componente requer no mínimo 2 botões"),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          box-sizing: border-box;
        }

        .segmented-control {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }

        .segmented-control__container {
          background: var(--atlas-color-surface-static-container-neutral-ultra-soft);
          background: var(--atlas-color-pale-sky-10, #FCFCFD);
          border: 1px solid var(--atlas-color-border-primary-hard);
          border: 1px solid var(--atlas-color-persian-blue-500, #0030B9);
          border-radius: var(--atlas-radius-composite-pill, 999px);
          padding: 3px;
          display: flex;
          gap: 4px;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        /* Container quando disabled */
        :host([disabled]) .segmented-control__container {
          border-color: var(--atlas-color-border-disabled);
          border-color: var(--atlas-color-pale-sky-200, #D1D6DC);
        }

        .segmented-control__button {
          flex: 1 0 0;
          background: var(--atlas-color-surface-control-inactive-default);
          background: var(--atlas-color-pale-sky-10, #FCFCFD);
          border: none;
          border-radius: var(--atlas-radius-composite-pill, 999px);
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
          color: var(--atlas-color-text-static-primary-medium);
          color: var(--atlas-color-persian-blue-500, #0030B9);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Tamanhos - Small */
        :host([size="sm"]) .segmented-control__button {
          height: 32px;
          padding: 8px 12px;
          font-size: 14px;
          min-width: 40px;
        }

        /* Tamanhos - Medium */
        :host([size="md"]) .segmented-control__button,
        :host(:not([size])) .segmented-control__button {
          height: 40px;
          padding: 8px 24px;
          font-size: 16px;
        }

        /* Tamanhos - Large */
        :host([size="lg"]) .segmented-control__button {
          height: 48px;
          padding: 12px 32px;
          font-size: 16px;
        }

        /* Botão Ativo (Selecionado) */
        .segmented-control__button--active {
          background: var(--atlas-color-surface-control-active-default);
          background: var(--atlas-color-persian-blue-500, #0030B9);
          color: var(--atlas-color-text-static-neutral-ultra-soft);
          color: var(--atlas-color-pale-sky-10, #FCFCFD);
          z-index: 1;
        }

        /* Hover - apenas botões inativos e não disabled */
        :host(:not([disabled])) .segmented-control__button:not(.segmented-control__button--active):hover {
          background: var(--atlas-color-surface-interaction-primary-ultra-soft-hover);
          background: var(--atlas-color-persian-blue-100, #CCD6F1);
        }

        /* Active/Pressed - apenas botões inativos e não disabled */
        :host(:not([disabled])) .segmented-control__button:not(.segmented-control__button--active):active {
          background: var(--atlas-color-surface-interaction-primary-ultra-soft-pressed);
          background: var(--atlas-color-persian-blue-200, #99ACE3);
        }

        /* Focus - acessibilidade */
        :host(:not([disabled])) .segmented-control__button:focus-visible {
          outline: 2px solid var(--atlas-color-border-primary-hard);
          outline: 2px solid var(--atlas-color-persian-blue-500, #0030B9);
          outline-offset: 2px;
        }

        /* Estado Disabled */
        :host([disabled]) .segmented-control__button {
          cursor: not-allowed;
          background: transparent;
          color: var(--atlas-color-text-static-disabled-level-1);
          color: var(--atlas-color-pale-sky-200, #D1D6DC);
        }

        :host([disabled]) .segmented-control__button--active {
          background: var(--atlas-color-surface-control-active-disabled);
          background: var(--atlas-color-pale-sky-200, #D1D6DC);
          color: var(--atlas-color-text-static-disabled-level-2);
          color: var(--atlas-color-pale-sky-400, #9AA4B3);
        }

        /* Helper Text (apenas quando disabled) */
        .segmented-control__helper {
          display: ${o?"block":"none"};
        }
      </style>
      <div class="segmented-control">
        <div class="segmented-control__container">
          ${a.map((r,C)=>`
            <button 
              class="segmented-control__button ${C===t?"segmented-control__button--active":""}"
              ${e?"disabled":""}
              aria-pressed="${C===t}"
              type="button"
            >
              ${r}
            </button>
          `).join("")}
        </div>
        ${o?`
          <div class="segmented-control__helper">
            <atlas-helper-text state="default" text="${n}"></atlas-helper-text>
          </div>
        `:""}
      </div>
    `,this._isRendering=!1,this.attachEventListeners()}}customElements.define("atlas-segmented-control",Oe);class we extends HTMLElement{static get observedAttributes(){return["state","text"]}constructor(){super(),this.attachShadow({mode:"open"}),this._initialized=!1}connectedCallback(){this._initialized||(this._setupTemplate(),this._initialized=!0),this._updateState(),this._updateText()}attributeChangedCallback(e){this._initialized&&(e==="state"?this._updateState():e==="text"&&this._updateText())}get state(){return this.getAttribute("state")||"default"}set state(e){this.setAttribute("state",e)}get text(){return this.getAttribute("text")||""}set text(e){this.setAttribute("text",e)}_setupTemplate(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          box-sizing: border-box;
        }

        .helper-text {
          font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0;
          white-space: normal;
          text-align: left;
          flex: 1 0 0;
          min-width: 0;
          margin: 0;
        }

        /* Estados de cor - com fallbacks */
        .helper-text--default {
          color: var(--atlas-color-text-static-neutral-medium);
          color: var(--atlas-color-pale-sky-600, #5e6877);
        }

        .helper-text--error {
          color: var(--atlas-color-text-static-error-medium);
          color: var(--atlas-color-red-ribbon-600, #b02a37);
        }

        .helper-text--warning {
          color: var(--atlas-color-text-static-warning-medium);
          color: var(--atlas-color-clementine-600, #b45309);
        }

        .helper-text__attr {
          display: none;
        }

        .helper-text__attr--visible {
          display: inline;
        }

        .helper-text__slot {
          display: inline;
        }

        .helper-text__slot--hidden {
          display: none;
        }
      </style>
      <p class="helper-text helper-text--default">
        <span class="helper-text__attr"></span>
        <span class="helper-text__slot"><slot></slot></span>
      </p>
    `}_updateState(){const e=this.shadowRoot.querySelector(".helper-text");if(!e)return;const t=this.state;e.classList.remove("helper-text--default","helper-text--error","helper-text--warning");const a=`helper-text--${t}`;e.classList.add(a)}_updateText(){const e=this.shadowRoot.querySelector(".helper-text__attr"),t=this.shadowRoot.querySelector(".helper-text__slot");if(!e||!t)return;const a=this.text;a.length>0?(e.textContent=a,e.classList.add("helper-text__attr--visible"),t.classList.add("helper-text__slot--hidden")):(e.textContent="",e.classList.remove("helper-text__attr--visible"),t.classList.remove("helper-text__slot--hidden"))}}customElements.define("atlas-helper-text",we);const De={title:"Components/Atlas Segmented Control",tags:["autodocs"],render:s=>{const e=document.createElement("atlas-segmented-control");return s.labels&&e.setAttribute("labels",s.labels),e.setAttribute("size",s.size),s.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.setAttribute("selected-index",s.selectedIndex.toString()),s.helperText?e.setAttribute("helper-text",s.helperText):e.removeAttribute("helper-text"),s.ariaLabel?e.setAttribute("aria-label",s.ariaLabel):e.removeAttribute("aria-label"),e.addEventListener("change",t=>{s.onChange(t.detail)}),e},argTypes:{labels:{control:"text",description:"Labels dos botões separados por vírgula. Mínimo: 2 botões. Máximo: 3 botões. Labels excedentes são ignorados.",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Label 1,Label 2"}}},selectedIndex:{control:{type:"number",min:0,max:2,step:1},description:"Índice do botão selecionado (0-indexed)",table:{category:"Content",type:{summary:"number"},defaultValue:{summary:"0"}}},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do componente",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},ariaLabel:{control:"text",description:"Label de acessibilidade para leitores de tela",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Desabilita o componente",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},helperText:{control:"text",description:"Texto de ajuda exibido quando disabled=true",table:{category:"Status",type:{summary:"string"},defaultValue:{summary:""}},if:{arg:"disabled",truthy:!0}},onChange:{action:"change",description:"Evento disparado quando a seleção muda",table:{category:"Actions",type:{summary:"(detail: { selectedIndex: number, label: string }) => void"}}}},args:{labels:"Label 1,Label 2",size:"md",disabled:!1,selectedIndex:0,helperText:"",ariaLabel:""}},i={args:{labels:"Opção 1,Opção 2",size:"md",selectedIndex:0}},l={args:{labels:"Small 1,Small 2",size:"sm",selectedIndex:0}},d={args:{labels:"Medium 1,Medium 2",size:"md",selectedIndex:0}},c={args:{labels:"Large 1,Large 2",size:"lg",selectedIndex:0}},p={args:{labels:"Lista,Grade",size:"md",selectedIndex:0},parameters:{docs:{description:{story:"Configuração com 2 botões - ideal para alternar entre visualizações binárias como Lista/Grade."}}}},m={args:{labels:"Dia,Semana,Mês",size:"md",selectedIndex:1},parameters:{docs:{description:{story:"Configuração com 3 botões - útil para seletores de período ou categorias relacionadas."}}}},u={args:{labels:"Primeiro,Segundo,Terceiro",size:"md",selectedIndex:1}},x={args:{labels:"Primeiro,Segundo,Terceiro",size:"md",selectedIndex:2}},b={args:{labels:"Opção 1,Opção 2",size:"md",disabled:!0,selectedIndex:0}},g={args:{labels:"Bloqueado,Disponível",size:"md",disabled:!0,selectedIndex:0,helperText:"Esta funcionalidade está temporariamente desabilitada"},parameters:{docs:{description:{story:"Use helper-text para explicar por que o controle está desabilitado."}}}},h={args:{labels:"Lista,Grade",size:"md",selectedIndex:0},parameters:{docs:{description:{story:"Caso de uso comum: alternar entre visualização de lista e grade de conteúdo."}}}},f={args:{labels:"Hoje,Esta Semana,Este Mês",size:"md",selectedIndex:0},parameters:{docs:{description:{story:"Caso de uso comum: seletor de período temporal para dashboards e relatórios."}}}},E={args:{labels:"Linha,Barra,Pizza",size:"md",selectedIndex:0},parameters:{docs:{description:{story:"Caso de uso comum: alternar entre diferentes tipos de visualização de gráficos."}}}},y={render:()=>{const s=document.createElement("div");return s.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 400px;",[{size:"sm",height:"32px"},{size:"md",height:"40px"},{size:"lg",height:"48px"}].forEach(({size:t,height:a})=>{const n=document.createElement("div");n.style.cssText="display: flex; flex-direction: column; gap: 8px;";const o=document.createElement("p");o.textContent=`Size: ${t} (${a})`,o.style.cssText='margin: 0; font-family: "Open Sans", sans-serif; font-size: 14px; color: #4B5563;';const r=document.createElement("atlas-segmented-control");r.setAttribute("labels","Opção 1,Opção 2"),r.setAttribute("size",t),r.setAttribute("selected-index","0"),n.appendChild(o),n.appendChild(r),s.appendChild(n)}),s},parameters:{controls:{disable:!0}}},v={render:()=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const e=document.createElement("h3");e.textContent="Selecione uma visualização:",e.style.cssText='margin: 0; font-family: "Open Sans", sans-serif; font-size: 18px; font-weight: 600;';const t=document.createElement("atlas-segmented-control");t.setAttribute("labels","Lista,Cards,Tabela"),t.setAttribute("size","md"),t.setAttribute("selected-index","0");const a=document.createElement("div");return a.style.cssText='padding: 24px; background: #F3F4F6; border-radius: 8px; font-family: "Open Sans", sans-serif;',a.innerHTML="<strong>Visualização Selecionada:</strong> Lista",t.addEventListener("change",n=>{a.innerHTML=`<strong>Visualização Selecionada:</strong> ${n.detail.label} (índice: ${n.detail.selectedIndex})`}),s.appendChild(e),s.appendChild(t),s.appendChild(a),s},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração interativa do evento `change` capturando selectedIndex e label."}}}},S={args:{labels:"Lista,Grade",ariaLabel:"Selecione o modo de visualização dos resultados"},parameters:{docs:{description:{story:"Use aria-label para fornecer contexto adicional sobre o propósito do controle segmentado para leitores de tela."}}}},z={render:()=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 600px;";const e=document.createElement("div");e.style.cssText="padding: 16px; background: #DBEAFE; border-left: 4px solid #3B82F6; border-radius: 4px;",e.innerHTML=`
      <p style="margin: 0 0 8px 0; font-weight: 600; font-family: 'Open Sans', sans-serif;">⌨️ Navegação por Teclado:</p>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px;">
        <li><strong>Tab:</strong> Navega para o próximo botão do controle</li>
        <li><strong>Shift + Tab:</strong> Navega para o botão anterior</li>
        <li><strong>Enter/Space:</strong> Seleciona o botão focado</li>
        <li><strong>Setas ←/→:</strong> Navegação entre botões (comportamento nativo do navegador)</li>
      </ul>
    `;const t=document.createElement("div");return t.style.cssText="display: flex; flex-direction: column; gap: 16px;",["sm","md","lg"].forEach(a=>{const n=document.createElement("atlas-segmented-control");n.setAttribute("labels","Primeiro,Segundo,Terceiro"),n.setAttribute("size",a),n.setAttribute("selected-index","0"),n.setAttribute("aria-label",`Controle segmentado tamanho ${a}`),t.appendChild(n)}),s.appendChild(e),s.appendChild(t),s},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de estados de foco e navegação por teclado. Use Tab para navegar entre botões e Enter/Space para selecionar."}}}},A={render:()=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const e=document.createElement("div");e.style.cssText="padding: 16px; background: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 4px;",e.innerHTML=`
      <p style="margin: 0 0 8px 0; font-weight: 600; font-family: 'Open Sans', sans-serif; color: #92400E;">⚠️ Limite de Labels</p>
      <p style="margin: 0; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #92400E;">
        Este exemplo tenta passar 5 labels, mas o componente limita automaticamente a 3.
        Apenas os 3 primeiros serão exibidos. Verifique o console para ver o aviso.
      </p>
    `;const t=document.createElement("atlas-segmented-control");return t.setAttribute("labels","Opção 1,Opção 2,Opção 3,Opção 4,Opção 5"),t.setAttribute("size","md"),t.setAttribute("selected-index","0"),s.appendChild(e),s.appendChild(t),s},parameters:{controls:{disable:!0},docs:{description:{story:"O componente suporta **no máximo 3 botões**. Labels excedentes são automaticamente ignorados e um aviso é exibido no console."}}}},T={render:()=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; gap: 24px;";const e=document.createElement("div");e.style.cssText="padding: 20px; background: #D1FAE5; border-left: 4px solid #10B981; border-radius: 8px;",e.innerHTML=`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #065F46;">✅ Boas Práticas</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #065F46;">
        <li>Use labels claros e concisos (1-2 palavras)</li>
        <li>Forneça aria-label quando o contexto não for óbvio</li>
        <li>Use exatamente 2 ou 3 opções (nunca menos, nunca mais)</li>
        <li>Use helper-text quando desabilitado para explicar o motivo</li>
        <li>Garanta contraste adequado dos botões selecionados</li>
      </ul>
    `;const t=document.createElement("atlas-segmented-control");t.setAttribute("labels","Lista,Grade"),t.setAttribute("size","md"),t.setAttribute("selected-index","0"),t.setAttribute("aria-label","Selecione o modo de visualização"),t.style.marginTop="12px",e.appendChild(t);const a=document.createElement("div");a.style.cssText="padding: 20px; background: #FEE2E2; border-left: 4px solid #EF4444; border-radius: 8px;",a.innerHTML=`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #991B1B;">❌ Anti-Patterns (Evite)</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #991B1B;">
        <li>Labels muito longos que causam truncamento excessivo</li>
        <li>Mais de 3 botões (componente limita automático, use dropdown)</li>
        <li>Menos de 2 botões (não faz sentido ter apenas 1 opção)</li>
        <li>Desabilitar sem explicação (sempre use helper-text)</li>
        <li>Usar para navegação entre páginas (use tabs)</li>
        <li>Omitir aria-label em contextos ambíguos</li>
      </ul>
    `;const n=document.createElement("atlas-segmented-control");n.setAttribute("labels","Primeira Opção Muito Longa,Segunda Opção Muito Longa"),n.setAttribute("size","md"),n.setAttribute("selected-index","0"),n.style.marginTop="12px",a.appendChild(n);const o=document.createElement("div");return o.style.cssText="padding: 20px; background: #E0E7FF; border-left: 4px solid #6366F1; border-radius: 8px;",o.innerHTML=`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">💡 Quando Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li><strong>Visualizações:</strong> Alternar entre Lista/Grade/Cards</li>
        <li><strong>Períodos:</strong> Dia/Semana/Mês em dashboards</li>
        <li><strong>Filtros:</strong> Todos/Ativos/Inativos</li>
        <li><strong>Tipos de gráfico:</strong> Linha/Barra/Pizza</li>
      </ul>
      <h4 style="margin: 16px 0 8px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">🚫 Quando NÃO Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li>Mais de 3 opções → use Dropdown</li>
        <li>Navegação entre seções → use Tabs</li>
        <li>Ações permanentes → use Buttons</li>
        <li>Seleção múltipla → use Checkboxes</li>
      </ul>
    `,s.appendChild(e),s.appendChild(a),s.appendChild(o),s},parameters:{controls:{disable:!0}}};var L,_,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    labels: 'Opção 1,Opção 2',
    size: 'md',
    selectedIndex: 0
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,w,D;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    labels: 'Small 1,Small 2',
    size: 'sm',
    selectedIndex: 0
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var I,M,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labels: 'Medium 1,Medium 2',
    size: 'md',
    selectedIndex: 0
  }
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var B,P,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    labels: 'Large 1,Large 2',
    size: 'lg',
    selectedIndex: 0
  }
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,U,$;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    labels: 'Lista,Grade',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração com 2 botões - ideal para alternar entre visualizações binárias como Lista/Grade.'
      }
    }
  }
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var V,G,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    labels: 'Dia,Semana,Mês',
    size: 'md',
    selectedIndex: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração com 3 botões - útil para seletores de período ou categorias relacionadas.'
      }
    }
  }
}`,...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var R,j,Q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    labels: 'Primeiro,Segundo,Terceiro',
    size: 'md',
    selectedIndex: 1
  }
}`,...(Q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:Q.source}}};var W,J,K;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    labels: 'Primeiro,Segundo,Terceiro',
    size: 'md',
    selectedIndex: 2
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    labels: 'Opção 1,Opção 2',
    size: 'md',
    disabled: true,
    selectedIndex: 0
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    labels: 'Bloqueado,Disponível',
    size: 'md',
    disabled: true,
    selectedIndex: 0,
    helperText: 'Esta funcionalidade está temporariamente desabilitada'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use helper-text para explicar por que o controle está desabilitado.'
      }
    }
  }
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,ne,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    labels: 'Lista,Grade',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: alternar entre visualização de lista e grade de conteúdo.'
      }
    }
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ie,le;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    labels: 'Hoje,Esta Semana,Este Mês',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: seletor de período temporal para dashboards e relatórios.'
      }
    }
  }
}`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    labels: 'Linha,Barra,Pizza',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: alternar entre diferentes tipos de visualização de gráficos.'
      }
    }
  }
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,xe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 400px;';
    const sizes = [{
      size: 'sm',
      height: '32px'
    }, {
      size: 'md',
      height: '40px'
    }, {
      size: 'lg',
      height: '48px'
    }];
    sizes.forEach(({
      size,
      height
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const label = document.createElement('p');
      label.textContent = \`Size: \${size} (\${height})\`;
      label.style.cssText = 'margin: 0; font-family: "Open Sans", sans-serif; font-size: 14px; color: #4B5563;';
      const control = document.createElement('atlas-segmented-control');
      control.setAttribute('labels', 'Opção 1,Opção 2');
      control.setAttribute('size', size);
      control.setAttribute('selected-index', '0');
      wrapper.appendChild(label);
      wrapper.appendChild(control);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var be,ge,he;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    const title = document.createElement('h3');
    title.textContent = 'Selecione uma visualização:';
    title.style.cssText = 'margin: 0; font-family: "Open Sans", sans-serif; font-size: 18px; font-weight: 600;';
    const control = document.createElement('atlas-segmented-control');
    control.setAttribute('labels', 'Lista,Cards,Tabela');
    control.setAttribute('size', 'md');
    control.setAttribute('selected-index', '0');
    const display = document.createElement('div');
    display.style.cssText = 'padding: 24px; background: #F3F4F6; border-radius: 8px; font-family: "Open Sans", sans-serif;';
    display.innerHTML = '<strong>Visualização Selecionada:</strong> Lista';
    control.addEventListener('change', e => {
      display.innerHTML = \`<strong>Visualização Selecionada:</strong> \${e.detail.label} (índice: \${e.detail.selectedIndex})\`;
    });
    container.appendChild(title);
    container.appendChild(control);
    container.appendChild(display);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração interativa do evento \`change\` capturando selectedIndex e label.'
      }
    }
  }
}`,...(he=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,Ee,ye;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    labels: 'Lista,Grade',
    ariaLabel: 'Selecione o modo de visualização dos resultados'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use aria-label para fornecer contexto adicional sobre o propósito do controle segmentado para leitores de tela.'
      }
    }
  }
}`,...(ye=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};var ve,Se,ze;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 600px;';
    const instruction = document.createElement('div');
    instruction.style.cssText = 'padding: 16px; background: #DBEAFE; border-left: 4px solid #3B82F6; border-radius: 4px;';
    instruction.innerHTML = \`
      <p style="margin: 0 0 8px 0; font-weight: 600; font-family: 'Open Sans', sans-serif;">⌨️ Navegação por Teclado:</p>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px;">
        <li><strong>Tab:</strong> Navega para o próximo botão do controle</li>
        <li><strong>Shift + Tab:</strong> Navega para o botão anterior</li>
        <li><strong>Enter/Space:</strong> Seleciona o botão focado</li>
        <li><strong>Setas ←/→:</strong> Navegação entre botões (comportamento nativo do navegador)</li>
      </ul>
    \`;
    const controls = document.createElement('div');
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    ['sm', 'md', 'lg'].forEach(size => {
      const control = document.createElement('atlas-segmented-control');
      control.setAttribute('labels', 'Primeiro,Segundo,Terceiro');
      control.setAttribute('size', size);
      control.setAttribute('selected-index', '0');
      control.setAttribute('aria-label', \`Controle segmentado tamanho \${size}\`);
      controls.appendChild(control);
    });
    container.appendChild(instruction);
    container.appendChild(controls);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração de estados de foco e navegação por teclado. Use Tab para navegar entre botões e Enter/Space para selecionar.'
      }
    }
  }
}`,...(ze=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ze.source}}};var Ae,Te,Ce;A.parameters={...A.parameters,docs:{...(Ae=A.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    const info = document.createElement('div');
    info.style.cssText = 'padding: 16px; background: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 4px;';
    info.innerHTML = \`
      <p style="margin: 0 0 8px 0; font-weight: 600; font-family: 'Open Sans', sans-serif; color: #92400E;">⚠️ Limite de Labels</p>
      <p style="margin: 0; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #92400E;">
        Este exemplo tenta passar 5 labels, mas o componente limita automaticamente a 3.
        Apenas os 3 primeiros serão exibidos. Verifique o console para ver o aviso.
      </p>
    \`;
    const control = document.createElement('atlas-segmented-control');
    control.setAttribute('labels', 'Opção 1,Opção 2,Opção 3,Opção 4,Opção 5');
    control.setAttribute('size', 'md');
    control.setAttribute('selected-index', '0');
    container.appendChild(info);
    container.appendChild(control);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'O componente suporta **no máximo 3 botões**. Labels excedentes são automaticamente ignorados e um aviso é exibido no console.'
      }
    }
  }
}`,...(Ce=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Le,_e,Fe;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';

    // Card de boas práticas
    const goodPractices = document.createElement('div');
    goodPractices.style.cssText = 'padding: 20px; background: #D1FAE5; border-left: 4px solid #10B981; border-radius: 8px;';
    goodPractices.innerHTML = \`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #065F46;">✅ Boas Práticas</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #065F46;">
        <li>Use labels claros e concisos (1-2 palavras)</li>
        <li>Forneça aria-label quando o contexto não for óbvio</li>
        <li>Use exatamente 2 ou 3 opções (nunca menos, nunca mais)</li>
        <li>Use helper-text quando desabilitado para explicar o motivo</li>
        <li>Garanta contraste adequado dos botões selecionados</li>
      </ul>
    \`;
    const goodExample = document.createElement('atlas-segmented-control');
    goodExample.setAttribute('labels', 'Lista,Grade');
    goodExample.setAttribute('size', 'md');
    goodExample.setAttribute('selected-index', '0');
    goodExample.setAttribute('aria-label', 'Selecione o modo de visualização');
    goodExample.style.marginTop = '12px';
    goodPractices.appendChild(goodExample);

    // Card de anti-patterns
    const badPractices = document.createElement('div');
    badPractices.style.cssText = 'padding: 20px; background: #FEE2E2; border-left: 4px solid #EF4444; border-radius: 8px;';
    badPractices.innerHTML = \`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #991B1B;">❌ Anti-Patterns (Evite)</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #991B1B;">
        <li>Labels muito longos que causam truncamento excessivo</li>
        <li>Mais de 3 botões (componente limita automático, use dropdown)</li>
        <li>Menos de 2 botões (não faz sentido ter apenas 1 opção)</li>
        <li>Desabilitar sem explicação (sempre use helper-text)</li>
        <li>Usar para navegação entre páginas (use tabs)</li>
        <li>Omitir aria-label em contextos ambíguos</li>
      </ul>
    \`;
    const badExample = document.createElement('atlas-segmented-control');
    badExample.setAttribute('labels', 'Primeira Opção Muito Longa,Segunda Opção Muito Longa');
    badExample.setAttribute('size', 'md');
    badExample.setAttribute('selected-index', '0');
    badExample.style.marginTop = '12px';
    badPractices.appendChild(badExample);

    // Card de quando usar
    const whenToUse = document.createElement('div');
    whenToUse.style.cssText = 'padding: 20px; background: #E0E7FF; border-left: 4px solid #6366F1; border-radius: 8px;';
    whenToUse.innerHTML = \`
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">💡 Quando Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li><strong>Visualizações:</strong> Alternar entre Lista/Grade/Cards</li>
        <li><strong>Períodos:</strong> Dia/Semana/Mês em dashboards</li>
        <li><strong>Filtros:</strong> Todos/Ativos/Inativos</li>
        <li><strong>Tipos de gráfico:</strong> Linha/Barra/Pizza</li>
      </ul>
      <h4 style="margin: 16px 0 8px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">🚫 Quando NÃO Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li>Mais de 3 opções → use Dropdown</li>
        <li>Navegação entre seções → use Tabs</li>
        <li>Ações permanentes → use Buttons</li>
        <li>Seleção múltipla → use Checkboxes</li>
      </ul>
    \`;
    container.appendChild(goodPractices);
    container.appendChild(badPractices);
    container.appendChild(whenToUse);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Fe=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};const Ie=["Playground","Small","Medium","Large","TwoButtons","ThreeButtons","SecondSelected","ThirdSelected","Disabled","DisabledWithHelperText","ViewSwitcher","TimePeriodSelector","ChartTypeSelector","AllSizes","InteractiveDemo","WithAriaLabel","FocusStates","MaxThreeButtons","AccessibilityBestPractices"];export{T as AccessibilityBestPractices,y as AllSizes,E as ChartTypeSelector,b as Disabled,g as DisabledWithHelperText,z as FocusStates,v as InteractiveDemo,c as Large,A as MaxThreeButtons,d as Medium,i as Playground,u as SecondSelected,l as Small,x as ThirdSelected,m as ThreeButtons,f as TimePeriodSelector,p as TwoButtons,h as ViewSwitcher,S as WithAriaLabel,Ie as __namedExportsOrder,De as default};
