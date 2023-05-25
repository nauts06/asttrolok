const bcrypt = require("bcrypt");
const Usermodel = require("../models/Usermodel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        if (!req.body.name || !req.body.password || !req.body.email || !req.body.gender || !req.body.birthTime || !req.body.birthCountry || !req.body.birthCity || !req.body.birthDate || !req.body.mobile) {
            return res.status(404).json({
                success: false,
                message: "some fields are missing",

            })
        }
        else if (await Usermodel.findOne({ email: req.body.email })) {
            return res.status(401).json({
                success: false,
                message: "user already exists"
            })
        }
        else {
            // generate password
            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;

            // store in db
            const newUser = await new Usermodel(req.body);
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
    console.log("iam working", 1);
    try {
        //collected information from frontend
        const { email, password } = req.body

        //validate
        if (!email || !password) {
            console.log("iam working", 2);
            return res.status(401).send("email and password is required")
        }
        //check user in database
        else {
            const userDetails = await Usermodel.findOne({ email }); 
            
            if (userDetails === null) {
                console.log("iam working", 3);
                return res.status(401).send("email is incorrect")
            }
            //match the password
            if (await bcrypt.compare(password, userDetails.password)) {
                console.log("iam working", 4);
                const token = jwt.sign({ id: userDetails._id, email }, process.env.SECRET_KEY, { expiresIn: '2h' })
                userDetails.password = undefined
                // userDetails.token = token
                
                const options = {
                    domain: process.env.REACT_APP_URL,
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                return res.status(200).cookie("token", token, options).json({
                    success: true,
                    token,
                    userDetails
                })

            }
            else {
                console.log("iam working", 5);
                return res.status(400).json({
                    success: 'false',
                    message: 'password is incorrect'
                })
            }
        }
        
  
    

    } catch (error) {
        console.log("iam working", 6);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

};
