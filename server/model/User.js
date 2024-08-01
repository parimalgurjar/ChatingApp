import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    iss: {
        type: String
    },
    azp: {
        type: String
    },
    aud: {
        type: String
    },
    picture:{
        type:String,
        required:true
    },
    sub: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    email_verified: {
        type: Boolean
    },
    nbf: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
});

const user = mongoose.model('user', userSchema);

export default user;
