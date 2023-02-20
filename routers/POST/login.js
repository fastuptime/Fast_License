module.exports = function() {
    app.post('/login', async (req, res) => {
        let {
            username,
            password
        } = req.body;

        if(!username || !password) return res.redirect('/login?error=true&message=Kullanıcı adı veya şifre boş bırakılamaz.');
        
        let user = config.admins.find(x => x.username == username && x.password == password);

        log(`${username} adlı yetkili hesabına giriş denemesi yapıldı. İşlem: ${user ? 'Başarılı' : 'Başarısız'}! IP: ${res.locals.ip}`.yellow);

        if(!user) return res.redirect('/login?error=true&message=Kullanıcı adı veya şifre yanlış.');

        res.cookie('username', username, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
        });

        res.cookie('password', password, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
        });

        log(`${username} adlı yetkili giriş yaptı.`.green);

        res.redirect('/panel');
    });
};