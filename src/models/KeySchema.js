import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const KeySchema = new Schema({
    test: {
        type: String
    },
    answers: [{
        question: {
            type: Number
        },
        bubbleSchema: [{
            a: { type: Boolean, required: true},
            b: { type: Boolean, required: true},
            c: { type: Boolean, required: true},
            d: { type: Boolean, required: true},
            e: { type: Boolean, required: true},
        }]
    }]
})