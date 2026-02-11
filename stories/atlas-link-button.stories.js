/**
 * # Atlas Link Button
 * 
 * Componente híbrido que visualmente se comporta como um link (sem bordas ou backgrounds),
 * mas funcionalmente pode disparar ações de sistema ou navegar para páginas.
 * 
 * **Status:** Stable ✅
 * 
 * ## Características
 * - Aparência de link com funcionalidade de botão ou âncora
 * - 5 cores semânticas (Primary, Success, Danger, White, Black)
 * - 3 tamanhos (SM: 14px, MD: 16px, LG: 18px)
 * - Suporte a ícones e estados de loading
 * - Renderização condicional como `<button>` ou `<a>` baseado em href
 * - Suporte a navegação externa com target="_blank"
 */

import '../components/web/atlas-icon/atlas-icon.js';
import '../components/web/atlas-link-button/atlas-link-button.js';

export default {
  title: 'Components/Atlas Link Button',
  tags: ['autodocs'],
  render: (args) => {
    const linkButton = document.createElement('atlas-link-button');
    
    // Content
    linkButton.setAttribute('label', args.label);
    
    // Appearance
    linkButton.setAttribute('color', args.color);
    linkButton.setAttribute('size', args.size);
    
    // Icon
    if (args.icon) {
      linkButton.setAttribute('icon', '');
      linkButton.setAttribute('icon-name', args.iconName);
    } else {
      linkButton.removeAttribute('icon');
    }
    
    // Status
    if (args.disabled) {
      linkButton.setAttribute('disabled', '');
    } else {
      linkButton.removeAttribute('disabled');
    }
    
    if (args.loading) {
      linkButton.setAttribute('loading', '');
    } else {
      linkButton.removeAttribute('loading');
    }
    
    // Navigation
    if (args.href) {
      linkButton.setAttribute('href', args.href);
      linkButton.setAttribute('target', args.target);
    } else {
      linkButton.removeAttribute('href');
    }
    
    // Action
    linkButton.addEventListener('click', args.onClick);
    
    return linkButton;
  },
  argTypes: {
    // ========== CONTENT ==========
    label: {
      control: 'text',
      description: 'Texto exibido no link-button',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Link button' }
      }
    },

    // ========== APPEARANCE ==========
    color: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'white', 'black'],
      description: 'Cor semântica do link-button',
      table: {
        category: 'Appearance',
        type: { summary: "'primary' | 'success' | 'danger' | 'white' | 'black'" },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho da tipografia e ícone',
      table: {
        category: 'Appearance',
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' }
      }
    },

    // ========== ICON ==========
    icon: {
      control: 'boolean',
      description: 'Exibe um ícone à direita do texto',
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
        defaultValue: { summary: 'arrow-up-right' }
      }
    },

    // ========== STATUS ==========
    disabled: {
      control: 'boolean',
      description: 'Desabilita o link-button, impedindo interação',
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

    // ========== NAVIGATION ==========
    href: {
      control: 'text',
      description: 'URL de destino. Quando definido, renderiza como <a> ao invés de <button>',
      table: {
        category: 'Navigation',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Target para navegação (aplicado apenas quando href está definido)',
      if: { arg: 'href', truthy: true },
      table: {
        category: 'Navigation',
        type: { summary: "'_self' | '_blank' | '_parent' | '_top'" },
        defaultValue: { summary: '_self' }
      }
    },

    // ========== ACTIONS ==========
    onClick: {
      action: 'clicked',
      description: 'Callback executado ao clicar no link-button',
      table: {
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  args: {
    label: 'Link button',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'arrow-up-right',
    disabled: false,
    loading: false,
    href: '',
    target: '_self'
  }
};

// ========== PLAYGROUND (Default) ==========
export const Playground = {
  args: {
    label: 'Link button',
    color: 'primary',
    size: 'md',
    icon: false,
    iconName: 'arrow-up-right',
    disabled: false,
    loading: false,
    href: '',
    target: '_self'
  }
};

// ========== COLORS ==========

export const PrimaryColor = {
  args: {
    label: 'Ver mais detalhes',
    color: 'primary',
    icon: true
  }
};

export const DangerColor = {
  args: {
    label: 'Excluir item',
    color: 'danger',
    icon: true,
    iconName: 'trash'
  }
};

export const SuccessColor = {
  args: {
    label: 'Confirmar ação',
    color: 'success',
    icon: true,
    iconName: 'check'
  }
};

export const WhiteColor = {
  args: {
    label: 'Link branco',
    color: 'white',
    icon: true
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

export const BlackColor = {
  args: {
    label: 'Link preto',
    color: 'black',
    icon: true
  }
};

// ========== SIZES ==========

export const SizeComparison = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '24px';
    container.style.alignItems = 'flex-start';
    container.style.padding = '20px';

    const sizes = [
      { size: 'sm', label: 'Small (14px)' },
      { size: 'md', label: 'Medium (16px)' },
      { size: 'lg', label: 'Large (18px)' }
    ];

    sizes.forEach(({ size, label }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('size', size);
      linkButton.setAttribute('color', 'primary');
      linkButton.setAttribute('icon', '');
      container.appendChild(linkButton);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== WITH ICON ==========

export const WithIcon = {
  args: {
    label: 'Ver detalhes',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'arrow-up-right'
  }
};

export const WithCustomIcon = {
  args: {
    label: 'Baixar arquivo',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'download'
  }
};

export const IconVariations = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '20px';

    const variations = [
      { label: 'Ver mais', iconName: 'arrow-up-right' },
      { label: 'Editar', iconName: 'pencil' },
      { label: 'Excluir', iconName: 'trash' },
      { label: 'Compartilhar', iconName: 'share' },
      { label: 'Baixar', iconName: 'download' },
      { label: 'Upload', iconName: 'upload' }
    ];

    variations.forEach(({ label, iconName }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('color', 'primary');
      linkButton.setAttribute('icon', '');
      linkButton.setAttribute('icon-name', iconName);
      container.appendChild(linkButton);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== AS BUTTON (Action) ==========

export const AsButton = {
  args: {
    label: 'Executar ação',
    color: 'primary',
    size: 'md',
    icon: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Quando `href` não está definido, o componente renderiza como `<button type="button">` e dispara eventos de click.'
      }
    }
  }
};

// ========== AS LINK (Navigation) ==========

export const AsInternalLink = {
  args: {
    label: 'Ir para página interna',
    color: 'primary',
    size: 'md',
    icon: true,
    href: '/pagina-interna',
    target: '_self'
  },
  parameters: {
    docs: {
      description: {
        story: 'Quando `href` está definido, o componente renderiza como `<a>` e realiza navegação.'
      }
    }
  }
};

export const AsExternalLink = {
  args: {
    label: 'Abrir link externo',
    color: 'primary',
    size: 'md',
    icon: true,
    iconName: 'external-link',
    href: 'https://example.com',
    target: '_blank'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link externo que abre em nova aba com `target="_blank"`.'
      }
    }
  }
};

// ========== STATES ==========

export const LoadingState = {
  args: {
    label: 'Processando...',
    color: 'primary',
    size: 'md',
    loading: true
  }
};

export const DisabledState = {
  args: {
    label: 'Link desabilitado',
    color: 'primary',
    size: 'md',
    icon: true,
    disabled: true
  }
};

export const DisabledLink = {
  args: {
    label: 'Link desabilitado',
    color: 'primary',
    size: 'md',
    icon: true,
    href: 'https://example.com',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Link com `href` definido mas desabilitado. O evento de navegação é prevenido.'
      }
    }
  }
};

// ========== USE CASES ==========

export const CallToAction = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.padding = '20px';

    const useCases = [
      { label: 'Ver todos os produtos', color: 'primary' },
      { label: 'Saiba mais', color: 'primary' },
      { label: 'Ir para checkout', color: 'success' },
      { label: 'Cancelar pedido', color: 'danger' }
    ];

    useCases.forEach(({ label, color }) => {
      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', label);
      linkButton.setAttribute('color', color);
      linkButton.setAttribute('icon', '');
      linkButton.setAttribute('icon-name', 'arrow-up-right');
      container.appendChild(linkButton);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

export const InlineText = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    container.style.fontSize = '16px';
    container.style.lineHeight = '1.6';
    container.style.color = '#333';

    const paragraph = document.createElement('p');
    paragraph.style.margin = '0';
    
    const text1 = document.createTextNode('Este é um exemplo de texto corrido onde você pode usar ');
    
    const linkButton = document.createElement('atlas-link-button');
    linkButton.setAttribute('label', 'um link-button inline');
    linkButton.setAttribute('color', 'primary');
    linkButton.setAttribute('size', 'md');
    linkButton.setAttribute('icon', '');
    linkButton.style.verticalAlign = 'baseline';
    
    const text2 = document.createTextNode(' no meio do conteúdo para chamar atenção para uma ação específica.');
    
    paragraph.appendChild(text1);
    paragraph.appendChild(linkButton);
    paragraph.appendChild(text2);
    container.appendChild(paragraph);

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== ALL COLORS GRID ==========

export const AllColorsGrid = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    container.style.gap = '24px';
    container.style.padding = '20px';

    const colors = ['primary', 'success', 'danger', 'black'];

    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.gap = '8px';

      const title = document.createElement('span');
      title.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      title.style.fontSize = '12px';
      title.style.fontWeight = 'bold';
      title.style.color = '#666';
      title.style.textTransform = 'capitalize';

      const linkButton = document.createElement('atlas-link-button');
      linkButton.setAttribute('label', `Link ${color}`);
      linkButton.setAttribute('color', color);
      linkButton.setAttribute('icon', '');

      wrapper.appendChild(title);
      wrapper.appendChild(linkButton);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};
