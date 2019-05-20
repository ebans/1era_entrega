
//función de cursos
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
//cursos-son 3 los cuales utilice para poder realizar el archivo txt         
let curso=[{
            codigo:'1',
            nombre:"calculo",
            duracion:"2 horas",
            Costo:50000
            
         },
         {
                codigo:'2',
                nombre:"fisica",
                duracion:"3 horas",
                Costo:60000
                
         },
        {
                codigo:'3',
                nombre:"ingles",
                duracion:"4 horas",
                Costo:40000
                
             }];

   
module.exports={
       curso,
        cursos
        
    };
 