const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const contactSchema = new Schema({
    UserName: { type: String }, 
    phone: { type: String },
    email: { type: String },
    message: { type: String },
    fileupload:{type:String}
});

const FormSchema = new Schema({
    from: { type: String },
    to: { type: String },
    departureDate: { type: String },
    departureTime: { type: String },
    preferredAirline: { type: String },
    preferredSeating: { type: String },
    adult: { type: Number },
    children: { type: Number },
    infant: { type: Number },
    oneWay: { type: Boolean },
    returnDate: { type: String },
    returnTime: { type: String },
    comments: { type: String }
});

const PaySchema = new Schema({
    name: { type: String},
    email: { type: String},
    address: { type: String },
    city: { type: String },
    state: { type: String},
    zipCode: { type: Number },
    nameOnCard: { type: String },
    cardNumber: { type: String},
    expMonth: { type: Number },
    expYear: { type: Number},
    cvv: { type: Number},
});




const adduserSchema = new Schema({
    addname: {type: String},
    addemail: {type: String,},
    addpassword: {type: String}
});

const edituserSchema = new Schema({
    Currentname: {type: String},
    Currentemail: {type: String,},
    Currentpassword: {type: String},
    newname: {type: String},
    newemail: {type: String,},
    newpassword: {type: String}
});

const deleteuserSchema = new Schema({
    deletename: {type: String},
});


const articleSchema = new Schema({
    UserNamee:{type: String},
    Passwordd:{type: String},
    Emaill:{type: String}
});

const signIn= new Schema({
    UserNameeIN:{type: String},
    PassworddIN:{type: String},
    
});





const MyUser = mongoose.model('MyUser', contactSchema);
const Mybooking = mongoose.model('Mybooking', FormSchema);
const Mypay=mongoose.model('Mypay',PaySchema);
const Myadd=mongoose.model('Myadd',adduserSchema);
const Myedit=mongoose.model('Myedit',edituserSchema);
const Mydelete=mongoose.model('Mydelete',deleteuserSchema);
const Mysign =mongoose.model('Mysign',articleSchema);
const MysignIN =mongoose.model('MysignIN',signIn);

module.exports = { MyUser, Mybooking ,Mypay,Myadd,Myedit,Mydelete,Mysign,MysignIN}; 