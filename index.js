const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { default: mongoose } = require('mongoose');

/////////////////////////////////////////////////

global.config = require('./config.js');
global.colors = require('colors');
global.app = express();
global.moment = require('moment');
global.mongoose = require('mongoose');
global.log = log;
global.ejs = require('ejs');
global.fs = require('fs');

/////////////////////////////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
    log(`MongoDB Bağlantı Hatası: ${err}`.red);
});

mongoose.connection.on('open', () => {
    log(`MongoDB Bağlantısı Başarılı!`.green);
});

global.scripts = require('./models/scripts.js');
global.licenses = require('./models/license.js');
global.reports = require('./models/reports.js');
/////////////////////////////////////////////////
function log(msg) {
    let m = `${colors.bgCyan(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`)} --> ${msg}`;
    console.log(m);
    fs.appendFile('./logs.log', m + '\n', (err) => {
        if(err) console.log(err);
    });
}
/////////////////////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './www');
app.use('/main_page', express.static('./www/main_page'));
app.use('/assets', express.static('./www/assets/panel/assets'));

app.use((req, res, next) => {
    res.locals.site = config.site;
    res.locals.ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if(req.cookies.username && req.cookies.password) {
        let user = config.admins.find(x => x.username == req.cookies.username && x.password == req.cookies.password);
        if(user) {
            res.locals.user = user;
        }
    }
    if(!res.locals.user && req.path != '/login' && req.path != '/' && req.path != '/api/v1') return res.redirect('/login?error=true&message=Lütfen giriş yapın.');
    next();
});

/////////////////////////////////////////////////

require('./routers/routes.js')();
require('./check.js')();

/////////////////////////////////////////////////

app.listen(80, () => {
    log(`FastLicense Başlatıldı! Port: ${colors.green(config.port)}`.cyan);
});
