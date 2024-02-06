const db = require('./db')
const { Company, Employee } = require('./models')
const Chance = require('chance')

let chance = new Chance();

const findEmployees = async (inputCompany) => {
    const company = await Company.findOne({company_name: inputCompany})
    console.log(company)
    const employees = await Employee.find({company_id: company._id})
    console.log(employees)
}

const updateCompanyType = async (inputCompany) => {
    const company = await Company.updateOne({company_name: inputCompany}, {type: "public"})
    console.log(company)
}

const increaseOneSalary = async (email, amount) => {
    const employee = await Employee.updateOne({email: email}, {$inc: {salary_in_usd: amount}})
    console.log(employee)
}

const updateCity = async (email, newStreet, newCity, newState, newZip) => {
    const employee = await Employee.updateOne({email: email}, {address: {
        street: newStreet, 
        city: newCity, 
        state: newState, 
        zip: newZip
    }})
    console.log(employee)
}

const deleteEmployee = async (inputEmail) => {
    const employee = await Employee.deleteOne({email: inputEmail})
}

const deleteEmployees = async (inputCompany) => {
    const company = await Company.findOne({company_name: inputCompany})
    console.log(company)
    const employees = await Employee.deleteMany({company_id: company._id})
}

const main = async () => {
    try {
        //await findEmployees("Nintendo")
        //await updateCompanyType("Duolingo")
        //await increaseOneSalary('wu@mom.za', 5000)
        //await updateCity('ci@ajicevefu.fi', chance.street(), chance.city(), chance.state(), chance.zip())
        //await deleteEmployee('dobiata@gu.ci')
        //await deleteEmployees('Nintendo')
    } catch (e) {
        console.error("Error!!!!!!!!!!! ",e)
    } finally {
        db.close()
    }
}

main()