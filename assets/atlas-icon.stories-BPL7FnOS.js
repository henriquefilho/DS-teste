import"./atlas-icon-ClNXfHK9.js";const V=["address-book","alert","alert-circle","alert-triangle","alert-triangle-filled","align-justify","android","apps","arrow-down","arrow-down-circle","arrow-left","arrow-right","arrow-right-left","arrow-up","arrow-up-circle","arrow-up-right","asaas-logo","award","backspace","banco-abc-brasil","banco-bmg","banco-brb","banco-da-amazonia","banco-do-brasil","banco-industrial-do-brasil","banco-original","banese","bank","bank-of-america","banpara","bar-chart","barcode","bars","base-logo","bell","bnb","box","bradesco","briefcase","btg-pactual","c6-bank","caixa","calendar","calendar-check","calendar-clock","calendar-magnifier","calendar-sync","camera","card","card-mastercard","cash-machine-with-ticket","cash-machine-with-ticket-1","celebrate","chart-line","check","check-circle","check-filled","chevron-down","chevron-left","chevron-right","chevron-up","circle","citi-bank","clock","clock-filled","cloud","cog","color-picker","companies","concentric-circles","contactless","copy","corner-up-right","credisis","cutlery","dashboard","daycoval","deutsche-bank","discord","dollar-sign","dollar-zap","double-check","download","email","envelope","equal","external-link","eye","eye-filled","eye-off","eye-off-filled","facebook","file","file-check","file-dollar","file-import","file-invoice","file-plus","file-text","file-users","files","filter","flapp-store-logo","flash","gift","github","globe","hammer","hand-card","hand-holding-money","hand-shake","headset","help-circle","hierarchy","home","id-card","image","info","instagram","inter","itau","key","keyboard","link","linkedin","list","loader","lock","lock-filled","log-in","magnifier","mail-box","map-pin","market-pin","maximize","megaphone","mercado-pago","message-circle","message-circle-dollar","message-circles","mic","minus","minus-circle","money","money-filled","money-notes","monitor","monitor-chart-up","moon","neon","nubank","open-finance","pagbank","paperclip","pencil","percentage","phone","pic-pay","pix","pix-filled","play","plus","plus-circle","power","printer","qrcode","quotation-marks","receipt","refresh","refresh-dollar","repeat","reverse-clock","rotate","rotate-cw","rotate-dollar","safra","santander","send","serasa","share","shield","shopping-bag","shopping-cart-down","shopping-cart-right","sicoob","sicredi","slash","sliders","smartphone","smartphone-contactless","smile-face","sort","sort-amount-down","sort-amount-up","sort-horizontal","spanner","split-arrows","spotify","square","square-signs","star","star-filled","stone","sun","tag","target","three-dots","three-dots-horinzontal","thumbs-down","thumbs-up","ticket","tiktok","trash","truck","unlink","unlock","unlock-filled","upload","user","user-filled","user-plus","users","video","virtual-card","wallet","whatsapp","x","x-circle","x-filled","x-logo","xp-investimentos","youtube","zero"],Y={title:"Components/Atlas Icon",tags:["autodocs"],render:e=>{const l=document.createElement("atlas-icon");return l.setAttribute("name",e.name),l.setAttribute("size",e.size),l},argTypes:{name:{control:"select",options:V,description:"Nome do ícone a ser exibido",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"circle"}}},size:{control:"select",options:["xs","sm","md","lg","xl","xxl"],description:"Tamanho do ícone",table:{category:"Appearance",type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'"},defaultValue:{summary:"md"}}}},args:{name:"circle",size:"md"}},s={args:{name:"star",size:"md"}},c={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.alignItems="center",e.style.gap="24px",e.style.padding="20px",[{size:"xs",label:"XS (8px)"},{size:"sm",label:"SM (16px)"},{size:"md",label:"MD (24px)"},{size:"lg",label:"LG (32px)"},{size:"xl",label:"XL (40px)"},{size:"xxl",label:"XXL (48px)"}].forEach(({size:a,label:n})=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.gap="8px";const r=document.createElement("atlas-icon");r.setAttribute("name","star-filled"),r.setAttribute("size",a);const o=document.createElement("span");o.textContent=n,o.style.fontSize="12px",o.style.color="#666",t.appendChild(r),t.appendChild(o),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},i={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))",e.style.gap="16px",e.style.padding="20px",["home","user","bell","envelope","calendar","clock","magnifier","cog","help-circle","info","alert-triangle","check-circle","x-circle","plus","minus","trash","pencil","download","upload","share","filter","star","heart","lock"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="8px",n.style.padding="12px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","lg");const r=document.createElement("span");r.textContent=a,r.style.fontSize="11px",r.style.color="#666",r.style.textAlign="center",r.style.wordBreak="break-word",n.appendChild(t),n.appendChild(r),e.appendChild(n)}),e},parameters:{controls:{disable:!0}}},p={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="16px",e.style.padding="20px",e.style.alignItems="center",["chevron-left","chevron-right","chevron-up","chevron-down","arrow-left","arrow-right","arrow-up","arrow-down"].forEach(a=>{const n=document.createElement("atlas-icon");n.setAttribute("name",a),n.setAttribute("size","lg"),e.appendChild(n)}),e},parameters:{controls:{disable:!0}}},d={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))",e.style.gap="16px",e.style.padding="20px",["dollar-sign","money","money-filled","pix","pix-filled","card","wallet","bank","receipt","barcode","qrcode","hand-holding-money","dollar-zap"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl");const r=document.createElement("span");r.textContent=a,r.style.fontSize="10px",r.style.color="#666",r.style.textAlign="center",n.appendChild(t),n.appendChild(r),e.appendChild(n)}),e},parameters:{controls:{disable:!0}}},m={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))",e.style.gap="16px",e.style.padding="20px",["banco-do-brasil","bradesco","itau","santander","caixa","nubank","inter","c6-bank","pagbank","pic-pay","mercado-pago","stone","safra","sicoob","sicredi"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="8px",n.style.padding="12px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl");const r=document.createElement("span");r.textContent=a,r.style.fontSize="10px",r.style.color="#666",r.style.textAlign="center",r.style.wordBreak="break-word",n.appendChild(t),n.appendChild(r),e.appendChild(n)}),e},parameters:{controls:{disable:!0}}},u={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="24px",e.style.padding="20px",e.style.alignItems="center",["facebook","instagram","linkedin","x-logo","youtube","whatsapp","github","discord","tiktok","spotify"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.gap="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl");const r=document.createElement("span");r.textContent=a,r.style.fontSize="10px",r.style.color="#666",n.appendChild(t),n.appendChild(r),e.appendChild(n)}),e},parameters:{controls:{disable:!0}}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="32px",e.style.padding="20px",e.style.alignItems="center",[{name:"check-circle",color:"#28a745"},{name:"alert-triangle",color:"#ffc107"},{name:"x-circle",color:"#dc3545"},{name:"info",color:"#17a2b8"},{name:"loader",color:"#6c757d"}].forEach(({name:a,color:n})=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.gap="8px";const r=document.createElement("atlas-icon");r.setAttribute("name",a),r.setAttribute("size","xl"),r.style.color=n;const o=document.createElement("span");o.textContent=a,o.style.fontSize="11px",o.style.color="#666",t.appendChild(r),t.appendChild(o),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},b={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))",e.style.gap="12px",e.style.padding="20px",e.style.maxHeight="600px",e.style.overflowY="auto",V.forEach(l=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.gap="6px",a.style.padding="8px",a.style.cursor="pointer",a.style.transition="background-color 0.2s",a.title=`Click to copy: ${l}`,a.addEventListener("mouseenter",()=>{a.style.backgroundColor="#f5f5f5",a.style.borderRadius="6px"}),a.addEventListener("mouseleave",()=>{a.style.backgroundColor="transparent"}),a.addEventListener("click",()=>{navigator.clipboard.writeText(l)});const n=document.createElement("atlas-icon");n.setAttribute("name",l),n.setAttribute("size","md");const t=document.createElement("span");t.textContent=l,t.style.fontSize="9px",t.style.color="#666",t.style.textAlign="center",t.style.wordBreak="break-word",t.style.maxWidth="100px",a.appendChild(n),a.appendChild(t),e.appendChild(a)}),e},parameters:{controls:{disable:!0}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'star',
    size: 'md'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,w,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '24px';
    container.style.padding = '20px';
    const sizes = [{
      size: 'xs',
      label: 'XS (8px)'
    }, {
      size: 'sm',
      label: 'SM (16px)'
    }, {
      size: 'md',
      label: 'MD (24px)'
    }, {
      size: 'lg',
      label: 'LG (32px)'
    }, {
      size: 'xl',
      label: 'XL (40px)'
    }, {
      size: 'xxl',
      label: 'XXL (48px)'
    }];
    sizes.forEach(({
      size,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', 'star-filled');
      icon.setAttribute('size', size);
      const labelElement = document.createElement('span');
      labelElement.textContent = label;
      labelElement.style.fontSize = '12px';
      labelElement.style.color = '#666';
      wrapper.appendChild(icon);
      wrapper.appendChild(labelElement);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,C,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';
    const commonIcons = ['home', 'user', 'bell', 'envelope', 'calendar', 'clock', 'magnifier', 'cog', 'help-circle', 'info', 'alert-triangle', 'check-circle', 'x-circle', 'plus', 'minus', 'trash', 'pencil', 'download', 'upload', 'share', 'filter', 'star', 'heart', 'lock'];
    commonIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      wrapper.style.padding = '12px';
      wrapper.style.border = '1px solid #e0e0e0';
      wrapper.style.borderRadius = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'lg');
      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '11px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,I,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';
    const navIcons = ['chevron-left', 'chevron-right', 'chevron-up', 'chevron-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down'];
    navIcons.forEach(iconName => {
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'lg');
      container.appendChild(icon);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var S,D,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';
    const financialIcons = ['dollar-sign', 'money', 'money-filled', 'pix', 'pix-filled', 'card', 'wallet', 'bank', 'receipt', 'barcode', 'qrcode', 'hand-holding-money', 'dollar-zap'];
    financialIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');
      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var L,T,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';
    const bankIcons = ['banco-do-brasil', 'bradesco', 'itau', 'santander', 'caixa', 'nubank', 'inter', 'c6-bank', 'pagbank', 'pic-pay', 'mercado-pago', 'stone', 'safra', 'sicoob', 'sicredi'];
    bankIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      wrapper.style.padding = '12px';
      wrapper.style.border = '1px solid #e0e0e0';
      wrapper.style.borderRadius = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');
      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var X,q,M;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';
    const socialIcons = ['facebook', 'instagram', 'linkedin', 'x-logo', 'youtube', 'whatsapp', 'github', 'discord', 'tiktok', 'spotify'];
    socialIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');
      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(q=u.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,_,F;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '32px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';
    const statusIcons = [{
      name: 'check-circle',
      color: '#28a745'
    }, {
      name: 'alert-triangle',
      color: '#ffc107'
    }, {
      name: 'x-circle',
      color: '#dc3545'
    }, {
      name: 'info',
      color: '#17a2b8'
    }, {
      name: 'loader',
      color: '#6c757d'
    }];
    statusIcons.forEach(({
      name,
      color
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', name);
      icon.setAttribute('size', 'xl');
      icon.style.color = color;
      const label = document.createElement('span');
      label.textContent = name;
      label.style.fontSize = '11px';
      label.style.color = '#666';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(_=y.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var G,H,P;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '12px';
    container.style.padding = '20px';
    container.style.maxHeight = '600px';
    container.style.overflowY = 'auto';
    availableIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '6px';
      wrapper.style.padding = '8px';
      wrapper.style.cursor = 'pointer';
      wrapper.style.transition = 'background-color 0.2s';
      wrapper.title = \`Click to copy: \${iconName}\`;
      wrapper.addEventListener('mouseenter', () => {
        wrapper.style.backgroundColor = '#f5f5f5';
        wrapper.style.borderRadius = '6px';
      });
      wrapper.addEventListener('mouseleave', () => {
        wrapper.style.backgroundColor = 'transparent';
      });
      wrapper.addEventListener('click', () => {
        navigator.clipboard.writeText(iconName);
      });
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'md');
      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '9px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';
      label.style.maxWidth = '100px';
      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    return container;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const $=["Playground","SizeComparison","CommonIcons","NavigationIcons","FinancialIcons","BankLogos","SocialMediaIcons","StatusIcons","AllIconsCatalog"];export{b as AllIconsCatalog,m as BankLogos,i as CommonIcons,d as FinancialIcons,p as NavigationIcons,s as Playground,c as SizeComparison,u as SocialMediaIcons,y as StatusIcons,$ as __namedExportsOrder,Y as default};
