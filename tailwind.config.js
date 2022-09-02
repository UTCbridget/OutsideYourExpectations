const colors = require('./tokens/colors.tailwind');

module.exports = {
    content: ['./src/**/*.njk', './src/**/*.md', './assets/**/*.js'],
    theme: {
        colors,
        extend: {},
    },
    plugins: [],
}