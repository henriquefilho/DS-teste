import '../components/web/atlas-checkbox/atlas-checkbox.js';

/**
 * # Atlas Checkbox
 * 
 * Checkbox interativo com suporte a múltiplos estados e acessibilidade completa.
 * 
 * ## Estados Suportados
 * - **Visual**: default, error, readonly, disabled
 * - **Checked**: unchecked, checked, indeterminate
 * 
 * ## Status: Stable ✅
 */
export default {
  title: 'Components/Atlas Checkbox',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-checkbox');
    
    // Content
    if (args.label) element.setAttribute('label', args.label);
    if (args.value) element.setAttribute('value', args.value);
    if (args.name) element.setAttribute('name', args.name);
    
    // Status
    if (args.checked) {
      element.setAttribute('checked', '');
    } else {
      element.removeAttribute('checked');
    }
    
    if (args.indeterminate) {
      element.setAttribute('indeterminate', '');
    } else {
      element.removeAttribute('indeterminate');
    }
    
    if (args.disabled) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
    
    if (args.error) {
      element.setAttribute('error', '');
    } else {
      element.removeAttribute('error');
    }
    
    if (args.readonly) {
      element.setAttribute('readonly', '');
    } else {
      element.removeAttribute('readonly');
    }
    
    // Accessibility
    if (args.ariaLabel) {
      element.setAttribute('aria-label', args.ariaLabel);
    }
    
    // Actions
    element.addEventListener('change', args.onChange);
    
    return element;
  },
  argTypes: {
    // ========== CONTENT ==========
    label: {
      control: 'text',
      description: 'Texto do label ao lado do checkbox',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    value: {
      control: 'text',
      description: 'Valor do checkbox (usado em formulários)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    name: {
      control: 'text',
      description: 'Nome do campo (usado em formulários)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    
    // ========== STATUS ==========
    checked: {
      control: 'boolean',
      description: 'Define se o checkbox está marcado',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado (seleção parcial). Usado quando um grupo tem apenas alguns itens selecionados.',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita completamente a interação com o checkbox',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    error: {
      control: 'boolean',
      description: 'Aplica estilo visual de erro (vermelho)',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Modo somente leitura (não editável, mas visualmente normal)',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    
    // ========== ACCESSIBILITY ==========
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade para leitores de tela. Use quando o checkbox não tem label visual ou precisa de contexto adicional.',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    
    // ========== ACTIONS ==========
    onChange: {
      action: 'change',
      description: 'Evento disparado quando o estado do checkbox muda. Retorna `{checked, value, name}` no detail.',
      table: {
        category: 'Actions',
        type: { summary: 'CustomEvent<{checked: boolean, value: string, name: string}>' }
      }
    }
  },
  args: {
    label: 'Aceito os termos e condições',
    value: '',
    name: '',
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
    readonly: false,
    ariaLabel: ''
  }
};

// ========== PLAYGROUND ==========
/**
 * Story padrão para testar todas as propriedades interativamente.
 */
export const Playground = {};

// ========== ESTADOS DE CHECKED ==========
/**
 * Checkbox marcado (checked).
 */
export const Checked = {
  args: {
    label: 'Checkbox marcado',
    checked: true
  }
};

/**
 * Estado indeterminado, usado quando um grupo tem seleção parcial.
 * Exemplo: Checkbox "Selecionar tudo" quando apenas alguns itens estão marcados.
 */
export const Indeterminate = {
  args: {
    label: 'Seleção parcial (indeterminate)',
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use o estado `indeterminate` para representar seleção parcial em grupos. Comum em cenários de "Selecionar tudo" onde apenas alguns itens estão selecionados.'
      }
    }
  }
};

// ========== ESTADOS VISUAIS ==========
/**
 * Checkbox com estilo de erro (border vermelha).
 * Use em validações de formulário.
 */
export const ErrorState = {
  args: {
    label: 'Você deve aceitar os termos',
    error: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado de erro aplicado quando o checkbox falha em validações de formulário. Combine com `atlas-helper-text` para mensagens de erro.'
      }
    }
  }
};

/**
 * Checkbox desabilitado (não interativo).
 */
export const Disabled = {
  args: {
    label: 'Checkbox desabilitado',
    disabled: true
  }
};

/**
 * Checkbox desabilitado no estado checked.
 */
export const DisabledChecked = {
  args: {
    label: 'Checkbox desabilitado (checked)',
    checked: true,
    disabled: true
  }
};

/**
 * Checkbox em modo somente leitura.
 * Visualmente normal mas não permite interação.
 */
export const Readonly = {
  args: {
    label: 'Somente leitura',
    checked: true,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `readonly` quando precisar exibir um checkbox que não deve ser editado, mas mantém aparência normal (diferente de disabled).'
      }
    }
  }
};

// ========== COMBINAÇÕES PRÁTICAS ==========
/**
 * Checkbox sem label visual.
 * OBRIGATÓRIO usar aria-label para acessibilidade.
 */
export const WithoutVisualLabel = {
  args: {
    label: '',
    ariaLabel: 'Marcar este item como concluído'
  },
  parameters: {
    docs: {
      description: {
        story: '⚠️ **Importante**: Quando não há label visual, o `aria-label` é **obrigatório** para acessibilidade.'
      }
    }
  }
};

/**
 * Exemplo de grupo de checkboxes com FormData.
 */
export const FormGroup = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    
    const title = document.createElement('h4');
    title.textContent = 'Selecione suas preferências:';
    title.style.cssText = 'margin: 0 0 8px 0; font-family: "Open Sans", sans-serif;';
    
    const options = [
      { label: 'Notificações por email', value: 'email', name: 'preferences' },
      { label: 'Notificações push', value: 'push', name: 'preferences' },
      { label: 'Newsletter semanal', value: 'newsletter', name: 'preferences' }
    ];
    
    container.appendChild(title);
    
    options.forEach(opt => {
      const checkbox = document.createElement('atlas-checkbox');
      checkbox.setAttribute('label', opt.label);
      checkbox.setAttribute('value', opt.value);
      checkbox.setAttribute('name', opt.name);
      container.appendChild(checkbox);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Use `name` e `value` para integração com FormData. Checkboxes com mesmo `name` formam um grupo.'
      }
    }
  }
};

/**
 * Demonstração de "Select All" com indeterminate.
 */
export const SelectAllPattern = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 12px; font-family: "Open Sans", sans-serif;';
    
    const selectAll = document.createElement('atlas-checkbox');
    selectAll.setAttribute('label', 'Selecionar todos');
    selectAll.style.cssText = 'font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #D1D6DC;';
    
    const items = [
      { label: 'Item 1', id: 'item1' },
      { label: 'Item 2', id: 'item2' },
      { label: 'Item 3', id: 'item3' }
    ];
    
    const checkboxes = items.map(item => {
      const cb = document.createElement('atlas-checkbox');
      cb.setAttribute('label', item.label);
      cb.setAttribute('value', item.id);
      cb.style.cssText = 'padding-left: 24px;';
      return cb;
    });
    
    // Lógica de "Select All"
    const updateSelectAll = () => {
      const checkedCount = checkboxes.filter(cb => cb.checked).length;
      if (checkedCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
      } else if (checkedCount === checkboxes.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
      } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
      }
    };
    
    selectAll.addEventListener('change', (e) => {
      checkboxes.forEach(cb => {
        cb.checked = e.detail.checked;
      });
    });
    
    checkboxes.forEach(cb => {
      cb.addEventListener('change', updateSelectAll);
    });
    
    container.appendChild(selectAll);
    checkboxes.forEach(cb => container.appendChild(cb));
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Pattern comum de "Selecionar todos" usando estado `indeterminate` para indicar seleção parcial.'
      }
    }
  }
};

// ========== ACESSIBILIDADE ==========
/**
 * Demonstração de uso de aria-label.
 */
export const WithAriaLabel = {
  args: {
    label: 'Lembrar login',
    ariaLabel: 'Manter-me conectado neste dispositivo por 30 dias'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `aria-label` para fornecer contexto adicional aos leitores de tela. O label visual pode ser curto, mas o aria-label pode ser mais descritivo.'
      }
    }
  }
};

/**
 * Demonstração de navegação por teclado e estados de foco.
 */
export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; font-family: "Open Sans", sans-serif;';
    
    const instructions = document.createElement('div');
    instructions.style.cssText = 'padding: 16px; background: #E8F4FD; border-radius: 8px; margin-bottom: 8px;';
    instructions.innerHTML = `
      <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #0030B9;">⌨️ Navegação por Teclado</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
        <li><kbd>Tab</kbd> - Navegar entre checkboxes</li>
        <li><kbd>Space</kbd> - Marcar/desmarcar checkbox focado</li>
        <li><kbd>Shift + Tab</kbd> - Navegação reversa</li>
      </ul>
    `;
    
    const states = [
      { label: 'Checkbox Default', state: 'default' },
      { label: 'Checkbox Error', state: 'error' },
      { label: 'Checkbox Disabled (não focável)', state: 'disabled' }
    ];
    
    states.forEach(({ label, state }) => {
      const checkbox = document.createElement('atlas-checkbox');
      checkbox.setAttribute('label', label);
      if (state === 'error') checkbox.setAttribute('error', '');
      if (state === 'disabled') checkbox.setAttribute('disabled', '');
      container.appendChild(checkbox);
    });
    
    container.insertBefore(instructions, container.firstChild);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'O checkbox possui suporte completo para navegação por teclado e estados de foco visíveis (outline azul ou vermelho conforme o estado).'
      }
    }
  }
};

/**
 * Guia visual de boas práticas de acessibilidade.
 */
export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; font-family: "Open Sans", sans-serif;';
    
    // Seção DO ✅
    const doSection = document.createElement('div');
    doSection.style.cssText = 'padding: 20px; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px;';
    doSection.innerHTML = `
      <h4 style="margin: 0 0 16px 0; color: #2E7D32; font-size: 18px;">✅ FAÇA</h4>
    `;
    
    const doExample1 = document.createElement('div');
    doExample1.style.cssText = 'margin-bottom: 16px;';
    doExample1.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use labels descritivos e claros:</p>';
    const doCheckbox1 = document.createElement('atlas-checkbox');
    doCheckbox1.setAttribute('label', 'Concordo com os termos de uso e política de privacidade');
    doExample1.appendChild(doCheckbox1);
    
    const doExample2 = document.createElement('div');
    doExample2.style.cssText = 'margin-bottom: 16px;';
    doExample2.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use aria-label quando não há label visual:</p>';
    const doCheckbox2 = document.createElement('atlas-checkbox');
    doCheckbox2.setAttribute('ariaLabel', 'Marcar tarefa como concluída');
    doExample2.appendChild(doCheckbox2);
    
    const doExample3 = document.createElement('div');
    doExample3.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">Use error state com mensagens claras:</p>';
    const doCheckbox3 = document.createElement('atlas-checkbox');
    doCheckbox3.setAttribute('label', 'Li e aceito os termos');
    doCheckbox3.setAttribute('error', '');
    doExample3.appendChild(doCheckbox3);
    const errorMsg = document.createElement('p');
    errorMsg.style.cssText = 'margin: 4px 0 0 28px; color: #B02A37; font-size: 14px;';
    errorMsg.textContent = '⚠️ Este campo é obrigatório';
    doExample3.appendChild(errorMsg);
    
    doSection.appendChild(doExample1);
    doSection.appendChild(doExample2);
    doSection.appendChild(doExample3);
    
    // Seção DON'T ❌
    const dontSection = document.createElement('div');
    dontSection.style.cssText = 'padding: 20px; background: #FFEBEE; border-left: 4px solid #F44336; border-radius: 4px;';
    dontSection.innerHTML = `
      <h4 style="margin: 0 0 16px 0; color: #C62828; font-size: 18px;">❌ NÃO FAÇA</h4>
    `;
    
    const dontExample1 = document.createElement('div');
    dontExample1.style.cssText = 'margin-bottom: 16px;';
    dontExample1.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Labels vagos ou genéricos:</p>';
    const dontCheckbox1 = document.createElement('atlas-checkbox');
    dontCheckbox1.setAttribute('label', 'Clique aqui');
    dontExample1.appendChild(dontCheckbox1);
    const hint1 = document.createElement('p');
    hint1.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint1.textContent = 'Não comunica o que está sendo aceito';
    dontExample1.appendChild(hint1);
    
    const dontExample2 = document.createElement('div');
    dontExample2.style.cssText = 'margin-bottom: 16px;';
    dontExample2.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Checkbox sem label E sem aria-label:</p>';
    const dontCheckbox2 = document.createElement('atlas-checkbox');
    dontExample2.appendChild(dontCheckbox2);
    const hint2 = document.createElement('p');
    hint2.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint2.textContent = 'Inacessível para leitores de tela';
    dontExample2.appendChild(hint2);
    
    const dontExample3 = document.createElement('div');
    dontExample3.innerHTML = '<p style="margin: 0 0 8px 0; font-weight: 600;">❌ Usar disabled quando deveria ser readonly:</p>';
    const dontCheckbox3 = document.createElement('atlas-checkbox');
    dontCheckbox3.setAttribute('label', 'Configuração pré-definida');
    dontCheckbox3.setAttribute('disabled', '');
    dontCheckbox3.setAttribute('checked', '');
    dontExample3.appendChild(dontCheckbox3);
    const hint3 = document.createElement('p');
    hint3.style.cssText = 'margin: 4px 0 0 28px; color: #666; font-size: 13px; font-style: italic;';
    hint3.textContent = 'Disabled sugere "não disponível", use readonly para "visível mas não editável"';
    dontExample3.appendChild(hint3);
    
    dontSection.appendChild(dontExample1);
    dontSection.appendChild(dontExample2);
    dontSection.appendChild(dontExample3);
    
    container.appendChild(doSection);
    container.appendChild(dontSection);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Guia visual de boas práticas e anti-patterns de acessibilidade para checkboxes.'
      }
    }
  }
};
