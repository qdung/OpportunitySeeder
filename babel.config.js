module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          containers: './src/containers',
          hooks: './src/hooks',
          i18n: './src/i18n',
          navigation: './src/navigation',
          permissions: './src/permissions',
          store: './src/store',
          selectors: './src/selectors',
          screens: './src/screens',
          types: './src/types',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  // env: {
  //   production: {
  //     plugins: ['react-native-paper/babel'],
  //   },
  // },
};
