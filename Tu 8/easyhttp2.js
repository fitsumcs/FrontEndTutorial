/*
Easy Http Library 
Library for making http request 

@version 2.0
*/

class EasyHTTP{


//   get request 
get(url)
{
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
   
  
}
// post 
post(url,data)
{
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
   
  
}
// update
update(url,data)
{
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
   
  
}

// delete 
//   get request 
delete(url)
{
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        .then(res=>res.json())
        .then(()=>resolve('data deleted'))
        .catch(err=>reject(err))
    })
   
  
}
   
  


}