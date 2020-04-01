const express = require("express");
const cors = require("cors");
const routes = require("./routes"); //inportanto minha variável de routes

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
