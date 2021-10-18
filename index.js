const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const app = express();
const puerto = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) )
app.use( bodyparser.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
    console.log("AaaaaAAaAAAaaaa");
});
app.post('/desc', (req,res)=> {
    const texto = req.body.out;
    fs.writeFileSync('./archivos/archivo.txt', texto);
    res.download(__dirname+"/archivos/resultado.txt")
})

app.listen(puerto);
console.log("si sirve, el servidor esta corriendo en el puerto"+puerto+"");