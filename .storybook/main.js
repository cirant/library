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

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
