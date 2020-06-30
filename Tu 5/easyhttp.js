// https://jsonplaceholder.typicode.com/
// Constructore
function easyHttP()
{
  this.http = new XMLHttpRequest();
}



// Make http Get 
easyHttP.prototype.get = function(url,callback)
{

  this.http.open('GET',url,true);
  let self = this;
this.http.onload = function()
{
     
    if(self.http.status = 200)
    {
    callback(null,self.http.responseText);
    }
    else{callback('Error : ' + self.http.status);}
}

  this.http.send();

}


// Make http Post e
easyHttP.prototype.post = function(url, data , callback)
{
    this.http.open('POST', url, true);
    this.http.setRequestHeader("Content-type","application/json");
    let self = this;
    this.http.onload = function()
    {
        
        callback(null,self.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));
}

// Make http put 
easyHttP.prototype.put = function(url, data , callback)
{
    this.http.open('PUT', url, true);
    this.http.setRequestHeader("Content-type","application/json");
    let self = this;
    this.http.onload = function()
    {
        
        callback(null,self.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));
}

// make http delete
easyHttP.prototype.delete = function(url, callback)
{
    this.http.open('DELETE',url,true);
    // this.http.setRequestHeader("mode", "no-cors");
    let self = this;
    this.http.onload = function()
    {
        
        if(self.http.status = 200)
        {
        callback(null,'Post Deleted');
        }
        else{callback('Error : ' + self.http.status);}
    }
  
    this.http.send();
}