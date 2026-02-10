import './atlas-button.js';
import '../atlas-icon/atlas-icon.js';

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
      },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Variante do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'info', 'inverse'],
      description: 'Cor do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    iconName: {
      control: 'text',
      description: 'Nome do ícone',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'plus' },
      },
    },
    icon: {
      control: 'boolean',
      description: 'Mostrar ícone',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Botão desabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Largura total',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  
  return button;
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  icon: false,
  disabled: false,
  loading: false,
  fullWidth: false,
};

// Variantes
export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
  color: 'primary',
  size: 'md',
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: 'Ghost Button',
  variant: 'ghost',
  color: 'primary',
  size: 'md',
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

// Tamanhos
export const Sizes = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  container.style.alignItems = 'flex-start';
  
  const sizes = [
    { name: 'Small (32px)', value: 'sm' },
    { name: 'Medium (40px)', value: 'md' },
    { name: 'Large (48px)', value: 'lg' },
    { name: 'Extra Large (56px)', value: 'xl' }
  ];
  
  sizes.forEach(({ name, value }) => {
    const button = document.createElement('atlas-button');
    button.setAttribute('label', name);
    button.setAttribute('variant', 'filled');
    button.setAttribute('color', 'primary');
    button.setAttribute('size', value);
    container.appendChild(button);
  });
  
  return container;
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

// Estados
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  loading: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  variant: 'filled',
  color: 'primary',
  size: 'md',
  fullWidth: true,
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
  section1.appendChild(title1);
  
  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';
  
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
  section2.appendChild(title2);
  
  const navigation = document.createElement('div');
  navigation.style.display = 'flex';
  navigation.style.gap = '8px';
  
  const backBtn = document.createElement('atlas-button');
  backBtn.setAttribute('label', 'Voltar');
  backBtn.setAttribute('variant', 'ghost');
  backBtn.setAttribute('color', 'primary');
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
  section3.appendChild(title3);
  
  const alerts = document.createElement('div');
  alerts.style.display = 'flex';
  alerts.style.gap = '8px';
  
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
      
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorLabel.style.fontSize = '12px';
      colorLabel.style.marginBottom = '8px';
      colorLabel.style.color = '#666';
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
