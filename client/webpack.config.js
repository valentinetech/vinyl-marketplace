module.exports = {
  rules: [
    {
      test: /\.ts(x)$/,
      exclude: /node_modules/,
      loader: ['babel-loader', 'ts-loader'],
    },
  ],
  resolve: {
    alias: {
      assests: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      features: path.resolve(__dirname, './src/features/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      routes: path.resolve(__dirname, './src/routes/'),
      styles: path.resolve(__dirname, './src/styles/'),
    },
    extensions: ['.tsx', 'ts', '.js', '.json'],
  },
};
