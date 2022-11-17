const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set('view-engine','ejs');
app.set("views",'views')

const admminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const rootDir = require("./utils/path");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(admminData.routes);
app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>')
// })

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render('404.ejs',{pageTitle: 'Page Not Found'});
});

app.listen(port);
