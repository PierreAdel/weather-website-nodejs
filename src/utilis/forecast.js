const request = require('request')

const forecast = (latitude,longitude,callback) =>
{
  const url = 'http://api.weatherstack.com/current?access_key=f967bf438db5959c719d85e250745fbf&query='+latitude+','+longitude+'&units=m'

  request({url ,json:true},(error, {body}) =>
  {
    if(error)
    {
      callback("unable to connect to weather service!", undefined)}
    else if(body.success === false)
    {
      callback("Undefined location", undefined)

    }
    else
    {
      const data = {
        temp : body.current.temperature,
        precip : body.current.precip,
        condition : body.current.weather_descriptions[0]
      }
      callback(undefined,data)
    }

  })
}
module.exports = forecast