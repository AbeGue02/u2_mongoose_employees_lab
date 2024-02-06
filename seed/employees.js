const db = require('../db')
const { Company, Employee } = require('../models')
const Chance = require('chance')

let chance = new Chance();

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    // const duolingo = await Company.find({ name: 'Duolingo' })
    // const spotify = await Company.find({ name: 'Spotify' })
    // const nintendo = await Company.find({ name: 'Nintendo' })

    // const companies = [duolingo, spotify, nintendo]

    const companies = await Company.find({})

    console.log(companies)

    const employees = [...Array(9)].map((_, index) => {
        return {
            company_id: companies[index % 3]._id,
            first_name: chance.first(),
            last_name: chance.last(),
            email: chance.email(),
            salary_in_usd: chance.integer({ min: 30000, max: 100000 }),
            address: {
                street: chance.street(),
                city: chance.city(),
                state: chance.state(),
                zip: chance.zip()
            }
        }
    })

    await Employee.insertMany(employees)
    console.log('Employees logged!')
}

const run = async () => {
    await main()
    db.close()
}

run()
