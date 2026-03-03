// ✅ ATUALIZADO PARA CONFORMIDADE COM PADRÕES ASAAS FRAMEWORK

using Asaas.Views.Utils.Shared.Builders;

namespace Atlas.Components;

public partial class AtlasIcon : ContentView
{
    private static readonly Dictionary<string, string> IconMap = new()
    {
        { "address-book", "\ue900" },
        { "alert", "\ue901" },
        { "alert-circle", "\ue902" },
        { "alert-triangle", "\ue903" },
        { "alert-triangle-filled", "\ue9ca" },
        { "align-justify", "\ue904" },
        { "android", "\ue9cc" },
        { "apps", "\ue905" },
        { "arrow-down", "\ue906" },
        { "arrow-down-circle", "\ue907" },
        { "arrow-left", "\ue908" },
        { "arrow-right", "\ue909" },
        { "arrow-right-left", "\ue90a" },
        { "arrow-up", "\ue90b" },
        { "arrow-up-circle", "\ue90c" },
        { "arrow-up-right", "\ue90d" },
        { "asaas-logo", "\ue90e" },
        { "award", "\ue9cd" },
        { "backspace", "\ue90f" },
        { "banco-abc-brasil", "\ue9ac" },
        { "banco-bmg", "\ue9ad" },
        { "banco-brb", "\ue9ae" },
        { "banco-da-amazonia", "\ue9af" },
        { "banco-do-brasil", "\ue910" },
        { "banco-industrial-do-brasil", "\ue9b0" },
        { "banco-original", "\ue9b1" },
        { "banese", "\ue9b2" },
        { "bank", "\ue911" },
        { "bank-of-america", "\ue9b3" },
        { "banpara", "\ue9b4" },
        { "bar-chart", "\ue912" },
        { "barcode", "\ue913" },
        { "bars", "\ue914" },
        { "base-logo", "\ue915" },
        { "bell", "\ue916" },
        { "bnb", "\ue9b5" },
        { "box", "\ue917" },
        { "bradesco", "\ue9b6" },
        { "briefcase", "\ue918" },
        { "btg-pactual", "\ue9b7" },
        { "c6-bank", "\ue9b8" },
        { "caixa", "\ue919" },
        { "calendar", "\ue91a" },
        { "calendar-check", "\ue952" },
        { "calendar-clock", "\ue9a9" },
        { "calendar-magnifier", "\ue9aa" },
        { "calendar-sync", "\ue91b" },
        { "camera", "\ue91c" },
        { "card", "\ue91d" },
        { "card-mastercard", "\ue91e" },
        { "cash-machine-with-ticket", "\ue9cf" },
        { "cash-machine-with-ticket-1", "\ue9d0" },
        { "celebrate", "\ue91f" },
        { "chart-line", "\ue9d1" },
        { "check", "\ue920" },
        { "check-circle", "\ue921" },
        { "check-filled", "\ue922" },
        { "chevron-down", "\ue923" },
        { "chevron-left", "\ue924" },
        { "chevron-right", "\ue925" },
        { "chevron-up", "\ue926" },
        { "circle", "\ue927" },
        { "citi-bank", "\ue9b9" },
        { "clock", "\ue928" },
        { "clock-filled", "\ue929" },
        { "cloud", "\ue9d2" },
        { "cog", "\ue92a" },
        { "color-picker", "\ue9c8" },
        { "companies", "\ue9d3" },
        { "concentric-circles", "\ue92b" },
        { "contactless", "\ue92c" },
        { "copy", "\ue92d" },
        { "corner-up-right", "\ue92e" },
        { "credisis", "\ue92f" },
        { "cutlery", "\ue9cb" },
        { "dashboard", "\ue930" },
        { "daycoval", "\ue9ba" },
        { "deutsche-bank", "\ue9bb" },
        { "discord", "\ue9d4" },
        { "dollar-sign", "\ue931" },
        { "dollar-zap", "\ue932" },
        { "double-check", "\ue933" },
        { "download", "\ue934" },
        { "email", "\ue9d5" },
        { "envelope", "\ue935" },
        { "equal", "\ue9c6" },
        { "external-link", "\ue9c7" },
        { "eye", "\ue936" },
        { "eye-filled", "\ue937" },
        { "eye-off", "\ue938" },
        { "eye-off-filled", "\ue939" },
        { "facebook", "\ue93a" },
        { "file", "\ue93b" },
        { "file-check", "\ue93c" },
        { "file-dollar", "\ue93d" },
        { "file-plus", "\ue93e" },
        { "file-signature", "\ue93f" },
        { "file-x", "\ue940" },
        { "filter", "\ue941" },
        { "finger-click", "\ue942" },
        { "flag", "\ue943" },
        { "flash", "\ue944" },
        { "globe", "\ue945" },
        { "hand-coins", "\ue946" },
        { "handshake", "\ue947" },
        { "headset", "\ue948" },
        { "heart", "\ue949" },
        { "help", "\ue94a" },
        { "home", "\ue94b" },
        { "image", "\ue94c" },
        { "info", "\ue94d" },
        { "instagram", "\ue94e" },
        { "inter", "\ue9bc" },
        { "itau", "\ue94f" },
        { "key", "\ue950" },
        { "layers", "\ue951" },
        { "link", "\ue953" },
        { "linkedin", "\ue954" },
        { "list", "\ue955" },
        { "list-add", "\ue956" },
        { "loader", "\ue957" },
        { "lock", "\ue958" },
        { "lock-filled", "\ue959" },
        { "log-in", "\ue95a" },
        { "log-out", "\ue95b" },
        { "magnifier", "\ue95c" },
        { "magnifier-minus", "\ue95d" },
        { "magnifier-plus", "\ue95e" },
        { "mail", "\ue95f" },
        { "map", "\ue960" },
        { "map-pin", "\ue961" },
        { "maximize", "\ue962" },
        { "megaphone", "\ue963" },
        { "menu", "\ue964" },
        { "message-circle", "\ue965" },
        { "minimize", "\ue966" },
        { "money", "\ue967" },
        { "money-filled", "\ue968" },
        { "money-notes", "\ue969" },
        { "monitor", "\ue96a" },
        { "monitor-chart-up", "\ue96b" },
        { "moon", "\ue96c" },
        { "neon", "\ue9bd" },
        { "nubank", "\ue96d" },
        { "open-finance", "\ue96e" },
        { "pagbank", "\ue9be" },
        { "paperclip", "\ue96f" },
        { "pencil", "\ue970" },
        { "percentage", "\ue9dc" },
        { "phone", "\ue971" },
        { "pic-pay", "\ue9bf" },
        { "pix", "\ue972" },
        { "pix-filled", "\ue9c5" },
        { "play", "\ue9dd" },
        { "plus", "\ue973" },
        { "plus-circle", "\ue974" },
        { "power", "\ue975" },
        { "printer", "\ue976" },
        { "qrcode", "\ue9c9" },
        { "quotation-marks", "\ue9de" },
        { "receipt", "\ue977" },
        { "refresh", "\ue978" },
        { "refresh-dollar", "\ue979" },
        { "repeat", "\ue97a" },
        { "reverse-clock", "\ue9df" },
        { "rotate", "\ue97b" },
        { "rotate-cw", "\ue9e0" },
        { "rotate-dollar", "\ue97c" },
        { "safra", "\ue9c0" },
        { "santander", "\ue97d" },
        { "send", "\ue97e" },
        { "serasa", "\ue97f" },
        { "share", "\ue980" },
        { "shield", "\ue981" },
        { "shopping-bag", "\ue982" },
        { "shopping-cart-down", "\ue983" },
        { "shopping-cart-right", "\ue984" },
        { "sicoob", "\ue9c1" },
        { "sicredi", "\ue9c2" },
        { "slash", "\ue985" },
        { "sliders", "\ue986" },
        { "smartphone", "\ue987" },
        { "smartphone-contactless", "\ue988" },
        { "smile-face", "\ue9e1" },
        { "sort", "\ue989" },
        { "sort-amount-down", "\ue9e2" },
        { "sort-amount-up", "\ue9e3" },
        { "sort-horizontal", "\ue9e4" },
        { "spanner", "\ue98a" },
        { "split-arrows", "\ue98b" },
        { "spotify", "\ue9e5" },
        { "square", "\ue98c" },
        { "square-signs", "\ue98d" },
        { "star", "\ue98e" },
        { "star-filled", "\ue98f" },
        { "stone", "\ue9c3" },
        { "sun", "\ue990" },
        { "tag", "\ue991" },
        { "target", "\ue9e6" },
        { "three-dots", "\ue992" },
        { "three-dots-horinzontal", "\ue993" },
        { "thumbs-down", "\ue994" },
        { "thumbs-up", "\ue995" },
        { "ticket", "\ue996" },
        { "tiktok", "\ue9e7" },
        { "trash", "\ue997" },
        { "truck", "\ue998" },
        { "unlink", "\ue999" },
        { "unlock", "\ue99a" },
        { "unlock-filled", "\ue99b" },
        { "upload", "\ue99c" },
        { "user", "\ue99d" },
        { "user-filled", "\ue99e" },
        { "user-plus", "\ue99f" },
        { "users", "\ue9a0" },
        { "video", "\ue9a1" },
        { "virtual-card", "\ue9a2" },
        { "wallet", "\ue9a3" },
        { "whatsapp", "\ue9a4" },
        { "x", "\ue9a5" },
        { "x-circle", "\ue9a8" },
        { "x-filled", "\ue9a6" },
        { "x-logo", "\ue9e8" },
        { "xp-investimentos", "\ue9c4" },
        { "youtube", "\ue9a7" },
        { "zero", "\ue9e9" }
    };
    
    private static readonly Dictionary<string, double> SizeMap = new()
    {
        { "xs", 8 },
        { "sm", 16 },
        { "md", 24 },
        { "lg", 32 },
        { "xl", 40 },
        { "xxl", 48 }
    };
    
    #region BindableProperties
    
    // ✅ MUDANÇA: Usar BindablePropertyBuilder em vez de BindableProperty.Create()
    public static readonly BindableProperty GlyphProperty =
        BindablePropertyBuilder.Build<AtlasIcon, string>(nameof(Glyph), defaultValue: "circle");
    
    public string Glyph
    {
        get => (string)GetValue(GlyphProperty);
        set => SetValue(GlyphProperty, value);
    }
    
    public static readonly BindableProperty SizeProperty =
        BindablePropertyBuilder.Build<AtlasIcon, string>(nameof(Size), defaultValue: "md");
    
    public string Size
    {
        get => (string)GetValue(SizeProperty);
        set => SetValue(SizeProperty, value);
    }
    
    public static readonly BindableProperty ColorProperty =
        BindablePropertyBuilder.Build<AtlasIcon, Microsoft.Maui.Graphics.Color>(
            nameof(Color), 
            defaultValue: Microsoft.Maui.Graphics.Colors.Black);
    
    public Microsoft.Maui.Graphics.Color Color
    {
        get => (Microsoft.Maui.Graphics.Color)GetValue(ColorProperty);
        set => SetValue(ColorProperty, value);
    }
    
    public static readonly BindableProperty UnicodeCharacterProperty =
        BindablePropertyBuilder.Build<AtlasIcon, string>(nameof(UnicodeCharacter), defaultValue: "\ue927");
    
    public string UnicodeCharacter
    {
        get => (string)GetValue(UnicodeCharacterProperty);
        private set => SetValue(UnicodeCharacterProperty, value);
    }
    
    public static readonly BindableProperty IconFontSizeProperty =
        BindablePropertyBuilder.Build<AtlasIcon, double>(nameof(IconFontSize), defaultValue: 24.0);
    
    public double IconFontSize
    {
        get => (double)GetValue(IconFontSizeProperty);
        private set => SetValue(IconFontSizeProperty, value);
    }
    
    #endregion
    
    public AtlasIcon()
    {
        InitializeComponent();
        UpdateUnicode();
        UpdateFontSize();
    }
    
    // ✅ MUDANÇA: PropertyChanged centralizado em vez de callbacks individuais
    protected override void OnPropertyChanged(string propertyName = null)
    {
        base.OnPropertyChanged(propertyName);
        
        switch (propertyName)
        {
            case nameof(Glyph):
                UpdateUnicode();
                break;
                
            case nameof(Size):
                UpdateFontSize();
                break;
        }
    }
    
    private void UpdateUnicode()
    {
        if (string.IsNullOrEmpty(Glyph))
        {
            UnicodeCharacter = IconMap["circle"];
            return;
        }
        
        UnicodeCharacter = IconMap.TryGetValue(Glyph, out var unicode) 
            ? unicode 
            : IconMap["circle"];
    }
    
    private void UpdateFontSize()
    {
        IconFontSize = SizeMap.TryGetValue(Size, out var fontSize) 
            ? fontSize 
            : 24.0;
    }
}
