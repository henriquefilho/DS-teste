# Atlas Design System – Storybook Web

Este repositório agora inclui a base do Storybook para documentar os Web Components do Atlas Design System.

## Pré-requisitos

- Node.js 18+ e npm/yarn/pnpm instalados localmente.
- Após instalar Node, execute:

```bash
npm install
npm run storybook
```

> Nota: o ambiente atual não possui Node/npm disponível. Assim que instalar, rode os comandos acima para baixar as dependências listadas em `package.json`.

## Estrutura

- `.storybook/` – configuração do Storybook (builder Vite para Web Components).
- `web/components/button/atlas-button.stories.js` – primeiras histórias do `<atlas-button>`.
- `web/components/button/` – implementação do componente (JS + CSS + README).

## Scripts relevantes

- `npm run storybook` – sobe o ambiente local em `http://localhost:6006`.
- `npm run build-storybook` – gera a versão estática para deploy em documentação.

## Próximos passos sugeridos

- Adicionar novos componentes do Atlas às pastas de `web/components`.
- Criar histórias de regressão visual (Chromatic ou Storybook Test Runner).
- Automatizar o deploy do Storybook estático (ex.: GitHub Pages, Vercel).
# Atlas Design System - Componente Button

Componente de botão do Design System Atlas, implementado como Web Component.

## 📦 Arquivos

- `button-component.js` - Web Component do botão
- `index.html` - Página de documentação com exemplos
- `styles.css` - Estilos da documentação
- `README.md` - Este arquivo

## 🚀 Como usar

### Instalação

1. Inclua o arquivo `button-component.js` no seu HTML:

```html
<script src="button-component.js"></script>
```

2. Use o componente no seu HTML:

```html
<atlas-button>Button</atlas-button>
```

### Atributos

| Atributo | Valores | Padrão | Descrição |
|----------|---------|--------|-----------|
| `color` | `primary`, `danger`, `success`, `warning`, `info`, `inverse` | `primary` | Define a cor do botão |
| `type` | `filled`, `outlined`, `ghost` | `filled` | Define o estilo do botão |
| `size` | `small`, `default`, `large` | `default` | Define o tamanho do botão |
| `disabled` | boolean | `false` | Desabilita o botão |
| `loading` | boolean | `false` | Mostra estado de carregamento |
| `icon` | `plus`, (outros) | `''` | Adiciona um ícone ao botão |

### Exemplos

#### Botão básico
```html
<atlas-button>Button</atlas-button>
```

#### Botão com variações
```html
<!-- Cor e tipo -->
<atlas-button color="danger" type="outlined">Delete</atlas-button>

<!-- Tamanho -->
<atlas-button size="large">Large Button</atlas-button>
<atlas-button size="small">Small</atlas-button>

<!-- Com ícone -->
<atlas-button icon="plus">Add Item</atlas-button>

<!-- Estados -->
<atlas-button disabled>Disabled</atlas-button>
<atlas-button loading>Loading...</atlas-button>
```

#### Combinações
```html
<atlas-button 
  color="success" 
  type="filled" 
  size="large"
  icon="plus"
>
  Create New
</atlas-button>
```

## 🎨 Design Tokens

### Cores

#### Primary
- Default: `#0030b9`
- Hover: `#002694`
- Active: `#001d6f`
- Focus: `rgba(153, 172, 227, 0.5)`

#### Danger
- Default: `#b02a37`
- Hover: `#842029`
- Active: `#58151c`

#### Success
- Default: `#146c43`
- Hover: `#0f5132`
- Active: `#0a3622`

#### Warning
- Default: `#bd5600`
- Hover: `#8e4000`
- Active: `#5e2b00`

#### Info
- Default: `#002694`
- Hover: `#001d6f`
- Active: `#00134a`

#### Inverse
- Default: `#ffffff`
- Hover: `#ccd6f1`
- Active: `#99ace3`

### Tipografia

- **Fonte**: Open Sans
- **Peso**: Medium (500)
- **Small**: 14px / 16px line-height
- **Default/Large**: 16px / 24px line-height

### Espaçamentos

- **Gap**: 4px (entre ícone e texto)
- **Small**: 8px vertical, 16px horizontal
- **Default**: 8px vertical, 24px horizontal
- **Large**: 12px vertical, 32px horizontal

### Tamanhos

- **Small**: 32px altura mínima
- **Default**: 40px altura mínima
- **Large**: 48px altura mínima

### Border Radius

- **Pill**: 999px (totalmente arredondado)

## 📋 Estados

O componente suporta os seguintes estados:

1. **Default** - Estado padrão do botão
2. **Hover** - Quando o mouse está sobre o botão
3. **Focus** - Quando o botão recebe foco (navegação por teclado)
4. **Active** - Quando o botão está sendo pressionado
5. **Disabled** - Botão desabilitado (não interativo)
6. **Loading** - Botão em estado de carregamento

## 🎯 Casos de Uso

- Formulários
- Modais
- Cards
- Painéis
- Navegação
- Ações primárias e secundárias

## 📱 Responsividade

O componente é totalmente responsivo e se adapta a diferentes tamanhos de tela.

## 🌐 Compatibilidade

O componente utiliza Web Components padrão e é compatível com:
- Chrome/Edge (versões modernas)
- Firefox (versões modernas)
- Safari (versões modernas)

## 📄 Licença

Este componente faz parte do Atlas Design System.

## 🔗 Links

- [Style guide Design](link-para-style-guide)
- [Style guide Forecastle](link-para-forecastle)


