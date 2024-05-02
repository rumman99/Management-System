import {Schema, model} from "mongoose";


const formSchema= new Schema({
        name: {
            type: String,
            required: [true, "Name Needed!!!"],
        },
        email: {
            type: String,
            required: [true, "Email Needed!!!"],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: [true, "Phone Needed!!!"],
        },
        message: {
            type: String,
            required: [true, "Message Needed!!!"],
        }
},
    {timestamps: true}
);


const Form= model('Form', formSchema);

export default Form;