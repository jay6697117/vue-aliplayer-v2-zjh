module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
        'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },

    globals: {
        'Aliplayer': false
    },
}
