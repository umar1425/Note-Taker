// DEPENDECIES =======================
const express = require("express");

// To initialze the app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("./public"));

// require route file
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Start the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});