
const { promiseImpl } = require("ejs");
const { Op } = require("sequelize");
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

function getsongofid(rep,res) {
    return new Promise(async(resolve,reject)=>{
       try {
        let a = await data.Song.findOne({
            where: {id: rep.params.id}
        })
        resolve(res.status(200).json(a))
       } catch (error) {
        reject(error)
       }
    })
}

function getsearch(rep, res) {
    if(rep.params.value === ""){
        res.status(300).json({
            error_message: "not found",
        })
    }
    return new Promise(async(resolve,reject)=>{
        try {
         let a = await data.Song.findAll({
             where: {name: {[Op.like]: `%${rep.params.value}%`}}
         })
         resolve(res.status(200).json(a))
        } catch (error) {
         reject(error)
        }
     })
}

module.exports = {
   getallsongs,
   getadvertisement,
   getallimgganday,
   getsongofid,
   getsearch,
}