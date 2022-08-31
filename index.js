import "dotenv/config"
import app from "./app.js";
const port = process.env.PORT || 8080


app.get("/", (req, res) =>{
    res.send("Welcome to Dob Calculator")
})

app.listen(port, () =>{
    console.log(`app is running at ${port}`)
})