var http = require('http');
var staff = require('./public/data/staff.json');
var server = http.createServer(function(req ,res)
{
    if(req.url === "/")
    {
        res.writeHead(200,{"content-Type": "text/json"});
        res.end(JSON.stringify(staff));
    }
}).listen(3000)