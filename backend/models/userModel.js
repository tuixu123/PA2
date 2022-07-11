const mongooese = require('mongoose')

const userSchema = mongooese.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
},
{
    timestamps: true,
}
)

module.exports = mongooese.model('User', userSchema)