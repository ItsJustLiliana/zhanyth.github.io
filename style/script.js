import SwupScriptsPlugin from '@swup/scripts-plugin';

const swup = new Swup({
    plugins: [new SwupScriptsPlugin()]
});

new SwupScriptsPlugin({
    head: true,
    body: true
});