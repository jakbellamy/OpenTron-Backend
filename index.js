import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import scantronRoutes from './src/routes/ScantronRoutes'
import keyRoutes from './src/routes/KeyRoutes'
import classroomRoutes from './src/routes/ClassroomRoutes'

const app = express()
const PORT = 5000

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/OPENTRONdb')

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//router setup
scantronRoutes(app)
keyRoutes(app)
classroomRoutes(app)

//serving static files
app.use(express.static('public'))

app.get('/', (req, res) =>
    res.send(`Node and Express are running on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
)
