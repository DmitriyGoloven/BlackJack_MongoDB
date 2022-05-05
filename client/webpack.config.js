const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, "../server/public/static"),
        filename: 'index_bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'black_jack_react',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                "@babel/preset-react",
                                {
                                    plugins: ["@babel/plugin-proposal-class-properties"],
                                },
                            ]
                        }
                    }
            },

        ],
    },
};
