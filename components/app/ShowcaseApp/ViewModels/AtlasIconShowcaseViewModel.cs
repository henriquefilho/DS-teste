using CommunityToolkit.Mvvm.ComponentModel;
using Microsoft.Maui.Graphics;

namespace Atlas.Components.Showcase;

public partial class AtlasIconShowcaseViewModel : ObservableObject
{
    // ─── Content ────────────────────────────────────────────────────────────

    [ObservableProperty]
    private string _glyph = "home";

    // ─── Appearance ─────────────────────────────────────────────────────────

    public List<string> SizeOptions { get; } = new() { "xs", "sm", "md", "lg", "xl", "xxl" };

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(SelectedSize))]
    private int _selectedSizeIndex = 2; // "md" por padrão

    public string SelectedSize => SizeOptions[SelectedSizeIndex];

    public List<string> ColorOptions { get; } = new()
    {
        "Black", "Primary Blue", "Success Green", "Danger Red",
        "Warning Yellow", "Info Cyan", "Gray", "White"
    };

    private static readonly List<Color> ColorValues = new()
    {
        Colors.Black,
        Color.FromArgb("#0066CC"),
        Color.FromArgb("#1DAB6B"),
        Color.FromArgb("#E53935"),
        Color.FromArgb("#F9A825"),
        Color.FromArgb("#00ACC1"),
        Color.FromArgb("#9E9E9E"),
        Colors.White
    };

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IconColor))]
    private int _selectedColorIndex = 0;

    public Color IconColor => ColorValues[SelectedColorIndex];

    // ─── Status ──────────────────────────────────────────────────────────────

    [ObservableProperty]
    private bool _isEnabled = true;

    // ─── Accessibility ───────────────────────────────────────────────────────

    [ObservableProperty]
    private string _semanticDescription = "Ícone de home";

    [ObservableProperty]
    private string _semanticHint = "Navega para a tela inicial";

    // ─── Catálogo de ícones disponíveis ──────────────────────────────────────

    public List<string> AvailableIcons { get; } = new()
    {
        "address-book", "alert", "alert-circle", "alert-triangle",
        "apps", "arrow-down", "arrow-left", "arrow-right", "arrow-up",
        "arrow-up-right", "backspace", "bank", "bar-chart", "barcode",
        "bars", "bell", "box", "briefcase", "calendar", "calendar-check",
        "camera", "card", "check", "check-circle", "chevron-down",
        "chevron-left", "chevron-right", "chevron-up", "circle", "clock",
        "cog", "copy", "dashboard", "dollar-sign", "download", "envelope",
        "eye", "eye-off", "facebook", "file", "file-check", "filter",
        "flag", "flash", "globe", "handshake", "headset", "heart",
        "help", "home", "image", "info", "instagram", "key", "link",
        "linkedin", "list", "lock", "log-in", "log-out", "magnifier",
        "mail", "map", "map-pin", "menu", "message-circle", "money",
        "moon", "pencil", "phone", "pix", "plus", "plus-circle", "power",
        "printer", "qrcode", "receipt", "refresh", "repeat", "rotate",
        "send", "share", "shield", "shopping-bag", "sliders", "smartphone",
        "sort", "star", "star-filled", "sun", "tag", "three-dots",
        "thumbs-down", "thumbs-up", "ticket", "trash", "truck", "upload",
        "user", "user-filled", "user-plus", "users", "video", "wallet",
        "whatsapp", "x", "x-circle", "youtube"
    };

    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(Glyph))]
    private int _selectedIconIndex = 0;

    partial void OnSelectedIconIndexChanged(int value)
    {
        if (value >= 0 && value < AvailableIcons.Count)
            Glyph = AvailableIcons[value];
    }
}
