const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./module/Employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Employee");

app.post('/Registor', (req,res) => {
  EmployeeModel.create(req.body)
  .then(Employees => res.json(Employees))
  .catch(err => res.json(err))
})



app.listen(3000,() => {
    console.log("server is runing")
})