import"./atlas-icon-C7XCDMfu.js";import"./atlas-button-DW6zFrI_.js";const ve={title:"Components/Atlas Button",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-button");return t.setAttribute("label",e.label),t.setAttribute("variant",e.variant),t.setAttribute("color",e.color),t.setAttribute("size",e.size),e.icon?(t.setAttribute("icon",""),t.setAttribute("icon-name",e.iconName)):t.removeAttribute("icon"),e.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled"),e.loading?t.setAttribute("loading",""):t.removeAttribute("loading"),e.fullWidth?t.setAttribute("full-width",""):t.removeAttribute("full-width"),t.addEventListener("click",e.onClick),t},argTypes:{label:{control:"text",description:"Texto exibido no botão",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Button"}}},variant:{control:"select",options:["filled","outlined","ghost"],description:"Define o estilo visual do botão",table:{category:"Appearance",type:{summary:"'filled' | 'outlined' | 'ghost'"},defaultValue:{summary:"filled"}}},color:{control:"select",options:["primary","danger","success","warning","info","inverse"],description:"Cor semântica que define o propósito do botão",table:{category:"Appearance",type:{summary:"'primary' | 'danger' | 'success' | 'warning' | 'info' | 'inverse'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg","xl"],description:"Tamanho do botão (altura e padding)",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg' | 'xl'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Ativa a exibição de um ícone no botão",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"plus"}}},disabled:{control:"boolean",description:"Desabilita o botão, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Faz o botão ocupar 100% da largura do container",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},onClick:{action:"clicked",description:"Callback executado ao clicar no botão",table:{category:"Actions",type:{summary:"() => void"}}}},args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",disabled:!1,loading:!1,fullWidth:!1}},o={args:{label:"Button",variant:"filled",color:"primary",size:"md",icon:!1,iconName:"plus",disabled:!1,loading:!1,fullWidth:!1}},s={args:{label:"Primary Action",variant:"filled",color:"primary",size:"md"}},i={args:{label:"Secondary Action",variant:"outlined",color:"primary",size:"md"}},l={args:{label:"Tertiary Action",variant:"ghost",color:"primary",size:"md"}},c={args:{label:"Delete",variant:"filled",color:"danger",size:"md",icon:!0,iconName:"trash"}},d={args:{label:"Confirm",variant:"filled",color:"success",size:"md",icon:!0,iconName:"check"}},u={args:{label:"Warning",variant:"filled",color:"warning",size:"md",icon:!0,iconName:"alert-triangle"}},m={args:{label:"Information",variant:"filled",color:"info",size:"md",icon:!0,iconName:"info"}},p={args:{label:"Inverse Theme",variant:"filled",color:"inverse",size:"md"},parameters:{backgrounds:{default:"dark"}}},b={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.alignItems="flex-start",[{size:"sm",label:"Small (32px)"},{size:"md",label:"Medium (40px)"},{size:"lg",label:"Large (48px)"},{size:"xl",label:"Extra Large (56px)"}].forEach(({size:h,label:n})=>{const r=document.createElement("atlas-button");r.setAttribute("label",n),r.setAttribute("size",h),r.setAttribute("variant","filled"),r.setAttribute("color","primary"),e.appendChild(r)}),e}},g={args:{label:"Add Item",variant:"filled",color:"primary",size:"md",icon:!0,iconName:"plus"}},y={render:()=>{const e=document.createElement("atlas-button");return e.setAttribute("variant","filled"),e.setAttribute("color","primary"),e.setAttribute("size","md"),e.setAttribute("icon",""),e.setAttribute("icon-name","search"),e.setAttribute("label",""),e}},f={args:{label:"Processing...",variant:"filled",color:"primary",size:"md",loading:!0}},v={args:{label:"Disabled Button",variant:"filled",color:"primary",size:"md",disabled:!0}},A={args:{label:"Full Width Button",variant:"filled",color:"primary",size:"md",fullWidth:!0},parameters:{layout:"padded"}},z={render:()=>{const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(3, 1fr)",e.style.gap="24px",e.style.padding="20px";const t=["filled","outlined","ghost"];return["primary","danger","success","warning","info"].forEach(n=>{t.forEach(r=>{const a=document.createElement("atlas-button");a.setAttribute("label",`${r} ${n}`),a.setAttribute("variant",r),a.setAttribute("color",n),a.setAttribute("size","md"),e.appendChild(a)})}),e},parameters:{controls:{disable:!0}}};var x,S,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var E,I,W;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Primary Action',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(W=(I=s.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var C,N,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    color: 'primary',
    size: 'md'
  }
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var k,T,V;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Action',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var w,L,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash'
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var F,O,G;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'md',
    icon: true,
    iconName: 'check'
  }
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var $,_,q;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'filled',
    color: 'warning',
    size: 'md',
    icon: true,
    iconName: 'alert-triangle'
  }
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var M,j,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Information',
    variant: 'filled',
    color: 'info',
    size: 'md',
    icon: true,
    iconName: 'info'
  }
}`,...(H=(j=m.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,U,X;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'plus'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,oe,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ge=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const Ae=["Playground","FilledPrimary","OutlinedSecondary","GhostTertiary","DangerButton","SuccessButton","WarningButton","InfoButton","InverseButton","SizeComparison","WithIcon","IconOnly","LoadingState","DisabledState","FullWidthButton","AllVariantsGrid"];export{z as AllVariantsGrid,c as DangerButton,v as DisabledState,s as FilledPrimary,A as FullWidthButton,l as GhostTertiary,y as IconOnly,m as InfoButton,p as InverseButton,f as LoadingState,i as OutlinedSecondary,o as Playground,b as SizeComparison,d as SuccessButton,u as WarningButton,g as WithIcon,Ae as __namedExportsOrder,ve as default};
