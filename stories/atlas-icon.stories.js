import '../components/web/atlas-icon/atlas-icon.js';

export default {
  title: 'Components/AtlasIcon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(AtlasIcon.iconMap),
      description: 'Nome do ícone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Tamanho do ícone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
  },
};

// Referência ao iconMap do componente
const iconMap = {
  "address-book": "\ue900",
  "alert": "\ue901",
  "alert-circle": "\ue902",
  "alert-triangle": "\ue903",
  "alert-triangle-filled": "\ue9ca",
  "align-justify": "\ue904",
  "android": "\ue9cc",
  "apps": "\ue905",
  "arrow-down": "\ue906",
  "arrow-down-circle": "\ue907",
  "arrow-left": "\ue908",
  "arrow-right": "\ue909",
  "arrow-right-left": "\ue90a",
  "arrow-up": "\ue90b",
  "arrow-up-circle": "\ue90c",
  "arrow-up-right": "\ue90d",
  "asaas-logo": "\ue90e",
  "award": "\ue9cd",
  "backspace": "\ue90f",
  "banco-abc-brasil": "\ue9ac",
  "banco-bmg": "\ue9ad",
  "banco-brb": "\ue9ae",
  "banco-da-amazonia": "\ue9af",
  "banco-do-brasil": "\ue910",
  "banco-industrial-do-brasil": "\ue9b0",
  "banco-original": "\ue9b1",
  "banese": "\ue9b2",
  "bank": "\ue911",
  "bank-of-america": "\ue9b3",
  "banpara": "\ue9b4",
  "bar-chart": "\ue912",
  "barcode": "\ue913",
  "bars": "\ue914",
  "base-logo": "\ue915",
  "bell": "\ue916",
  "bnb": "\ue9b5",
  "box": "\ue917",
  "bradesco": "\ue9b6",
  "briefcase": "\ue918",
  "btg-pactual": "\ue9b7",
  "c6-bank": "\ue9b8",
  "caixa": "\ue919",
  "calendar": "\ue91a",
  "calendar-check": "\ue952",
  "calendar-clock": "\ue9a9",
  "calendar-magnifier": "\ue9aa",
  "calendar-sync": "\ue91b",
  "camera": "\ue91c",
  "card": "\ue91d",
  "card-mastercard": "\ue91e",
  "cash-machine-with-ticket": "\ue9cf",
  "cash-machine-with-ticket-1": "\ue9d0",
  "celebrate": "\ue91f",
  "chart-line": "\ue9d1",
  "check": "\ue920",
  "check-circle": "\ue921",
  "check-filled": "\ue922",
  "chevron-down": "\ue923",
  "chevron-left": "\ue924",
  "chevron-right": "\ue925",
  "chevron-up": "\ue926",
  "circle": "\ue927",
  "citi-bank": "\ue9b9",
  "clock": "\ue928",
  "clock-filled": "\ue929",
  "cloud": "\ue9d2",
  "cog": "\ue92a",
  "color-picker": "\ue9c8",
  "companies": "\ue9d3",
  "concentric-circles": "\ue92b",
  "contactless": "\ue92c",
  "copy": "\ue92d",
  "corner-up-right": "\ue92e",
  "credisis": "\ue92f",
  "cutlery": "\ue9cb",
  "dashboard": "\ue930",
  "daycoval": "\ue9ba",
  "deutsche-bank": "\ue9bb",
  "discord": "\ue9d4",
  "dollar-sign": "\ue931",
  "dollar-zap": "\ue932",
  "double-check": "\ue933",
  "download": "\ue934",
  "email": "\ue9d5",
  "envelope": "\ue935",
  "equal": "\ue9c6",
  "external-link": "\ue9c7",
  "eye": "\ue936",
  "eye-filled": "\ue937",
  "eye-off": "\ue938",
  "eye-off-filled": "\ue939",
  "facebook": "\ue93a",
  "file": "\ue93b",
  "file-check": "\ue93c",
  "file-dollar": "\ue93d",
  "file-import": "\ue9d6",
  "file-invoice": "\ue9ab",
  "file-plus": "\ue9d7",
  "file-text": "\ue93e",
  "file-users": "\ue93f",
  "files": "\ue940",
  "filter": "\ue941",
  "flapp-store-logo": "\ue942",
  "flash": "\ue943",
  "gift": "\ue944",
  "github": "\ue945",
  "globe": "\ue946",
  "hammer": "\ue947",
  "hand-card": "\ue948",
  "hand-holding-money": "\ue949",
  "hand-shake": "\ue94a",
  "headset": "\ue9d8",
  "help-circle": "\ue94b",
  "hierarchy": "\ue94c",
  "home": "\ue94d",
  "id-card": "\ue94e",
  "image": "\ue9d9",
  "info": "\ue94f",
  "instagram": "\ue950",
  "inter": "\ue951",
  "itau": "\ue953",
  "key": "\ue954",
  "keyboard": "\ue955",
  "link": "\ue956",
  "linkedin": "\ue957",
  "list": "\ue958",
  "loader": "\ue959",
  "lock": "\ue95a",
  "lock-filled": "\ue95b",
  "log-in": "\ue95c",
  "magnifier": "\ue95d",
  "mail-box": "\ue95e",
  "map-pin": "\ue95f",
  "market-pin": "\ue960",
  "maximize": "\ue961",
  "megaphone": "\ue962",
  "mercado-pago": "\ue9bc",
  "message-circle": "\ue963",
  "message-circle-dollar": "\ue9da",
  "message-circles": "\ue9db",
  "mic": "\ue964",
  "minus": "\ue965",
  "minus-circle": "\ue966",
  "money": "\ue967",
  "money-filled": "\ue968",
  "money-notes": "\ue969",
  "monitor": "\ue96a",
  "monitor-chart-up": "\ue96b",
  "moon": "\ue96c",
  "neon": "\ue9bd",
  "nubank": "\ue96d",
  "open-finance": "\ue96e",
  "pagbank": "\ue9be",
  "paperclip": "\ue96f",
  "pencil": "\ue970",
  "percentage": "\ue9dc",
  "phone": "\ue971",
  "pic-pay": "\ue9bf",
  "pix": "\ue972",
  "pix-filled": "\ue9c5",
  "play": "\ue9dd",
  "plus": "\ue973",
  "plus-circle": "\ue974",
  "power": "\ue975",
  "printer": "\ue976",
  "qrcode": "\ue9c9",
  "quotation-marks": "\ue9de",
  "receipt": "\ue977",
  "refresh": "\ue978",
  "refresh-dollar": "\ue979",
  "repeat": "\ue97a",
  "reverse-clock": "\ue9df",
  "rotate": "\ue97b",
  "rotate-cw": "\ue9e0",
  "rotate-dollar": "\ue97c",
  "safra": "\ue9c0",
  "santander": "\ue97d",
  "send": "\ue97e",
  "serasa": "\ue97f",
  "share": "\ue980",
  "shield": "\ue981",
  "shopping-bag": "\ue982",
  "shopping-cart-down": "\ue983",
  "shopping-cart-right": "\ue984",
  "sicoob": "\ue9c1",
  "sicredi": "\ue9c2",
  "slash": "\ue985",
  "sliders": "\ue986",
  "smartphone": "\ue987",
  "smartphone-contactless": "\ue988",
  "smile-face": "\ue9e1",
  "sort": "\ue989",
  "sort-amount-down": "\ue9e2",
  "sort-amount-up": "\ue9e3",
  "sort-horizontal": "\ue9e4",
  "spanner": "\ue98a",
  "split-arrows": "\ue98b",
  "spotify": "\ue9e5",
  "square": "\ue98c",
  "square-signs": "\ue98d",
  "star": "\ue98e",
  "star-filled": "\ue98f",
  "stone": "\ue9c3",
  "sun": "\ue990",
  "tag": "\ue991",
  "target": "\ue9e6",
  "three-dots": "\ue992",
  "three-dots-horinzontal": "\ue993",
  "thumbs-down": "\ue994",
  "thumbs-up": "\ue995",
  "ticket": "\ue996",
  "tiktok": "\ue9e7",
  "trash": "\ue997",
  "truck": "\ue998",
  "unlink": "\ue999",
  "unlock": "\ue99a",
  "unlock-filled": "\ue99b",
  "upload": "\ue99c",
  "user": "\ue99d",
  "user-filled": "\ue99e",
  "user-plus": "\ue99f",
  "users": "\ue9a0",
  "video": "\ue9a1",
  "virtual-card": "\ue9a2",
  "wallet": "\ue9a3",
  "whatsapp": "\ue9a4",
  "x": "\ue9a5",
  "x-circle": "\ue9a8",
  "x-filled": "\ue9a6",
  "x-logo": "\ue9e8",
  "xp-investimentos": "\ue9c4",
  "youtube": "\ue9a7",
  "zero": "\ue9e9"
};

const iconNames = Object.keys(iconMap);

// Template para criar os stories
const Template = (args) => {
  const icon = document.createElement('atlas-icon');
  
  if (args.name) icon.setAttribute('name', args.name);
  if (args.size) icon.setAttribute('size', args.size);
  
  return icon;
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  name: 'home',
  size: 'md',
};

// Tamanhos
export const Sizes = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';
  
  const sizes = [
    { name: 'Extra Small (8px)', value: 'xs' },
    { name: 'Small (16px)', value: 'sm' },
    { name: 'Medium (24px)', value: 'md' },
    { name: 'Large (32px)', value: 'lg' },
    { name: 'Extra Large (40px)', value: 'xl' },
    { name: 'Extra Extra Large (48px)', value: 'xxl' }
  ];
  
  sizes.forEach(({ name, value }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '16px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', 'star-filled');
    icon.setAttribute('size', value);
    row.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '14px';
    row.appendChild(label);
    
    container.appendChild(row);
  });
  
  return container;
};

// Galeria de todos os ícones
export const IconGallery = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';
  
  // Barra de busca
  const searchContainer = document.createElement('div');
  searchContainer.style.marginBottom = '20px';
  searchContainer.style.position = 'sticky';
  searchContainer.style.top = '0';
  searchContainer.style.backgroundColor = 'white';
  searchContainer.style.padding = '10px 0';
  searchContainer.style.zIndex = '10';
  
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Buscar ícones...';
  searchInput.style.width = '100%';
  searchInput.style.padding = '12px';
  searchInput.style.fontSize = '14px';
  searchInput.style.border = '1px solid #ddd';
  searchInput.style.borderRadius = '8px';
  searchInput.style.boxSizing = 'border-box';
  searchContainer.appendChild(searchInput);
  
  const countLabel = document.createElement('div');
  countLabel.style.marginTop = '8px';
  countLabel.style.fontSize = '12px';
  countLabel.style.color = '#666';
  countLabel.textContent = `Total: ${iconNames.length} ícones`;
  searchContainer.appendChild(countLabel);
  
  container.appendChild(searchContainer);
  
  // Grid de ícones
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
  grid.style.gap = '16px';
  
  iconNames.forEach(name => {
    const card = document.createElement('div');
    card.className = 'icon-card';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.cursor = 'pointer';
    card.style.transition = 'all 0.2s';
    card.style.minHeight = '100px';
    card.dataset.name = name;
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'lg');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    label.style.color = '#333';
    card.appendChild(label);
    
    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.backgroundColor = '#f5f5f5';
      card.style.borderColor = '#0055cc';
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = 'transparent';
      card.style.borderColor = '#e0e0e0';
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
    
    // Click para copiar
    card.addEventListener('click', () => {
      navigator.clipboard.writeText(name);
      const originalText = label.textContent;
      label.textContent = '✓ Copiado!';
      label.style.color = '#198754';
      setTimeout(() => {
        label.textContent = originalText;
        label.style.color = '#333';
      }, 1500);
    });
    
    grid.appendChild(card);
  });
  
  container.appendChild(grid);
  
  // Funcionalidade de busca
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = grid.querySelectorAll('.icon-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
      const name = card.dataset.name;
      if (name.includes(searchTerm)) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    countLabel.textContent = `Mostrando: ${visibleCount} de ${iconNames.length} ícones`;
  });
  
  return container;
};

// Ícones populares
export const PopularIcons = () => {
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))';
  container.style.gap = '16px';
  
  const popularIcons = [
    'home', 'user', 'star', 'check', 'x', 'plus', 'minus',
    'arrow-right', 'arrow-left', 'arrow-up', 'arrow-down',
    'calendar', 'clock', 'bell', 'envelope', 'magnifier',
    'cog', 'trash', 'pencil', 'eye', 'lock', 'unlock'
  ];
  
  popularIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    card.appendChild(label);
    
    container.appendChild(card);
  });
  
  return container;
};

// Ícones de banco
export const BankIcons = () => {
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
  container.style.gap = '16px';
  
  const bankIcons = iconNames.filter(name => 
    name.includes('banco-') || 
    ['nubank', 'inter', 'itau', 'bradesco', 'santander', 'caixa', 
     'c6-bank', 'neon', 'stone', 'pagbank', 'pic-pay', 'mercado-pago',
     'btg-pactual', 'safra', 'sicoob', 'sicredi', 'xp-investimentos'].includes(name)
  );
  
  bankIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '10px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    card.appendChild(label);
    
    container.appendChild(card);
  });
  
  return container;
};

// Ícones de redes sociais
export const SocialIcons = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '16px';
  container.style.flexWrap = 'wrap';
  
  const socialIcons = [
    'facebook', 'instagram', 'linkedin', 'whatsapp', 'youtube',
    'twitter', 'x-logo', 'github', 'discord', 'spotify', 'tiktok'
  ].filter(name => iconNames.includes(name));
  
  socialIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.minWidth = '100px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '11px';
    label.style.textAlign = 'center';
    card.appendChild(label);
    
    container.appendChild(card);
  });
  
  return container;
};

// Ícones de pagamento
export const PaymentIcons = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '16px';
  container.style.flexWrap = 'wrap';
  
  const paymentIcons = iconNames.filter(name => 
    name.includes('pix') || 
    name.includes('card') || 
    name.includes('money') ||
    name.includes('dollar') ||
    name.includes('wallet') ||
    name.includes('hand-') ||
    name === 'contactless' ||
    name === 'smartphone-contactless'
  );
  
  paymentIcons.forEach(name => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.padding = '16px';
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '8px';
    card.style.minWidth = '100px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xl');
    icon.style.marginBottom = '8px';
    card.appendChild(icon);
    
    const label = document.createElement('span');
    label.textContent = name;
    label.style.fontSize = '10px';
    label.style.textAlign = 'center';
    label.style.wordBreak = 'break-word';
    card.appendChild(label);
    
    container.appendChild(card);
  });
  
  return container;
};

// Exemplo com cores
export const WithColors = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '24px';
  container.style.flexWrap = 'wrap';
  
  const examples = [
    { name: 'check-circle', color: '#198754', label: 'Success' },
    { name: 'alert-triangle', color: '#d97706', label: 'Warning' },
    { name: 'x-circle', color: '#cc0000', label: 'Error' },
    { name: 'info', color: '#0d6efd', label: 'Info' },
    { name: 'star-filled', color: '#ffc107', label: 'Star' },
  ];
  
  examples.forEach(({ name, color, label }) => {
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.gap = '8px';
    
    const icon = document.createElement('atlas-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('size', 'xxl');
    icon.style.color = color;
    card.appendChild(icon);
    
    const text = document.createElement('span');
    text.textContent = label;
    text.style.fontSize = '12px';
    card.appendChild(text);
    
    container.appendChild(card);
  });
  
  return container;
};

// Exemplo de uso em botões
export const InButtons = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '12px';
  container.style.flexWrap = 'wrap';
  
  const buttons = [
    { icon: 'plus', text: 'Adicionar' },
    { icon: 'trash', text: 'Excluir' },
    { icon: 'pencil', text: 'Editar' },
    { icon: 'download', text: 'Download' },
    { icon: 'upload', text: 'Upload' },
  ];
  
  buttons.forEach(({ icon, text }) => {
    const button = document.createElement('button');
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.gap = '8px';
    button.style.padding = '12px 24px';
    button.style.border = '1px solid #0055cc';
    button.style.borderRadius = '8px';
    button.style.backgroundColor = '#0055cc';
    button.style.color = 'white';
    button.style.fontSize = '14px';
    button.style.fontWeight = '600';
    button.style.cursor = 'pointer';
    
    const iconEl = document.createElement('atlas-icon');
    iconEl.setAttribute('name', icon);
    iconEl.setAttribute('size', 'sm');
    button.appendChild(iconEl);
    
    const textEl = document.createElement('span');
    textEl.textContent = text;
    button.appendChild(textEl);
    
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#003d99';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#0055cc';
    });
    
    container.appendChild(button);
  });
  
  return container;
};
