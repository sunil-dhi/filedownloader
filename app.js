const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
 res.download("./xx.png")
//  console.log("hiiiiii")
})
if(process.env.NODE_ENV=="production"){
    const path=require("path")
    app.get("/",(req,res)=>{
        app.use(express.static(path.resolve(__dirname,"client","build")))

        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

const port=process.env.PORT ||4000
app.listen(port,()=>{
 console.log(`server is running at port ${port}`)
})
