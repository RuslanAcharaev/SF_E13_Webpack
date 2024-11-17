const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.pug'),
            // template: path.join(__dirname, 'src', 'template.html'),
            filename: 'index.html',
            title: 'Development',
        }),
        new TerserWebpackPlugin(),
        new CssMinimizerPlugin(),
        new ESLintPlugin(),
        new StylelintPlugin(),
        new Dotenv(),
    ],
    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
