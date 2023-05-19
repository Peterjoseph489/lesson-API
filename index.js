const http = require("http")
const PORT = 4400;
const {getAllTeams, getOne} = require("./Controller/controller")


const app = http.createServer((req, res)=>{
    if(req.url === "/showTeams" && req.method === "GET") {
        getAllTeams(req, res)
    } else if(req.url === "/oneTeam" && req.method === "GET") {
        getOne(req, res, "1")
    } else {
        res.end("Something went wrong")
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})