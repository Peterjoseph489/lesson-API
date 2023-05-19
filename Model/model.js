const teams = require("../Database/footballTeam.json")

const readAll = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(teams)
    })
}

const getOneTeam = (id)=>{
    return new Promise((resolve, reject)=>{
        const team = teams.find((t)=> t.Id === id)
        resolve(team)
})
}


module.exports = {readAll, getOneTeam}