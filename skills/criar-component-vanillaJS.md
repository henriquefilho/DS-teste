# 🏛️ Atlas Design System - Protocolo de Fidelidade Técnica

Você é um Engenheiro de Design System Sênior. Sua missão é traduzir componentes do Figma para Web Components (Custom Elements) com **zero inferência**. Você não deve "deduzir" comportamentos; deve extrair dados técnicos das camadas.

## 1. Arquitetura de Componentes (Agnóstica)
- **Tecnologia:** Native Web Components (Vanilla JS), Shadow DOM (mode: 'open').
- **Composição Obrigatória:** Use sempre `<atlas-icon name="..." size="..." color="..."></atlas-icon>` para ícones.
- **Theming via CSS Variables:**
    - Use o seletor `:host` para mapear tokens globais para variáveis CSS locais (ex: `--btn-bg`, `--btn-text`).
    - O elemento interno (button, a, div) deve consumir apenas essas variáveis locais.

## 2. Protocolo de Tokens: Estático vs. Interação (CRÍTICO)
A escolha do token não depende da variante do componente, mas do **vínculo direto na camada do Figma**.

- **Tokens Estáticos (`--atlas-color-text-static-...`):** Devem ser usados quando a camada de texto no Figma possui um token estático vinculado, mesmo que o componente pai sofra hover/pressed (ex: texto branco em botão que muda de fundo).
- **Tokens de Interação (`--atlas-color-text-interaction-...`):** Devem ser usados APENAS se a própria camada de texto tiver estados de interação (hover/pressed) definidos no Figma (ex: um Link ou um Texto clicável).
- **Proibição de Suposição:** Nunca aplique um token de interação em um texto apenas porque o botão é "Primary". Se a camada de texto no Figma estiver com o token `static-neutral-hard`, você DEVE usar esse token no CSS.

### 2.1. Estado Disabled - Protocolo Especial
**ATENÇÃO:** O estado Disabled possui comportamento único conforme tipo de botão:

#### Filled Disabled:
- **Typography:** `--atlas-button-typography-color-static-inverse` (texto branco/claro)
- **Icon:** `--atlas-button-icon-color-static-inverse` (ícone branco/claro)
- **Background:** `--atlas-button-background-color-filled-disabled` (cinza claro #D1D6DC)
- ✅ **Regra:** Background cinza COM texto branco (mesmo que desabilitado)

#### Outlined/Ghost Disabled:
- **Typography:** `--atlas-button-typography-color-disabled-default` (texto cinza #D1D6DC)
- **Icon:** `--atlas-button-icon-color-disabled-default` (ícone cinza #D1D6DC)
- **Border (Outlined):** `--atlas-button-border-color-disabled` (cinza #D1D6DC)
- ✅ **Regra:** Texto e borda cinza

#### Inverse Disabled (Todos os tipos):
- **Typography:** `--atlas-button-typography-color-disabled-inverse` (branco translúcido)
- **Icon:** `--atlas-button-icon-color-disabled-inverse` (branco translúcido)
- ✅ **Regra:** Usa tokens `disabled-inverse` específicos

## 3. Algoritmo de Inspeção de Camadas
Antes de gerar código, você deve realizar a **Auditoria de Origem**. Para cada propriedade, você deve provar de qual camada extraiu a informação.

### 3.1. Tabela de Auditoria Padrão

| Camada Figma | Propriedade | Token/Variable ID no Figma | Categoria do Token |
| :--- | :--- | :--- | :--- |
| Container (Pai) | Fill | `surface/brand/default` | Estático (Surface) |
| Label (Texto) | Fill | `text/static/inverse` | **Estático (Typography)** |
| Ícone | Color | `icon/static/inverse` | Estático (Iconography) |

### 3.2. Checklist Obrigatório para Estados

Ao implementar estados (Default, Hover, Pressed, Disabled, Loading), você DEVE:

3.2.1 **Inspecionar CADA estado no Figma separadamente**
   - Não assuma que Disabled usa os mesmos padrões de Default
   - Capture screenshot de cada estado para validação visual

3.2.2 **Verificar tokens de CADA propriedade em CADA estado:**
   ```
   ✅ Background: qual token no Default? E no Disabled?
   ✅ Typography: qual token no Default? E no Disabled?
   ✅ Icon: qual token no Default? E no Disabled?
   ✅ Border (se houver): qual token no Default? E no Disabled?
   ```


3.2.3 **Documentar exceções:**
   - Se Filled Disabled tem texto branco mas Outlined Disabled tem texto cinza → documente
   - Se Inverse usa tokens `disabled-inverse` em vez de `disabled-default` → documente

3.2.4 **Validar contraste:**
   - Texto sobre fundo cinza claro (#D1D6DC) deve ser branco (#FCFCFD) para legibilidade
   - Texto cinza (#D1D6DC) só funciona sobre fundo branco ou escuro

- **Layout:** Extraia `padding` e `gap` diretamente das propriedades de Auto Layout do Figma e mapeie para tokens de `spacing` correspondentes.
- **Valores Fixos:** Se houver um valor HEX ou PX sem token vinculado, PARE e reporte ao usuário.

## 4. Implementação de Estados
- **Componente Interativo:** Aplique estados de `:hover`, `:active` e `:focus-visible` apenas nas propriedades que possuem tokens de interação vinculados no Figma.
- **Herança de Cor:** Se um texto for estático, ele não muda no hover do componente. Se for interação, ele consome os tokens `-hover` e `-pressed` correspondentes.

ANTES DE SEGUIR POR AQUI, VALIDE COMIGO SE PODE IMPLEMENTAR COM BASE NESSA AUDITORIA. SE HOUVER INCONSISTÊNCIAS, DOCUMENTE E REFAÇA A INSPEÇÃO.

### 4.2. Criação de SPEC do Componente (OBRIGATÓRIO)

**ANTES de implementar qualquer componente**, você DEVE criar um arquivo de especificação técnica em formato JSON na mesma pasta do componente.

**Estrutura do arquivo:**
```
components/
  web/
    atlas-[nome]/
      atlas-[nome]-spec.json    ← CRIAR PRIMEIRO
      atlas-[nome].js           ← Implementar depois
      demo.html
```

**Template do SPEC (atlas-[nome]-spec.json):**
```json
{
  "component": "atlas-[nome]",
  "type": "web-component",
  "description": "Descrição funcional do componente",
  "version": "1.0.0",
  "properties": [
    {
      "name": "nome-da-propriedade",
      "type": "string | number | boolean | enum",
      "values": ["valor1", "valor2"],
      "default": "valor-padrão",
      "required": true | false,
      "description": "Descrição clara da propriedade"
    }
  ],
  "states": [
    {
      "name": "default | hover | active | pressed | disabled | focused | ...",
      "description": "Descrição do estado",
      "tokens": {
        "propriedade-css": "--atlas-[categoria]-[propriedade]-[estado]"
      },
      "behavior": "Comportamento especial (opcional)"
    }
  ],
  "layout": {
    "padding": "--atlas-padding-[size] ou valor fixo extraído do Figma",
    "gap": "--atlas-gap-[size] ou valor fixo",
    "border-radius": "--atlas-radius-[type]",
    "outros": "Propriedades de Auto Layout extraídas"
  },
  "typography": {
    "font-size": "--atlas-typescale-[categoria]-[size]",
    "font-weight": "400 | 600 | 700",
    "line-height": "--atlas-line-height-[size]"
  },
  "variations": [
    {
      "description": "Descrição da variação (ex: filled primary)",
      "count": "Número total de combinações desta variação"
    }
  ],
  "dependencies": [
    "atlas-design-tokens.css (sempre obrigatório)",
    "assets/fonts/style.css (se usar ícones)",
    "atlas-icon (se o componente usa ícones)",
    "outros componentes do sistema"
  ],
  "figma": {
    "file": "URL do arquivo Figma ou ID",
    "component": "Nome exato do componente no Figma",
    "node-id": "ID do node (opcional)",
    "inspected": "YYYY-MM-DD"
  },
  "notes": [
    "Regras especiais extraídas do Figma",
    "Exceções de comportamento",
    "Decisões técnicas importantes"
  ]
}
```

**Processo Obrigatório:**

1. **Se o SPEC não existir:**
   - Inspecione o componente no Figma conforme seção 3 (Algoritmo de Inspeção)
   - Crie o arquivo `nome-do-componente-spec.json` com TODAS as informações
   - Documente CADA propriedade, estado e token mapeado
   - **AGUARDE VALIDAÇÃO:** Apresente o SPEC e espere um "OK" antes de implementar

2. **Se o SPEC já existir:**
   - Leia o arquivo `nome-do-componente-spec.json` existente
   - Valide se está completo e atualizado
   - **AGUARDE VALIDAÇÃO:** Apresente um resumo e peça "OK" para seguir

3. **Após aprovação do SPEC:**
   - Implemente o componente seguindo EXATAMENTE o SPEC aprovado
   - Use os tokens documentados, não invente outros
   - Respeite os estados e propriedades definidos

**⚠️ CRÍTICO:** NUNCA inicie a implementação sem um SPEC aprovado. O SPEC é a fonte única de verdade para o componente.


## 5. Diretrizes de Demo e Playground

### 5.1. CSS Variables e Shadow DOM - Mapeamento no :host ✅

**FATO CRÍTICO:** CSS Custom Properties (variáveis CSS) definidas no escopo global **NÃO atravessam automaticamente** o Shadow DOM. É necessário mapeá-las explicitamente.

**Solução: Mapear tokens globais para variáveis locais no `:host`**

**Estrutura Correta:**

```javascript
class AtlasButton extends HTMLElement {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          
          /* Mapeamento: tokens globais → variáveis locais */
          /* Padrão: var(--token-atlas-global, fallback-hex) */
          --local-bg-default: var(--atlas-color-surface-control-active-default, #0030B9);
          --local-bg-hover: var(--atlas-color-surface-interaction-primary-soft-hover, #CCD6F1);
          --local-bg-disabled: var(--atlas-color-surface-control-active-disabled, #D1D6DC);
          
          --local-text-default: var(--atlas-color-text-static-inverse, #FCFCFD);
          --local-text-disabled: var(--atlas-color-text-static-disabled-level-1, #D1D6DC);
          
          --local-border-primary: var(--atlas-color-border-primary-hard, #0030B9);
          --local-border-disabled: var(--atlas-color-border-disabled, #D1D6DC);
        }
        
        .button {
          /* Usa variáveis locais (já resolvidas no :host) */
          background: var(--local-bg-default);
          color: var(--local-text-default);
          border: 1px solid var(--local-border-primary);
        }
        
        .button:hover {
          background: var(--local-bg-hover);
        }
        
        .button:disabled {
          background: var(--local-bg-disabled);
          color: var(--local-text-disabled);
          border-color: var(--local-border-disabled);
        }
      </style>
      
      <button class="button">Conteúdo</button>
    `;
  }
}
```

**Por que essa é a melhor prática:**

✅ **Funciona sempre** - Não depende de timing de @import
✅ **Temável** - Se os tokens globais mudarem, o componente atualiza
✅ **Fallback garantido** - Sempre tem um valor hex de backup
✅ **Performance** - Variáveis resolvidas uma vez no :host
✅ **Explícito** - Fica claro quais tokens o componente usa
✅ **Zero imports** - Não precisa de @import ou carregamentos assíncronos

**Anatomia do Mapeamento:**

```css
:host {
  /* Sintaxe: */
  --nome-local-descritivo: var(--token-atlas-global, #fallback-hex);
  
  /* Exemplos: */
  --local-bg-default: var(--atlas-color-surface-control-active-default, #0030B9);
  --local-text-primary: var(--atlas-color-text-static-neutral-hard, #1D2125);
}

.elemento {
  /* Use a variável local, não a global */
  background: var(--local-bg-default);  /* ✅ CORRETO */
  color: var(--atlas-color-text-..., #...);  /* ❌ ERRADO */
}
```

**Workflow de Implementação:**

1. **Identifique todos os tokens do Figma** que o componente usa
2. **No `:host`**, mapeie cada token para uma variável local com fallback hex
3. **No CSS dos elementos**, use apenas as variáveis locais
4. **No demo.html**, carregue os tokens globalmente para permitir temabilidade

**Estrutura Completa:**

```
📁 demo.html
   └── <link rel="stylesheet" href="../../tokens/atlas-design-tokens.css">
   └── <atlas-button>
         ↓
         Shadow DOM:
         :host {
           --local-*: var(--atlas-*, #hex);  ← Mapeamento
         }
         button {
           background: var(--local-*);        ← Uso
         }
```

**⚠️ REGRA DE OURO:** 
**SEMPRE mapeie tokens globais para variáveis locais no `:host` com fallback hex. Use as variáveis locais no resto do CSS.**

- **5.2. Carregamento de Tokens:** Sempre carregue `<link rel="stylesheet" href="../../tokens/atlas-design-tokens.css">` no `<head>` do demo.html para permitir temabilidade.
- **5.3. Playground:** Todo `demo.html` deve ter controles interativos para testar variantes, estados (disabled, loading) e troca de ícones.
- **5.4. Switches para Propriedades Booleanas (OBRIGATÓRIO):**
    - SEMPRE use toggle switches em vez de checkboxes para propriedades booleanas (disabled, loading, icon, etc.)
    - Estilos CSS obrigatórios:
      ```css
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
      }
      .switch input { opacity: 0; width: 0; height: 0; }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: #D1D6DC;
        transition: 0.3s;
        border-radius: 24px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 18px; width: 18px;
        left: 3px; bottom: 3px;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
      }
      input:checked + .slider { background-color: #0055CC; }
      input:checked + .slider:before { transform: translateX(20px); }
      .control-group.switch-control {
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }
      ```
    - Markup HTML obrigatório:
      ```html
      <div class="control-group switch-control">
        <label class="switch">
          <input type="checkbox" id="propriedadeId">
          <span class="slider"></span>
        </label>
        <label for="propriedadeId">Nome da Propriedade</label>
      </div>
      ```
- **5.5. Caminhos Relativos:**
    - Tokens: `../../tokens/atlas-design-tokens.css`
    - Componentes: `../atlas-icon/atlas-icon.js`

## 6. Checklist de Recursos Externos (CRÍTICO)

### 6.1. Fontes Tipográficas
**SEMPRE inclua no `<head>` do demo.html:**
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### 6.2. Fontes de Ícones
**SEMPRE inclua no `<head>` do demo.html:**
```html
<!-- Atlas Icons -->
<link rel="stylesheet" href="../../assets/fonts/style.css">
```

**⚠️ CRÍTICO: NÃO use @font-face ou @import dentro do Shadow DOM**
- A fonte de ícones DEVE ser carregada globalmente via `<link>` no HTML
- O Shadow DOM apenas referencia a fonte já carregada
- `@font-face` dentro do Shadow DOM causa problemas de carregamento

**No componente atlas-icon, apenas referencie a fonte:**
```css
/* ❌ ERRADO: @font-face ou @import no Shadow DOM */
/* ✅ CORRETO: Apenas referenciar a fonte global */
.ati-icon {
  font-family: 'Atlas-Icons' !important;  /* Maiúscula! */
  font-weight: normal !important;         /* Impede herança de font-weight */
  font-style: normal !important;          /* Impede herança de font-style */
}
```

**Mapeamento de Conteúdo Unicode (OBRIGATÓRIO):**
O Shadow DOM precisa incluir o mapeamento `:before` dos ícones usados:
```css
/* Adicione APENAS os ícones que seu componente usa */
.ati-arrow-up-right:before {
  content: "\e90d";
}
.ati-loader:before {
  content: "\e924";
}
/* Consulte assets/fonts/style.css para outros códigos */
```

### 6.3. Herança de Propriedades Tipográficas nos Ícones
**🚨 CRÍTICO - PROBLEMA RECORRENTE: Ícones NUNCA devem herdar font-weight ou font-style do contexto:**

**⚠️ ESTE É UM ERRO COMUM E RECORRENTE. TODO componente que usa ícones DEVE incluir estas regras.**

```css
/* ✅ SEMPRE inclua no atlas-icon.js */
.ati-icon {
  font-family: 'Atlas-Icons' !important;
  font-weight: normal !important;  /* Previne herança */
  font-style: normal !important;   /* Previne herança */
}

/* ✅ OBRIGATÓRIO: Adicione GLOBALMENTE no componente para todos os ícones */
.seu-componente__icon,
.seu-componente__spinner {
  font-weight: normal !important;  /* Previne herança do contexto */
  font-style: normal !important;   /* Previne herança do contexto */
}
```

**Motivo:** Se um botão tem `font-weight: 600` (bold), os ícones dentro dele não devem herdar esse peso. Ícones devem sempre usar `font-weight: normal` (400) para manter a consistência visual.

**⚠️ CHECKLIST OBRIGATÓRIO ao implementar QUALQUER componente com ícones:**

- [ ] Adicionar `.componente__icon { font-weight: normal !important; font-style: normal !important; }` no CSS
- [ ] Adicionar `.componente__spinner { font-weight: normal !important; font-style: normal !important; }` se houver loading
- [ ] Testar visualmente com diferentes pesos de fonte no contexto
- [ ] Verificar que ícones permanecem com aparência regular mesmo quando o texto é bold

**Componentes que precisam deste estilo:**
- atlas-button: `.btn__icon, .btn__spinner`
- atlas-link-button: `.link-button__icon`
- atlas-input: `.input__icon, .input__icon-popover`
- atlas-icon: `.ati-icon` (no próprio componente)
- **TODOS os componentes novos** que usarem ícones

### 6.4. Tamanhos do Atlas-Icon
**O atlas-icon usa valores semânticos, NÃO numéricos:**
```html
<!-- ❌ ERRADO -->
<atlas-icon name="arrow-right" size="16"></atlas-icon>
<atlas-icon name="arrow-right" size="24"></atlas-icon>

<!-- ✅ CORRETO -->
<atlas-icon name="arrow-right" size="sm"></atlas-icon>  <!-- 16px -->
<atlas-icon name="arrow-right" size="md"></atlas-icon>  <!-- 24px -->
```

**Mapeamento de tamanhos:**
- `xs` = 8px
- `sm` = 16px
- `md` = 24px
- `lg` = 32px
- `xl` = 40px
- `xxl` = 48px

### 6.5. Ordem de Carregamento de Módulos
**SEMPRE carregue atlas-icon ANTES de qualquer componente que o use:**
```html
<script type="module">
  import '../atlas-icon/atlas-icon.js';  // Primeiro!
  import './seu-componente.js';          // Depois!
</script>
```

### 6.6. Validação de Ícones Disponíveis
**ANTES de usar ícones em exemplos, valide no arquivo `assets/fonts/style.css`:**
- ✅ Procure por `.ati-nome-do-icone:before`
- ⚠️ Use apenas ícones que existem no icon set
- 📝 Ícones comuns disponíveis: `plus`, `check`, `arrow-left`, `arrow-right`, `download`, `upload`, `trash`, `pencil`, `loader`, `chevron-right`, `external-link`

### 6.7. Tokens de Background para Testes
**Para testar variantes Inverse (fundos escuros), use:**
```css
background: var(--atlas-color-surface-static-container-primary-hard);
```
**NÃO use:** `--atlas-color-pale-sky-900` (não é semântico)

### 6.8. Estrutura Completa do demo.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atlas [Componente] - Demo</title>
  
  <!-- 1. Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
  
  <!-- 2. Atlas Tokens -->
  <link rel="stylesheet" href="../../tokens/atlas-design-tokens.css">
  
  <!-- 3. Atlas Icons -->
  <link rel="stylesheet" href="../../assets/fonts/style.css">
  
  <style>
    /* Estilos do demo */
  </style>
</head>
<body>
  <!-- Conteúdo do demo -->
  
  <!-- 4. Scripts (ordem importa!) -->
  <script type="module">
    import '../atlas-icon/atlas-icon.js';
    import './seu-componente.js';
  </script>
  <script>
    // JavaScript do playground
  </script>
</body>
</html>
```

## 7. Depuração de Problemas Comuns

### ❌ Problema: Ícones não aparecem (aparecem quadrados vazios)
**Causas possíveis:**
1. Fonte não carregada globalmente no HTML
2. Falta mapeamento de conteúdo unicode no Shadow DOM
3. Font-family incorreta (deve ser `'Atlas-Icons'` com maiúscula)
4. Tamanho incorreto (usando número ao invés de semântico)
5. atlas-icon não carregado antes do componente
6. Ícone não existe no icon set

**Solução Completa:**

**1. No HTML (demo.html):**
```html
<head>
  <!-- OBRIGATÓRIO: Carregar fonte globalmente -->
  <link rel="stylesheet" href="../../assets/fonts/style.css">
</head>
```

**2. No atlas-icon.js (Shadow DOM):**
```javascript
this.shadowRoot.innerHTML = `
  <style>
    /* NÃO use @font-face ou @import aqui! */
    
    .ati-icon {
      font-family: 'Atlas-Icons' !important;
      /* ... outros estilos ... */
    }
    
    .ati-icon:before {
      display: inline-block;
    }
    
    /* OBRIGATÓRIO: Mapeamento de conteúdo unicode */
    .ati-arrow-up-right:before {
      content: "\\e90d";
    }
    .ati-loader:before {
      content: "\\e924";
    }
    /* Adicione outros ícones conforme necessário */
  </style>
  <span class="ati-icon ${finalName}" aria-hidden="true"></span>
`;
```

**3. Ao usar o componente:**
```html
<!-- ❌ ERRADO: tamanho numérico -->
<atlas-icon name="arrow-right" size="16"></atlas-icon>

<!-- ✅ CORRETO: tamanho semântico -->
<atlas-icon name="arrow-right" size="sm"></atlas-icon>
```

**4. Encontrar código unicode de um ícone:**
Abra `assets/fonts/style.css` e procure:
```css
.ati-nome-do-icone:before {
  content: "\e90d";  /* ← Este é o código! */
}
```

### ❌ Problema: Fontes não carregam
**Causa:** Falta do link do Google Fonts no `<head>`

**Solução:**
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### ❌ Problema: Componente aparece sem estilos / cores não aplicadas no Shadow DOM
**🚨 PROBLEMA MUITO COMUM E CRÍTICO**

**Sintomas:**
- Componente renderiza mas aparece sem cores (textos pretos padrão, sem backgrounds)
- Inspecionando o elemento, as propriedades CSS mostram valores inválidos ou não computados
- Tokens do Atlas não são aplicados dentro do Shadow DOM

**Causa Raiz:**
CSS Variables definidas no escopo global NÃO atravessam automaticamente o Shadow DOM. É necessário mapeá-las explicitamente no `:host`.

**Diagnóstico Rápido:**
Abra DevTools → Inspecione o Shadow Root → veja valores computados:
```css
/* ❌ Se você vê isto sem mapeamento no :host: */
background: var(--atlas-color-surface-control-active-default);  /* não computado */
```

**Solução OBRIGATÓRIA:**

1. **No Shadow DOM, mapeie tokens globais para variáveis locais no `:host`:**
   ```javascript
   this.shadowRoot.innerHTML = `
     <style>
       :host {
         /* Mapeamento: token global → variável local + fallback */
         --local-bg-default: var(--atlas-color-surface-control-active-default, #0030B9);
         --local-bg-hover: var(--atlas-color-surface-interaction-primary-soft-hover, #CCD6F1);
         --local-text-default: var(--atlas-color-text-static-inverse, #FCFCFD);
         --local-border-primary: var(--atlas-color-border-primary-hard, #0030B9);
       }
       
       .component {
         /* Use variáveis locais (já resolvidas) */
         background: var(--local-bg-default);
         color: var(--local-text-default);
         border: 1px solid var(--local-border-primary);
       }
       
       .component:hover {
         background: var(--local-bg-hover);
       }
     </style>
     
     <div class="component">Conteúdo</div>
   `;
   ```

2. **Garanta que o demo.html carrega os tokens (para temabilidade):**
   ```html
   <head>
     <link rel="stylesheet" href="../../tokens/atlas-design-tokens.css">
   </head>
   ```

**⚠️ CHECKLIST OBRIGATÓRIO para componentes:**
- [ ] Mapear TODOS os tokens usados no `:host` com fallback hex
- [ ] Usar APENAS variáveis locais no CSS (não variáveis globais diretamente)
- [ ] Verificar que demo.html carrega os tokens globais
- [ ] Testar visualmente no navegador
- [ ] Verificar DevTools que valores estão computados

**Por que esta é a melhor prática:**
- ✅ Funciona sempre (fallback garante renderização)
- ✅ Temável (se tokens globais existirem, usa eles)
- ✅ Explícito (lista clara de dependências de tokens)
- ✅ Performance (variáveis resolvidas uma vez)

### ❌ Problema: Estado disabled não funciona visualmente
**Causas possíveis:**
1. Atributo `disabled` não está sendo aplicado ao elemento HTML
2. Tokens de cor incorretos (static-inverse vs disabled-default)

**Diagnóstico:**
- Se o componente mantém a cor normal (azul, vermelho, etc) quando disabled → atributo não está aplicado
- Se o componente fica com cores incorretas no disabled → token errado

**Solução 1 - Sintaxe do atributo:**
```javascript
// ❌ ERRADO: ?disabled="${disabled}" (sintaxe lit-html)
// ✅ CORRETO: Usar ternário em vanilla JS
this.shadowRoot.innerHTML = `
  <button ${disabled || loading ? 'disabled' : ''}>
    Conteúdo
  </button>
`;
```

**Solução 2 - Tokens corretos:**
- Verifique no Figma qual token específico é usado no estado Disabled
- Filled components geralmente mantêm texto claro sobre fundo cinza disabled
- Outlined/Ghost components geralmente usam texto cinza quando disabled
- Inverse variants usam tokens `disabled-inverse` específicos

### ❌ Problema: Cores não aparecem corretamente
**Causa:** Tokens não mapeados no `:host` ou fallback ausente

**Solução:**

1. **Verifique o mapeamento no `:host` do componente:**
   ```javascript
   this.shadowRoot.innerHTML = `
     <style>
       :host {
         /* OBRIGATÓRIO: mapear tokens com fallback */
         --local-bg: var(--atlas-color-surface-control-active-default, #0030B9);
         --local-text: var(--atlas-color-text-static-inverse, #FCFCFD);
       }
       
       .component {
         /* Usar variáveis locais */
         background: var(--local-bg);
         color: var(--local-text);
       }
     </style>
   `;
   ```

2. **Opcionalmente, carregue tokens no demo.html (para temabilidade):**
   ```html
   <head>
     <link rel="stylesheet" href="../../tokens/atlas-design-tokens.css">
   </head>
   ```

Ver seção 5.1 para detalhes completos sobre mapeamento de CSS Variables no Shadow DOM.