import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';  // Importar ButtonModule de PrimeNG

export default {
  title: 'PrimeNG/Button',
  tags: ['autodocs'],  // 🔹 Activa la documentación automática en la pestaña "Docs"
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],  // Asegúrate de importar ButtonModule de PrimeNG
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
  template: `<p-button [label]="label" [styleClass]="styleClass"></p-button>`,  // Usamos styleClass para cambiar el estilo
});

export const Primary: StoryObj = {
  render: Template,
  args: {
    label: 'Primary',  // Definimos el texto del botón
    styleClass: 'p-button-primary',  // Estilo para un botón primario
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
    label: 'Success',  // Texto para el botón de éxito
    styleClass: 'p-button-success',  // Estilo para un botón de éxito
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
    label: 'Danger',  // Texto para el botón de peligro
    styleClass: 'p-button-danger',  // Estilo para un botón de peligro
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de peligro o alerta.',
      },
    },
  },
};
