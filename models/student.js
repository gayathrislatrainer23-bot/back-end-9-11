const mongoose  = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age:{
         type:Number,
         required:true,
         min:10,
         max:30
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
               type:String,
            required:true,
            unique:true, 
        },
        course:{
            type:String,
            // required:true
        }

    }, {timestamps: true}
)

module.exports = mongoose.model("Student",studentSchema )