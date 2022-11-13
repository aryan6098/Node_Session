const express = require("express");
const path = require("path");
const admminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./utils/path");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(admminRoutes);
app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>')
// })

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(port);
