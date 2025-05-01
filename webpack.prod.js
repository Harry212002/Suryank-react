const path=require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { use } = require('react');
const loader = require('sass-loader');
const { type } = require('os');



module.exports={
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'),
        clean:true,
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    //"style-loader","css-loader"
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:"css-loader",options:{modules:true}},
                
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use:[
                    //"style-loader","css-loader"
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:"css-loader",options:{modules:true}},
                    {loader:"sass-loader"}
                ]
            },
           
            {
                test:/\.(jpe?g|png|gif|jpg)$/,
                type:"asset/resource"
            }
            

        ]
    },

}
