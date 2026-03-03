using Asaas.Framework.Shared.Atlas.Styleguide.Colors;
using Asaas.Framework.Shared.Effects;
using Asaas.Framework.Shared.Helpers.Commands;
using Asaas.Segment.Shared.Managers.Segment;
using Asaas.Views.Utils.Shared.Builders;

namespace Asaas.Framework.Shared.Atlas.Components.Buttons;

public partial class AtlasButton
{
    #region BindableProperties

    public static readonly BindableProperty TextProperty =
        BindablePropertyBuilder.Build<AtlasButton, string>(nameof(Text), defaultValue: "Button");

    public static readonly BindableProperty TypeProperty =
        BindablePropertyBuilder.Build<AtlasButton, AtlasButtonType>(nameof(Type), defaultValue: AtlasButtonType.FILLED);

    public static readonly BindableProperty StyleProperty =
        BindablePropertyBuilder.Build<AtlasButton, AtlasButtonStyle>(nameof(Style), defaultValue: AtlasButtonStyle.PRIMARY);

    public static readonly BindableProperty SizeProperty =
        BindablePropertyBuilder.Build<AtlasButton, AtlasButtonSize>(nameof(Size), defaultValue: AtlasButtonSize.DEFAULT);

    public static new readonly BindableProperty IsEnabledProperty =
        BindablePropertyBuilder.Build<AtlasButton, bool>(nameof(IsEnabled), defaultValue: true);

    public static readonly BindableProperty IsLoadingProperty =
        BindablePropertyBuilder.Build<AtlasButton, bool>(nameof(IsLoading), defaultValue: false);

    public static readonly BindableProperty IconProperty =
        BindablePropertyBuilder.Build<AtlasButton, string>(nameof(Icon), defaultValue: string.Empty);

    public static readonly BindableProperty IconColorProperty =
        BindablePropertyBuilder.Build<AtlasButton, Color>(nameof(IconColor));

    public static readonly BindableProperty CommandProperty =
        BindablePropertyBuilder.Build<AtlasButton, ISafeCommand>(nameof(Command));

    public static readonly BindableProperty DisabledCommandProperty =
        BindablePropertyBuilder.Build<AtlasButton, ISafeCommand>(nameof(DisabledCommand));

    public static readonly BindableProperty HasRippleProperty =
        BindablePropertyBuilder.Build<AtlasButton, bool>(nameof(HasRipple), defaultValue: true);

    #endregion

    #region Properties

    public string Text
    {
        get => (string)GetValue(TextProperty);
        set => SetValue(TextProperty, value);
    }

    public AtlasButtonType Type
    {
        get => (AtlasButtonType)GetValue(TypeProperty);
        set => SetValue(TypeProperty, value);
    }

    public AtlasButtonStyle Style
    {
        get => (AtlasButtonStyle)GetValue(StyleProperty);
        set => SetValue(StyleProperty, value);
    }

    public AtlasButtonSize Size
    {
        get => (AtlasButtonSize)GetValue(SizeProperty);
        set => SetValue(SizeProperty, value);
    }

    public new bool IsEnabled
    {
        get => (bool)GetValue(IsEnabledProperty);
        set => SetValue(IsEnabledProperty, value);
    }

    public bool IsLoading
    {
        get => (bool)GetValue(IsLoadingProperty);
        set => SetValue(IsLoadingProperty, value);
    }

    public string Icon
    {
        get => (string)GetValue(IconProperty);
        set => SetValue(IconProperty, value);
    }

    public Color IconColor
    {
        get => (Color)GetValue(IconColorProperty);
        set => SetValue(IconColorProperty, value);
    }

    public ISafeCommand Command
    {
        get => (ISafeCommand)GetValue(CommandProperty);
        set => SetValue(CommandProperty, value);
    }

    public ISafeCommand DisabledCommand
    {
        get => (ISafeCommand)GetValue(DisabledCommandProperty);
        set => SetValue(DisabledCommandProperty, value);
    }

    public bool HasRipple
    {
        get => (bool)GetValue(HasRippleProperty);
        set => SetValue(HasRippleProperty, value);
    }

    #endregion

    #region Computed Properties for Binding

    public Color BackgroundColorNormal => GetBackgroundColor(false, false);
    public Color BackgroundColorPressed => GetBackgroundColor(true, false);
    public Color BackgroundColorDisabled => GetBackgroundColor(false, true);
    
    public Color TextColorNormal => GetTextColor(false);
    public Color TextColorDisabled => GetTextColor(true);
    
    public Color BorderColorDisabled => GetBorderColor(true);
    
    // ✅ MUDANÇA: Propriedades para AtlasIcon component
    public string IconGlyph => Icon ?? string.Empty;
    
    public Color IconColorComputed => IconColor ?? GetTextColor(false);
    
    public bool ShowIcon => !string.IsNullOrEmpty(Icon) && !IsLoading;
    
    public string IconSizeName => Size switch
    {
        AtlasButtonSize.SMALL => "sm",
        AtlasButtonSize.DEFAULT => "sm",
        AtlasButtonSize.LARGE => "md",
        AtlasButtonSize.EXTRALARGE => "md",
        _ => "sm"
    };
    
    public double IconSize => Size switch
    {
        AtlasButtonSize.SMALL => 16,
        AtlasButtonSize.DEFAULT => 16,
        AtlasButtonSize.LARGE => 24,
        AtlasButtonSize.EXTRALARGE => 24,
        _ => 16
    };

    public double FontSize => Size switch
    {
        AtlasButtonSize.SMALL => 14,
        AtlasButtonSize.DEFAULT => 16,
        AtlasButtonSize.LARGE => 18,
        AtlasButtonSize.EXTRALARGE => 20,
        _ => 16
    };

    #endregion

    public AtlasButton()
    {
        InitializeComponent();
        SetTapGestureRecognizer();
        UpdateVisualState();
        UpdatePadding();
        UpdateBorder();
        UpdateRippleEffect();
    }

    protected override void OnPropertyChanged(string propertyName = null)
    {
        base.OnPropertyChanged(propertyName);

        switch (propertyName)
        {
            case nameof(Type) or nameof(Style) or nameof(IsEnabled) or nameof(Icon) or nameof(IconColor):
                OnPropertyChanged(nameof(BackgroundColorNormal));
                OnPropertyChanged(nameof(BackgroundColorPressed));
                OnPropertyChanged(nameof(BackgroundColorDisabled));
                OnPropertyChanged(nameof(TextColorNormal));
                OnPropertyChanged(nameof(TextColorDisabled));
                OnPropertyChanged(nameof(BorderColorDisabled));
                OnPropertyChanged(nameof(IconGlyph));
                OnPropertyChanged(nameof(IconColorComputed));
                OnPropertyChanged(nameof(ShowIcon));
                UpdateVisualState();
                UpdateBorder();
                break;

            case nameof(Size):
                OnPropertyChanged(nameof(IconSize));
                OnPropertyChanged(nameof(FontSize));
                OnPropertyChanged(nameof(IconSizeName));
                UpdatePadding();
                break;

            case nameof(IsLoading):
                IsEnabled = !IsLoading;
                OnPropertyChanged(nameof(ShowIcon));
                UpdateVisualState();
                break;

            case nameof(HasRipple):
                UpdateRippleEffect();
                break;
        }
    }

    private void SetTapGestureRecognizer()
    {
        var tapGesture = new TapGestureRecognizer();
        tapGesture.Tapped += async (s, e) =>
        {
            // Analytics tracking
            SegmentManager.Track("mobile_button_cta_tapped", new Dictionary<string, object>
            {
                ["enabled"] = IsEnabled,
                ["text"] = Text,
                ["type"] = Type.ToString(),
                ["style"] = Style.ToString(),
                ["size"] = Size.ToString(),
                ["has_icon"] = !string.IsNullOrEmpty(Icon),
                ["is_loading"] = IsLoading
            });

            // Visual feedback
            VisualStateManager.GoToState(this, "Pressed");
            await Task.Delay(150);
            UpdateVisualState();

            // Command execution
            if (!IsEnabled && DisabledCommand != null)
            {
                DisabledCommand.Execute(null);
            }
            else if (IsEnabled && Command != null)
            {
                Command.Execute(null);
            }
        };

        GestureRecognizers.Add(tapGesture);
    }

    private void UpdateVisualState()
    {
        if (!IsEnabled)
        {
            VisualStateManager.GoToState(this, "Disabled");
        }
        else
        {
            VisualStateManager.GoToState(this, "Normal");
        }
    }

    private void UpdatePadding()
    {
        Padding = Size switch
        {
            AtlasButtonSize.SMALL => new Thickness(16, 8),
            AtlasButtonSize.DEFAULT => new Thickness(24, 12),
            AtlasButtonSize.LARGE => new Thickness(32, 16),
            AtlasButtonSize.EXTRALARGE => new Thickness(40, 20),
            _ => new Thickness(24, 12)
        };
    }

    private void UpdateBorder()
    {
        if (Type == AtlasButtonType.OUTLINED)
        {
            BorderColor = IsEnabled ? GetBorderColor(false) : GetBorderColor(true);
            BorderThickness = 1;
        }
        else
        {
            BorderThickness = 0;
        }
    }

    private void UpdateRippleEffect()
    {
        if (HasRipple)
        {
            AddRippleEffect();
        }
        else
        {
            RemoveRippleEffect();
        }
    }

    private void AddRippleEffect()
    {
        if (Effects.Any(effect => effect is RippleEffect)) return;
        Effects.Add(new RippleEffect());
    }

    private void RemoveRippleEffect()
    {
        if (!Effects.Any(effect => effect is RippleEffect)) return;
        var rippleEffect = Effects.FirstOrDefault(effect => effect is RippleEffect);
        Effects.Remove(rippleEffect);
    }

    #region Color Calculation Methods

    private Color GetBackgroundColor(bool isPressed, bool isDisabled)
    {
        if (Type == AtlasButtonType.FILLED)
        {
            if (isDisabled)
            {
                return AtlasColors.ButtonBackgroundColorFilledDisabled;
            }

            if (isPressed)
            {
                return Style switch
                {
                    AtlasButtonStyle.PRIMARY => AtlasColors.ButtonBackgroundColorFilledPrimaryPressed,
                    AtlasButtonStyle.DANGER => AtlasColors.ButtonBackgroundColorFilledDangerPressed,
                    AtlasButtonStyle.SUCCESS => AtlasColors.ButtonBackgroundColorFilledSuccessPressed,
                    AtlasButtonStyle.WARNING => AtlasColors.ButtonBackgroundColorFilledWarningPressed,
                    AtlasButtonStyle.INFO => AtlasColors.ButtonBackgroundColorFilledInfoPressed,
                    AtlasButtonStyle.INVERSE => AtlasColors.ButtonBackgroundColorFilledInversePressed,
                    _ => AtlasColors.ButtonBackgroundColorFilledPrimaryDefault
                };
            }

            return Style switch
            {
                AtlasButtonStyle.PRIMARY => AtlasColors.ButtonBackgroundColorFilledPrimaryDefault,
                AtlasButtonStyle.DANGER => AtlasColors.ButtonBackgroundColorFilledDangerDefault,
                AtlasButtonStyle.SUCCESS => AtlasColors.ButtonBackgroundColorFilledSuccessDefault,
                AtlasButtonStyle.WARNING => AtlasColors.ButtonBackgroundColorFilledWarningDefault,
                AtlasButtonStyle.INFO => AtlasColors.ButtonBackgroundColorFilledInfoDefault,
                AtlasButtonStyle.INVERSE => AtlasColors.ButtonBackgroundColorFilledInverseDefault,
                _ => AtlasColors.ButtonBackgroundColorFilledPrimaryDefault
            };
        }

        if (Type == AtlasButtonType.OUTLINED || Type == AtlasButtonType.GHOST)
        {
            if (isDisabled)
            {
                return Colors.Transparent;
            }

            if (isPressed)
            {
                var typePrefix = Type == AtlasButtonType.OUTLINED ? "Outlined" : "Ghost";
                return Style switch
                {
                    AtlasButtonStyle.PRIMARY => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedPrimaryPressed 
                        : AtlasColors.ButtonBackgroundColorGhostPrimaryPressed,
                    AtlasButtonStyle.DANGER => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedDangerPressed 
                        : AtlasColors.ButtonBackgroundColorGhostDangerPressed,
                    AtlasButtonStyle.SUCCESS => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedSuccessPressed 
                        : AtlasColors.ButtonBackgroundColorGhostSuccessPressed,
                    AtlasButtonStyle.WARNING => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedWarningPressed 
                        : AtlasColors.ButtonBackgroundColorGhostWarningPressed,
                    AtlasButtonStyle.INFO => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedInfoPressed 
                        : AtlasColors.ButtonBackgroundColorGhostInfoPressed,
                    AtlasButtonStyle.INVERSE => Type == AtlasButtonType.OUTLINED 
                        ? AtlasColors.ButtonBackgroundColorOutlinedInversePressed 
                        : AtlasColors.ButtonBackgroundColorGhostInversePressed,
                    _ => Colors.Transparent
                };
            }

            return Colors.Transparent;
        }

        return Colors.Transparent;
    }

    private Color GetTextColor(bool isDisabled)
    {
        if (Type == AtlasButtonType.FILLED)
        {
            // CRÍTICO: Filled mantém texto BRANCO mesmo quando disabled
            if (Style == AtlasButtonStyle.INVERSE)
            {
                return isDisabled 
                    ? AtlasColors.ButtonTypographyColorDisabledInverse 
                    : AtlasColors.ButtonTypographyColorStaticPrimary;
            }
            return AtlasColors.ButtonTypographyColorStaticInverse;
        }

        if (Type == AtlasButtonType.OUTLINED || Type == AtlasButtonType.GHOST)
        {
            if (isDisabled)
            {
                return Style == AtlasButtonStyle.INVERSE 
                    ? AtlasColors.ButtonTypographyColorDisabledInverse 
                    : AtlasColors.ButtonTypographyColorDisabledDefault;
            }

            return Style switch
            {
                AtlasButtonStyle.PRIMARY => AtlasColors.ButtonTypographyColorStaticPrimary,
                AtlasButtonStyle.DANGER => AtlasColors.ButtonTypographyColorStaticDanger,
                AtlasButtonStyle.SUCCESS => AtlasColors.ButtonTypographyColorStaticSuccess,
                AtlasButtonStyle.WARNING => AtlasColors.ButtonTypographyColorStaticWarning,
                AtlasButtonStyle.INFO => AtlasColors.ButtonTypographyColorStaticInfo,
                AtlasButtonStyle.INVERSE => AtlasColors.ButtonTypographyColorStaticInverse,
                _ => AtlasColors.ButtonTypographyColorStaticPrimary
            };
        }

        return AtlasColors.ButtonTypographyColorStaticPrimary;
    }

    private Color GetBorderColor(bool isDisabled)
    {
        if (Type != AtlasButtonType.OUTLINED) return Colors.Transparent;

        if (isDisabled)
        {
            return AtlasColors.ButtonBorderColorDisabled;
        }

        return Style switch
        {
            AtlasButtonStyle.PRIMARY => AtlasColors.ButtonBorderColorPrimary,
            AtlasButtonStyle.DANGER => AtlasColors.ButtonBorderColorDanger,
            AtlasButtonStyle.SUCCESS => AtlasColors.ButtonBorderColorSuccess,
            AtlasButtonStyle.WARNING => AtlasColors.ButtonBorderColorWarning,
            AtlasButtonStyle.INFO => AtlasColors.ButtonBorderColorInfo,
            AtlasButtonStyle.INVERSE => AtlasColors.ButtonBorderColorInverse,
            _ => AtlasColors.ButtonBorderColorPrimary
        };
    }

    #endregion
}

// ✅ PADRÃO: Enums FORA da classe principal
public enum AtlasButtonType
{
    NONE,
    FILLED,
    OUTLINED,
    GHOST
}

public enum AtlasButtonStyle
{
    NONE,
    PRIMARY,
    DANGER,
    SUCCESS,
    WARNING,
    INFO,
    INVERSE
}

public enum AtlasButtonSize
{
    SMALL,
    DEFAULT,
    LARGE,
    EXTRALARGE
}
