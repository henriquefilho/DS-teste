import '../components/web/atlas-switch/atlas-switch.js';
import '../components/web/atlas-icon-button/atlas-icon-button.js';
import '../components/web/atlas-icon/atlas-icon.js';

export default {
  title: 'Components/Atlas Switch',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-switch');
    
    // Content
    element.setAttribute('label', args.label);
    if (args.description) {
      element.setAttribute('description', args.description);
    }
    if (args.errorText) {
      element.setAttribute('error-text', args.errorText);
    }
    
    // Appearance
    element.setAttribute('alignment', args.alignment);
    if (args.strongLabel) {
      element.setAttribute('strong-label', '');
    } else {
      element.removeAttribute('strong-label');
    }
    if (args.iconPopover) {
      element.setAttribute('icon-popover', '');
    } else {
      element.removeAttribute('icon-popover');
    }
    if (args.iconPopoverName) {
      element.setAttribute('icon-popover-name', args.iconPopoverName);
    }
    
    // Status
    element.setAttribute('state', args.state);
    if (args.checked) {
      element.setAttribute('checked', '');
    } else {
      element.removeAttribute('checked');
    }
    
    // Event handler
    element.addEventListener('change', (e) => {
      args.onChange(e.detail);
    });
    
    return element;
  },
  argTypes: {
    // ========== CONTENT ==========
    label: {
      control: 'text',
      description: 'Texto do label principal',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' }
      }
    },
    description: {
      control: 'text',
      description: 'Texto descritivo opcional abaixo do label',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    errorText: {
      control: 'text',
      description: 'Mensagem de erro exibida quando state="error"',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Error text' }
      }
    },
    
    // ========== APPEARANCE ==========
    alignment: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Posição do controle switch em relação ao conteúdo',
      table: {
        category: 'Appearance',
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' }
      }
    },
    strongLabel: {
      control: 'boolean',
      description: 'Aplica font-weight semi-bold (600) no label',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    iconPopover: {
      control: 'boolean',
      description: 'Exibe ícone de informação ao lado do label',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    iconPopoverName: {
      control: 'text',
      description: 'Nome do ícone do popover (qualquer ícone válido do atlas-icon)',
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'info' }
      },
      if: { arg: 'iconPopover', truthy: true }
    },
    
    // ========== STATUS ==========
    state: {
      control: 'select',
      options: ['default', 'disabled', 'read-only', 'error'],
      description: 'Estado do componente (define aparência e interatividade)',
      table: {
        category: 'Status',
        type: { summary: "'default' | 'disabled' | 'read-only' | 'error'" },
        defaultValue: { summary: 'default' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Estado ativo/inativo do switch',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    
    // ========== ACTIONS ==========
    onChange: {
      action: 'changed',
      description: 'Evento disparado quando o estado do switch muda',
      table: {
        category: 'Actions',
        type: { summary: '(detail: { checked: boolean }) => void' }
      }
    }
  },
  args: {
    label: 'Label',
    description: '',
    errorText: 'Error text',
    alignment: 'left',
    strongLabel: false,
    iconPopover: false,
    iconPopoverName: 'info',
    state: 'default',
    checked: false
  }
};

// ========== PLAYGROUND ==========
export const Playground = {};

// ========== ALIGNMENT VARIATIONS ==========
export const AlignmentLeft = {
  args: {
    label: 'Enable notifications',
    description: 'Receive push notifications on your device',
    alignment: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch posicionado à esquerda do conteúdo (padrão).'
      }
    }
  }
};

export const AlignmentRight = {
  args: {
    label: 'Enable notifications',
    description: 'Receive push notifications on your device',
    alignment: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch posicionado à direita do conteúdo.'
      }
    }
  }
};

// ========== LABEL VARIATIONS ==========
export const WithStrongLabel = {
  args: {
    label: 'Marketing emails',
    strongLabel: true,
    description: 'Receive updates about new products and features'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label com font-weight semi-bold para dar mais destaque.'
      }
    }
  }
};

export const WithDescription = {
  args: {
    label: 'Two-factor authentication',
    description: 'Add an extra layer of security to your account by enabling 2FA',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com texto descritivo explicativo.'
      }
    }
  }
};

export const WithIconPopover = {
  args: {
    label: 'Privacy mode',
    description: 'Your activity will not be visible to other users',
    iconPopover: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com ícone de informação para contexto adicional.'
      }
    }
  }
};

export const CustomIconPopover = {
  args: {
    label: 'Advanced settings',
    description: 'Configure advanced system preferences',
    iconPopover: true,
    iconPopoverName: 'settings-01'
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com ícone customizado usando a propriedade icon-popover-name. Pode usar qualquer ícone válido do atlas-icon.'
      }
    }
  }
};

export const MultipleIconExamples = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    
    const examples = [
      { label: 'Help & Support', icon: 'help-circle', description: 'Get assistance and documentation' },
      { label: 'Security Settings', icon: 'lock-01', description: 'Manage security and privacy options' },
      { label: 'Experimental Features', icon: 'beaker-02', description: 'Enable beta features and experiments' },
      { label: 'Notification Preferences', icon: 'bell-01', description: 'Configure how you receive alerts' },
      { label: 'System Information', icon: 'info-circle', description: 'View system details and status' }
    ];
    
    examples.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      switchEl.setAttribute('icon-popover', '');
      switchEl.setAttribute('icon-popover-name', config.icon);
      container.appendChild(switchEl);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração de diferentes ícones que podem ser usados no icon-popover. Você pode usar qualquer ícone disponível no sistema de design.'
      }
    }
  }
};

// ========== STATE VARIATIONS ==========
export const CheckedState = {
  args: {
    label: 'Auto-save',
    description: 'Automatically save your work every 5 minutes',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no estado ativo/ligado.'
      }
    }
  }
};

export const UncheckedState = {
  args: {
    label: 'Auto-save',
    description: 'Automatically save your work every 5 minutes',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch no estado inativo/desligado.'
      }
    }
  }
};

export const DisabledUnchecked = {
  args: {
    label: 'Airplane mode',
    description: 'Disable all wireless connections',
    state: 'disabled',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch desabilitado no estado desligado (não interativo).'
      }
    }
  }
};

export const DisabledChecked = {
  args: {
    label: 'Developer mode',
    description: 'Enable advanced developer features',
    state: 'disabled',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch desabilitado no estado ligado (não interativo).'
      }
    }
  }
};

export const ReadOnlyUnchecked = {
  args: {
    label: 'Admin access',
    description: 'Full system administration privileges',
    state: 'read-only',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch em modo somente leitura desligado (visualização, não editável).'
      }
    }
  }
};

export const ReadOnlyChecked = {
  args: {
    label: 'Admin access',
    description: 'Full system administration privileges',
    state: 'read-only',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch em modo somente leitura ligado (visualização, não editável).'
      }
    }
  }
};

export const ErrorState = {
  args: {
    label: 'Terms and conditions',
    description: 'Accept our terms to continue',
    state: 'error',
    errorText: 'You must accept the terms to proceed',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Switch com erro de validação.'
      }
    }
  }
};

// ========== COMPLEX EXAMPLES ==========
export const SettingsPanel = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 400px; padding: 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
    
    const title = document.createElement('h3');
    title.textContent = 'Notification Settings';
    title.style.cssText = 'margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #1d2125;';
    container.appendChild(title);
    
    const switches = [
      { label: 'Email notifications', description: 'Receive notifications via email', checked: true },
      { label: 'Push notifications', description: 'Receive push notifications on your device', checked: true },
      { label: 'SMS notifications', description: 'Receive text messages for important updates', checked: false },
      { label: 'Marketing emails', description: 'Receive our newsletter and promotional content', checked: false, strongLabel: false }
    ];
    
    switches.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      if (config.checked) switchEl.setAttribute('checked', '');
      if (config.strongLabel) switchEl.setAttribute('strong-label', '');
      container.appendChild(switchEl);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Exemplo de painel de configurações com múltiplos switches.'
      }
    }
  }
};

export const FormValidation = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 20px; max-width: 500px; padding: 24px; background: #fff; border-radius: 8px;';
    
    const title = document.createElement('h3');
    title.textContent = 'Account Setup';
    title.style.cssText = 'margin: 0 0 8px 0; font-size: 20px; font-weight: 600;';
    container.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Please accept the required terms to continue';
    subtitle.style.cssText = 'margin: 0 0 16px 0; color: #5e6877; font-size: 14px;';
    container.appendChild(subtitle);
    
    // Switch obrigatório com erro
    const termsSwitch = document.createElement('atlas-switch');
    termsSwitch.setAttribute('label', 'Terms and conditions');
    termsSwitch.setAttribute('description', 'I accept the terms and conditions of service');
    termsSwitch.setAttribute('state', 'error');
    termsSwitch.setAttribute('error-text', 'You must accept the terms to proceed');
    termsSwitch.setAttribute('strong-label', '');
    container.appendChild(termsSwitch);
    
    // Switch opcional
    const privacySwitch = document.createElement('atlas-switch');
    privacySwitch.setAttribute('label', 'Privacy policy');
    privacySwitch.setAttribute('description', 'I have read and understand the privacy policy');
    privacySwitch.setAttribute('checked', '');
    container.appendChild(privacySwitch);
    
    // Switch opcional marketing
    const marketingSwitch = document.createElement('atlas-switch');
    marketingSwitch.setAttribute('label', 'Marketing communications');
    marketingSwitch.setAttribute('description', 'I want to receive promotional emails and updates');
    container.appendChild(marketingSwitch);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Exemplo de formulário com validação e estados de erro.'
      }
    }
  }
};

// ========== ACCESSIBILITY STORIES ==========
export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    
    const instruction = document.createElement('div');
    instruction.style.cssText = 'padding: 16px; background: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px; margin-bottom: 8px;';
    instruction.innerHTML = `
      <strong style="display: block; margin-bottom: 8px; color: #1976d2;">♿ Navegação por Teclado</strong>
      <ul style="margin: 0; padding-left: 20px; color: #1565c0; line-height: 1.6;">
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Tab</kbd> - Navegar entre switches</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Space</kbd> ou <kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Enter</kbd> - Alternar estado</li>
        <li><kbd style="padding: 2px 6px; background: #fff; border: 1px solid #ccc; border-radius: 3px;">Shift + Tab</kbd> - Voltar</li>
      </ul>
    `;
    container.appendChild(instruction);
    
    const switches = [
      { label: 'First switch', description: 'Use Tab to navigate', checked: false },
      { label: 'Second switch', description: 'Press Space to toggle', checked: true },
      { label: 'Third switch', description: 'Accessible navigation', checked: false }
    ];
    
    switches.forEach(config => {
      const switchEl = document.createElement('atlas-switch');
      switchEl.setAttribute('label', config.label);
      switchEl.setAttribute('description', config.description);
      if (config.checked) switchEl.setAttribute('checked', '');
      container.appendChild(switchEl);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado e estados de foco. O switch é totalmente acessível via teclado.'
      }
    }
  }
};

export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';
    
    // ✅ Boas práticas
    const goodSection = document.createElement('div');
    goodSection.innerHTML = `
      <div style="padding: 16px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #2e7d32; font-size: 16px;">✅ Boas Práticas</strong>
      </div>
    `;
    
    const good1 = document.createElement('atlas-switch');
    good1.setAttribute('label', 'Descriptive label');
    good1.setAttribute('description', 'Always provide clear, descriptive text explaining what the switch controls');
    good1.setAttribute('checked', '');
    goodSection.appendChild(good1);
    
    const spacer1 = document.createElement('div');
    spacer1.style.height = '12px';
    goodSection.appendChild(spacer1);
    
    const good2 = document.createElement('atlas-switch');
    good2.setAttribute('label', 'Feature with tooltip');
    good2.setAttribute('description', 'Use icon-popover for additional context when needed');
    good2.setAttribute('icon-popover', '');
    goodSection.appendChild(good2);
    
    const spacer2 = document.createElement('div');
    spacer2.style.height = '12px';
    goodSection.appendChild(spacer2);
    
    const good3 = document.createElement('atlas-switch');
    good3.setAttribute('label', 'Strong emphasis');
    good3.setAttribute('description', 'Use strong-label for important settings that need emphasis');
    good3.setAttribute('strong-label', '');
    good3.setAttribute('checked', '');
    goodSection.appendChild(good3);
    
    container.appendChild(goodSection);
    
    // ❌ Anti-patterns
    const badSection = document.createElement('div');
    badSection.innerHTML = `
      <div style="padding: 16px; background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px; margin-bottom: 16px;">
        <strong style="color: #c62828; font-size: 16px;">❌ Evite</strong>
      </div>
    `;
    
    const bad1Container = document.createElement('div');
    bad1Container.style.cssText = 'opacity: 0.6;';
    const bad1 = document.createElement('atlas-switch');
    bad1.setAttribute('label', 'On');
    bad1.setAttribute('state', 'disabled');
    bad1Container.appendChild(bad1);
    const bad1Note = document.createElement('p');
    bad1Note.style.cssText = 'margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;';
    bad1Note.textContent = '❌ Label genérico que não descreve a função';
    bad1Container.appendChild(bad1Note);
    badSection.appendChild(bad1Container);
    
    const bad2Container = document.createElement('div');
    bad2Container.style.cssText = 'opacity: 0.6;';
    const bad2 = document.createElement('atlas-switch');
    bad2.setAttribute('label', 'Click here to enable feature X and automatically sync your preferences across all devices');
    bad2.setAttribute('state', 'disabled');
    bad2Container.appendChild(bad2);
    const bad2Note = document.createElement('p');
    bad2Note.style.cssText = 'margin: 4px 0 16px 0; color: #d32f2f; font-size: 13px;';
    bad2Note.textContent = '❌ Label muito longo - use description para texto adicional';
    bad2Container.appendChild(bad2Note);
    badSection.appendChild(bad2Container);
    
    const bad3Container = document.createElement('div');
    bad3Container.style.cssText = 'opacity: 0.6;';
    const bad3 = document.createElement('atlas-switch');
    bad3.setAttribute('label', 'Accept');
    bad3.setAttribute('state', 'disabled');
    bad3Container.appendChild(bad3);
    const bad3Note = document.createElement('p');
    bad3Note.style.cssText = 'margin: 4px 0 0 0; color: #d32f2f; font-size: 13px;';
    bad3Note.textContent = '❌ Falta contexto - o que está sendo aceito?';
    bad3Container.appendChild(bad3Note);
    badSection.appendChild(bad3Container);
    
    container.appendChild(badSection);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Guia visual de boas práticas e anti-patterns para uso do componente switch.'
      }
    }
  }
};

export const ScreenReaderOptimized = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    
    const info = document.createElement('div');
    info.style.cssText = 'padding: 16px; background: #f3e5f5; border-left: 4px solid #9c27b0; border-radius: 4px; margin-bottom: 8px;';
    info.innerHTML = `
      <strong style="display: block; margin-bottom: 8px; color: #6a1b9a;">📢 Leitores de Tela</strong>
      <p style="margin: 0; color: #4a148c; line-height: 1.6; font-size: 14px;">
        Este componente é otimizado para leitores de tela, anunciando corretamente o estado do switch (ligado/desligado) e suas descrições.
      </p>
    `;
    container.appendChild(info);
    
    const switch1 = document.createElement('atlas-switch');
    switch1.setAttribute('label', 'Email notifications');
    switch1.setAttribute('description', 'Receive email alerts for important account activities');
    switch1.setAttribute('checked', '');
    container.appendChild(switch1);
    
    const switch2 = document.createElement('atlas-switch');
    switch2.setAttribute('label', 'Dark mode');
    switch2.setAttribute('description', 'Switch between light and dark color themes');
    switch2.setAttribute('icon-popover', '');
    container.appendChild(switch2);
    
    const switch3 = document.createElement('atlas-switch');
    switch3.setAttribute('label', 'Auto-updates');
    switch3.setAttribute('description', 'Automatically install security updates');
    switch3.setAttribute('checked', '');
    switch3.setAttribute('state', 'read-only');
    container.appendChild(switch3);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Exemplos otimizados para leitores de tela com labels descritivos e estados claros.'
      }
    }
  }
};
