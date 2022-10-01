//Instancias de creacion de server con express y Socket.io
import express from "express";
import {createServer} from "http";
import  { engine } from "express-handlebars";
import { Server } from "socket.io";


//Rutas de los productos
import productosApiRouter from "./routes/product.js";

//Creacion de server
const app = express();
const httpServer  = createServer(app);
const io = new Server(httpServer );

//inicio de servidor 
const PORT = 8080;
httpServer.listen(process.env.PORT || PORT, () =>
  console.log("Servidor Funcionando en Puerto: " + PORT)
);
httpServer.on("error", (error) => console.log(`Error en servidor ${error}`));


//Configuracion de las direccioens y carpetas publicas
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
app.use(express.static(__dirname + "/public"));

//app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setear engine de plantillas handlebars
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

//Rutas de los productos
app.use("/api/productos", productosApiRouter);

//Ruta de la pagina principal
app.get("/", (req, res) => {
    res.render('productslist');
    }
);

//Configuracion de Socket
import { socketModel } from "./src/utils/socket.js";
socketModel(io);