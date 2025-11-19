## Atlas Button (Web Components)

O `<atlas-button>` implementa as variações definidas no Atlas Design System (`filled`, `outlined`, `ghost`) com tons (`primary`, `info`, `success`, `warning`, `danger`, `inverse`) e tamanhos (`sm`, `md`, `lg`). Os valores foram derivados diretamente dos tokens JSON (camadas primitives → foundation → components) e convertidos para CSS puro.

### Uso

```html
<script type="module" src="/web/components/button/atlas-button.js"></script>

<atlas-button variant="filled" tone="primary" size="md">
  CTA padrão
</atlas-button>

<atlas-button variant="outlined" tone="danger" size="sm">
  Cancelar
</atlas-button>

<atlas-button variant="ghost" tone="inverse" size="lg" icon-only>
  <svg slot="icon-start" viewBox="0 0 24 24">...</svg>
</atlas-button>
```

- `variant`: `filled` (padrão), `outlined`, `ghost`
- `tone`: `primary` (padrão), `success`, `warning`, `danger`, `info`, `inverse`
- `size`: `sm`, `md` (padrão), `lg`
- `icon-only`: booleano, comprime o padding horizontal
- `disabled`: reflete para o botão nativo e aplica os tokens de estado desabilitado

### Considerações

- O componente usa Shadow DOM e carrega `atlas-button.css` automaticamente (CSS puro, sem build).
- O foco utiliza o token `atlas.foundation.stroke-weight.340` convertido para um outline via `box-shadow`.
- Slots nomeados (`icon-start`, `icon-end`) possibilitam composições com ícones.

