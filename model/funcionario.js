export default class Funcionario{
 
    //as variáveis da minha classe estão no construtor ...
     constructor(nome, funcao,salario, sexo){
       this.nome = nome;
       this.funcao = funcao;
       this.salario = salario;
       this.sexo = sexo;
       this.bonus = this.salario + 200;
     }

     getNome(){
         return this.nome;
     }



}