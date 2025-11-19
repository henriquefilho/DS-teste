import "./atlas-button.js";

const tones = ["primary", "info", "success", "warning", "danger", "inverse"];
const variants = ["filled", "outlined", "ghost"];
const sizes = ["sm", "md", "lg"];

const meta = {
  title: "Components/Button/AtlasButton",
  component: "atlas-button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants
    },
    tone: {
      control: { type: "select" },
      options: tones
    },
    size: {
      control: { type: "select" },
      options: sizes
    },
    disabled: {
      control: { type: "boolean" }
    },
    iconOnly: {
      name: "icon-only",
      control: { type: "boolean" }
    },
    label: {
      control: { type: "text" }
    }
  },
  args: {
    variant: "filled",
    tone: "primary",
    size: "md",
    disabled: false,
    iconOnly: false,
    label: "Atlas Button"
  }
};

export default meta;

const Template = ({ label, iconOnly, ...args }) => {
  const iconSvg = `<svg slot="icon-start" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.333a.667.667 0 0 1 .667.667v5.333H14a.667.667 0 0 1 0 1.334H8.667V14a.667.667 0 0 1-1.334 0V8.667H2a.667.667 0 0 1 0-1.334h5.333V2a.667.667 0 0 1 .667-.667Z"/></svg>`;

  const content = iconOnly
    ? iconSvg
    : `${iconSvg}<span>${label}</span>`;

  const iconOnlyAttr = iconOnly ? 'icon-only="true"' : "";

  return `
    <atlas-button ${iconOnlyAttr}
      variant="${args.variant}"
      tone="${args.tone}"
      size="${args.size}"
      ${args.disabled ? "disabled" : ""}>
      ${content}
    </atlas-button>
  `;
};

export const Playground = Template.bind({});

export const VariantsGrid = () => `
  <div style="display:flex; flex-direction:column; gap:16px;">
    ${variants
      .map(
        (variant) => `
          <div style="display:flex; flex-direction:column; gap:8px;">
            <strong>${variant}</strong>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              ${tones
                .map(
                  (tone) => `
                    <atlas-button variant="${variant}" tone="${tone}">
                      ${tone}
                    </atlas-button>
                  `
                )
                .join("")}
            </div>
          </div>
        `
      )
      .join("")}
  </div>
`;

export const Sizes = () => `
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    ${sizes
      .map(
        (size) => `
          <atlas-button size="${size}">
            Size ${size.toUpperCase()}
          </atlas-button>
        `
      )
      .join("")}
  </div>
`;

export const IconOnly = () => `
  <div style="display:flex; gap:12px;">
    ${tones
      .map(
        (tone) => `
          <atlas-button variant="ghost" tone="${tone}" icon-only="true">
            <svg slot="icon-start" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.333 2.667a4.667 4.667 0 1 1 0 9.333 4.667 4.667 0 0 1 0-9.333Zm0 1.333a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Zm4.834 8.986 2.666 2.667-1.18 1.18-2.666-2.667 1.18-1.18Z" />
            </svg>
          </atlas-button>
        `
      )
      .join("")}
  </div>
`;

