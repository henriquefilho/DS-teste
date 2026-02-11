import"./atlas-icon-ClNXfHK9.js";class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._isRendering=!1}static get observedAttributes(){return["label","color","size","icon","icon-name","disabled","loading","href","target"]}get label(){return this.getAttribute("label")||"Link button"}get color(){return this.getAttribute("color")||"primary"}get size(){return this.getAttribute("size")||"md"}get icon(){return this.hasAttribute("icon")}get iconName(){return this.getAttribute("icon-name")||"arrow-up-right"}get disabled(){return this.hasAttribute("disabled")}get loading(){return this.hasAttribute("loading")}get href(){return this.getAttribute("href")}get target(){return this.getAttribute("target")||"_self"}static get sizeMap(){return{sm:{fontSize:"var(--atlas-typescale-label-block-sm-size, 14px)",lineHeight:"1.4",iconSize:"sm"},md:{fontSize:"var(--atlas-typescale-label-block-md-size, 16px)",lineHeight:"1.4",iconSize:"sm"},lg:{fontSize:"var(--atlas-typescale-label-block-lg-size, 18px)",lineHeight:"1.4",iconSize:"md"}}}static get colorMap(){return{primary:{default:"var(--atlas-button-typography-color-static-primary)",hover:"var(--atlas-button-typography-color-interaction-primary-hover)",pressed:"var(--atlas-button-typography-color-interaction-primary-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},danger:{default:"var(--atlas-button-typography-color-interaction-error-default)",hover:"var(--atlas-button-typography-color-interaction-error-hover)",pressed:"var(--atlas-button-typography-color-interaction-error-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},success:{default:"var(--atlas-button-typography-color-interaction-success-default)",hover:"var(--atlas-button-typography-color-interaction-success-hover)",pressed:"var(--atlas-button-typography-color-interaction-success-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"},white:{default:"var(--atlas-button-typography-color-interaction-white-default)",hover:"var(--atlas-button-typography-color-interaction-white-hover)",pressed:"var(--atlas-button-typography-color-interaction-white-pressed)",disabled:"var(--atlas-button-typography-color-disabled-inverse)"},black:{default:"var(--atlas-button-typography-color-interaction-black-default)",hover:"var(--atlas-button-typography-color-interaction-black-hover)",pressed:"var(--atlas-button-typography-color-interaction-black-pressed)",disabled:"var(--atlas-button-typography-color-disabled-default)"}}}connectedCallback(){this.render()}attributeChangedCallback(n,r,a){this._isRendering||r===a||this.render()}render(){if(this._isRendering)return;this._isRendering=!0;const n=i.sizeMap[this.size]||i.sizeMap.md,r=i.colorMap[this.color]||i.colorMap.primary,a=this.disabled||this.loading,t=this.href&&!a?"a":"button",o=this.icon||this.loading,Le=this.loading?"loader":this.iconName,_e=t==="a"?`href="${this.href}" target="${this.target}" ${a?'aria-disabled="true"':""}`:`type="button" ${a?"disabled":""}`;this.shadowRoot.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

        :host {
          display: inline-block;
        }

        .link-button {
          display: inline-flex;
          align-items: center;
          gap: var(--atlas-gap-2xs, 4px);
          
          font-family: 'Open Sans', sans-serif;
          font-size: ${n.fontSize};
          font-weight: 600;
          line-height: ${n.lineHeight};
          letter-spacing: 0;
          
          color: ${r.default};
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          
          /* Focus outline */
          outline: none;
          border-radius: var(--atlas-radius-standalone-md, 4px);
        }

        .label {
          transition: text-decoration 0.2s ease;
        }

        /* Hover state */
        .link-button:hover:not(:disabled):not([aria-disabled="true"]) {
          color: ${r.hover};
        }

        .link-button:hover:not(:disabled):not([aria-disabled="true"]) .label {
          text-decoration: underline;
        }

        /* Focus state */
        .link-button:focus-visible {
          color: ${r.hover};
          outline: var(--atlas-focus-outline-size, 2px) solid var(--atlas-focus-outline-color, #3359c7);
          outline-offset: 2px;
        }

        .link-button:focus-visible .label {
          text-decoration: underline;
        }

        /* Pressed state */
        .link-button:active:not(:disabled):not([aria-disabled="true"]) {
          color: ${r.pressed};
        }

        /* Disabled state */
        .link-button:disabled,
        .link-button[aria-disabled="true"] {
          color: ${r.disabled};
          cursor: default;
          pointer-events: none;
        }

        /* Loading animation */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .link-button.loading atlas-icon {
          animation: spin 1s linear infinite;
        }

        /* Garante que o ícone herde a cor mas não o font-weight */
        atlas-icon {
          color: inherit;
          font-weight: normal !important;
          font-style: normal !important;
        }
      </style>

      <${t} 
        class="link-button ${this.loading?"loading":""}" 
        ${_e}
        ${a?'aria-disabled="true"':""}
      >
        <span class="label">${this.label}</span>
        ${o?`<atlas-icon name="${Le}" size="${n.iconSize}"></atlas-icon>`:""}
      </${t}>
    `,t==="a"&&a&&this.shadowRoot.querySelector("a").addEventListener("click",S=>{S.preventDefault()}),t==="button"&&this.shadowRoot.querySelector("button").addEventListener("click",S=>{a||this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0,detail:{originalEvent:S}}))}),this._isRendering=!1}}customElements.get("atlas-link-button")||customElements.define("atlas-link-button",i);const Ie={title:"Components/Atlas Link Button",tags:["autodocs"],render:e=>{const n=document.createElement("atlas-link-button");return n.setAttribute("label",e.label),n.setAttribute("color",e.color),n.setAttribute("size",e.size),e.icon?(n.setAttribute("icon",""),n.setAttribute("icon-name",e.iconName)):n.removeAttribute("icon"),e.disabled?n.setAttribute("disabled",""):n.removeAttribute("disabled"),e.loading?n.setAttribute("loading",""):n.removeAttribute("loading"),e.href?(n.setAttribute("href",e.href),n.setAttribute("target",e.target)):n.removeAttribute("href"),n.addEventListener("click",e.onClick),n},argTypes:{label:{control:"text",description:"Texto exibido no link-button",table:{category:"Content",type:{summary:"string"},defaultValue:{summary:"Link button"}}},color:{control:"select",options:["primary","success","danger","white","black"],description:"Cor semântica do link-button",table:{category:"Appearance",type:{summary:"'primary' | 'success' | 'danger' | 'white' | 'black'"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["sm","md","lg"],description:"Tamanho da tipografia e ícone",table:{category:"Appearance",type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},icon:{control:"boolean",description:"Exibe um ícone à direita do texto",table:{category:"Icon",type:{summary:"boolean"},defaultValue:{summary:!1}}},iconName:{control:"text",description:"Nome do ícone a ser exibido (requer icon=true)",if:{arg:"icon",truthy:!0},table:{category:"Icon",type:{summary:"string"},defaultValue:{summary:"arrow-up-right"}}},disabled:{control:"boolean",description:"Desabilita o link-button, impedindo interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Exibe spinner de loading e desabilita interação",table:{category:"Status",type:{summary:"boolean"},defaultValue:{summary:!1}}},href:{control:"text",description:"URL de destino. Quando definido, renderiza como <a> ao invés de <button>",table:{category:"Navigation",type:{summary:"string"},defaultValue:{summary:"undefined"}}},target:{control:"select",options:["_self","_blank","_parent","_top"],description:"Target para navegação (aplicado apenas quando href está definido)",if:{arg:"href",truthy:!0},table:{category:"Navigation",type:{summary:"'_self' | '_blank' | '_parent' | '_top'"},defaultValue:{summary:"_self"}}},onClick:{action:"clicked",description:"Callback executado ao clicar no link-button",table:{category:"Actions",type:{summary:"() => void"}}}},args:{label:"Link button",color:"primary",size:"md",icon:!1,iconName:"arrow-up-right",disabled:!1,loading:!1,href:"",target:"_self"}},s={args:{label:"Link button",color:"primary",size:"md",icon:!1,iconName:"arrow-up-right",disabled:!1,loading:!1,href:"",target:"_self"}},l={args:{label:"Ver mais detalhes",color:"primary",icon:!0}},c={args:{label:"Excluir item",color:"danger",icon:!0,iconName:"trash"}},d={args:{label:"Confirmar ação",color:"success",icon:!0,iconName:"check"}},u={args:{label:"Link branco",color:"white",icon:!0},parameters:{backgrounds:{default:"dark"}}},p={args:{label:"Link preto",color:"black",icon:!0}},m={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="24px",e.style.alignItems="flex-start",e.style.padding="20px",[{size:"sm",label:"Small (14px)"},{size:"md",label:"Medium (16px)"},{size:"lg",label:"Large (18px)"}].forEach(({size:r,label:a})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",a),t.setAttribute("size",r),t.setAttribute("color","primary"),t.setAttribute("icon",""),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},b={args:{label:"Ver detalhes",color:"primary",size:"md",icon:!0,iconName:"arrow-up-right"}},g={args:{label:"Baixar arquivo",color:"primary",size:"md",icon:!0,iconName:"download"}},y={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.padding="20px",[{label:"Ver mais",iconName:"arrow-up-right"},{label:"Editar",iconName:"pencil"},{label:"Excluir",iconName:"trash"},{label:"Compartilhar",iconName:"share"},{label:"Baixar",iconName:"download"},{label:"Upload",iconName:"upload"}].forEach(({label:r,iconName:a})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",r),t.setAttribute("color","primary"),t.setAttribute("icon",""),t.setAttribute("icon-name",a),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},h={args:{label:"Executar ação",color:"primary",size:"md",icon:!0},parameters:{docs:{description:{story:'Quando `href` não está definido, o componente renderiza como `<button type="button">` e dispara eventos de click.'}}}},f={args:{label:"Ir para página interna",color:"primary",size:"md",icon:!0,href:"/pagina-interna",target:"_self"},parameters:{docs:{description:{story:"Quando `href` está definido, o componente renderiza como `<a>` e realiza navegação."}}}},x={args:{label:"Abrir link externo",color:"primary",size:"md",icon:!0,iconName:"external-link",href:"https://example.com",target:"_blank"},parameters:{docs:{description:{story:'Link externo que abre em nova aba com `target="_blank"`.'}}}},k={args:{label:"Processando...",color:"primary",size:"md",loading:!0}},v={args:{label:"Link desabilitado",color:"primary",size:"md",icon:!0,disabled:!0}},E={args:{label:"Link desabilitado",color:"primary",size:"md",icon:!0,href:"https://example.com",disabled:!0},parameters:{docs:{description:{story:"Link com `href` definido mas desabilitado. O evento de navegação é prevenido."}}}},A={render:()=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.padding="20px",[{label:"Ver todos os produtos",color:"primary"},{label:"Saiba mais",color:"primary"},{label:"Ir para checkout",color:"success"},{label:"Cancelar pedido",color:"danger"}].forEach(({label:r,color:a})=>{const t=document.createElement("atlas-link-button");t.setAttribute("label",r),t.setAttribute("color",a),t.setAttribute("icon",""),t.setAttribute("icon-name","arrow-up-right"),e.appendChild(t)}),e},parameters:{controls:{disable:!0}}},z={render:()=>{const e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="600px",e.style.fontSize="16px",e.style.lineHeight="1.6",e.style.color="#333";const n=document.createElement("p");n.style.margin="0";const r=document.createTextNode("Este é um exemplo de texto corrido onde você pode usar "),a=document.createElement("atlas-link-button");a.setAttribute("label","um link-button inline"),a.setAttribute("color","primary"),a.setAttribute("size","md"),a.setAttribute("icon",""),a.style.verticalAlign="baseline";const t=document.createTextNode(" no meio do conteúdo para chamar atenção para uma ação específica.");return n.appendChild(r),n.appendChild(a),n.appendChild(t),e.appendChild(n),e},parameters:{controls:{disable:!0}}},C={render:()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(2, 1fr)",e.style.gap="24px",e.style.padding="20px",["primary","success","danger","black"].forEach(r=>{const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="8px";const t=document.createElement("span");t.textContent=r.charAt(0).toUpperCase()+r.slice(1),t.style.fontSize="12px",t.style.fontWeight="bold",t.style.color="#666",t.style.textTransform="capitalize";const o=document.createElement("atlas-link-button");o.setAttribute("label",`Link ${r}`),o.setAttribute("color",r),o.setAttribute("icon",""),a.appendChild(t),a.appendChild(o),e.appendChild(a)}),e},parameters:{controls:{disable:!0}}};var B,w,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var L,_,$;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Ver mais detalhes',
    color: 'primary',
    icon: true
  }
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var D,I,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Excluir item',
    color: 'danger',
    icon: true,
    iconName: 'trash'
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,M,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Confirmar ação',
    color: 'success',
    icon: true,
    iconName: 'check'
  }
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var q,H,R;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(H=u.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var P,O,Q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Link preto',
    color: 'black',
    icon: true
  }
}`,...(Q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,F,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var j,J,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Ver detalhes',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'arrow-up-right'
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Baixar arquivo',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'download'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,se,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(se=f.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,ue;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,be;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Processando...',
    color: 'primary',
    size: 'md',
    loading: true
  }
}`,...(be=(me=k.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ge,ye,he;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Link desabilitado',
    color: 'primary',
    size: 'md',
    icon: true,
    disabled: true
  }
}`,...(he=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var fe,xe,ke;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var ve,Ee,Ae;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ae=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var ze,Ce,Se;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Be,we,Ne;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ne=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};const Te=["Playground","PrimaryColor","DangerColor","SuccessColor","WhiteColor","BlackColor","SizeComparison","WithIcon","WithCustomIcon","IconVariations","AsButton","AsInternalLink","AsExternalLink","LoadingState","DisabledState","DisabledLink","CallToAction","InlineText","AllColorsGrid"];export{C as AllColorsGrid,h as AsButton,x as AsExternalLink,f as AsInternalLink,p as BlackColor,A as CallToAction,c as DangerColor,E as DisabledLink,v as DisabledState,y as IconVariations,z as InlineText,k as LoadingState,s as Playground,l as PrimaryColor,m as SizeComparison,d as SuccessColor,u as WhiteColor,g as WithCustomIcon,b as WithIcon,Te as __namedExportsOrder,Ie as default};
