const express = require('express');
    const app = express();
    const MyUser=require("../Models/Users").MyUser
    const Mybooking= require('../Models/Users').Mybooking;
    const Mypay=require('../Models/Users').Mypay;
    const addflight=require('../Models/Flights').addflight;
    const Myflightnumstatus=require('../Models/Flights').flightnumstatus;
    const bcrypt = require('bcryptjs');
    const { Mysign, MysignIN } = require('../Models/Users'); 
  
    exports.submitcontactForm = async (req, res) => {
        const { UserName, phone, email, message,fileupload } = req.body;
    
        try {
            const newUser = new MyUser({ UserName, phone, email, message,fileupload });
            await newUser.save();
    
            res.render('index2');
        } catch (err) {
            console.error('Error saving user:', err);
            res.status(500).send('Failed to submit form');
        }
    };

exports.searchFlights = async (req, res) => {
    const { from, to, departureDate, departureTime } = req.body;

    try {
        const departureDateTime = new Date(`${departureDate}T${departureTime}`);

        const flights = await addflight.find({
            addflightorigin: from,
            addflightnumberdestination: to,
            $or: [
            
                {
                    $and: [
                        { addflightddate: { $eq: departureDateTime.toISOString().split('T')[0] } },
                        { addflightdtime: { $gte: departureDateTime.toISOString().split('T')[1] } }
                    ]
                },

                {
                    addflightddate: { $gt: departureDateTime.toISOString().split('T')[0] }
                }
            ]
        });

        if (flights.length === 0) {
            res.render('index2')
        } else {
            res.render('bookTickets', { flights });
        }
    } catch (err) {
        console.error('Error searching flights:', err);
        res.status(500).send('Failed to search flights');
    }
};

exports.searchstatus = async (req, res) => {
    const { flightnumstatus } = req.body;

    try {
        const myStatus = new Myflightnumstatus({ flightnumstatus });

        const searchStat = {
            addflightnumber: myStatus.flightnumstatus,
        };

        const status = await addflight.find(searchStat);

        if (status.length === 0) {
            res.send('No flights found.');
        } else {
            res.render('status', { status });
        }
    } catch (err) {
        console.error('Error searching Status:', err);
        res.status(500).send('Failed to search Status');
    }
};


exports.submitpayform = async (req, res) => {
    const {name,ElementInternals,address,city,state,zipCode,nameOnCard,cardNumber,expMonth,expYear,cvv  } = req.body;

    try {
        let newUserpay = await Mypay.findOne({
          
            expMonth: expMonth
        });

        if (!newUserpay) {
            return res.status(404).send('User payment data not found');
        }

newUserpay.name=name
newUserpay.ElementInternals=ElementInternals
newUserpay.address=address
newUserpay.city=city
newUserpay.state=state
newUserpay.zipCode=zipCode
newUserpay.nameOnCard=nameOnCard
newUserpay.cardNumber=cardNumber
newUserpay.expMonth=expMonth
newUserpay.expYear=expYear
newUserpay.cvv=cvv

        await newUserpay.save();

        res.render('pay');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};


exports.submitadduserform = async (req, res) => {
    const { UserNamee, Passwordd, Emaill } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(Passwordd, 10); 

        const newsignUser = new Mysign({
            UserNamee,
            Passwordd: hashedPassword, 
            Emaill
        });

        await newsignUser.save();

        res.render('sign');
    } catch (err) {
        console.error('Error Sign-up user:', err);
        res.status(500).send('Failed to submit form');
    }
};

exports.signInForm = async (req, res) => {
    const { UserNameeIN, PassworddIN } = req.body;

    try {
        const user = await Mysign.findOne({ UserNamee: UserNameeIN });

        if (!user) {
            return res.send('No User found.'); 
        }

        const isMatch = await bcrypt.compare(PassworddIN, user.Passwordd);

        if (!isMatch) {
            return res.send('Password incorrect.');
        }

        res.render('index2', { user }); 
    } catch (err) {
        console.error('Error searching User:', err);
        res.status(500).send('Failed to search User');
    }
};

