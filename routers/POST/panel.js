module.exports = function() {
    app.post('/create_script', async (req, res) => {
        let {
            name
        } = req.body;

        if(!name) return res.redirect('/create_script?error=true&message=Script adı boş bırakılamaz.');

        new scripts({
            name: name,
        }).save();

        log(`${res.locals.user.username} adlı yetkili ${name} adlı scripti oluşturdu.`.yellow);

        res.redirect('/panel?success=true&message=Script başarıyla oluşturuldu.');
    });

    app.post('/create_license', async (req, res) => {
        let {
            domain,
            script,
            expire,
            owner_name,
            owner_surname,
            owner_mail,
            owner_phone,
            owner_note
        } = req.body;

        if(!domain || !script || !expire || !owner_name || !owner_surname || !owner_mail || !owner_phone || !owner_note) return res.redirect('/create_license?error=true&message=Tüm alanları doldurunuz.');

        domain = domain.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];

        let domain_check = await licenses.findOne({ domain: domain });
        if(domain_check) return res.redirect('/create_license?error=true&message=Domain zaten kayıtlı.');

        let script_check = await scripts.findOne({ _id: script });
        if(!script_check) return res.redirect('/create_license?error=true&message=Script bulunamadı.');

        let randomStr = function(l) { let r = ''; let x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; for (let i = 0; i < l; i++) { r += x.charAt(Math.floor(Math.random() * x.length)); } return r; };

        let key = randomStr(32);
        new licenses({
            domain: domain,
            key,
            script,
            owner: {
                mail: owner_mail,
                name: owner_name,
                surname: owner_surname,
                phone: owner_phone,
                note: owner_note,
            },
            expire: expire,
        }).save();

        log(`${res.locals.user.username} adlı yetkili ${domain} adlı domain için ${script} adlı script için lisans oluşturdu. Son kullanma tarihi: ${expire}`.yellow);

        res.redirect(`/panel?success=true&message=Lisans başarıyla oluşturuldu. Lisans anahtarı: ${key}`);
    });

    app.post('/', async (req, res) => {
        let {
            search,
            script,
        } = req.body;

        if(!search) return res.redirect('/?error=true&message=Domain boş bırakılamaz.');
        if(!script) return res.redirect('/?error=true&message=Script boş bırakılamaz.');
        if(script.length != 24) return res.redirect('/?error=true&message=Geçersiz script.');

        search = search.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];

        let license = await licenses.findOne({ domain: search, script: script });
        if(!license) {
            log(`${search} adlı domain için ${script} adlı script için lisans bulunamadı.`.red);
            let checkReport = await reports.findOne({ domain: search, script: script, status: 'Görülmedi' });
            if(!checkReport) {
                new reports({
                    domain: search,
                    ip: req.ip,
                    script: script,
                }).save();
            }
            res.redirect('/?error=true&message=Lisans geçersiz.');
            return;
        }

        if(license.status == 'inactive') return res.redirect('/?error=true&message=Lisans aktif değil.');
        if(moment(license.expire).isBefore(moment())) return res.redirect('/?error=true&message=Lisans süresi dolmuş.');
        if(license.status == 'active') return res.redirect('/?success=true&message=Lisans geçerli.');
        if(license.status == 'expired') return res.redirect('/?error=true&message=Lisans süresi dolmuş.');

        res.redirect('/?error=true&message=Bilinmeyen bir hata oluştu.');
    });

    app.post('/license_check', async (req, res) => {
        let {
            script,
            domain
        } = req.body;

        if(!script) return res.redirect('/license_check?error=true&message=Script boş bırakılamaz.');
        if(!domain) return res.redirect('/license_check?error=true&message=Domain boş bırakılamaz.');

        domain = domain.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];

        let license = await licenses.findOne({ domain: domain, script: script });
        if(!license) return res.redirect('/license_check?error=true&message=Lisans bulunamadı.');

        log(`${res.locals.user.username} adlı yetkili ${domain} adlı domain için ${script} adlı script için lisans kontrol etti.`.yellow);

        res.json({
            data: license,
        });
    });
};