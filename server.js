const express = require("express");
const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.get('/', (req,res)=>{
    res.send("Bonjour les gars  mes enfants");
});

app.listen(PORT,HOST, ()=>{
    console.log('execution sur le port' + PORT);
});

