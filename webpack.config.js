const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('script', './assets/js/script.js')
    .addEntry('React-plx', './assets/js/React-plx.js')
    .addEntry('Header', './assets/js/header.js')
    .addStyleEntry('global', './assets/styles/app.css')
    .splitEntryChunks()
    .enableSassLoader()
    .enableReactPreset()
    .disableSingleRuntimeChunk()
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            plugins: [
                require('autoprefixer'),
            ],
        };
    })
    .configureTerserPlugin((options) => {
        options.terserOptions = {
            compress: {
                keep_fnames: true,
                keep_classnames: true
            },
            output: {
                beautify: true,
                indent_level: 2
            }
        };
    })
    .addRule({
        test: /\.fbx$/,
        use: 'file-loader'
    });


const webpackConfig = Encore.getWebpackConfig();
webpackConfig.mode = 'development';

module.exports = webpackConfig;