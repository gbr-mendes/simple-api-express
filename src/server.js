const port = 3003

const { request } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./dataBase')


app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req, res)=> {
    res.send(db.getProducts()) // Send the object converted to Json
})

app.get('/products/:id', (req, res)=> {
    res.send(db.getProduct(req.params.id))
})

app.post('/products', (req, res)=> {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id', (req, res)=> {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    })
    res.send(product)
})

app.delete('/products/:id', (req, res)=> {
    const products = db.deleteProduct(req.params.id)
    res.send(products)

})

app.listen(port, ()=> {
    console.log(`Server running at port ${port}.`)
})