import americano from 'americano';

americano.start({
    name: 'template',
    port: process.env.PORT || 9250,
    root: __dirname,
});
