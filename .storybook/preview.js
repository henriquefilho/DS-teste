// Importar design tokens e fontes
import '../tokens/atlas-design-tokens.css';
import '../assets/fonts/style.css';

// Carregar fonte Open Sans do Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;