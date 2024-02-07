const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    passward:String
})

const EmployeeModel = mongoose.model("Employees",EmployeeSchema)
module.exports = EmployeeModel