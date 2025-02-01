import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    bio: { type: String },
    location: { type: String },
    
});

// Only check once to avoid redundancy
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;