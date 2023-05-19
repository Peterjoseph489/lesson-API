const {readAll, getOneTeam} = require("../Model/model")

const getAllTeams = async(req, res) =>{
    try{
        const teams = await readAll()
        if(!teams[0]){
            console.log("No Team has been registered")
        } else {
            res.end(JSON.stringify(teams))
        }
    } catch (err){
        console.log(err)
    }
}


const getOne = async(req, res, id) =>{
    try{
        const team = await getOneTeam(id)
        if(!team){
            res.end(`Team not found`)
        } else {
            res.end(JSON.stringify(team))
        }
    } catch (err){
        console.log(err)
    }
}
module.exports = {getAllTeams, getOne}