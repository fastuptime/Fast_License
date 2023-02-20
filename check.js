module.exports = function () {
    setInterval(async () => {
        console.log('Checking...');
        let lisanslar = await licenses.find({ status: 'active' });
        lisanslar.forEach(async (lisans) => {
            if(moment(lisans.expire).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
                await licenses.findOneAndUpdate({ _id: lisans._id }, { $set: { status: 'expired' } });
                console.log(`Lisans ${lisans.key} süresi dolmuş.`);
            }
        });
    }, 5 * 60 * 1000);
};
