import '../components/web/atlas-resource-list/atlas-resource-list.js';
import '../components/web/atlas-icon/atlas-icon.js';
import '../components/web/atlas-icon-button/atlas-icon-button.js';
import '../components/web/atlas-switch/atlas-switch.js';

export default {
  title: 'Components/Atlas Resource List',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-resource-list');
    
    // Type & Content
    element.setAttribute('type', args.type);
    if (args.label) {
      element.setAttribute('label', args.label);
    }
    if (args.description) {
      element.setAttribute('description', args.description);
    }
    
    // Visual Support
    if (args.visualSupport) {
      element.setAttribute('visual-support', '');
    } else {
      element.removeAttribute('visual-support');
    }
    if (args.visualSupportIcon) {
      element.setAttribute('visual-support-icon', args.visualSupportIcon);
    }
    if (args.visualSupportImage) {
      element.setAttribute('visual-support-image', args.visualSupportImage);
    }
    
    // Action Configuration
    if (args.actionIcon) {
      element.setAttribute('action-icon', args.actionIcon);
    }
    if (args.href) {
      element.setAttribute('href', args.href);
    }
    
    // State
    if (args.checked) {
      element.setAttribute('checked', '');
    } else {
      element.removeAttribute('checked');
    }
    if (args.disabled) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
    if (!args.showDivider) {
      element.setAttribute('show-divider', 'false');
    } else {
      element.removeAttribute('show-divider');
    }
    
    // Custom Content (Slot)
    if (args.customContent) {
      element.innerHTML = args.customContent;
    }
    
    // Event handlers
    element.addEventListener('resource-list-click', (e) => {
      args.onResourceListClick(e.detail);
    });
    element.addEventListener('action-click', (e) => {
      args.onActionClick(e.detail);
    });
    element.addEventListener('switch-change', (e) => {
      args.onSwitchChange(e.detail);
    });
    
    return element;
  },
  argTypes: {
    // ========== TYPE & CONTENT ==========
    type: {
      control: 'select',
      options: ['navigation', 'icon-button', 'switch', 'informational'],
      description: 'Tipo de ação do item',
      table: {
        category: 'Type & Content',
        type: { summary: "'navigation' | 'icon-button' | 'switch' | 'informational'" },
        defaultValue: { summary: 'navigation' }
      }
    },
    label: {
      control: 'text',
      description: 'Texto principal do item (título em negrito)',
      table: {
        category: 'Type & Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    description: {
      control: 'text',
      description: 'Texto descritivo secundário (menor e cinza)',
      table: {
        category: 'Type & Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    customContent: {
      control: 'text',
      description: 'HTML customizado que substitui label e description (usa slot default)',
      table: {
        category: 'Type & Content',
        type: { summary: 'string (HTML)' },
        defaultValue: { summary: '' }
      }
    },
    
    // ========== VISUAL SUPPORT ==========
    visualSupport: {
      control: 'boolean',
      description: 'Exibe ícone decorativo à esquerda',
      table: {
        category: 'Visual Support',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    visualSupportIcon: {
      control: 'text',
      description: 'Nome do ícone para o visual support (ex: cog, bell, lock, wifi)',
      table: {
        category: 'Visual Support',
        type: { summary: 'string' },
        defaultValue: { summary: 'cog' }
      },
      if: { arg: 'visualSupport', truthy: true }
    },
    visualSupportImage: {
      control: 'text',
      description: 'URL da imagem para o visual support (tem prioridade sobre o ícone)',
      table: {
        category: 'Visual Support',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      if: { arg: 'visualSupport', truthy: true }
    },
    
    // ========== ACTION CONFIGURATION ==========
    actionIcon: {
      control: 'text',
      description: 'Nome do ícone para ação (chevron-right para navigation, three-dots para icon-button)',
      table: {
        category: 'Action Configuration',
        type: { summary: 'string' },
        defaultValue: { summary: 'chevron-right / three-dots' }
      },
      if: { arg: 'type', neq: 'switch' }
    },
    href: {
      control: 'text',
      description: 'URL de navegação (usado apenas quando type="navigation")',
      table: {
        category: 'Action Configuration',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      if: { arg: 'type', eq: 'navigation' }
    },
    checked: {
      control: 'boolean',
      description: 'Estado do switch (usado apenas quando type="switch")',
      table: {
        category: 'Action Configuration',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      if: { arg: 'type', eq: 'switch' }
    },
    
    // ========== STATE ==========
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado do componente',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    showDivider: {
      control: 'boolean',
      description: 'Exibe linha divisória na parte inferior',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    
    // ========== ACTIONS (EVENTS) ==========
    onResourceListClick: {
      action: 'resource-list-click',
      description: 'Disparado quando item é clicado (type: navigation)',
      table: {
        category: 'Actions',
        type: { summary: 'CustomEvent<{ type, label, href }>' }
      }
    },
    onActionClick: {
      action: 'action-click',
      description: 'Disparado quando botão de ação é clicado (type: icon-button)',
      table: {
        category: 'Actions',
        type: { summary: 'CustomEvent<{ label }>' }
      }
    },
    onSwitchChange: {
      action: 'switch-change',
      description: 'Disparado quando switch muda de estado (type: switch)',
      table: {
        category: 'Actions',
        type: { summary: 'CustomEvent<{ checked, label }>' }
      }
    }
  }
};

// ========== TYPE: NAVIGATION ==========
export const NavigationDefault = {
  args: {
    type: 'navigation',
    label: 'Configurações do sistema',
    description: 'Gerencie preferências e configurações',
    href: '#settings',
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
};

export const NavigationWithVisualSupport = {
  args: {
    type: 'navigation',
    label: 'Notificações',
    description: 'Configure suas notificações',
    href: '#notifications',
    visualSupport: true,
    visualSupportIcon: 'bell',
    disabled: false,
    showDivider: true
  }
};

export const NavigationWithVisualSupportImage = {
  args: {
    type: 'navigation',
    label: 'Meu Perfil',
    description: 'Edite suas informações pessoais',
    href: '#profile',
    visualSupport: true,
    visualSupportImage: 'https://i.pravatar.cc/32?img=1',
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation com imagem no visual support. A imagem tem prioridade sobre o ícone quando ambos são definidos.'
      }
    }
  }
};

export const NavigationDisabled = {
  args: {
    type: 'navigation',
    label: 'Funcionalidade desabilitada',
    description: 'Esta opção não está disponível',
    href: '#disabled',
    visualSupport: true,
    visualSupportIcon: 'alert-triangle',
    disabled: true,
    showDivider: true
  }
};

export const NavigationWithoutDivider = {
  args: {
    type: 'navigation',
    label: 'Item único sem divider',
    description: 'Útil para listas com um único item',
    href: '#single',
    visualSupport: false,
    disabled: false,
    showDivider: false
  }
};

// ========== TYPE: ICON BUTTON ==========
export const IconButtonDefault = {
  args: {
    type: 'icon-button',
    label: 'Opções avançadas',
    description: 'Acesse configurações adicionais',
    actionIcon: 'three-dots',
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
};

export const IconButtonWithVisualSupport = {
  args: {
    type: 'icon-button',
    label: 'Minha conta',
    description: 'Editar informações do perfil',
    actionIcon: 'pencil',
    visualSupport: true,
    visualSupportIcon: 'user',
    disabled: false,
    showDivider: true
  }
};

export const IconButtonDisabled = {
  args: {
    type: 'icon-button',
    label: 'Ação desabilitada',
    description: 'Não disponível no momento',
    actionIcon: 'x',
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
};

// ========== TYPE: SWITCH ==========
export const SwitchUnchecked = {
  args: {
    type: 'switch',
    label: 'Modo escuro',
    description: 'Ative o tema escuro',
    checked: false,
    visualSupport: false,
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no resource list (sempre renderizado sem label interno, usando apenas o toggle).'
      }
    }
  }
};

export const SwitchChecked = {
  args: {
    type: 'switch',
    label: 'Notificações push',
    description: 'Receba notificações no dispositivo',
    checked: true,
    visualSupport: false,
    disabled: false,
    showDivider: true
  }
};

export const SwitchWithVisualSupport = {
  args: {
    type: 'switch',
    label: 'Pagamento por aproximação',
    description: 'Ative para pagar sem inserir o cartão',
    checked: true,
    visualSupport: true,
    visualSupportIcon: 'contactless',
    disabled: false,
    showDivider: true
  }
};

export const SwitchDisabled = {
  args: {
    type: 'switch',
    label: 'Recurso premium',
    description: 'Requer assinatura ativa',
    checked: false,
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
};

export const SwitchDisabledChecked = {
  args: {
    type: 'switch',
    label: 'Sincronização automática',
    description: 'Sincronize dados automaticamente',
    checked: true,
    visualSupport: false,
    disabled: true,
    showDivider: true
  }
};

// ========== TYPE: INFORMATIONAL ==========
export const InformationalDefault = {
  args: {
    type: 'informational',
    label: 'Versão do aplicativo',
    description: 'v2.4.1 - Build 1234',
    visualSupport: false,
    disabled: false,
    showDivider: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tipo informational não possui interação (sem hover, pressed ou clique). Usado apenas para exibir informações estáticas.'
      }
    }
  }
};

export const InformationalWithVisualSupport = {
  args: {
    type: 'informational',
    label: 'Limite utilizado',
    description: 'R$ 2.450,00 de R$ 5.000,00',
    visualSupport: true,
    visualSupportIcon: 'hand-card',
    disabled: false,
    showDivider: true
  }
};

// ========== CUSTOM CONTENT (SLOT) ==========
export const CustomContent = {
  args: {
    type: 'navigation',
    href: '#uber-credito',
    visualSupport: true,
    visualSupportImage: 'https://t2.tudocdn.net/693919?w=1200&h=1200',
    disabled: false,
    showDivider: true,
    customContent: `
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; font-family: var(--atlas-font-face-general, 'Open Sans', sans-serif);">
        <div style="display: flex; flex-direction: column; gap: var(--atlas-gap-2xs, 4px);">
          <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Uber
          </div>
          <div style="color: var(--atlas-color-text-static-neutral-medium, #5e6877); font-size: var(--atlas-font-size-150, 12px); font-weight: var(--atlas-font-weight-400, 400); line-height: 1.5;">
            Crédito
          </div>
        </div>
        <div style="color: var(--atlas-color-text-static-neutral-hard, #212529); font-size: var(--atlas-font-size-175, 14px); font-weight: var(--atlas-font-weight-700, 700); line-height: 1.5;">
          R$ 28,60
        </div>
      </div>
    `
  }
};

// ========== MULTIPLE ITEMS (LIST EXAMPLE) ==========
export const ConfigurationList = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;';
    
    const items = [
      { type: 'navigation', label: 'Perfil', description: 'Edite suas informações', icon: 'user', href: '#profile' },
      { type: 'navigation', label: 'Segurança', description: 'Senha e autenticação', icon: 'lock', href: '#security' },
      { type: 'switch', label: 'Notificações', description: 'Alertas e avisos', icon: 'bell', checked: true },
      { type: 'navigation', label: 'Privacidade', description: 'Controle seus dados', icon: 'shield', href: '#privacy' }
    ];
    
    items.forEach((item, index) => {
      const element = document.createElement('atlas-resource-list');
      element.setAttribute('type', item.type);
      element.setAttribute('label', item.label);
      element.setAttribute('description', item.description);
      element.setAttribute('visual-support', '');
      element.setAttribute('visual-support-icon', item.icon);
      if (item.href) element.setAttribute('href', item.href);
      if (item.checked) element.setAttribute('checked', '');
      if (index === items.length - 1) element.setAttribute('show-divider', 'false');
      
      container.appendChild(element);
    });
    
    return container;
  }
};

// ========== USER LIST WITH IMAGES ==========
export const UserListWithImages = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'max-width: 400px; background: white; border: 1px solid #d1d6dc; border-radius: 8px; overflow: hidden;';
    
    const users = [
      { name: 'John Doe', email: 'john.doe@example.com', image: 'https://i.pravatar.cc/32?img=1', href: '#user-1' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', image: 'https://i.pravatar.cc/32?img=5', href: '#user-2' },
      { name: 'Bob Johnson', email: 'bob.johnson@example.com', image: 'https://i.pravatar.cc/32?img=3', href: '#user-3' },
      { name: 'Alice Williams', email: 'alice.williams@example.com', image: 'https://i.pravatar.cc/32?img=9', href: '#user-4' }
    ];
    
    users.forEach((user, index) => {
      const element = document.createElement('atlas-resource-list');
      element.setAttribute('type', 'navigation');
      element.setAttribute('label', user.name);
      element.setAttribute('description', user.email);
      element.setAttribute('visual-support', '');
      element.setAttribute('visual-support-image', user.image);
      element.setAttribute('href', user.href);
      if (index === users.length - 1) element.setAttribute('show-divider', 'false');
      
      container.appendChild(element);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lista de usuários usando imagens no visual support. Ideal para exibir perfis, contatos ou participantes.'
      }
    }
  }
};

