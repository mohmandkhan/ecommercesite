const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    })
}

exports.postLogin = (req, res, next) => {
    User.findById('61998feff80537b8461c7da8')
    .then(user=>{
        req.session.isLoggedIn = true;
        req.session.user = user;
        res.redirect('/');
    })
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err=>{
        console.log(err);
        res.redirect('/');
    });
}