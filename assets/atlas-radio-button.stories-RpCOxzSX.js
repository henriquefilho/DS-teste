const se=document.createElement("template");se.innerHTML=`
  <style>
    :host {
      display: inline-flex;
      align-items: center;
      --radio-size: 24px;
      --dot-size: 12px;
      --gap: var(--atlas-gap-xs, 8px);
      --border-width: var(--atlas-border-solid-default, 1px);
      --border-radius: 50%;
      --font-family: var(--atlas-font-face-general, 'Open Sans');
      --font-size: var(--atlas-typescale-label-inline-md-size, 16px);
      --font-weight: var(--atlas-typescale-label-inline-md-weight-default, 400);
      --line-height: 1;
      --label-color: var(--atlas-color-text-static-neutral-hard, #1d2125);
      --border-color: var(--atlas-color-border-primary-hard, #0030b9);
      --background: var(--atlas-color-surface-control-inactive-default, #fcfcfd);
      --dot-color: var(--atlas-color-border-primary-hard, #0030b9);
      --focus-outline: 0 0 0 var(--atlas-focus-outline-size, 2px) var(--atlas-focus-outline-color, #3359c7);
      cursor: pointer;
    }
    :host([state="error"]) {
      --border-color: var(--atlas-color-border-error-hard, #b02a37);
      --label-color: var(--atlas-color-text-static-error-medium, #b02a37);
      --dot-color: var(--atlas-color-border-error-hard, #b02a37);
    }
    :host([state="read-only"]) {
      --border-color: var(--atlas-color-border-default, #d1d6dc);
      --dot-color: var(--atlas-color-border-default, #d1d6dc);
      cursor: default;
    }
    :host([state="disabled"]) {
      --border-color: var(--atlas-color-border-disabled, #d1d6dc);
      --label-color: var(--atlas-color-text-static-disabled-level-1, #d1d6dc);
      --dot-color: var(--atlas-color-border-disabled, #d1d6dc);
      cursor: not-allowed;
      opacity: 1;
    }
    .container {
      display: inline-flex;
      align-items: center;
      gap: var(--gap);
    }
    .radio {
      width: var(--radio-size);
      height: var(--radio-size);
      border-radius: var(--border-radius);
      border: var(--border-width) solid var(--border-color);
      background: var(--background);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: inherit;
    }
    .dot {
      width: var(--dot-size);
      height: var(--dot-size);
      border-radius: 50%;
      background: var(--dot-color);
      display: none;
      pointer-events: none;
    }
    :host([checked]) .dot {
      display: block;
    }
    .label {
      font-family: var(--font-family);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      line-height: var(--line-height);
      letter-spacing: var(--atlas-typescale-label-inline-md-letter-spacing, 0px);
      color: var(--label-color);
      user-select: none;
    }
    :host(:focus-visible) .radio {
      box-shadow: var(--focus-outline);
      outline: none;
    }
  </style>
  <span class="container">
    <span class="radio">
      <input type="radio" />
      <span class="dot"></span>
    </span>
    <span class="label"></span>
  </span>
`;class ne extends HTMLElement{static get observedAttributes(){return["checked","state","label","name","value","disabled","read-only"]}constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(se.content.cloneNode(!0)),this._input=this.shadowRoot.querySelector('input[type="radio"]'),this._label=this.shadowRoot.querySelector(".label"),this._container=this.shadowRoot.querySelector(".container"),this._radio=this.shadowRoot.querySelector(".radio")}connectedCallback(){this._upgradeProperty("checked"),this._upgradeProperty("state"),this._upgradeProperty("label"),this._upgradeProperty("name"),this._upgradeProperty("value"),this._render(),this._input.addEventListener("change",this._onChange.bind(this)),this._input.addEventListener("focus",()=>this._radio.classList.add("focus")),this._input.addEventListener("blur",()=>this._radio.classList.remove("focus")),this._container.addEventListener("click",this._onClick.bind(this))}disconnectedCallback(){this._input.removeEventListener("change",this._onChange),this._container.removeEventListener("click",this._onClick)}attributeChangedCallback(t,o,r){this._render()}_upgradeProperty(t){if(this.hasOwnProperty(t)){let o=this[t];delete this[t],this[t]=o}}_onClick(t){if(this.state==="disabled"||this.state==="read-only"){t.preventDefault();return}this.checked||(this._uncheckSiblings(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})))}_uncheckSiblings(){if(!this.name)return;const t=this.getRootNode();(t.querySelectorAll?t.querySelectorAll(`atlas-radio-button[name="${this.name}"]`):document.querySelectorAll(`atlas-radio-button[name="${this.name}"]`)).forEach(r=>{r!==this&&r.checked&&(r.removeAttribute("checked"),r._render())})}_onChange(t){if(this.state==="disabled"||this.state==="read-only"){t.preventDefault();return}this.checked=this._input.checked,this.dispatchEvent(new Event("change",{bubbles:!0}))}_render(){this._input.checked=this.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.state==="disabled"?this._input.disabled=!0:this._input.disabled=!1,this.name&&(this._input.name=this.name),this.value&&(this._input.value=this.value),this._label.textContent=this.label||"",this.setAttribute("role","radio"),this.setAttribute("tabindex",this.state==="disabled"?"-1":"0"),this.setAttribute("aria-checked",this.checked?"true":"false"),this.state==="disabled"?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}get checked(){return this.hasAttribute("checked")}set checked(t){t||t===""?this.setAttribute("checked",""):this.removeAttribute("checked"),this._render()}get state(){return this.getAttribute("state")||"default"}set state(t){this.setAttribute("state",t),this._render()}get label(){return this.getAttribute("label")||""}set label(t){this.setAttribute("label",t),this._render()}get name(){return this.getAttribute("name")||""}set name(t){this.setAttribute("name",t),this._render()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t),this._render()}}customElements.define("atlas-radio-button",ne);const ie={title:"Components/Atlas Radio Button",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-radio-button");return e.label&&t.setAttribute("label",e.label),e.value&&t.setAttribute("value",e.value),e.name&&t.setAttribute("name",e.name),e.checked?t.setAttribute("checked",""):t.removeAttribute("checked"),e.state&&e.state!=="default"&&t.setAttribute("state",e.state),e.ariaLabel&&t.setAttribute("aria-label",e.ariaLabel),e.onChange&&t.addEventListener("change",e.onChange),t},argTypes:{label:{control:"text",description:"Texto da label ao lado do radio button",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},value:{control:"text",description:"Valor do radio (usado em formulários)",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},name:{control:"text",description:"Nome do grupo de radios (usado em formulários para agrupamento)",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:'""'}}},checked:{control:"boolean",description:"Define se o radio está selecionado",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},state:{control:"select",options:["default","error","read-only","disabled"],description:"Estado visual do radio: default (interativo), error (erro de validação), read-only (apenas leitura), disabled (desabilitado)",table:{category:"Status",type:{summary:"'default' | 'error' | 'read-only' | 'disabled'"},defaultValue:{summary:"default"}}},ariaLabel:{control:"text",description:"Label de acessibilidade para leitores de tela. Use quando o radio não tem label visual ou precisa de contexto adicional.",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},onChange:{action:"changed",description:"Evento disparado quando o estado checked muda",table:{category:"Actions"}}},args:{label:"Opção 1",value:"opcao1",name:"grupo-radio",checked:!1,state:"default",ariaLabel:""},parameters:{docs:{description:{component:`Radio button para seleção única em grupos, com suporte a múltiplos estados e acessibilidade.

## Estados Suportados
- **Visual**: default, error, read-only, disabled
- **Checked**: unchecked, checked

## Status: Stable`}}}},n={},i={args:{label:"Selecionado",checked:!0}},l={args:{label:"Campo obrigatório",state:"error"}},d={args:{label:"Selecionado com erro",state:"error",checked:!0}},c={args:{label:"Apenas leitura",state:"read-only"}},u={args:{label:"Apenas leitura (selecionado)",state:"read-only",checked:!0}},p={args:{label:"Desabilitado",state:"disabled"}},b={args:{label:"Desabilitado (selecionado)",state:"disabled",checked:!0}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.padding="16px",[{label:"Default",state:"default",checked:!1},{label:"Default (checked)",state:"default",checked:!0},{label:"Error",state:"error",checked:!1},{label:"Error (checked)",state:"error",checked:!0},{label:"Read-only",state:"read-only",checked:!1},{label:"Read-only (checked)",state:"read-only",checked:!0},{label:"Disabled",state:"disabled",checked:!1},{label:"Disabled (checked)",state:"disabled",checked:!0}].forEach(({label:o,state:r,checked:a})=>{const s=document.createElement("atlas-radio-button");s.setAttribute("label",o),s.setAttribute("state",r),a&&s.setAttribute("checked",""),e.appendChild(s)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Visão geral de todas as combinações de estado e seleção do radio button."}}}},h={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px",e.style.padding="16px",["Opção A","Opção B","Opção C"].forEach((o,r)=>{const a=document.createElement("atlas-radio-button");a.setAttribute("label",o),a.setAttribute("name","demo-group"),a.setAttribute("value",`opt${r+1}`),r===0&&a.setAttribute("checked",""),e.appendChild(a)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de grupo de radio buttons com seleção única. Apenas um item pode ser selecionado por vez."}}}},f={args:{label:"Sim",ariaLabel:"Selecionar opção Sim para confirmar a ação"},parameters:{docs:{description:{story:"Use `aria-label` para fornecer contexto adicional aos leitores de tela quando a label visual não é suficiente."}}}},y={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.padding="16px";const t=document.createElement("p");return t.style.cssText="margin:0 0 8px;font-family:sans-serif;font-size:14px;color:#555;",t.textContent="Use Tab para navegar entre os radio buttons e verifique o anel de foco azul.",e.appendChild(t),["Primeiro","Segundo","Terceiro"].forEach((o,r)=>{const a=document.createElement("atlas-radio-button");a.setAttribute("label",o),a.setAttribute("name","focus-demo"),a.setAttribute("value",String(r+1)),e.appendChild(a)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de navegação por teclado (Tab) e estados de foco (:focus-visible) do radio button."}}}},g={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.padding="16px",e.style.fontFamily="sans-serif";const t=document.createElement("div");t.style.cssText="background:#e6f7ff;padding:16px;border-radius:8px;",t.innerHTML='<strong style="color:#0030b9;">&#10004; Correto</strong><br><br>';const o=document.createElement("atlas-radio-button");o.setAttribute("label","Aceito os termos"),o.setAttribute("aria-label","Aceito os termos de uso e a política de privacidade"),t.appendChild(o);const r=document.createElement("p");r.style.cssText="margin:8px 0 0;font-size:13px;color:#333;",r.textContent="Usa label visível + aria-label com contexto expandido.",t.appendChild(r),e.appendChild(t);const a=document.createElement("div");a.style.cssText="background:#fff0f0;padding:16px;border-radius:8px;",a.innerHTML='<strong style="color:#b02a37;">&#10008; Evite</strong><br><br>';const s=document.createElement("atlas-radio-button");s.setAttribute("label",""),a.appendChild(s);const x=document.createElement("p");return x.style.cssText="margin:8px 0 0;font-size:13px;color:#333;",x.textContent="Radio sem label e sem aria-label: inacessível para leitores de tela.",a.appendChild(x),e.appendChild(a),e},parameters:{controls:{disable:!0},docs:{description:{story:"Guia visual de boas práticas de acessibilidade para o radio button."}}}};var v,k,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,C,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Selecionado',
    checked: true
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var _,D,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Campo obrigatório',
    state: 'error'
  }
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var T,z,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Selecionado com erro',
    state: 'error',
    checked: true
  }
}`,...(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var w,O,q;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Apenas leitura',
    state: 'read-only'
  }
}`,...(q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var P,V,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Apenas leitura (selecionado)',
    state: 'read-only',
    checked: true
  }
}`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var B,U,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Desabilitado',
    state: 'disabled'
  }
}`,...(H=(U=p.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var M,G,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Desabilitado (selecionado)',
    state: 'disabled',
    checked: true
  }
}`,...($=(G=b.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var N,W,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '16px';
    const states = [{
      label: 'Default',
      state: 'default',
      checked: false
    }, {
      label: 'Default (checked)',
      state: 'default',
      checked: true
    }, {
      label: 'Error',
      state: 'error',
      checked: false
    }, {
      label: 'Error (checked)',
      state: 'error',
      checked: true
    }, {
      label: 'Read-only',
      state: 'read-only',
      checked: false
    }, {
      label: 'Read-only (checked)',
      state: 'read-only',
      checked: true
    }, {
      label: 'Disabled',
      state: 'disabled',
      checked: false
    }, {
      label: 'Disabled (checked)',
      state: 'disabled',
      checked: true
    }];
    states.forEach(({
      label,
      state,
      checked
    }) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('state', state);
      if (checked) radio.setAttribute('checked', '');
      container.appendChild(radio);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Visão geral de todas as combinações de estado e seleção do radio button.'
      }
    }
  }
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var I,J,K;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';
    container.style.padding = '16px';
    const options = ['Opção A', 'Opção B', 'Opção C'];
    options.forEach((label, i) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('name', 'demo-group');
      radio.setAttribute('value', \`opt\${i + 1}\`);
      if (i === 0) radio.setAttribute('checked', '');
      container.appendChild(radio);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplo de grupo de radio buttons com seleção única. Apenas um item pode ser selecionado por vez.'
      }
    }
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Sim',
    ariaLabel: 'Selecionar opção Sim para confirmar a ação'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`aria-label\` para fornecer contexto adicional aos leitores de tela quando a label visual não é suficiente.'
      }
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.padding = '16px';
    const info = document.createElement('p');
    info.style.cssText = 'margin:0 0 8px;font-family:sans-serif;font-size:14px;color:#555;';
    info.textContent = 'Use Tab para navegar entre os radio buttons e verifique o anel de foco azul.';
    container.appendChild(info);
    ['Primeiro', 'Segundo', 'Terceiro'].forEach((label, i) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('name', 'focus-demo');
      radio.setAttribute('value', String(i + 1));
      container.appendChild(radio);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado (Tab) e estados de foco (:focus-visible) do radio button.'
      }
    }
  }
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '16px';
    container.style.fontFamily = 'sans-serif';

    // Correto
    const good = document.createElement('div');
    good.style.cssText = 'background:#e6f7ff;padding:16px;border-radius:8px;';
    good.innerHTML = '<strong style="color:#0030b9;">&#10004; Correto</strong><br><br>';
    const r1 = document.createElement('atlas-radio-button');
    r1.setAttribute('label', 'Aceito os termos');
    r1.setAttribute('aria-label', 'Aceito os termos de uso e a política de privacidade');
    good.appendChild(r1);
    const desc1 = document.createElement('p');
    desc1.style.cssText = 'margin:8px 0 0;font-size:13px;color:#333;';
    desc1.textContent = 'Usa label visível + aria-label com contexto expandido.';
    good.appendChild(desc1);
    container.appendChild(good);

    // Errado
    const bad = document.createElement('div');
    bad.style.cssText = 'background:#fff0f0;padding:16px;border-radius:8px;';
    bad.innerHTML = '<strong style="color:#b02a37;">&#10008; Evite</strong><br><br>';
    const r2 = document.createElement('atlas-radio-button');
    r2.setAttribute('label', '');
    bad.appendChild(r2);
    const desc2 = document.createElement('p');
    desc2.style.cssText = 'margin:8px 0 0;font-size:13px;color:#333;';
    desc2.textContent = 'Radio sem label e sem aria-label: inacessível para leitores de tela.';
    bad.appendChild(desc2);
    container.appendChild(bad);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Guia visual de boas práticas de acessibilidade para o radio button.'
      }
    }
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const le=["Playground","Checked","ErrorState","ErrorChecked","ReadOnly","ReadOnlyChecked","Disabled","DisabledChecked","AllStates","RadioGroup","WithAriaLabel","FocusStates","AccessibilityBestPractices"];export{g as AccessibilityBestPractices,m as AllStates,i as Checked,p as Disabled,b as DisabledChecked,d as ErrorChecked,l as ErrorState,y as FocusStates,n as Playground,h as RadioGroup,c as ReadOnly,u as ReadOnlyChecked,f as WithAriaLabel,le as __namedExportsOrder,ie as default};
