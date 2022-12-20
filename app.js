const path = require("path");

const express = require("express");
const app = express();
const port = 8080;

const errorController = require("./controllers/error")
app.set('view engine','ejs');
app.set("views",'views')

const admminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./utils/path");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(admminRoutes);
app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>')
// })

app.use(errorController.get404);

app.listen(port);
