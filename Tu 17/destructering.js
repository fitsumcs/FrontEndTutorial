let a , b ;
// array 
[a,b] = [1,2];
// console.log(a,b);

// rest pattern 
[a,b,...rest] = [10,20,3,4,4,5];


({a,b,...rest} = {a:"1", b:"2", c:"3",d:"4"});

let arr = [1,2,3,4,4];
[a,b,...rest] = arr;

console.log(a,b,rest);
