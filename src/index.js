const express = require("express");

//Initializations
const app = express();

//Setting
app.set("port", process.env.PORT || 3000);
//Middlewares

//Glbal Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
