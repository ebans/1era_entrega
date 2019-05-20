//PRIMERA PARTE

let cursos =(id,nombrec,duracionc,valor,tiempo,callback)=>{
    setTimeout(function(){
        let curso={
            codigo:id,
            nombre:nombrec,
            duracion:duracionc,
            Costo:valor
            
             }
         callback(curso);
     },tiempo);
     }
 cursos(1,"calculo","2 horas","$"+50000,0000,function(curso){
        console.log(curso);
});
cursos(2,"fisica","3 horas","$"+60000,2000,function(curso){
     console.log(curso);
});
cursos(3,"ingles","4 horas","$"+40000,4000,function(curso){
     console.log(curso);
});   
