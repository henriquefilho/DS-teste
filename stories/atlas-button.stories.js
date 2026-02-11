/**
 * # Atlas Button
 * 
 * Componente de botão principal do Design System com suporte completo a variantes,
 * estados de carregamento, ícones e temas semânticos.
 * 
 * **Status:** Stable ✅
 * 
 * ## Características
 * - 3 variantes visuais (Filled, Outlined, Ghost)
 * - 6 cores semânticas (Primary, Danger, Success, Warning, Info, Inverse)
 * - 4 tamanhos (SM: 32px, MD: 40px, LG: 48px, XL: 56px)
 * - Suporte a ícones e estados de loading
 * - Acessibilidade com ARIA
 */

import '../components/web/atlas-icon/atlas-icon.js';
import '../components/web/atlas-button/atlas-button.js';

export default {
  title: 'Components/Atlas Button',
  tags: ['autodocs'],
  render: (args) => {
    const button = document.createElement('atlas-button');
    
    // Content
    button.setAttribute('label', args.label);
    
    // Appearance
    button.setAttribute('variant', args.variant);
    button.setAttribute('color', args.color);
    button.setAttribute('size', args.size);
    
    // Icon
    if (args.icon) {
      button.setAttribute('icon', '');
      button.setAttribute('icon-name', args.iconName);
    } else {
      button.removeAttribute('icon');
    }
    
    // Status
    if (args.disabled) {
      button.setAttribute('disabled', '');
    } else {
      button.removeAttribute('disabled');
    }
    
    if (args.loading) {
      button.setAttribute('loading', '');
    } else {
      button.removeAttribute('loading');
    }
    
    if (args.fullWidth) {
      button.setAttribute('full-width', '');
    } else {
      button.removeAttribute('full-width');
    }
    
    // Action
    button.addEventListener('click', args.onClick);
    
    return button;
  },
  argTypes: {
    // ========== CONTENT ==========
    label: {
      control: 'text',
      description: 'Texto exibido no botão',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' }
      }
    },

    // ========== APPEARANCE ==========
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Define o estilo visual do botão',
      table: {
        category: 'Appearance',
        type: { summary: "'filled' | 'outlined' | 'ghost'" },
        defaultValue: { summary: 'filled' }
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'info', 'inverse'],
      description: 'Cor semântica que define o propósito do botão',
      table: {
        category: 'Appearance',
        type: { summary: "'primary' | 'danger' | 'success' | 'warning' | 'info' | 'inverse'" },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão (altura e padding)',
      table: {
        category: 'Appearance',
        type: { summary: "'sm' | 'md' | 'lg' | 'xl'" },
        defaultValue: { summary: 'md' }
      }
    },

    // ========== ICON ==========
    icon: {
      control: 'boolean',
      description: 'Ativa a exibição de um ícone no botão',
      table: {
        category: 'Icon',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    iconName: {
      control: 'text',
      description: 'Nome do ícone a ser exibido (requer icon=true)',
      if: { arg: 'icon', truthy: true },
      table: {
        category: 'Icon',
        type: { summary: 'string' },
        defaultValue: { summary: 'plus' }
      }
    },

    // ========== STATUS ==========
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão, impedindo interação',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Exibe spinner de loading e desabilita interação',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Faz o botão ocupar 100% da largura do container',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },

    // ========== ACTIONS ==========
    onClick: {
      action: 'clicked',
      description: 'Callback executado ao clicar no botão',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'plus',
    disabled: false,
    loading: false,
    fullWidth: false
  }
};

// ========== PLAYGROUND (Default) ==========
export const Playground = {
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'plus',
    disabled: false,
    loading: false,
    fullWidth: false
  }
};

// ========== VARIANTS ==========

export const FilledPrimary = {
  args: {
    label: 'Primary Action',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
};

export const OutlinedSecondary = {
  args: {
    label: 'Secondary Action',
    variant: 'outlined',
    color: 'primary',
    size: 'md'
  }
};

export const GhostTertiary = {
  args: {
    label: 'Tertiary Action',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
};

// ========== SEMANTIC COLORS ==========

export const DangerButton = {
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash'
  }
};

export const SuccessButton = {
  args: {
    label: 'Confirm',
    variant: 'filled',
    color: 'success',
    size: 'md',
    icon: true,
    iconName: 'check'
  }
};

export const WarningButton = {
  args: {
    label: 'Warning',
    variant: 'filled',
    color: 'warning',
    size: 'md',
    icon: true,
    iconName: 'alert-triangle'
  }
};

export const InfoButton = {
  args: {
    label: 'Information',
    variant: 'filled',
    color: 'info',
    size: 'md',
    icon: true,
    iconName: 'info'
  }
};

export const InverseButton = {
  args: {
    label: 'Inverse Theme',
    variant: 'filled',
    color: 'inverse',
    size: 'md'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// ========== SIZES ==========

export const SizeComparison = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.alignItems = 'flex-start';

    const sizes = [
      { size: 'sm', label: 'Small (32px)' },
      { size: 'md', label: 'Medium (40px)' },
      { size: 'lg', label: 'Large (48px)' },
      { size: 'xl', label: 'Extra Large (56px)' }
    ];

    sizes.forEach(({ size, label }) => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', label);
      button.setAttribute('size', size);
      button.setAttribute('variant', 'filled');
      button.setAttribute('color', 'primary');
      container.appendChild(button);
    });

    return container;
  }
};

// ========== WITH ICON ==========

export const WithIcon = {
  args: {
    label: 'Add Item',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'plus'
  }
};

export const IconOnly = {
  render: () => {
    const button = document.createElement('atlas-button');
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'md');
    button.setAttribute('icon', '');
    button.setAttribute('icon-name', 'search');
    button.setAttribute('label', ''); // Label vazio para icon-only
    return button;
  }
};

// ========== STATES ==========

export const LoadingState = {
  args: {
    label: 'Processing...',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    loading: true
  }
};

export const DisabledState = {
  args: {
    label: 'Disabled Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    disabled: true
  }
};

export const FullWidthButton = {
  args: {
    label: 'Full Width Button',
    variant: 'filled',
    color: 'primary',
    size: 'md',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
};

// ========== ALL VARIANTS GRID ==========

export const AllVariantsGrid = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '24px';
    container.style.padding = '20px';

    const variants = ['filled', 'outlined', 'ghost'];
    const colors = ['primary', 'danger', 'success', 'warning', 'info'];

    colors.forEach(color => {
      variants.forEach(variant => {
        const button = document.createElement('atlas-button');
        button.setAttribute('label', `${variant} ${color}`);
        button.setAttribute('variant', variant);
        button.setAttribute('color', color);
        button.setAttribute('size', 'md');
        container.appendChild(button);
      });
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};
