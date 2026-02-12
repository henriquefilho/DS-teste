import"./atlas-icon-B_0Pd0rQ.js";import"./atlas-link-button-C5n062qN.js";const we={title:"Components/Atlas Link Button",tags:["autodocs"],render:e=>{const n=document.createElement("atlas-link-button");return n.setAttribute("label",e.label),n.setAttribute("color",e.color),n.setAttribute("size",e.size),e.icon?(n.setAttribute("icon",""),n.setAttribute("icon-name",e.iconName)):n.removeAttribute("icon"),e.disabled?n.setAttribute("disabled",""):n.removeAttribute("disabled"),e.loading?n.setAttribute("loading",""):n.removeAttribute("loading"),e.href?(n.setAttribute("href",e.href),n.setAttribute("target",e.target)):n.removeAttribute("href"),n.addEventListener("click",e.onClick),n},argTypes:{label:{control:"text",description:"Texto exibido no link-button",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Link button"}}},color:{control:"select",options:["primary","success","danger","white","black"],description:"Cor semântica do link-button",table:{category:"Appearance",type:{summary:"'primary' | 'success' | 'danger' | 'white' | 'black'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg"],description:"Tamanho da tipografia e ícone",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Exibe um ícone à direita do texto",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"arrow-up-right"}}},disabled:{control:"boolean",description:"Desabilita o link-button, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},href:{control:"text",description:"URL de destino. Quando definido, renderiza como <a> ao invés de <button>",table:{category:"Navigation",type:{summary:"string"},defaultValue:{summary:"undefined"}}},target:{control:"select",options:["_self","_blank","_parent","_top"],description:"Target para navegação (aplicado apenas quando href está definido)",if:{arg:"href",truthy:!0},table:{category:"Navigation",type:{summary:"'_self' | '_blank' | '_parent' | '_top'"},defaultValue:{summary:"_self"}}},onClick:{action:"clicked",description:"Callback executado ao clicar no link-button",table:{category:"Actions",type:{summary:"() => void"}}}},args:{label:"Link button",color:"primary",size:"md",icon:!1,iconName:"arrow-up-right",disabled:!1,loading:!1,href:"",target:"_self"}},i={args:{label:"Link button",color:"primary",size:"md",icon:!1,iconName:"arrow-up-right",disabled:!1,loading:!1,href:"",target:"_self"}},s={args:{label:"Ver mais detalhes",color:"primary",icon:!0}},l={args:{label:"Excluir item",color:"danger",icon:!0,iconName:"trash"}},c={args:{label:"Confirmar ação",color:"success",icon:!0,iconName:"check"}},d={args:{label:"Link branco",color:"white",icon:!0},parameters:{backgrounds:{default:"dark"}}},p={args:{label:"Link preto",color:"black",icon:!0}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="24px",e.style.alignItems="flex-start",e.style.padding="20px",[{size:"sm",label:"Small (14px)"},{size:"md",label:"Medium (16px)"},{size:"lg",label:"Large (18px)"}].forEach(({size:a,label:r})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",r),t.setAttribute("size",a),t.setAttribute("color","primary"),t.setAttribute("icon",""),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},u={args:{label:"Ver detalhes",color:"primary",size:"md",icon:!0,iconName:"arrow-up-right"}},b={args:{label:"Baixar arquivo",color:"primary",size:"md",icon:!0,iconName:"download"}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.padding="20px",[{label:"Ver mais",iconName:"arrow-up-right"},{label:"Editar",iconName:"pencil"},{label:"Excluir",iconName:"trash"},{label:"Compartilhar",iconName:"share"},{label:"Baixar",iconName:"download"},{label:"Upload",iconName:"upload"}].forEach(({label:a,iconName:r})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",a),t.setAttribute("color","primary"),t.setAttribute("icon",""),t.setAttribute("icon-name",r),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},g={args:{label:"Executar ação",color:"primary",size:"md",icon:!0},parameters:{docs:{description:{story:'Quando `href` não está definido, o componente renderiza como `<button type="button">` e dispara eventos de click.'}}}},x={args:{label:"Ir para página interna",color:"primary",size:"md",icon:!0,href:"/pagina-interna",target:"_self"},parameters:{docs:{description:{story:"Quando `href` está definido, o componente renderiza como `<a>` e realiza navegação."}}}},k={args:{label:"Abrir link externo",color:"primary",size:"md",icon:!0,iconName:"external-link",href:"https://example.com",target:"_blank"},parameters:{docs:{description:{story:'Link externo que abre em nova aba com `target="_blank"`.'}}}},f={args:{label:"Processando...",color:"primary",size:"md",loading:!0}},h={args:{label:"Link desabilitado",color:"primary",size:"md",icon:!0,disabled:!0}},A={args:{label:"Link desabilitado",color:"primary",size:"md",icon:!0,href:"https://example.com",disabled:!0},parameters:{docs:{description:{story:"Link com `href` definido mas desabilitado. O evento de navegação é prevenido."}}}},E={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.padding="20px",[{label:"Ver todos os produtos",color:"primary"},{label:"Saiba mais",color:"primary"},{label:"Ir para checkout",color:"success"},{label:"Cancelar pedido",color:"danger"}].forEach(({label:a,color:r})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",a),t.setAttribute("color",r),t.setAttribute("icon",""),t.setAttribute("icon-name","arrow-up-right"),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},C={render:()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="600px",e.style.fontSize="16px",e.style.lineHeight="1.6",e.style.color="#333";const n=document.createElement("p");n.style.margin="0";const a=document.createTextNode("Este é um exemplo de texto corrido onde você pode usar "),r=document.createElement("atlas-link-button");r.setAttribute("label","um link-button inline"),r.setAttribute("color","primary"),r.setAttribute("size","md"),r.setAttribute("icon",""),r.style.verticalAlign="baseline";const t=document.createTextNode(" no meio do conteúdo para chamar atenção para uma ação específica.");return n.appendChild(a),n.appendChild(r),n.appendChild(t),e.appendChild(n),e},parameters:{controls:{disable:!0}}},z={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(2, 1fr)",e.style.gap="24px",e.style.padding="20px",["primary","success","danger","black"].forEach(a=>{const r=document.createElement("div");r.style.display="flex",r.style.flexDirection="column",r.style.gap="8px";const t=document.createElement("span");t.textContent=a.charAt(0).toUpperCase()+a.slice(1),t.style.fontSize="12px",t.style.fontWeight="bold",t.style.color="#666",t.style.textTransform="capitalize";const o=document.createElement("atlas-link-button");o.setAttribute("label",`Link ${a}`),o.setAttribute("color",a),o.setAttribute("icon",""),r.appendChild(t),r.appendChild(o),e.appendChild(r)}),e},parameters:{controls:{disable:!0}}};var B,v,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Link button',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'arrow-up-right',
    disabled: false,
    loading: false,
    href: '',
    target: '_self'
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,L,w;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Ver mais detalhes',
    color: 'primary',
    icon: true
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var _,V,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Excluir item',
    color: 'danger',
    icon: true,
    iconName: 'trash'
  }
}`,...(I=(V=l.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var D,T,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Confirmar ação',
    color: 'success',
    icon: true,
    iconName: 'check'
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var q,P,Q;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Link branco',
    color: 'white',
    icon: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,O,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Link preto',
    color: 'black',
    icon: true
  }
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,M,$;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.alignItems = 'flex-start';
    container.style.padding = '20px';
    const sizes = [{
      size: 'sm',
      label: 'Small (14px)'
    }, {
      size: 'md',
      label: 'Medium (16px)'
    }, {
      size: 'lg',
      label: 'Large (18px)'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('size', size);
      linkButton.setAttribute('color', 'primary');
      linkButton.setAttribute('icon', '');
      container.appendChild(linkButton);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var F,R,j;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Ver detalhes',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'arrow-up-right'
  }
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var J,K,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Baixar arquivo',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'download'
  }
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '20px';
    const variations = [{
      label: 'Ver mais',
      iconName: 'arrow-up-right'
    }, {
      label: 'Editar',
      iconName: 'pencil'
    }, {
      label: 'Excluir',
      iconName: 'trash'
    }, {
      label: 'Compartilhar',
      iconName: 'share'
    }, {
      label: 'Baixar',
      iconName: 'download'
    }, {
      label: 'Upload',
      iconName: 'upload'
    }];
    variations.forEach(({
      label,
      iconName
    }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('color', 'primary');
      linkButton.setAttribute('icon', '');
      linkButton.setAttribute('icon-name', iconName);
      container.appendChild(linkButton);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Executar ação',
    color: 'primary',
    size: 'md',
    icon: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Quando \`href\` não está definido, o componente renderiza como \`<button type="button">\` e dispara eventos de click.'
      }
    }
  }
}`,...(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,oe,ie;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Ir para página interna',
    color: 'primary',
    size: 'md',
    icon: true,
    href: '/pagina-interna',
    target: '_self'
  },
  parameters: {
    docs: {
      description: {
        story: 'Quando \`href\` está definido, o componente renderiza como \`<a>\` e realiza navegação.'
      }
    }
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,le,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Abrir link externo',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'external-link',
    href: 'https://example.com',
    target: '_blank'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link externo que abre em nova aba com \`target="_blank"\`.'
      }
    }
  }
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,me;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'Processando...',
    color: 'primary',
    size: 'md',
    loading: true
  }
}`,...(me=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,be,ye;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Link desabilitado',
    color: 'primary',
    size: 'md',
    icon: true,
    disabled: true
  }
}`,...(ye=(be=h.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,xe,ke;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Link desabilitado',
    color: 'primary',
    size: 'md',
    icon: true,
    href: 'https://example.com',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Link com \`href\` definido mas desabilitado. O evento de navegação é prevenido.'
      }
    }
  }
}`,...(ke=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var fe,he,Ae;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.padding = '20px';
    const useCases = [{
      label: 'Ver todos os produtos',
      color: 'primary'
    }, {
      label: 'Saiba mais',
      color: 'primary'
    }, {
      label: 'Ir para checkout',
      color: 'success'
    }, {
      label: 'Cancelar pedido',
      color: 'danger'
    }];
    useCases.forEach(({
      label,
      color
    }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('color', color);
      linkButton.setAttribute('icon', '');
      linkButton.setAttribute('icon-name', 'arrow-up-right');
      container.appendChild(linkButton);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(he=E.parameters)==null?void 0:he.docs)==null?void 0:Ae.source}}};var Ee,Ce,ze;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    container.style.fontSize = '16px';
    container.style.lineHeight = '1.6';
    container.style.color = '#333';
    const paragraph = document.createElement('p');
    paragraph.style.margin = '0';
    const text1 = document.createTextNode('Este é um exemplo de texto corrido onde você pode usar ');
    const linkButton = document.createElement('atlas-link-button');
    linkButton.setAttribute('label', 'um link-button inline');
    linkButton.setAttribute('color', 'primary');
    linkButton.setAttribute('size', 'md');
    linkButton.setAttribute('icon', '');
    linkButton.style.verticalAlign = 'baseline';
    const text2 = document.createTextNode(' no meio do conteúdo para chamar atenção para uma ação específica.');
    paragraph.appendChild(text1);
    paragraph.appendChild(linkButton);
    paragraph.appendChild(text2);
    container.appendChild(paragraph);
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ze=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Be,ve,Se;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    container.style.gap = '24px';
    container.style.padding = '20px';
    const colors = ['primary', 'success', 'danger', 'black'];
    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.gap = '8px';
      const title = document.createElement('span');
      title.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      title.style.fontSize = '12px';
      title.style.fontWeight = 'bold';
      title.style.color = '#666';
      title.style.textTransform = 'capitalize';
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', \`Link \${color}\`);
      linkButton.setAttribute('color', color);
      linkButton.setAttribute('icon', '');
      wrapper.appendChild(title);
      wrapper.appendChild(linkButton);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const _e=["Playground","PrimaryColor","DangerColor","SuccessColor","WhiteColor","BlackColor","SizeComparison","WithIcon","WithCustomIcon","IconVariations","AsButton","AsInternalLink","AsExternalLink","LoadingState","DisabledState","DisabledLink","CallToAction","InlineText","AllColorsGrid"];export{z as AllColorsGrid,g as AsButton,k as AsExternalLink,x as AsInternalLink,p as BlackColor,E as CallToAction,l as DangerColor,A as DisabledLink,h as DisabledState,y as IconVariations,C as InlineText,f as LoadingState,i as Playground,s as PrimaryColor,m as SizeComparison,c as SuccessColor,d as WhiteColor,b as WithCustomIcon,u as WithIcon,_e as __namedExportsOrder,we as default};
