const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.copy('src/index.html', 'docs/index.html')
    .copyDirectory('src/data', 'docs/data')
    .react('src/js/app.jsx', 'docs/js/app.js')
    .sass('src/css/app.scss', 'docs/css/app.css')

    .combine([
        'node_modules/@fortawesome/fontawesome-free/css/all.css',
    ], 'docs/css/vendor.css')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'docs/webfonts')

    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('tailwind.config.js')
        ]
    });