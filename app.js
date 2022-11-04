const express =  require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Subimt</button></form>')
})
app.use("/product" ,(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    res.send("<h1>Hello from te server side</h1>")
})


app.listen(port);
