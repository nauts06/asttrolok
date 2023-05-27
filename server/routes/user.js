const express = require("express");
const userRoutes = express.Router();
const { register, login, profileUpdate,} = require("../controllers/user");
const { checkLoginOrNot } = require("../middleware/auth");

userRoutes.get("/",(req,res)=>{
    res.status(400).send("welcome to the user routes")
})

userRoutes.post("/register",register)
userRoutes.post("/login",login)


module.exports = userRoutes

