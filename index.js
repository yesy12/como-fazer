const express=require('express');
const app=express();
const bodyParser=require('body-parser');

const categorias =require('./routes/categorias');
const publicacoes= require('./routes/publicacoes');

const axios=require('axios');


app.set('view engine','ejs');
app.use(bodyParser.urlencoded() );

const linkGet='https://como-fazer-1f63f.firebaseio.com/';

const port = process.env.PORT || 3000;

app.get('/',async(req,res) =>{
	const content= await axios.get(linkGet+"teste.json");
	res.render('index',{
		'i':content.data
	})

})

app.use('/categorias',categorias);
app.use('/publicacoes',publicacoes);

app.listen(process.env.PORT,function(){
	console.log("COMO-fazer starting ...");
})
