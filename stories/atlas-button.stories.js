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
    
    // Accessibility
    if (args.ariaLabel) {
      button.setAttribute('aria-label', args.ariaLabel);
    } else {
      button.removeAttribute('aria-label');
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

    // ========== ACCESSIBILITY ==========
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade para leitores de tela. Use quando o label visual não for suficientemente descritivo',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
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
    ariaLabel: '',
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
    ariaLabel: '',
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

// ========== ACCESSIBILITY ==========

export const WithAriaLabel = {
  args: {
    label: 'Delete',
    variant: 'filled',
    color: 'danger',
    size: 'md',
    icon: true,
    iconName: 'trash',
    ariaLabel: 'Excluir item permanentemente da lista de produtos'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `aria-label` para fornecer contexto adicional aos leitores de tela quando o label visual for muito curto ou ambíguo.'
      }
    }
  }
};

export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.padding = '20px';

    const wrapper1 = document.createElement('div');
    wrapper1.style.display = 'flex';
    wrapper1.style.flexDirection = 'column';
    wrapper1.style.gap = '8px';

    const title1 = document.createElement('p');
    title1.textContent = 'Estado de foco (use Tab para navegar):';
    title1.style.margin = '0';
    title1.style.fontSize = '14px';
    title1.style.fontWeight = '600';
    title1.style.color = '#333';

    const buttonRow = document.createElement('div');
    buttonRow.style.display = 'flex';
    buttonRow.style.gap = '12px';

    const variants = [
      { variant: 'filled', label: 'Filled' },
      { variant: 'outlined', label: 'Outlined' },
      { variant: 'ghost', label: 'Ghost' }
    ];

    variants.forEach(({ variant, label }) => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', label);
      button.setAttribute('variant', variant);
      button.setAttribute('color', 'primary');
      button.setAttribute('size', 'md');
      buttonRow.appendChild(button);
    });

    wrapper1.appendChild(title1);
    wrapper1.appendChild(buttonRow);

    const wrapper2 = document.createElement('div');
    wrapper2.style.display = 'flex';
    wrapper2.style.flexDirection = 'column';
    wrapper2.style.gap = '8px';
    wrapper2.style.marginTop = '16px';

    const title2 = document.createElement('p');
    title2.textContent = 'Navegação por teclado:';
    title2.style.margin = '0';
    title2.style.fontSize = '14px';
    title2.style.fontWeight = '600';
    title2.style.color = '#333';

    const list = document.createElement('ul');
    list.style.margin = '0';
    list.style.paddingLeft = '20px';
    list.style.fontSize = '14px';
    list.style.color = '#666';

    const items = [
      'Tab: Navega para o próximo botão',
      'Shift + Tab: Navega para o botão anterior',
      'Enter ou Space: Ativa o botão',
      'O outline de foco é visível em todos os estados'
    ];

    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.style.marginBottom = '4px';
      list.appendChild(li);
    });

    wrapper2.appendChild(title2);
    wrapper2.appendChild(list);

    container.appendChild(wrapper1);
    container.appendChild(wrapper2);

    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Todos os botões suportam navegação por teclado e exibem um outline de foco visível. Use Tab para navegar entre os botões e Enter/Space para ativá-los.'
      }
    }
  }
};

export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '800px';

    const title = document.createElement('h3');
    title.textContent = 'Boas Práticas de Acessibilidade';
    title.style.marginTop = '0';
    title.style.marginBottom = '16px';
    title.style.fontSize = '18px';
    title.style.color = '#333';

    const sections = [
      {
        title: '✅ Labels Descritivos',
        description: 'Use labels que descrevam claramente a ação do botão. Evite labels genéricos como "Clique aqui".',
        example: { label: 'Salvar alterações', good: true }
      },
      {
        title: '✅ Aria-label para Contexto',
        description: 'Adicione aria-label quando o label visual for muito curto ou precisar de contexto adicional.',
        example: { label: 'Excluir', ariaLabel: 'Excluir produto "iPhone 14" do carrinho', good: true }
      },
      {
        title: '✅ Estados Visíveis',
        description: 'Estados de loading e disabled são comunicados visualmente e para leitores de tela via aria-busy e disabled.',
        example: { label: 'Processando...', loading: true, good: true }
      },
      {
        title: '❌ Evite Ícones Sem Label',
        description: 'Nunca use botões apenas com ícone sem um label de texto ou aria-label.',
        example: { iconOnly: true, good: false }
      }
    ];

    sections.forEach(({ title: sectionTitle, description, example }) => {
      const section = document.createElement('div');
      section.style.marginBottom = '24px';
      section.style.padding = '16px';
      section.style.border = '1px solid #e0e0e0';
      section.style.borderRadius = '8px';
      section.style.backgroundColor = example.good ? '#f0f9ff' : '#fff5f5';

      const h4 = document.createElement('h4');
      h4.textContent = sectionTitle;
      h4.style.margin = '0 0 8px 0';
      h4.style.fontSize = '16px';
      h4.style.color = example.good ? '#0c4a6e' : '#991b1b';

      const p = document.createElement('p');
      p.textContent = description;
      p.style.margin = '0 0 12px 0';
      p.style.fontSize = '14px';
      p.style.color = '#666';
      p.style.lineHeight = '1.6';

      section.appendChild(h4);
      section.appendChild(p);

      if (!example.iconOnly) {
        const button = document.createElement('atlas-button');
        button.setAttribute('label', example.label);
        button.setAttribute('variant', 'filled');
        button.setAttribute('color', 'primary');
        button.setAttribute('size', 'md');
        if (example.ariaLabel) button.setAttribute('aria-label', example.ariaLabel);
        if (example.loading) button.setAttribute('loading', '');
        section.appendChild(button);
      } else {
        const warning = document.createElement('code');
        warning.textContent = '<atlas-button icon="search" /> ❌ Inacessível!';
        warning.style.padding = '8px 12px';
        warning.style.backgroundColor = '#fee2e2';
        warning.style.border = '1px solid #fecaca';
        warning.style.borderRadius = '4px';
        warning.style.fontSize = '13px';
        warning.style.color = '#991b1b';
        section.appendChild(warning);
      }

      container.appendChild(section);
    });

    container.insertBefore(title, container.firstChild);
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Guia completo de boas práticas de acessibilidade para o componente Atlas Button.'
      }
    }
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
