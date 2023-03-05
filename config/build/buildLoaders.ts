import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options:BuildOptions):RuleSetRule[]{
    const typescriptLoader = {
        test:/\.tsx?$/,
        use:"ts-loader",
        exclude:/nodemodules/
    } 

    return [
        typescriptLoader,
    ]
}