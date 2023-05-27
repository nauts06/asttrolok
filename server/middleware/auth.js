const jwt = require("jsonwebtoken");
const Usermodel = require("../models/Usermodel");
const AstrologerModel = require("../models/AstrologerModel");
//model is optional

exports.checkLoginOrNot = async(req, res, next) => {
  // console.log("token checker",req.cookies);

  const token =
    req.cookies.token ||
    req.body.token 
    // req.header("Authorization").replace("Bearer ", "");
    
  if (!token) {
    return res.status(404).json("token is missing, Please login");
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    // console.log("decode",decode);


    const {role} = req.body
    if(role === "user"){
      req.user = await Usermodel.findById(decode.id)
      if(req.user?.role !== "user"){
        return res.status(400).json({
          success:false,
          message:"you are admin and trying to access user route",
      })
      }
    }
    else if(role === "admin"){
      req.user = await AstrologerModel.findById(decode.id)
      if(req.user?.role !== "admin"){
        return res.status(400).json({
          success:false,
          message:"you are user and trying to access admin route",
      })
      }
    }
    //this req.user is custom req that we are injecting now we can use whereEver token is present
    // bring in info from DB
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};