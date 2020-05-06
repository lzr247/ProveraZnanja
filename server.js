const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("query-string");
let artikal=[
    {
        "id":1,
        "naziv":"Smoki",
        "cena":"50",
        "imeKompanije":"Stark"
    },
    {
        "id":2,
        "naziv":"Cips",
        "cena":"60",
        "imeKompanije":"Cipsi"
    }
];

const server=http.createServer(function(req,res){
    let urlObj=url.parse(req.url,true,false);
    if(req.method=="GET"){
        if(urlObj.pathname=="/svi-artikli"){
            
        }



    }
    
        
    

});


const host="localhost";
const port=5001;
server.listen(port,host);
console.log(`Server radi na: http://${host}:${port}`);