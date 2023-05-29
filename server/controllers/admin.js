require("dotenv").config;
const AstrologerModel = require("../models/AstrologerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AstrologerAppointmentModel = require("../models/AstrologerAppointmentModel");
const Usermodel = require("../models/Usermodel");
const AstrologerDetails = require("../models/AstrologerAccountModel");
const AstrologerAccountModel = require("../models/AstrologerAccountModel");
// register
exports.register = async (req, res) => {
    try {
        if (await AstrologerModel.findOne({ email: req.body.email })) {
            return res.status(401).json({
                success: false,
                message: "admin already exists"
            })
        }
        else {
            // generate password
            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;

            // store in db
            const newUser = await new AstrologerModel(req.body);
            await newUser.save();
            res.status(200).json({
                success: true,
                message: newUser,
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}




//login
exports.login = async (req, res) => {
    try {
        //collected information from frontend
        const { email, password, role } = req.body

        //validate
        if (!email || !password) {
            return res.status(401).send("email and password is required")
        }
        else if(role ===  "admin"){
            const astroDetails = await AstrologerModel.findOne({ email }); 
            if (astroDetails === null) {
                return res.status(401).send("email is incorrect")
            }
              //match the password
              if (await bcrypt.compare(password, astroDetails.password)) {
               
                const token = jwt.sign({ id: astroDetails._id, email }, process.env.SECRET_KEY, { expiresIn: '2h' })
                astroDetails.password = undefined
                // userDetails.token = token
                
                const options = {
// i am currently removing domain as in postman it is not creating token in cookies
                    // domain: process.env.REACT_APP_URL,
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                return res.status(200).cookie("token", token, options).json({
                    success: true,
                    token,
                    astroDetails
                })


            }
            else {
                return res.status(400).json({
                    success: 'false',
                    message: 'password is incorrect'
                })
            }
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

};


// charges
exports.charges = async(req, res) =>{

    try {
        const {nationalBookCharges,internationalBookCharges} = req.body;
    if(internationalBookCharges || nationalBookCharges){
        const admin = await AstrologerModel.findById(req.user._id)
        if(admin){
            admin.internationalBookCharges = internationalBookCharges;
            admin.nationalBookCharges = nationalBookCharges;
        }
        await admin.save();
        return res.status(200).json({
            success:true,
            message:admin,
        })
    } 
    else{
        return res.status(404).json({
            success:false,
            message:"charges not found"
        })
    }
    } catch (error) {
       res.status(500).json({
        success:false,
        message:error.message
       }) 
    }
    
    
}


// appointments
exports.appointments = async(req,res) =>{
    try {
        const allAppointments = AstrologerAppointmentModel.findById(req.user._id)
        if(!allAppointments){
        return res.status(404).json({
            success:true,
            message:"No appointments found",
        })}
        else{
            let arr = [];
            for(let i = 0 ;i< allAppointments.appointments.length; i++){
                const data = await Usermodel.findById(allAppointments.appointments[i].id)
                arr.push(data);
            }
            return res.status(200).json({
                data:arr,
                success:true,
            })
        }
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:error.message
        })
    }

}


// logout
exports.logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({
        success: true,
        message: "You are logout",
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

// accounts
exports.accounts = async (req,res)=>{
 
 try {
   const astroDetails = await AstrologerModel.findByIdAndUpdate(req.user._id, req.body)
   
// actually above astrodetail is not gettingupdated after the req.body is updated data is saved in db then it is not sending the updated data into astrodetails it is sending old data 
   const newData = await AstrologerModel.findByIdAndUpdate(req.user._id)
   if(!astroDetails){
   return res.status(404).json({
        success:false,
        message:"this astrologer is not registerd"
    })
   }
    await astroDetails.save();
   res.status(200).json({
    success:true,
    message:newData    
})
 } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
    
 }

}


exports.changePassword = async(req,res)=>{
    try {
        
  const {newPassword, oldPassword} = req.body;


  if(await bcrypt.compare(oldPassword, req.user.password)){
     // generate password
     const salt = await bcrypt.genSalt(10);

     const hashedPassword = await bcrypt.hash(newPassword, salt);
      const astroDetails = await AstrologerModel.findById(req.user._id);
      astroDetails.password = hashedPassword;
 
      await astroDetails.save();
    res.status(200).json({
       success:true,
       message:"password changed successfully"
   })
  }
  else{   
    res.status(400).json({
    success:false,
    message:"old password is wrong"
})

  }
    } catch (error) {
     res.status(500).json({
        success:false,
        message:error.message
     })     
    }
    
}

exports.profileSettings = async(req,res)=>{
    // this profile route is same as accounts api
    try {
        const astroDetails = await AstrologerModel.findByIdAndUpdate(req.user._id,req.body);
    
        const newData = await AstrologerModel.findByIdAndUpdate(req.user._id)
        res.status(200).json({
            success:true,
            message:"successfully updated values",
            data:newData,

        }) 
        await astroDetails.save();
    } catch (error) {
        res.status(500).json({
            success:true,
            message:error.message
        })
    }



}