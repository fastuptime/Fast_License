module.exports = function() {
    app.get('/login', async (req, res) => {
        res.render('panel/pages/login.ejs', {
            page_name: 'Giriş Yap',
        });
    });
};