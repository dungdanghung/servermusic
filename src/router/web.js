var express = require("express")
const router = express.Router();
const webcontroller = require("../controller/webcontroller")
const usercontroller = require("../controller/usercontroler")

function webrouter(app) {
    router.get("/", webcontroller.getmainpath)
    router.get("/postsong", webcontroller.postsong)
    router.post("/postsong/actionpostsong", webcontroller.actionpostsong)
     
    router.get("/songs/all", usercontroller.getallsongs)
    router.get("/imgadvertisement", usercontroller.getadvertisement)
    router.get("/all/imgganday", usercontroller.getallimgganday)
    router.get("/song_of_/:id", usercontroller.getsongofid)
    return app.use('/', router)
}

module.exports = webrouter;