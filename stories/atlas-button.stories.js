import '../components/web/atlas-button/atlas-button.js';
import '../components/web/atlas-icon/atlas-icon.js';

// Lista de ícones populares para o seletor
const popularIcons = [
  'plus', 'minus', 'check', 'x', 'arrow-right', 'arrow-left', 
  'arrow-up', 'arrow-down', 'chevron-right', 'chevron-left',
  'chevron-down', 'chevron-up', 'trash', 'pencil', 'copy',
  'eye', 'eye-off', 'download', 'upload', 'send',
  'magnifier', 'filter', 'cog', 'bell', 'user',
  'home', 'calendar', 'clock', 'envelope', 'lock',
  'unlock', 'star', 'star-filled', 'heart', 'loader',
  'info', 'alert-circle', 'alert-triangle', 'check-circle', 'x-circle',
  'help-circle', 'external-link', 'link', 'share', 'refresh',
  'pix', 'money', 'card', 'bank', 'dollar-sign',
  'shopping-cart-right', 'shopping-bag', 'gift', 'file', 'files'
];

export default {
  title: 'Components/AtlasButton',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
        category: 'Conteúdo',
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'Variante visual do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
        category: 'Aparência',
      },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'danger', 'success', 'warning', 'info', 'inverse'],
      description: 'Cor temática do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
        category: 'Aparência',
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão (sm: 32px, md: 40px, lg: 48px, xl: 56px)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Aparência',
      },
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Ativar/desativar ícone no botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Ícone',
      },
    },
    iconName: {
      control: { type: 'select' },
      options: popularIcons,
      description: 'Selecione o ícone a ser exibido',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'plus' },
        category: 'Ícone',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilitar o botão (impede interação)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Estado',
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Ativar estado de carregamento (mostra spinner)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Estado',
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Botão ocupa 100% da largura disponível',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        category: 'Layout',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Evento disparado ao clicar no botão',
      table: {
        category: 'Eventos',
      },
    },
  },
};

// Template para criar os stories
const Template = (args) => {
  const button = document.createElement('atlas-button');
  
  if (args.label) button.setAttribute('label', args.label);
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.color) button.setAttribute('color', args.color);
  if (args.size) button.setAttribute('size', args.size);
  if (args.icon) button.setAttribute('icon', '');
  if (args.iconName) button.setAttribute('icon-name', args.iconName);
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.fullWidth) button.setAttribute('full-width', '');
  
  // Adicionar listener de clique para action
  if (args.onClick) {
    button.addEventListener('click', args.onClick);
  }
  
  return button;
};

// Story padrão - Playground interativo
export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  icon: false,
  iconName: 'plus',
  disabled: false,
  loading: false,
  fullWidth: false,
};
Default.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para experimentar todas as propriedades do botão de forma interativa.',
    },
  },
};

// Variantes
export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
};
Filled.parameters = {
  docs: {
    description: {
      story: 'Variante Filled: estilo sólido com fundo colorido, ideal para ações primárias.',
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
  color: 'primary',
  size: 'md',
};
Outlined.parameters = {
  docs: {
    description: {
      story: 'Variante Outlined: botão com borda e fundo transparente, ideal para ações secundárias.',
    },
  },
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost Button',
  variant: 'ghost',
  color: 'primary',
  size: 'md',
};
Ghost.parameters = {
  docs: {
    description: {
      story: 'Variante Ghost: sem borda, apenas texto e hover sutil, ideal para ações terciárias.',
    },
  },
};

// Cores
export const AllColors = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  
  const colors = ['primary', 'danger', 'success', 'warning', 'info', 'inverse'];
  
  colors.forEach(color => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.alignItems = 'center';
    
    const label = document.createElement('span');
    label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    label.style.minWidth = '80px';
    label.style.fontWeight = '600';
    label.style.fontSize = '14px';
    row.appendChild(label);
    
    ['filled', 'outlined', 'ghost'].forEach(variant => {
      const button = document.createElement('atlas-button');
      button.setAttribute('label', variant.charAt(0).toUpperCase() + variant.slice(1));
      button.setAttribute('variant', variant);
      button.setAttribute('color', color);
      button.setAttribute('size', 'md');
      row.appendChild(button);
    });
    
    container.appendChild(row);
  });
  
  return container;
};
AllColors.parameters = {
  docs: {
    description: {
      story: 'Todas as cores disponíveis (primary, danger, success, warning, info, inverse) em cada variante.',
    },
  },
  controls: { disable: true },
};

// Tamanhos
export const Sizes = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  container.style.alignItems = 'flex-start';
  
  const sizes = [
    { name: 'Small', value: 'sm', height: '32px' },
    { name: 'Medium', value: 'md', height: '40px' },
    { name: 'Large', value: 'lg', height: '48px' },
    { name: 'Extra Large', value: 'xl', height: '56px' }
  ];
  
  sizes.forEach(({ name, value, height }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '16px';
    
    const button = document.createElement('atlas-button');
    button.setAttribute('label', `${name} (${height})`);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', value);
    row.appendChild(button);
    
    container.appendChild(row);
  });
  
  return container;
};
Sizes.parameters = {
  docs: {
    description: {
      story: 'Quatro tamanhos disponíveis para se adaptar a diferentes contextos de uso.',
    },
  },
  controls: { disable: true },
};

// Com ícone
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  icon: true,
  iconName: 'plus',
};
WithIcon.parameters = {
  docs: {
    description: {
      story: 'Botão com ícone à esquerda do texto. Use o controle "iconName" para mudar o ícone.',
    },
  },
};

// Estados
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Estado desabilitado: impede interação do usuário e aplica estilo visual reduzido.',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  loading: true,
};
Loading.parameters = {
  docs: {
    description: {
      story: 'Estado de carregamento: mostra um spinner animado e desabilita a interação.',
    },
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  fullWidth: true,
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Botão ocupa 100% da largura do container pai.',
    },
  },
};

// Todos os estados
export const AllStates = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  
  const states = [
    { label: 'Default', props: {} },
    { label: 'Hover', props: {}, info: '(hover com o mouse)' },
    { label: 'Disabled', props: { disabled: true } },
    { label: 'Loading', props: { loading: true } },
    { label: 'With Icon', props: { icon: true, iconName: 'plus' } },
  ];
  
  states.forEach(({ label, props, info }) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.alignItems = 'center';
    
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    labelSpan.style.minWidth = '100px';
    labelSpan.style.fontWeight = '600';
    labelSpan.style.fontSize = '14px';
    row.appendChild(labelSpan);
    
    const button = document.createElement('atlas-button');
    button.setAttribute('label', label);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'md');
    
    if (props.disabled) button.setAttribute('disabled', '');
    if (props.loading) button.setAttribute('loading', '');
    if (props.icon) button.setAttribute('icon', '');
    if (props.iconName) button.setAttribute('icon-name', props.iconName);
    
    row.appendChild(button);
    
    if (info) {
      const infoSpan = document.createElement('span');
      infoSpan.textContent = info;
      infoSpan.style.fontSize = '12px';
      infoSpan.style.color = '#666';
      row.appendChild(infoSpan);
    }
    
    container.appendChild(row);
  });
  
  return container;
};
AllStates.parameters = {
  docs: {
    description: {
      story: 'Comparação visual de todos os estados do botão.',
    },
  },
  controls: { disable: true },
};

// Exemplos de uso
export const UsageExamples = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';
  
  // Exemplo 1: Botões de ação
  const section1 = document.createElement('div');
  const title1 = document.createElement('h3');
  title1.textContent = 'Botões de Ação';
  title1.style.marginBottom = '12px';
  title1.style.fontSize = '16px';
  title1.style.fontWeight = '600';
  section1.appendChild(title1);
  
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';
  actions.style.flexWrap = 'wrap';
  
  const saveBtn = document.createElement('atlas-button');
  saveBtn.setAttribute('label', 'Salvar');
  saveBtn.setAttribute('variant', 'filled');
  saveBtn.setAttribute('color', 'success');
  saveBtn.setAttribute('icon', '');
  saveBtn.setAttribute('icon-name', 'check');
  actions.appendChild(saveBtn);
  
  const cancelBtn = document.createElement('atlas-button');
  cancelBtn.setAttribute('label', 'Cancelar');
  cancelBtn.setAttribute('variant', 'outlined');
  cancelBtn.setAttribute('color', 'danger');
  actions.appendChild(cancelBtn);
  
  section1.appendChild(actions);
  container.appendChild(section1);
  
  // Exemplo 2: Botões de navegação
  const section2 = document.createElement('div');
  const title2 = document.createElement('h3');
  title2.textContent = 'Botões de Navegação';
  title2.style.marginBottom = '12px';
  title2.style.fontSize = '16px';
  title2.style.fontWeight = '600';
  section2.appendChild(title2);
  
  const navigation = document.createElement('div');
  navigation.style.display = 'flex';
  navigation.style.gap = '8px';
  navigation.style.flexWrap = 'wrap';
  
  const backBtn = document.createElement('atlas-button');
  backBtn.setAttribute('label', 'Voltar');
  backBtn.setAttribute('variant', 'ghost');
  backBtn.setAttribute('color', 'primary');
  backBtn.setAttribute('icon', '');
  backBtn.setAttribute('icon-name', 'arrow-left');
  navigation.appendChild(backBtn);
  
  const nextBtn = document.createElement('atlas-button');
  nextBtn.setAttribute('label', 'Próximo');
  nextBtn.setAttribute('variant', 'filled');
  nextBtn.setAttribute('color', 'primary');
  nextBtn.setAttribute('icon', '');
  nextBtn.setAttribute('icon-name', 'arrow-right');
  navigation.appendChild(nextBtn);
  
  section2.appendChild(navigation);
  container.appendChild(section2);
  
  // Exemplo 3: Botões de alerta
  const section3 = document.createElement('div');
  const title3 = document.createElement('h3');
  title3.textContent = 'Botões de Alerta';
  title3.style.marginBottom = '12px';
  title3.style.fontSize = '16px';
  title3.style.fontWeight = '600';
  section3.appendChild(title3);
  
  const alerts = document.createElement('div');
  alerts.style.display = 'flex';
  alerts.style.gap = '8px';
  alerts.style.flexWrap = 'wrap';
  
  const deleteBtn = document.createElement('atlas-button');
  deleteBtn.setAttribute('label', 'Excluir');
  deleteBtn.setAttribute('variant', 'filled');
  deleteBtn.setAttribute('color', 'danger');
  deleteBtn.setAttribute('icon', '');
  deleteBtn.setAttribute('icon-name', 'trash');
  alerts.appendChild(deleteBtn);
  
  const warningBtn = document.createElement('atlas-button');
  warningBtn.setAttribute('label', 'Atenção');
  warningBtn.setAttribute('variant', 'outlined');
  warningBtn.setAttribute('color', 'warning');
  warningBtn.setAttribute('icon', '');
  warningBtn.setAttribute('icon-name', 'alert-triangle');
  alerts.appendChild(warningBtn);
  
  section3.appendChild(alerts);
  container.appendChild(section3);
  
  return container;
};
UsageExamples.parameters = {
  docs: {
    description: {
      story: 'Exemplos práticos de uso em diferentes contextos: ações, navegação e alertas.',
    },
  },
  controls: { disable: true },
};

// Matriz completa
export const CompleteMatrix = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '32px';
  
  const variants = ['filled', 'outlined', 'ghost'];
  const colors = ['primary', 'danger', 'success', 'warning', 'info', 'inverse'];
  
  variants.forEach(variant => {
    const section = document.createElement('div');
    
    const title = document.createElement('h3');
    title.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    title.style.marginBottom = '12px';
    title.style.fontSize = '16px';
    title.style.fontWeight = '600';
    section.appendChild(title);
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '12px';
    
    colors.forEach(color => {
      const card = document.createElement('div');
      card.style.padding = '16px';
      card.style.border = '1px solid #e0e0e0';
      card.style.borderRadius = '8px';
      card.style.backgroundColor = '#fafafa';
      
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorLabel.style.fontSize = '12px';
      colorLabel.style.marginBottom = '8px';
      colorLabel.style.color = '#666';
      colorLabel.style.fontWeight = '600';
      card.appendChild(colorLabel);
      
      const btnContainer = document.createElement('div');
      btnContainer.style.display = 'flex';
      btnContainer.style.flexDirection = 'column';
      btnContainer.style.gap = '8px';
      
      // Normal
      const normalBtn = document.createElement('atlas-button');
      normalBtn.setAttribute('label', 'Normal');
      normalBtn.setAttribute('variant', variant);
      normalBtn.setAttribute('color', color);
      normalBtn.setAttribute('size', 'md');
      btnContainer.appendChild(normalBtn);
      
      // Disabled
      const disabledBtn = document.createElement('atlas-button');
      disabledBtn.setAttribute('label', 'Disabled');
      disabledBtn.setAttribute('variant', variant);
      disabledBtn.setAttribute('color', color);
      disabledBtn.setAttribute('size', 'md');
      disabledBtn.setAttribute('disabled', '');
      btnContainer.appendChild(disabledBtn);
      
      card.appendChild(btnContainer);
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
    container.appendChild(section);
  });
  
  return container;
};
CompleteMatrix.parameters = {
  docs: {
    description: {
      story: 'Matriz completa mostrando todas as combinações de variantes, cores e estados.',
    },
  },
  controls: { disable: true },
};

// Galeria de ícones
export const IconGallery = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';
  
  const title = document.createElement('h3');
  title.textContent = 'Ícones Disponíveis';
  title.style.marginBottom = '12px';
  title.style.fontSize = '16px';
  title.style.fontWeight = '600';
  container.appendChild(title);
  
  const description = document.createElement('p');
  description.textContent = 'Use qualquer um desses ícones no controle "iconName" do botão padrão.';
  description.style.fontSize = '14px';
  description.style.color = '#666';
  description.style.marginBottom = '8px';
  container.appendChild(description);
  
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
  grid.style.gap = '12px';
  
  popularIcons.forEach(iconName => {
    const button = document.createElement('atlas-button');
    button.setAttribute('label', iconName);
    button.setAttribute('variant', 'outlined');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', 'sm');
    button.setAttribute('icon', '');
    button.setAttribute('icon-name', iconName);
    button.style.fontSize = '10px';
    grid.appendChild(button);
  });
  
  container.appendChild(grid);
  return container;
};
IconGallery.parameters = {
  docs: {
    description: {
      story: 'Galeria visual de todos os ícones populares disponíveis no seletor.',
    },
  },
  controls: { disable: true },
};

// Playground interativo avançado
export const InteractivePlayground = Template.bind({});
InteractivePlayground.args = {
  label: 'Clique aqui',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  icon: true,
  iconName: 'star',
  disabled: false,
  loading: false,
  fullWidth: false,
};
InteractivePlayground.parameters = {
  docs: {
    description: {
      story: 'Experimente livremente todas as combinações de propriedades. Ative o ícone e depois selecione diferentes opções no controle "iconName".',
    },
  },
};
