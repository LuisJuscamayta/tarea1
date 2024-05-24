const express = require("express");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");

const app = express(); 

//archivos express json 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

let conexion = mysql.createConnection({
    host : 'localhost',
    database : 'tarea',
    user : 'root',
    password : '1234',
});

conexion.connect((err) => {
    if(!err) {
        console.log("conexion exitosa")
    } else {
        console.log("no hay conexion")
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html')   
}) 

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html')   
}) 

app.use("/css", express.static(__dirname + '/assets/css'));
app.use("/img", express.static(__dirname + '/assets/img'));
app.use("/docs", express.static(__dirname + '/assets/docs'));
app.use("/html", express.static(__dirname + '/assets/html'));
app.use("/js", express.static(__dirname + '/assets/js'));


//mysql conexion
app.post("/validar", function (req, res) {
    const datos = req.body;
    let nom = datos.nombre;
    let apell = datos.apellido;
    let cel = datos.celular;
    let email = datos.correo;
    let com = datos.mensaje;
    //insertamos los datos a la tabla registro de la base de datos
    const registrar = "INSERT INTO formulario (nombre,apellidos,gmail,celular,mensage) VALUES('" + nom + "','" + apell + "','" + email + "','" + cel + "','" + com + "')";
  
  //condicional al enviar los datos del formulario
    conexion.query(registrar, function (error) {
      if (error) {
        throw error;
      } else {
        console.log("Datos almacenados correctamente")
      }
    })
});

//Rutas para obtener fechas civicas  por fecha especifica
app.get("/api/dates/:fechaactual",(req, res) => {
  conexion.query(
    "Select fechas, celebracion, descripcion FROM `FECHAS_CIVICAS` where fechas = ? ;",[req.params.fechaactual],(err,data)=>{
      if(err) throw err;
      res.json(data[0] || null)
    }
  )
});
    
app.listen(3000);
console.log('Server on port 3000')