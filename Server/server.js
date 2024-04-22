const express= require ('express')
const app = express()
const cors = require('cors')
const Razorpay = require('razorpay')
const dotenv = require('dotenv')
dotenv.config()    /// enviroment variable
const paymentRoutes = require ('./routes/paymentRoutes')

//// middleware /////
app.use(express.json())
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET'],
    credentials:true
}))




app.use('/api/payment/', paymentRoutes)

app.listen(5500,()=>{
    console.log(`Server is running on 5500....`)
})