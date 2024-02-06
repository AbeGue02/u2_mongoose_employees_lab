const { Schema } = require('mongoose')

const Company = new Schema(
    {
        company_name: {type: String, required: true},
        location: {type: String, required: true},
        product: {type: String, required: true},
        type: {type: String, required: true},
        established: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = Company