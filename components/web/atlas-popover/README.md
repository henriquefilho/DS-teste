# 🗨️ Atlas Popover

Container flutuante que exibe informações e ações contextuais. Acionado quando o usuário clica ou toca em um elemento específico (o "acionador") e aparece sempre ancorado a este elemento.

## 📋 Especificação

- **Versão:** 1.0.0
- **Tipo:** Web Component (Custom Element)
- **Shadow DOM:** Open mode
- **Figma:** [Atlas UI Kit - Popover](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=295-5934)

## 🚀 Uso Básico

```html
<!-- Importar os componentes necessários -->
<script src="./atlas-popover.js"></script>
<script src="../atlas-button/atlas-button.js"></script>
<script src="../atlas-link-button/atlas-link-button.js"></script>
<script src="../atlas-icon-button/atlas-icon-button.js"></script>
<script src="../atlas-icon/atlas-icon.js"></script>

<!-- Popover simples -->
<atlas-popover
  text="Mensagem de ajuda contextual"
  open
></atlas-popover>

<!-- Popover completo -->
<atlas-popover
  arrow="top-center"
  title="Título do Popover"
  text="Descrição completa com informações relevantes para o usuário."
  action-type="button"
  action-label="Entendi"
  closable
  open
></atlas-popover>
```

## 📦 Propriedades (Attributes)

| Propriedade | Tipo | Valores | Padrão | Descrição |
|-------------|------|---------|--------|-----------|
| `arrow` | String (enum) | `top-center`, `top-left`, `top-right`, `bottom-center`, `bottom-left`, `bottom-right`, `side-left`, `side-right`, `none` | `top-center` | Posição da seta indicadora |
| `title` | String | Qualquer texto | `""` | Título do popover (opcional) |
| `text` | String | Qualquer texto | `""` | Texto do corpo (obrigatório) |
| `image-src` | String | URL válida | `""` | URL da imagem opcional |
| `image-alt` | String | Texto alternativo | `""` | Alt text da imagem |
| `action-type` | String (enum) | `none`, `button`, `link` | `none` | Tipo de ação no footer |
| `action-label` | String | Qualquer texto | `"Button"` | Label da ação |
| `action-href` | String | URL válida | `"#"` | URL do link (quando `action-type="link"`) |
| `closable` | Boolean | - | `true` | Exibe botão X para fechar |
| `open` | Boolean | - | `false` | Define visibilidade do popover |
| `max-width` | String | Valor CSS | `"278px"` | Largura máxima do popover |

## 🎨 Variações

### Posições da Seta (Arrow)

```html
<!-- Setas no topo -->
<atlas-popover arrow="top-center" text="..." open></atlas-popover>
<atlas-popover arrow="top-left" text="..." open></atlas-popover>
<atlas-popover arrow="top-right" text="..." open></atlas-popover>

<!-- Setas na base -->
<atlas-popover arrow="bottom-center" text="..." open></atlas-popover>
<atlas-popover arrow="bottom-left" text="..." open></atlas-popover>
<atlas-popover arrow="bottom-right" text="..." open></atlas-popover>

<!-- Setas laterais -->
<atlas-popover arrow="side-left" text="..." open></atlas-popover>
<atlas-popover arrow="side-right" text="..." open></atlas-popover>

<!-- Sem seta -->
<atlas-popover arrow="none" text="..." open></atlas-popover>
```

### Tipos de Ação

```html
<!-- Sem ação -->
<atlas-popover 
  text="Apenas informação"
  action-type="none"
  open
></atlas-popover>

<!-- Com botão -->
<atlas-popover 
  text="Clique no botão para confirmar"
  action-type="button"
  action-label="Confirmar"
  open
></atlas-popover>

<!-- Com link -->
<atlas-popover 
  text="Saiba mais sobre este recurso"
  action-type="link"
  action-label="Ver documentação"
  action-href="https://docs.example.com"
  open
></atlas-popover>
```

### Com Imagem

```html
<atlas-popover 
  title="Novo Recurso"
  text="Confira a nova funcionalidade disponível!"
  image-src="https://example.com/image.jpg"
  image-alt="Preview do novo recurso"
  action-type="button"
  action-label="Explorar"
  open
></atlas-popover>
```

## 🎭 Eventos Customizados

### `atlas-popover-close`

Disparado quando o popover é fechado.

```javascript
popover.addEventListener('atlas-popover-close', (event) => {
  console.log('Popover fechado:', event.detail.reason);
  // event.detail = { reason: 'close-button' | 'programmatic' }
});
```

### `atlas-popover-action`

Disparado quando a ação (button/link) é clicada.

```javascript
popover.addEventListener('atlas-popover-action', (event) => {
  console.log('Ação disparada:', event.detail);
  // event.detail = { actionType: 'button' | 'link', label: string }
});
```

## 🔧 Métodos Públicos

### `show()`

Exibe o popover programaticamente.

```javascript
const popover = document.querySelector('atlas-popover');
popover.show();
```

### `close(reason)`

Fecha o popover programaticamente.

```javascript
const popover = document.querySelector('atlas-popover');
popover.close('programmatic');
```

## ⌨️ Atalhos de Teclado

- **ESC**: Fecha o popover automaticamente

## ♿ Acessibilidade

O componente implementa as seguintes práticas de acessibilidade:

- ✅ `role="dialog"` no container principal
- ✅ `aria-labelledby` vinculado ao título (quando presente)
- ✅ `aria-describedby` vinculado ao texto do corpo
- ✅ `aria-label="Fechar"` no botão de fechar
- ✅ ESC key handler para fechar
- ✅ Focus trap quando há ações interativas

## 🎨 Design Tokens Utilizados

O componente utiliza **100% tokens do Atlas Design System**:

### Layout
- `--atlas-padding-md` (16px) - Padding interno
- `--atlas-spacing-100` (8px) - Gap entre elementos
- `--atlas-radius-composite-lg` (16px) - Border radius
- `--atlas-stroke-weight-100` (1px) - Largura da borda

### Cores
- `--atlas-color-surface-static-container-neutral-ultra-soft` - Background
- `--atlas-color-border-default` - Cor da borda
- `--atlas-color-text-static-neutral-hard` - Cor do texto
- `--atlas-color-icon-static-neutral-medium` - Cor do ícone

### Tipografia
- `--atlas-typescale-heading-6-*` - Título (16px, 600)
- `--atlas-typescale-body-sm-*` - Texto (14px, 400)

### Shadow
- `--atlas-spacing-100` (8px) - Offset Y
- `--atlas-blur-200` (16px) - Blur radius
- `--atlas-color-opacity-black-200` - Cor da sombra

### Interação
- `--atlas-color-surface-interaction-neutral-ultra-soft-hover` - Hover do botão fechar
- `--atlas-color-surface-interaction-neutral-ultra-soft-pressed` - Active do botão fechar

## 📱 Responsividade

O componente adapta-se automaticamente para mobile:

- **Desktop**: `min-width: 278px`, seta visível
- **Mobile** (< 768px): `min-width: 328px`, seta oculta

## 🏗️ Implementação Técnica

### Seta (Arrow)

Implementada com **CSS puro** usando a técnica de **border-triangle**:

- `::before` - Cria a borda da seta
- `::after` - Cria o preenchimento interno
- Zero dependências de SVG ou imagens
- Performance máxima

### Shadow DOM

Utiliza Shadow DOM (`mode: 'open'`) para:
- ✅ Encapsulamento de estilos
- ✅ Isolamento do CSS global
- ✅ Composição com outros componentes Atlas

## 📦 Dependências

- `atlas-design-tokens.css` - Tokens de design
- `atlas-icon-button` - Botão de fechar (quando `closable`)
- `atlas-button` - Quando `action-type="button"`
- `atlas-link-button` - Quando `action-type="link"`

## 🧪 Demo

Abra o arquivo `demo.html` no navegador para ver exemplos interativos:

```bash
# Servir localmente
python3 -m http.server 8000
# Acessar: http://localhost:8000/components/web/atlas-popover/demo.html
```

## 📚 Documentação Adicional

- [SPEC Técnico](./atlas-popover-spec.json) - Especificação completa
- [Decisões Técnicas](./DECISOES-TECNICAS.md) - Rationale das decisões de implementação
- [Figma - Popover](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=295-5934)

## 🤝 Uso em Produção

### Posicionamento

O componente **não** gerencia posicionamento automaticamente. Use uma biblioteca de posicionamento (ex: Popper.js, Floating UI) ou CSS customizado:

```html
<div style="position: relative;">
  <button id="trigger">Clique aqui</button>
  
  <atlas-popover 
    id="popover"
    style="position: absolute; top: 100%; left: 0; margin-top: 8px;"
    arrow="top-center"
    text="Conteúdo do popover"
  ></atlas-popover>
</div>

<script>
  const trigger = document.getElementById('trigger');
  const popover = document.getElementById('popover');
  
  trigger.addEventListener('click', () => {
    popover.setAttribute('open', '');
  });
</script>
```

### Exemplo com Floating UI

```javascript
import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';

const triggerEl = document.getElementById('trigger');
const popoverEl = document.getElementById('popover');

computePosition(triggerEl, popoverEl, {
  placement: 'top',
  middleware: [
    offset(8),
    flip(),
    shift({ padding: 8 })
  ]
}).then(({ x, y }) => {
  Object.assign(popoverEl.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
});
```

## 📄 Licença

Este componente faz parte do **Atlas Design System**.

---

**Versão:** 1.0.0  
**Data:** 2026-02-12  
**Autor:** Atlas Design System Team
