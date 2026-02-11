const ye={title:"Components/Atlas Button",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-button");return e.label&&t.setAttribute("label",e.label),e.variant&&t.setAttribute("variant",e.variant),e.color&&t.setAttribute("color",e.color),e.size&&t.setAttribute("size",e.size),e.icon&&(t.setAttribute("icon",""),e.iconName&&t.setAttribute("icon-name",e.iconName)),e.disabled&&t.setAttribute("disabled",""),e.loading&&t.setAttribute("loading",""),e.fullWidth&&t.setAttribute("full-width",""),t.addEventListener("click",e.onClick),t},argTypes:{label:{control:"text",description:"Texto exibido no botão",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Button"}}},variant:{control:"select",options:["filled","outlined","ghost"],description:"Define o estilo visual do botão",table:{category:"Appearance",type:{summary:"'filled' | 'outlined' | 'ghost'"},defaultValue:{summary:"filled"}}},color:{control:"select",options:["primary","danger","success","warning","info","inverse"],description:"Cor semântica que define o propósito do botão",table:{category:"Appearance",type:{summary:"'primary' | 'danger' | 'success' | 'warning' | 'info' | 'inverse'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg","xl"],description:"Tamanho do botão (altura e padding)",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg' | 'xl'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Ativa a exibição de um ícone no botão",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"plus"}}},disabled:{control:"boolean",description:"Desabilita o botão, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Faz o botão ocupar 100% da largura do container",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"Callback executado ao clicar no botão",table:{category:"Actions",type:{summary:"() => void"}}}},parameters:{docs:{description:{component:`# Atlas Button

Componente de botão principal do Design System com suporte completo a variantes,
estados de carregamento, ícones e temas semânticos.

**Status:** Stable ✅

## Características
- 3 variantes visuais (Filled, Outlined, Ghost)
- 6 cores semânticas (Primary, Danger, Success, Warning, Info, Inverse)
- 4 tamanhos (SM: 32px, MD: 40px, LG: 48px, XL: 56px)
- Suporte a ícones e estados de loading
- Acessibilidade com ARIA`}}}},o={args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",disabled:!1,loading:!1,fullWidth:!1}},s={args:{label:"Primary Action",variant:"filled",color:"primary",size:"md"}},i={args:{label:"Secondary Action",variant:"outlined",color:"primary",size:"md"}},l={args:{label:"Tertiary Action",variant:"ghost",color:"primary",size:"md"}},c={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash"}},d={args:{label:"Confirm",variant:"filled",color:"success",size:"md",icon:!0,iconName:"check"}},u={args:{label:"Warning",variant:"filled",color:"warning",size:"md",icon:!0,iconName:"alert-triangle"}},m={args:{label:"Information",variant:"filled",color:"info",size:"md",icon:!0,iconName:"info"}},p={args:{label:"Inverse Theme",variant:"filled",color:"inverse",size:"md"},parameters:{backgrounds:{default:"dark"}}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.alignItems="flex-start",[{size:"sm",label:"Small (32px)"},{size:"md",label:"Medium (40px)"},{size:"lg",label:"Large (48px)"},{size:"xl",label:"Extra Large (56px)"}].forEach(({size:x,label:r})=>{const a=document.createElement("atlas-button");a.setAttribute("label",r),a.setAttribute("size",x),a.setAttribute("variant","filled"),a.setAttribute("color","primary"),e.appendChild(a)}),e}},g={args:{label:"Add Item",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"}},y={render:()=>{const e=document.createElement("atlas-button");return e.setAttribute("variant","filled"),e.setAttribute("color","primary"),e.setAttribute("size","md"),e.setAttribute("icon",""),e.setAttribute("icon-name","search"),e.setAttribute("label",""),e}},f={args:{label:"Processing...",variant:"filled",color:"primary",size:"md",loading:!0}},v={args:{label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0}},A={args:{label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0},parameters:{layout:"padded"}},z={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="24px",e.style.padding="20px";const t=["filled","outlined","ghost"];return["primary","danger","success","warning","info"].forEach(r=>{t.forEach(a=>{const n=document.createElement("atlas-button");n.setAttribute("label",`${a} ${r}`),n.setAttribute("variant",a),n.setAttribute("color",r),n.setAttribute("size","md"),e.appendChild(n)})}),e},parameters:{controls:{disable:!0}}};var h,S,E;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'plus',
    disabled: false,
    loading: false,
    fullWidth: false
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var B,I,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Primary Action',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,W,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    color: 'primary',
    size: 'md'
  }
}`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var k,T,V;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Action',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var L,P,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash'
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var w,G,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'md',
    icon: true,
    iconName: 'check'
  }
}`,...(O=(G=d.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var M,$,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'filled',
    color: 'warning',
    size: 'md',
    icon: true,
    iconName: 'alert-triangle'
  }
}`,...(_=($=u.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,R,X;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Information',
    variant: 'filled',
    color: 'info',
    size: 'md',
    icon: true,
    iconName: 'info'
  }
}`,...(X=(R=m.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var j,H,J;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'plus'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const button = document.createElement('atlas-button');
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'md');
    button.setAttribute('icon', '');
    button.setAttribute('icon-name', 'search');
    button.setAttribute('label', ''); // Label vazio para icon-only
    return button;
  }
}`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,oe,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Processing...',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    loading: true
  }
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,me;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ge;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const fe=["Playground","FilledPrimary","OutlinedSecondary","GhostTertiary","DangerButton","SuccessButton","WarningButton","InfoButton","InverseButton","SizeComparison","WithIcon","IconOnly","LoadingState","DisabledState","FullWidthButton","AllVariantsGrid"];export{z as AllVariantsGrid,c as DangerButton,v as DisabledState,s as FilledPrimary,A as FullWidthButton,l as GhostTertiary,y as IconOnly,m as InfoButton,p as InverseButton,f as LoadingState,i as OutlinedSecondary,o as Playground,b as SizeComparison,d as SuccessButton,u as WarningButton,g as WithIcon,fe as __namedExportsOrder,ye as default};
