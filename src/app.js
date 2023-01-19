import './database'
import express from "express";
import {engine} from "express-handlebars";
import indexRoutes from "./routes/index";
import path from "path";
import morgan from 'morgan'

const app = express();


// config de motor de plantilla
app.set("views", path.join(__dirname, "views")); // definimos donde esta la carpeta view
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"), // para indicarle la ruta del layout
    defaultLayout: "index", // para indicar el nombre del layout
    extname: ".hbs", // Para indicar la extension del archivo
  })
);
app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) //Para recibir en formato json


// routes
app.use(indexRoutes);

app.listen(3000);
console.log("server on port", 3000);
