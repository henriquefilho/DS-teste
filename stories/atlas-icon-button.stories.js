import '../components/web/atlas-icon-button/atlas-icon-button.js';
import '../components/web/atlas-icon/atlas-icon.js';

export default {
  title: 'Components/Atlas Icon Button',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-icon-button');
    
    // Aplicar atributos dinamicamente baseado nos args
    element.setAttribute('icon-name', args.iconName);
    element.setAttribute('color', args.color);
    element.setAttribute('size', args.size);
    
    if (args.disabled) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
    
    if (args.ariaLabel) {
      element.setAttribute('aria-label', args.ariaLabel);
    }
    
    // Event listener para ação
    element.addEventListener('click', args.onClick);
    
    return element;
  },
  argTypes: {
    // ========== CONTENT ==========
    iconName: {
      control: 'text',
      description: 'Nome do ícone a ser exibido (deve corresponder aos ícones do atlas-icon)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'chevron-down' }
      }
    },
    
    // ========== APPEARANCE ==========
    color: {
      control: 'select',
      options: ['secondary', 'primary', 'success', 'warning', 'danger', 'info', 'white'],
      description: 'Cor semântica do botão que define os tokens de background e ícone',
      table: {
        category: 'Appearance',
        type: { summary: "'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'white'" },
        defaultValue: { summary: 'secondary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', 'auto'],
      description: 'Tamanho do botão: sm (24px), md (32px), lg (40px), xl (48px), xxl (56px), auto (20px)',
      table: {
        category: 'Appearance',
        type: { summary: "'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto'" },
        defaultValue: { summary: 'md' }
      }
    },
    
    // ========== ACCESSIBILITY ==========
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade OBRIGATÓRIO para leitores de tela (icon-only buttons precisam de contexto)',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    
    // ========== STATUS ==========
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão, removendo interatividade e aplicando estilo visual disabled',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    
    // ========== ACTIONS ==========
    onClick: {
      action: 'clicked',
      description: 'Evento disparado ao clicar no botão',
      table: { 
        category: 'Actions',
        type: { summary: '() => void' }
      }
    }
  },
  args: {
    iconName: 'chevron-down',
    color: 'secondary',
    size: 'md',
    disabled: false,
    ariaLabel: 'Abrir menu'
  },
  parameters: {
    docs: {
      description: {
        component: `

Botão interativo que utiliza **apenas um ícone** como indicador visual de ação. 

## ⚠️ Acessibilidade Obrigatória

Por ser um botão icon-only (sem texto visível), **você DEVE sempre fornecer um \`aria-label\`** para garantir que leitores de tela entendam a função do botão.



        `
      }
    }
  }
};

// ========== PLAYGROUND (Story Padrão) ==========
export const Playground = {
  parameters: {
    docs: {
      description: {
        story: 'Experimente diferentes combinações de propriedades usando os controles abaixo.'
      }
    }
  }
};

// ========== CORES (Color Variations) ==========
export const AllColors = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; flex-wrap: wrap;';
    
    const colors = ['secondary', 'primary', 'success', 'warning', 'danger', 'info'];
    
    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'check');
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      button.setAttribute('aria-label', `Botão ${color}`);
      
      const label = document.createElement('span');
      label.textContent = color;
      label.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      
      wrapper.appendChild(button);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Todas as variantes de cor disponíveis. Passe o mouse para ver o background ghost aparecer.'
      }
    }
  }
};

export const WhiteVariant = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; padding: 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px;';
    
    const button = document.createElement('atlas-icon-button');
    button.setAttribute('icon-name', 'check');
    button.setAttribute('color', 'white');
    button.setAttribute('size', 'lg');
    button.setAttribute('aria-label', 'Confirmar');
    
    const description = document.createElement('span');
    description.textContent = 'Variante White para fundos escuros';
    description.style.cssText = 'color: white; font-family: "Open Sans", sans-serif;';
    
    container.appendChild(button);
    container.appendChild(description);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Variante `white` (inverse) para uso em fundos escuros ou coloridos. Usa tokens `-inverse`.'
      }
    }
  }
};

// ========== TAMANHOS (Size Variations) ==========
export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 24px; align-items: center; flex-wrap: wrap;';
    
    const sizes = [
      { size: 'auto', label: 'auto (20px)' },
      { size: 'sm', label: 'sm (24px)' },
      { size: 'md', label: 'md (32px)' },
      { size: 'lg', label: 'lg (40px)' },
      { size: 'xl', label: 'xl (48px)' },
      { size: 'xxl', label: 'xxl (56px)' }
    ];
    
    sizes.forEach(({ size, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'cog');
      button.setAttribute('color', 'primary');
      button.setAttribute('size', size);
      button.setAttribute('aria-label', `Configurações ${size}`);
      
      const labelEl = document.createElement('span');
      labelEl.textContent = label;
      labelEl.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      
      wrapper.appendChild(button);
      wrapper.appendChild(labelEl);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Todos os tamanhos disponíveis, do menor (auto) ao maior (xxl).'
      }
    }
  }
};

// ========== ESTADOS (States) ==========
export const DisabledState = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; gap: 16px; align-items: center; flex-wrap: wrap;';
    
    const colors = ['secondary', 'primary', 'success', 'danger'];
    
    colors.forEach(color => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'trash');
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      button.setAttribute('disabled', '');
      button.setAttribute('aria-label', `Excluir (desabilitado)`);
      
      const label = document.createElement('span');
      label.textContent = `${color} disabled`;
      label.style.cssText = 'font-size: 12px; color: #495563; font-family: "Open Sans", sans-serif;';
      
      wrapper.appendChild(button);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Estado desabilitado. Ícone fica cinza (#D1D6DC) e cursor muda para `not-allowed`.'
      }
    }
  }
};

export const InteractiveStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;';
    
    const states = [
      { state: 'Default', instruction: 'Estado padrão - sem background' },
      { state: 'Hover', instruction: 'Passe o mouse - background ghost aparece' },
      { state: 'Pressed', instruction: 'Clique e segure - background escurece' },
      { state: 'Focus', instruction: 'Navegue com Tab - outline azul aparece' }
    ];
    
    states.forEach(({ state, instruction }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 16px;';
      
      const button = document.createElement('atlas-icon-button');
      button.setAttribute('icon-name', 'heart');
      button.setAttribute('color', 'danger');
      button.setAttribute('size', 'lg');
      button.setAttribute('aria-label', `Favoritar - ${state}`);
      
      const textWrapper = document.createElement('div');
      textWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 4px;';
      
      const stateLabel = document.createElement('strong');
      stateLabel.textContent = state;
      stateLabel.style.cssText = 'font-family: "Open Sans", sans-serif; color: #212b36;';
      
      const instructionText = document.createElement('span');
      instructionText.textContent = instruction;
      instructionText.style.cssText = 'font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381;';
      
      textWrapper.appendChild(stateLabel);
      textWrapper.appendChild(instructionText);
      
      row.appendChild(button);
      row.appendChild(textWrapper);
      container.appendChild(row);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração visual dos estados interativos. Experimente interagir com os botões para ver as transições.'
      }
    }
  }
};

// ========== COMMON USE CASES ==========
export const CommonUseCases = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';
    
    // Toolbar Example
    const toolbarSection = document.createElement('div');
    toolbarSection.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    
    const toolbarTitle = document.createElement('h3');
    toolbarTitle.textContent = 'Toolbar de Ações';
    toolbarTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';
    
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'display: flex; gap: 8px; padding: 8px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: fit-content;';
    
    const toolbarIcons = [
      { icon: 'edit', label: 'Editar' },
      { icon: 'copy', label: 'Copiar' },
      { icon: 'trash', label: 'Excluir', color: 'danger' },
      { icon: 'dots-vertical', label: 'Mais opções' }
    ];
    
    toolbarIcons.forEach(({ icon, label, color }) => {
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', color || 'secondary');
      btn.setAttribute('size', 'sm');
      btn.setAttribute('aria-label', label);
      toolbar.appendChild(btn);
    });
    
    toolbarSection.appendChild(toolbarTitle);
    toolbarSection.appendChild(toolbar);
    
    // Close Button Example
    const closeSection = document.createElement('div');
    closeSection.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    
    const closeTitle = document.createElement('h3');
    closeTitle.textContent = 'Modal Close Button';
    closeTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0; font-size: 16px; color: #212b36;';
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: relative; padding: 24px; background: white; border: 1px solid #dfe3e8; border-radius: 8px; width: 400px;';
    
    const closeBtn = document.createElement('atlas-icon-button');
    closeBtn.setAttribute('icon-name', 'x');
    closeBtn.setAttribute('color', 'secondary');
    closeBtn.setAttribute('size', 'sm');
    closeBtn.setAttribute('aria-label', 'Fechar modal');
    closeBtn.style.cssText = 'position: absolute; top: 12px; right: 12px;';
    
    const modalContent = document.createElement('p');
    modalContent.textContent = 'Conteúdo do modal...';
    modalContent.style.cssText = 'font-family: "Open Sans", sans-serif; color: #637381; margin: 0;';
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    
    closeSection.appendChild(closeTitle);
    closeSection.appendChild(modal);
    
    container.appendChild(toolbarSection);
    container.appendChild(closeSection);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Exemplos de uso comum: toolbars de ação e botões de fechar.'
      }
    }
  }
};

// ========== ACCESSIBILITY ==========
export const WithAriaLabel = {
  args: {
    iconName: 'trash',
    color: 'danger',
    size: 'md',
    ariaLabel: 'Excluir item permanentemente da lista'
  },
  parameters: {
    docs: {
      description: {
        story: `
**⚠️ CRÍTICO:** Icon buttons sempre devem ter \`aria-label\`.

Leitores de tela não conseguem interpretar ícones visuais. O \`aria-label\` fornece contexto:

\`\`\`html
<!-- ❌ Ruim: Sem contexto -->
<atlas-icon-button icon-name="trash"></atlas-icon-button>

<!-- ✅ Bom: Com contexto claro -->
<atlas-icon-button 
  icon-name="trash"
  aria-label="Excluir item permanentemente da lista">
</atlas-icon-button>
\`\`\`

**Dicas para bons labels:**
- Seja específico sobre a ação ("Excluir usuário" > "Excluir")
- Inclua contexto se necessário ("Abrir menu de navegação" > "Menu")
- Evite redundância ("Botão fechar" > "Fechar")
        `
      }
    }
  }
};

export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #f8f9fa; border-radius: 8px;';
    
    const title = document.createElement('h3');
    title.textContent = '⌨️ Navegação por Teclado';
    title.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 8px 0; font-size: 16px; color: #212b36;';
    
    const instructions = document.createElement('p');
    instructions.innerHTML = '<strong>Instruções:</strong> Use a tecla <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Tab</kbd> para navegar entre os botões. Pressione <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Enter</kbd> ou <kbd style="padding: 2px 6px; background: white; border: 1px solid #dfe3e8; border-radius: 4px; font-family: monospace;">Space</kbd> para ativar.';
    instructions.style.cssText = 'font-family: "Open Sans", sans-serif; font-size: 14px; color: #637381; margin: 0 0 16px 0;';
    
    const buttonsRow = document.createElement('div');
    buttonsRow.style.cssText = 'display: flex; gap: 16px; padding: 16px; background: white; border-radius: 8px;';
    
    const actions = [
      { icon: 'arrow-left', label: 'Voltar', color: 'secondary' },
      { icon: 'check', label: 'Confirmar', color: 'success' },
      { icon: 'x', label: 'Cancelar', color: 'danger' }
    ];
    
    actions.forEach(({ icon, label, color }) => {
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', color);
      btn.setAttribute('size', 'lg');
      btn.setAttribute('aria-label', label);
      buttonsRow.appendChild(btn);
    });
    
    container.appendChild(title);
    container.appendChild(instructions);
    container.appendChild(buttonsRow);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração de navegação por teclado. Note o outline azul que aparece ao focar com `Tab`.'
      }
    }
  }
};

export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';
    
    // Boas Práticas (Green)
    const goodSection = document.createElement('div');
    goodSection.style.cssText = 'padding: 20px; background: #d4edda; border-left: 4px solid #28a745; border-radius: 8px;';
    
    const goodTitle = document.createElement('h3');
    goodTitle.textContent = '✅ Boas Práticas';
    goodTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #155724;';
    
    const goodList = document.createElement('div');
    goodList.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    
    const goodExamples = [
      {
        icon: 'trash',
        label: 'Excluir item',
        ariaLabel: 'Excluir item da lista de compras',
        description: 'aria-label específico e descritivo'
      },
      {
        icon: 'plus',
        label: 'Adicionar',
        ariaLabel: 'Adicionar novo produto ao carrinho',
        description: 'Contexto claro da ação'
      }
    ];
    
    goodExamples.forEach(({ icon, label, ariaLabel, description }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 12px;';
      
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', 'success');
      btn.setAttribute('size', 'md');
      btn.setAttribute('aria-label', ariaLabel);
      
      const text = document.createElement('div');
      text.style.cssText = 'display: flex; flex-direction: column;';
      text.innerHTML = `
        <strong style="font-family: 'Open Sans', sans-serif; color: #155724;">${label}</strong>
        <code style="font-size: 12px; color: #155724; background: rgba(40, 167, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">aria-label="${ariaLabel}"</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #155724; margin-top: 4px;">${description}</span>
      `;
      
      row.appendChild(btn);
      row.appendChild(text);
      goodList.appendChild(row);
    });
    
    goodSection.appendChild(goodTitle);
    goodSection.appendChild(goodList);
    
    // Anti-Patterns (Red)
    const badSection = document.createElement('div');
    badSection.style.cssText = 'padding: 20px; background: #f8d7da; border-left: 4px solid #dc3545; border-radius: 8px;';
    
    const badTitle = document.createElement('h3');
    badTitle.textContent = '❌ Anti-Patterns (Evite)';
    badTitle.style.cssText = 'font-family: "Open Sans", sans-serif; margin: 0 0 16px 0; color: #721c24;';
    
    const badList = document.createElement('div');
    badList.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    
    const badExamples = [
      {
        icon: 'trash',
        label: 'Sem aria-label',
        ariaLabel: '',
        description: '❌ Leitores de tela não entendem o ícone'
      },
      {
        icon: 'x',
        label: 'Label genérico',
        ariaLabel: 'Botão',
        description: '❌ "Botão" não descreve a ação'
      }
    ];
    
    badExamples.forEach(({ icon, label, ariaLabel, description }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 12px;';
      
      const btn = document.createElement('atlas-icon-button');
      btn.setAttribute('icon-name', icon);
      btn.setAttribute('color', 'danger');
      btn.setAttribute('size', 'md');
      if (ariaLabel) {
        btn.setAttribute('aria-label', ariaLabel);
      }
      
      const text = document.createElement('div');
      text.style.cssText = 'display: flex; flex-direction: column;';
      text.innerHTML = `
        <strong style="font-family: 'Open Sans', sans-serif; color: #721c24;">${label}</strong>
        <code style="font-size: 12px; color: #721c24; background: rgba(220, 53, 69, 0.1); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">${ariaLabel ? `aria-label="${ariaLabel}"` : 'sem aria-label'}</code>
        <span style="font-family: 'Open Sans', sans-serif; font-size: 13px; color: #721c24; margin-top: 4px;">${description}</span>
      `;
      
      row.appendChild(btn);
      row.appendChild(text);
      badList.appendChild(row);
    });
    
    badSection.appendChild(badTitle);
    badSection.appendChild(badList);
    
    container.appendChild(goodSection);
    container.appendChild(badSection);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Guia visual comparando boas práticas (✅) e anti-patterns (❌) de acessibilidade.'
      }
    }
  }
};
