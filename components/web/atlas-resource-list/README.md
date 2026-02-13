# Atlas Resource List

Componente para exibir lista de recursos com informações resumidas e ação principal. Permite navegação, controle de estado (switch) ou ações secundárias (icon-button).

## 📦 Instalação

```html
<!-- Tokens CSS -->
<link rel="stylesheet" href="../../../tokens/atlas-design-tokens.css">

<!-- Fonts e Ícones -->
<link rel="stylesheet" href="../../../assets/fonts/style.css">

<!-- Componentes Atlas (dependências) -->
<script type="module" src="../atlas-icon/atlas-icon.js"></script>
<script type="module" src="../atlas-icon-button/atlas-icon-button.js"></script>
<script type="module" src="../atlas-switch/atlas-switch.js"></script>

<!-- Resource List -->
<script type="module" src="./atlas-resource-list.js"></script>
```

## 🎯 Uso Básico

### Type: Navigation (Padrão)
```html
<atlas-resource-list
  type="navigation"
  label="Configurações"
  description="Gerencie suas preferências"
  href="#settings"
></atlas-resource-list>
```

### Type: Icon Button
```html
<atlas-resource-list
  type="icon-button"
  label="Opções avançadas"
  description="Configure recursos extras"
  action-icon="three-dots"
></atlas-resource-list>
```

### Type: Switch
```html
<atlas-resource-list
  type="switch"
  label="Modo escuro"
  description="Ative o tema escuro"
  checked
></atlas-resource-list>
```

**Nota**: Quando `type="switch"`, o controle switch é renderizado sem label interno (apenas o toggle), mantendo o label e description do item da lista para contexto.

### Type: Informational
```html
<atlas-resource-list
  type="informational"
  label="Versão"
  description="v2.4.1"
></atlas-resource-list>
```

## 🎨 Com Visual Support

### Ícone
```html
<atlas-resource-list
  type="navigation"
  label="Notificações"
  description="Configure alertas"
  visual-support
  visual-support-icon="bell"
></atlas-resource-list>
```

### Imagem
```html
<atlas-resource-list
  type="navigation"
  label="Meu Perfil"
  description="Edite suas informações pessoais"
  visual-support
  visual-support-image="https://i.pravatar.cc/32"
></atlas-resource-list>
```

## 🔧 Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|------------|------|--------|-----------|
| `type` | `'navigation'` \| `'icon-button'` \| `'switch'` \| `'informational'` | `'navigation'` | Tipo de ação do item |
| `label` | `string` | `''` | Texto principal (título) |
| `description` | `string` | `''` | Texto descritivo secundário |
| `visual-support` | `boolean` | `false` | Exibe ícone ou imagem decorativa à esquerda |
| `visual-support-icon` | `string` | `'cog'` | Nome do ícone para visual support |
| `visual-support-image` | `string` | `''` | URL da imagem para visual support (prioridade sobre ícone) |
| `action-icon` | `string` | `'chevron-right'` / `'three-dots'` | Nome do ícone de ação |
| `checked` | `boolean` | `false` | Estado do switch (type='switch') |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `href` | `string` | `''` | URL de navegação (type='navigation') |
| `show-divider` | `boolean` | `true` | Exibe linha divisória inferior |


## 📡 Eventos

### `resource-list-click`
Disparado quando item é clicado (type: `navigation`)

```javascript
element.addEventListener('resource-list-click', (e) => {
  console.log(e.detail); // { type, label, href }
});
```

### `action-click`
Disparado quando botão de ação é clicado (type: `icon-button`)

```javascript
element.addEventListener('action-click', (e) => {
  console.log(e.detail); // { label }
});
```

### `switch-change`
Disparado quando switch muda de estado (type: `switch`)

```javascript
element.addEventListener('switch-change', (e) => {
  console.log(e.detail); // { checked, label }
});
```

## 🎪 Slot Customizado

Use o slot `default` para conteúdo complexo que substitui `label` e `description`:

```html
<atlas-resource-list
  type="navigation"
  visual-support
  visual-support-icon="star"
>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>Plano Premium</strong>
      <span style="background: #e5ebf7; padding: 4px 8px; border-radius: 4px; font-size: 11px;">NOVO</span>
    </div>
    <div style="color: #5e6877; font-size: 12px;">
      Recursos ilimitados por R$ 29,90/mês
    </div>
  </div>
</atlas-resource-list>
```

## 🎭 Estados

### Default
```html
<atlas-resource-list
  label="Item padrão"
  description="Estado normal"
></atlas-resource-list>
```

### Hover
Aplica-se automaticamente ao passar o mouse (exceto type='switch')

### Active
Aplica-se automaticamente ao clicar (exceto type='switch')

### Disabled
```html
<atlas-resource-list
  label="Item desabilitado"
  description="Não interativo"
  disabled
></atlas-resource-list>
```

## 💡 Exemplos Práticos

### Lista de Configurações
```html
<div style="max-width: 400px; background: white; border-radius: 8px; overflow: hidden;">
  <atlas-resource-list
    type="navigation"
    label="Perfil"
    description="Edite suas informações"
    visual-support
    visual-support-icon="user"
    href="#profile"
  ></atlas-resource-list>
  
  <atlas-resource-list
    type="navigation"
    label="Segurança"
    description="Senha e autenticação"
    visual-support
    visual-support-icon="lock"
    href="#security"
  ></atlas-resource-list>
  
  <atlas-resource-list
    type="switch"
    label="Notificações"
    description="Alertas e avisos"
    visual-support
    visual-support-icon="bell"
    checked
  ></atlas-resource-list>
</div>
```

### Cartão de Informações
```html
<div style="max-width: 400px; background: white; border-radius: 8px; overflow: hidden;">
  <atlas-resource-list
    type="informational"
    label="Espaço utilizado"
    description="12.4 GB de 128 GB"
    visual-support
    visual-support-icon="hard-drive"
  ></atlas-resource-list>
  
  <atlas-resource-list
    type="informational"
    label="Último backup"
    description="13/02/2026 às 14:30"
    visual-support
    visual-support-icon="clock"
    show-divider="false"
  ></atlas-resource-list>
</div>
```

## ⚙️ Comportamentos

### Type: Navigation
- Container clicável (cursor pointer)
- Usa `<a>` quando `href` está definido
- Usa `<button>` quando `href` não está definido
- Hover e active aplicados no container
- Emite evento `resource-list-click`

### Type: Icon Button
- Container com hover/active
- Action button independente à direita
- Clique no action button emite `action-click`
- Clique no container emite `resource-list-click`

### Type: Switch
- Container **NÃO** tem hover/active
- Apenas o switch interno é interativo
- Emite evento `switch-change`

### Type: Informational
- Container com hover/active visual
- Emite evento `resource-list-click`
- Sem ação específica (apenas feedback visual)

## 🎨 Customização via CSS Variables

```css
atlas-resource-list {
  /* Background states */
  --atlas-color-surface-interaction-neutral-ultra-soft-default: #fcfcfd;
  --atlas-color-surface-interaction-primary-ultra-soft-hover: #ccd6f1;
  --atlas-color-surface-interaction-primary-ultra-soft-pressed: #99ace3;
  --atlas-color-surface-interaction-disabled: #d1d6dc;
  
  /* Typography */
  --text-body: #212529;
  --atlas-color-text-static-neutral-medium: #5e6877;
  
  /* Visual support */
  --atlas-components-resource-list-icon-background-neutral: #f0f1f2;
  
  /* Spacing */
  --atlas-padding-md: 16px;
  --atlas-gap-sm: 12px;
  --atlas-gap-md: 16px;
  --atlas-gap-2xs: 4px;
}
```

## 📚 Documentação

- [Especificação Completa](./atlas-resource-list-spec.json)
- [Demonstração Interativa](./demo.html)
- [Figma Design](https://www.figma.com/design/CsUV3Zb3YJYB02y1gRaDbp/Refatorar-Tokens---Resource-List?node-id=41699-250682)
- [Confluence](https://asaasdev.atlassian.net/wiki/x/lgBeGAE)

## ⚠️ Notas Importantes

- ✅ **Composição**: Usa `atlas-icon`, `atlas-icon-button` e `atlas-switch`. Nunca reimplemente manualmente
- ⚠️ **Switch type**: Container não tem hover/active, apenas o switch interno
- ⚠️ **Estados**: Hover/Active aplicados no container EXCETO para type='switch'
- ⚠️ **Slot**: Conteúdo no slot substitui completamente label e description
- ⚠️ **Acessibilidade**: Todos os tipos interativos têm foco visível e aria-labels

## 🔗 Dependências

- `atlas-icon` (visual support + navigation chevron)
- `atlas-icon-button` (action button)
- `atlas-switch` (toggle control)
- `atlas-design-tokens.css` (tokens globais)
- `assets/fonts/style.css` (Open Sans + ícones)
