const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const superadminSchema = new Schema(
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
            default:"superadmin",
            enum: ["superadmin", "admin", "employee"]
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

superadminSchema.statics.isExists = async function isExists(email) {
    console.log("is Exists method");
    console.log(email);
    const superadmin = await this.findOne({ email: email })
    return superadmin ? true : false;
}


const SuperAdmin = mongoose.model('superadmin', superadminSchema)

module.exports = { SuperAdmin };