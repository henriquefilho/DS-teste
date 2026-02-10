# Atlas Switch

É usado para alternar rapidamente entre dois estados possíveis, que normalmente são "liga/desliga".

## 📚 Documentação

[Ver documentação completa no Confluence](https://asaasdev.atlassian.net/wiki/spaces/EQDESIGN/pages/4849172517/Switch)

## 🎯 Uso Básico

```html
<atlas-switch label="Enable notifications"></atlas-switch>
```

## 📦 Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|------------|------|--------|-----------|
| `label` | string | "Label" | Texto do label |
| `checked` | boolean | false | Estado ativo/inativo |
| `alignment` | "left" \| "right" | "left" | Posição do controle |
| `strong-label` | boolean | false | Usa fonte semi-bold |
| `description` | string | "" | Texto descritivo |
| `state` | "default" \| "disabled" \| "read-only" \| "error" | "default" | Estado visual e funcional |
| `error-text` | string | "Error text" | Mensagem de erro |
| `icon-popover` | boolean | false | Exibe ícone de informação |

## 🎭 Estados

### Default
Estado padrão interativo do switch.

```html
<atlas-switch label="Default switch"></atlas-switch>
```

### Checked
Switch ativado.

```html
<atlas-switch label="Enabled feature" checked></atlas-switch>
```

### Disabled
Estado não interativo.

```html
<atlas-switch label="Disabled option" state="disabled"></atlas-switch>
```

### Read-only
Somente leitura, não editável.

```html
<atlas-switch label="Read-only value" state="read-only" checked></atlas-switch>
```

### Error
Estado de erro com mensagem.

```html
<atlas-switch 
  label="Accept terms" 
  state="error"
  error-text="You must accept the terms"
></atlas-switch>
```

## 🎨 Variações

### Com Descrição

```html
<atlas-switch 
  label="Email notifications"
  description="Receive email updates about your account"
></atlas-switch>
```

### Strong Label

```html
<atlas-switch 
  label="Important setting"
  strong-label
></atlas-switch>
```

### Alignment Right

```html
<atlas-switch 
  label="Advanced option"
  alignment="right"
></atlas-switch>
```

### Com Ícone

```html
<atlas-switch 
  label="Privacy settings"
  icon-popover
  description="Click icon for more info"
></atlas-switch>
```

## 🎯 Eventos

### `change`

Disparado quando o estado do switch muda.

```javascript
const switchElement = document.querySelector('atlas-switch');

switchElement.addEventListener('change', (event) => {
  console.log('Switch changed:', event.detail.checked);
});
```

**Event Detail:**
```typescript
{
  checked: boolean
}
```

## 💻 Controle Programático

### Obter Estado

```javascript
const switchElement = document.querySelector('atlas-switch');
console.log(switchElement.checked); // true ou false
```

### Alterar Estado

```javascript
const switchElement = document.querySelector('atlas-switch');
switchElement.checked = true;
```

### Alterar Propriedades

```javascript
const switchElement = document.querySelector('atlas-switch');

// Mudar estado
switchElement.setAttribute('state', 'error');
switchElement.setAttribute('error-text', 'Custom error message');

// Mudar alinhamento
switchElement.setAttribute('alignment', 'right');

// Adicionar descrição
switchElement.setAttribute('description', 'This is a description');
```

## 📐 Especificações

- **Dimensões do controle:** 42px × 24px
- **Tamanho do thumb:** 18px (diâmetro)
- **Gap entre controle e label:** 8px
- **Border radius:** 9999px (pill)
- **Transição:** 0.2s ease (transform e background)

### Cores da Thumb (Círculo)

A thumb muda de cor dependendo do estado:

- **Default Unchecked:** Azul primário (#0030B9) - usa `--atlas-color-surface-static-shape-primary-hard`
- **Default Checked:** Branco (#FCFCFD) - usa `--atlas-color-pale-sky-10`
- **Error Unchecked:** Azul primário (#0030B9) - usa `--atlas-color-surface-static-shape-primary-hard`
- **Error Checked:** Branco (#FCFCFD) - usa `--atlas-color-pale-sky-10`
- **Read-only (ambos checked/unchecked):** Cinza neutro (#B8C0CB) - usa `--atlas-color-surface-static-shape-neutral-soft`
- **Disabled Unchecked:** Cinza claro (#D1D6DC)
- **Disabled Checked:** Cinza médio (#9AA4B3)

### Borda do Switch

- **Default unchecked:** Azul primário (#0030B9) - usa `--atlas-color-border-primary-hard`
- **Error unchecked:** Vermelho (#B02A37) - usa `--atlas-color-border-error-hard`
- **Disabled unchecked:** Cinza claro (#D1D6DC) - usa `--atlas-color-border-disabled`
- **Read-only unchecked:** Cinza claro (#D1D6DC) - usa `--atlas-color-border-default`

## 🎨 Design Tokens

O componente utiliza tokens do Atlas Design System:

### Cores de Background
- **Default checked:** `--atlas-color-surface-control-active-default` (#0030B9 - azul)
- **Default unchecked:** `--atlas-color-surface-control-inactive-default` (#FCFCFD - branco)
- **Hover checked:** `--atlas-color-surface-control-active-hover` (#002694 - azul escuro)
- **Hover unchecked:** `--atlas-color-surface-control-inactive-hover` (#99ACE3 - azul claro)
- **Disabled checked:** `--atlas-color-surface-control-active-disabled` (#D1D6DC - cinza claro)
- **Disabled unchecked:** `--atlas-color-surface-control-inactive-disabled` (#FCFCFD - branco)
- **Read-only checked:** `--atlas-color-surface-control-active-read-only` (#B8C0CB - cinza médio)
- **Read-only unchecked:** `--atlas-color-surface-control-inactive-read-only` (#FCFCFD - branco)
- **Error checked:** `--atlas-color-surface-control-active-error` (#B02A37 - vermelho)
- **Error unchecked:** `--atlas-color-surface-control-inactive-error` (#FCFCFD - branco)

### Cores da Thumb (Círculo)
- **Default unchecked:** `--atlas-color-surface-static-shape-primary-hard` (#0030B9 - azul primário)
- **Default checked:** `--atlas-color-pale-sky-10` (#FCFCFD - branco)
- **Error unchecked:** `--atlas-color-surface-static-shape-primary-hard` (#0030B9 - azul primário)
- **Error checked:** `--atlas-color-pale-sky-10` (#FCFCFD - branco)
- **Read-only (ambos):** `--atlas-color-surface-static-shape-neutral-soft` (#B8C0CB - cinza neutro)
- **Disabled unchecked:** `--atlas-color-pale-sky-200` (#D1D6DC - cinza claro)
- **Disabled checked:** `--atlas-color-pale-sky-400` (#9AA4B3 - cinza médio)

### Cores de Texto
- **Label:** `--atlas-color-text-static-neutral-hard`
- **Description:** `--atlas-color-text-static-neutral-medium`
- **Error text:** `--atlas-color-text-static-error-medium`
- **Disabled:** `--atlas-color-text-static-disabled-level-2`

### Tipografia
- **Label:** 16px, line-height 1
- **Description:** 14px, line-height 1.4
- **Error text:** 12px, line-height 1.4

## 🔧 Dependências

- `../../tokens/atlas-design-tokens.css` (obrigatório)
- `../../assets/fonts/style.css` (para icon-popover)
- `../atlas-icon/atlas-icon.js` (se icon-popover=true)

## 📱 Acessibilidade

- Usa elementos semânticos e estrutura adequada
- Suporta navegação por teclado (quando interativo)
- Estados disabled e read-only previnem interação
- Evento `change` permite integração com leitores de tela

## 🧪 Casos de Uso

### Configurações de Preferências

```html
<atlas-switch 
  label="Dark mode"
  description="Enable dark theme"
  checked
></atlas-switch>

<atlas-switch 
  label="Auto-save"
  description="Automatically save changes"
></atlas-switch>
```

### Notificações

```html
<atlas-switch 
  label="Email notifications"
  description="Receive email updates"
></atlas-switch>

<atlas-switch 
  label="Push notifications"
  description="Get push notifications on your device"
  checked
></atlas-switch>
```

### Segurança

```html
<atlas-switch 
  label="Two-factor authentication"
  description="Add an extra layer of security"
  strong-label
></atlas-switch>
```

### Validação de Formulário

```html
<atlas-switch 
  label="Accept terms and conditions"
  state="error"
  error-text="You must accept the terms to continue"
></atlas-switch>
```

## 📝 Notas Técnicas

- O componente usa Shadow DOM para encapsulamento de estilos
- Todos os tokens de cor possuem fallback hex para compatibilidade
- Estados `disabled` e `read-only` desabilitam interação via `pointer-events: none`
- O thumb tem transição suave ao mudar de estado
- Border aparece apenas no estado unchecked (exceto disabled que sempre tem border)
- Alignment `right` inverte a ordem visual dos elementos

## 🎬 Demo

Abra o arquivo `demo.html` em seu navegador para ver exemplos interativos e um playground completo.

```bash
# Abrir demo localmente
open demo.html
```

## 📄 Versão

**v1.0.0** - Implementação inicial do componente Atlas Switch
