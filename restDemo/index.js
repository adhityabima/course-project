const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const listMakanan = [
    {
        namaMakanan: "mie goreng",
        deskripsi: "mie yang di goreng"
    },
    {
        namaMakanan: "mie rebus",
        deskripsi: "mie yang di rebus"
    },
    {
        namaMakanan: "nasi goreng",
        deskripsi: "nasi yang di goreng"
    },
    {
        namaMakanan: "ayam goreng",
        deskripsi: "ayam yang di goreng"
    }
]

app.get('/semuamakanan', (req, res)=>{
    res.render('semuamakanan/index', {listMakanan})
})

app.get('/semuamakanan/new', (req, res)=>{
    res.render('semuamakanan/new');
})

app.post('/semuamakanan', (req, res)=>{
    const {namaMakanan, deskripsi} = req.body;
    listMakanan.push({namaMakanan, deskripsi});
    res.redirect('/semuamakanan');
})

app.get('/makanan', (req, res) =>{
    res.send('Get makanan');
})

app.post('/makanan', (req, res) =>{
    const { makanan, jmlmakanan } = req.body;
    res.send(`Ada ${jmlmakanan} ${makanan}`);
})

app.listen(3000,()=>{
    console.log("on 3000")
})