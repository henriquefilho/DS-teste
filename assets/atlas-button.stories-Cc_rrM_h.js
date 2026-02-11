import"./atlas-icon-C7XCDMfu.js";import"./atlas-button-DHEZl4ND.js";const We={title:"Components/Atlas Button",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-button");return t.setAttribute("label",e.label),t.setAttribute("variant",e.variant),t.setAttribute("color",e.color),t.setAttribute("size",e.size),e.icon?(t.setAttribute("icon",""),t.setAttribute("icon-name",e.iconName)):t.removeAttribute("icon"),e.ariaLabel?t.setAttribute("aria-label",e.ariaLabel):t.removeAttribute("aria-label"),e.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled"),e.loading?t.setAttribute("loading",""):t.removeAttribute("loading"),e.fullWidth?t.setAttribute("full-width",""):t.removeAttribute("full-width"),t.addEventListener("click",e.onClick),t},argTypes:{label:{control:"text",description:"Texto exibido no botão",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Button"}}},variant:{control:"select",options:["filled","outlined","ghost"],description:"Define o estilo visual do botão",table:{category:"Appearance",type:{summary:"'filled' | 'outlined' | 'ghost'"},defaultValue:{summary:"filled"}}},color:{control:"select",options:["primary","danger","success","warning","info","inverse"],description:"Cor semântica que define o propósito do botão",table:{category:"Appearance",type:{summary:"'primary' | 'danger' | 'success' | 'warning' | 'info' | 'inverse'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg","xl"],description:"Tamanho do botão (altura e padding)",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg' | 'xl'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Ativa a exibição de um ícone no botão",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"plus"}}},ariaLabel:{control:"text",description:"Label de acessibilidade para leitores de tela. Use quando o label visual não for suficientemente descritivo",table:{category:"Accessibility",type:{summary:"string"},defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"Desabilita o botão, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Faz o botão ocupar 100% da largura do container",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"Callback executado ao clicar no botão",table:{category:"Actions",type:{summary:"() => void"}}}},args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",ariaLabel:"",disabled:!1,loading:!1,fullWidth:!1}},p={args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",ariaLabel:"",disabled:!1,loading:!1,fullWidth:!1}},m={args:{label:"Primary Action",variant:"filled",color:"primary",size:"md"}},b={args:{label:"Secondary Action",variant:"outlined",color:"primary",size:"md"}},y={args:{label:"Tertiary Action",variant:"ghost",color:"primary",size:"md"}},g={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash"}},f={args:{label:"Confirm",variant:"filled",color:"success",size:"md",icon:!0,iconName:"check"}},x={args:{label:"Warning",variant:"filled",color:"warning",size:"md",icon:!0,iconName:"alert-triangle"}},v={args:{label:"Information",variant:"filled",color:"info",size:"md",icon:!0,iconName:"info"}},h={args:{label:"Inverse Theme",variant:"filled",color:"inverse",size:"md"},parameters:{backgrounds:{default:"dark"}}},E={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.alignItems="flex-start",[{size:"sm",label:"Small (32px)"},{size:"md",label:"Medium (40px)"},{size:"lg",label:"Large (48px)"},{size:"xl",label:"Extra Large (56px)"}].forEach(({size:s,label:i})=>{const l=document.createElement("atlas-button");l.setAttribute("label",i),l.setAttribute("size",s),l.setAttribute("variant","filled"),l.setAttribute("color","primary"),e.appendChild(l)}),e}},A={args:{label:"Add Item",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"}},z={args:{label:"Processing...",variant:"filled",color:"primary",size:"md",loading:!0}},C={args:{label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0}},S={args:{label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0},parameters:{layout:"padded"}},w={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash",ariaLabel:"Excluir item permanentemente da lista de produtos"},parameters:{docs:{description:{story:"Use `aria-label` para fornecer contexto adicional aos leitores de tela quando o label visual for muito curto ou ambíguo."}}}},B={render:()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="24px",e.style.padding="20px";const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="8px";const s=document.createElement("p");s.textContent="Estado de foco (use Tab para navegar):",s.style.margin="0",s.style.fontSize="14px",s.style.fontWeight="600",s.style.color="#333";const i=document.createElement("div");i.style.display="flex",i.style.gap="12px",[{variant:"filled",label:"Filled"},{variant:"outlined",label:"Outlined"},{variant:"ghost",label:"Ghost"}].forEach(({variant:a,label:d})=>{const u=document.createElement("atlas-button");u.setAttribute("label",d),u.setAttribute("variant",a),u.setAttribute("color","primary"),u.setAttribute("size","md"),i.appendChild(u)}),t.appendChild(s),t.appendChild(i);const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="8px",n.style.marginTop="16px";const o=document.createElement("p");o.textContent="Navegação por teclado:",o.style.margin="0",o.style.fontSize="14px",o.style.fontWeight="600",o.style.color="#333";const r=document.createElement("ul");return r.style.margin="0",r.style.paddingLeft="20px",r.style.fontSize="14px",r.style.color="#666",["Tab: Navega para o próximo botão","Shift + Tab: Navega para o botão anterior","Enter ou Space: Ativa o botão","O outline de foco é visível em todos os estados"].forEach(a=>{const d=document.createElement("li");d.textContent=a,d.style.marginBottom="4px",r.appendChild(d)}),n.appendChild(o),n.appendChild(r),e.appendChild(t),e.appendChild(n),e},parameters:{controls:{disable:!0},docs:{description:{story:"Todos os botões suportam navegação por teclado e exibem um outline de foco visível. Use Tab para navegar entre os botões e Enter/Space para ativá-los."}}}},L={render:()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="800px";const t=document.createElement("h3");return t.textContent="Boas Práticas de Acessibilidade",t.style.marginTop="0",t.style.marginBottom="16px",t.style.fontSize="18px",t.style.color="#333",[{title:"✅ Labels Descritivos",description:'Use labels que descrevam claramente a ação do botão. Evite labels genéricos como "Clique aqui".',example:{label:"Salvar alterações",good:!0}},{title:"✅ Aria-label para Contexto",description:"Adicione aria-label quando o label visual for muito curto ou precisar de contexto adicional.",example:{label:"Excluir",ariaLabel:'Excluir produto "iPhone 14" do carrinho',good:!0}},{title:"✅ Estados Visíveis",description:"Estados de loading e disabled são comunicados visualmente e para leitores de tela via aria-busy e disabled.",example:{label:"Processando...",loading:!0,good:!0}},{title:"❌ Evite Ícones Sem Label",description:"Nunca use botões apenas com ícone sem um label de texto ou aria-label.",example:{iconOnly:!0,good:!1}}].forEach(({title:i,description:l,example:n})=>{const o=document.createElement("div");o.style.marginBottom="24px",o.style.padding="16px",o.style.border="1px solid #e0e0e0",o.style.borderRadius="8px",o.style.backgroundColor=n.good?"#f0f9ff":"#fff5f5";const r=document.createElement("h4");r.textContent=i,r.style.margin="0 0 8px 0",r.style.fontSize="16px",r.style.color=n.good?"#0c4a6e":"#991b1b";const c=document.createElement("p");if(c.textContent=l,c.style.margin="0 0 12px 0",c.style.fontSize="14px",c.style.color="#666",c.style.lineHeight="1.6",o.appendChild(r),o.appendChild(c),n.iconOnly){const a=document.createElement("code");a.textContent='<atlas-button icon="search" /> ❌ Inacessível!',a.style.padding="8px 12px",a.style.backgroundColor="#fee2e2",a.style.border="1px solid #fecaca",a.style.borderRadius="4px",a.style.fontSize="13px",a.style.color="#991b1b",o.appendChild(a)}else{const a=document.createElement("atlas-button");a.setAttribute("label",n.label),a.setAttribute("variant","filled"),a.setAttribute("color","primary"),a.setAttribute("size","md"),n.ariaLabel&&a.setAttribute("aria-label",n.ariaLabel),n.loading&&a.setAttribute("loading",""),o.appendChild(a)}e.appendChild(o)}),e.insertBefore(t,e.firstChild),e},parameters:{controls:{disable:!0},docs:{description:{story:"Guia completo de boas práticas de acessibilidade para o componente Atlas Button."}}}},D={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="24px",e.style.padding="20px";const t=["filled","outlined","ghost"];return["primary","danger","success","warning","info"].forEach(i=>{t.forEach(l=>{const n=document.createElement("atlas-button");n.setAttribute("label",`${l} ${i}`),n.setAttribute("variant",l),n.setAttribute("color",i),n.setAttribute("size","md"),e.appendChild(n)})}),e},parameters:{controls:{disable:!0}}};var T,N,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var I,F,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Primary Action',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var k,V,q;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    color: 'primary',
    size: 'md'
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var O,R,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Action',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var U,$,_;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash'
  }
}`,...(_=($=g.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var H,M,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'md',
    icon: true,
    iconName: 'check'
  }
}`,...(j=(M=f.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'filled',
    color: 'warning',
    size: 'md',
    icon: true,
    iconName: 'alert-triangle'
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Information',
    variant: 'filled',
    color: 'info',
    size: 'md',
    icon: true,
    iconName: 'info'
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,re;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,le,se;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'plus'
  }
}`,...(se=(le=A.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,de,ue;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Processing...',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    loading: true
  }
}`,...(ue=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,be;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(be=(me=C.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ye,ge,fe;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var xe,ve,he;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ee,Ae,ze;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ze=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Ce,Se,we;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Be,Le,De;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(De=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};const Ie=["Playground","FilledPrimary","OutlinedSecondary","GhostTertiary","DangerButton","SuccessButton","WarningButton","InfoButton","InverseButton","SizeComparison","WithIcon","LoadingState","DisabledState","FullWidthButton","WithAriaLabel","FocusStates","AccessibilityBestPractices","AllVariantsGrid"];export{L as AccessibilityBestPractices,D as AllVariantsGrid,g as DangerButton,C as DisabledState,m as FilledPrimary,B as FocusStates,S as FullWidthButton,y as GhostTertiary,v as InfoButton,h as InverseButton,z as LoadingState,b as OutlinedSecondary,p as Playground,E as SizeComparison,f as SuccessButton,x as WarningButton,w as WithAriaLabel,A as WithIcon,Ie as __namedExportsOrder,We as default};
