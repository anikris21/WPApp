const path = require("path");

module.exports = {
  // entry: ["./src/index", "./src/home"],
  entry: {
    home: "./src/home",
    index: "./src/index"
  }, 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
      //   test : /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //         presets: ["@babel/preset-env"],
      //     }
      //  },
            test: /\.ts$/,
            exclude : /node_modules/,
            use: "ts-loader"
      }
    ]
  },
  resolve : {
    extensions : [".ts", ".js"]
  }
};
