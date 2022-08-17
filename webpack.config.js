const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = requiere('mini-css-extract-plugin')
const Copy = require('copy-webpack-plugin')


module.export = {
    mode : 'development',

    output : {
        clean : true,
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
            },
        ],
    },

  optimizacion : {},

  plugins :[
    new HtmlWebPack({
        title : 'Mi webpack App',
        template : './src/index.html',
    }),
    new MiniCssExtract({
        filename: '[name].css',
        ignoreOrder : false,
    }),
  ]  
}