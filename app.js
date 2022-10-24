const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/user")
const employeeRouter = require("./routes/employee")
const auth = require("./middleware/auth")
const app = express()

const mongoAtlasUri = "mongodb+srv://ThunderMaster:Pass123@cluster0.phfivi1.mongodb.net/Assignment1?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/user', userRouter)
app.use('/api/emp', auth, employeeRouter)

const port = 8150

app.listen(port, () => {
    try {
         mongoose.connect(
          mongoAtlasUri,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log("Mongoose is connected")
        );
      } catch (e) {
        console.log("could not connect");
      }
    console.log(`Server is up at port ${port}`)
})
