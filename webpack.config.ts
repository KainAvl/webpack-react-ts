import webpack from "webpack";
import { BuildMode, BuildOptions, BuildPlatform } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";
import { Port } from "webpack-dev-server";
import path from "path";

interface EnvVariable {
  port: Port;
  mode: BuildMode;
  platform: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariable) => {
  
  const options: BuildOptions = {
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    platform: env.platform ?? 'desktop',
    analyzer: env.analyzer,
    paths: {
      src: path.resolve(__dirname,'src'),
      entry: path.resolve(__dirname,'src','index.tsx'),
      output: path.resolve(__dirname,"build"),
      html: path.resolve(__dirname, 'public', 'index.html'),
      public: path.resolve(__dirname, 'public'),
    }
  }
  const config: webpack.Configuration = buildWebpack(options);
  return config;
};