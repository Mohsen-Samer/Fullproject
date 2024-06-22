const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const MyUser = require("./Models/Users");
const MyUser1 = require("./Models/Users").Myadd;
const MyUser2 = require("./Models/Users").MyUser;
const MyUser3 = require("./Models/Users").Mypay;
const routes = require("./Routes/User");
const Myflight1 = require("./Models/Flights").addflight;
const Myflight = require("./Models/Flights");
const addminroutes = require("./Routes/Admin");
const fileUpload = require('express-fileupload');
const session=require('express-session');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/Routes', routes);
app.use('/Routes', addminroutes);
app.use(fileUpload());
app.use(session({
    secret: 'secret-key', // Replace with your own secret key
    resave: false,
    saveUninitialized: true
  })); 
const dbURI = 'mongodb+srv://mohsen88:mohsen2004@cluster0.8qbyipb.mongodb.net/mytest?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.get("/", (req, res) => {
        res.render('index');

})
app.get("/Routes/index2", (req, res) => {
    res.render('index2');

})


app.get("/index2", (req, res) => {
    res.render('index2');

})
app.get("/Routes/pay", (req, res) => {
    res.render('pay');

})
app.get("/About", (req, res) => {
    res.render('About');

})
app.get("/adduser", (req, res) => {
    res.render('adduser');

})

app.get("/edituser", (req, res) => {
    res.render('edituser');

})

app.get("/removeuser", (req, res) => {
    res.render('removeuser');

})
app.get("/addflight", (req, res) => {
    res.render('addflight');

})

app.get("/editflight", (req, res) => {
    res.render('editflight');

})

app.get("/removeflight", (req, res) => {
    res.render('removeflight');

})

app.get("/status", (req, res) => {
    res.render('status');

})

app.get("/Routes/Flightstatus", (req, res) => {
    res.render('Flightstatus');
})

app.get("/Routes/myBooking", (req, res) => {
    res.render('myBooking');
})

app.get("/Flightstatus", (req, res) => {
    res.render('Flightstatus');
})

app.get("/myBooking", (req, res) => {
    res.render('myBooking');
})


app.get("/sign", (req, res) => {
    res.render('sign');
})


app.get("/Routes/planshape", (req, res) => {
    res.render('planshape');
})


app.get("/showflight", (req, res) => {
    Myflight1.find().then((result)=>{
        res.render('showflight',{arr:result});
    }).catch((err)=>{
        console.log(err);
    });

  
   
});


app.get("/showuser", (req, res) => {
    MyUser1.find().then((result)=>{
        res.render('showuser',{arr:result});
    }).catch((err)=>{
        console.log(err);
    });

  
   
});


app.get("/showcontact", (req, res) => {
    MyUser2.find().then((result)=>{
        res.render('showcontact',{arr:result});
    }).catch((err)=>{
        console.log(err);
    });
});



app.get("/ticket", (req, res) => {
    MyUser3.find().then((result)=>{
        res.render('ticket',{arr:result});
    }).catch((err)=>{
        console.log(err);
    });
});

app.get("/Routes/ticket", (req, res) => {
    MyUser3.find().then((result)=>{
        res.render('ticket',{arr:result});
    }).catch((err)=>{
        console.log(err);
    });
});

app.get("/FlightCommands", (req, res) => {
    res.render('FlightCommands');
})

app.get("/index", (req, res) => {
    res.render('index');
})

app.get("/UserCommands", (req, res) => {
    res.render('UserCommands');
})

app.get("/About2", (req, res) => {
    res.render('About2');
})

app.get("/Routes/About2", (req, res) => {
    res.render('About2');
})


app.get("/admin1", (req, res) => {
    res.render('admin1');
})


app.post("/Routes/submitsignin", (req, res) => {
    const { UserNameeIN, PassworddIN } = req.body;
   
    if (UserNameeIN === 'exampleUser' && PassworddIN === 'examplePassword') {
        req.session.user = UserNameeIN; 
        res.redirect('/index2'); 
    } else {
        res.send('Invalid username or password'); 
    }
});

