var http=require("http");

var server=http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("Hello Jyopthsna");


})
server.listen(9966,function(){

console.log("server listing at port 9966")

})