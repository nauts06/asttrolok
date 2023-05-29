const express = require("express");
const adminRoutes = express.Router();
const { checkLoginOrNot } = require("../middleware/auth");
const { login, register, charges, logout, accounts, changePassword, profileSettings } = require("../controllers/admin");

adminRoutes.get("/",(req,res)=>{
    res.status(400).send("welcome to the user routes")
})

adminRoutes.post("/login",login)
adminRoutes.post("/register",register)
adminRoutes.post("/charges",checkLoginOrNot,charges)
adminRoutes.post("/accounts",checkLoginOrNot,accounts)
adminRoutes.post("/logout",checkLoginOrNot,logout)
adminRoutes.post("/changePassword",checkLoginOrNot,changePassword)
adminRoutes.post("/profileSettings",checkLoginOrNot,profileSettings)


module.exports = adminRoutes;

