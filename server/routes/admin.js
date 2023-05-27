const express = require("express");
const adminRoutes = express.Router();
const { checkLoginOrNot } = require("../middleware/auth");
const { login, register, charges } = require("../controllers/admin");

adminRoutes.get("/",(req,res)=>{
    res.status(400).send("welcome to the user routes")
})

adminRoutes.post("/login",login)
adminRoutes.post("/register",register)
adminRoutes.post("/charges",checkLoginOrNot,charges)

module.exports = adminRoutes;

