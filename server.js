require('dotenv').config()
const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('./config/auth')(passport);
const googleId = require('./config/auth');
const {connectDB} = require('./database/db');
const authRoutes = require('./routes/auth.route');
const profileRoutes = require('./routes/profile')
const adminRouter = require('./routes/admin.route')
const app = express()

app.use(express.json());
connectDB();

//ejs 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


//Express sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//route
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);
app.use('/admin',adminRouter);


app.get('/', (req, res) => {
res.render('home')
    // return res.status(200).json({ messag: 'home page' });
  });

app.get('/auth/login', (req, res) => {
res.render('login')
});

app.get('/auth/logout', (req, res) => {
res.render('home')
});

app.get('/admin/postevent', (req, res) => {
  res.render('postevent')
  });

    

 

  const port = process.env.PORT ||3400;
//404 page
// app.all('*', (req, res) => {
//     res.status(404).json({ messag: '404 page' });
//   });

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });