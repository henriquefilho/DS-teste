/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  // Ajuste o caminho abaixo se suas stories estiverem em outra pasta
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  // Configuração crucial para o GitHub Pages não dar 404
  async viteFinal(config) {
    config.base = '/DS-teste/'; 
    return config;
  },
};

export default config;
