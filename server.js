import express from "express";
import { CreateServer } from "http";
import { Server } from "socket.io";

import productosAPIRouter from "./router/productos.js";

const app = express();
// creo los sockets y los server
const PORT = 8080;
const httpServer = CreateServer(app);
const io = new Server(httpServer);

// iniciamos el servidor
httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
    });
//dirname
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = dirname(fileURLToPath(import.meta.url));
export const __dirname = dirname(fileURLToPath(import.meta.url));

// inicializo el servidor de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

//ruta para el index
app.get("/", (req, res) => {
    res.render("index", { title : "Home" });
});
// rutas 
import { router as productosRouter } from "./router/productos.js";
//rutas
app.use("/api/productos", productosAPIRouter);




//configuracion de socket
import { socketModel } from "./src/utils/socket.js";
socketModel(io);