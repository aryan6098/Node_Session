const fs = require("fs");

const requestHanlder = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
  
      const body = [];
      req.on('data', (chunk) => {
          console.log('data', chunk);
          body.push(chunk);
      })
      return req.on('end' ,()=>{
          const parseBody = Buffer.concat(body).toString();
          const message = parseBody.split('=')[1];
          // fs.writeFileSync('message.txt', message)
          fs.writeFile('message.txt',message, (err)=>{
            console.log(err)
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          })
      })
    
      // fs.writeFileSync("message.txt", "DUMMY");
    
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>MY First Page</title></head>");
    res.write("<body><h1>Hello from my server side: </h1></body>");
    res.write("</html>")
    res.end();
}

//diffrent way to export our module

// module.exports = requestHanlder;

// module.exports = {
//     handler: requestHanlder,
//     someText: 'SOME hard Coded text'
// }

// module.exports.handler = requestHanlder;
// module.exports.someText = 'SOME hard Coded text'

exports.hanlder = requestHanlder;
exports.someText = 'SOME hard Coded text';

