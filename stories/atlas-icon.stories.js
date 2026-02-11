/**
 * # Atlas Icon
 * 
 * Sistema de ícones do Design System baseado em icon font customizado,
 * com suporte a múltiplos tamanhos e mais de 200 ícones disponíveis.
 * 
 * **Status:** Stable ✅
 * 
 * ## Características
 * - 6 tamanhos predefinidos (XS: 8px até XXL: 48px)
 * - +200 ícones vetoriais otimizados
 * - Renderização via icon font para melhor performance
 * - Suporte completo a acessibilidade com aria-hidden
 */

import '../components/web/atlas-icon/atlas-icon.js';

// Lista completa de ícones disponíveis
const availableIcons = [
  "address-book", "alert", "alert-circle", "alert-triangle", "alert-triangle-filled",
  "align-justify", "android", "apps", "arrow-down", "arrow-down-circle", "arrow-left",
  "arrow-right", "arrow-right-left", "arrow-up", "arrow-up-circle", "arrow-up-right",
  "asaas-logo", "award", "backspace", "banco-abc-brasil", "banco-bmg", "banco-brb",
  "banco-da-amazonia", "banco-do-brasil", "banco-industrial-do-brasil", "banco-original",
  "banese", "bank", "bank-of-america", "banpara", "bar-chart", "barcode", "bars",
  "base-logo", "bell", "bnb", "box", "bradesco", "briefcase", "btg-pactual", "c6-bank",
  "caixa", "calendar", "calendar-check", "calendar-clock", "calendar-magnifier",
  "calendar-sync", "camera", "card", "card-mastercard", "cash-machine-with-ticket",
  "cash-machine-with-ticket-1", "celebrate", "chart-line", "check", "check-circle",
  "check-filled", "chevron-down", "chevron-left", "chevron-right", "chevron-up",
  "circle", "citi-bank", "clock", "clock-filled", "cloud", "cog", "color-picker",
  "companies", "concentric-circles", "contactless", "copy", "corner-up-right",
  "credisis", "cutlery", "dashboard", "daycoval", "deutsche-bank", "discord",
  "dollar-sign", "dollar-zap", "double-check", "download", "email", "envelope",
  "equal", "external-link", "eye", "eye-filled", "eye-off", "eye-off-filled",
  "facebook", "file", "file-check", "file-dollar", "file-import", "file-invoice",
  "file-plus", "file-text", "file-users", "files", "filter", "flapp-store-logo",
  "flash", "gift", "github", "globe", "hammer", "hand-card", "hand-holding-money",
  "hand-shake", "headset", "help-circle", "hierarchy", "home", "id-card", "image",
  "info", "instagram", "inter", "itau", "key", "keyboard", "link", "linkedin",
  "list", "loader", "lock", "lock-filled", "log-in", "magnifier", "mail-box",
  "map-pin", "market-pin", "maximize", "megaphone", "mercado-pago", "message-circle",
  "message-circle-dollar", "message-circles", "mic", "minus", "minus-circle",
  "money", "money-filled", "money-notes", "monitor", "monitor-chart-up", "moon",
  "neon", "nubank", "open-finance", "pagbank", "paperclip", "pencil", "percentage",
  "phone", "pic-pay", "pix", "pix-filled", "play", "plus", "plus-circle", "power",
  "printer", "qrcode", "quotation-marks", "receipt", "refresh", "refresh-dollar",
  "repeat", "reverse-clock", "rotate", "rotate-cw", "rotate-dollar", "safra",
  "santander", "send", "serasa", "share", "shield", "shopping-bag",
  "shopping-cart-down", "shopping-cart-right", "sicoob", "sicredi", "slash",
  "sliders", "smartphone", "smartphone-contactless", "smile-face", "sort",
  "sort-amount-down", "sort-amount-up", "sort-horizontal", "spanner", "split-arrows",
  "spotify", "square", "square-signs", "star", "star-filled", "stone", "sun",
  "tag", "target", "three-dots", "three-dots-horinzontal", "thumbs-down",
  "thumbs-up", "ticket", "tiktok", "trash", "truck", "unlink", "unlock",
  "unlock-filled", "upload", "user", "user-filled", "user-plus", "users", "video",
  "virtual-card", "wallet", "whatsapp", "x", "x-circle", "x-filled", "x-logo",
  "xp-investimentos", "youtube", "zero"
];

export default {
  title: 'Components/Atlas Icon',
  tags: ['autodocs'],
  render: (args) => {
    const icon = document.createElement('atlas-icon');
    
    // Content
    icon.setAttribute('name', args.name);
    
    // Appearance
    icon.setAttribute('size', args.size);
    
    return icon;
  },
  argTypes: {
    // ========== CONTENT ==========
    name: {
      control: 'select',
      options: availableIcons,
      description: 'Nome do ícone a ser exibido',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' }
      }
    },

    // ========== APPEARANCE ==========
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Tamanho do ícone',
      table: {
        category: 'Appearance',
        type: { summary: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'" },
        defaultValue: { summary: 'md' }
      }
    }
  },
  args: {
    name: 'circle',
    size: 'md'
  }
};

// ========== PLAYGROUND (Default) ==========
export const Playground = {
  args: {
    name: 'star',
    size: 'md'
  }
};

// ========== SIZES ==========

export const SizeComparison = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '24px';
    container.style.padding = '20px';

    const sizes = [
      { size: 'xs', label: 'XS (8px)' },
      { size: 'sm', label: 'SM (16px)' },
      { size: 'md', label: 'MD (24px)' },
      { size: 'lg', label: 'LG (32px)' },
      { size: 'xl', label: 'XL (40px)' },
      { size: 'xxl', label: 'XXL (48px)' }
    ];

    sizes.forEach(({ size, label }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', 'star-filled');
      icon.setAttribute('size', size);

      const labelElement = document.createElement('span');
      labelElement.textContent = label;
      labelElement.style.fontSize = '12px';
      labelElement.style.color = '#666';

      wrapper.appendChild(icon);
      wrapper.appendChild(labelElement);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== COMMON ICONS ==========

export const CommonIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';

    const commonIcons = [
      'home', 'user', 'bell', 'envelope', 'calendar', 'clock',
      'magnifier', 'cog', 'help-circle', 'info', 'alert-triangle', 'check-circle',
      'x-circle', 'plus', 'minus', 'trash', 'pencil', 'download',
      'upload', 'share', 'filter', 'star', 'heart', 'lock'
    ];

    commonIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      wrapper.style.padding = '12px';
      wrapper.style.border = '1px solid #e0e0e0';
      wrapper.style.borderRadius = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'lg');

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '11px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== NAVIGATION ICONS ==========

export const NavigationIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '16px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';

    const navIcons = [
      'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down',
      'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down'
    ];

    navIcons.forEach(iconName => {
      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'lg');
      container.appendChild(icon);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== FINANCIAL ICONS ==========

export const FinancialIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';

    const financialIcons = [
      'dollar-sign', 'money', 'money-filled', 'pix', 'pix-filled',
      'card', 'wallet', 'bank', 'receipt', 'barcode',
      'qrcode', 'hand-holding-money', 'dollar-zap'
    ];

    financialIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      label.style.textAlign = 'center';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== BANK LOGOS ==========

export const BankLogos = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    container.style.gap = '16px';
    container.style.padding = '20px';

    const bankIcons = [
      'banco-do-brasil', 'bradesco', 'itau', 'santander', 'caixa',
      'nubank', 'inter', 'c6-bank', 'pagbank', 'pic-pay',
      'mercado-pago', 'stone', 'safra', 'sicoob', 'sicredi'
    ];

    bankIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';
      wrapper.style.padding = '12px';
      wrapper.style.border = '1px solid #e0e0e0';
      wrapper.style.borderRadius = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== SOCIAL MEDIA ICONS ==========

export const SocialMediaIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '24px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';

    const socialIcons = [
      'facebook', 'instagram', 'linkedin', 'x-logo', 'youtube',
      'whatsapp', 'github', 'discord', 'tiktok', 'spotify'
    ];

    socialIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'xl');

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '10px';
      label.style.color = '#666';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== STATUS ICONS ==========

export const StatusIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '32px';
    container.style.padding = '20px';
    container.style.alignItems = 'center';

    const statusIcons = [
      { name: 'check-circle', color: '#28a745' },
      { name: 'alert-triangle', color: '#ffc107' },
      { name: 'x-circle', color: '#dc3545' },
      { name: 'info', color: '#17a2b8' },
      { name: 'loader', color: '#6c757d' }
    ];

    statusIcons.forEach(({ name, color }) => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '8px';

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', name);
      icon.setAttribute('size', 'xl');
      icon.style.color = color;

      const label = document.createElement('span');
      label.textContent = name;
      label.style.fontSize = '11px';
      label.style.color = '#666';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};

// ========== ALL ICONS CATALOG ==========

export const AllIconsCatalog = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
    container.style.gap = '12px';
    container.style.padding = '20px';
    container.style.maxHeight = '600px';
    container.style.overflowY = 'auto';

    availableIcons.forEach(iconName => {
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '6px';
      wrapper.style.padding = '8px';
      wrapper.style.cursor = 'pointer';
      wrapper.style.transition = 'background-color 0.2s';
      wrapper.title = `Click to copy: ${iconName}`;

      wrapper.addEventListener('mouseenter', () => {
        wrapper.style.backgroundColor = '#f5f5f5';
        wrapper.style.borderRadius = '6px';
      });

      wrapper.addEventListener('mouseleave', () => {
        wrapper.style.backgroundColor = 'transparent';
      });

      wrapper.addEventListener('click', () => {
        navigator.clipboard.writeText(iconName);
      });

      const icon = document.createElement('atlas-icon');
      icon.setAttribute('name', iconName);
      icon.setAttribute('size', 'md');

      const label = document.createElement('span');
      label.textContent = iconName;
      label.style.fontSize = '9px';
      label.style.color = '#666';
      label.style.textAlign = 'center';
      label.style.wordBreak = 'break-word';
      label.style.maxWidth = '100px';

      wrapper.appendChild(icon);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });

    return container;
  },
  parameters: {
    controls: { disable: true }
  }
};
