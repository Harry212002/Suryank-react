const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath:'/',
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Output the CSS files separately
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            // Handling CSS files (including Tailwind)
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader',                // Resolves CSS imports
                    'postcss-loader',            // For Tailwind CSS
                ]
            },
            // Handling SCSS files
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader',                // Resolves CSS imports
                    'postcss-loader',            // For Tailwind CSS
                    'sass-loader',               // Compiles Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|png|gif|jpg)$/,
                type: "asset/resource" // For handling images
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Helps import files without extensions
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        historyApiFallback: true
    }
};
