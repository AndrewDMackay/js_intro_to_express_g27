
const express = require('express')
const cors = require('cors')
const app = express()


// The below, and above allows all cross-origin requests..

app.use(cors())


// Basic route set up below..

app.get('/', (req, res) => {
    // res.send("Hi World!")
    res.json({message:"Hello World!"})
})


// Basic server set up below..

app.listen(5000, () => {
    console.log("App running on port 5000..")
})


// The server above will not refresh, unless cut, and restarted, unless the below is installed..

// npm install --save-dev nodemon

