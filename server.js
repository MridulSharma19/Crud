const express=require('express')
const cors =require('cors')
const mongoose= require('mongoose')
require('dotenv').config()
const infoRouter= require('./routes/info')
const adminRouter= require('./routes/admin')
const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true , useNewUrlParser: true })
.catch(error => handleError(error));

// app.get('/test',(req,res)=>{
//     res.send('get success')
// })

// app.post('/test',(req,res)=>{
//     res.send(req.body)
// })

app.use(infoRouter,adminRouter)
app.get('/', (req, res) => {
    res.send('Hello');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));