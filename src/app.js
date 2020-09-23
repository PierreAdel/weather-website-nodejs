const path = require('path')
const geocode = require('./utilis/geocode')
const forecast = require('./utilis/forecast')

const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

const port =process.env.PORT || 3000




//define paths for express config
const pubDirPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlebars engine and views location
app.set('views',viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(pubDirPath))

app.get('',(req,res) =>
{
    res.render('index', {

        title:'Weather',
        name: 'Pierre'
    })


})
app.get('/about',(req,res) =>
{
    res.render('about', {

        title:'about',
        name: 'Pierre'
    })


})

app.get('/products',(req,res) =>
{
    if (!req.query.search)
    {
        return res.send({
            error: 'provide a search term'
        })
    }

    console.log(req.query.bla)
    res.send({

        products: []

    })

})

app.get('/help',(req,res) =>
{
    res.render('help', {
        helptext: 'this is some helpful text',
        title:'help',
        name: 'Pierre'
    })


})
app.get('/help/*',(req,res)=>
{
    res.render('404page', {
        title:'404 Help article not found',
        name: 'Pierre'

   })
})

app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    {
        return res.send({
            errorMsg: 'no address provided'

        })

    }

    geocode(req.query.address,(error, {latitude,longitude,location} = {}) => 
    {
        if(error)
        {
            return res.send({error})   
        }

        forecast(latitude, longitude, (error, forecastdata) => 
        {

            if(error)
        {
            return res.send({error})   
        }
        res.send({
            condition: forecastdata,
            location: location,
            addressProvided: req.query.address
        })
        })
        
       

    })
  
})

app.get('*',(req,res)=>
{
   
   res.render('404page', {
        title:'404 page not found!',
        name: 'Pierre'

   })
})


app.listen(port, () =>
{
    console.log('Server is up on port 3000.')


})