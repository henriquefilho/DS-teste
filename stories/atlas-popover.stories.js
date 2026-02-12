/**
 * # Atlas Popover
 * 
 * Container flutuante que exibe informações e ações contextuais. Acionado quando o usuário 
 * clica ou toca em um elemento específico e aparece sempre ancorado a este elemento.
 * 
 * **Status:** Stable ✅
 * 
 * ## Características
 * - 9 posições de seta (top, bottom, side, none)
 * - Suporte a título, texto e imagem
 * - 3 tipos de ação (none, button, link)
 * - Botão de fechar opcional
 * - Eventos customizados (close, action)
 * - ESC key para fechar
 * - 100% tokens do Design System
 * - Acessibilidade com ARIA
 * 
 * ## Implementação Técnica
 * - Seta implementada com CSS puro (border-triangle)
 * - Shadow DOM para encapsulamento
 * - Zero dependências de SVG/imagens
 */

import '../components/web/atlas-popover/atlas-popover.js';
import '../components/web/atlas-button/atlas-button.js';
import '../components/web/atlas-link-button/atlas-link-button.js';

export default {
  title: 'Components/Atlas Popover',
  tags: ['autodocs'],
  render: (args) => {
    const popover = document.createElement('atlas-popover');
    
    // Arrow position
    popover.setAttribute('arrow', args.arrow);
    
    // Content
    if (args.title) {
      popover.setAttribute('title', args.title);
    } else {
      popover.removeAttribute('title');
    }
    popover.setAttribute('text', args.text);
    
    // Image
    if (args.imageSrc) {
      popover.setAttribute('image-src', args.imageSrc);
      popover.setAttribute('image-alt', args.imageAlt || '');
    } else {
      popover.removeAttribute('image-src');
      popover.removeAttribute('image-alt');
    }
    
    // Action
    popover.setAttribute('action-type', args.actionType);
    if (args.actionType !== 'none') {
      popover.setAttribute('action-label', args.actionLabel);
      if (args.actionType === 'link') {
        popover.setAttribute('action-href', args.actionHref);
      }
    }
    
    // State
    if (args.closable) {
      popover.setAttribute('closable', '');
    } else {
      popover.removeAttribute('closable');
    }
    
    if (args.open) {
      popover.setAttribute('open', '');
    } else {
      popover.removeAttribute('open');
    }
    
    // Sizing
    if (args.maxWidth) {
      popover.setAttribute('max-width', args.maxWidth);
    }

    // Event listeners for Storybook Actions
    popover.addEventListener('atlas-popover-close', (e) => {
      console.log('atlas-popover-close', e.detail);
      args.onClose?.(e.detail);
    });

    popover.addEventListener('atlas-popover-action', (e) => {
      console.log('atlas-popover-action', e.detail);
      args.onAction?.(e.detail);
    });
    
    // Wrapper for better visual in Storybook
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
      padding: 40px;
      background: #f5f5f5;
    `;
    wrapper.appendChild(popover);
    
    return wrapper;
  },
  argTypes: {
    // Arrow Position
    arrow: {
      control: 'select',
      options: [
        'top-center',
        'top-left',
        'top-right',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'side-left',
        'side-right',
        'none'
      ],
      description: 'Posição da seta indicadora que aponta para o elemento acionador',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-center' },
        category: 'Appearance'
      }
    },
    
    // Content
    title: {
      control: 'text',
      description: 'Título do popover (opcional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content'
      }
    },
    text: {
      control: 'text',
      description: 'Texto do corpo do popover (obrigatório)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content'
      }
    },
    
    // Image
    imageSrc: {
      control: 'text',
      description: 'URL da imagem opcional',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content'
      }
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo da imagem',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content'
      }
    },
    
    // Action
    actionType: {
      control: 'select',
      options: ['none', 'button', 'link'],
      description: 'Tipo de ação no footer do popover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'Action'
      }
    },
    actionLabel: {
      control: 'text',
      description: 'Label do botão ou link de ação',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
        category: 'Action'
      }
    },
    actionHref: {
      control: 'text',
      description: 'URL do link (quando action-type="link")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
        category: 'Action'
      }
    },
    
    // State
    closable: {
      control: 'boolean',
      description: 'Exibe botão X para fechar o popover',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
        category: 'State'
      }
    },
    open: {
      control: 'boolean',
      description: 'Define se o popover está visível',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'State'
      }
    },
    
    // Sizing
    maxWidth: {
      control: 'text',
      description: 'Largura máxima do popover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '278px' },
        category: 'Layout'
      }
    },

    // Events
    onClose: {
      action: 'atlas-popover-close',
      description: 'Disparado quando o popover é fechado',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<{ reason: string }>' }
      }
    },
    onAction: {
      action: 'atlas-popover-action',
      description: 'Disparado quando a ação é clicada',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<{ actionType: string, label: string }>' }
      }
    }
  },
  args: {
    arrow: 'top-center',
    title: 'Title',
    text: 'Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.',
    imageSrc: '',
    imageAlt: '',
    actionType: 'none',
    actionLabel: 'Button',
    actionHref: '#',
    closable: true,
    open: true,
    maxWidth: '278px'
  }
};

/**
 * Popover padrão com título e texto. Este é o uso mais comum do componente.
 */
export const Default = {};

/**
 * Popover simples sem título, apenas com texto informativo.
 */
export const TextOnly = {
  args: {
    title: '',
    text: 'Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl et purus pharetra euismod.'
  }
};

/**
 * Popover com botão de ação no footer.
 */
export const WithButton = {
  args: {
    title: 'Título',
    text: 'Clique no botão para realizar uma ação.',
    actionType: 'button',
    actionLabel: 'Confirmar'
  }
};

/**
 * Popover com link de ação no footer.
 */
export const WithLink = {
  args: {
    title: 'Saiba Mais',
    text: 'Acesse a documentação para mais informações.',
    actionType: 'link',
    actionLabel: 'Ver Documentação',
    actionHref: 'https://example.com'
  }
};

/**
 * Popover com imagem ilustrativa no topo.
 */
export const WithImage = {
  args: {
    title: 'Novo Recurso',
    text: 'Confira a nova funcionalidade disponível no sistema.',
    imageSrc: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=400&h=200&fit=crop',
    imageAlt: 'Exemplo de novo recurso',
    actionType: 'button',
    actionLabel: 'Explorar'
  }
};

/**
 * Popover completo com todos os elementos: imagem, título, texto e ação.
 */
export const Complete = {
  args: {
    title: 'Título Completo',
    text: 'Este é um popover completo com imagem, título, texto e ação. Use-o quando precisar de máximo contexto.',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    imageAlt: 'Imagem de exemplo',
    actionType: 'button',
    actionLabel: 'Entendi'
  }
};

/**
 * Popover sem botão de fechar (não-fechável pelo usuário).
 */
export const NotClosable = {
  args: {
    title: 'Importante',
    text: 'Esta mensagem não pode ser fechada manualmente.',
    closable: false
  }
};

/**
 * Popover sem seta indicadora.
 */
export const NoArrow = {
  args: {
    arrow: 'none',
    title: 'Sem Seta',
    text: 'Este popover não possui seta indicadora.'
  }
};

/**
 * ## Posições da Seta
 * 
 * O popover suporta 9 posições diferentes para a seta:
 * - **Top:** center, left, right
 * - **Bottom:** center, left, right  
 * - **Side:** left, right
 * - **None:** sem seta
 */
export const ArrowPositions = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `;

    const positions = [
      { arrow: 'top-center', label: 'Top Center' },
      { arrow: 'top-left', label: 'Top Left' },
      { arrow: 'top-right', label: 'Top Right' },
      { arrow: 'bottom-center', label: 'Bottom Center' },
      { arrow: 'bottom-left', label: 'Bottom Left' },
      { arrow: 'bottom-right', label: 'Bottom Right' },
      { arrow: 'side-left', label: 'Side Left' },
      { arrow: 'side-right', label: 'Side Right' },
      { arrow: 'none', label: 'No Arrow' }
    ];

    positions.forEach(({ arrow, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;

      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = `
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;

      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;

      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', arrow);
      popover.setAttribute('title', label);
      popover.setAttribute('text', `Popover com seta ${arrow}`);
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');

      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });

    return container;
  }
};

/**
 * ## Tipos de Ação
 * 
 * O componente suporta três tipos de ação no footer:
 * - **None:** Sem ação
 * - **Button:** Botão de ação
 * - **Link:** Link de navegação
 */
export const ActionTypes = {
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 40px;
      background: #f5f5f5;
    `;

    const types = [
      { type: 'none', label: 'None', desc: 'Sem ação' },
      { type: 'button', label: 'Button', desc: 'Com botão' },
      { type: 'link', label: 'Link', desc: 'Com link' }
    ];

    types.forEach(({ type, label, desc }) => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      `;

      const labelEl = document.createElement('div');
      labelEl.textContent = label;
      labelEl.style.cssText = `
        font-size: 14px;
        font-weight: 600;
        color: #5E6877;
      `;

      const popoverWrapper = document.createElement('div');
      popoverWrapper.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
      `;

      const popover = document.createElement('atlas-popover');
      popover.setAttribute('arrow', 'top-center');
      popover.setAttribute('title', label);
      popover.setAttribute('text', desc);
      popover.setAttribute('action-type', type);
      popover.setAttribute('action-label', type === 'link' ? 'Ver mais' : 'Ação');
      popover.setAttribute('open', '');
      popover.setAttribute('closable', '');

      popoverWrapper.appendChild(popover);
      wrapper.appendChild(labelEl);
      wrapper.appendChild(popoverWrapper);
      container.appendChild(wrapper);
    });

    return container;
  }
};

/**
 * ## Responsividade
 * 
 * O popover adapta-se automaticamente para diferentes tamanhos de tela:
 * - **Desktop:** min-width 278px, seta visível
 * - **Mobile:** min-width 328px, seta oculta
 */
export const Responsive = {
  args: {
    title: 'Popover Responsivo',
    text: 'Redimensione a janela para ver a adaptação mobile (< 768px). A seta desaparece em telas menores.',
    actionType: 'button',
    actionLabel: 'OK'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' }
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' }
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' }
        }
      }
    }
  }
};

/**
 * ## Eventos Customizados
 * 
 * O componente dispara eventos customizados que podem ser capturados:
 * - `atlas-popover-close`: Quando o popover é fechado
 * - `atlas-popover-action`: Quando a ação é clicada
 * 
 * Abra o console do navegador para ver os eventos sendo disparados.
 */
export const CustomEvents = {
  args: {
    title: 'Teste de Eventos',
    text: 'Clique no botão X ou na ação para disparar eventos. Veja o console do navegador.',
    actionType: 'button',
    actionLabel: 'Disparar Ação'
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 40px;
      background: #f5f5f5;
    `;

    const popoverWrapper = document.createElement('div');
    popoverWrapper.style.cssText = `
      display: flex;
      justify-content: center;
      min-height: 200px;
    `;

    const popover = document.createElement('atlas-popover');
    popover.setAttribute('arrow', args.arrow);
    popover.setAttribute('title', args.title);
    popover.setAttribute('text', args.text);
    popover.setAttribute('action-type', args.actionType);
    popover.setAttribute('action-label', args.actionLabel);
    popover.setAttribute('open', '');
    popover.setAttribute('closable', '');

    const console = document.createElement('div');
    console.style.cssText = `
      background: #1D2125;
      color: #E5E8EC;
      padding: 16px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      max-height: 200px;
      overflow-y: auto;
    `;
    console.innerHTML = '<div style="font-weight: 600; margin-bottom: 8px;">📋 Console de Eventos:</div>';

    const logEvent = (name, detail) => {
      const timestamp = new Date().toLocaleTimeString();
      const line = document.createElement('div');
      line.textContent = `[${timestamp}] ${name}: ${JSON.stringify(detail)}`;
      line.style.marginTop = '4px';
      console.appendChild(line);
    };

    popover.addEventListener('atlas-popover-close', (e) => {
      logEvent('atlas-popover-close', e.detail);
    });

    popover.addEventListener('atlas-popover-action', (e) => {
      logEvent('atlas-popover-action', e.detail);
    });

    popoverWrapper.appendChild(popover);
    wrapper.appendChild(popoverWrapper);
    wrapper.appendChild(console);

    return wrapper;
  }
};
