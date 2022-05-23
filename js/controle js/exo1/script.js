let tommy ={
    nom: "Des",
    prenom: "Tommy",
    note : [6,7,8,9,10],
    moyenne : function (){
        let sum = 0;
          
        for(let i=0; i< this.note.length; i++){
            sum += this.note[i]
            
        }
        return sum /= this.note.length
    }
    
}
console.log(tommy.moyenne())
// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);