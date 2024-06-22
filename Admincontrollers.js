const express = require('express');
const app = express();
const Myadd=require('../Models/Users').Myadd; 
const Myedit=require('../Models/Users').Myedit; 
const Mydelete=require('../Models/Users').Mydelete; 
const addflight=require('../Models/Flights').addflight; 
const editflight=require('../Models/Flights').editflight; 
const deleteflight=require('../Models/Flights').deleteflight; 
exports.submitadduserform = async (req, res) => {
    const {addname,addemail,addpassword} = req.body;

    try {
        
        const newaddUser = new Myadd({ addname,addemail,addpassword });
        await newaddUser.save();

        res.render('adduser');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Failed to submit form');
    }
};



exports.updateUser = async (req, res) => {
  const { Currentname, Currentemail, Currentpassword, newname, newemail, newpassword } = req.body;

  try {
      
      const user = await Myadd.findOne({ addname: Currentname, addemail: Currentemail, addpassword: Currentpassword });

      if (!user) {
          return res.status(404).send('User not found');
      }

      
      user.addname = newname;
      user.addemail = newemail;
      user.addpassword = newpassword;

      
      await user.save();
      res.render('edituser');
  } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).send('Failed to update user');
  }
};

exports.deleteUser = async (req, res) => {
  const { deletename } = req.body;

  try {
     
      const deletedUser = await Myadd.findOneAndDelete({ addname: deletename });

      if (!deletedUser) {
          return res.status(404).send('User not found');
      }

      res.render('removeuser');  
  } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).send('Failed to delete user');
  }
};


exports.submitaddflightform = async (req, res) => {
  const {addflightnumber, addflightorigin, addflightnumberdestination,addflightdtime, addflightddate,addflightatime}=req.body ;

  try {
      
      const newaddflight = new addflight({ addflightnumber, addflightorigin, addflightnumberdestination,addflightdtime,addflightddate,
        addflightatime });
      await newaddflight.save();

      res.render('addflight');
  } catch (err) {
      console.error('Error saving user:', err);
      res.status(500).send('Failed to submit form');
  }
};


exports.updateflight = async (req, res) => {
  const { flightnumber, Currentorigin, Currentdestination, Currentdtime, Currentddate, Currentatime, neworigin, newdestination, newdtime, newatime } = req.body;

  try {
      const flight = await addflight.findOne({ 
          addflightnumber: flightnumber,
          addflightorigin: Currentorigin,
          addflightnumberdestination: Currentdestination,
          addflightdtime: Currentdtime,
          addflightddate: Currentddate,
          addflightatime: Currentatime
      });

      if (!flight) {
          return res.status(404).send('Flight not found');
      }

      flight.addflightorigin = neworigin;
      flight.addflightnumberdestination = newdestination;
      flight.addflightdtime = newdtime;
      flight.addflightatime = newatime;

      await flight.save();

      res.render('editFlight');
  } catch (err) {
      console.error('Error updating flight:', err);
      res.status(500).send('Failed to update flight');
  }
};



exports.deleteflight = async (req, res) => {
  const { deleteflightnumber } = req.body;

  try {

      const deletedflight = await addflight.findOneAndDelete({addflightnumber: deleteflightnumber });

      if (!deletedflight) {
          return res.status(404).send('flight not found');
      }

      res.render('removeflight');
  } catch (err) {
      console.error('Error deleting flight:', err);
      res.status(500).send('Failed to delete flight');
  }
};


