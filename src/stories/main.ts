module.exports = {
  stories: [
    "../src/app/components/**/*.stories.ts",  // Ajusta la ruta para que apunte a tus historias
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',  // Añade el addon para la documentación
  ],
  framework: '@storybook/angular',
};
