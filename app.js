import express from 'express';
import productsRoutes from './src/routes/products.router.js';
import cartsRoutes from './src/routes/carts.router.js';

const app = express();
const PORT = 8080;

// MIDELWARE JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// RUTA TELEMETRIA
app.get('/ping',(req,res)=>{
    res.send({status: "ok"})
})

// PUNTOS DE ENTRADA PARA LOS ROUTES
app.use('/api/products',productsRoutes)
app.use('/api/carts',cartsRoutes)

app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`);
})