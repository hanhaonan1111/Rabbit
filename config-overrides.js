const {override, addWebpackAlias, adjustStyleLoaders} = require('customize-cra');
const path = require('path')


module.exports = override(
    // 以 @ 符号代替 ../../src
    addWebpackAlias({
        '@': path.join(__dirname, "src"),
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