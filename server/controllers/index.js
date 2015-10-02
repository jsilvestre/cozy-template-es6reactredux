export function main(req, res) {
    res.status(200).render('index', {
        imports: 'window.toto = "Hello world!";',
    });
}
