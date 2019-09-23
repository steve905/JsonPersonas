var express = require('express');
const cors = require('cors')
var app = express();
const PORT = 3000;

app.use(cors());
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST,PUT,PATCH,DELETE,OPTIONS");
  next();
})  

app.listen(3000, function () {
console.log(`Server running at port ${PORT}`); 
});

app.route('/person')
  .get(function(req, res) {
    res.json(
      [{
        "id": "1",
        "nombre": "jose",
        "edad": "25",
        "genero": "masculino",
        "email": "tecnicogps@vise.com.co",
        "localidad": "madrid",
        "telefono": "3204511369"
    },
    {
        "id": "2",
        "nombre": "juan",
        "edad": "31",
        "genero": "masculino",
        "email": "analistagps@vise.com.co",
        "localidad": "Barcelona",
        "telefono": "3115058266"
    },
    {
        "id": "3",
        "nombre": "antonio",
        "edad": "43",
        "genero": "masculino",
        "email": "mesetas@hotmail.com",
        "localidad": "valencia",
        "telefono": "364556256"
    },
    {
        "id": "4",
        "nombre": "angelica",
        "edad": "35",
        "genero": "femenino",
        "email": "tecnicogps@vise.com.co",
        "localidad": "new york",
        "telefono": "3124450678"
    }
    ]
    )
})

// .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });