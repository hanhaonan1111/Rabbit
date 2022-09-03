const {override, addWebpackAlias, addPostcssPlugins} = require('customize-cra');
const path = require('path')
const px2viewport = require('postcss-px-to-viewport')


module.exports = override(
    // 以 @ 符号代替 ../../src
    addWebpackAlias({
        '@': path.join(__dirname, "src"),
    }),
    addPostcssPlugins([
        px2viewport({
            viewportWidth: 375
        })
    ]),
    // fixBabelImports("import", {
    //     libraryName: "antd-mobile",
    //     style: "css",
    // }),
);