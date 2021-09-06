const express = require('express'),
      bcrypt = require('bcryptjs'),
      passport = require("passport"),

      User = require("../model/user")

      router = express.Router();



//@desc      login form
//@route     GET/users/login
//@access    public
router.get("/login", async (req, res) => {
    res.render("admin/login",{ docTitle: `Admin login`})
})

//@desc      register form
//@route     GET/users/register
//@access    public
router.get("/register", async (req, res) => {
    res.render("admin/register",{ docTitle: `Admin Register`})
})

//@desc      register 
//@route     GET/users/register
//@access    public
router.post("/register", (req, res) => {

    const {
        name,
        email,
        password,
        confirmpassword
    } = req.body;

    let errors = [];
    //checking field is empty or not
    if (!name || !email || !password || !confirmpassword) {
        errors.push({
            msg: 'Please enter all fields'
        });
    }
    //checking password is same or not
    if (password != confirmpassword) {
        errors.push({
            msg: 'Passwords do not match'
        });
    }
    //checking the lenght of password is less than 6
    if (password.length < 6) {
        errors.push({
            msg: 'Password must be at least 6 characters'
        });
    }
    //checking if there any error
    if (errors.length > 0) {
        res.render('admin/register', {
            errors,
            name,
            email,
            password,
            confirmpassword,
            docTitle: `Admin login`
        });
    } else {
        //checking if user exist or not
        User.findOne({
            email: email
        }).then(user => {
            if (user) {
                errors.push({
                    msg: 'Email already exists'
                });
                res.render('admin/register', {
                    errors,
                    name,
                    email,
                    password,
                    confirmpassword,
                    docTitle: `Admin login`
                });
            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                });
                // hasing password before saving in data base
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                req.flash(
                                    'error_msg',
                                    'You are now registered and can log in'
                                );
                                res.redirect('/admin/login');
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }
})

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/admin/login',
        failureFlash: true

    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
});





module.exports = router