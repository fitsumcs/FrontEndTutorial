// Event 
document.getElementById('button').addEventListener('click',loadData);




// 
function loadData()
{
// creaet xml http 
const xhr = new XMLHttpRequest();
// Ready state 
// 0. Reqest not initialized 
// 1. server connection established 
// 2. Request received 
// 3. processing request 
// 4. request finished and response ready

// console.log(xhr.readyState);
// open 
xhr.open('GET','data.txt',true);

// onprogress ..for loader or spinner 
xhr.onprogress = function()
{
  console.log("Request is going on .....:) waiting ..." + xhr.readyState);
}
// console.log(xhr.readyState);
xhr.onload = function() {
  // console.log(xhr.readyState);
  // Status code check 
if(this.status === 200)
{
  //  console.log(this.responseText);
  document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
}

} 

// on error 
xhr.onerror = function()
{
  console.log("There is error ...");
}

xhr.send();
}