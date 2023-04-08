// https://kulshekhar.github.io/ts-jest/docs/guides/react-native
const {defaults: tsjPreset} = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      {
        configFile: require.resolve('./babel.spec.config.js'),
      },
    ],
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        configFile: require.resolve('./babel.spec.config.js'),
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
