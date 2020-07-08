// const newArray = [0, 9, 6];

// let val =newArray.find(elem =>{
//     return elem;
// })
let dragonArray = [
    { name : "Jay", age : 24.0, salary : '18Lpa'},
    { name : "Sumit", age : 23, salary : '22Lpa'},
    { name : "Ashish", age : 24.7, salary : '16Lpa'},
    { name : "Vimal", age : 24, salary : '19Lpa'},
    { name : "Deepak", age : 22.5, salary : '15Lpa'},
    { name : "Sidhu", age : 23.3, salary : '19Lpa'},
]

 let val = dragonArray.map(elem =>{
   if(elem.age > 23 && parseInt(elem.salary) > 17 ){
     elem.goodpak = 'true'             
    }  
    else{
     elem.work = 'hard' 
   }
   elem.age = Math.round(elem.age)
   return elem
});

console.log(val)