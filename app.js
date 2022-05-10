const express = require("express");
const path = require("path")
const app = express();
/* ------------ Para comenzar desde la carpeta "public" ------------ */
app.use(express.static("public"));
app.listen(3000, ()=>{
    console.log('Servidor corriendo')
})

/* ------------ Página de inicio ------------ */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

/* ------------ Página de registro ------------ */
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.post('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

/* ------------ Página de login ------------ */
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.post('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})