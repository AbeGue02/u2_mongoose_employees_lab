const mongoose = require('mongoose')
const companySchema = require('./company')
const employeeSchema = require('./employee')

const Company = mongoose.model('Company', companySchema)
const Employee = mongoose.model('Employee', employeeSchema)

module.exports = {
    Company,
    Employee
}