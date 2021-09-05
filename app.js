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
    res.render('404');
});


app.listen(9000, (err, data) => {
    console.log("working")
})