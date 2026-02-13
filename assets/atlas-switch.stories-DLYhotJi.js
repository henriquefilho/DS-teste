import"./atlas-switch-B-gLJBPG.js";import"./atlas-icon-button-D_fTdWvm.js";import"./atlas-icon-B_0Pd0rQ.js";import"./atlas-popover-aZLGqesn.js";import"./atlas-button-CE0kwCcy.js";import"./atlas-link-button-C5n062qN.js";const pt={title:"Components/Atlas Switch",tags:["autodocs"],render:e=>{const o=document.createElement("atlas-switch");return o.setAttribute("label",e.label),e.description&&o.setAttribute("description",e.description),e.errorText&&o.setAttribute("error-text",e.errorText),o.setAttribute("alignment",e.alignment),e.strongLabel?o.setAttribute("strong-label",""):o.removeAttribute("strong-label"),e.hideLabel?o.setAttribute("hide-label",""):o.removeAttribute("hide-label"),e.iconPopover?o.setAttribute("icon-popover",""):o.removeAttribute("icon-popover"),e.iconPopoverName&&o.setAttribute("icon-popover-name",e.iconPopoverName),o.setAttribute("state",e.state),e.checked?o.setAttribute("checked",""):o.removeAttribute("checked"),o.addEventListener("change",i=>{e.onChange(i.detail)}),o},argTypes:{label:{control:"text",description:"Texto do label principal",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Label"}}},description:{control:"text",description:"Texto descritivo opcional abaixo do label",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:""}}},errorText:{control:"text",description:'Mensagem de erro exibida quando state="error"',table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Error text"}}},alignment:{control:"radio",options:["left","right"],description:"Posição do controle switch em relação ao conteúdo",table:{category:"Appearance",type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"}}},strongLabel:{control:"boolean",description:"Aplica font-weight semi-bold (600) no label",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},hideLabel:{control:"boolean",description:"Oculta o label, exibindo apenas o controle switch",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconPopover:{control:"boolean",description:"Exibe ícone de informação ao lado do label",table:{category:"Appearance",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconPopoverName:{control:"text",description:"Nome do ícone do popover (qualquer ícone válido do atlas-icon)",table:{category:"Appearance",type:{summary:"string"},defaultValue:{summary:"info"}},if:{arg:"iconPopover",truthy:!0}},state:{control:"select",options:["default","disabled","read-only","error"],description:"Estado do componente (define aparência e interatividade)",table:{category:"Status",type:{summary:"'default' | 'disabled' | 'read-only' | 'error'"},defaultValue:{summary:"default"}}},checked:{control:"boolean",description:"Estado ativo/inativo do switch",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onChange:{action:"changed",description:"Evento disparado quando o estado do switch muda",table:{category:"Actions",type:{summary:"(detail: { checked: boolean }) => void"}}}},args:{label:"Label",description:"",errorText:"Error text",alignment:"left",strongLabel:!1,hideLabel:!1,iconPopover:!1,iconPopoverName:"info",state:"default",checked:!1}},x={},g={args:{label:"Enable notifications",description:"Receive push notifications on your device",alignment:"left"},parameters:{docs:{description:{story:"Switch posicionado à esquerda do conteúdo (padrão)."}}}},v={args:{label:"Enable notifications",description:"Receive push notifications on your device",alignment:"right"},parameters:{docs:{description:{story:"Switch posicionado à direita do conteúdo."}}}},f={args:{label:"Marketing emails",strongLabel:!0,description:"Receive updates about new products and features"},parameters:{docs:{description:{story:"Label com font-weight semi-bold para dar mais destaque."}}}},y={args:{label:"Two-factor authentication",description:"Add an extra layer of security to your account by enabling 2FA",checked:!0},parameters:{docs:{description:{story:"Switch com texto descritivo explicativo."}}}},w={args:{label:"Privacy mode",description:"Your activity will not be visible to other users",iconPopover:!0},parameters:{docs:{description:{story:"Switch com ícone de informação para contexto adicional."}}}},E={args:{label:"Label oculto",hideLabel:!0,checked:!0},parameters:{docs:{description:{story:"Switch sem label, exibindo apenas o controle. Útil quando o contexto já deixa claro o que o switch controla."}}}},A={args:{label:"Label oculto",hideLabel:!0,checked:!1},parameters:{docs:{description:{story:"Switch sem label no estado desligado."}}}},k={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 500px; padding: 24px; position: relative;";const o=document.createElement("h3");o.textContent="Interactive Popover Demo",o.style.cssText="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;",e.appendChild(o);const i=document.createElement("p");i.textContent="Clique no ícone de informação ao lado do label para ver detalhes",i.style.cssText="margin: 0 0 16px 0; color: #5e6877; font-size: 14px;",e.appendChild(i);const a=document.createElement("atlas-switch");a.setAttribute("label","Data synchronization"),a.setAttribute("description","Sync your data across all devices"),a.setAttribute("icon-popover",""),a.setAttribute("icon-popover-name","info"),e.appendChild(a);const t=document.createElement("atlas-popover");t.setAttribute("title","About Data Sync"),t.setAttribute("text","When enabled, your data will be automatically synchronized across all your devices in real-time. This includes preferences, settings, and user data."),t.setAttribute("arrow","top-left"),t.setAttribute("action-type","link"),t.setAttribute("action-label","Learn more"),t.setAttribute("closable",""),t.style.cssText="position: absolute; z-index: 9999; max-width: 400px;",e.appendChild(t);let s=!1;e.addEventListener("click",r=>{const l=r.composedPath().find(n=>n.tagName==="ATLAS-ICON-BUTTON");if(l){if(r.stopPropagation(),r.preventDefault(),s=!0,t.hasAttribute("open"))t.removeAttribute("open"),console.log("Popover closed");else{const n=l.getBoundingClientRect(),d=e.getBoundingClientRect();t.style.top=`${n.bottom-d.top+8}px`,t.style.left=`${n.left-d.left}px`,t.setAttribute("open",""),console.log("Popover opened at:",n)}setTimeout(()=>{s=!1},100)}}),t.addEventListener("close",()=>{t.removeAttribute("open"),console.log("Popover closed via X button")});const m=r=>{if(s)return;!r.composedPath().some(n=>n===e||n===t)&&t.hasAttribute("open")&&(t.removeAttribute("open"),console.log("Popover closed by clicking outside"))};return document.addEventListener("click",m),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de switch com ícone interativo que abre um popover ao ser clicado, fornecendo informações adicionais sobre a funcionalidade."}}}},C={args:{label:"Advanced settings",description:"Configure advanced system preferences",iconPopover:!0,iconPopoverName:"settings-01"},parameters:{docs:{description:{story:"Switch com ícone customizado usando a propriedade icon-popover-name. Pode usar qualquer ícone válido do atlas-icon."}}}},S={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;",[{label:"Help & Support",icon:"help-circle",description:"Get assistance and documentation"},{label:"Security Settings",icon:"lock-01",description:"Manage security and privacy options"},{label:"Experimental Features",icon:"beaker-02",description:"Enable beta features and experiments"},{label:"Notification Preferences",icon:"bell-01",description:"Configure how you receive alerts"},{label:"System Information",icon:"info-circle",description:"View system details and status"}].forEach(i=>{const a=document.createElement("atlas-switch");a.setAttribute("label",i.label),a.setAttribute("description",i.description),a.setAttribute("icon-popover",""),a.setAttribute("icon-popover-name",i.icon),e.appendChild(a)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de diferentes ícones que podem ser usados no icon-popover. Você pode usar qualquer ícone disponível no sistema de design."}}}},T={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 600px; padding: 24px;";const o=document.createElement("h3");o.textContent="Settings with Interactive Help",o.style.cssText="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;",e.appendChild(o);const i=document.createElement("p");i.textContent="Clique nos ícones para ver informações detalhadas sobre cada configuração",i.style.cssText="margin: 0 0 16px 0; color: #5e6877; font-size: 14px;",e.appendChild(i);const a=[{label:"Two-Factor Authentication",description:"Add extra security to your account",icon:"lock-01",popover:{title:"2FA Security",text:"Two-factor authentication adds an extra layer of security by requiring a second form of verification. We recommend enabling this for all accounts.",arrow:"top-left",actionType:"button",actionLabel:"Enable 2FA"}},{label:"Auto-save Documents",description:"Automatically save your work",icon:"save-01",popover:{title:"Auto-save Feature",text:"Your documents will be automatically saved every 5 minutes. You can still manually save at any time using Ctrl+S.",arrow:"top-left",actionType:"link",actionLabel:"View backup history"}},{label:"Analytics Tracking",description:"Help us improve your experience",icon:"bar-chart-01",popover:{title:"Usage Analytics",text:"We collect anonymous usage data to improve our service. No personal information is shared with third parties.",arrow:"top-left",actionType:"link",actionLabel:"Privacy policy"}}],t=[],s=new Map;a.forEach(r=>{const c=document.createElement("div");c.style.cssText="position: relative;";const l=document.createElement("atlas-switch");l.setAttribute("label",r.label),l.setAttribute("description",r.description),l.setAttribute("icon-popover",""),l.setAttribute("icon-popover-name",r.icon),c.appendChild(l);const n=document.createElement("atlas-popover");n.setAttribute("title",r.popover.title),n.setAttribute("text",r.popover.text),n.setAttribute("arrow",r.popover.arrow),n.setAttribute("action-type",r.popover.actionType),n.setAttribute("action-label",r.popover.actionLabel),n.setAttribute("closable",""),n.style.cssText="position: absolute; z-index: 1000; min-width: 320px;",c.appendChild(n),t.push(n),s.set(n,!1),c.addEventListener("click",d=>{const b=d.composedPath().find(u=>u.tagName==="ATLAS-ICON-BUTTON");if(b){if(d.stopPropagation(),d.preventDefault(),s.set(n,!0),t.forEach(u=>{u!==n&&u.removeAttribute("open")}),n.hasAttribute("open"))n.removeAttribute("open");else{const u=b.getBoundingClientRect(),h=c.getBoundingClientRect();n.style.top=`${u.bottom-h.top+8}px`,n.style.left=`${u.left-h.left}px`,n.setAttribute("open","")}console.log("Popover toggled:",r.label,n.hasAttribute("open")),setTimeout(()=>{s.set(n,!1)},100)}}),n.addEventListener("close",()=>{n.removeAttribute("open")}),n.addEventListener("action",d=>{console.log("Popover action clicked:",r.label,d.detail),n.removeAttribute("open")}),e.appendChild(c)});const m=r=>{const c=r.composedPath(),l=Array.from(e.querySelectorAll('div[style*="position: relative"]')),n=c.some(p=>l.includes(p)||t.includes(p)),d=Array.from(s.values()).some(p=>p===!0);!n&&!d&&t.forEach(p=>{p.hasAttribute("open")&&p.removeAttribute("open")})};return document.addEventListener("click",m),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo completo de múltiplos switches com popovers interativos. Cada ícone abre um popover com informações contextuais e ações relevantes."}}}},P={args:{label:"Auto-save",description:"Automatically save your work every 5 minutes",checked:!0},parameters:{docs:{description:{story:"Switch no estado ativo/ligado."}}}},L={args:{label:"Auto-save",description:"Automatically save your work every 5 minutes",checked:!1},parameters:{docs:{description:{story:"Switch no estado inativo/desligado."}}}},z={args:{label:"Airplane mode",description:"Disable all wireless connections",state:"disabled",checked:!1},parameters:{docs:{description:{story:"Switch desabilitado no estado desligado (não interativo)."}}}},D={args:{label:"Developer mode",description:"Enable advanced developer features",state:"disabled",checked:!0},parameters:{docs:{description:{story:"Switch desabilitado no estado ligado (não interativo)."}}}},N={args:{label:"Admin access",description:"Full system administration privileges",state:"read-only",checked:!1},parameters:{docs:{description:{story:"Switch em modo somente leitura desligado (visualização, não editável)."}}}},F={args:{label:"Admin access",description:"Full system administration privileges",state:"read-only",checked:!0},parameters:{docs:{description:{story:"Switch em modo somente leitura ligado (visualização, não editável)."}}}},R={args:{label:"Terms and conditions",description:"Accept our terms to continue",state:"error",errorText:"You must accept the terms to proceed",checked:!1},parameters:{docs:{description:{story:"Switch com erro de validação."}}}},q={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);";const o=document.createElement("h3");return o.textContent="Notification Settings",o.style.cssText="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #1d2125;",e.appendChild(o),[{label:"Email notifications",description:"Receive notifications via email",checked:!0},{label:"Push notifications",description:"Receive push notifications on your device",checked:!0},{label:"SMS notifications",description:"Receive text messages for important updates",checked:!1},{label:"Marketing emails",description:"Receive our newsletter and promotional content",checked:!1,strongLabel:!1}].forEach(a=>{const t=document.createElement("atlas-switch");t.setAttribute("label",a.label),t.setAttribute("description",a.description),a.checked&&t.setAttribute("checked",""),a.strongLabel&&t.setAttribute("strong-label",""),e.appendChild(t)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de painel de configurações com múltiplos switches."}}}},I={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 20px; max-width: 500px; padding: 24px; background: #fff; border-radius: 8px;";const o=document.createElement("h3");o.textContent="Account Setup",o.style.cssText="margin: 0 0 8px 0; font-size: 20px; font-weight: 600;",e.appendChild(o);const i=document.createElement("p");i.textContent="Please accept the required terms to continue",i.style.cssText="margin: 0 0 16px 0; color: #5e6877; font-size: 14px;",e.appendChild(i);const a=document.createElement("atlas-switch");a.setAttribute("label","Terms and conditions"),a.setAttribute("description","I accept the terms and conditions of service"),a.setAttribute("state","error"),a.setAttribute("error-text","You must accept the terms to proceed"),a.setAttribute("strong-label",""),e.appendChild(a);const t=document.createElement("atlas-switch");t.setAttribute("label","Privacy policy"),t.setAttribute("description","I have read and understand the privacy policy"),t.setAttribute("checked",""),e.appendChild(t);const s=document.createElement("atlas-switch");return s.setAttribute("label","Marketing communications"),s.setAttribute("description","I want to receive promotional emails and updates"),e.appendChild(s),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplo de formulário com validação e estados de erro."}}}},O={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const o=document.createElement("div");return o.style.cssText="padding: 16px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px; margin-bottom: 8px;",o.innerHTML=`
      <strong style="display: block; margin-bottom: 8px; color: #1976d2;">♿ Navegação por Teclado</strong>
      <ul style="margin: 0; padding-left: 20px; color: #1565c0; line-height: 1.6;">
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Tab</kbd> - Navegar entre switches</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Space</kbd> ou <kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Enter</kbd> - Alternar estado</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Shift + Tab</kbd> - Voltar</li>
      </ul>
    `,e.appendChild(o),[{label:"First switch",description:"Use Tab to navigate",checked:!1},{label:"Second switch",description:"Press Space to toggle",checked:!0},{label:"Third switch",description:"Accessible navigation",checked:!1}].forEach(a=>{const t=document.createElement("atlas-switch");t.setAttribute("label",a.label),t.setAttribute("description",a.description),a.checked&&t.setAttribute("checked",""),e.appendChild(t)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de navegação por teclado e estados de foco. O switch é totalmente acessível via teclado."}}}},B={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 32px;";const o=document.createElement("div");o.innerHTML=`
      <div style="padding: 16px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #2e7d32; font-size: 16px;">✅ Boas Práticas</strong>
      </div>
    `;const i=document.createElement("atlas-switch");i.setAttribute("label","Descriptive label"),i.setAttribute("description","Always provide clear, descriptive text explaining what the switch controls"),i.setAttribute("checked",""),o.appendChild(i);const a=document.createElement("div");a.style.height="12px",o.appendChild(a);const t=document.createElement("atlas-switch");t.setAttribute("label","Feature with tooltip"),t.setAttribute("description","Use icon-popover for additional context when needed"),t.setAttribute("icon-popover",""),o.appendChild(t);const s=document.createElement("div");s.style.height="12px",o.appendChild(s);const m=document.createElement("atlas-switch");m.setAttribute("label","Strong emphasis"),m.setAttribute("description","Use strong-label for important settings that need emphasis"),m.setAttribute("strong-label",""),m.setAttribute("checked",""),o.appendChild(m),e.appendChild(o);const r=document.createElement("div");r.innerHTML=`
      <div style="padding: 16px; background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #c62828; font-size: 16px;">❌ Evite</strong>
      </div>
    `;const c=document.createElement("div");c.style.cssText="opacity: 0.6;";const l=document.createElement("atlas-switch");l.setAttribute("label","On"),l.setAttribute("state","disabled"),c.appendChild(l);const n=document.createElement("p");n.style.cssText="margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;",n.textContent="❌ Label genérico que não descreve a função",c.appendChild(n),r.appendChild(c);const d=document.createElement("div");d.style.cssText="opacity: 0.6;";const p=document.createElement("atlas-switch");p.setAttribute("label","Click here to enable feature X and automatically sync your preferences across all devices"),p.setAttribute("state","disabled"),d.appendChild(p);const b=document.createElement("p");b.style.cssText="margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;",b.textContent="❌ Label muito longo - use description para texto adicional",d.appendChild(b),r.appendChild(d);const u=document.createElement("div");u.style.cssText="opacity: 0.6;";const h=document.createElement("atlas-switch");h.setAttribute("label","Accept"),h.setAttribute("state","disabled"),u.appendChild(h);const H=document.createElement("p");return H.style.cssText="margin: 4px 0 0 0; color: #d32f2f; font-size: 13px;",H.textContent="❌ Falta contexto - o que está sendo aceito?",u.appendChild(H),r.appendChild(u),e.appendChild(r),e},parameters:{controls:{disable:!0},docs:{description:{story:"Guia visual de boas práticas e anti-patterns para uso do componente switch."}}}},M={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 16px; max-width: 500px;";const o=document.createElement("div");o.style.cssText="padding: 16px; background: #f3e5f5; border-left: 4px solid #9c27b0; border-radius: 4px; margin-bottom: 8px;",o.innerHTML=`
      <strong style="display: block; margin-bottom: 8px; color: #6a1b9a;">📢 Leitores de Tela</strong>
      <p style="margin: 0; color: #4a148c; line-height: 1.6; font-size: 14px;">
        Este componente é otimizado para leitores de tela, anunciando corretamente o estado do switch (ligado/desligado) e suas descrições.
      </p>
    `,e.appendChild(o);const i=document.createElement("atlas-switch");i.setAttribute("label","Email notifications"),i.setAttribute("description","Receive email alerts for important account activities"),i.setAttribute("checked",""),e.appendChild(i);const a=document.createElement("atlas-switch");a.setAttribute("label","Dark mode"),a.setAttribute("description","Switch between light and dark color themes"),a.setAttribute("icon-popover",""),e.appendChild(a);const t=document.createElement("atlas-switch");return t.setAttribute("label","Auto-updates"),t.setAttribute("description","Automatically install security updates"),t.setAttribute("checked",""),t.setAttribute("state","read-only"),e.appendChild(t),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplos otimizados para leitores de tela com labels descritivos e estados claros."}}}};var V,U,W;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,$,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var X,_,j;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(j=(_=v.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,ae;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,re,se;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Label oculto',
    hideLabel: true,
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch sem label, exibindo apenas o controle. Útil quando o contexto já deixa claro o que o switch controla.'
      }
    }
  }
}`,...(se=(re=E.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ce,le,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Label oculto',
    hideLabel: true,
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch sem label no estado desligado.'
      }
    }
  }
}`,...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ue,me;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 500px; padding: 24px; position: relative;';
    const title = document.createElement('h3');
    title.textContent = 'Interactive Popover Demo';
    title.style.cssText = 'margin: 0 0 8px 0; font-size: 18px; font-weight: 600;';
    container.appendChild(title);
    const instruction = document.createElement('p');
    instruction.textContent = 'Clique no ícone de informação ao lado do label para ver detalhes';
    instruction.style.cssText = 'margin: 0 0 16px 0; color: #5e6877; font-size: 14px;';
    container.appendChild(instruction);

    // Switch com icon-popover
    const switchEl = document.createElement('atlas-switch');
    switchEl.setAttribute('label', 'Data synchronization');
    switchEl.setAttribute('description', 'Sync your data across all devices');
    switchEl.setAttribute('icon-popover', '');
    switchEl.setAttribute('icon-popover-name', 'info');
    container.appendChild(switchEl);

    // Popover (inicialmente oculto) - adicionado ao container, não ao wrapper
    const popover = document.createElement('atlas-popover');
    popover.setAttribute('title', 'About Data Sync');
    popover.setAttribute('text', 'When enabled, your data will be automatically synchronized across all your devices in real-time. This includes preferences, settings, and user data.');
    popover.setAttribute('arrow', 'top-left');
    popover.setAttribute('action-type', 'link');
    popover.setAttribute('action-label', 'Learn more');
    popover.setAttribute('closable', '');
    popover.style.cssText = 'position: absolute; z-index: 9999; max-width: 400px;';
    container.appendChild(popover);
    let isTogglingPopover = false;

    // Usar event delegation no container para capturar cliques do icon-button
    container.addEventListener('click', e => {
      const path = e.composedPath();
      const iconButton = path.find(el => el.tagName === 'ATLAS-ICON-BUTTON');
      if (iconButton) {
        e.stopPropagation();
        e.preventDefault();
        isTogglingPopover = true;

        // Usar atributo 'open' ao invés de display
        if (popover.hasAttribute('open')) {
          popover.removeAttribute('open');
          console.log('Popover closed');
        } else {
          // Calcular posição do icon-button
          const rect = iconButton.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          popover.style.top = \`\${rect.bottom - containerRect.top + 8}px\`;
          popover.style.left = \`\${rect.left - containerRect.left}px\`;
          popover.setAttribute('open', '');
          console.log('Popover opened at:', rect);
        }

        // Reset flag depois do próximo frame
        setTimeout(() => {
          isTogglingPopover = false;
        }, 100);
      }
    });

    // Fechar popover ao clicar no botão fechar
    popover.addEventListener('close', () => {
      popover.removeAttribute('open');
      console.log('Popover closed via X button');
    });

    // Fechar popover ao clicar fora
    const clickOutsideHandler = e => {
      // Não fechar se estamos no meio do toggle
      if (isTogglingPopover) return;
      const path = e.composedPath();

      // Verificar se clicou dentro do container ou popover
      const clickedInside = path.some(el => {
        return el === container || el === popover;
      });
      if (!clickedInside && popover.hasAttribute('open')) {
        popover.removeAttribute('open');
        console.log('Popover closed by clicking outside');
      }
    };
    document.addEventListener('click', clickOutsideHandler);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplo de switch com ícone interativo que abre um popover ao ser clicado, fornecendo informações adicionais sobre a funcionalidade.'
      }
    }
  }
}`,...(me=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,he,xe;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(he=C.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,ve,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,we,Ee;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 600px; padding: 24px;';
    const title = document.createElement('h3');
    title.textContent = 'Settings with Interactive Help';
    title.style.cssText = 'margin: 0 0 8px 0; font-size: 18px; font-weight: 600;';
    container.appendChild(title);
    const instruction = document.createElement('p');
    instruction.textContent = 'Clique nos ícones para ver informações detalhadas sobre cada configuração';
    instruction.style.cssText = 'margin: 0 0 16px 0; color: #5e6877; font-size: 14px;';
    container.appendChild(instruction);
    const switchConfigs = [{
      label: 'Two-Factor Authentication',
      description: 'Add extra security to your account',
      icon: 'lock-01',
      popover: {
        title: '2FA Security',
        text: 'Two-factor authentication adds an extra layer of security by requiring a second form of verification. We recommend enabling this for all accounts.',
        arrow: 'top-left',
        actionType: 'button',
        actionLabel: 'Enable 2FA'
      }
    }, {
      label: 'Auto-save Documents',
      description: 'Automatically save your work',
      icon: 'save-01',
      popover: {
        title: 'Auto-save Feature',
        text: 'Your documents will be automatically saved every 5 minutes. You can still manually save at any time using Ctrl+S.',
        arrow: 'top-left',
        actionType: 'link',
        actionLabel: 'View backup history'
      }
    }, {
      label: 'Analytics Tracking',
      description: 'Help us improve your experience',
      icon: 'bar-chart-01',
      popover: {
        title: 'Usage Analytics',
        text: 'We collect anonymous usage data to improve our service. No personal information is shared with third parties.',
        arrow: 'top-left',
        actionType: 'link',
        actionLabel: 'Privacy policy'
      }
    }];
    const allPopovers = [];
    const toggleStates = new Map(); // Rastrear estado de toggle de cada popover

    switchConfigs.forEach(config => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'position: relative;';
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      switchEl.setAttribute('icon-popover', '');
      switchEl.setAttribute('icon-popover-name', config.icon);
      wrapper.appendChild(switchEl);
      const popover = document.createElement('atlas-popover');
      popover.setAttribute('title', config.popover.title);
      popover.setAttribute('text', config.popover.text);
      popover.setAttribute('arrow', config.popover.arrow);
      popover.setAttribute('action-type', config.popover.actionType);
      popover.setAttribute('action-label', config.popover.actionLabel);
      popover.setAttribute('closable', '');
      popover.style.cssText = 'position: absolute; z-index: 1000; min-width: 320px;';
      wrapper.appendChild(popover);
      allPopovers.push(popover);
      toggleStates.set(popover, false);

      // Event delegation no wrapper
      wrapper.addEventListener('click', e => {
        const path = e.composedPath();
        const iconButton = path.find(el => el.tagName === 'ATLAS-ICON-BUTTON');
        if (iconButton) {
          e.stopPropagation();
          e.preventDefault();
          toggleStates.set(popover, true);

          // Fechar outros popovers
          allPopovers.forEach(p => {
            if (p !== popover) p.removeAttribute('open');
          });

          // Toggle usando atributo 'open'
          if (popover.hasAttribute('open')) {
            popover.removeAttribute('open');
          } else {
            // Calcular posição do icon-button
            const rect = iconButton.getBoundingClientRect();
            const wrapperRect = wrapper.getBoundingClientRect();
            popover.style.top = \`\${rect.bottom - wrapperRect.top + 8}px\`;
            popover.style.left = \`\${rect.left - wrapperRect.left}px\`;
            popover.setAttribute('open', '');
          }
          console.log('Popover toggled:', config.label, popover.hasAttribute('open'));

          // Reset flag
          setTimeout(() => {
            toggleStates.set(popover, false);
          }, 100);
        }
      });
      popover.addEventListener('close', () => {
        popover.removeAttribute('open');
      });
      popover.addEventListener('action', e => {
        console.log('Popover action clicked:', config.label, e.detail);
        popover.removeAttribute('open');
      });
      container.appendChild(wrapper);
    });

    // Fechar popovers ao clicar fora
    const clickOutsideHandler = e => {
      const path = e.composedPath();

      // Verificar se clicou dentro de qualquer wrapper ou popover
      const wrappers = Array.from(container.querySelectorAll('div[style*="position: relative"]'));
      const clickedInside = path.some(el => {
        return wrappers.includes(el) || allPopovers.includes(el);
      });

      // Verificar se algum popover está sendo toggleado
      const anyToggling = Array.from(toggleStates.values()).some(v => v === true);
      if (!clickedInside && !anyToggling) {
        allPopovers.forEach(p => {
          if (p.hasAttribute('open')) {
            p.removeAttribute('open');
          }
        });
      }
    };
    document.addEventListener('click', clickOutsideHandler);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplo completo de múltiplos switches com popovers interativos. Cada ícone abre um popover com informações contextuais e ações relevantes.'
      }
    }
  }
}`,...(Ee=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Ae,ke,Ce;P.parameters={...P.parameters,docs:{...(Ae=P.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Se,Te,Pe;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Pe=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Le,ze,De;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(De=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ne,Fe,Re;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Re=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var qe,Ie,Oe;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Be,Me,He;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(He=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var Ve,Ue,We;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(Ue=R.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ye,$e,Ge;q.parameters={...q.parameters,docs:{...(Ye=q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ge=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Xe,_e,je;I.parameters={...I.parameters,docs:{...(Xe=I.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(je=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Je,Ke,Qe;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,et,tt;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var ot,nt,at;M.parameters={...M.parameters,docs:{...(ot=M.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(at=(nt=M.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const ut=["Playground","AlignmentLeft","AlignmentRight","WithStrongLabel","WithDescription","WithIconPopover","HideLabel","HideLabelUnchecked","WithInteractivePopover","CustomIconPopover","MultipleIconExamples","MultipleInteractivePopovers","CheckedState","UncheckedState","DisabledUnchecked","DisabledChecked","ReadOnlyUnchecked","ReadOnlyChecked","ErrorState","SettingsPanel","FormValidation","FocusStates","AccessibilityBestPractices","ScreenReaderOptimized"];export{B as AccessibilityBestPractices,g as AlignmentLeft,v as AlignmentRight,P as CheckedState,C as CustomIconPopover,D as DisabledChecked,z as DisabledUnchecked,R as ErrorState,O as FocusStates,I as FormValidation,E as HideLabel,A as HideLabelUnchecked,S as MultipleIconExamples,T as MultipleInteractivePopovers,x as Playground,F as ReadOnlyChecked,N as ReadOnlyUnchecked,M as ScreenReaderOptimized,q as SettingsPanel,L as UncheckedState,y as WithDescription,w as WithIconPopover,k as WithInteractivePopover,f as WithStrongLabel,ut as __namedExportsOrder,pt as default};
