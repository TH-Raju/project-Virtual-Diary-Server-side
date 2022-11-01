const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//  MiddleWare 

app.use(cors())
app.use(express.json())


//uname and pass
// user: virtual-diary
// pass:  azGf75Mwdar4gF7F





const uri = "mongodb+srv://virtual-diary:azGf75Mwdar4gF7F@cluster0.ddpko0x.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('virtualDiary').collection('users');
        const user = {
            name: 'testing mongo',
            email: 'aaa@mail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }

}
run().catch(err => console.log(err));




app.get('/', (req, res) => {
    res.send("API Working....")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})