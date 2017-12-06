let http = require('http');
let server = http.createServer(function(req,res){
  //允许所有来源访问此接口
   res.setHeader("Access-Control-Allow-origin","*");
   setTimeout(function(){
     res.end(JSON.stringify({content:'hello'}));
   },3000);
}).listen(8080,()=>{
  console.log('server started at localhost:8080');
});