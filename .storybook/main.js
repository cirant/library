
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-links/register'
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new FileManagerPlugin({
        onEnd: [
          {
            copy: [
              { source: "./storybook-static/static/media/**", destination: "./storybook-static/static/css/static/media" }
            ],
            delete: [
              './storybook-static/static/media',
            ],
          },
        ]
      })
    );
    return config;
  },

};
