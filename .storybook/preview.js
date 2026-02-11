// Importar design tokens e fontes
import '../tokens/atlas-design-tokens.css';
import '../assets/fonts/style.css';

// Importar Web Components
import '../components/web/atlas-icon/atlas-icon.js';
import '../components/web/atlas-button/atlas-button.js';
import '../components/web/atlas-link-button/atlas-link-button.js';

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