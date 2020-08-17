const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.copy('src/index.html', 'build/index.html')
    .copyDirectory('src/data', 'build/data')
    .react('src/js/app.jsx', 'build/js/app.js')
    .sass('src/css/app.scss', 'build/css/app.css')

    .combine([
        'node_modules/@fortawesome/fontawesome-free/css/all.css',
    ], 'build/css/vendor.css')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'build/webfonts')

    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('tailwind.config.js')
        ]
    });