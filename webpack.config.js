const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'awesome.js', 
        path:path.resolve(__dirname, "dist"), 
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                  ],
            },
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin()
      ],

      devServer: {
        
        compress: true,
        port: 9000
      }

};