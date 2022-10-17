const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const Dotenv = require('dotenv-webpack');

// this is to load env vars for this config
require('dotenv').config({ // it puts the content to the "process.env" var. System vars are taking precedence
  path: '.env',
});
// and this to pass env vars to the JS application
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}