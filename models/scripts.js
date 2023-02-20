var scriptSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('scripts', scriptSchema);