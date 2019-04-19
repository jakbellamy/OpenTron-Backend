import mongoose from 'mongoose'
import {ScantronSchema} from '../models/ScantronSchema'
const Scantron = mongoose.model('Scantron', ScantronSchema)

export const addNewScantron = (req, res) => {
    let newScantron = new Scantron(req.body)
    newScantron.save((err, Scantron) => {
        if (err) {
            res.send(err)
        }
        res.json(Scantron)
    })
}

export const getScantrons = (req, res) => {
    Scantron.find({}, (err, Scantron) => {
        if (err) {
            res.send(err)
        }
        res.json(Scantron)
    })
}

export const getScantronWithID = (req, res) => {
    Scantron.findById(req.params.ScantronId, (err, scantron) => {
        if (err) {
            res.send(err)
        }
        res.json(scantron)
    })
}

export const updateScantron = (req, res) => {
    Scantron.findOneAndUpdate({ _id: req.params.scantronId}, req.body, { new: true }, (err, scantron) => {
        if (err) {
            res.send(err)
        }
        res.json(scantron)
    })
}

export const deleteScantron = (req, res) => {
    Scantron.remove({ _id: req.params.scantronId }, (err, scantron) => {
        if (err) {
            res.send(err)
        }
        res.json({message: 'Successfully deleted scantron'})
    })
}