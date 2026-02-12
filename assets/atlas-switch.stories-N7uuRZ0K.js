import"./atlas-icon-button-D_fTdWvm.js";import"./atlas-icon-B_0Pd0rQ.js";class Ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["alignment","checked","label","strong-label","description","state","error-text","icon-popover","icon-popover-name"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,o){this._isRendering||a===o||this.render()}get alignment(){return this.getAttribute("alignment")||"left"}get checked(){return this.hasAttribute("checked")}get label(){return this.getAttribute("label")||"Label"}get strongLabel(){return this.hasAttribute("strong-label")}get description(){return this.getAttribute("description")||""}get state(){return this.getAttribute("state")||"default"}get errorText(){return this.getAttribute("error-text")||"Error text"}get iconPopover(){return this.hasAttribute("icon-popover")}get iconPopoverName(){return this.getAttribute("icon-popover-name")||"info"}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}setupEventListeners(){const e=this.shadowRoot.querySelector(".switch-control"),a=this.state==="default"||this.state==="error";e&&a?(e.style.cursor="pointer",e.onclick=()=>this.toggle()):e&&(e.style.cursor="not-allowed",e.onclick=null)}toggle(){(this.state==="default"||this.state==="error")&&(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){if(this._isRendering)return;this._isRendering=!0;const e=this.checked,a=this.alignment==="left",o=this.description.length>0,n=this.state==="error",r=this.state==="disabled",s=this.state==="read-only";this.shadowRoot.innerHTML=`
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
        ${a?this.renderSwitch(e,r,s):""}
        
        <div class="switch-content">
          <div class="label-row">
            <span class="switch-label ${this.strongLabel?"strong":""} ${r?"disabled":""}">
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
          
          ${o?`
            <div class="switch-description ${r?"disabled":""}">
              ${this.description}
            </div>
          `:""}
          
          ${n?`
            <div class="error-text">
              ${this.errorText}
            </div>
          `:""}
        </div>

        ${a?"":this.renderSwitch(e,r,s)}
      </div>
    `,this._isRendering=!1,this.setupEventListeners()}renderSwitch(e,a,o){return`
      <div class="${["switch-control",e?"checked":"unchecked",a?"disabled":"",o?"read-only":"",this.state==="error"?"error":""].filter(Boolean).join(" ")}">
        <div class="switch-thumb"></div>
      </div>
    `}}customElements.define("atlas-switch",Ue);const We={title:"Components/Atlas Switch",tags:["autodocs"],render:t=>{const e=document.createElement("atlas-switch");return e.setAttribute("label",t.label),t.description&&e.setAttribute("description",t.description),t.errorText&&e.setAttribute("error-text",t.errorText),e.setAttribute("alignment",t.alignment),t.strongLabel?e.setAttribute("strong-label",""):e.removeAttribute("strong-label"),t.iconPopover?e.setAttribute("icon-popover",""):e.removeAttribute("icon-popover"),t.iconPopoverName&&e.setAttribute("icon-popover-name",t.iconPopoverName),e.setAttribute("state",t.state),t.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),e.addEventListener("change",a=>{t.onChange(a.detail)}),e},argTypes:{label:{control:"text",description:"Texto do label principal",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Label"}}},description:{control:"text",description:"Texto descritivo opcional abaixo do label",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},errorText:{control:"text",description:'Mensagem de erro exibida quando state="error"',table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Error text"}}},alignment:{control:"radio",options:["left","right"],description:"Posição do controle switch em relação ao conteúdo",table:{category:"Appearance",type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"}}},strongLabel:{control:"boolean",description:"Aplica font-weight semi-bold (600) no label",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconPopover:{control:"boolean",description:"Exibe ícone de informação ao lado do label",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconPopoverName:{control:"text",description:"Nome do ícone do popover (qualquer ícone válido do atlas-icon)",table:{category:"Appearance",type:{summary:"string"},defaultValue:{summary:"info"}},if:{arg:"iconPopover",truthy:!0}},state:{control:"select",options:["default","disabled","read-only","error"],description:"Estado do componente (define aparência e interatividade)",table:{category:"Status",type:{summary:"'default' | 'disabled' | 'read-only' | 'error'"},defaultValue:{summary:"default"}}},checked:{control:"boolean",description:"Estado ativo/inativo do switch",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onChange:{action:"changed",description:"Evento disparado quando o estado do switch muda",table:{category:"Actions",type:{summary:"(detail: { checked: boolean }) => void"}}}},args:{label:"Label",description:"",errorText:"Error text",alignment:"left",strongLabel:!1,iconPopover:!1,iconPopoverName:"info",state:"default",checked:!1}},p={},u={args:{label:"Enable notifications",description:"Receive push notifications on your device",alignment:"left"},parameters:{docs:{description:{story:"Switch posicionado à esquerda do conteúdo (padrão)."}}}},m={args:{label:"Enable notifications",description:"Receive push notifications on your device",alignment:"right"},parameters:{docs:{description:{story:"Switch posicionado à direita do conteúdo."}}}},b={args:{label:"Marketing emails",strongLabel:!0,description:"Receive updates about new products and features"},parameters:{docs:{description:{story:"Label com font-weight semi-bold para dar mais destaque."}}}},h={args:{label:"Two-factor authentication",description:"Add an extra layer of security to your account by enabling 2FA",checked:!0},parameters:{docs:{description:{story:"Switch com texto descritivo explicativo."}}}},g={args:{label:"Privacy mode",description:"Your activity will not be visible to other users",iconPopover:!0},parameters:{docs:{description:{story:"Switch com ícone de informação para contexto adicional."}}}},x={args:{label:"Advanced settings",description:"Configure advanced system preferences",iconPopover:!0,iconPopoverName:"settings-01"},parameters:{docs:{description:{story:"Switch com ícone customizado usando a propriedade icon-popover-name. Pode usar qualquer ícone válido do atlas-icon."}}}},v={render:()=>{const t=document.createElement("div");return t.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;",[{label:"Help & Support",icon:"help-circle",description:"Get assistance and documentation"},{label:"Security Settings",icon:"lock-01",description:"Manage security and privacy options"},{label:"Experimental Features",icon:"beaker-02",description:"Enable beta features and experiments"},{label:"Notification Preferences",icon:"bell-01",description:"Configure how you receive alerts"},{label:"System Information",icon:"info-circle",description:"View system details and status"}].forEach(a=>{const o=document.createElement("atlas-switch");o.setAttribute("label",a.label),o.setAttribute("description",a.description),o.setAttribute("icon-popover",""),o.setAttribute("icon-popover-name",a.icon),t.appendChild(o)}),t},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de diferentes ícones que podem ser usados no icon-popover. Você pode usar qualquer ícone disponível no sistema de design."}}}},f={args:{label:"Auto-save",description:"Automatically save your work every 5 minutes",checked:!0},parameters:{docs:{description:{story:"Switch no estado ativo/ligado."}}}},y={args:{label:"Auto-save",description:"Automatically save your work every 5 minutes",checked:!1},parameters:{docs:{description:{story:"Switch no estado inativo/desligado."}}}},w={args:{label:"Airplane mode",description:"Disable all wireless connections",state:"disabled",checked:!1},parameters:{docs:{description:{story:"Switch desabilitado no estado desligado (não interativo)."}}}},k={args:{label:"Developer mode",description:"Enable advanced developer features",state:"disabled",checked:!0},parameters:{docs:{description:{story:"Switch desabilitado no estado ligado (não interativo)."}}}},E={args:{label:"Admin access",description:"Full system administration privileges",state:"read-only",checked:!1},parameters:{docs:{description:{story:"Switch em modo somente leitura desligado (visualização, não editável)."}}}},A={args:{label:"Admin access",description:"Full system administration privileges",state:"read-only",checked:!0},parameters:{docs:{description:{story:"Switch em modo somente leitura ligado (visualização, não editável)."}}}},C={args:{label:"Terms and conditions",description:"Accept our terms to continue",state:"error",errorText:"You must accept the terms to proceed",checked:!1},parameters:{docs:{description:{story:"Switch com erro de validação."}}}},S={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);";const e=document.createElement("h3");return e.textContent="Notification Settings",e.style.cssText="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #1d2125;",t.appendChild(e),[{label:"Email notifications",description:"Receive notifications via email",checked:!0},{label:"Push notifications",description:"Receive push notifications on your device",checked:!0},{label:"SMS notifications",description:"Receive text messages for important updates",checked:!1},{label:"Marketing emails",description:"Receive our newsletter and promotional content",checked:!1,strongLabel:!1}].forEach(o=>{const n=document.createElement("atlas-switch");n.setAttribute("label",o.label),n.setAttribute("description",o.description),o.checked&&n.setAttribute("checked",""),o.strongLabel&&n.setAttribute("strong-label",""),t.appendChild(n)}),t},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de painel de configurações com múltiplos switches."}}}},T={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 20px; max-width: 500px; padding: 24px; background: #fff; border-radius: 8px;";const e=document.createElement("h3");e.textContent="Account Setup",e.style.cssText="margin: 0 0 8px 0; font-size: 20px; font-weight: 600;",t.appendChild(e);const a=document.createElement("p");a.textContent="Please accept the required terms to continue",a.style.cssText="margin: 0 0 16px 0; color: #5e6877; font-size: 14px;",t.appendChild(a);const o=document.createElement("atlas-switch");o.setAttribute("label","Terms and conditions"),o.setAttribute("description","I accept the terms and conditions of service"),o.setAttribute("state","error"),o.setAttribute("error-text","You must accept the terms to proceed"),o.setAttribute("strong-label",""),t.appendChild(o);const n=document.createElement("atlas-switch");n.setAttribute("label","Privacy policy"),n.setAttribute("description","I have read and understand the privacy policy"),n.setAttribute("checked",""),t.appendChild(n);const r=document.createElement("atlas-switch");return r.setAttribute("label","Marketing communications"),r.setAttribute("description","I want to receive promotional emails and updates"),t.appendChild(r),t},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de formulário com validação e estados de erro."}}}},D={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const e=document.createElement("div");return e.style.cssText="padding: 16px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px; margin-bottom: 8px;",e.innerHTML=`
      <strong style="display: block; margin-bottom: 8px; color: #1976d2;">♿ Navegação por Teclado</strong>
      <ul style="margin: 0; padding-left: 20px; color: #1565c0; line-height: 1.6;">
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Tab</kbd> - Navegar entre switches</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Space</kbd> ou <kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Enter</kbd> - Alternar estado</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Shift + Tab</kbd> - Voltar</li>
      </ul>
    `,t.appendChild(e),[{label:"First switch",description:"Use Tab to navigate",checked:!1},{label:"Second switch",description:"Press Space to toggle",checked:!0},{label:"Third switch",description:"Accessible navigation",checked:!1}].forEach(o=>{const n=document.createElement("atlas-switch");n.setAttribute("label",o.label),n.setAttribute("description",o.description),o.checked&&n.setAttribute("checked",""),t.appendChild(n)}),t},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de navegação por teclado e estados de foco. O switch é totalmente acessível via teclado."}}}},F={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 32px;";const e=document.createElement("div");e.innerHTML=`
      <div style="padding: 16px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #2e7d32; font-size: 16px;">✅ Boas Práticas</strong>
      </div>
    `;const a=document.createElement("atlas-switch");a.setAttribute("label","Descriptive label"),a.setAttribute("description","Always provide clear, descriptive text explaining what the switch controls"),a.setAttribute("checked",""),e.appendChild(a);const o=document.createElement("div");o.style.height="12px",e.appendChild(o);const n=document.createElement("atlas-switch");n.setAttribute("label","Feature with tooltip"),n.setAttribute("description","Use icon-popover for additional context when needed"),n.setAttribute("icon-popover",""),e.appendChild(n);const r=document.createElement("div");r.style.height="12px",e.appendChild(r);const s=document.createElement("atlas-switch");s.setAttribute("label","Strong emphasis"),s.setAttribute("description","Use strong-label for important settings that need emphasis"),s.setAttribute("strong-label",""),s.setAttribute("checked",""),e.appendChild(s),t.appendChild(e);const i=document.createElement("div");i.innerHTML=`
      <div style="padding: 16px; background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #c62828; font-size: 16px;">❌ Evite</strong>
      </div>
    `;const c=document.createElement("div");c.style.cssText="opacity: 0.6;";const z=document.createElement("atlas-switch");z.setAttribute("label","On"),z.setAttribute("state","disabled"),c.appendChild(z);const L=document.createElement("p");L.style.cssText="margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;",L.textContent="❌ Label genérico que não descreve a função",c.appendChild(L),i.appendChild(c);const l=document.createElement("div");l.style.cssText="opacity: 0.6;";const R=document.createElement("atlas-switch");R.setAttribute("label","Click here to enable feature X and automatically sync your preferences across all devices"),R.setAttribute("state","disabled"),l.appendChild(R);const N=document.createElement("p");N.style.cssText="margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;",N.textContent="❌ Label muito longo - use description para texto adicional",l.appendChild(N),i.appendChild(l);const d=document.createElement("div");d.style.cssText="opacity: 0.6;";const B=document.createElement("atlas-switch");B.setAttribute("label","Accept"),B.setAttribute("state","disabled"),d.appendChild(B);const q=document.createElement("p");return q.style.cssText="margin: 4px 0 0 0; color: #d32f2f; font-size: 13px;",q.textContent="❌ Falta contexto - o que está sendo aceito?",d.appendChild(q),i.appendChild(d),t.appendChild(i),t},parameters:{controls:{disable:!0},docs:{description:{story:"Guia visual de boas práticas e anti-patterns para uso do componente switch."}}}},P={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const e=document.createElement("div");e.style.cssText="padding: 16px; background: #f3e5f5; border-left: 4px solid #9c27b0; border-radius: 4px; margin-bottom: 8px;",e.innerHTML=`
      <strong style="display: block; margin-bottom: 8px; color: #6a1b9a;">📢 Leitores de Tela</strong>
      <p style="margin: 0; color: #4a148c; line-height: 1.6; font-size: 14px;">
        Este componente é otimizado para leitores de tela, anunciando corretamente o estado do switch (ligado/desligado) e suas descrições.
      </p>
    `,t.appendChild(e);const a=document.createElement("atlas-switch");a.setAttribute("label","Email notifications"),a.setAttribute("description","Receive email alerts for important account activities"),a.setAttribute("checked",""),t.appendChild(a);const o=document.createElement("atlas-switch");o.setAttribute("label","Dark mode"),o.setAttribute("description","Switch between light and dark color themes"),o.setAttribute("icon-popover",""),t.appendChild(o);const n=document.createElement("atlas-switch");return n.setAttribute("label","Auto-updates"),n.setAttribute("description","Automatically install security updates"),n.setAttribute("checked",""),n.setAttribute("state","read-only"),t.appendChild(n),t},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplos otimizados para leitores de tela com labels descritivos e estados claros."}}}};var M,I,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var O,$,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    description: 'Receive push notifications on your device',
    alignment: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch posicionado à esquerda do conteúdo (padrão).'
      }
    }
  }
}`,...(H=($=u.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var U,_,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    description: 'Receive push notifications on your device',
    alignment: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch posicionado à direita do conteúdo.'
      }
    }
  }
}`,...(Y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var W,G,X;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Marketing emails',
    strongLabel: true,
    description: 'Receive updates about new products and features'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label com font-weight semi-bold para dar mais destaque.'
      }
    }
  }
}`,...(X=(G=b.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var j,J,K;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Two-factor authentication',
    description: 'Add an extra layer of security to your account by enabling 2FA',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com texto descritivo explicativo.'
      }
    }
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Privacy mode',
    description: 'Your activity will not be visible to other users',
    iconPopover: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com ícone de informação para contexto adicional.'
      }
    }
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Advanced settings',
    description: 'Configure advanced system preferences',
    iconPopover: true,
    iconPopoverName: 'settings-01'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com ícone customizado usando a propriedade icon-popover-name. Pode usar qualquer ícone válido do atlas-icon.'
      }
    }
  }
}`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ne,re,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    const examples = [{
      label: 'Help & Support',
      icon: 'help-circle',
      description: 'Get assistance and documentation'
    }, {
      label: 'Security Settings',
      icon: 'lock-01',
      description: 'Manage security and privacy options'
    }, {
      label: 'Experimental Features',
      icon: 'beaker-02',
      description: 'Enable beta features and experiments'
    }, {
      label: 'Notification Preferences',
      icon: 'bell-01',
      description: 'Configure how you receive alerts'
    }, {
      label: 'System Information',
      icon: 'info-circle',
      description: 'View system details and status'
    }];
    examples.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      switchEl.setAttribute('icon-popover', '');
      switchEl.setAttribute('icon-popover-name', config.icon);
      container.appendChild(switchEl);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração de diferentes ícones que podem ser usados no icon-popover. Você pode usar qualquer ícone disponível no sistema de design.'
      }
    }
  }
}`,...(se=(re=v.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Auto-save',
    description: 'Automatically save your work every 5 minutes',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no estado ativo/ligado.'
      }
    }
  }
}`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Auto-save',
    description: 'Automatically save your work every 5 minutes',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no estado inativo/desligado.'
      }
    }
  }
}`,...(ue=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,be,he;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Airplane mode',
    description: 'Disable all wireless connections',
    state: 'disabled',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch desabilitado no estado desligado (não interativo).'
      }
    }
  }
}`,...(he=(be=w.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ge,xe,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Developer mode',
    description: 'Enable advanced developer features',
    state: 'disabled',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch desabilitado no estado ligado (não interativo).'
      }
    }
  }
}`,...(ve=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,ye,we;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Admin access',
    description: 'Full system administration privileges',
    state: 'read-only',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch em modo somente leitura desligado (visualização, não editável).'
      }
    }
  }
}`,...(we=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ke,Ee,Ae;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'Admin access',
    description: 'Full system administration privileges',
    state: 'read-only',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch em modo somente leitura ligado (visualização, não editável).'
      }
    }
  }
}`,...(Ae=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ce,Se,Te;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    label: 'Terms and conditions',
    description: 'Accept our terms to continue',
    state: 'error',
    errorText: 'You must accept the terms to proceed',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com erro de validação.'
      }
    }
  }
}`,...(Te=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var De,Fe,Pe;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
    const title = document.createElement('h3');
    title.textContent = 'Notification Settings';
    title.style.cssText = 'margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #1d2125;';
    container.appendChild(title);
    const switches = [{
      label: 'Email notifications',
      description: 'Receive notifications via email',
      checked: true
    }, {
      label: 'Push notifications',
      description: 'Receive push notifications on your device',
      checked: true
    }, {
      label: 'SMS notifications',
      description: 'Receive text messages for important updates',
      checked: false
    }, {
      label: 'Marketing emails',
      description: 'Receive our newsletter and promotional content',
      checked: false,
      strongLabel: false
    }];
    switches.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      if (config.checked) switchEl.setAttribute('checked', '');
      if (config.strongLabel) switchEl.setAttribute('strong-label', '');
      container.appendChild(switchEl);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplo de painel de configurações com múltiplos switches.'
      }
    }
  }
}`,...(Pe=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var ze,Le,Re;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 20px; max-width: 500px; padding: 24px; background: #fff; border-radius: 8px;';
    const title = document.createElement('h3');
    title.textContent = 'Account Setup';
    title.style.cssText = 'margin: 0 0 8px 0; font-size: 20px; font-weight: 600;';
    container.appendChild(title);
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Please accept the required terms to continue';
    subtitle.style.cssText = 'margin: 0 0 16px 0; color: #5e6877; font-size: 14px;';
    container.appendChild(subtitle);

    // Switch obrigatório com erro
    const termsSwitch = document.createElement('atlas-switch');
    termsSwitch.setAttribute('label', 'Terms and conditions');
    termsSwitch.setAttribute('description', 'I accept the terms and conditions of service');
    termsSwitch.setAttribute('state', 'error');
    termsSwitch.setAttribute('error-text', 'You must accept the terms to proceed');
    termsSwitch.setAttribute('strong-label', '');
    container.appendChild(termsSwitch);

    // Switch opcional
    const privacySwitch = document.createElement('atlas-switch');
    privacySwitch.setAttribute('label', 'Privacy policy');
    privacySwitch.setAttribute('description', 'I have read and understand the privacy policy');
    privacySwitch.setAttribute('checked', '');
    container.appendChild(privacySwitch);

    // Switch opcional marketing
    const marketingSwitch = document.createElement('atlas-switch');
    marketingSwitch.setAttribute('label', 'Marketing communications');
    marketingSwitch.setAttribute('description', 'I want to receive promotional emails and updates');
    container.appendChild(marketingSwitch);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplo de formulário com validação e estados de erro.'
      }
    }
  }
}`,...(Re=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var Ne,Be,qe;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    const instruction = document.createElement('div');
    instruction.style.cssText = 'padding: 16px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px; margin-bottom: 8px;';
    instruction.innerHTML = \`
      <strong style="display: block; margin-bottom: 8px; color: #1976d2;">♿ Navegação por Teclado</strong>
      <ul style="margin: 0; padding-left: 20px; color: #1565c0; line-height: 1.6;">
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Tab</kbd> - Navegar entre switches</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Space</kbd> ou <kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Enter</kbd> - Alternar estado</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Shift + Tab</kbd> - Voltar</li>
      </ul>
    \`;
    container.appendChild(instruction);
    const switches = [{
      label: 'First switch',
      description: 'Use Tab to navigate',
      checked: false
    }, {
      label: 'Second switch',
      description: 'Press Space to toggle',
      checked: true
    }, {
      label: 'Third switch',
      description: 'Accessible navigation',
      checked: false
    }];
    switches.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      if (config.checked) switchEl.setAttribute('checked', '');
      container.appendChild(switchEl);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado e estados de foco. O switch é totalmente acessível via teclado.'
      }
    }
  }
}`,...(qe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};var Me,Ie,Ve;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';

    // ✅ Boas práticas
    const goodSection = document.createElement('div');
    goodSection.innerHTML = \`
      <div style="padding: 16px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #2e7d32; font-size: 16px;">✅ Boas Práticas</strong>
      </div>
    \`;
    const good1 = document.createElement('atlas-switch');
    good1.setAttribute('label', 'Descriptive label');
    good1.setAttribute('description', 'Always provide clear, descriptive text explaining what the switch controls');
    good1.setAttribute('checked', '');
    goodSection.appendChild(good1);
    const spacer1 = document.createElement('div');
    spacer1.style.height = '12px';
    goodSection.appendChild(spacer1);
    const good2 = document.createElement('atlas-switch');
    good2.setAttribute('label', 'Feature with tooltip');
    good2.setAttribute('description', 'Use icon-popover for additional context when needed');
    good2.setAttribute('icon-popover', '');
    goodSection.appendChild(good2);
    const spacer2 = document.createElement('div');
    spacer2.style.height = '12px';
    goodSection.appendChild(spacer2);
    const good3 = document.createElement('atlas-switch');
    good3.setAttribute('label', 'Strong emphasis');
    good3.setAttribute('description', 'Use strong-label for important settings that need emphasis');
    good3.setAttribute('strong-label', '');
    good3.setAttribute('checked', '');
    goodSection.appendChild(good3);
    container.appendChild(goodSection);

    // ❌ Anti-patterns
    const badSection = document.createElement('div');
    badSection.innerHTML = \`
      <div style="padding: 16px; background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #c62828; font-size: 16px;">❌ Evite</strong>
      </div>
    \`;
    const bad1Container = document.createElement('div');
    bad1Container.style.cssText = 'opacity: 0.6;';
    const bad1 = document.createElement('atlas-switch');
    bad1.setAttribute('label', 'On');
    bad1.setAttribute('state', 'disabled');
    bad1Container.appendChild(bad1);
    const bad1Note = document.createElement('p');
    bad1Note.style.cssText = 'margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;';
    bad1Note.textContent = '❌ Label genérico que não descreve a função';
    bad1Container.appendChild(bad1Note);
    badSection.appendChild(bad1Container);
    const bad2Container = document.createElement('div');
    bad2Container.style.cssText = 'opacity: 0.6;';
    const bad2 = document.createElement('atlas-switch');
    bad2.setAttribute('label', 'Click here to enable feature X and automatically sync your preferences across all devices');
    bad2.setAttribute('state', 'disabled');
    bad2Container.appendChild(bad2);
    const bad2Note = document.createElement('p');
    bad2Note.style.cssText = 'margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;';
    bad2Note.textContent = '❌ Label muito longo - use description para texto adicional';
    bad2Container.appendChild(bad2Note);
    badSection.appendChild(bad2Container);
    const bad3Container = document.createElement('div');
    bad3Container.style.cssText = 'opacity: 0.6;';
    const bad3 = document.createElement('atlas-switch');
    bad3.setAttribute('label', 'Accept');
    bad3.setAttribute('state', 'disabled');
    bad3Container.appendChild(bad3);
    const bad3Note = document.createElement('p');
    bad3Note.style.cssText = 'margin: 4px 0 0 0; color: #d32f2f; font-size: 13px;';
    bad3Note.textContent = '❌ Falta contexto - o que está sendo aceito?';
    bad3Container.appendChild(bad3Note);
    badSection.appendChild(bad3Container);
    container.appendChild(badSection);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Guia visual de boas práticas e anti-patterns para uso do componente switch.'
      }
    }
  }
}`,...(Ve=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Oe,$e,He;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    const info = document.createElement('div');
    info.style.cssText = 'padding: 16px; background: #f3e5f5; border-left: 4px solid #9c27b0; border-radius: 4px; margin-bottom: 8px;';
    info.innerHTML = \`
      <strong style="display: block; margin-bottom: 8px; color: #6a1b9a;">📢 Leitores de Tela</strong>
      <p style="margin: 0; color: #4a148c; line-height: 1.6; font-size: 14px;">
        Este componente é otimizado para leitores de tela, anunciando corretamente o estado do switch (ligado/desligado) e suas descrições.
      </p>
    \`;
    container.appendChild(info);
    const switch1 = document.createElement('atlas-switch');
    switch1.setAttribute('label', 'Email notifications');
    switch1.setAttribute('description', 'Receive email alerts for important account activities');
    switch1.setAttribute('checked', '');
    container.appendChild(switch1);
    const switch2 = document.createElement('atlas-switch');
    switch2.setAttribute('label', 'Dark mode');
    switch2.setAttribute('description', 'Switch between light and dark color themes');
    switch2.setAttribute('icon-popover', '');
    container.appendChild(switch2);
    const switch3 = document.createElement('atlas-switch');
    switch3.setAttribute('label', 'Auto-updates');
    switch3.setAttribute('description', 'Automatically install security updates');
    switch3.setAttribute('checked', '');
    switch3.setAttribute('state', 'read-only');
    container.appendChild(switch3);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplos otimizados para leitores de tela com labels descritivos e estados claros.'
      }
    }
  }
}`,...(He=($e=P.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};const Ge=["Playground","AlignmentLeft","AlignmentRight","WithStrongLabel","WithDescription","WithIconPopover","CustomIconPopover","MultipleIconExamples","CheckedState","UncheckedState","DisabledUnchecked","DisabledChecked","ReadOnlyUnchecked","ReadOnlyChecked","ErrorState","SettingsPanel","FormValidation","FocusStates","AccessibilityBestPractices","ScreenReaderOptimized"];export{F as AccessibilityBestPractices,u as AlignmentLeft,m as AlignmentRight,f as CheckedState,x as CustomIconPopover,k as DisabledChecked,w as DisabledUnchecked,C as ErrorState,D as FocusStates,T as FormValidation,v as MultipleIconExamples,p as Playground,A as ReadOnlyChecked,E as ReadOnlyUnchecked,P as ScreenReaderOptimized,S as SettingsPanel,y as UncheckedState,h as WithDescription,g as WithIconPopover,b as WithStrongLabel,Ge as __namedExportsOrder,We as default};
