const { Schema, model }  = require('mongoose')

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: String,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

// Create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema)

// Export the pizza model
module.exports = Pizza