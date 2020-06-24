// get the button 
document.getElementById('button1').addEventListener('click',loadData);
document.getElementById('button2').addEventListener('click',loadDatas);


// load data 
function loadData(e)
{
  
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', 'customer.json', true);

xhr.onload = function()
{
  if(xhr.status === 200)
  {
    
    // Parse 
    const cu = JSON.parse(this.responseText);

    const output = `
    <ul>
    <li>ID : ${cu.id}</li>
    <li>Name : ${cu.name}</li>
    <li>Company : ${cu.company}</li>
    <li>phone : ${cu.phone}</li>
    </ul>`;
    
    document.getElementById('customer').innerHTML = output;
  }
}
xhr.send();

}

// load datas 
// load data 
function loadDatas(e)
{
  
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', 'customers.json', true);

xhr.onload = function()
{
  if(xhr.status === 200)
  {
    
    // Parse 
    const cu = JSON.parse(this.responseText);
    let output = '';
    cu.forEach(cu => {
      output += `
    <ul>
    <li>ID : ${cu.id}</li>
    <li>Name : ${cu.name}</li>
    <li>Company : ${cu.company}</li>
    <li>phone : ${cu.phone}</li>
    </ul>`;
    });

  
    
    
    document.getElementById('customers').innerHTML = output;
  }
}
xhr.send();

}