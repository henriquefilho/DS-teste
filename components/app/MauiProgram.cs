namespace Atlas.Showcase;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder
			.UseMauiApp<App>(); // Diz que a classe App é o início

		return builder.Build();
	}
}