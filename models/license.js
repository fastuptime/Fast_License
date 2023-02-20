const licenseSchema = new mongoose.Schema({
    domain: String,
    key: String, // License key
    script: String, // script name
    owner: {
        mail: String, // owner mail
        name: String, // owner name
        surname: String, // owner surname
        phone: String, // owner phone
        note: String, // Note
    },
    expire: String, // expire date
    status: { default: 'active', type: String }, // active, inactive, expired
    created: { default: moment().format('YYYY-MM-DD HH:mm:ss'), type: String },
});

module.exports = mongoose.model('licenses', licenseSchema);