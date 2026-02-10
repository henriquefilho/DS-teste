# Atlas Link Button

Componente híbrido que visualmente se comporta como um link (sem bordas ou backgrounds sólidos), mas funcionalmente pode disparar uma ação de sistema (como um botão) ou navegar para outra página.

## 📋 Visão Geral

- **Tipo**: Web Component (Custom Element)
- **Tag**: `<atlas-link-button>`
- **Variações**: 90 (5 cores × 3 tamanhos × 6 estados)
- **Figma**: [Link button - Atlas UI Kit](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=71525-8820)

## 🚀 Instalação

### Dependências

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Atlas Design Tokens (OBRIGATÓRIO) -->
<link rel="stylesheet" href="path/to/atlas-design-tokens.css">

<!-- Atlas Icons Font (OBRIGATÓRIO) -->
<link rel="stylesheet" href="path/to/assets/fonts/style.css">

<!-- Atlas Icon Component (se usar ícones) -->
<script src="path/to/components/atlas-icon/atlas-icon.js"></script>

<!-- Atlas Link Button Component -->
<script src="path/to/components/atlas-link-button/atlas-link-button.js"></script>
```

## 📖 Uso

### Exemplo Básico

```html
<atlas-link-button 
  label="Link button" 
  color="primary" 
  size="md"
  icon="arrow-up-right">
</atlas-link-button>
```

### Como Link (navegação)

```html
<atlas-link-button 
  label="Ver documentação" 
  color="primary" 
  href="https://docs.example.com" 
  target="_blank"
  icon="external-link">
</atlas-link-button>
```

### Como Button (ação)

```html
<atlas-link-button 
  label="Excluir item" 
  color="danger" 
  size="sm">
</atlas-link-button>

<script>
  document.querySelector('atlas-link-button').addEventListener('click', () => {
    console.log('Ação executada!');
  });
</script>
```

### Estado Loading

```html
<atlas-link-button 
  label="Salvando..." 
  color="success" 
  loading>
</atlas-link-button>
```

### Estado Disabled

```html
<atlas-link-button 
  label="Indisponível" 
  color="primary" 
  disabled>
</atlas-link-button>
```

## 🎨 Propriedades

| Propriedade | Tipo | Valores | Padrão | Descrição |
|------------|------|---------|--------|-----------|
| `label` | `string` | - | `"Link button"` | Texto exibido no link-button |
| `color` | `enum` | `primary`, `success`, `danger`, `white`, `black` | `primary` | Cor semântica |
| `size` | `enum` | `sm`, `md`, `lg` | `md` | Tamanho do componente |
| `icon` | `string` | Nome do ícone | `null` | Ícone à direita (via `<atlas-icon>`) |
| `disabled` | `boolean` | - | `false` | Estado desabilitado |
| `loading` | `boolean` | - | `false` | Estado de carregamento |
| `href` | `string` | URL | `null` | URL de destino (renderiza como `<a>`) |
| `target` | `enum` | `_self`, `_blank`, `_parent`, `_top` | `_self` | Target do link |

## 🎨 Cores (5 variações)

| Cor | Uso | Tokens |
|-----|-----|--------|
| `primary` | Ações principais e navegação padrão | `--atlas-button-typography-color-static-primary` (default)<br>`--atlas-button-typography-color-interaction-primary-hover` (hover)<br>`--atlas-button-typography-color-interaction-primary-pressed` (pressed) |
| `success` | Ações positivas e confirmações | `--atlas-button-typography-color-interaction-success-*` |
| `danger` | Ações destrutivas e avisos | `--atlas-button-typography-color-interaction-error-*` |
| `white` | Uso em fundos escuros (inverse) | `--atlas-button-typography-color-interaction-white-*` |
| `black` | Alto contraste e ênfase | `--atlas-button-typography-color-interaction-black-*` |

## 📏 Tamanhos (3 variações)

| Tamanho | Font Size | Icon Size | Uso |
|---------|-----------|-----------|-----|
| `sm` | 14px | 16px | Links secundários, menos ênfase |
| `md` | 16px | 16px | Padrão, maioria dos casos |
| `lg` | 18px | 24px | Destaque, CTAs importantes |

## 🔄 Estados (6 variações)

| Estado | Descrição | Comportamento |
|--------|-----------|---------------|
| **default** | Estado padrão sem interação | Cor padrão, sem decoração |
| **hover** | Mouse sobre o componente | Cor muda + `text-decoration: underline` |
| **focus** | Foco via teclado (Tab) | Mesmas mudanças do hover + outline azul (#3359c7) |
| **pressed** | Clique ativo (mousedown) | Cor mais escura, sem underline |
| **disabled** | Desabilitado | Cor cinza, cursor default, sem interação |
| **loading** | Carregamento | Exibe spinner animado, visual de disabled |

## 🎯 Comportamento

### Link vs Button

O componente renderiza como `<a>` ou `<button>` automaticamente:

- **Com `href`**: Renderiza como `<a>` (link de navegação)
- **Sem `href`**: Renderiza como `<button type="button">` (ação de sistema)

```html
<!-- Renderiza como <button> -->
<atlas-link-button label="Ação"></atlas-link-button>

<!-- Renderiza como <a> -->
<atlas-link-button label="Link" href="/page"></atlas-link-button>
```

### Text Decoration

- **Default/Pressed/Disabled**: `text-decoration: none`
- **Hover/Focus**: `text-decoration: underline`

### Focus Outline

- **Cor**: `--atlas-focus-outline-color` (#3359c7)
- **Largura**: `--atlas-focus-outline-size` (2px)
- **Offset**: 2px
- **Border Radius**: `--atlas-radius-standalone-md` (4px)

### Ícones

- Sempre posicionados **à direita** do texto
- Gap de **4px** entre texto e ícone (`--atlas-gap-2xs`)
- Ícone padrão: `arrow-up-right` (indica link externo)
- Estado loading: troca ícone por `loader` com animação de rotação

## 📦 Eventos

### Click Event

```javascript
const linkButton = document.querySelector('atlas-link-button');

linkButton.addEventListener('click', (event) => {
  console.log('Link button clicado!', event);
  // event.detail.originalEvent contém o evento original do shadow DOM
});
```

**Importante**: 
- Eventos de click são propagados do Shadow DOM para o host element
- Links com `disabled` ou `loading` não disparam eventos
- Links `<a>` com `disabled` têm `preventDefault()` automático

## 🎨 Tokens CSS Utilizados

### Cores de Tipografia

```css
/* Primary */
--atlas-button-typography-color-static-primary
--atlas-button-typography-color-interaction-primary-hover
--atlas-button-typography-color-interaction-primary-pressed

/* Success */
--atlas-button-typography-color-interaction-success-default
--atlas-button-typography-color-interaction-success-hover
--atlas-button-typography-color-interaction-success-pressed

/* Danger/Error */
--atlas-button-typography-color-interaction-error-default
--atlas-button-typography-color-interaction-error-hover
--atlas-button-typography-color-interaction-error-pressed

/* White (Inverse) */
--atlas-button-typography-color-interaction-white-default
--atlas-button-typography-color-interaction-white-hover
--atlas-button-typography-color-interaction-white-pressed

/* Black */
--atlas-button-typography-color-interaction-black-default
--atlas-button-typography-color-interaction-black-hover
--atlas-button-typography-color-interaction-black-pressed

/* Disabled */
--atlas-button-typography-color-disabled-default
--atlas-button-typography-color-disabled-inverse
```

### Tipografia

```css
--atlas-typescale-label-block-sm-size: 14px
--atlas-typescale-label-block-md-size: 16px
--atlas-typescale-label-block-lg-size: 18px
```

### Layout

```css
--atlas-gap-2xs: 4px
--atlas-radius-standalone-md: 4px
```

### Focus

```css
--atlas-focus-outline-color: #3359c7
--atlas-focus-outline-size: 2px
```

## ⚠️ Observações Importantes

### 1. Componente Híbrido
Este é um **componente híbrido**: visualmente é um link, mas pode funcionar como button. Não confundir com o componente `<atlas-button>` tradicional.

### 2. Sem Background ou Border
Link buttons **não têm**:
- Background sólido
- Bordas
- Padding interno
- Apenas texto + ícone opcional

### 3. White Color (Inverse)
A cor `white` usa tokens `disabled-inverse` no estado disabled:
```css
/* white disabled usa inverse */
--atlas-button-typography-color-disabled-inverse
```

### 4. Loading State
No estado loading:
- Ícone é trocado por `loader` (animação de rotação)
- Visual igual ao disabled
- Interação bloqueada

### 5. Icon Sizes
- **sm/md**: Ícone de 16px (`size="sm"` do `<atlas-icon>`)
- **lg**: Ícone de 24px (`size="md"` do `<atlas-icon>`)

### 6. Acessibilidade
- Links desabilitados usam `aria-disabled="true"`
- Focus visível com outline azul
- Suporte a navegação via teclado (Tab)
- Estados semânticos (disabled, loading)

## 🐛 Troubleshooting

### Ícones não aparecem
Verifique se o `atlas-icon` está carregado antes do `atlas-link-button`:
```html
<script src="path/to/atlas-icon.js"></script>
<script src="path/to/atlas-link-button.js"></script>
```

### Cores não aplicadas
Certifique-se de que o `atlas-design-tokens.css` está carregado:
```html
<link rel="stylesheet" href="path/to/atlas-design-tokens.css">
```

### Fonte não carrega
Verifique se o Google Fonts está carregado:
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

### Eventos de click não funcionam
Para buttons (sem href), use `addEventListener` no elemento:
```javascript
document.querySelector('atlas-link-button').addEventListener('click', handler);
```

## 📚 Referências

- **Figma**: [Link button - Atlas UI Kit](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=71525-8820)
- **Confluence**: [Link button - Documentação](https://asaasdev.atlassian.net/wiki/spaces/EQDESIGN/pages/4932436002/Link+button)
- **Style Guide**: [Icon Guidelines](https://style.asaas.com/800892364/p/0879a8-icon)
- **SPEC**: [atlas-link-button-spec.json](./atlas-link-button-spec.json)

## 🔗 Componentes Relacionados

- [`<atlas-icon>`](../atlas-icon/README.md) - Ícones do sistema
- [`<atlas-button>`](../atlas-button/README.md) - Botões tradicionais com backgrounds

## 📝 Changelog

### v1.0.0 (2026-02-08)
- ✨ Implementação inicial do componente
- ✨ Suporte a 5 cores (primary, success, danger, white, black)
- ✨ Suporte a 3 tamanhos (sm, md, lg)
- ✨ Suporte a 6 estados (default, hover, focus, pressed, disabled, loading)
- ✨ Renderização condicional como `<a>` ou `<button>`
- ✨ Ícone opcional com `<atlas-icon>`
- ✨ Loading state com spinner animado
- ✨ Focus outline acessível
- ✨ Text decoration em hover/focus
- 📚 Demo interativo completo
- 📚 Documentação e SPEC

---

**Atlas Design System** • Criado com ❤️ pela equipe de Design
