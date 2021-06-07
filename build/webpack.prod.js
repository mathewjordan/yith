const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  optimization: {
    concatenateModules: false,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
  devtool: 'source-map',
};
