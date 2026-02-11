var K=Object.defineProperty;var Q=(e,l,a)=>l in e?K(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a;var E=(e,l,a)=>Q(e,typeof l!="symbol"?l+"":l,a);var s;let X=(s=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["name","size"]}connectedCallback(){this.render()}attributeChangedCallback(){this.shadowRoot&&this.render()}get name(){return this.getAttribute("name")||"circle"}get size(){return this.getAttribute("size")||"md"}getUnicode(){return s.iconMap[this.name]||s.iconMap.circle}getFontSize(){return s.sizeMap[this.size]||s.sizeMap.md}render(){const l=this.getUnicode(),a=this.getFontSize(),n=this.name;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          font-family: 'Atlas-Icons' !important;
          speak: never;
          font-style: normal !important;
          font-weight: normal !important;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          font-size: ${a};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      </style>
      <span class="icon ati-${n}" aria-hidden="true">${l}</span>
    `}},E(s,"sizeMap",{xs:"8px",sm:"16px",md:"24px",lg:"32px",xl:"40px",xxl:"48px"}),E(s,"iconMap",{"address-book":"",alert:"","alert-circle":"","alert-triangle":"","alert-triangle-filled":"","align-justify":"",android:"",apps:"","arrow-down":"","arrow-down-circle":"","arrow-left":"","arrow-right":"","arrow-right-left":"","arrow-up":"","arrow-up-circle":"","arrow-up-right":"","asaas-logo":"",award:"",backspace:"","banco-abc-brasil":"","banco-bmg":"","banco-brb":"","banco-da-amazonia":"","banco-do-brasil":"","banco-industrial-do-brasil":"","banco-original":"",banese:"",bank:"","bank-of-america":"",banpara:"","bar-chart":"",barcode:"",bars:"","base-logo":"",bell:"",bnb:"",box:"",bradesco:"",briefcase:"","btg-pactual":"","c6-bank":"",caixa:"",calendar:"","calendar-check":"","calendar-clock":"","calendar-magnifier":"","calendar-sync":"",camera:"",card:"","card-mastercard":"","cash-machine-with-ticket":"","cash-machine-with-ticket-1":"",celebrate:"","chart-line":"",check:"","check-circle":"","check-filled":"","chevron-down":"","chevron-left":"","chevron-right":"","chevron-up":"",circle:"","citi-bank":"",clock:"","clock-filled":"",cloud:"",cog:"","color-picker":"",companies:"","concentric-circles":"",contactless:"",copy:"","corner-up-right":"",credisis:"",cutlery:"",dashboard:"",daycoval:"","deutsche-bank":"",discord:"","dollar-sign":"","dollar-zap":"","double-check":"",download:"",email:"",envelope:"",equal:"","external-link":"",eye:"","eye-filled":"","eye-off":"","eye-off-filled":"",facebook:"",file:"","file-check":"","file-dollar":"","file-import":"","file-invoice":"","file-plus":"","file-text":"","file-users":"",files:"",filter:"","flapp-store-logo":"",flash:"",gift:"",github:"",globe:"",hammer:"","hand-card":"","hand-holding-money":"","hand-shake":"",headset:"","help-circle":"",hierarchy:"",home:"","id-card":"",image:"",info:"",instagram:"",inter:"",itau:"",key:"",keyboard:"",link:"",linkedin:"",list:"",loader:"",lock:"","lock-filled":"","log-in":"",magnifier:"","mail-box":"","map-pin":"","market-pin":"",maximize:"",megaphone:"","mercado-pago":"","message-circle":"","message-circle-dollar":"","message-circles":"",mic:"",minus:"","minus-circle":"",money:"","money-filled":"","money-notes":"",monitor:"","monitor-chart-up":"",moon:"",neon:"",nubank:"","open-finance":"",pagbank:"",paperclip:"",pencil:"",percentage:"",phone:"","pic-pay":"",pix:"","pix-filled":"",play:"",plus:"","plus-circle":"",power:"",printer:"",qrcode:"","quotation-marks":"",receipt:"",refresh:"","refresh-dollar":"",repeat:"","reverse-clock":"",rotate:"","rotate-cw":"","rotate-dollar":"",safra:"",santander:"",send:"",serasa:"",share:"",shield:"","shopping-bag":"","shopping-cart-down":"","shopping-cart-right":"",sicoob:"",sicredi:"",slash:"",sliders:"",smartphone:"","smartphone-contactless":"","smile-face":"",sort:"","sort-amount-down":"","sort-amount-up":"","sort-horizontal":"",spanner:"","split-arrows":"",spotify:"",square:"","square-signs":"",star:"","star-filled":"",stone:"",sun:"",tag:"",target:"","three-dots":"","three-dots-horinzontal":"","thumbs-down":"","thumbs-up":"",ticket:"",tiktok:"",trash:"",truck:"",unlink:"",unlock:"","unlock-filled":"",upload:"",user:"","user-filled":"","user-plus":"",users:"",video:"","virtual-card":"",wallet:"",whatsapp:"",x:"","x-circle":"","x-filled":"","x-logo":"","xp-investimentos":"",youtube:"",zero:""}),s);customElements.define("atlas-icon",X);const te={title:"Components/AtlasIcon",tags:["autodocs"],argTypes:{name:{control:"select",options:Object.keys(AtlasIcon.iconMap),description:"Nome do ícone",table:{type:{summary:"string"},defaultValue:{summary:"circle"}}},size:{control:"select",options:["xs","sm","md","lg","xl","xxl"],description:"Tamanho do ícone",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},Z={"address-book":"",alert:"","alert-circle":"","alert-triangle":"","alert-triangle-filled":"","align-justify":"",android:"",apps:"","arrow-down":"","arrow-down-circle":"","arrow-left":"","arrow-right":"","arrow-right-left":"","arrow-up":"","arrow-up-circle":"","arrow-up-right":"","asaas-logo":"",award:"",backspace:"","banco-abc-brasil":"","banco-bmg":"","banco-brb":"","banco-da-amazonia":"","banco-do-brasil":"","banco-industrial-do-brasil":"","banco-original":"",banese:"",bank:"","bank-of-america":"",banpara:"","bar-chart":"",barcode:"",bars:"","base-logo":"",bell:"",bnb:"",box:"",bradesco:"",briefcase:"","btg-pactual":"","c6-bank":"",caixa:"",calendar:"","calendar-check":"","calendar-clock":"","calendar-magnifier":"","calendar-sync":"",camera:"",card:"","card-mastercard":"","cash-machine-with-ticket":"","cash-machine-with-ticket-1":"",celebrate:"","chart-line":"",check:"","check-circle":"","check-filled":"","chevron-down":"","chevron-left":"","chevron-right":"","chevron-up":"",circle:"","citi-bank":"",clock:"","clock-filled":"",cloud:"",cog:"","color-picker":"",companies:"","concentric-circles":"",contactless:"",copy:"","corner-up-right":"",credisis:"",cutlery:"",dashboard:"",daycoval:"","deutsche-bank":"",discord:"","dollar-sign":"","dollar-zap":"","double-check":"",download:"",email:"",envelope:"",equal:"","external-link":"",eye:"","eye-filled":"","eye-off":"","eye-off-filled":"",facebook:"",file:"","file-check":"","file-dollar":"","file-import":"","file-invoice":"","file-plus":"","file-text":"","file-users":"",files:"",filter:"","flapp-store-logo":"",flash:"",gift:"",github:"",globe:"",hammer:"","hand-card":"","hand-holding-money":"","hand-shake":"",headset:"","help-circle":"",hierarchy:"",home:"","id-card":"",image:"",info:"",instagram:"",inter:"",itau:"",key:"",keyboard:"",link:"",linkedin:"",list:"",loader:"",lock:"","lock-filled":"","log-in":"",magnifier:"","mail-box":"","map-pin":"","market-pin":"",maximize:"",megaphone:"","mercado-pago":"","message-circle":"","message-circle-dollar":"","message-circles":"",mic:"",minus:"","minus-circle":"",money:"","money-filled":"","money-notes":"",monitor:"","monitor-chart-up":"",moon:"",neon:"",nubank:"","open-finance":"",pagbank:"",paperclip:"",pencil:"",percentage:"",phone:"","pic-pay":"",pix:"","pix-filled":"",play:"",plus:"","plus-circle":"",power:"",printer:"",qrcode:"","quotation-marks":"",receipt:"",refresh:"","refresh-dollar":"",repeat:"","reverse-clock":"",rotate:"","rotate-cw":"","rotate-dollar":"",safra:"",santander:"",send:"",serasa:"",share:"",shield:"","shopping-bag":"","shopping-cart-down":"","shopping-cart-right":"",sicoob:"",sicredi:"",slash:"",sliders:"",smartphone:"","smartphone-contactless":"","smile-face":"",sort:"","sort-amount-down":"","sort-amount-up":"","sort-horizontal":"",spanner:"","split-arrows":"",spotify:"",square:"","square-signs":"",star:"","star-filled":"",stone:"",sun:"",tag:"",target:"","three-dots":"","three-dots-horinzontal":"","thumbs-down":"","thumbs-up":"",ticket:"",tiktok:"",trash:"",truck:"",unlink:"",unlock:"","unlock-filled":"",upload:"",user:"","user-filled":"","user-plus":"",users:"",video:"","virtual-card":"",wallet:"",whatsapp:"",x:"","x-circle":"","x-filled":"","x-logo":"","xp-investimentos":"",youtube:"",zero:""},u=Object.keys(Z),_=e=>{const l=document.createElement("atlas-icon");return e.name&&l.setAttribute("name",e.name),e.size&&l.setAttribute("size",e.size),l},p=_.bind({});p.args={name:"home",size:"md"};const m=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="24px",[{name:"Extra Small (8px)",value:"xs"},{name:"Small (16px)",value:"sm"},{name:"Medium (24px)",value:"md"},{name:"Large (32px)",value:"lg"},{name:"Extra Large (40px)",value:"xl"},{name:"Extra Extra Large (48px)",value:"xxl"}].forEach(({name:a,value:n})=>{const t=document.createElement("div");t.style.display="flex",t.style.alignItems="center",t.style.gap="16px";const o=document.createElement("atlas-icon");o.setAttribute("name","star-filled"),o.setAttribute("size",n),t.appendChild(o);const r=document.createElement("span");r.textContent=a,r.style.fontSize="14px",t.appendChild(r),e.appendChild(t)}),e},b=()=>{const e=document.createElement("div");e.style.padding="20px";const l=document.createElement("div");l.style.marginBottom="20px",l.style.position="sticky",l.style.top="0",l.style.backgroundColor="white",l.style.padding="10px 0",l.style.zIndex="10";const a=document.createElement("input");a.type="text",a.placeholder="Buscar ícones...",a.style.width="100%",a.style.padding="12px",a.style.fontSize="14px",a.style.border="1px solid #ddd",a.style.borderRadius="8px",a.style.boxSizing="border-box",l.appendChild(a);const n=document.createElement("div");n.style.marginTop="8px",n.style.fontSize="12px",n.style.color="#666",n.textContent=`Total: ${u.length} ícones`,l.appendChild(n),e.appendChild(l);const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fill, minmax(140px, 1fr))",t.style.gap="16px",u.forEach(o=>{const r=document.createElement("div");r.className="icon-card",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="center",r.style.justifyContent="center",r.style.padding="16px",r.style.border="1px solid #e0e0e0",r.style.borderRadius="8px",r.style.cursor="pointer",r.style.transition="all 0.2s",r.style.minHeight="100px",r.dataset.name=o;const i=document.createElement("atlas-icon");i.setAttribute("name",o),i.setAttribute("size","lg"),i.style.marginBottom="8px",r.appendChild(i);const c=document.createElement("span");c.textContent=o,c.style.fontSize="11px",c.style.textAlign="center",c.style.wordBreak="break-word",c.style.color="#333",r.appendChild(c),r.addEventListener("mouseenter",()=>{r.style.backgroundColor="#f5f5f5",r.style.borderColor="#0055cc",r.style.transform="translateY(-2px)",r.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)"}),r.addEventListener("mouseleave",()=>{r.style.backgroundColor="transparent",r.style.borderColor="#e0e0e0",r.style.transform="translateY(0)",r.style.boxShadow="none"}),r.addEventListener("click",()=>{navigator.clipboard.writeText(o);const d=c.textContent;c.textContent="✓ Copiado!",c.style.color="#198754",setTimeout(()=>{c.textContent=d,c.style.color="#333"},1500)}),t.appendChild(r)}),e.appendChild(t),a.addEventListener("input",o=>{const r=o.target.value.toLowerCase(),i=t.querySelectorAll(".icon-card");let c=0;i.forEach(d=>{d.dataset.name.includes(r)?(d.style.display="flex",c++):d.style.display="none"}),n.textContent=`Mostrando: ${c} de ${u.length} ícones`}),e},y=()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))",e.style.gap="16px",["home","user","star","check","x","plus","minus","arrow-right","arrow-left","arrow-up","arrow-down","calendar","clock","bell","envelope","magnifier","cog","trash","pencil","eye","lock","unlock"].forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.padding="16px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl"),t.style.marginBottom="8px",n.appendChild(t);const o=document.createElement("span");o.textContent=a,o.style.fontSize="11px",o.style.textAlign="center",n.appendChild(o),e.appendChild(n)}),e},x=()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))",e.style.gap="16px",u.filter(a=>a.includes("banco-")||["nubank","inter","itau","bradesco","santander","caixa","c6-bank","neon","stone","pagbank","pic-pay","mercado-pago","btg-pactual","safra","sicoob","sicredi","xp-investimentos"].includes(a)).forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.padding="16px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl"),t.style.marginBottom="8px",n.appendChild(t);const o=document.createElement("span");o.textContent=a,o.style.fontSize="10px",o.style.textAlign="center",o.style.wordBreak="break-word",n.appendChild(o),e.appendChild(n)}),e},h=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="16px",e.style.flexWrap="wrap",["facebook","instagram","linkedin","whatsapp","youtube","twitter","x-logo","github","discord","spotify","tiktok"].filter(a=>u.includes(a)).forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.padding="16px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px",n.style.minWidth="100px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl"),t.style.marginBottom="8px",n.appendChild(t);const o=document.createElement("span");o.textContent=a,o.style.fontSize="11px",o.style.textAlign="center",n.appendChild(o),e.appendChild(n)}),e},f=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="16px",e.style.flexWrap="wrap",u.filter(a=>a.includes("pix")||a.includes("card")||a.includes("money")||a.includes("dollar")||a.includes("wallet")||a.includes("hand-")||a==="contactless"||a==="smartphone-contactless").forEach(a=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",n.style.padding="16px",n.style.border="1px solid #e0e0e0",n.style.borderRadius="8px",n.style.minWidth="100px";const t=document.createElement("atlas-icon");t.setAttribute("name",a),t.setAttribute("size","xl"),t.style.marginBottom="8px",n.appendChild(t);const o=document.createElement("span");o.textContent=a,o.style.fontSize="10px",o.style.textAlign="center",o.style.wordBreak="break-word",n.appendChild(o),e.appendChild(n)}),e},g=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="24px",e.style.flexWrap="wrap",[{name:"check-circle",color:"#198754",label:"Success"},{name:"alert-triangle",color:"#d97706",label:"Warning"},{name:"x-circle",color:"#cc0000",label:"Error"},{name:"info",color:"#0d6efd",label:"Info"},{name:"star-filled",color:"#ffc107",label:"Star"}].forEach(({name:a,color:n,label:t})=>{const o=document.createElement("div");o.style.display="flex",o.style.flexDirection="column",o.style.alignItems="center",o.style.gap="8px";const r=document.createElement("atlas-icon");r.setAttribute("name",a),r.setAttribute("size","xxl"),r.style.color=n,o.appendChild(r);const i=document.createElement("span");i.textContent=t,i.style.fontSize="12px",o.appendChild(i),e.appendChild(o)}),e},k=()=>{const e=document.createElement("div");return e.style.display="flex",e.style.gap="12px",e.style.flexWrap="wrap",[{icon:"plus",text:"Adicionar"},{icon:"trash",text:"Excluir"},{icon:"pencil",text:"Editar"},{icon:"download",text:"Download"},{icon:"upload",text:"Upload"}].forEach(({icon:a,text:n})=>{const t=document.createElement("button");t.style.display="flex",t.style.alignItems="center",t.style.gap="8px",t.style.padding="12px 24px",t.style.border="1px solid #0055cc",t.style.borderRadius="8px",t.style.backgroundColor="#0055cc",t.style.color="white",t.style.fontSize="14px",t.style.fontWeight="600",t.style.cursor="pointer";const o=document.createElement("atlas-icon");o.setAttribute("name",a),o.setAttribute("size","sm"),t.appendChild(o);const r=document.createElement("span");r.textContent=n,t.appendChild(r),t.addEventListener("mouseenter",()=>{t.style.backgroundColor="#003d99"}),t.addEventListener("mouseleave",()=>{t.style.backgroundColor="#0055cc"}),e.appendChild(t)}),e};var C,w,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const icon = document.createElement('atlas-icon');
  if (args.name) icon.setAttribute('name', args.name);
  if (args.size) icon.setAttribute('size', args.size);
  return icon;
}`,...(v=(w=p.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var z,I,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(A=(I=m.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var S,L,B;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(B=(L=b.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var T,D,W;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(W=(D=y.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var R,M,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var N,$,j;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(j=($=h.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var H,P,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(U=(P=f.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var Y,F,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var O,V,J;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(J=(V=k.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};const ae=["Default","Sizes","IconGallery","PopularIcons","BankIcons","SocialIcons","PaymentIcons","WithColors","InButtons"];export{x as BankIcons,p as Default,b as IconGallery,k as InButtons,f as PaymentIcons,y as PopularIcons,m as Sizes,h as SocialIcons,g as WithColors,ae as __namedExportsOrder,te as default};
