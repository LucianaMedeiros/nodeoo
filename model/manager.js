import Funcionario from   '../model/funcionario';


const lista=[
  new Funcionario('soneca','prog',6000,'m'),
  new Funcionario('vitinho','prog',8000,'m'),
  new Funcionario('lady di','prog',10000,'f'),
  new Funcionario('priscila','adm',6000,'f'),
  new Funcionario('lu','teste',7000,'f')
];

//ao final sempre exporta (global)
export default lista;