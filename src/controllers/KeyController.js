import mongoose from 'mongoose'
import {KeySchema} from '../models/KeySchema'
const Key = mongoose.model('Key', KeySchema)

export const addNewKey = (req, res) => {
    let newKey = new Key(req.body)
    newKey.save((err, Key) => {
        if (err) {
            res.send(err)
        }
        res.json(Key)
    })
}

export const getKeys = (req, res) => {
    Key.find({}, (err, Key) => {
        if (err) {
            res.send(err)
        }
        res.json(Key)
    })
}

export const getKeyWithID = (req, res) => {
    Key.findById(req.params.KeyId, (err, key) => {
        if (err) {
            res.send(err)
        }
        res.json(key)
    })
}

export const updateKey = (req, res) => {
    Key.findOneAndUpdate({ _id: req.params.keyId}, req.body, { new: true }, (err, key) => {
        if (err) {
            res.send(err)
        }
        res.json(key)
    })
}

export const deleteKey = (req, res) => {
    Key.remove({ _id: req.params.keyId }, (err, key) => {
        if (err) {
            res.send(err)
        }
        res.json({message: 'Successfully deleted key'})
    })
}