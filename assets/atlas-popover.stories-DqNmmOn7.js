import"./atlas-popover-aZLGqesn.js";import"./atlas-button-CE0kwCcy.js";import"./atlas-link-button-C5n062qN.js";import"./atlas-icon-button-D_fTdWvm.js";import"./atlas-icon-B_0Pd0rQ.js";const Ne={title:"Components/Atlas Popover",tags:["autodocs"],render:e=>{const t=document.createElement("atlas-popover");t.setAttribute("arrow",e.arrow),e.title?t.setAttribute("title",e.title):t.removeAttribute("title"),t.setAttribute("text",e.text),e.imageSrc?(t.setAttribute("image-src",e.imageSrc),t.setAttribute("image-alt",e.imageAlt||"")):(t.removeAttribute("image-src"),t.removeAttribute("image-alt")),t.setAttribute("action-type",e.actionType),e.actionType!=="none"&&(t.setAttribute("action-label",e.actionLabel),e.actionType==="link"&&t.setAttribute("action-href",e.actionHref)),e.closable?t.setAttribute("closable",""):t.removeAttribute("closable"),e.open?t.setAttribute("open",""):t.removeAttribute("open"),e.maxWidth&&t.setAttribute("max-width",e.maxWidth),t.addEventListener("atlas-popover-close",o=>{var n;console.log("atlas-popover-close",o.detail),(n=e.onClose)==null||n.call(e,o.detail)}),t.addEventListener("atlas-popover-action",o=>{var n;console.log("atlas-popover-action",o.detail),(n=e.onAction)==null||n.call(e,o.detail)});const a=document.createElement("div");return a.style.cssText=`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
      padding: 40px;
      background: #f5f5f5;
    `,a.appendChild(t),a},argTypes:{arrow:{control:"select",options:["top-center","top-left","top-right","bottom-center","bottom-left","bottom-right","side-left","side-right","none"],description:"Posição da seta indicadora que aponta para o elemento acionador",table:{type:{summary:"string"},defaultValue:{summary:"top-center"},category:"Appearance"}},title:{control:"text",description:"Título do popover (opcional)",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},text:{control:"text",description:"Texto do corpo do popover (obrigatório)",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},imageSrc:{control:"text",description:"URL da imagem opcional",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},imageAlt:{control:"text",description:"Texto alternativo da imagem",table:{type:{summary:"string"},defaultValue:{summary:""},category:"Content"}},actionType:{control:"select",options:["none","button","link"],description:"Tipo de ação no footer do popover",table:{type:{summary:"string"},defaultValue:{summary:"none"},category:"Action"}},actionLabel:{control:"text",description:"Label do botão ou link de ação",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Action"}},actionHref:{control:"text",description:'URL do link (quando action-type="link")',table:{type:{summary:"string"},defaultValue:{summary:"#"},category:"Action"}},closable:{control:"boolean",description:"Exibe botão X para fechar o popover",table:{type:{summary:"boolean"},defaultValue:{summary:!0},category:"State"}},open:{control:"boolean",description:"Define se o popover está visível",table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"State"}},maxWidth:{control:"text",description:"Largura máxima do popover",table:{type:{summary:"string"},defaultValue:{summary:"278px"},category:"Layout"}},onClose:{action:"atlas-popover-close",description:"Disparado quando o popover é fechado",table:{category:"Events",type:{summary:"CustomEvent<{ reason: string }>"}}},onAction:{action:"atlas-popover-action",description:"Disparado quando a ação é clicada",table:{category:"Events",type:{summary:"CustomEvent<{ actionType: string, label: string }>"}}}},args:{arrow:"top-center",title:"Title",text:"Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.",imageSrc:"",imageAlt:"",actionType:"none",actionLabel:"Button",actionHref:"#",closable:!0,open:!0,maxWidth:"278px"}},l={},c={args:{title:"",text:"Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod."}},d={args:{title:"Título",text:"Clique no botão para realizar uma ação.",actionType:"button",actionLabel:"Confirmar"}},m={args:{title:"Saiba Mais",text:"Acesse a documentação para mais informações.",actionType:"link",actionLabel:"Ver Documentação",actionHref:"https://example.com"}},u={args:{title:"Novo Recurso",text:"Confira a nova funcionalidade disponível no sistema.",imageSrc:"https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=200&fit=crop",imageAlt:"Exemplo de novo recurso",actionType:"button",actionLabel:"Explorar"}},x={args:{title:"Título Completo",text:"Este é um popover completo com imagem, título, texto e ação. Use-o quando precisar de máximo contexto.",imageSrc:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",imageAlt:"Imagem de exemplo",actionType:"button",actionLabel:"Entendi"}},b={args:{title:"Importante",text:"Esta mensagem não pode ser fechada manualmente.",closable:!1}},v={args:{arrow:"none",title:"Sem Seta",text:"Este popover não possui seta indicadora."}},g={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `,[{arrow:"top-center",label:"Top Center"},{arrow:"top-left",label:"Top Left"},{arrow:"top-right",label:"Top Right"},{arrow:"bottom-center",label:"Bottom Center"},{arrow:"bottom-left",label:"Bottom Left"},{arrow:"bottom-right",label:"Bottom Right"},{arrow:"side-left",label:"Side Left"},{arrow:"side-right",label:"Side Right"},{arrow:"none",label:"No Arrow"}].forEach(({arrow:a,label:o})=>{const n=document.createElement("div");n.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;const i=document.createElement("div");i.textContent=o,i.style.cssText=`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;const r=document.createElement("div");r.style.cssText=`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;const s=document.createElement("atlas-popover");s.setAttribute("arrow",a),s.setAttribute("title",o),s.setAttribute("text",`Popover com seta ${a}`),s.setAttribute("open",""),s.setAttribute("closable",""),r.appendChild(s),n.appendChild(i),n.appendChild(r),e.appendChild(n)}),e}},y={render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `,[{type:"none",label:"None",desc:"Sem ação"},{type:"button",label:"Button",desc:"Com botão"},{type:"link",label:"Link",desc:"Com link"}].forEach(({type:a,label:o,desc:n})=>{const i=document.createElement("div");i.style.cssText=`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;const r=document.createElement("div");r.textContent=o,r.style.cssText=`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;const s=document.createElement("div");s.style.cssText=`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;const p=document.createElement("atlas-popover");p.setAttribute("arrow","top-center"),p.setAttribute("title",o),p.setAttribute("text",n),p.setAttribute("action-type",a),p.setAttribute("action-label",a==="link"?"Ver mais":"Ação"),p.setAttribute("open",""),p.setAttribute("closable",""),s.appendChild(p),i.appendChild(r),i.appendChild(s),e.appendChild(i)}),e}},E={args:{title:"Popover Responsivo",text:"Redimensione a janela para ver a adaptação mobile (< 768px). A seta desaparece em telas menores.",actionType:"button",actionLabel:"OK"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1280px",height:"800px"}}}}}},f={args:{title:"Teste de Eventos",text:"Clique no botão X ou na ação para disparar eventos. Veja o console do navegador.",actionType:"button",actionLabel:"Disparar Ação"},render:e=>{const t=document.createElement("div");t.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 40px;
      background: #f5f5f5;
    `;const a=document.createElement("div");a.style.cssText=`
      display: flex;
      justify-content: center;
      min-height: 200px;
    `;const o=document.createElement("atlas-popover");o.setAttribute("arrow",e.arrow),o.setAttribute("title",e.title),o.setAttribute("text",e.text),o.setAttribute("action-type",e.actionType),o.setAttribute("action-label",e.actionLabel),o.setAttribute("open",""),o.setAttribute("closable","");const n=document.createElement("div");n.style.cssText=`
      background: #1D2125;
      color: #E5E8EC;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      max-height: 200px;
      overflow-y: auto;
    `,n.innerHTML='<div style="font-weight: 600; margin-bottom: 8px;">📋 Console de Eventos:</div>';const i=(r,s)=>{const p=new Date().toLocaleTimeString(),h=document.createElement("div");h.textContent=`[${p}] ${r}: ${JSON.stringify(s)}`,h.style.marginTop="4px",n.appendChild(h)};return o.addEventListener("atlas-popover-close",r=>{i("atlas-popover-close",r.detail)}),o.addEventListener("atlas-popover-action",r=>{i("atlas-popover-action",r.detail)}),a.appendChild(o),t.appendChild(a),t.appendChild(n),t}};var A,w,T,C,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"Popover padrão com título e texto. Este é o uso mais comum do componente.",...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};var S,k,D,W,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '',
    text: 'Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.'
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"Popover simples sem título, apenas com texto informativo.",...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var P,N,R,V,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Título',
    text: 'Clique no botão para realizar uma ação.',
    actionType: 'button',
    actionLabel: 'Confirmar'
  }
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"Popover com botão de ação no footer.",...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.description}}};var q,O,z,$,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Saiba Mais',
    text: 'Acesse a documentação para mais informações.',
    actionType: 'link',
    actionLabel: 'Ver Documentação',
    actionHref: 'https://example.com'
  }
}`,...(z=(O=m.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:"Popover com link de ação no footer.",...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var M,I,U,F,X;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Novo Recurso',
    text: 'Confira a nova funcionalidade disponível no sistema.',
    imageSrc: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=200&fit=crop',
    imageAlt: 'Exemplo de novo recurso',
    actionType: 'button',
    actionLabel: 'Explorar'
  }
}`,...(U=(I=u.parameters)==null?void 0:I.docs)==null?void 0:U.source},description:{story:"Popover com imagem ilustrativa no topo.",...(X=(F=u.parameters)==null?void 0:F.docs)==null?void 0:X.description}}};var _,J,K,Q,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Título Completo',
    text: 'Este é um popover completo com imagem, título, texto e ação. Use-o quando precisar de máximo contexto.',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    imageAlt: 'Imagem de exemplo',
    actionType: 'button',
    actionLabel: 'Entendi'
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Popover completo com todos os elementos: imagem, título, texto e ação.",...(G=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:G.description}}};var Y,Z,ee,te,oe;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Importante',
    text: 'Esta mensagem não pode ser fechada manualmente.',
    closable: false
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Popover sem botão de fechar (não-fechável pelo usuário).",...(oe=(te=b.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};var ne,ae,re,se,ie;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    arrow: 'none',
    title: 'Sem Seta',
    text: 'Este popover não possui seta indicadora.'
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"Popover sem seta indicadora.",...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var pe,le,ce,de,me;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const positions = [{
      arrow: 'top-center',
      label: 'Top Center'
    }, {
      arrow: 'top-left',
      label: 'Top Left'
    }, {
      arrow: 'top-right',
      label: 'Top Right'
    }, {
      arrow: 'bottom-center',
      label: 'Bottom Center'
    }, {
      arrow: 'bottom-left',
      label: 'Bottom Left'
    }, {
      arrow: 'bottom-right',
      label: 'Bottom Right'
    }, {
      arrow: 'side-left',
      label: 'Side Left'
    }, {
      arrow: 'side-right',
      label: 'Side Right'
    }, {
      arrow: 'none',
      label: 'No Arrow'
    }];
    positions.forEach(({
      arrow,
      label
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = \`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      \`;
      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = \`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      \`;
      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = \`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      \`;
      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', arrow);
      popover.setAttribute('title', label);
      popover.setAttribute('text', \`Popover com seta \${arrow}\`);
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');
      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(ce=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:`## Posições da Seta

O popover suporta 9 posições diferentes para a seta:
- **Top:** center, left, right
- **Bottom:** center, left, right  
- **Side:** left, right
- **None:** sem seta`,...(me=(de=g.parameters)==null?void 0:de.docs)==null?void 0:me.description}}};var ue,xe,be,ve,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const types = [{
      type: 'none',
      label: 'None',
      desc: 'Sem ação'
    }, {
      type: 'button',
      label: 'Button',
      desc: 'Com botão'
    }, {
      type: 'link',
      label: 'Link',
      desc: 'Com link'
    }];
    types.forEach(({
      type,
      label,
      desc
    }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = \`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      \`;
      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = \`
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      \`;
      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = \`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      \`;
      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', 'top-center');
      popover.setAttribute('title', label);
      popover.setAttribute('text', desc);
      popover.setAttribute('action-type', type);
      popover.setAttribute('action-label', type === 'link' ? 'Ver mais' : 'Ação');
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');
      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });
    return container;
  }
}`,...(be=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:`## Tipos de Ação

O componente suporta três tipos de ação no footer:
- **None:** Sem ação
- **Button:** Botão de ação
- **Link:** Link de navegação`,...(ge=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ge.description}}};var ye,Ee,fe,he,Ae;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    title: 'Popover Responsivo',
    text: 'Redimensione a janela para ver a adaptação mobile (< 768px). A seta desaparece em telas menores.',
    actionType: 'button',
    actionLabel: 'OK'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px'
          }
        }
      }
    }
  }
}`,...(fe=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source},description:{story:`## Responsividade

O popover adapta-se automaticamente para diferentes tamanhos de tela:
- **Desktop:** min-width 278px, seta visível
- **Mobile:** min-width 328px, seta oculta`,...(Ae=(he=E.parameters)==null?void 0:he.docs)==null?void 0:Ae.description}}};var we,Te,Ce,Le,Se;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    title: 'Teste de Eventos',
    text: 'Clique no botão X ou na ação para disparar eventos. Veja o console do navegador.',
    actionType: 'button',
    actionLabel: 'Disparar Ação'
  },
  render: args => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 40px;
      background: #f5f5f5;
    \`;
    const popoverWrapper = document.createElement('div');
    popoverWrapper.style.cssText = \`
      display: flex;
      justify-content: center;
      min-height: 200px;
    \`;
    const popover = document.createElement('atlas-popover');
    popover.setAttribute('arrow', args.arrow);
    popover.setAttribute('title', args.title);
    popover.setAttribute('text', args.text);
    popover.setAttribute('action-type', args.actionType);
    popover.setAttribute('action-label', args.actionLabel);
    popover.setAttribute('open', '');
    popover.setAttribute('closable', '');
    const console = document.createElement('div');
    console.style.cssText = \`
      background: #1D2125;
      color: #E5E8EC;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      max-height: 200px;
      overflow-y: auto;
    \`;
    console.innerHTML = '<div style="font-weight: 600; margin-bottom: 8px;">📋 Console de Eventos:</div>';
    const logEvent = (name, detail) => {
      const timestamp = new Date().toLocaleTimeString();
      const line = document.createElement('div');
      line.textContent = \`[\${timestamp}] \${name}: \${JSON.stringify(detail)}\`;
      line.style.marginTop = '4px';
      console.appendChild(line);
    };
    popover.addEventListener('atlas-popover-close', e => {
      logEvent('atlas-popover-close', e.detail);
    });
    popover.addEventListener('atlas-popover-action', e => {
      logEvent('atlas-popover-action', e.detail);
    });
    popoverWrapper.appendChild(popover);
    wrapper.appendChild(popoverWrapper);
    wrapper.appendChild(console);
    return wrapper;
  }
}`,...(Ce=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source},description:{story:`## Eventos Customizados

O componente dispara eventos customizados que podem ser capturados:
- \`atlas-popover-close\`: Quando o popover é fechado
- \`atlas-popover-action\`: Quando a ação é clicada

Abra o console do navegador para ver os eventos sendo disparados.`,...(Se=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Se.description}}};const Re=["Default","TextOnly","WithButton","WithLink","WithImage","Complete","NotClosable","NoArrow","ArrowPositions","ActionTypes","Responsive","CustomEvents"];export{y as ActionTypes,g as ArrowPositions,x as Complete,f as CustomEvents,l as Default,v as NoArrow,b as NotClosable,E as Responsive,c as TextOnly,d as WithButton,u as WithImage,m as WithLink,Re as __namedExportsOrder,Ne as default};
