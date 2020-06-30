const http = new easyHttP();

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts)
// {
//   if(err)
//   {
//    console.log(err);
//   }
//   else{
//     console.log(posts);
//   }
   
// });


// Single Post 
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post)
// {
//   if(err)
//   {
//    console.log(err);
//   }
//   else{
//     console.log(post);
//   }
   
// });


// Post Req 
const data = {title: 'Custom Post', body: 'Custom Body Post'};

// http.post('https://jsonplaceholder.typicode.com/posts', data ,function(err,posts){
//  if(err)
//  {
//      console.log(err);
//  }
//  else
//  {
//      console.log(posts);
//  }
// });

// put 
// http.put('https://jsonplaceholder.typicode.com/posts/1', data ,function(err,posts){
//  if(err)
//  {
//      console.log(err);
//  }
//  else
//  {
//      console.log(posts);
//  }
// });

// delete
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,res){
//  if(err)
//  {
//      console.log(err);
//  }
//  else
//  {
//      console.log(res);
//  }
// });