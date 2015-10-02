window.onload = () => {
    const locale = window.locale;
    delete window.locale;

    const localesLoader = {
        en: require('./locales/en'),
        fr: require('./locales/fr'),
    };

    let locales = localesLoader[locale];

    // Fallback to english if it can't for some reason.
    if (!locales) {
        locales = localesLoader.en;
    }

    // Initialize polyglot object with locales.
    const Polyglot = require('node-polyglot');
    const polyglot = new Polyglot({locale: locale});

    polyglot.extend(locales);

    // Handy shortcut.
    window.t = polyglot.t.bind(polyglot);

    // Initialize the routing and start the app.
    const router = require('./router');
    router.start();
};
