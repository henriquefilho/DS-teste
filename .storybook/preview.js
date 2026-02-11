// Importar design tokens e fontes
import '../tokens/atlas-design-tokens.css';
import '../assets/fonts/style.css';

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