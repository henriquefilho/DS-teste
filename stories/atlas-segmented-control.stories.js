import '../components/web/atlas-segmented-control/atlas-segmented-control.js';
import '../components/web/atlas-helper-text/atlas-helper-text.js';

export default {
  title: 'Components/Atlas Segmented Control',
  tags: ['autodocs'],
  render: (args) => {
    const element = document.createElement('atlas-segmented-control');
    
    // Content
    if (args.labels) {
      element.setAttribute('labels', args.labels);
    }
    
    // Appearance
    element.setAttribute('size', args.size);
    
    // Status
    if (args.disabled) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
    
    element.setAttribute('selected-index', args.selectedIndex.toString());
    
    if (args.helperText) {
      element.setAttribute('helper-text', args.helperText);
    } else {
      element.removeAttribute('helper-text');
    }
    
    // Accessibility
    if (args.ariaLabel) {
      element.setAttribute('aria-label', args.ariaLabel);
    } else {
      element.removeAttribute('aria-label');
    }
    
    // Actions
    element.addEventListener('change', (e) => {
      args.onChange(e.detail);
    });
    
    return element;
  },
  argTypes: {
    // ========== CONTENT ==========
    labels: {
      control: 'text',
      description: 'Labels dos botões separados por vírgula (suporta 2 ou 3 botões)',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Label 1,Label 2' }
      }
    },
    selectedIndex: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
      description: 'Índice do botão selecionado (0-indexed)',
      table: {
        category: 'Content',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    
    // ========== APPEARANCE ==========
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do componente',
      table: {
        category: 'Appearance',
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' }
      }
    },
    
    // ========== ACCESSIBILITY ==========
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade para leitores de tela',
      table: {
        category: 'Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    
    // ========== STATUS ==========
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente',
      table: {
        category: 'Status',
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda exibido quando disabled=true',
      table: {
        category: 'Status',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      if: { arg: 'disabled', truthy: true }
    },
    
    // ========== ACTIONS ==========
    onChange: {
      action: 'change',
      description: 'Evento disparado quando a seleção muda',
      table: {
        category: 'Actions',
        type: { summary: '(detail: { selectedIndex: number, label: string }) => void' }
      }
    }
  },
  args: {
    labels: 'Label 1,Label 2',
    size: 'md',
    disabled: false,
    selectedIndex: 0,
    helperText: '',
    ariaLabel: ''
  }
};

// ========== PLAYGROUND ==========
export const Playground = {
  args: {
    labels: 'Opção 1,Opção 2',
    size: 'md',
    selectedIndex: 0
  }
};

// ========== SIZE VARIATIONS ==========
export const Small = {
  args: {
    labels: 'Small 1,Small 2',
    size: 'sm',
    selectedIndex: 0
  }
};

export const Medium = {
  args: {
    labels: 'Medium 1,Medium 2',
    size: 'md',
    selectedIndex: 0
  }
};

export const Large = {
  args: {
    labels: 'Large 1,Large 2',
    size: 'lg',
    selectedIndex: 0
  }
};

// ========== BUTTON VARIATIONS ==========
export const TwoButtons = {
  args: {
    labels: 'Lista,Grade',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração com 2 botões - ideal para alternar entre visualizações binárias como Lista/Grade.'
      }
    }
  }
};

export const ThreeButtons = {
  args: {
    labels: 'Dia,Semana,Mês',
    size: 'md',
    selectedIndex: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração com 3 botões - útil para seletores de período ou categorias relacionadas.'
      }
    }
  }
};

// ========== SELECTION STATES ==========
export const SecondSelected = {
  args: {
    labels: 'Primeiro,Segundo,Terceiro',
    size: 'md',
    selectedIndex: 1
  }
};

export const ThirdSelected = {
  args: {
    labels: 'Primeiro,Segundo,Terceiro',
    size: 'md',
    selectedIndex: 2
  }
};

// ========== DISABLED STATES ==========
export const Disabled = {
  args: {
    labels: 'Opção 1,Opção 2',
    size: 'md',
    disabled: true,
    selectedIndex: 0
  }
};

export const DisabledWithHelperText = {
  args: {
    labels: 'Bloqueado,Disponível',
    size: 'md',
    disabled: true,
    selectedIndex: 0,
    helperText: 'Esta funcionalidade está temporariamente desabilitada'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use helper-text para explicar por que o controle está desabilitado.'
      }
    }
  }
};

// ========== REAL WORLD EXAMPLES ==========
export const ViewSwitcher = {
  args: {
    labels: 'Lista,Grade',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: alternar entre visualização de lista e grade de conteúdo.'
      }
    }
  }
};

export const TimePeriodSelector = {
  args: {
    labels: 'Hoje,Esta Semana,Este Mês',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: seletor de período temporal para dashboards e relatórios.'
      }
    }
  }
};

export const ChartTypeSelector = {
  args: {
    labels: 'Linha,Barra,Pizza',
    size: 'md',
    selectedIndex: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso de uso comum: alternar entre diferentes tipos de visualização de gráficos.'
      }
    }
  }
};

// ========== ALL SIZES COMPARISON ==========
export const AllSizes = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 400px;';
    
    const sizes = [
      { size: 'sm', height: '32px' },
      { size: 'md', height: '40px' },
      { size: 'lg', height: '48px' }
    ];
    
    sizes.forEach(({ size, height }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      
      const label = document.createElement('p');
      label.textContent = `Size: ${size} (${height})`;
      label.style.cssText = 'margin: 0; font-family: "Open Sans", sans-serif; font-size: 14px; color: #4B5563;';
      
      const control = document.createElement('atlas-segmented-control');
      control.setAttribute('labels', 'Opção 1,Opção 2');
      control.setAttribute('size', size);
      control.setAttribute('selected-index', '0');
      
      wrapper.appendChild(label);
      wrapper.appendChild(control);
      container.appendChild(wrapper);
    });
    
    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== INTERACTIVE EXAMPLE ==========
export const InteractiveDemo = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 16px; max-width: 500px;';
    
    const title = document.createElement('h3');
    title.textContent = 'Selecione uma visualização:';
    title.style.cssText = 'margin: 0; font-family: "Open Sans", sans-serif; font-size: 18px; font-weight: 600;';
    
    const control = document.createElement('atlas-segmented-control');
    control.setAttribute('labels', 'Lista,Cards,Tabela');
    control.setAttribute('size', 'md');
    control.setAttribute('selected-index', '0');
    
    const display = document.createElement('div');
    display.style.cssText = 'padding: 24px; background: #F3F4F6; border-radius: 8px; font-family: "Open Sans", sans-serif;';
    display.innerHTML = '<strong>Visualização Selecionada:</strong> Lista';
    
    control.addEventListener('change', (e) => {
      display.innerHTML = `<strong>Visualização Selecionada:</strong> ${e.detail.label} (índice: ${e.detail.selectedIndex})`;
    });
    
    container.appendChild(title);
    container.appendChild(control);
    container.appendChild(display);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração interativa do evento `change` capturando selectedIndex e label.'
      }
    }
  }
};

// ========== ACCESSIBILITY ==========
export const WithAriaLabel = {
  args: {
    labels: 'Lista,Grade',
    ariaLabel: 'Selecione o modo de visualização dos resultados'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use aria-label para fornecer contexto adicional sobre o propósito do controle segmentado para leitores de tela.'
      }
    }
  }
};

export const FocusStates = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px; max-width: 600px;';
    
    const instruction = document.createElement('div');
    instruction.style.cssText = 'padding: 16px; background: #DBEAFE; border-left: 4px solid #3B82F6; border-radius: 4px;';
    instruction.innerHTML = `
      <p style="margin: 0 0 8px 0; font-weight: 600; font-family: 'Open Sans', sans-serif;">⌨️ Navegação por Teclado:</p>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px;">
        <li><strong>Tab:</strong> Navega para o próximo botão do controle</li>
        <li><strong>Shift + Tab:</strong> Navega para o botão anterior</li>
        <li><strong>Enter/Space:</strong> Seleciona o botão focado</li>
        <li><strong>Setas ←/→:</strong> Navegação entre botões (comportamento nativo do navegador)</li>
      </ul>
    `;
    
    const controls = document.createElement('div');
    controls.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    
    ['sm', 'md', 'lg'].forEach((size) => {
      const control = document.createElement('atlas-segmented-control');
      control.setAttribute('labels', 'Primeiro,Segundo,Terceiro');
      control.setAttribute('size', size);
      control.setAttribute('selected-index', '0');
      control.setAttribute('aria-label', `Controle segmentado tamanho ${size}`);
      controls.appendChild(control);
    });
    
    container.appendChild(instruction);
    container.appendChild(controls);
    
    return container;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstração de estados de foco e navegação por teclado. Use Tab para navegar entre botões e Enter/Space para selecionar.'
      }
    }
  }
};

export const AccessibilityBestPractices = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';
    
    // Card de boas práticas
    const goodPractices = document.createElement('div');
    goodPractices.style.cssText = 'padding: 20px; background: #D1FAE5; border-left: 4px solid #10B981; border-radius: 8px;';
    goodPractices.innerHTML = `
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #065F46;">✅ Boas Práticas</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #065F46;">
        <li>Use labels claros e concisos (1-2 palavras)</li>
        <li>Forneça aria-label quando o contexto não for óbvio</li>
        <li>Mantenha o número de opções entre 2-3 para clareza</li>
        <li>Use helper-text quando desabilitado para explicar o motivo</li>
        <li>Garanta contraste adequado dos botões selecionados</li>
      </ul>
    `;
    
    const goodExample = document.createElement('atlas-segmented-control');
    goodExample.setAttribute('labels', 'Lista,Grade');
    goodExample.setAttribute('size', 'md');
    goodExample.setAttribute('selected-index', '0');
    goodExample.setAttribute('aria-label', 'Selecione o modo de visualização');
    goodExample.style.marginTop = '12px';
    
    goodPractices.appendChild(goodExample);
    
    // Card de anti-patterns
    const badPractices = document.createElement('div');
    badPractices.style.cssText = 'padding: 20px; background: #FEE2E2; border-left: 4px solid #EF4444; border-radius: 8px;';
    badPractices.innerHTML = `
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #991B1B;">❌ Anti-Patterns (Evite)</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #991B1B;">
        <li>Labels muito longos que causam truncamento excessivo</li>
        <li>Mais de 3 botões (use dropdown ou tabs nesse caso)</li>
        <li>Desabilitar sem explicação (sempre use helper-text)</li>
        <li>Usar para navegação entre páginas (use tabs)</li>
        <li>Omitir aria-label em contextos ambíguos</li>
      </ul>
    `;
    
    const badExample = document.createElement('atlas-segmented-control');
    badExample.setAttribute('labels', 'Primeira Opção Muito Longa,Segunda Opção Muito Longa');
    badExample.setAttribute('size', 'md');
    badExample.setAttribute('selected-index', '0');
    badExample.style.marginTop = '12px';
    
    badPractices.appendChild(badExample);
    
    // Card de quando usar
    const whenToUse = document.createElement('div');
    whenToUse.style.cssText = 'padding: 20px; background: #E0E7FF; border-left: 4px solid #6366F1; border-radius: 8px;';
    whenToUse.innerHTML = `
      <h4 style="margin: 0 0 12px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">💡 Quando Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li><strong>Visualizações:</strong> Alternar entre Lista/Grade/Cards</li>
        <li><strong>Períodos:</strong> Dia/Semana/Mês em dashboards</li>
        <li><strong>Filtros:</strong> Todos/Ativos/Inativos</li>
        <li><strong>Tipos de gráfico:</strong> Linha/Barra/Pizza</li>
      </ul>
      <h4 style="margin: 16px 0 8px 0; font-family: 'Open Sans', sans-serif; color: #3730A3;">🚫 Quando NÃO Usar</h4>
      <ul style="margin: 0; padding-left: 24px; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #3730A3;">
        <li>Mais de 3 opções → use Dropdown</li>
        <li>Navegação entre seções → use Tabs</li>
        <li>Ações permanentes → use Buttons</li>
        <li>Seleção múltipla → use Checkboxes</li>
      </ul>
    `;
    
    container.appendChild(goodPractices);
    container.appendChild(badPractices);
    container.appendChild(whenToUse);
    
    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};
