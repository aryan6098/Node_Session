const fs = require("fs");

const bodyData = [];
const requestHanlder = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Assignment</title></head>");
      res.write(
        '<body><form action="/create-users" method="POST"><label>usename</label><input type="text" name="message"><button type="submit">submit</button></form></body>'
      );
      bodyData.forEach((val)=>{
        
        res.write(val)
        res.write('</br>')
      })
      
      res.write("</html>");
      return res.end();
    }
    if (url === "/create-users" && method === "POST") {
        const data = [];
        req.on('data',(chunk)=>{
            console.log(chunk)
            data.push(chunk);
        })
        req.on('end',()=>{
            const parseBody = Buffer.concat(data).toString();
            console.log(parseBody.split('=')[1]);
            bodyData.push(parseBody.split('=')[1])
        })
        res.statusCode = 302;
        res.setHeader('Location', '/')
        res.end()
    
    }
}

exports.hanlder = requestHanlder;
exports.someText = 'SOME hard Coded text';

