# Atlas Segmented Control

Controle de alternância entre diferentes visualizações ou categorias de conteúdo relacionadas.

## 📋 Descrição

O Segmented Control permite ao usuário alternar entre diferentes visualizações ou categorias de conteúdo relacionadas dentro de um mesmo contexto. Fornece uma navegação local e imediata entre duas ou três opções relacionadas, tornando a mudança de perspectiva rápida e intuitiva.

## 🎯 Uso

```html
<!-- Importar os componentes -->
<script type="module" src="../atlas-helper-text/atlas-helper-text.js"></script>
<script type="module" src="./atlas-segmented-control.js"></script>

<!-- Uso básico (2 opções) -->
<atlas-segmented-control 
  size="md" 
  labels="Lista,Grade"
  selected-index="0">
</atlas-segmented-control>

<!-- 3 opções -->
<atlas-segmented-control 
  size="md" 
  labels="Hoje,Semana,Mês"
  selected-index="1">
</atlas-segmented-control>

<!-- Estado disabled com helper text -->
<atlas-segmented-control 
  size="md" 
  labels="Rascunho,Publicado"
  selected-index="0"
  disabled
  helper-text="Esta opção está temporariamente indisponível">
</atlas-segmented-control>
```

## 🔧 Propriedades

| Propriedade | Tipo | Valores | Padrão | Descrição |
|-------------|------|---------|--------|-----------|
| `size` | string | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Tamanho do componente |
| `disabled` | boolean | `true` \| `false` | `false` | Define se está desabilitado |
| `selected-index` | number | 0, 1, 2 | `0` | Índice do botão selecionado |
| `labels` | string | texto separado por vírgula | `"Label 1,Label 2"` | Labels dos botões |
| `helper-text` | string | qualquer texto | `""` | Texto exibido quando disabled |

## 📏 Tamanhos

### Small (sm)
- **Altura:** 32px
- **Padding:** 8px 12px
- **Font-size:** 14px

### Medium (md) - Padrão
- **Altura:** 40px
- **Padding:** 8px 24px
- **Font-size:** 16px

### Large (lg)
- **Altura:** 48px
- **Padding:** 12px 32px
- **Font-size:** 16px

## 🎨 Estados

### Default
- **Botão ativo:** Fundo azul (`--atlas-color-surface-control-active-default`) com texto branco
- **Botões inativos:** Fundo branco com texto azul
- **Border:** Azul (`--atlas-color-border-primary-hard`)

### Hover/Pressed
Apenas em botões inativos:
- **Hover:** `--atlas-color-surface-interaction-primary-ultra-soft-hover`
- **Pressed:** `--atlas-color-surface-interaction-primary-ultra-soft-pressed`

### Disabled
- **Botão ativo:** Fundo cinza claro com texto cinza escuro
- **Botões inativos:** Transparente com texto cinza claro
- **Border:** Cinza (`--atlas-color-border-disabled`)
- **Helper text:** Exibido quando `helper-text` está definido

## 🔔 Eventos

### change

Disparado quando a seleção muda.

```javascript
control.addEventListener('change', (event) => {
  console.log('Selected index:', event.detail.selectedIndex);
  console.log('Selected label:', event.detail.label);
});
```

**Event Detail:**
```typescript
{
  selectedIndex: number,  // Índice do botão selecionado
  label: string          // Texto do botão selecionado
}
```

## 💡 Exemplos

### Filtro de período

```html
<atlas-segmented-control 
  size="md" 
  labels="Hoje,Semana,Mês"
  selected-index="0">
</atlas-segmented-control>
```

### Tipo de visualização

```html
<atlas-segmented-control 
  size="md" 
  labels="Lista,Grade,Mapa"
  selected-index="1">
</atlas-segmented-control>
```

### Toggle binário

```html
<atlas-segmented-control 
  size="sm" 
  labels="Pessoa Física,Pessoa Jurídica"
  selected-index="0">
</atlas-segmented-control>
```

### Programaticamente

```javascript
const control = document.querySelector('atlas-segmented-control');

// Alterar seleção
control.selectedIndex = 2;

// Desabilitar
control.disabled = true;

// Adicionar helper text
control.helperText = "Funcionalidade em manutenção";

// Escutar mudanças
control.addEventListener('change', (e) => {
  console.log(`Selecionado: ${e.detail.label}`);
});
```

## ⚠️ Restrições

- **APENAS 2 ou 3 botões são suportados**
- O componente emite um warning no console se receber menos de 2 ou mais de 3 labels
- Helper text é exibido APENAS quando `disabled=true` e `helper-text` está definido

## 📐 Especificações Técnicas

### Tokens Utilizados

**Container:**
- Border: `--atlas-color-border-primary-hard` / `--atlas-color-border-disabled`
- Background: `--atlas-color-surface-static-container-neutral-ultra-soft`
- Border-radius: `--atlas-radius-composite-pill`
- Padding: 3px
- Gap: 4px

**Botões Ativos:**
- Background: `--atlas-color-surface-control-active-default` / `--atlas-color-surface-control-active-disabled`
- Color: `--atlas-color-text-static-neutral-ultra-soft` / `--atlas-color-text-static-disabled-level-2`

**Botões Inativos:**
- Background: `--atlas-color-surface-control-inactive-default` / transparent (disabled)
- Color: `--atlas-color-text-static-primary-medium` / `--atlas-color-text-static-disabled-level-1`

### Tipografia
- **Font:** Open Sans Semi Bold 600
- **Sizes:** 14px (sm), 16px (md/lg)
- **Line-height:** 1
- **Letter-spacing:** 0

## 🔗 Dependências

- `atlas-design-tokens.css`
- `atlas-helper-text` (componente auxiliar)
- Google Fonts: Open Sans (weights 400, 600)

## 📚 Documentação

- [Confluence - Segmented Control](https://asaasdev.atlassian.net/wiki/x/zYGaBgE)
- [Figma - Component](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=489-18050)

## ✅ Checklist de Implementação

- [x] Componente implementado seguindo o SPEC
- [x] Tokens estáticos mapeados corretamente
- [x] Suporte a 2 e 3 botões
- [x] 3 tamanhos (sm, md, lg)
- [x] Estado disabled com helper text
- [x] Evento 'change' implementado
- [x] Estados de hover/pressed em botões inativos
- [x] Validação de número de botões
- [x] Acessibilidade (aria-pressed, disabled)
- [x] Demo interativo com playground
- [x] Documentação completa
