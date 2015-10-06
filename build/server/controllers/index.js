'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.main = main;

function main(req, res) {
    res.status(200).render('index', {
        imports: 'window.toto = "Hello world!";'
    });
}