import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
const app = express()
const port = 3000
app.use(cors())

app.use(express.json())

const productsShema = new mongoose.Schema({
    image:String,
    name: String,
    price:Number
  });

  const Products = mongoose.model('Products', productsShema);
mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("not connected"))

app.get('/products', async (req, res) => {
    const getAllProducts=await Products.find()
  res.send(getAllProducts)
})


app.get('/products/:id', async (req, res) => {
    const{id}=req.params
    const getProduct=await Products.findById(id)
  res.send(getProduct)
})

app.delete('/products/:id', async (req, res) => {
    const{id}=req.params
    const deleteProduct=await Products.findByIdAndDelete(id)
  res.send(deleteProduct)
})

app.post('/products/', async (req, res) => {
   
    const obj=req.body
    const postData=new Products(obj)
    await postData.save()
    
  res.send(postData)
})


app.put('/products/:id', async (req, res) => {
    const{id}=req.params
    const obj=req.body
    const putProduct=await Products.findByIdAndUpdate(id,obj)
  res.send(putProduct)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})