module.exports = api => {
  api.cache(true)

  return {
    presets: ['next/babel', '@zeit/next-typescript/babel', 'mobx'],
    plugins: [
      [
        'import',
        {
          libraryName: 'react-use',
          libraryDirectory: 'lib',
          camel2DashComponentName: false,
        },
      ],
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
    ],
  }
}
