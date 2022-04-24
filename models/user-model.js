const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "superadmin",
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createAt: 'created_at', updateAt: 'updated_at'
        }
    }
);

// superAdmin.statics.isExists = async function isExists(email) {
//     console.log("is Exists method");
//     console.log(email);
//     const user = await this.findOne({ email: email })
//     return user ? true : false;
// }


const User = mongoose.model('user', userSchema)

module.exports = { User };