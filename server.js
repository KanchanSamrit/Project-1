
import express from 'express'
import {testRouter} from './testRouter.js'

const app = express()
const port = 7070

// Giving information on what is the capital of that country.
// By using express and test router


app.use(express.json())
app.use('/test', testRouter)

// Listening on port 7070
// After listning on port we will get "You got it!"

app.listen(port, ()=>{
    console.log('You got it!')
})
 