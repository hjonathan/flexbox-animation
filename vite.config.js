const { createVuePlugin } = require('vite-plugin-vue2');
const path = require('path')

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
};
