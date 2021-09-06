require(`dotenv`).config({ path:`process.env` });

const express = require("express")
     methodOverride = require("method-override"),
     flash = require('connect-flash'),
     passport = require('passport'),
     mongoose =require("mongoose"),
     session = require('express-session'),
     app = express();
     morgan = require('morgan')


require('./config/passport')(passport);

require("ejs")

const dbURL = `mongodb://127.0.0.1:27017`;



let dbNameToUse = `onlinebhutaanteerresult`,
    dbURLToUse = `mongodb://127.0.0.1:27017/`

if((process.env.MODE) && (process.env.MODE.toLowerCase().trim() === `prod`)){
    dbNameToUse = `onlinebhutaanteerresultproduction`,
    dbURLToUse = `mongodb://127.0.0.1:27017/`
}


mongoose.set(`runValidators`, true); // to run validate operators on update operations too

mongoose.connect(dbURLToUse, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: dbNameToUse
})
.then((data) => console.log(`[ ${ dbNameToUse } ] DB Connected`))
.catch((err) => {
    console.log(`DB Not Connected`);
    console.log(err);
});



app.use(express.static(__dirname + "/public"))

app.use('/static', express.static('public'));

// Express body parser
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({
    extended: false
}))



app.use(methodOverride("_method"))


app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

app.use(morgan(`dev`))

// Global variables
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

    next();
});
//settting view engine ejs
app.set("view engine", "ejs")


// Routes
const routes = require(`./routers/_all`);
app.use(routes);


app.get('*', function (req, res) {
    res.render('404',{docTitle:`NOT FOUND`});
});


app.listen(process.env.PORT, (err, data) =>console.log(`Server listening on ${ process.env.PORT }`))