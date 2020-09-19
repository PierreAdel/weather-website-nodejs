const express = require('express')

const app = express()


app.get('', (req,res) =>
{
    res.send('<h1>Weather</h1>')
})

app.get('/help',(req,res)=>
{
    res.send({
        name: 'Pierre',
        age:21

    })
})


app.get('/about',(req,res)=>
{
    res.send('<h1>About page</h1>')
})

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