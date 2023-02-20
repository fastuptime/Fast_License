module.exports = function() {
    app.get('/', async (req, res) => {
        res.render('index.ejs', {
            scripts: await scripts.find({}), 
        });
    });

    app.get('/logout', (req, res) => {
        res.clearCookie('username');
        res.clearCookie('password');
        res.redirect('/');
    });
};