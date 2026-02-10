# 🏛️ Atlas Design System - Componentes

Estrutura organizada de componentes Web e MAUI (.NET) do Atlas Design System.

## 📁 Estrutura de Pastas

```
components/
├── web/                    # Componentes Web (Custom Elements)
│   ├── atlas-button/
│   │   ├── atlas-button.js
│   │   └── demo.html
│   ├── atlas-icon/
│   │   ├── atlas-icon.js
│   │   └── demo.html
│   ├── atlas-link-button/
│   └── atlas-input/
│
├── app/                    # Componentes MAUI (.NET)
│   ├── atlas-button/
│   │   ├── AtlasButton.xaml
│   │   ├── AtlasButton.xaml.cs
│   │   └── demo.html      # Emulação visual no browser
│   └── atlas-icon/
│       ├── AtlasIcon.xaml
│       ├── AtlasIcon.xaml.cs
│       └── demo.html      # Emulação visual no browser
│
├── DemoPage.xaml           # Demo completo MAUI
├── DemoPage.xaml.cs
└── demo-maui.html          # Emulação completa MAUI no browser
```

## 🌐 Componentes Web (Custom Elements)

### Atlas Button
**Localização:** `components/web/atlas-button/`

Web Component para botões do Atlas Design System.

**Atributos:**
- `type`: `filled` | `outlined` | `ghost` (default: `filled`)
- `color`: `primary` | `danger` | `success` | `info` | `warning` (default: `primary`)
- `size`: `small` | `default` | `large` | `extra-large` (default: `default`)
- `disabled`: boolean
- `loading`: boolean
- `icon-left`: nome do ícone (ex: `arrow-left`)
- `icon-right`: nome do ícone (ex: `chevron-right`)

**Exemplo:**
```html
<atlas-button type="filled" color="primary">
  Click me
</atlas-button>

<atlas-button type="outlined" icon-left="download" color="success">
  Download
</atlas-button>
```

**Demo:** [web/atlas-button/demo.html](./web/atlas-button/demo.html)

---

### Atlas Icon
**Localização:** `components/web/atlas-icon/`

Web Component para ícones do Atlas Design System. Suporta 231 ícones.

**Atributos:**
- `name`: nome do ícone (ex: `star`, `home`, `user`)

**Exemplo:**
```html
<atlas-icon name="star"></atlas-icon>
<atlas-icon name="download" style="font-size: 32px; color: blue;"></atlas-icon>
```

**Demo:** [web/atlas-icon/demo.html](./web/atlas-icon/demo.html)

---

## 📱 Componentes MAUI (.NET)

### AtlasButton
**Localização:** `components/app/atlas-button/`

Componente MAUI ContentView para botões.

**Propriedades:**
- `Label` (string): Texto do botão
- `Type` (ButtonType): `Filled` | `Outlined` | `Ghost`
- `Color` (ButtonColor): `Primary` | `Danger` | `Success` | `Info` | `Warning` | `Inverse`
- `Size` (ButtonSize): `Small` | `Default` | `Large` | `ExtraLarge`
- `IsDisabled` (bool): Estado desabilitado
- `IsLoading` (bool): Estado de carregamento
- `IconLeftGlyph` (string): Glyph do ícone esquerdo
- `IconRightGlyph` (string): Glyph do ícone direito
- `Command` (ICommand): Comando para MVVM
- `CommandParameter` (object): Parâmetro do comando

**Exemplo XAML:**
```xaml
<atlas:AtlasButton Label="Click me" 
                   Type="Filled" 
                   Color="Primary" />

<atlas:AtlasButton Label="Download" 
                   IconRightGlyph="download"
                   Color="Success"
                   Command="{Binding DownloadCommand}" />
```

**Demo:** [app/atlas-button/demo.html](./app/atlas-button/demo.html) (emulação visual)

---

### AtlasIcon
**Localização:** `components/app/atlas-icon/`

Componente MAUI ContentView para ícones.

**Propriedades:**
- `Glyph` (string): Nome do ícone (ex: `star`, `home`)
- `Size` (string): `xs` | `sm` | `md` | `lg` | `xl` | `xxl`
- `Color` (Color): Cor do ícone

**Mapeamento de Tamanhos:**
- `xs`: 8px
- `sm`: 16px
- `md`: 24px (padrão)
- `lg`: 32px
- `xl`: 40px
- `xxl`: 48px

**Exemplo XAML:**
```xaml
<atlas:AtlasIcon Glyph="star" Size="md" />

<atlas:AtlasIcon Glyph="download" 
                 Size="lg"
                 Color="{StaticResource AtlasColorIconStaticPrimaryMedium}" />
```

**Demo:** [app/atlas-icon/demo.html](./app/atlas-icon/demo.html) (emulação visual)

---

## 🎨 Design Tokens

Os componentes utilizam os tokens de design localizados em:
- `tokens/atlas-design-tokens.css` (Web)
- `tokens/atlas-design-tokens.xaml` (MAUI)

## 🖼️ Fonte de Ícones

A fonte Atlas-Icons está localizada em `assets/fonts/` e contém 231 ícones.

Formato da fonte:
- `fonts/Atlas-Icons.ttf`
- `fonts/Atlas-Icons.woff`
- `fonts/Atlas-Icons.eot`
- `fonts/Atlas-Icons.svg`

## 🌐 Visualizar Demos

### Componentes Web (funcionam diretamente no browser)
- [Atlas Button Web](./web/atlas-button/demo.html)
- [Atlas Icon Web](./web/atlas-icon/demo.html)

### Componentes MAUI (emulação visual)
- [AtlasButton MAUI](./app/atlas-button/demo.html)
- [AtlasIcon MAUI](./app/atlas-icon/demo.html)
- [Demo Completo MAUI](./demo-maui.html)

## 🚀 Como Usar

### Para Web
1. Importe os scripts:
```html
<link rel="stylesheet" href="../../../tokens/atlas-design-tokens.css">
<link rel="stylesheet" href="../../../assets/fonts/style.css">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<script src="path/to/atlas-button.js"></script>
<script src="path/to/atlas-icon.js"></script>
```

2. Use os componentes:
```html
<atlas-button type="filled" color="primary">Click me</atlas-button>
<atlas-icon name="star"></atlas-icon>
```

### Para MAUI
1. Adicione o namespace no XAML:
```xaml
xmlns:atlas="clr-namespace:Atlas.Components"
```

2. Registre a fonte de ícones no `MauiProgram.cs`:
```csharp
.ConfigureFonts(fonts =>
{
    fonts.AddFont("Atlas-Icons.ttf", "AtlasIcons");
})
```

3. Use os componentes:
```xaml
<atlas:AtlasButton Label="Click me" Type="Filled" Color="Primary" />
<atlas:AtlasIcon Glyph="star" Size="md" />
```

## 📝 Notas

- **Web Components** utilizam Shadow DOM para encapsulamento
- **MAUI Components** utilizam BindableProperties para data binding
- Todos os componentes seguem os tokens de design do Atlas Design System
- Os demos HTML dos componentes MAUI são **emulações visuais** para preview no browser
- Para executar os componentes MAUI nativamente, é necessário um projeto .NET MAUI configurado

## 🔧 Tecnologias

- **Web:** Custom Elements, Shadow DOM, CSS Variables
- **MAUI:** .NET MAUI, XAML, BindableProperties
- **Design System:** Atlas Design Tokens
- **Fonte:** Atlas-Icons (231 ícones)
