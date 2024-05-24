const date = new Date;
var fechaActual = date.getDate() + '-' + (date.getMonth()+1)+ '-'+ date.getFullYear();
var fechaBn = date.getDate() + '/' + (date.getMonth()+1)+ '/'+ date.getFullYear();

var fecha = fetch('http://localhost:3000/api/dates/'+ fechaActual)
    .then(res => res.json())
    .then((data)=> {
      if (data != null) {
        document.getElementById('Datos_Tiempo').innerHTML = `<div class="calendario_conexion" role="alert" id="Datos_Tiempo">
        <h3>Hoy es ${fechaBn}</h3>
        <p>${data.celebracion}</p>
        <p>${data.descripcion}</p>
      </div>`
      }else{
        document.getElementById('Datos_Tiempo').innerHTML = `<div class="calendario_conexion" role="alert" id="Datos_Tiempo">
        <h3>Hoy no se celebra nada </h3>
      </div>` 
      }
    });