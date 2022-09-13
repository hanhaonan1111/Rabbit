const {override, addWebpackAlias, adjustStyleLoaders, addWebpackModuleRule,} = require('customize-cra');
const path = require('path')


module.exports = override(
    // 以 @ 符号代替 ../../src
    addWebpackAlias({
        '@': path.join(__dirname, "src"),
    }),
    addWebpackModuleRule({
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
            limit: 64,
            name: 'static/media2/[name].[hash:8].[ext]',
        },
    }),
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
            rule.use.push({
                loader: require.resolve("sass-resources-loader"),
                options: {
                    resources: "./src/assets/style/comment.scss" //这里是你自己放公共scss变量的路径
                }
            });
        }
    })
);