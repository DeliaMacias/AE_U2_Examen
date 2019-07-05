
//const sendmail = require('./sendmail');
var mongoose = require('mongoose');

var schemaVenta = require('./venta.model');
var Venta = mongoose.model('Venta',schemaVenta,'venta');
var schemaProducto = require('./producto.model');
var Producto = mongoose.model('Producto',schemaProducto,'producto');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/EXAU2',{useNewUrlParser: true, useFindAndModify: false  });

async function postProducto(producto){
    calcularUt(producto)
    .then((doc) => {
        Producto.create(doc)
        .then((data) => {
            console.log("Productos guardado");
            console.log(data);
        })
        .catch((error) => {
            console.log("Error al guardar producto");
            console.log(error);
        });
    });
    
}
async function postVenta(venta){
    calcularVent(venta).
    then((doc) => {
        Venta.create(doc)
        .then((data) => {
            console.log("Venta guardada");
            console.log(data);
        })
        .catch((error) => {
            console.log("Error al guardar venta");
            console.log(error);
        });
    });
    
}

async function calcularUt(producto){
    return new Promise((res,rej) => {
        var utilidad =0;
        utilidad = producto.precioventa -producto.preciocompra;
        producto.utilidad = utilidad;
        res(producto);
    });
}
async function calcularVent(venta){
    return new Promise((res,rej) => {
        var subtot = 0,iva=0,tot=0;

        /*for(let i =0 ;i < venta.productos.length; i++){
            subtot += venta.productos[i].costoventa * venta.
        }*/
        subtot += venta.productos.costoventa * venta.cantidad;

        venta.subtotal = subtot;
        iva = (0.16) * subtot;
        venta.iva = iva;
        tot = iva + subtot;
        venta.total = tot;
        res(venta);
    })
}


var producto = new Producto({
    nombre: 'CocaCola',
    cantidad: 10,
    minimo: 5,
    maximo:30,
    preciocompra:10,
    precioventa: 15
});
var venta = new Venta({
    folio: '12w',
    fecha: '2019-07-01',
    prducto:[
        {
            productId:'5d1f659220b7217550a7a9dc'  
        }
    ],
    cantidad: 2
    
});
//postProducto(producto);
postVenta(venta);


