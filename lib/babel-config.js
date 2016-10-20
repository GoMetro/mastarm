module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-react'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-runtime')
  ]
}