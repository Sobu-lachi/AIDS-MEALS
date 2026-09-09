import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({"message":"hello World"})
})


app.listen(8000, ()=>{
    console.log('Hear Me, Hear Me!!')
})