const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const a = process.argv[2]
geocode(a, (error , data) => {
    if(error){
        return console.log(error)
    }

    forecast(data.latitude , data.longitude , (error , fdata) => {
        if(error){
            return console.log(error)
        }

        console.log(data.location)
        console.log(fdata)
    })
})