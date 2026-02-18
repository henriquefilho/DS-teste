class $e extends HTMLElement{static get observedAttributes(){return["checked","indeterminate","disabled","error","readonly","label","value","name"]}constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}connectedCallback(){this.render()}attributeChangedCallback(e,r,a){this._isRendering||r===a||this.render()}get checked(){return this.hasAttribute("checked")}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}get indeterminate(){return this.hasAttribute("indeterminate")}set indeterminate(e){e?this.setAttribute("indeterminate",""):this.removeAttribute("indeterminate")}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get error(){return this.hasAttribute("error")}set error(e){e?this.setAttribute("error",""):this.removeAttribute("error")}get readonly(){return this.hasAttribute("readonly")}set readonly(e){e?this.setAttribute("readonly",""):this.removeAttribute("readonly")}get label(){return this.getAttribute("label")||""}set label(e){this.setAttribute("label",e)}get value(){return this.getAttribute("value")||""}set value(e){this.setAttribute("value",e)}get name(){return this.getAttribute("name")||""}set name(e){this.setAttribute("name",e)}attachEventListeners(){const e=this.shadowRoot.querySelector(".checkbox");e&&e.addEventListener("click",a=>this.handleClick(a));const r=this.shadowRoot.querySelector(".checkbox__input");r&&r.addEventListener("change",a=>this.handleChange(a))}handleClick(e){if(this.disabled||this.readonly){e.preventDefault();return}}handleChange(e){this.checked=e.target.checked,this.indeterminate&&(this.indeterminate=!1),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{checked:this.checked,value:this.value,name:this.name}}))}render(){if(this._isRendering)return;this._isRendering=!0;const e=this.checked,r=this.indeterminate,a=this.disabled,n=this.error,o=this.readonly,s=this.label,i=this.value,d=this.name;let c="checkbox--default";a?c="checkbox--disabled":o?c="checkbox--readonly":n&&(c="checkbox--error");let l="";r?l=`<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox__icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.57628e-07 1C3.57628e-07 0.447715 3.57628e-07 0 3.57628e-07 0H14C14 0 14 0.447715 14 1C14 1.55228 14 2 14 2H3.57628e-07C3.57628e-07 2 3.57628e-07 1.55228 3.57628e-07 1Z" fill="currentColor"/>
</svg>`:e&&(l=`<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox__icon">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4597 1.33488L3.68009 11.1303L0 7.36656L1.43001 5.96832L3.61659 8.2046L10.9703 0L12.4597 1.33488Z" fill="currentColor"/>
</svg>`);let p="false";r?p="mixed":e&&(p="true"),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          font-family: 'Open Sans', sans-serif;
          
          /* Importa tokens globais para o Shadow DOM */
          --local-surface-inactive-default: var(--atlas-color-surface-control-inactive-default, #FCFCFD);
          --local-surface-active-default: var(--atlas-color-surface-control-active-default, #0030B9);
          --local-surface-inactive-error: var(--atlas-color-surface-control-inactive-error, #FCFCFD);
          --local-surface-active-error: var(--atlas-color-surface-control-active-error, #B02A37);
          --local-surface-inactive-readonly: var(--atlas-color-surface-control-inactive-read-only, #FCFCFD);
          --local-surface-active-readonly: var(--atlas-color-surface-control-active-read-only, #B8C0CB);
          --local-surface-inactive-disabled: var(--atlas-color-surface-control-inactive-disabled, #FCFCFD);
          --local-surface-active-disabled: var(--atlas-color-surface-control-active-disabled, #D1D6DC);
          
          --local-border-primary: var(--atlas-color-border-primary-hard, #0030B9);
          --local-border-error: var(--atlas-color-border-error-hard, #B02A37);
          --local-border-default: var(--atlas-color-border-default, #D1D6DC);
          --local-border-disabled: var(--atlas-color-border-disabled, #D1D6DC);
          
          --local-text-neutral-hard: var(--atlas-color-text-static-neutral-hard, #1D2125);
          --local-text-error: var(--atlas-color-text-static-error-medium, #B02A37);
          --local-text-disabled: var(--atlas-color-text-static-disabled-level-1, #D1D6DC);
          
          --local-icon-color: var(--atlas-color-pale-sky-10, #FCFCFD);
          --local-focus-primary: var(--atlas-color-persian-blue-400, #3359C7);
          --local-focus-error: var(--atlas-color-red-ribbon-400, #E35D6A);
        }

        .checkbox {
          display: inline-flex;
          align-items: center;
          gap: var(--atlas-spacing-100, 8px);
          cursor: pointer;
          user-select: none;
        }

        .checkbox--disabled,
        .checkbox--readonly {
          cursor: not-allowed;
        }

        .checkbox__wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .checkbox__input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
          margin: 0;
        }

        .checkbox__box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex: 0 0 20px; /* Impede encolhimento/crescimento flex */
          border-radius: var(--atlas-radius-standalone-md, var(--atlas-radius-50, 4px));
          border-width: 1px;
          border-style: solid;
          box-sizing: border-box;
          transition: all 0.15s ease;
          position: relative;
          background-color: transparent;
        }

        /* ===== DEFAULT STATE ===== */
        .checkbox--default .checkbox__box {
          background-color: var(--local-surface-inactive-default);
          border-color: var(--local-border-primary);
        }

        .checkbox--default .checkbox__input:checked + .checkbox__box,
        .checkbox--default .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-default);
          border-color: var(--local-border-primary);
        }

        .checkbox--default .checkbox__label {
          color: var(--local-text-neutral-hard);
        }

        .checkbox--default .checkbox__input:focus-visible + .checkbox__box {
          outline: 2px solid var(--local-focus-primary);
          outline-offset: 2px;
        }

        /* ===== ERROR STATE ===== */
        .checkbox--error .checkbox__box {
          background-color: var(--local-surface-inactive-error);
          border-color: var(--local-border-error);
        }

        .checkbox--error .checkbox__input:checked + .checkbox__box,
        .checkbox--error .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-error);
          border-color: var(--local-border-error);
        }

        .checkbox--error .checkbox__label {
          color: var(--local-text-error);
        }

        .checkbox--error .checkbox__input:focus-visible + .checkbox__box {
          outline: 2px solid var(--local-focus-error);
          outline-offset: 2px;
        }

        /* ===== READONLY STATE ===== */
        .checkbox--readonly .checkbox__box {
          background-color: var(--local-surface-inactive-readonly);
          border-color: var(--local-border-default);
        }

        .checkbox--readonly .checkbox__input:checked + .checkbox__box,
        .checkbox--readonly .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-readonly);
          border-color: var(--local-border-default);
        }

        .checkbox--readonly .checkbox__label {
          color: var(--local-text-neutral-hard);
        }

        /* ===== DISABLED STATE ===== */
        .checkbox--disabled .checkbox__box {
          background-color: var(--local-surface-inactive-disabled);
          border-color: var(--local-border-disabled);
        }

        .checkbox--disabled .checkbox__input:checked + .checkbox__box,
        .checkbox--disabled .checkbox__input[aria-checked="mixed"] + .checkbox__box {
          background-color: var(--local-surface-active-disabled);
          border-color: var(--local-border-disabled);
        }

        .checkbox--disabled .checkbox__label {
          color: var(--local-text-disabled);
        }

        /* ===== ICON STYLING ===== */
        .checkbox__icon {
          color: var(--local-icon-color);
          display: block;
        }

        /* ===== LABEL ===== */
        .checkbox__label {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0;
        }

        /* Hide icon when unchecked */
        .checkbox__input:not(:checked):not([aria-checked="mixed"]) ~ .checkbox__box .checkbox__icon {
          display: none;
        }
      </style>

      <label class="checkbox ${c}">
        <span class="checkbox__wrapper">
          <input 
            type="checkbox"
            class="checkbox__input"
            ${e?"checked":""}
            ${a?"disabled":""}
            ${o?"disabled":""}
            ${i?`value="${i}"`:""}
            ${d?`name="${d}"`:""}
            aria-checked="${p}"
            role="checkbox"
          />
          <span class="checkbox__box">
            ${l}
          </span>
        </span>
        ${s?`<span class="checkbox__label">${s}</span>`:""}
      </label>
    `,this.attachEventListeners();const m=this.shadowRoot.querySelector(".checkbox__input");m&&(m.indeterminate=r),this._isRendering=!1}}customElements.get("atlas-checkbox")||customElements.define("atlas-checkbox",$e);const Pe={title:"Components/Atlas Checkbox",tags:["autodocs"],render:t=>{const e=document.createElement("atlas-checkbox");return t.label&&e.setAttribute("label",t.label),t.value&&e.setAttribute("value",t.value),t.name&&e.setAttribute("name",t.name),t.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),t.indeterminate?e.setAttribute("indeterminate",""):e.removeAttribute("indeterminate"),t.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"),t.error?e.setAttribute("error",""):e.removeAttribute("error"),t.readonly?e.setAttribute("readonly",""):e.removeAttribute("readonly"),t.ariaLabel&&e.setAttribute("aria-label",t.ariaLabel),e.addEventListener("change",t.onChange),e},argTypes:{label:{control:"text",description:"Texto do label ao lado do checkbox",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},value:{control:"text",description:"Valor do checkbox (usado em formulários)",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},name:{control:"text",description:"Nome do campo (usado em formulários)",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},checked:{control:"boolean",description:"Define se o checkbox está marcado",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Estado indeterminado (seleção parcial). Usado quando um grupo tem apenas alguns itens selecionados.",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Desabilita completamente a interação com o checkbox",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},error:{control:"boolean",description:"Aplica estilo visual de erro (vermelho)",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},readonly:{control:"boolean",description:"Modo somente leitura (não editável, mas visualmente normal)",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},ariaLabel:{control:"text",description:"Label de acessibilidade para leitores de tela. Use quando o checkbox não tem label visual ou precisa de contexto adicional.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},onChange:{action:"change",description:"Evento disparado quando o estado do checkbox muda. Retorna `{checked, value, name}` no detail.",table:{category:"Actions",type:{summary:"CustomEvent<{checked: boolean, value: string, name: string}>"}}}},args:{label:"Aceito os termos e condições",value:"",name:"",checked:!1,indeterminate:!1,disabled:!1,error:!1,readonly:!1,ariaLabel:""},parameters:{docs:{description:{component:`# Atlas Checkbox

Checkbox interativo com suporte a múltiplos estados e acessibilidade completa.

## Estados Suportados
- **Visual**: default, error, readonly, disabled
- **Checked**: unchecked, checked, indeterminate

## Status: Stable ✅`}}}},u={},x={args:{label:"Checkbox marcado",checked:!0}},h={args:{label:"Seleção parcial (indeterminate)",indeterminate:!0},parameters:{docs:{description:{story:'Use o estado `indeterminate` para representar seleção parcial em grupos. Comum em cenários de "Selecionar tudo" onde apenas alguns itens estão selecionados.'}}}},k={args:{label:"Você deve aceitar os termos",error:!0},parameters:{docs:{description:{story:"Estado de erro aplicado quando o checkbox falha em validações de formulário. Combine com `atlas-helper-text` para mensagens de erro."}}}},f={args:{label:"Checkbox desabilitado",disabled:!0}},E={args:{label:"Checkbox desabilitado (checked)",checked:!0,disabled:!0}},g={args:{label:"Somente leitura",checked:!0,readonly:!0},parameters:{docs:{description:{story:"Use `readonly` quando precisar exibir um checkbox que não deve ser editado, mas mantém aparência normal (diferente de disabled)."}}}},v={args:{label:"",ariaLabel:"Marcar este item como concluído"},parameters:{docs:{description:{story:"⚠️ **Importante**: Quando não há label visual, o `aria-label` é **obrigatório** para acessibilidade."}}}},y={render:()=>{const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 12px;";const e=document.createElement("h4");e.textContent="Selecione suas preferências:",e.style.cssText='margin: 0 0 8px 0; font-family: "Open Sans", sans-serif;';const r=[{label:"Notificações por email",value:"email",name:"preferences"},{label:"Notificações push",value:"push",name:"preferences"},{label:"Newsletter semanal",value:"newsletter",name:"preferences"}];return t.appendChild(e),r.forEach(a=>{const n=document.createElement("atlas-checkbox");n.setAttribute("label",a.label),n.setAttribute("value",a.value),n.setAttribute("name",a.name),t.appendChild(n)}),t},parameters:{controls:{disable:!0},docs:{description:{story:"Use `name` e `value` para integração com FormData. Checkboxes com mesmo `name` formam um grupo."}}}},C={render:()=>{const t=document.createElement("div");t.style.cssText='display: flex; flex-direction: column; gap: 12px; font-family: "Open Sans", sans-serif;';const e=document.createElement("atlas-checkbox");e.setAttribute("label","Selecionar todos"),e.style.cssText="font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #D1D6DC;";const a=[{label:"Item 1",id:"item1"},{label:"Item 2",id:"item2"},{label:"Item 3",id:"item3"}].map(o=>{const s=document.createElement("atlas-checkbox");return s.setAttribute("label",o.label),s.setAttribute("value",o.id),s.style.cssText="padding-left: 24px;",s}),n=()=>{const o=a.filter(s=>s.checked).length;o===0?(e.checked=!1,e.indeterminate=!1):o===a.length?(e.checked=!0,e.indeterminate=!1):(e.checked=!1,e.indeterminate=!0)};return e.addEventListener("change",o=>{a.forEach(s=>{s.checked=o.detail.checked})}),a.forEach(o=>{o.addEventListener("change",n)}),t.appendChild(e),a.forEach(o=>t.appendChild(o)),t},parameters:{controls:{disable:!0},docs:{description:{story:'Pattern comum de "Selecionar todos" usando estado `indeterminate` para indicar seleção parcial.'}}}},A={args:{label:"Lembrar login",ariaLabel:"Manter-me conectado neste dispositivo por 30 dias"},parameters:{docs:{description:{story:"Use `aria-label` para fornecer contexto adicional aos leitores de tela. O label visual pode ser curto, mas o aria-label pode ser mais descritivo."}}}},_={render:()=>{const t=document.createElement("div");t.style.cssText='display: flex; flex-direction: column; gap: 16px; font-family: "Open Sans", sans-serif;';const e=document.createElement("div");return e.style.cssText="padding: 16px; background: #E8F4FD; border-radius: 8px; margin-bottom: 8px;",e.innerHTML=`
      <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0030B9;">⌨️ Navegação por Teclado</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
        <li><kbd>Tab</kbd> - Navegar entre checkboxes</li>
        <li><kbd>Space</kbd> - Marcar/desmarcar checkbox focado</li>
        <li><kbd>Shift + Tab</kbd> - Navegação reversa</li>
      </ul>
    `,[{label:"Checkbox Default",state:"default"},{label:"Checkbox Error",state:"error"},{label:"Checkbox Disabled (não focável)",state:"disabled"}].forEach(({label:a,state:n})=>{const o=document.createElement("atlas-checkbox");o.setAttribute("label",a),n==="error"&&o.setAttribute("error",""),n==="disabled"&&o.setAttribute("disabled",""),t.appendChild(o)}),t.insertBefore(e,t.firstChild),t},parameters:{controls:{disable:!0},docs:{description:{story:"O checkbox possui suporte completo para navegação por teclado e estados de foco visíveis (outline azul ou vermelho conforme o estado)."}}}},S={render:()=>{const t=document.createElement("div");t.style.cssText='display: flex; flex-direction: column; gap: 24px; font-family: "Open Sans", sans-serif;';const e=document.createElement("div");e.style.cssText="padding: 20px; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px;",e.innerHTML=`
      <h4 style="margin: 0 0 16px 0; color: #2E7D32; font-size: 18px;">✅ FAÇA</h4>
    `;const r=document.createElement("div");r.style.cssText="margin-bottom: 16px;",r.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">Use labels descritivos e claros:</p>';const a=document.createElement("atlas-checkbox");a.setAttribute("label","Concordo com os termos de uso e política de privacidade"),r.appendChild(a);const n=document.createElement("div");n.style.cssText="margin-bottom: 16px;",n.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">Use aria-label quando não há label visual:</p>';const o=document.createElement("atlas-checkbox");o.setAttribute("ariaLabel","Marcar tarefa como concluída"),n.appendChild(o);const s=document.createElement("div");s.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">Use error state com mensagens claras:</p>';const i=document.createElement("atlas-checkbox");i.setAttribute("label","Li e aceito os termos"),i.setAttribute("error",""),s.appendChild(i);const d=document.createElement("p");d.style.cssText="margin: 4px 0 0 28px; color: #B02A37; font-size: 14px;",d.textContent="⚠️ Este campo é obrigatório",s.appendChild(d),e.appendChild(r),e.appendChild(n),e.appendChild(s);const c=document.createElement("div");c.style.cssText="padding: 20px; background: #FFEBEE; border-left: 4px solid #F44336; border-radius: 4px;",c.innerHTML=`
      <h4 style="margin: 0 0 16px 0; color: #C62828; font-size: 18px;">❌ NÃO FAÇA</h4>
    `;const l=document.createElement("div");l.style.cssText="margin-bottom: 16px;",l.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Labels vagos ou genéricos:</p>';const p=document.createElement("atlas-checkbox");p.setAttribute("label","Clique aqui"),l.appendChild(p);const m=document.createElement("p");m.style.cssText="margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;",m.textContent="Não comunica o que está sendo aceito",l.appendChild(m);const b=document.createElement("div");b.style.cssText="margin-bottom: 16px;",b.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Checkbox sem label E sem aria-label:</p>';const Ve=document.createElement("atlas-checkbox");b.appendChild(Ve);const L=document.createElement("p");L.style.cssText="margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;",L.textContent="Inacessível para leitores de tela",b.appendChild(L);const T=document.createElement("div");T.innerHTML='<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Usar disabled quando deveria ser readonly:</p>';const D=document.createElement("atlas-checkbox");D.setAttribute("label","Configuração pré-definida"),D.setAttribute("disabled",""),D.setAttribute("checked",""),T.appendChild(D);const F=document.createElement("p");return F.style.cssText="margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;",F.textContent='Disabled sugere "não disponível", use readonly para "visível mas não editável"',T.appendChild(F),c.appendChild(l),c.appendChild(b),c.appendChild(T),t.appendChild(e),t.appendChild(c),t},parameters:{controls:{disable:!0},docs:{description:{story:"Guia visual de boas práticas e anti-patterns de acessibilidade para checkboxes."}}}};var w,M,q,O,H;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Story padrão para testar todas as propriedades interativamente.",...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.description}}};var B,N,z,U,I;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox marcado',
    checked: true
  }
}`,...(z=(N=x.parameters)==null?void 0:N.docs)==null?void 0:z.source},description:{story:"Checkbox marcado (checked).",...(I=(U=x.parameters)==null?void 0:U.docs)==null?void 0:I.description}}};var R,V,$,P,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Seleção parcial (indeterminate)',
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use o estado \`indeterminate\` para representar seleção parcial em grupos. Comum em cenários de "Selecionar tudo" onde apenas alguns itens estão selecionados.'
      }
    }
  }
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:`Estado indeterminado, usado quando um grupo tem seleção parcial.
Exemplo: Checkbox "Selecionar tudo" quando apenas alguns itens estão marcados.`,...(G=(P=h.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};var W,j,Q,Y,Z;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Você deve aceitar os termos',
    error: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado de erro aplicado quando o checkbox falha em validações de formulário. Combine com \`atlas-helper-text\` para mensagens de erro.'
      }
    }
  }
}`,...(Q=(j=k.parameters)==null?void 0:j.docs)==null?void 0:Q.source},description:{story:`Checkbox com estilo de erro (border vermelha).
Use em validações de formulário.`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var J,K,X,ee,te;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox desabilitado',
    disabled: true
  }
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Checkbox desabilitado (não interativo).",...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,oe,re,ne,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox desabilitado (checked)',
    checked: true,
    disabled: true
  }
}`,...(re=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Checkbox desabilitado no estado checked.",...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ce,le,ie,de,pe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Somente leitura',
    checked: true,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`readonly\` quando precisar exibir um checkbox que não deve ser editado, mas mantém aparência normal (diferente de disabled).'
      }
    }
  }
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source},description:{story:`Checkbox em modo somente leitura.
Visualmente normal mas não permite interação.`,...(pe=(de=g.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var me,be,ue,xe,he;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: '',
    ariaLabel: 'Marcar este item como concluído'
  },
  parameters: {
    docs: {
      description: {
        story: '⚠️ **Importante**: Quando não há label visual, o \`aria-label\` é **obrigatório** para acessibilidade.'
      }
    }
  }
}`,...(ue=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ue.source},description:{story:`Checkbox sem label visual.
OBRIGATÓRIO usar aria-label para acessibilidade.`,...(he=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};var ke,fe,Ee,ge,ve;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    const title = document.createElement('h4');
    title.textContent = 'Selecione suas preferências:';
    title.style.cssText = 'margin: 0 0 8px 0; font-family: "Open Sans", sans-serif;';
    const options = [{
      label: 'Notificações por email',
      value: 'email',
      name: 'preferences'
    }, {
      label: 'Notificações push',
      value: 'push',
      name: 'preferences'
    }, {
      label: 'Newsletter semanal',
      value: 'newsletter',
      name: 'preferences'
    }];
    container.appendChild(title);
    options.forEach(opt => {
      const checkbox = document.createElement('atlas-checkbox');
      checkbox.setAttribute('label', opt.label);
      checkbox.setAttribute('value', opt.value);
      checkbox.setAttribute('name', opt.name);
      container.appendChild(checkbox);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Use \`name\` e \`value\` para integração com FormData. Checkboxes com mesmo \`name\` formam um grupo.'
      }
    }
  }
}`,...(Ee=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source},description:{story:"Exemplo de grupo de checkboxes com FormData.",...(ve=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var ye,Ce,Ae,_e,Se;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px; font-family: "Open Sans", sans-serif;';
    const selectAll = document.createElement('atlas-checkbox');
    selectAll.setAttribute('label', 'Selecionar todos');
    selectAll.style.cssText = 'font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #D1D6DC;';
    const items = [{
      label: 'Item 1',
      id: 'item1'
    }, {
      label: 'Item 2',
      id: 'item2'
    }, {
      label: 'Item 3',
      id: 'item3'
    }];
    const checkboxes = items.map(item => {
      const cb = document.createElement('atlas-checkbox');
      cb.setAttribute('label', item.label);
      cb.setAttribute('value', item.id);
      cb.style.cssText = 'padding-left: 24px;';
      return cb;
    });

    // Lógica de "Select All"
    const updateSelectAll = () => {
      const checkedCount = checkboxes.filter(cb => cb.checked).length;
      if (checkedCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
      } else if (checkedCount === checkboxes.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
      } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
      }
    };
    selectAll.addEventListener('change', e => {
      checkboxes.forEach(cb => {
        cb.checked = e.detail.checked;
      });
    });
    checkboxes.forEach(cb => {
      cb.addEventListener('change', updateSelectAll);
    });
    container.appendChild(selectAll);
    checkboxes.forEach(cb => container.appendChild(cb));
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Pattern comum de "Selecionar todos" usando estado \`indeterminate\` para indicar seleção parcial.'
      }
    }
  }
}`,...(Ae=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source},description:{story:'Demonstração de "Select All" com indeterminate.',...(Se=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:Se.description}}};var Te,De,Le,Fe,we;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Lembrar login',
    ariaLabel: 'Manter-me conectado neste dispositivo por 30 dias'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`aria-label\` para fornecer contexto adicional aos leitores de tela. O label visual pode ser curto, mas o aria-label pode ser mais descritivo.'
      }
    }
  }
}`,...(Le=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Le.source},description:{story:"Demonstração de uso de aria-label.",...(we=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:we.description}}};var Me,qe,Oe,He,Be;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; font-family: "Open Sans", sans-serif;';
    const instructions = document.createElement('div');
    instructions.style.cssText = 'padding: 16px; background: #E8F4FD; border-radius: 8px; margin-bottom: 8px;';
    instructions.innerHTML = \`
      <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0030B9;">⌨️ Navegação por Teclado</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
        <li><kbd>Tab</kbd> - Navegar entre checkboxes</li>
        <li><kbd>Space</kbd> - Marcar/desmarcar checkbox focado</li>
        <li><kbd>Shift + Tab</kbd> - Navegação reversa</li>
      </ul>
    \`;
    const states = [{
      label: 'Checkbox Default',
      state: 'default'
    }, {
      label: 'Checkbox Error',
      state: 'error'
    }, {
      label: 'Checkbox Disabled (não focável)',
      state: 'disabled'
    }];
    states.forEach(({
      label,
      state
    }) => {
      const checkbox = document.createElement('atlas-checkbox');
      checkbox.setAttribute('label', label);
      if (state === 'error') checkbox.setAttribute('error', '');
      if (state === 'disabled') checkbox.setAttribute('disabled', '');
      container.appendChild(checkbox);
    });
    container.insertBefore(instructions, container.firstChild);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'O checkbox possui suporte completo para navegação por teclado e estados de foco visíveis (outline azul ou vermelho conforme o estado).'
      }
    }
  }
}`,...(Oe=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source},description:{story:"Demonstração de navegação por teclado e estados de foco.",...(Be=(He=_.parameters)==null?void 0:He.docs)==null?void 0:Be.description}}};var Ne,ze,Ue,Ie,Re;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; font-family: "Open Sans", sans-serif;';

    // Seção DO ✅
    const doSection = document.createElement('div');
    doSection.style.cssText = 'padding: 20px; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px;';
    doSection.innerHTML = \`
      <h4 style="margin: 0 0 16px 0; color: #2E7D32; font-size: 18px;">✅ FAÇA</h4>
    \`;
    const doExample1 = document.createElement('div');
    doExample1.style.cssText = 'margin-bottom: 16px;';
    doExample1.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use labels descritivos e claros:</p>';
    const doCheckbox1 = document.createElement('atlas-checkbox');
    doCheckbox1.setAttribute('label', 'Concordo com os termos de uso e política de privacidade');
    doExample1.appendChild(doCheckbox1);
    const doExample2 = document.createElement('div');
    doExample2.style.cssText = 'margin-bottom: 16px;';
    doExample2.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use aria-label quando não há label visual:</p>';
    const doCheckbox2 = document.createElement('atlas-checkbox');
    doCheckbox2.setAttribute('ariaLabel', 'Marcar tarefa como concluída');
    doExample2.appendChild(doCheckbox2);
    const doExample3 = document.createElement('div');
    doExample3.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use error state com mensagens claras:</p>';
    const doCheckbox3 = document.createElement('atlas-checkbox');
    doCheckbox3.setAttribute('label', 'Li e aceito os termos');
    doCheckbox3.setAttribute('error', '');
    doExample3.appendChild(doCheckbox3);
    const errorMsg = document.createElement('p');
    errorMsg.style.cssText = 'margin: 4px 0 0 28px; color: #B02A37; font-size: 14px;';
    errorMsg.textContent = '⚠️ Este campo é obrigatório';
    doExample3.appendChild(errorMsg);
    doSection.appendChild(doExample1);
    doSection.appendChild(doExample2);
    doSection.appendChild(doExample3);

    // Seção DON'T ❌
    const dontSection = document.createElement('div');
    dontSection.style.cssText = 'padding: 20px; background: #FFEBEE; border-left: 4px solid #F44336; border-radius: 4px;';
    dontSection.innerHTML = \`
      <h4 style="margin: 0 0 16px 0; color: #C62828; font-size: 18px;">❌ NÃO FAÇA</h4>
    \`;
    const dontExample1 = document.createElement('div');
    dontExample1.style.cssText = 'margin-bottom: 16px;';
    dontExample1.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Labels vagos ou genéricos:</p>';
    const dontCheckbox1 = document.createElement('atlas-checkbox');
    dontCheckbox1.setAttribute('label', 'Clique aqui');
    dontExample1.appendChild(dontCheckbox1);
    const hint1 = document.createElement('p');
    hint1.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint1.textContent = 'Não comunica o que está sendo aceito';
    dontExample1.appendChild(hint1);
    const dontExample2 = document.createElement('div');
    dontExample2.style.cssText = 'margin-bottom: 16px;';
    dontExample2.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Checkbox sem label E sem aria-label:</p>';
    const dontCheckbox2 = document.createElement('atlas-checkbox');
    dontExample2.appendChild(dontCheckbox2);
    const hint2 = document.createElement('p');
    hint2.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint2.textContent = 'Inacessível para leitores de tela';
    dontExample2.appendChild(hint2);
    const dontExample3 = document.createElement('div');
    dontExample3.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Usar disabled quando deveria ser readonly:</p>';
    const dontCheckbox3 = document.createElement('atlas-checkbox');
    dontCheckbox3.setAttribute('label', 'Configuração pré-definida');
    dontCheckbox3.setAttribute('disabled', '');
    dontCheckbox3.setAttribute('checked', '');
    dontExample3.appendChild(dontCheckbox3);
    const hint3 = document.createElement('p');
    hint3.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint3.textContent = 'Disabled sugere "não disponível", use readonly para "visível mas não editável"';
    dontExample3.appendChild(hint3);
    dontSection.appendChild(dontExample1);
    dontSection.appendChild(dontExample2);
    dontSection.appendChild(dontExample3);
    container.appendChild(doSection);
    container.appendChild(dontSection);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Guia visual de boas práticas e anti-patterns de acessibilidade para checkboxes.'
      }
    }
  }
}`,...(Ue=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source},description:{story:"Guia visual de boas práticas de acessibilidade.",...(Re=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Re.description}}};const Ge=["Playground","Checked","Indeterminate","ErrorState","Disabled","DisabledChecked","Readonly","WithoutVisualLabel","FormGroup","SelectAllPattern","WithAriaLabel","FocusStates","AccessibilityBestPractices"];export{S as AccessibilityBestPractices,x as Checked,f as Disabled,E as DisabledChecked,k as ErrorState,_ as FocusStates,y as FormGroup,h as Indeterminate,u as Playground,g as Readonly,C as SelectAllPattern,A as WithAriaLabel,v as WithoutVisualLabel,Ge as __namedExportsOrder,Pe as default};
