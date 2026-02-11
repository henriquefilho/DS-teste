import"./atlas-icon-C7XCDMfu.js";const Q={title:"Components/AtlasIcon",tags:["autodocs"],argTypes:{name:{control:"select",options:Object.keys(AtlasIcon.iconMap),description:"Nome do ícone",table:{type:{summary:"string"},defaultValue:{summary:"circle"}}},size:{control:"select",options:["xs","sm","md","lg","xl","xxl"],description:"Tamanho do ícone",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},V={"address-book":"",alert:"","alert-circle":"","alert-triangle":"","alert-triangle-filled":"","align-justify":"",android:"",apps:"","arrow-down":"","arrow-down-circle":"","arrow-left":"","arrow-right":"","arrow-right-left":"","arrow-up":"","arrow-up-circle":"","arrow-up-right":"","asaas-logo":"",award:"",backspace:"","banco-abc-brasil":"","banco-bmg":"","banco-brb":"","banco-da-amazonia":"","banco-do-brasil":"","banco-industrial-do-brasil":"","banco-original":"",banese:"",bank:"","bank-of-america":"",banpara:"","bar-chart":"",barcode:"",bars:"","base-logo":"",bell:"",bnb:"",box:"",bradesco:"",briefcase:"","btg-pactual":"","c6-bank":"",caixa:"",calendar:"","calendar-check":"","calendar-clock":"","calendar-magnifier":"","calendar-sync":"",camera:"",card:"","card-mastercard":"","cash-machine-with-ticket":"","cash-machine-with-ticket-1":"",celebrate:"","chart-line":"",check:"","check-circle":"","check-filled":"","chevron-down":"","chevron-left":"","chevron-right":"","chevron-up":"",circle:"","citi-bank":"",clock:"","clock-filled":"",cloud:"",cog:"","color-picker":"",companies:"","concentric-circles":"",contactless:"",copy:"","corner-up-right":"",credisis:"",cutlery:"",dashboard:"",daycoval:"","deutsche-bank":"",discord:"","dollar-sign":"","dollar-zap":"","double-check":"",download:"",email:"",envelope:"",equal:"","external-link":"",eye:"","eye-filled":"","eye-off":"","eye-off-filled":"",facebook:"",file:"","file-check":"","file-dollar":"","file-import":"","file-invoice":"","file-plus":"","file-text":"","file-users":"",files:"",filter:"","flapp-store-logo":"",flash:"",gift:"",github:"",globe:"",hammer:"","hand-card":"","hand-holding-money":"","hand-shake":"",headset:"","help-circle":"",hierarchy:"",home:"","id-card":"",image:"",info:"",instagram:"",inter:"",itau:"",key:"",keyboard:"",link:"",linkedin:"",list:"",loader:"",lock:"","lock-filled":"","log-in":"",magnifier:"","mail-box":"","map-pin":"","market-pin":"",maximize:"",megaphone:"","mercado-pago":"","message-circle":"","message-circle-dollar":"","message-circles":"",mic:"",minus:"","minus-circle":"",money:"","money-filled":"","money-notes":"",monitor:"","monitor-chart-up":"",moon:"",neon:"",nubank:"","open-finance":"",pagbank:"",paperclip:"",pencil:"",percentage:"",phone:"","pic-pay":"",pix:"","pix-filled":"",play:"",plus:"","plus-circle":"",power:"",printer:"",qrcode:"","quotation-marks":"",receipt:"",refresh:"","refresh-dollar":"",repeat:"","reverse-clock":"",rotate:"","rotate-cw":"","rotate-dollar":"",safra:"",santander:"",send:"",serasa:"",share:"",shield:"","shopping-bag":"","shopping-cart-down":"","shopping-cart-right":"",sicoob:"",sicredi:"",slash:"",sliders:"",smartphone:"","smartphone-contactless":"","smile-face":"",sort:"","sort-amount-down":"","sort-amount-up":"","sort-horizontal":"",spanner:"","split-arrows":"",spotify:"",square:"","square-signs":"",star:"","star-filled":"",stone:"",sun:"",tag:"",target:"","three-dots":"","three-dots-horinzontal":"","thumbs-down":"","thumbs-up":"",ticket:"",tiktok:"",trash:"",truck:"",unlink:"",unlock:"","unlock-filled":"",upload:"",user:"","user-filled":"","user-plus":"",users:"",video:"","virtual-card":"",wallet:"",whatsapp:"",x:"","x-circle":"","x-filled":"","x-logo":"","xp-investimentos":"",youtube:"",zero:""},i=Object.keys(V),F=t=>{const r=document.createElement("atlas-icon");return t.name&&r.setAttribute("name",t.name),t.size&&r.setAttribute("size",t.size),r},u=F.bind({});u.args={name:"home",size:"md"};const p=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="24px",[{name:"Extra Small (8px)",value:"xs"},{name:"Small (16px)",value:"sm"},{name:"Medium (24px)",value:"md"},{name:"Large (32px)",value:"lg"},{name:"Extra Large (40px)",value:"xl"},{name:"Extra Extra Large (48px)",value:"xxl"}].forEach(({name:o,value:e})=>{const n=document.createElement("div");n.style.display="flex",n.style.alignItems="center",n.style.gap="16px";const a=document.createElement("atlas-icon");a.setAttribute("name","star-filled"),a.setAttribute("size",e),n.appendChild(a);const l=document.createElement("span");l.textContent=o,l.style.fontSize="14px",n.appendChild(l),t.appendChild(n)}),t},m=()=>{const t=document.createElement("div");t.style.padding="20px";const r=document.createElement("div");r.style.marginBottom="20px",r.style.position="sticky",r.style.top="0",r.style.backgroundColor="white",r.style.padding="10px 0",r.style.zIndex="10";const o=document.createElement("input");o.type="text",o.placeholder="Buscar ícones...",o.style.width="100%",o.style.padding="12px",o.style.fontSize="14px",o.style.border="1px solid #ddd",o.style.borderRadius="8px",o.style.boxSizing="border-box",r.appendChild(o);const e=document.createElement("div");e.style.marginTop="8px",e.style.fontSize="12px",e.style.color="#666",e.textContent=`Total: ${i.length} ícones`,r.appendChild(e),t.appendChild(r);const n=document.createElement("div");return n.style.display="grid",n.style.gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))",n.style.gap="16px",i.forEach(a=>{const l=document.createElement("div");l.className="icon-card",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="center",l.style.justifyContent="center",l.style.padding="16px",l.style.border="1px solid #e0e0e0",l.style.borderRadius="8px",l.style.cursor="pointer",l.style.transition="all 0.2s",l.style.minHeight="100px",l.dataset.name=a;const s=document.createElement("atlas-icon");s.setAttribute("name",a),s.setAttribute("size","lg"),s.style.marginBottom="8px",l.appendChild(s);const c=document.createElement("span");c.textContent=a,c.style.fontSize="11px",c.style.textAlign="center",c.style.wordBreak="break-word",c.style.color="#333",l.appendChild(c),l.addEventListener("mouseenter",()=>{l.style.backgroundColor="#f5f5f5",l.style.borderColor="#0055cc",l.style.transform="translateY(-2px)",l.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)"}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor="transparent",l.style.borderColor="#e0e0e0",l.style.transform="translateY(0)",l.style.boxShadow="none"}),l.addEventListener("click",()=>{navigator.clipboard.writeText(a);const d=c.textContent;c.textContent="✓ Copiado!",c.style.color="#198754",setTimeout(()=>{c.textContent=d,c.style.color="#333"},1500)}),n.appendChild(l)}),t.appendChild(n),o.addEventListener("input",a=>{const l=a.target.value.toLowerCase(),s=n.querySelectorAll(".icon-card");let c=0;s.forEach(d=>{d.dataset.name.includes(l)?(d.style.display="flex",c++):d.style.display="none"}),e.textContent=`Mostrando: ${c} de ${i.length} ícones`}),t},y=()=>{const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))",t.style.gap="16px",["home","user","star","check","x","plus","minus","arrow-right","arrow-left","arrow-up","arrow-down","calendar","clock","bell","envelope","magnifier","cog","trash","pencil","eye","lock","unlock"].forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.padding="16px",e.style.border="1px solid #e0e0e0",e.style.borderRadius="8px";const n=document.createElement("atlas-icon");n.setAttribute("name",o),n.setAttribute("size","xl"),n.style.marginBottom="8px",e.appendChild(n);const a=document.createElement("span");a.textContent=o,a.style.fontSize="11px",a.style.textAlign="center",e.appendChild(a),t.appendChild(e)}),t},x=()=>{const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))",t.style.gap="16px",i.filter(o=>o.includes("banco-")||["nubank","inter","itau","bradesco","santander","caixa","c6-bank","neon","stone","pagbank","pic-pay","mercado-pago","btg-pactual","safra","sicoob","sicredi","xp-investimentos"].includes(o)).forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.padding="16px",e.style.border="1px solid #e0e0e0",e.style.borderRadius="8px";const n=document.createElement("atlas-icon");n.setAttribute("name",o),n.setAttribute("size","xl"),n.style.marginBottom="8px",e.appendChild(n);const a=document.createElement("span");a.textContent=o,a.style.fontSize="10px",a.style.textAlign="center",a.style.wordBreak="break-word",e.appendChild(a),t.appendChild(e)}),t},b=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.gap="16px",t.style.flexWrap="wrap",["facebook","instagram","linkedin","whatsapp","youtube","twitter","x-logo","github","discord","spotify","tiktok"].filter(o=>i.includes(o)).forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.padding="16px",e.style.border="1px solid #e0e0e0",e.style.borderRadius="8px",e.style.minWidth="100px";const n=document.createElement("atlas-icon");n.setAttribute("name",o),n.setAttribute("size","xl"),n.style.marginBottom="8px",e.appendChild(n);const a=document.createElement("span");a.textContent=o,a.style.fontSize="11px",a.style.textAlign="center",e.appendChild(a),t.appendChild(e)}),t},g=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.gap="16px",t.style.flexWrap="wrap",i.filter(o=>o.includes("pix")||o.includes("card")||o.includes("money")||o.includes("dollar")||o.includes("wallet")||o.includes("hand-")||o==="contactless"||o==="smartphone-contactless").forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.padding="16px",e.style.border="1px solid #e0e0e0",e.style.borderRadius="8px",e.style.minWidth="100px";const n=document.createElement("atlas-icon");n.setAttribute("name",o),n.setAttribute("size","xl"),n.style.marginBottom="8px",e.appendChild(n);const a=document.createElement("span");a.textContent=o,a.style.fontSize="10px",a.style.textAlign="center",a.style.wordBreak="break-word",e.appendChild(a),t.appendChild(e)}),t},f=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.gap="24px",t.style.flexWrap="wrap",[{name:"check-circle",color:"#198754",label:"Success"},{name:"alert-triangle",color:"#d97706",label:"Warning"},{name:"x-circle",color:"#cc0000",label:"Error"},{name:"info",color:"#0d6efd",label:"Info"},{name:"star-filled",color:"#ffc107",label:"Star"}].forEach(({name:o,color:e,label:n})=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.gap="8px";const l=document.createElement("atlas-icon");l.setAttribute("name",o),l.setAttribute("size","xxl"),l.style.color=e,a.appendChild(l);const s=document.createElement("span");s.textContent=n,s.style.fontSize="12px",a.appendChild(s),t.appendChild(a)}),t},h=()=>{const t=document.createElement("div");return t.style.display="flex",t.style.gap="12px",t.style.flexWrap="wrap",[{icon:"plus",text:"Adicionar"},{icon:"trash",text:"Excluir"},{icon:"pencil",text:"Editar"},{icon:"download",text:"Download"},{icon:"upload",text:"Upload"}].forEach(({icon:o,text:e})=>{const n=document.createElement("button");n.style.display="flex",n.style.alignItems="center",n.style.gap="8px",n.style.padding="12px 24px",n.style.border="1px solid #0055cc",n.style.borderRadius="8px",n.style.backgroundColor="#0055cc",n.style.color="white",n.style.fontSize="14px",n.style.fontWeight="600",n.style.cursor="pointer";const a=document.createElement("atlas-icon");a.setAttribute("name",o),a.setAttribute("size","sm"),n.appendChild(a);const l=document.createElement("span");l.textContent=e,n.appendChild(l),n.addEventListener("mouseenter",()=>{n.style.backgroundColor="#003d99"}),n.addEventListener("mouseleave",()=>{n.style.backgroundColor="#0055cc"}),t.appendChild(n)}),t};var E,C,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const icon = document.createElement('atlas-icon');
  if (args.name) icon.setAttribute('name', args.name);
  if (args.size) icon.setAttribute('size', args.size);
  return icon;
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,w,I;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';
  const sizes = [{
    name: 'Extra Small (8px)',
    value: 'xs'
  }, {
    name: 'Small (16px)',
    value: 'sm'
  }, {
    name: 'Medium (24px)',
    value: 'md'
  }, {
    name: 'Large (32px)',
    value: 'lg'
  }, {
    name: 'Extra Large (40px)',
    value: 'xl'
  }, {
    name: 'Extra Extra Large (48px)',
    value: 'xxl'
  }];
  sizes.forEach(({
    name,
    value
  }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '16px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', 'star-filled');
    icon.setAttribute('size', value);
    row.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '14px';
    row.appendChild(label);
    container.appendChild(row);
  });
  return container;
}`,...(I=(w=p.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,A,S;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  // Barra de busca
  const searchContainer = document.createElement('div');
  searchContainer.style.marginBottom = '20px';
  searchContainer.style.position = 'sticky';
  searchContainer.style.top = '0';
  searchContainer.style.backgroundColor = 'white';
  searchContainer.style.padding = '10px 0';
  searchContainer.style.zIndex = '10';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Buscar ícones...';
  searchInput.style.width = '100%';
  searchInput.style.padding = '12px';
  searchInput.style.fontSize = '14px';
  searchInput.style.border = '1px solid #ddd';
  searchInput.style.borderRadius = '8px';
  searchInput.style.boxSizing = 'border-box';
  searchContainer.appendChild(searchInput);
  const countLabel = document.createElement('div');
  countLabel.style.marginTop = '8px';
  countLabel.style.fontSize = '12px';
  countLabel.style.color = '#666';
  countLabel.textContent = \`Total: \${iconNames.length} ícones\`;
  searchContainer.appendChild(countLabel);
  container.appendChild(searchContainer);

  // Grid de ícones
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
  grid.style.gap = '16px';
  iconNames.forEach(name => {
    const card = document.createElement('div');
    card.className = 'icon-card';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.cursor = 'pointer';
    card.style.transition = 'all 0.2s';
    card.style.minHeight = '100px';
    card.dataset.name = name;
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'lg');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    label.style.color = '#333';
    card.appendChild(label);

    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.backgroundColor = '#f5f5f5';
      card.style.borderColor = '#0055cc';
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = 'transparent';
      card.style.borderColor = '#e0e0e0';
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });

    // Click para copiar
    card.addEventListener('click', () => {
      navigator.clipboard.writeText(name);
      const originalText = label.textContent;
      label.textContent = '✓ Copiado!';
      label.style.color = '#198754';
      setTimeout(() => {
        label.textContent = originalText;
        label.style.color = '#333';
      }, 1500);
    });
    grid.appendChild(card);
  });
  container.appendChild(grid);

  // Funcionalidade de busca
  searchInput.addEventListener('input', e => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = grid.querySelectorAll('.icon-card');
    let visibleCount = 0;
    cards.forEach(card => {
      const name = card.dataset.name;
      if (name.includes(searchTerm)) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    countLabel.textContent = \`Mostrando: \${visibleCount} de \${iconNames.length} ícones\`;
  });
  return container;
}`,...(S=(A=m.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var L,B,T;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
  container.style.gap = '16px';
  const popularIcons = ['home', 'user', 'star', 'check', 'x', 'plus', 'minus', 'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down', 'calendar', 'clock', 'bell', 'envelope', 'magnifier', 'cog', 'trash', 'pencil', 'eye', 'lock', 'unlock'];
  popularIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    card.appendChild(label);
    container.appendChild(card);
  });
  return container;
}`,...(T=(B=y.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var D,W,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
  container.style.gap = '16px';
  const bankIcons = iconNames.filter(name => name.includes('banco-') || ['nubank', 'inter', 'itau', 'bradesco', 'santander', 'caixa', 'c6-bank', 'neon', 'stone', 'pagbank', 'pic-pay', 'mercado-pago', 'btg-pactual', 'safra', 'sicoob', 'sicredi', 'xp-investimentos'].includes(name));
  bankIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '10px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    card.appendChild(label);
    container.appendChild(card);
  });
  return container;
}`,...(R=(W=x.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var N,q,M;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '16px';
  container.style.flexWrap = 'wrap';
  const socialIcons = ['facebook', 'instagram', 'linkedin', 'whatsapp', 'youtube', 'twitter', 'x-logo', 'github', 'discord', 'spotify', 'tiktok'].filter(name => iconNames.includes(name));
  socialIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.minWidth = '100px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    card.appendChild(label);
    container.appendChild(card);
  });
  return container;
}`,...(M=(q=b.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var $,j,P;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '16px';
  container.style.flexWrap = 'wrap';
  const paymentIcons = iconNames.filter(name => name.includes('pix') || name.includes('card') || name.includes('money') || name.includes('dollar') || name.includes('wallet') || name.includes('hand-') || name === 'contactless' || name === 'smartphone-contactless');
  paymentIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.minWidth = '100px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '10px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    card.appendChild(label);
    container.appendChild(card);
  });
  return container;
}`,...(P=(j=g.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var Y,G,H;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '24px';
  container.style.flexWrap = 'wrap';
  const examples = [{
    name: 'check-circle',
    color: '#198754',
    label: 'Success'
  }, {
    name: 'alert-triangle',
    color: '#d97706',
    label: 'Warning'
  }, {
    name: 'x-circle',
    color: '#cc0000',
    label: 'Error'
  }, {
    name: 'info',
    color: '#0d6efd',
    label: 'Info'
  }, {
    name: 'star-filled',
    color: '#ffc107',
    label: 'Star'
  }];
  examples.forEach(({
    name,
    color,
    label
  }) => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.gap = '8px';
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xxl');
    icon.style.color = color;
    card.appendChild(icon);
    const text = document.createElement('span');
    text.textContent = label;
    text.style.fontSize = '12px';
    card.appendChild(text);
    container.appendChild(card);
  });
  return container;
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var O,_,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '12px';
  container.style.flexWrap = 'wrap';
  const buttons = [{
    icon: 'plus',
    text: 'Adicionar'
  }, {
    icon: 'trash',
    text: 'Excluir'
  }, {
    icon: 'pencil',
    text: 'Editar'
  }, {
    icon: 'download',
    text: 'Download'
  }, {
    icon: 'upload',
    text: 'Upload'
  }];
  buttons.forEach(({
    icon,
    text
  }) => {
    const button = document.createElement('button');
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.gap = '8px';
    button.style.padding = '12px 24px';
    button.style.border = '1px solid #0055cc';
    button.style.borderRadius = '8px';
    button.style.backgroundColor = '#0055cc';
    button.style.color = 'white';
    button.style.fontSize = '14px';
    button.style.fontWeight = '600';
    button.style.cursor = 'pointer';
    const iconEl = document.createElement('atlas-icon');
    iconEl.setAttribute('name', icon);
    iconEl.setAttribute('size', 'sm');
    button.appendChild(iconEl);
    const textEl = document.createElement('span');
    textEl.textContent = text;
    button.appendChild(textEl);
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#003d99';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#0055cc';
    });
    container.appendChild(button);
  });
  return container;
}`,...(U=(_=h.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const X=["Default","Sizes","IconGallery","PopularIcons","BankIcons","SocialIcons","PaymentIcons","WithColors","InButtons"];export{x as BankIcons,u as Default,m as IconGallery,h as InButtons,g as PaymentIcons,y as PopularIcons,p as Sizes,b as SocialIcons,f as WithColors,X as __namedExportsOrder,Q as default};
