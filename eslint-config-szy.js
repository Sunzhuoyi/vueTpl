// 自定义eslint规则
module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        "no-console": "off",
        "no-alert": "off",
        indent: ["error", 2],
        quotes: ["warn", "single"]
    }
};