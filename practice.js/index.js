
let arr =[10,20,30,40,50,60,55]
 let sumarr=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(sumarr);