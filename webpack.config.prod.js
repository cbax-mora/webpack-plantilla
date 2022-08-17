const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = requiere('mini-css-extract-plugin')
const Copy = require('copy-webpack-plugin')
const CssMinimizer = require('css-minimizer-webpack-plugin')
const terser = require ('terser-webpack-plugin')

module.export = {
    mode : 'development',

    output : {
        clean : true,
        filename: 'main.[contenthash]'.js
    },
    module : {
        rules : [
            {
                test : /\.html$/,
                loader : 'html-loader',
                options : {
                sources : false,
                },
            },
            {
                test: /\/,css$/,
                exclude : /styles.css$/,
                use : ['style-loader','css-loader'],
            },
            {
                test : /styles.css$/,
                use : [MiniCssExtract.loader, 'css-loader'],
            },
            {
                test : /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
            {
                test : /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['Qbabel/preset-env']
                    },
                },
            },
        ],
    },

  optimizacion : {},
minimize : true,
minimizer: [new CssMinimizer(), new terser()],
  plugins :[
    new HtmlWebPack({
        title : 'Mi webpack App',
        template : './src/index.html',
    }),
    new MiniCssExtract({
        filename: '[name].[fullhash].css',
        ignoreOrder : false,
    }),
  ],
}