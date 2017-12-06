let http = require('http');
let server = http.createServer(function(req,res){
   res.end(JSON.stringify({content:'hello'}));
}).listen(8080,()=>{
  console.log('server started at localhost:8080');
});