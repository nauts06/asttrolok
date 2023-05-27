const AstrologerModel = require("../models/AstrologerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AstrologerAppointmentModel = require("../models/AstrologerAppointmentModel");
const Usermodel = require("../models/Usermodel");
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
                    domain: process.env.REACT_APP_URL,
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

