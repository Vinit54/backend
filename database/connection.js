const mongoose = require('mongoose')
const DB_URL = `mongodb+srv://HRMS:hrms1234@cluster0.q4j0p.mongodb.net/node-auth?retryWrites=true&w=majority`

async function createConnnection() {

      const connection = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
      })
       if (connection) {
            console.log('database connected')
      }
}

module.exports = createConnnection;