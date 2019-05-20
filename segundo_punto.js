
const {curso,cursos} = require('./index');


const fs = require('fs');

const opciones = {
    id:{
      demand:true,
      alias:'i'
    },
    nombres:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'c'
    },
    estado:{
      demand:true,
      alias:'e'

    }


}

let mostrar=()=>{
  cursos(1,"calculo","2 horas","$"+50000,0000,function(curso){
    console.log(curso);
    });
  cursos(2,"fisica","3 horas","$"+60000,000,function(curso){
      console.log(curso);
});
cursos(3,"ingles","4 horas","$"+40000,000,function(curso){
  console.log(curso);
});

}

const argv = require('yargs')

           .command('funciones','buscar información',opciones) 
           
           .argv
let crearArchivo = (id,curso,nombre,cedula,duracion,valor)=>{
            texto='El curso : '+ curso + " con codigo : "+ id + " el cual esta proximo a matricularse : " + nombre +" identificado: "+ cedula +'\n' +
                   'tiene una duracion de :' + duracion + ' y su valor es de : $'+ valor;
        
        fs.writeFile('matricula.txt',texto,(err)=>{
            if (err) throw (err);
            console.log('se ha creado un nuevo archivo');
        });
        }  
 if (argv.estado=='buscar'){
  let cod=argv.id; 
  const buscar=curso.find(item =>{
    return item.codigo==cod;
  })
  
  if (buscar==undefined){
    
   console.error('El curso con ese codigo no existe,vuelve a intentar');
  }else{
   console.log(buscar);
  }

 } else if(argv.estado=='inscribir'){
  let cod1=argv.id;
  const buscar1=curso.find(item1 =>{
    return item1.codigo==cod1;
    
  })
  
  crearArchivo(argv.id,buscar1.nombre,argv.nombres,argv.cedula,buscar1.duracion,buscar1.Costo);


 }else if(argv.estado='ver'){
   mostrar();
 }
 
 
 


          

  
  
