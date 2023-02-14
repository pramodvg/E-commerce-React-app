import app from '../app.js'
import Mongoose from 'mongoose'

const dburi = "mongodb+srv://admin:admin@myportfollio.a6rna.mongodb.net/portfollio-db?retryWrites=true&w=majority"

const port = process.env.PORT || 8001

Mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((results) => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.log("error : " + error);
    });

app.listen(port, () => console.log(`listening on port:${port}`))