const path = require('path')

const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

const pubDirPath = path.join(__dirname,'../public')

app.use(express.static(pubDirPath))



app.get('/weather',(req,res)=>
{
    res.send({
        temp: 12,
        precip: '0%'
    })
})

app.listen(3000, () =>
{
    console.log('Server is up on port 3000.')


})