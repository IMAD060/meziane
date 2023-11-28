const express = require('express');
const app = express();
// const cors = require('cors');
const path = require("path");
// app.use(cors());
const port = 5000;


// const Data = require("../client/src/data/mesBouquets.json");
// app.get("/api/bouquets", (req, res) => {
//   res.json(Data);
  
// });


  app.use("/img", express.static(path.join(__dirname, "views/images")));
app.use("/images", express.static(path.join(__dirname, "views/imagesB")));
app.use("/image", express.static(path.join(__dirname, "views/imagesF")));

// app.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname,'./views/indexbs.html'))
//   //res.sendFile(path.join(__dirname,'views/indexTW.html'))
// });



app.get("/", (req, res) => {
  // res.json({"utilisateur" : ["app", "acc", "akk"] });

  res.sendFile('bbbbbb');
});

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
