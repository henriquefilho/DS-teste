import"./atlas-icon-button-D_fTdWvm.js";import"./atlas-icon-B_0Pd0rQ.js";const ae={title:"Components/Atlas Icon Button",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-icon-button");return t.setAttribute("icon-name",e.iconName),t.setAttribute("color",e.color),t.setAttribute("size",e.size),e.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled"),e.ariaLabel&&t.setAttribute("aria-label",e.ariaLabel),t.addEventListener("click",e.onClick),t},argTypes:{iconName:{control:"text",description:"Nome do ícone a ser exibido (deve corresponder aos ícones do atlas-icon)",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"chevron-down"}}},color:{control:"select",options:["secondary","primary","success","warning","danger","info","white"],description:"Cor semântica do botão que define os tokens de background e ícone",table:{category:"Appearance",type:{summary:"'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'white'"},defaultValue:{summary:"secondary"}}},size:{control:"select",options:["sm","md","lg","xl","xxl","auto"],description:"Tamanho do botão: sm (24px), md (32px), lg (40px), xl (48px), xxl (56px), auto (20px)",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto'"},defaultValue:{summary:"md"}}},ariaLabel:{control:"text",description:"Label de acessibilidade OBRIGATÓRIO para leitores de tela (icon-only buttons precisam de contexto)",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Desabilita o botão, removendo interatividade e aplicando estilo visual disabled",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"Evento disparado ao clicar no botão",table:{category:"Actions",type:{summary:"() => void"}}}},args:{iconName:"chevron-down",color:"secondary",size:"md",disabled:!1,ariaLabel:"Abrir menu"},parameters:{docs:{description:{component:`

Botão interativo que utiliza **apenas um ícone** como indicador visual de ação. 

## ⚠️ Acessibilidade Obrigatória

Por ser um botão icon-only (sem texto visível), **você DEVE sempre fornecer um \`aria-label\`** para garantir que leitores de tela entendam a função do botão.



        `}}}},f={parameters:{docs:{description:{story:"Experimente diferentes combinações de propriedades usando os controles abaixo."}}}},g={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;",["secondary","primary","success","warning","danger","info"].forEach(o=>{const a=document.createElement("div");a.style.cssText="display: flex; flex-direction: column; align-items: center; gap: 8px;";const s=document.createElement("atlas-icon-button");s.setAttribute("icon-name","check"),s.setAttribute("color",o),s.setAttribute("size","md"),s.setAttribute("aria-label",`Botão ${o}`);const n=document.createElement("span");n.textContent=o,n.style.cssText='font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;',a.appendChild(s),a.appendChild(n),e.appendChild(a)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Todas as variantes de cor disponíveis. Passe o mouse para ver o background ghost aparecer."}}}},y={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; gap: 16px; align-items: center; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px;";const t=document.createElement("atlas-icon-button");t.setAttribute("icon-name","check"),t.setAttribute("color","white"),t.setAttribute("size","lg"),t.setAttribute("aria-label","Confirmar");const o=document.createElement("span");return o.textContent="Variante White para fundos escuros",o.style.cssText='color: white; font-family: "Open Sans", sans-serif;',e.appendChild(t),e.appendChild(o),e},parameters:{controls:{disable:!0},docs:{description:{story:"Variante `white` (inverse) para uso em fundos escuros ou coloridos. Usa tokens `-inverse`."}}}},E={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;",[{size:"auto",label:"auto (20px)"},{size:"sm",label:"sm (24px)"},{size:"md",label:"md (32px)"},{size:"lg",label:"lg (40px)"},{size:"xl",label:"xl (48px)"},{size:"xxl",label:"xxl (56px)"}].forEach(({size:o,label:a})=>{const s=document.createElement("div");s.style.cssText="display: flex; flex-direction: column; align-items: center; gap: 8px;";const n=document.createElement("atlas-icon-button");n.setAttribute("icon-name","cog"),n.setAttribute("color","primary"),n.setAttribute("size",o),n.setAttribute("aria-label",`Configurações ${o}`);const r=document.createElement("span");r.textContent=a,r.style.cssText='font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;',s.appendChild(n),s.appendChild(r),e.appendChild(s)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Todos os tamanhos disponíveis, do menor (auto) ao maior (xxl)."}}}},h={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;",["secondary","primary","success","danger"].forEach(o=>{const a=document.createElement("div");a.style.cssText="display: flex; flex-direction: column; align-items: center; gap: 8px;";const s=document.createElement("atlas-icon-button");s.setAttribute("icon-name","trash"),s.setAttribute("color",o),s.setAttribute("size","md"),s.setAttribute("disabled",""),s.setAttribute("aria-label","Excluir (desabilitado)");const n=document.createElement("span");n.textContent=`${o} disabled`,n.style.cssText='font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;',a.appendChild(s),a.appendChild(n),e.appendChild(a)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Estado desabilitado. Ícone fica cinza (#D1D6DC) e cursor muda para `not-allowed`."}}}},C={render:()=>{const e=document.createElement("div");return e.style.cssText="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;",[{state:"Default",instruction:"Estado padrão - sem background"},{state:"Hover",instruction:"Passe o mouse - background ghost aparece"},{state:"Pressed",instruction:"Clique e segure - background escurece"},{state:"Focus",instruction:"Navegue com Tab - outline azul aparece"}].forEach(({state:o,instruction:a})=>{const s=document.createElement("div");s.style.cssText="display: flex; align-items: center; gap: 16px;";const n=document.createElement("atlas-icon-button");n.setAttribute("icon-name","heart"),n.setAttribute("color","danger"),n.setAttribute("size","lg"),n.setAttribute("aria-label",`Favoritar - ${o}`);const r=document.createElement("div");r.style.cssText="display: flex; flex-direction: column; gap: 4px;";const l=document.createElement("strong");l.textContent=o,l.style.cssText='font-family: "Open Sans", sans-serif; color: #212b36;';const i=document.createElement("span");i.textContent=a,i.style.cssText='font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381;',r.appendChild(l),r.appendChild(i),s.appendChild(n),s.appendChild(r),e.appendChild(s)}),e},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração visual dos estados interativos. Experimente interagir com os botões para ver as transições."}}}},T={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 32px;";const t=document.createElement("div");t.style.cssText="display: flex; flex-direction: column; gap: 12px;";const o=document.createElement("h3");o.textContent="Toolbar de Ações",o.style.cssText='font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';const a=document.createElement("div");a.style.cssText="display: flex; gap: 8px; padding: 8px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: fit-content;",[{icon:"edit",label:"Editar"},{icon:"copy",label:"Copiar"},{icon:"trash",label:"Excluir",color:"danger"},{icon:"dots-vertical",label:"Mais opções"}].forEach(({icon:b,label:p,color:x})=>{const c=document.createElement("atlas-icon-button");c.setAttribute("icon-name",b),c.setAttribute("color",x||"secondary"),c.setAttribute("size","sm"),c.setAttribute("aria-label",p),a.appendChild(c)}),t.appendChild(o),t.appendChild(a);const n=document.createElement("div");n.style.cssText="display: flex; flex-direction: column; gap: 12px;";const r=document.createElement("h3");r.textContent="Modal Close Button",r.style.cssText='font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';const l=document.createElement("div");l.style.cssText="position: relative; padding: 24px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: 400px;";const i=document.createElement("atlas-icon-button");i.setAttribute("icon-name","x"),i.setAttribute("color","secondary"),i.setAttribute("size","sm"),i.setAttribute("aria-label","Fechar modal"),i.style.cssText="position: absolute; top: 12px; right: 12px;";const u=document.createElement("p");return u.textContent="Conteúdo do modal...",u.style.cssText='font-family: "Open Sans", sans-serif; color: #637381; margin: 0;',l.appendChild(i),l.appendChild(u),n.appendChild(r),n.appendChild(l),e.appendChild(t),e.appendChild(n),e},parameters:{controls:{disable:!0},docs:{description:{story:"Exemplos de uso comum: toolbars de ação e botões de fechar."}}}},v={args:{iconName:"trash",color:"danger",size:"md",ariaLabel:"Excluir item permanentemente da lista"},parameters:{docs:{description:{story:`
**⚠️ CRÍTICO:** Icon buttons sempre devem ter \`aria-label\`.

Leitores de tela não conseguem interpretar ícones visuais. O \`aria-label\` fornece contexto:

\`\`\`html
<!-- ❌ Ruim: Sem contexto -->
<atlas-icon-button icon-name="trash"></atlas-icon-button>

<!-- ✅ Bom: Com contexto claro -->
<atlas-icon-button 
  icon-name="trash"
  aria-label="Excluir item permanentemente da lista">
</atlas-icon-button>
\`\`\`

**Dicas para bons labels:**
- Seja específico sobre a ação ("Excluir usuário" > "Excluir")
- Inclua contexto se necessário ("Abrir menu de navegação" > "Menu")
- Evite redundância ("Botão fechar" > "Fechar")
        `}}}},A={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;";const t=document.createElement("h3");t.textContent="⌨️ Navegação por Teclado",t.style.cssText='font-family: "Open Sans", sans-serif; margin: 0 0 8px 0; font-size: 16px; color: #212b36;';const o=document.createElement("p");o.innerHTML='<strong>Instruções:</strong> Use a tecla <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Tab</kbd> para navegar entre os botões. Pressione <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Enter</kbd> ou <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Space</kbd> para ativar.',o.style.cssText='font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381; margin: 0 0 16px 0;';const a=document.createElement("div");return a.style.cssText="display: flex; gap: 16px; padding: 16px; background: white; border-radius: 8px;",[{icon:"arrow-left",label:"Voltar",color:"secondary"},{icon:"check",label:"Confirmar",color:"success"},{icon:"x",label:"Cancelar",color:"danger"}].forEach(({icon:n,label:r,color:l})=>{const i=document.createElement("atlas-icon-button");i.setAttribute("icon-name",n),i.setAttribute("color",l),i.setAttribute("size","lg"),i.setAttribute("aria-label",r),a.appendChild(i)}),e.appendChild(t),e.appendChild(o),e.appendChild(a),e},parameters:{controls:{disable:!0},docs:{description:{story:"Demonstração de navegação por teclado. Note o outline azul que aparece ao focar com `Tab`."}}}},w={render:()=>{const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; gap: 24px;";const t=document.createElement("div");t.style.cssText="padding: 20px; background: #d4edda; border-left: 4px solid #28a745; border-radius: 8px;";const o=document.createElement("h3");o.textContent="✅ Boas Práticas",o.style.cssText='font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #155724;';const a=document.createElement("div");a.style.cssText="display: flex; flex-direction: column; gap: 16px;",[{icon:"trash",label:"Excluir item",ariaLabel:"Excluir item da lista de compras",description:"aria-label específico e descritivo"},{icon:"plus",label:"Adicionar",ariaLabel:"Adicionar novo produto ao carrinho",description:"Contexto claro da ação"}].forEach(({icon:u,label:b,ariaLabel:p,description:x})=>{const c=document.createElement("div");c.style.cssText="display: flex; align-items: center; gap: 12px;";const d=document.createElement("atlas-icon-button");d.setAttribute("icon-name",u),d.setAttribute("color","success"),d.setAttribute("size","md"),d.setAttribute("aria-label",p);const m=document.createElement("div");m.style.cssText="display: flex; flex-direction: column;",m.innerHTML=`
        <strong style="font-family: 'Open Sans', sans-serif; color: #155724;">${b}</strong>
        <code style="font-size: 12px; color: #155724; background: rgba(40, 167, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">aria-label="${p}"</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #155724; margin-top: 4px;">${x}</span>
      `,c.appendChild(d),c.appendChild(m),a.appendChild(c)}),t.appendChild(o),t.appendChild(a);const n=document.createElement("div");n.style.cssText="padding: 20px; background: #f8d7da; border-left: 4px solid #dc3545; border-radius: 8px;";const r=document.createElement("h3");r.textContent="❌ Anti-Patterns (Evite)",r.style.cssText='font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #721c24;';const l=document.createElement("div");return l.style.cssText="display: flex; flex-direction: column; gap: 16px;",[{icon:"trash",label:"Sem aria-label",ariaLabel:"",description:"❌ Leitores de tela não entendem o ícone"},{icon:"x",label:"Label genérico",ariaLabel:"Botão",description:'❌ "Botão" não descreve a ação'}].forEach(({icon:u,label:b,ariaLabel:p,description:x})=>{const c=document.createElement("div");c.style.cssText="display: flex; align-items: center; gap: 12px;";const d=document.createElement("atlas-icon-button");d.setAttribute("icon-name",u),d.setAttribute("color","danger"),d.setAttribute("size","md"),p&&d.setAttribute("aria-label",p);const m=document.createElement("div");m.style.cssText="display: flex; flex-direction: column;",m.innerHTML=`
        <strong style="font-family: 'Open Sans', sans-serif; color: #721c24;">${b}</strong>
        <code style="font-size: 12px; color: #721c24; background: rgba(220, 53, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">${p?`aria-label="${p}"`:"sem aria-label"}</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #721c24; margin-top: 4px;">${x}</span>
      `,c.appendChild(d),c.appendChild(m),l.appendChild(c)}),n.appendChild(r),n.appendChild(l),e.appendChild(t),e.appendChild(n),e},parameters:{controls:{disable:!0},docs:{description:{story:"Guia visual comparando boas práticas (✅) e anti-patterns (❌) de acessibilidade."}}}};var S,z,k;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Experimente diferentes combinações de propriedades usando os controles abaixo.'
      }
    }
  }
}`,...(k=(z=f.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var L,O,B;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; flex-wrap: wrap;';
    const colors = ['secondary', 'primary', 'success', 'warning', 'danger', 'info'];
    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'check');
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      button.setAttribute('aria-label', \`Botão \${color}\`);
      const label = document.createElement('span');
      label.textContent = color;
      label.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      wrapper.appendChild(button);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Todas as variantes de cor disponíveis. Passe o mouse para ver o background ghost aparecer.'
      }
    }
  }
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,F,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px;';
    const button = document.createElement('atlas-icon-button');
    button.setAttribute('icon-name', 'check');
    button.setAttribute('color', 'white');
    button.setAttribute('size', 'lg');
    button.setAttribute('aria-label', 'Confirmar');
    const description = document.createElement('span');
    description.textContent = 'Variante White para fundos escuros';
    description.style.cssText = 'color: white; font-family: "Open Sans", sans-serif;';
    container.appendChild(button);
    container.appendChild(description);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Variante \`white\` (inverse) para uso em fundos escuros ou coloridos. Usa tokens \`-inverse\`.'
      }
    }
  }
}`,...($=(F=y.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var P,I,V;E.parameters={...E.parameters,docs:{...(P=E.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 24px; align-items: center; flex-wrap: wrap;';
    const sizes = [{
      size: 'auto',
      label: 'auto (20px)'
    }, {
      size: 'sm',
      label: 'sm (24px)'
    }, {
      size: 'md',
      label: 'md (32px)'
    }, {
      size: 'lg',
      label: 'lg (40px)'
    }, {
      size: 'xl',
      label: 'xl (48px)'
    }, {
      size: 'xxl',
      label: 'xxl (56px)'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'cog');
      button.setAttribute('color', 'primary');
      button.setAttribute('size', size);
      button.setAttribute('aria-label', \`Configurações \${size}\`);
      const labelEl = document.createElement('span');
      labelEl.textContent = label;
      labelEl.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      wrapper.appendChild(button);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Todos os tamanhos disponíveis, do menor (auto) ao maior (xxl).'
      }
    }
  }
}`,...(V=(I=E.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var M,N,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; flex-wrap: wrap;';
    const colors = ['secondary', 'primary', 'success', 'danger'];
    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'trash');
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      button.setAttribute('disabled', '');
      button.setAttribute('aria-label', \`Excluir (desabilitado)\`);
      const label = document.createElement('span');
      label.textContent = \`\${color} disabled\`;
      label.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      wrapper.appendChild(button);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Estado desabilitado. Ícone fica cinza (#D1D6DC) e cursor muda para \`not-allowed\`.'
      }
    }
  }
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,H,q;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;';
    const states = [{
      state: 'Default',
      instruction: 'Estado padrão - sem background'
    }, {
      state: 'Hover',
      instruction: 'Passe o mouse - background ghost aparece'
    }, {
      state: 'Pressed',
      instruction: 'Clique e segure - background escurece'
    }, {
      state: 'Focus',
      instruction: 'Navegue com Tab - outline azul aparece'
    }];
    states.forEach(({
      state,
      instruction
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'heart');
      button.setAttribute('color', 'danger');
      button.setAttribute('size', 'lg');
      button.setAttribute('aria-label', \`Favoritar - \${state}\`);
      const textWrapper = document.createElement('div');
      textWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
      const stateLabel = document.createElement('strong');
      stateLabel.textContent = state;
      stateLabel.style.cssText = 'font-family: "Open Sans", sans-serif; color: #212b36;';
      const instructionText = document.createElement('span');
      instructionText.textContent = instruction;
      instructionText.style.cssText = 'font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381;';
      textWrapper.appendChild(stateLabel);
      textWrapper.appendChild(instructionText);
      row.appendChild(button);
      row.appendChild(textWrapper);
      container.appendChild(row);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração visual dos estados interativos. Experimente interagir com os botões para ver as transições.'
      }
    }
  }
}`,...(q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,G,_;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';

    // Toolbar Example
    const toolbarSection = document.createElement('div');
    toolbarSection.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    const toolbarTitle = document.createElement('h3');
    toolbarTitle.textContent = 'Toolbar de Ações';
    toolbarTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'display: flex; gap: 8px; padding: 8px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: fit-content;';
    const toolbarIcons = [{
      icon: 'edit',
      label: 'Editar'
    }, {
      icon: 'copy',
      label: 'Copiar'
    }, {
      icon: 'trash',
      label: 'Excluir',
      color: 'danger'
    }, {
      icon: 'dots-vertical',
      label: 'Mais opções'
    }];
    toolbarIcons.forEach(({
      icon,
      label,
      color
    }) => {
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', color || 'secondary');
      btn.setAttribute('size', 'sm');
      btn.setAttribute('aria-label', label);
      toolbar.appendChild(btn);
    });
    toolbarSection.appendChild(toolbarTitle);
    toolbarSection.appendChild(toolbar);

    // Close Button Example
    const closeSection = document.createElement('div');
    closeSection.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    const closeTitle = document.createElement('h3');
    closeTitle.textContent = 'Modal Close Button';
    closeTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';
    const modal = document.createElement('div');
    modal.style.cssText = 'position: relative; padding: 24px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: 400px;';
    const closeBtn = document.createElement('atlas-icon-button');
    closeBtn.setAttribute('icon-name', 'x');
    closeBtn.setAttribute('color', 'secondary');
    closeBtn.setAttribute('size', 'sm');
    closeBtn.setAttribute('aria-label', 'Fechar modal');
    closeBtn.style.cssText = 'position: absolute; top: 12px; right: 12px;';
    const modalContent = document.createElement('p');
    modalContent.textContent = 'Conteúdo do modal...';
    modalContent.style.cssText = 'font-family: "Open Sans", sans-serif; color: #637381; margin: 0;';
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    closeSection.appendChild(closeTitle);
    closeSection.appendChild(modal);
    container.appendChild(toolbarSection);
    container.appendChild(closeSection);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Exemplos de uso comum: toolbars de ação e botões de fechar.'
      }
    }
  }
}`,...(_=(G=T.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var j,J,K;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    iconName: 'trash',
    color: 'danger',
    size: 'md',
    ariaLabel: 'Excluir item permanentemente da lista'
  },
  parameters: {
    docs: {
      description: {
        story: \`
**⚠️ CRÍTICO:** Icon buttons sempre devem ter \\\`aria-label\\\`.

Leitores de tela não conseguem interpretar ícones visuais. O \\\`aria-label\\\` fornece contexto:

\\\`\\\`\\\`html
<!-- ❌ Ruim: Sem contexto -->
<atlas-icon-button icon-name="trash"></atlas-icon-button>

<!-- ✅ Bom: Com contexto claro -->
<atlas-icon-button 
  icon-name="trash"
  aria-label="Excluir item permanentemente da lista">
</atlas-icon-button>
\\\`\\\`\\\`

**Dicas para bons labels:**
- Seja específico sobre a ação ("Excluir usuário" > "Excluir")
- Inclua contexto se necessário ("Abrir menu de navegação" > "Menu")
- Evite redundância ("Botão fechar" > "Fechar")
        \`
      }
    }
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;';
    const title = document.createElement('h3');
    title.textContent = '⌨️ Navegação por Teclado';
    title.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 8px 0; font-size: 16px; color: #212b36;';
    const instructions = document.createElement('p');
    instructions.innerHTML = '<strong>Instruções:</strong> Use a tecla <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Tab</kbd> para navegar entre os botões. Pressione <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Enter</kbd> ou <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Space</kbd> para ativar.';
    instructions.style.cssText = 'font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381; margin: 0 0 16px 0;';
    const buttonsRow = document.createElement('div');
    buttonsRow.style.cssText = 'display: flex; gap: 16px; padding: 16px; background: white; border-radius: 8px;';
    const actions = [{
      icon: 'arrow-left',
      label: 'Voltar',
      color: 'secondary'
    }, {
      icon: 'check',
      label: 'Confirmar',
      color: 'success'
    }, {
      icon: 'x',
      label: 'Cancelar',
      color: 'danger'
    }];
    actions.forEach(({
      icon,
      label,
      color
    }) => {
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', color);
      btn.setAttribute('size', 'lg');
      btn.setAttribute('aria-label', label);
      buttonsRow.appendChild(btn);
    });
    container.appendChild(title);
    container.appendChild(instructions);
    container.appendChild(buttonsRow);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado. Note o outline azul que aparece ao focar com \`Tab\`.'
      }
    }
  }
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';

    // Boas Práticas (Green)
    const goodSection = document.createElement('div');
    goodSection.style.cssText = 'padding: 20px; background: #d4edda; border-left: 4px solid #28a745; border-radius: 8px;';
    const goodTitle = document.createElement('h3');
    goodTitle.textContent = '✅ Boas Práticas';
    goodTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #155724;';
    const goodList = document.createElement('div');
    goodList.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    const goodExamples = [{
      icon: 'trash',
      label: 'Excluir item',
      ariaLabel: 'Excluir item da lista de compras',
      description: 'aria-label específico e descritivo'
    }, {
      icon: 'plus',
      label: 'Adicionar',
      ariaLabel: 'Adicionar novo produto ao carrinho',
      description: 'Contexto claro da ação'
    }];
    goodExamples.forEach(({
      icon,
      label,
      ariaLabel,
      description
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 12px;';
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', 'success');
      btn.setAttribute('size', 'md');
      btn.setAttribute('aria-label', ariaLabel);
      const text = document.createElement('div');
      text.style.cssText = 'display: flex; flex-direction: column;';
      text.innerHTML = \`
        <strong style="font-family: 'Open Sans', sans-serif; color: #155724;">\${label}</strong>
        <code style="font-size: 12px; color: #155724; background: rgba(40, 167, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">aria-label="\${ariaLabel}"</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #155724; margin-top: 4px;">\${description}</span>
      \`;
      row.appendChild(btn);
      row.appendChild(text);
      goodList.appendChild(row);
    });
    goodSection.appendChild(goodTitle);
    goodSection.appendChild(goodList);

    // Anti-Patterns (Red)
    const badSection = document.createElement('div');
    badSection.style.cssText = 'padding: 20px; background: #f8d7da; border-left: 4px solid #dc3545; border-radius: 8px;';
    const badTitle = document.createElement('h3');
    badTitle.textContent = '❌ Anti-Patterns (Evite)';
    badTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #721c24;';
    const badList = document.createElement('div');
    badList.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    const badExamples = [{
      icon: 'trash',
      label: 'Sem aria-label',
      ariaLabel: '',
      description: '❌ Leitores de tela não entendem o ícone'
    }, {
      icon: 'x',
      label: 'Label genérico',
      ariaLabel: 'Botão',
      description: '❌ "Botão" não descreve a ação'
    }];
    badExamples.forEach(({
      icon,
      label,
      ariaLabel,
      description
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 12px;';
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', 'danger');
      btn.setAttribute('size', 'md');
      if (ariaLabel) {
        btn.setAttribute('aria-label', ariaLabel);
      }
      const text = document.createElement('div');
      text.style.cssText = 'display: flex; flex-direction: column;';
      text.innerHTML = \`
        <strong style="font-family: 'Open Sans', sans-serif; color: #721c24;">\${label}</strong>
        <code style="font-size: 12px; color: #721c24; background: rgba(220, 53, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">\${ariaLabel ? \`aria-label="\${ariaLabel}"\` : 'sem aria-label'}</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #721c24; margin-top: 4px;">\${description}</span>
      \`;
      row.appendChild(btn);
      row.appendChild(text);
      badList.appendChild(row);
    });
    badSection.appendChild(badTitle);
    badSection.appendChild(badList);
    container.appendChild(goodSection);
    container.appendChild(badSection);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Guia visual comparando boas práticas (✅) e anti-patterns (❌) de acessibilidade.'
      }
    }
  }
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const se=["Playground","AllColors","WhiteVariant","AllSizes","DisabledState","InteractiveStates","CommonUseCases","WithAriaLabel","FocusStates","AccessibilityBestPractices"];export{w as AccessibilityBestPractices,g as AllColors,E as AllSizes,T as CommonUseCases,h as DisabledState,A as FocusStates,C as InteractiveStates,f as Playground,y as WhiteVariant,v as WithAriaLabel,se as __namedExportsOrder,ae as default};
