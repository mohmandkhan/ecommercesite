const path = require('path');

//Third party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGO_URI = 'mongodb://localhost/shop';

const app = express();
const store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));

//Read access to this path
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}));

app.use((req, res, next) =>{
    User.findById('61998feff80537b8461c7da8')
    .then(user=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        console.log(err)
    });
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose.connect(MONGO_URI)
.then(result=>{
    // User.findOne().then(user=>{
    //     if(!user){
    //         const user = new User({
    //             name: 'Majid',
    //             email: 'mohmandkhan@gmail.com',
    //             cart: {
    //                 items: []
    //             }
    //         });
    //     }
    // })
    // user.save();
    app.listen(5001);
}).catch(error=>{
    console.log(error);
})
 



