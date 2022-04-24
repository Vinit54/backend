const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
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

adminSchema.statics.isExists = async function isExists(email) {
    console.log("is Exists method");
    console.log(email);
    const admin = await this.findOne({ email: email })
    return admin ? true : false;
}


const Admin = mongoose.model('admin', adminSchema)

module.exports = { Admin };