const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: "none",
    entry: {
       app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        proxy: {
            "/api": "http://localhost:8081"
        }
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                // loader从右向左调用
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
              test: /\.scss$/,
              use: [
                  "style-loader",
                  "css-loader",
                  {
                      loader: "postcss-loader",
                      options: {
                          plugins: [require("postcss-preset-env")]
                      }
                  },
                  "sass-loader"
              ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8092,
                            name: "img/[hash:7].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8092,
                            name: "media/[hash:7].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8092,
                            name: "font/[hash:7].[ext]"
                        }
                    }
                    ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                enforce: "pre", // 确保eslint检查的是未经其他Loader处理的源代码
                options: {
                    formatter: require("eslint-friendly-formatter")
                },
                loader: "eslint-loader",
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "项目模版"
        }),
        new StyleLintPlugin({
            files: ["src/**/*.{vue,css,scss,sass}"]
        }),
    ]
}