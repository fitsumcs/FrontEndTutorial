/*
Easy Http Library 
Library for making http request 

@version 2.0
*/

class EasyHTTP{


//   get request 
async get(url)
{
   const response = await fetch(url);
   const rData = await response.json();

   return rData ;


  
}
// post 
async post(url,data)
{
    
       const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)

        });
        const rData  = await response.json();

        return rData ;
       
  
   
  
}
// update
async update(url,data)
{
    
    const response = await fetch(url,{
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)

        });
        const rData  = await response.json();

        return rData ;
   
  
}

// delete 
//   get request 
async delete(url)
{
    
    const response = fetch(url,{
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        });
   
    const rData  = await 'Deleted';

        return rData ;
}

}