namespace Atlas.Showcase;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();
		MainPage = new AppShell(); // Aqui ele carrega o menu que configuramos
	}
}