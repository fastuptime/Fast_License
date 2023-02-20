module.exports = function() {
    app.post('/api/v1', async (req, res) => {
        let {
            domain,
            key,
            action,
        } = req.body;

        if(!domain || !key || !action) return res.json({ status: "error", message: "Lütfen tüm alanları doldurun. domain, key, action" });

        let license = await licenses.findOne({ domain: domain, key: key });
        if(!license) return res.json({ status: "error", message: "Lisans bulunamadı." });

        switch(action) {
            case "check":
                if(license.status == "active") return res.json({ status: "success", message: "Lisans aktif." });
                if(license.status == "inactive") return res.json({ status: "error", message: "Lisans pasif." });
                if(license.status == "expired") return res.json({ status: "error", message: "Lisans süresi dolmuş." });
                break;
            case "expire_date":
                return res.json({ status: "success", date: license.expire });
                break;
            case "owner":
                return res.json({ status: "success", owner: license.owner });
                break;
            default:
                return res.json({ status: "error", message: "Geçersiz işlem. İşlemler: check, expire_date, owner" });
                break;
        }
    });
};