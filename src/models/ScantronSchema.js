import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ScantronSchema = new Schema({
    img: {
        data: Buffer, contentType: String
    }
})
