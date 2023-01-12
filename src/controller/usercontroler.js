
const { promiseImpl } = require("ejs");
const data = require("../models/index")

async function getallsongs(rep,res) {
    return new Promise(async(resolve, reject)=>{
        try {
            let a = await data.Song.findAll({raw: true})
            res.status(200).json(a)
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}

function getadvertisement(rep, res) {
    return new Promise(async(resolve, reject)=>{
        try {
            let a = await data.Advertisement.findAll({raw: true})
            res.status(200).json(a)
            resolve()
        } catch (error) {
            reject(error)
        }
    })

}

function getallimgganday(rep, res) {
    return new Promise(async(resolve,reject)=>{
        try {
            let a = await data.Ganday.findAll({raw:true})
            res.status(200).json(a)
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
   getallsongs,
   getadvertisement,
   getallimgganday,
}