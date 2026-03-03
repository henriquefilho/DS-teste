import '../components/web/atlas-radio-button/atlas-radio-button.js';

/**
 * Radio button para seleção única em grupos, com suporte a múltiplos estados e acessibilidade.
 *
 * ## Estados Suportados
 * - **Visual**: default, error, read-only, disabled
 * - **Checked**: unchecked, checked
 *
 * ## Status: Stable
 */
export default {
  title: 'Components/Atlas Radio Button',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-radio-button');

    // Content
    if (args.label) element.setAttribute('label', args.label);
    if (args.value) element.setAttribute('value', args.value);
    if (args.name) element.setAttribute('name', args.name);

    // Appearance
    if (args.checked) {
      element.setAttribute('checked', '');
    } else {
      element.removeAttribute('checked');
    }

    // Status
    if (args.state && args.state !== 'default') {
      element.setAttribute('state', args.state);
    }

    // Accessibility
    if (args.ariaLabel) {
      element.setAttribute('aria-label', args.ariaLabel);
    }

    // Actions
    if (args.onChange) {
      element.addEventListener('change', args.onChange);
    }

    return element;
  },
  argTypes: {
    // ========== CONTENT ==========
    label: {
      control: 'text',
      description: 'Texto da label ao lado do radio button',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    value: {
      control: 'text',
      description: 'Valor do radio (usado em formulários)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    name: {
      control: 'text',
      description: 'Nome do grupo de radios (usado em formulários para agrupamento)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },

    // ========== APPEARANCE ==========
    checked: {
      control: 'boolean',
      description: 'Define se o radio está selecionado',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },

    // ========== STATUS ==========
    state: {
      control: 'select',
      options: ['default', 'error', 'read-only', 'disabled'],
      description: 'Estado visual do radio: default (interativo), error (erro de validação), read-only (apenas leitura), disabled (desabilitado)',
      table: {
        category: 'Status',
        type: { summary: "'default' | 'error' | 'read-only' | 'disabled'" },
        defaultValue: { summary: 'default' }
      }
    },

    // ========== ACCESSIBILITY ==========
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade para leitores de tela. Use quando o radio não tem label visual ou precisa de contexto adicional.',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },

    // ========== ACTIONS ==========
    onChange: {
      action: 'changed',
      description: 'Evento disparado quando o estado checked muda',
      table: { category: 'Actions' }
    }
  },
  args: {
    label: 'Opção 1',
    value: 'opcao1',
    name: 'grupo-radio',
    checked: false,
    state: 'default',
    ariaLabel: ''
  }
};

// ========== STORIES ==========

export const Playground = {};

export const Checked = {
  args: {
    label: 'Selecionado',
    checked: true
  }
};

export const ErrorState = {
  args: {
    label: 'Campo obrigatório',
    state: 'error'
  }
};

export const ErrorChecked = {
  args: {
    label: 'Selecionado com erro',
    state: 'error',
    checked: true
  }
};

export const ReadOnly = {
  args: {
    label: 'Apenas leitura',
    state: 'read-only'
  }
};

export const ReadOnlyChecked = {
  args: {
    label: 'Apenas leitura (selecionado)',
    state: 'read-only',
    checked: true
  }
};

export const Disabled = {
  args: {
    label: 'Desabilitado',
    state: 'disabled'
  }
};

export const DisabledChecked = {
  args: {
    label: 'Desabilitado (selecionado)',
    state: 'disabled',
    checked: true
  }
};

export const AllStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '16px';

    const states = [
      { label: 'Default', state: 'default', checked: false },
      { label: 'Default (checked)', state: 'default', checked: true },
      { label: 'Error', state: 'error', checked: false },
      { label: 'Error (checked)', state: 'error', checked: true },
      { label: 'Read-only', state: 'read-only', checked: false },
      { label: 'Read-only (checked)', state: 'read-only', checked: true },
      { label: 'Disabled', state: 'disabled', checked: false },
      { label: 'Disabled (checked)', state: 'disabled', checked: true }
    ];

    states.forEach(({ label, state, checked }) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('state', state);
      if (checked) radio.setAttribute('checked', '');
      container.appendChild(radio);
    });

    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Visão geral de todas as combinações de estado e seleção do radio button.'
      }
    }
  }
};

export const RadioGroup = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';
    container.style.padding = '16px';

    const options = ['Opção A', 'Opção B', 'Opção C'];
    options.forEach((label, i) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('name', 'demo-group');
      radio.setAttribute('value', `opt${i + 1}`);
      if (i === 0) radio.setAttribute('checked', '');
      container.appendChild(radio);
    });

    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Exemplo de grupo de radio buttons com seleção única. Apenas um item pode ser selecionado por vez.'
      }
    }
  }
};

// ========== ACCESSIBILITY ==========

export const WithAriaLabel = {
  args: {
    label: 'Sim',
    ariaLabel: 'Selecionar opção Sim para confirmar a ação'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `aria-label` para fornecer contexto adicional aos leitores de tela quando a label visual não é suficiente.'
      }
    }
  }
};

export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.padding = '16px';

    const info = document.createElement('p');
    info.style.cssText = 'margin:0 0 8px;font-family:sans-serif;font-size:14px;color:#555;';
    info.textContent = 'Use Tab para navegar entre os radio buttons e verifique o anel de foco azul.';
    container.appendChild(info);

    ['Primeiro', 'Segundo', 'Terceiro'].forEach((label, i) => {
      const radio = document.createElement('atlas-radio-button');
      radio.setAttribute('label', label);
      radio.setAttribute('name', 'focus-demo');
      radio.setAttribute('value', String(i + 1));
      container.appendChild(radio);
    });

    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado (Tab) e estados de foco (:focus-visible) do radio button.'
      }
    }
  }
};

export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '16px';
    container.style.fontFamily = 'sans-serif';

    // Correto
    const good = document.createElement('div');
    good.style.cssText = 'background:#e6f7ff;padding:16px;border-radius:8px;';
    good.innerHTML = '<strong style="color:#0030b9;">&#10004; Correto</strong><br><br>';
    const r1 = document.createElement('atlas-radio-button');
    r1.setAttribute('label', 'Aceito os termos');
    r1.setAttribute('aria-label', 'Aceito os termos de uso e a política de privacidade');
    good.appendChild(r1);
    const desc1 = document.createElement('p');
    desc1.style.cssText = 'margin:8px 0 0;font-size:13px;color:#333;';
    desc1.textContent = 'Usa label visível + aria-label com contexto expandido.';
    good.appendChild(desc1);
    container.appendChild(good);

    // Errado
    const bad = document.createElement('div');
    bad.style.cssText = 'background:#fff0f0;padding:16px;border-radius:8px;';
    bad.innerHTML = '<strong style="color:#b02a37;">&#10008; Evite</strong><br><br>';
    const r2 = document.createElement('atlas-radio-button');
    r2.setAttribute('label', '');
    bad.appendChild(r2);
    const desc2 = document.createElement('p');
    desc2.style.cssText = 'margin:8px 0 0;font-size:13px;color:#333;';
    desc2.textContent = 'Radio sem label e sem aria-label: inacessível para leitores de tela.';
    bad.appendChild(desc2);
    container.appendChild(bad);

    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Guia visual de boas práticas de acessibilidade para o radio button.'
      }
    }
  }
};
