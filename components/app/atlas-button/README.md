# Atlas Button (MAUI)

Componente de botão principal do Atlas Design System para .NET MAUI. Suporta múltiplas variantes (Filled, Outlined, Ghost), cores semânticas e tamanhos com estados interativos completos.

## 📦 Instalação

```xaml
xmlns:borders="clr-namespace:Asaas.Framework.Shared.Components.Borders;assembly=Asaas.Framework"
xmlns:custom="clr-namespace:Asaas.Framework.Shared.Handlers.Labels.Custom;assembly=Asaas.Framework"
xmlns:buttons="clr-namespace:Asaas.Framework.Shared.Atlas.Components.Buttons;assembly=Asaas.Framework"
```

## 🎨 Uso Básico

```xaml
<buttons:AtlasButton 
    Text="Click me"
    Type="Filled"
    Style="Primary"
    Command="{Binding ButtonCommand}" />
```

## ⚙️ Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|:---|:---|:---|:---|
| **Text** | string | "Button" | Texto exibido no botão |
| **Type** | AtlasButtonType | Filled | Tipo visual (Filled, Outlined, Ghost) |
| **Style** | AtlasButtonStyle | Primary | Cor semântica (Primary, Danger, Success, Warning, Info, Inverse) |
| **Size** | AtlasButtonSize | Default | Tamanho (Small, Default, Large, ExtraLarge) |
| **IsEnabled** | bool | true | Estado habilitado (sobrescreve propriedade base) |
| **IsLoading** | bool | false | Exibe spinner de carregamento |
| **Icon** | string | "" | Nome do glyph do ícone (ex: "plus", "arrow-right") |
| **IconColor** | Color | null | Cor customizada do ícone |
| **Command** | ISafeCommand | null | Comando executado ao clicar (com try-catch interno) |
| **DisabledCommand** | ISafeCommand | null | Comando executado quando desabilitado |
| **HasRipple** | bool | true | Efeito ripple ao tocar |

## 🎯 Enums

### AtlasButtonType
Define a variante visual do botão:

```csharp
public enum AtlasButtonType {
    NONE,
    FILLED,    // Fundo sólido com cor
    OUTLINED,  // Apenas borda colorida
    GHOST      // Transparente sem borda
}
```

### AtlasButtonStyle
Define a cor/estilo semântico:

```csharp
public enum AtlasButtonStyle {
    NONE,
    PRIMARY,   // Azul (#0055CC)
    DANGER,    // Vermelho (#D93838)
    SUCCESS,   // Verde (#00875F)
    WARNING,   // Laranja (#D97706)
    INFO,      // Azul claro (#0D6EFD)
    INVERSE    // Branco/Preto
}
```

### AtlasButtonSize
Define o tamanho com altura e padding específicos:

```csharp
public enum AtlasButtonSize {
    SMALL,       // 32px altura, padding 8/16
    DEFAULT,     // 40px altura, padding 12/24
    LARGE,       // 48px altura, padding 16/32
    EXTRALARGE   // 56px altura, padding 20/40
}
```

## 📱 Exemplos de Uso

### Botão Básico
```xaml
<buttons:AtlasButton 
    Text="Salvar"
    Type="Filled"
    Style="Primary" />
```

### Com Comando (ViewModel)
```xaml
<buttons:AtlasButton 
    Text="Salvar"
    Command="{Binding SaveCommand}"
    IsLoading="{Binding IsSaving}" />
```

```csharp
// No ViewModel
[RelayCommand]
private async Task Save()
{
    IsSaving = true;
    await _service.SaveAsync();
    IsSaving = false;
}
```

### Com Ícone
```xaml
<buttons:AtlasButton 
    Text="Download"
    Icon="arrow-down"
    Type="Filled"
    Style="Success" />
```

### Com Cor de Ícone Customizada
```xaml
<buttons:AtlasButton 
    Text="Alerta"
    Icon="alert-triangle"
    IconColor="#D97706"
    Type="Ghost" />
```

### Estados Diferentes

```xaml
<!-- Desabilitado -->
<buttons:AtlasButton 
    Text="Indisponível"
    IsEnabled="False" />

<!-- Loading -->
<buttons:AtlasButton 
    Text="Processando"
    IsLoading="True" />

<!-- Outlined -->
<buttons:AtlasButton 
    Text="Cancelar"
    Type="Outlined"
    Style="Danger" />

<!-- Ghost -->
<buttons:AtlasButton 
    Text="Voltar"
    Type="Ghost" />
```

### Tamanhos

```xaml
<!-- Small - 32px -->
<buttons:AtlasButton 
    Text="Small"
    Size="Small" />

<!-- Default - 40px -->
<buttons:AtlasButton 
    Text="Default"
    Size="Default" />

<!-- Large - 48px -->
<buttons:AtlasButton 
    Text="Large"
    Size="Large" />

<!-- ExtraLarge - 56px -->
<buttons:AtlasButton 
    Text="Extra Large"
    Size="ExtraLarge" />
```

### Variantes de Estilo

```xaml
<!-- Primary - Ação principal -->
<buttons:AtlasButton Text="Primary" Style="Primary" />

<!-- Danger - Ações destrutivas -->
<buttons:AtlasButton Text="Danger" Style="Danger" />

<!-- Success - Confirmações positivas -->
<buttons:AtlasButton Text="Success" Style="Success" />

<!-- Warning - Avisos importantes -->
<buttons:AtlasButton Text="Warning" Style="Warning" />

<!-- Info - Informações -->
<buttons:AtlasButton Text="Info" Style="Info" />

<!-- Inverse - Fundos escuros -->
<buttons:AtlasButton Text="Inverse" Style="Inverse" />
```

### Comando Quando Desabilitado

```xaml
<buttons:AtlasButton 
    Text="Premium Feature"
    IsEnabled="False"
    DisabledCommand="{Binding ShowUpgradeDialogCommand}" />
```

## 📊 Tracking Analytics

O componente automaticamente rastreia eventos de clique via `SegmentManager`:

```csharp
SegmentManager.Track("mobile_button_cta_tapped", new Dictionary<string, object> {
    ["enabled"] = IsEnabled,
    ["text"] = Text,
    ["type"] = Type.ToString(),
    ["style"] = Style.ToString(),
    ["size"] = Size.ToString(),
    ["has_icon"] = !string.IsNullOrEmpty(Icon),
    ["is_loading"] = IsLoading
});
```

## 🎨 Estados Visuais

### Normal
Estado padrão do botão com cores definidas pelo Type e Style.

### Pressed
Estado quando o botão está sendo tocado (150ms de feedback visual).

### Disabled
Estado quando `IsEnabled=false`:
- **Filled**: Fundo cinza COM texto branco (exceção importante)
- **Outlined/Ghost**: Texto cinza sem fundo

## ⚠️ Observações Importantes

### 1. Componente AtlasIcon
**SEMPRE use glyphs do AtlasIcon** para exibir ícones:

```csharp
// ✅ CORRETO - glyph name como string
Icon = "plus";
Icon = "arrow-right";
Icon = "alert-triangle";

// ❌ ERRADO - não existe mais enum
Icon = AtlasIcon.PLUS;
```

### 2. ISafeCommand vs ICommand
**SEMPRE use `ISafeCommand`** em vez de `ICommand` padrão para segurança:

```csharp
// ✅ CORRETO
public ISafeCommand Command { get; set; }

// ❌ ERRADO
public ICommand Command { get; set; }
```

### 3. IsEnabled (não IsDisabled)
O componente sobrescreve a propriedade base `IsEnabled`:

```csharp
// ✅ CORRETO
IsEnabled = true;

// ❌ ERRADO - não existe
IsDisabled = false;
```

### 4. IsLoading Automático
Quando `IsLoading=true`, `IsEnabled` automaticamente se torna `false`:

```csharp
protected override void OnPropertyChanged(string propertyName = null) {
    if (propertyName == nameof(IsLoading)) {
        IsEnabled = !IsLoading;
    }
}
```

### 5. RippleEffect Controlado
O efeito ripple é controlado pela propriedade `HasRipple`:

```xaml
<!-- Sem ripple effect -->
<buttons:AtlasButton 
    Text="No Ripple"
    HasRipple="False" />
```

### 6. Font-weight do Ícone
O componente AtlasIcon **garante automaticamente** que ícones usem peso normal:

```csharp
// AtlasIcon component tem FontAttributes="None" no Label interno
// Isso previne herança de font-weight do botão
public string IconGlyph => Icon ?? string.Empty;
public Color IconColorComputed => IconColor ?? GetTextColor(false);
```

### 7. Acessibilidade
O componente automaticamente configura acessibilidade:

```xaml
attachedProperties1:Accessibility.Button="{Binding Text, Source={x:Reference Root}}"
```

### 8. Gestos Programáticos
Os gestures são criados **programaticamente no construtor**, não no XAML:

```csharp
public AtlasButton() {
    InitializeComponent();
    SetTapGestureRecognizer();
}
```

## 🏗️ Arquitetura Interna

### BindableProperties com Builder
Todas as propriedades usam `BindablePropertyBuilder`:

```csharp
public static readonly BindableProperty TextProperty = 
    BindablePropertyBuilder.Build<AtlasButton, string>(nameof(Text), defaultValue: "Button");
```

### PropertyChanged Centralizado
Usa pattern matching para mudanças de propriedade:

```csharp
protected override void OnPropertyChanged(string propertyName = null) {
    switch (propertyName) {
        case nameof(Type) or nameof(Style) or nameof(IsEnabled):
            UpdateColors();
            break;
        case nameof(Size):
            UpdatePadding();
            break;
    }
}
```

### Enums Externos
Os enums são declarados **fora da classe** no final do arquivo:

```csharp
public partial class AtlasButton { ... }

// Enums externos
public enum AtlasButtonType { ... }
public enum AtlasButtonStyle { ... }
public enum AtlasButtonSize { ... }
```

## 📐 Especificações Técnicas

### Dimensões

| Tamanho | Altura | Padding | Font Size |
|:---|:---|:---|:---|
| Small | 32px | 8px/16px | 14px |
| Default | 40px | 12px/24px | 16px |
| Large | 48px | 16px/32px | 18px |
| ExtraLarge | 56px | 20px/40px | 20px |

### Border Radius
- Todos os botões: `9999px` (pill shape)

### Ícones

| Tamanho do Botão | Tamanho do Ícone |
|:---|:---|
| Small | 16px |
| Default | 16px |
| Large | 24px |
| ExtraLarge | 24px |

### Spacing
- Gap entre ícone e texto: 4px (8px no ExtraLarge)

## 🔗 Dependências

```csharp
using Asaas.Framework.Shared.Components.Borders;
using Asaas.Framework.Shared.Handlers.Labels.Custom;
using Asaas.Framework.Shared.Components.ActivityIndicator;
using Asaas.Framework.Shared.Atlas.Styleguide.Colors;
using Asaas.Framework.Shared.Effects;
using Asaas.Framework.Shared.Helpers.Commands;
using Asaas.Segment.Shared.Managers.Segment;
using Asaas.Views.Utils.Shared.Builders;
using Atlas.Components; // AtlasIcon component
```

## 📄 Tokens Utilizados

### Cores de Fundo (Filled)
- `AtlasColors.ButtonBackgroundColorFilled{Style}{State}`
- Exemplo: `ButtonBackgroundColorFilledPrimaryDefault`

### Cores de Texto
- `AtlasColors.ButtonTypographyColorStatic{Style}`
- `AtlasColors.ButtonTypographyColorDisabled{Context}`

### Cores de Borda (Outlined)
- `AtlasColors.ButtonBorderColor{Style}`
- `AtlasColors.ButtonBorderColorDisabled`

### Cores de Fundo (Pressed)
- `AtlasColors.ButtonBackgroundColor{Type}{Style}{State}`
- Exemplo: `ButtonBackgroundColorOutlinedPrimaryPressed`

## 🎯 Total de Variações

- **3 Types** (Filled, Outlined, Ghost)
- **6 Styles** (Primary, Danger, Success, Warning, Info, Inverse)
- **4 Sizes** (Small, Default, Large, ExtraLarge)
- **3 Estados** (Normal, Pressed, Disabled)

**Total: 216 estados possíveis** (3 × 6 × 4 × 3)

## 📚 Ver Também

- [AtlasIcon](../atlas-icon/README.md) - Sistema de ícones
- [Criar Component MAUI](../../../skills/criar-component-MAUI.md) - Protocolo completo
- [Atlas Design Tokens](../../../tokens/README.md) - Sistema de tokens
