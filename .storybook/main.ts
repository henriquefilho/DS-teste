import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../web/components/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/test"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};

export default config;

