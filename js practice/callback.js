// This file has nothing to do with the project.

/*const geoCode = (address, callback) => {

    const data = {

        latitude : 0,
        longitude :0

    }

    return address
}

console.log(geoCode("jamunapar")) */

//callback pattern
const geoCode = (address, callback) => {

    setTimeout(() => {
       
        const data = {

            latitude : 0,
            longitude :0
    
        }
    
        callback(data)
    })
   
}

geoCode("jamunapar", (dataa) => {
    console.log(dataa)
})

