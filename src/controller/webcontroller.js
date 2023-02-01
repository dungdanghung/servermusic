const { raw } = require("body-parser");
const data = require("../models/index")


async function getmainpath(req, res) {
    try {
        let a = await data.Song.findAll({raw: true});
        return res.render("homepage", {data: a});
    } catch (error) {
        console.log(error);
    }
}


function postsong(rep, res) {
    return res.render("postsongpage")
}

function actionpostsong(rep, res) {
    return new Promise(async(resolve, reject)=>{
        try {
            await data.Song.create({
                url: rep.body.inputurl,
                name: rep.body.inputname,
                auther: rep.body.inputauther,
                img: rep.body.inputimg                
              })
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    getmainpath,
    postsong,
    actionpostsong,
}