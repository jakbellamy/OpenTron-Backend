import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ClassroomSchema = new Schema({
    className: {
        type: String
    },
    roster: [{
        student: {
            type: String
        }
    }]
})