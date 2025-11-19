import type { Preview } from "@storybook/web-components";
import "../web/components/button/atlas-button.js";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: "Neutral",
      values: [
        { name: "Neutral", value: "#F8F9FA" },
        { name: "Dark", value: "#001D6F" },
        { name: "Pure", value: "#FFFFFF" }
      ]
    }
  }
};

export default preview;

