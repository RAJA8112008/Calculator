// let arr =[2,4,6,8]

// let ARRAY=arr.map((number)=>{
//     return number+number
// })
 
// console.log(ARRAY);
let Arr=[4,1,2,8,9,3,5,68]
 let newArr=Arr.filter((number)=>{
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
})
console.log(newArr);