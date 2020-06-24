// fun

// async function myFunc()
// {
 
//   // create a promise 
//   const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Hi there'),3000);
//   });
//   // const res = await promise1;

//   return promise1;



// }

// myFunc().then(res=>console.log(res));


async function getUers(url)
{
   const data = await fetch(url);

   const val = await data.json();

   return val;

}

getUers('https://jsonplaceholder.typicode.com/users').then(data=>console.log(data))