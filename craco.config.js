const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@Primary-color': '#1da57a' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
