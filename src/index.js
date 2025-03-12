import initDatabase from "./functions/database/init.js";
import express from "express";
const app = express()
const port = 7000


// initDatabase()

app.get("/", (req, res) => {
    res.send("sigma")
    initDatabase(2,4)
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
