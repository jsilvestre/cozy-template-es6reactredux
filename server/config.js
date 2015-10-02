import americano from 'americano';
import fs from 'fs';
import path from 'path';

// Path of the public assets that can be served.
const assetsPaths = path.resolve(__dirname, '../client/public');

// Detect if it should use the precompiled jade or the raw jade.
const builtViewPath = path.resolve(__dirname, '../client/index.js');
const useBuiltView = fs.existsSync(builtViewPath);

export default {
    common: {
        use: [
            americano.bodyParser(),
            americano.methodOverride(),
            americano.errorHandler({
                dumpExceptions: true,
                showStack: true,
            }),
            americano.static(assetsPaths, {
                maxAge: 86400000,
            }),
        ],

        set: {
            'view engine': useBuiltView ? 'js' : 'jade',
            'views': path.resolve(__dirname, '../client/'),
        },

        engine: {
            js: function loadJSTemplate(filePath, locales, callback) {
                callback(null, require(filePath)(locales));
            },
        },
    },

    development: [
        americano.logger('dev'),
    ],

    production: [
        americano.logger('short'),
    ],

    plugins: [
        'cozydb',
    ],
};
