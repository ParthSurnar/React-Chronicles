import mongoose from "mongoose";
const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});

// Check if the model already exists, if so, use the existing one
const Payment = mongoose.models.Payment || model("Payment", paymentSchema);

export default Payment;
