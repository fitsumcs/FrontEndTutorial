  // Working with external api 
  // The api URL : http://www.icndb.com/api/

  // vars 
  document.querySelector('.get-jokes').addEventListener('click', getJoks);



  // functin 

  function getJoks(e)
  {

    const no = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${no}`,true);


    xhr.onload = function()
    {
      if(this.status === 200)
      {
        const response = JSON.parse(this.responseText);
        console.log(response);
        let output = '';
        if(response.type === "success")
      {
        response.value.forEach(element => 
          {
          output += `<li>${element.joke}</li>`;
        });


      }
      else{
        output += `<li>Somthing is wrong</li>`;
      }
        document.querySelector('.jokes').innerHTML = output;
      }
    }
    xhr.onerror = function()
    {
      console.log("There is error ...");
    }
  xhr.send();


  e.preventDefault();

  }