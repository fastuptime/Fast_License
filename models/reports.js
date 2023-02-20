var reportSchema = new mongoose.Schema({
    domain: String,
    ip: String,
    script: String, // script name
    status: { default: "Görülmedi", type: String }, // incelendi, görülmedi
    date: { default: moment().format('YYYY-MM-DD HH:mm:ss'), type: String },
});

module.exports = mongoose.model('reports', reportSchema);