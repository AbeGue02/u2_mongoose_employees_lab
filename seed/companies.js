const db = require('../db')
const { Company } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const companies = [
        {
            company_name: 'Duolingo',
            location: 'Pennsylvania, United States',
            product: 'Languages',
            type: 'Private',
            established: 2011
        },
        {
            company_name: 'Spotify',
            location: "Stockholm, Sweden",
            product: 'Music Service',
            type: 'Private',
            established: 2006
        },
        {
            company_name: 'Nintendo',
            location: 'Kyoto, Japan',
            product: 'Video Games',
            type: 'Private',
            established: 1889
        }
    ]

    await Company.insertMany(companies)
    console.log('Companies logged!')

}

const run = async () => {
    await main()
    db.close()
}

run()