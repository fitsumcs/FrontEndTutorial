document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getApi);
// Fetch 
function getText()
{
   fetch('test.txt')
   .then(res=>res.text())
   .then(data=> {document.getElementById('output').innerHTML = data;})
    .catch(err=>console.log(err));
}
// get json
function getJson()
{
   fetch('posts.json')
   .then(res=>res.json())
   .then(data=>{
    // console.log(data)
    let output = ''
    data.forEach(element => {
        output += `<li>${element.body}</li>`
    });
   document.getElementById('output').innerHTML = output;
   
  })
    .catch(errr=>console.log(err));
}

// get API from github
function getApi()
{
   fetch('https://api.github.com/users')
   .then(res=> res.json())
   .then(data=>{
    // console.log(data)
    let output = ''
    data.forEach(element => {
        output += `<li>${element.login}</li>`
    });
   document.getElementById('output').innerHTML = output;
    })
    .catch(err=>
    {
      console.log(err)
    });
}

