import mongoose, { version } from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, require: true, trim: true},
    description: { type: String, require: true},
    done: { type: Boolean, default: false}
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('task', schema);