import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
//rodar toda aplicacao 
let app = express();
app.use(bodyParser.json());
//irei aceitar o tipo resgate e suas limitações
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', router);
//prende a aplicacao 
//ao final da aplicacao princiapl a aplicacao fica
//presa
//app interage com router ...
// app.listen(3002, function(){
//   console.log('Ainda servidor Parada em execuacao ...');
// })

app.listen(process.env.PORT || 4008)
