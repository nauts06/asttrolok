const mongoose = require("mongoose")

const AstrologerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:2,
        max:25,
    },
    gender:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        min:6,
    },
    mobile:{
        type:Number,
    },
    profilePicture:{
        id:String,
        secure_url:String,
    },
    nationalBookCharges:{
        type:Number,
    },
    role:{
        type:String,
        default:"admin",
    },
    internationalBookCharges:{
        type:Number,
    }
},
{ timestamps: true }
);

module.exports  = mongoose.model("AstroPersonalDetails",AstrologerSchema);
