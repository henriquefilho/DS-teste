# Atlas Helper Text

Componente de texto contextual para campos de entrada do Atlas Design System.

## 📋 Descrição

O Helper Text é um componente auxiliar que exibe mensagens curtas e contextuais abaixo de campos de entrada (Input, Textarea, Select, Segmented Control). Fornece orientações, informações úteis e feedbacks sobre o estado do campo.

## 🎯 Uso

```html
<!-- Importar o componente -->
<script type="module" src="./atlas-helper-text.js"></script>

<!-- Uso básico -->
<atlas-helper-text state="default" text="Digite seu nome completo"></atlas-helper-text>

<!-- Uso com slot -->
<atlas-helper-text state="error">
  Por favor, insira um endereço de e-mail válido
</atlas-helper-text>

<!-- Estado de aviso -->
<atlas-helper-text state="warning" text="Sua senha deve ter no mínimo 8 caracteres"></atlas-helper-text>
```

## 🔧 Propriedades

| Propriedade | Tipo | Valores | Padrão | Descrição |
|-------------|------|---------|--------|-----------|
| `state` | string | `"default"` \| `"error"` \| `"warning"` | `"default"` | Estado visual do texto |
| `text` | string | qualquer texto | `""` | Conteúdo do texto (alternativa ao slot) |

## 🎨 Estados

### Default
Informações gerais e orientações neutras
- **Cor:** `--atlas-color-text-static-neutral-medium` (#5e6877)

### Error
Mensagens de erro e validações negativas
- **Cor:** `--atlas-color-text-static-error-medium` (#b02a37)

### Warning
Avisos e alertas que requerem atenção
- **Cor:** `--atlas-color-text-static-warning-medium` (#b45309)

## 💡 Exemplos

### Validação de campo

```html
<input type="email" id="email">
<atlas-helper-text state="error">
  Por favor, insira um e-mail válido
</atlas-helper-text>
```

### Informação de formato

```html
<input type="tel" id="phone">
<atlas-helper-text state="default">
  Formato: (00) 00000-0000
</atlas-helper-text>
```

### Aviso de segurança

```html
<input type="password" id="password">
<atlas-helper-text state="warning">
  Senha fraca. Adicione números e caracteres especiais
</atlas-helper-text>
```

## 📐 Especificações Técnicas

- **Tipografia:** Open Sans Regular 400, 12px
- **Line-height:** 1.4
- **Width:** 100% (adapta ao container)
- **Tokens:** Apenas tokens estáticos (sem estados de interação)

## 🔗 Dependências

- `atlas-design-tokens.css`
- Google Fonts: Open Sans (weight 400)

## 📚 Documentação

- [Confluence - Helper Text](https://asaasdev.atlassian.net/wiki/x/TYFSEQE)
- [Figma - Component](https://www.figma.com/design/EpnFuPVWcjDYwkV2o2Vx3I/Atlas---UI-Kit?node-id=23805-26422)

## ✅ Checklist de Implementação

- [x] Componente implementado seguindo o SPEC
- [x] Tokens estáticos mapeados corretamente
- [x] Suporte a conteúdo via atributo `text` e via `<slot>`
- [x] 3 estados visuais (default, error, warning)
- [x] Demo interativo criado
- [x] Documentação completa
