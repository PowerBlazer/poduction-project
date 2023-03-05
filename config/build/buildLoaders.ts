import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options:BuildOptions):RuleSetRule[]{
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? 'style-loader':MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options:{
                esModule: true,
                modules:{
                    auto:(resPath:string)=>Boolean(resPath.includes('.module.')),
                    localIdentName:options.isDev 
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:5]'
                },
                
            }
          },
          "sass-loader",
        ],
    };

    const typescriptLoader = {
        test:/\.tsx?$/,
        use:"ts-loader",
        exclude:/nodemodules/
    } 

    return [
        typescriptLoader,
        cssLoaders
    ]
}