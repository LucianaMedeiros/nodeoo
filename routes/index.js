import express from 'express';
//rest
let router = express.Router();
import Funcionario from '../model/funcionario';
import funcionarios from '../model/manager';

//aqui que eu irei trabalhar
router.get('/',(req, res)=>{
     let lista  = funcionarios;
      res.json(lista);
});

router.get('/mapa',(req,res)=>{
 let mapa = funcionarios.map(res=>{
     return res.nome
 });
 res.json(mapa);
}); 

router.get('/filtro/:sexo',(req,res)=>{
     let parsexo = req.params.sexo;

   let resposta = funcionarios.filter(res=>{
       return  res.sexo === parsexo  });
   res.json( resposta );
}); 
   


router.get('/total/:sexo',(req,res)=>{
    
    let parsexo = req.params.sexo;
    let soma = funcionarios.filter(res=>{
    return  res.sexo === parsexo  }).reduce(function (ini, item){
        return ini  +  +item.salario
        }, 0);
        
      res.json( soma );

}); 



export default router;






