# 🎯 Decisões Técnicas - atlas-popover

## Data: 2026-02-12

---

## 1. ✅ TIPOGRAFIA - MIGRAÇÃO PARA TOKENS MODERNOS

### Problema
O Figma usa tokens legados `.Old/Heading/H6` e `.Old/Small/Regular` que não são tokens do sistema Atlas atual.

### Análise dos Tokens Existentes

| Figma (Legacy) | Especificação | Token Atlas Moderno | Mapeamento |
|----------------|---------------|---------------------|------------|
| `.Old/Heading/H6` | 16px, 600 (SemiBold), 19.2px line-height | `--atlas-typescale-heading-6` | ✅ MATCH PERFEITO |
| `.Old/Small/Regular` | 14px, 400 (Regular), 21px line-height | `--atlas-typescale-body-sm` | ✅ MATCH PERFEITO |

### ✅ DECISÃO: Usar Tokens Modernos do Atlas

**Título:**
```css
font-size: var(--atlas-typescale-heading-6-size);        /* 16px */
font-weight: var(--atlas-typescale-heading-6-weight);    /* 600 */
letter-spacing: var(--atlas-typescale-heading-6-letter-spacing); /* 0 */
```

**Texto do Corpo:**
```css
font-size: var(--atlas-typescale-body-sm-size);          /* 14px */
font-weight: var(--atlas-typescale-body-sm-weight-default); /* 400 */
letter-spacing: var(--atlas-typescale-body-sm-letter-spacing); /* 0 */
```

**Line-height:** Será calculado dinamicamente no CSS (1.2 para heading-6, 1.5 para body-sm)

**Justificativa:**
- ✅ Alinhamento total com o design system atual
- ✅ Tokens existem e são mapeados corretamente
- ✅ Facilita manutenção futura
- ✅ Evita dependência de tokens legados `.Old/*`

---

## 2. ✅ COR DA BORDA - USAR TOKEN EXISTENTE

### Problema
- **Figma usa:** `#ced4da` (RGB: 206, 212, 218)
- **Token Atlas:** `--atlas-color-border-default` → `--atlas-color-pale-sky-200` → `#D1D6DC` (RGB: 209, 214, 220)
- **Diferença:** Δ = 3-4 valores RGB (~1.5% de diferença)

### ✅ DECISÃO: Usar `--atlas-color-border-default`

**Justificativa:**
1. **Consistência**: Todos os componentes devem usar tokens padronizados
2. **Diferença Visual Imperceptível**: Δ de 3-4 valores RGB é invisível ao olho humano
3. **Manutenção**: Se o design system atualizar a cor, todos os componentes seguem automaticamente
4. **Conformidade**: Evita valores "hardcoded" que fogem do sistema

**Conversão de Cor:**
```
Figma:     #ced4da (206, 212, 218)
                ↓
Token:     #D1D6DC (209, 214, 220)
Diferença: +3, +2, +2 (imperceptível)
```

✅ **Aprovado para produção** - Diferença não impacta UX/UI

---

## 3. ✅ SETA (ARROW) - IMPLEMENTAÇÃO VIA CSS PURO

### Problema
Definir estratégia de renderização da seta indicadora do popover.

### Opções Avaliadas

| Opção | Prós | Contras | Decisão |
|-------|------|---------|---------|
| **SVG Inline** | Controle total de forma | Aumenta complexidade do código | ❌ |
| **Imagem Externa** | Simples | Requer request HTTP adicional | ❌ |
| **CSS ::before/::after** | Zero dependências, performance | Formas geométricas limitadas | ✅ |
| **Data URI SVG** | Inline mas vetorial | Base64 aumenta tamanho do CSS | ❌ |

### ✅ DECISÃO: CSS Puro com `::before` e Border-Triangle

**Implementação:**
```css
/* Seta usando border trick (triângulo CSS) */
.popover[arrow="top-center"]::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 5px solid var(--atlas-color-border-default);
}

.popover[arrow="top-center"]::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 5px solid var(--atlas-color-surface-static-container-neutral-ultra-soft);
}
```

**Dimensões da Seta (extraído do Figma):**
- Largura: 12px (6px x 2 para cada lado)
- Altura: 5px
- Cor: Herda `background-color` do container
- Borda: Herda `border-color` do container

**Justificativa:**
- ✅ **Performance**: Zero requests HTTP, zero processamento SVG
- ✅ **Manutenibilidade**: CSS puro, fácil de ajustar
- ✅ **Compatibilidade**: Funciona em todos os browsers modernos
- ✅ **Tokens**: Usa cores do design system automaticamente
- ✅ **Tamanho**: Não adiciona bytes ao bundle

**Posições Suportadas:**
- `top-center`, `top-left`, `top-right` → Seta aponta para cima
- `bottom-center`, `bottom-left`, `bottom-right` → Seta aponta para baixo
- `side-left` → Seta aponta para esquerda
- `side-right` → Seta aponta para direita
- `none` → Sem seta (::before/::after não renderizados)

---

## 4. 📦 TOKENS ADICIONAIS NECESSÁRIOS

### Análise de Gaps

Após auditoria completa, **NÃO são necessários novos tokens** no `atlas-design-tokens.css`.

Todos os tokens necessários já existem:

| Propriedade | Token | Status |
|-------------|-------|--------|
| Background | `--atlas-color-surface-static-container-neutral-ultra-soft` | ✅ Existe |
| Border Color | `--atlas-color-border-default` | ✅ Existe |
| Border Width | `--atlas-stroke-weight-100` | ✅ Existe |
| Border Radius | `--atlas-radius-composite-lg` → `--atlas-radius-200` | ✅ Existe (16px) |
| Padding | `--atlas-padding-md` → `--atlas-spacing-200` | ✅ Existe (16px) |
| Gap | `--atlas-spacing-100` | ✅ Existe (8px) |
| Shadow Offset | `--atlas-spacing-100` | ✅ Existe (8px) |
| Shadow Blur | `--atlas-blur-200` | ✅ Existe (16px) |
| Shadow Color | `--atlas-color-opacity-black-200` | ✅ Existe |
| Text Color | `--atlas-color-text-static-neutral-hard` | ✅ Existe |
| Icon Color | `--atlas-color-icon-static-neutral-medium` | ✅ Existe |
| Close Button Hover | `--atlas-color-surface-interaction-neutral-ultra-soft-hover` | ✅ Existe |
| Close Button Radius | `--atlas-radius-composite-full` | ✅ Existe (9999px) |
| Close Button Padding | `--atlas-padding-2xs` | ✅ Existe (4px) |
| Title Font Size | `--atlas-typescale-heading-6-size` | ✅ Existe (16px) |
| Title Font Weight | `--atlas-typescale-heading-6-weight` | ✅ Existe (600) |
| Text Font Size | `--atlas-typescale-body-sm-size` | ✅ Existe (14px) |
| Text Font Weight | `--atlas-typescale-body-sm-weight-default` | ✅ Existe (400) |

### ✅ CONCLUSÃO: Sistema de Tokens Completo

**NENHUMA atualização necessária no `atlas-design-tokens.css`**

Todos os tokens estão mapeados e funcionais. O componente pode ser implementado usando 100% tokens do design system existente.

---

## 5. 📝 RESUMO DAS DECISÕES

| # | Decisão | Resultado | Impacto |
|---|---------|-----------|---------|
| 1 | Tipografia | Migrar para tokens modernos | ✅ Implementar |
| 2 | Cor da Borda | Usar token existente (#D1D6DC) | ✅ Implementar |
| 3 | Seta (Arrow) | CSS puro com `::before/::after` | ✅ Implementar |
| 4 | Novos Tokens | Não necessários | ✅ Nenhuma ação |

---

## 6. ✅ APROVAÇÃO PARA IMPLEMENTAÇÃO

### Checklist de Validação

- [x] Todos os tokens mapeados e existentes
- [x] Tipografia migrada para tokens modernos
- [x] Cor da borda validada (diferença < 2%)
- [x] Estratégia de seta definida (CSS puro)
- [x] Zero necessidade de novos tokens
- [x] Compatibilidade com design system validada

### 🚀 Status: **PRONTO PARA IMPLEMENTAÇÃO**

Todos os requisitos técnicos foram resolvidos. O componente pode ser implementado seguindo este documento e o SPEC aprovado.

---

**Documento gerado em:** 2026-02-12  
**Autor:** GitHub Copilot (Claude Sonnet 4.5)  
**Componente:** atlas-popover v1.0.0
