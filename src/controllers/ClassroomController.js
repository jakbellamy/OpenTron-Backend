import mongoose from 'mongoose'
import {ClassroomSchema} from '../models/ClassroomSchema'
const Classroom = mongoose.model('Classroom', ClassroomSchema)

export const addNewClassroom = (req, res) => {
    let newClassroom = new Classroom(req.body)
    newClassroom.save((err, Classroom) => {
        if (err) {
            res.send(err)
        }
        res.json(Classroom)
    })
}

export const getClassrooms = (req, res) => {
    Classroom.find({}, (err, Classroom) => {
        if (err) {
            res.send(err)
        }
        res.json(Classroom)
    })
}

export const getClassroomWithID = (req, res) => {
    Classroom.findById(req.params.ClassroomId, (err, classroom) => {
        if (err) {
            res.send(err)
        }
        res.json(classroom)
    })
}

export const updateClassroom = (req, res) => {
    Classroom.findOneAndUpdate({ _id: req.params.classroomId}, req.body, { new: true }, (err, classroom) => {
        if (err) {
            res.send(err)
        }
        res.json(classroom)
    })
}

export const deleteClassroom = (req, res) => {
    Classroom.remove({ _id: req.params.classroomId }, (err, classroom) => {
        if (err) {
            res.send(err)
        }
        res.json({message: 'Successfully deleted classroom'})
    })
}