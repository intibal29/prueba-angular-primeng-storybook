import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';

export default {
  title: 'PrimeNG/Button',
  tags: ['autodocs'],  // 🔹 Activa la documentación automática en la pestaña "Docs"
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Este es un botón de PrimeNG utilizado en Storybook para demostraciones.',
      },
    },
  },
} as Meta;

const Template = (args: any) => ({
  props: args,
  template: `<p-button [label]="label" [severity]="severity"></p-button>`,
});

export const Primary: StoryObj = {
  render: Template,
  args: {
    label: 'Primary',
    severity: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Este es el botón principal con el color por defecto.',
      },
    },
  },
};

export const Success: StoryObj = {
  render: Template,
  args: {
    label: 'Success',
    severity: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con estilo de éxito.',
      },
    },
  },
};

export const Danger: StoryObj = {
  render: Template,
  args: {
    label: 'Danger',
    severity: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de peligro o alerta.',
      },
    },
  },
};
