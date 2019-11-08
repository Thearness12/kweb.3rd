const http = require('http');
const url = require('url');
const querystring = require('querystring');
const hostname = '127.0.0.1'; const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let UrlParse = url.parse(req.url);
    let query = querystring.parse(UrlParse.query);
    let path = UrlParse.pathname;

    if(path != '/'){
        res.end('Page Not Found!');
    }
    if(!query.a){
        res.end('Invalid Query!');
    }
    if(!query.b){
        res.end('Invalid Query!');
    }


    if(query.operator == "add"){
        let num = clac.add(parseInt(query.a, 10) , parseInt(query.b, 10));
        res.end('Result = ' +num);
    }
    if(query.operator == "sub"){
        let num = clac.subtract(parseInt(query.a, 10), parseInt(query.b));
        res.end('Result = '+num);
    }
    if(query.operator == "mult"){
        let num = clac.mult(parseInt(query.a, 10), parseInt(query.b));
        res.end('Result = '+num);
    }
    if(query.operator == "div"){
        let num = clac.div(parseInt(query.a, 10), parseInt(query.b));
        res.end('Result = '+num);
    }
   
});
server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });

const clac = require('./clac');

