const { override, addWebpackAlias } = require('customize-cra');
const path = require('path')



module.exports = override(
    // 以 @ 符号代替 ../../src
    addWebpackAlias({
        '@': path.join(__dirname, "src"),
    }),

);