// This file has nothing to do with the project.

console.log("start")

setTimeout(() => {
    console.log("Helo2")
} , 2000)

setTimeout(() => {
    console.log("Helo0")
} , 0)

setTimeout(() => {
    console.log("Helo1")
} , 1000)

console.log("Stop")