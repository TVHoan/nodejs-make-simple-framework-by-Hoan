
var http = require('http');
var port = 8009;
var router = {GET:{},POST:{}};
var app  = http.createServer(function (req, res) {
    res["send"] = function send(body){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(body);
        res.end();
    }
    if ( router[req.method][req.url]!= undefined){
        router[req.method][req.url](req,res);
    }else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.write('not found');
          res.end();
    }
    console.log( router)
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
});
app.listen(port)
console.log("app running with:","http://localhost:"+port)
get("/hoan",(req,res)=> {
    res.send("hoan");
    console.log(res)
})
function get( path, callback){
    router["GET"][path] = callback ;
}
function post( path, callback){
    router["POST"][path] = callback ;
}
