module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    '"@babel/preset-typescript"',
  ],
  plugins: [
    "babel-plugin-styled-components",
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
        regenerator: false,
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "current node",
          },
        ],
      ],
    },
  },
};
