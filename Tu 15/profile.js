const data = [
 {
     name : "First Person",
     age : 21,
     lookingFor : "Female",
     location: "Bosten",
     image: "https://randomuser.me/api/portraits/me/82.jpg"
 },
 {
    name : "Second Person",
    age : 22,
    lookingFor : "Female",
    location: "Bosten",
    image: "https://randomuser.me/api/portraits/me/83.jpg"
},
{
    name : "Third Person",
    age : 23,
    lookingFor : "Female",
    location: "Bosten",
    image: "https://randomuser.me/api/portraits/me/84.jpg"
}
];


// Create the iterater 

function profileIterater(profiles)
{

   let nextIndex = 0;
   return {
       next: function(){
           return nextIndex<profiles.length? {value:profiles[nextIndex++],done:false}:{done:true}
       }
   }


}

let profile = profileIterater(data);

getNext();
document.getElementById('nextProfile').addEventListener('click',getNext);

function getNext()
{
    const current = profile.next().value;
    if(current!==undefined)
    {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name : ${current.name}</li>
          <li class="list-group-item">Gender : ${current.age}</li>
          <li class="list-group-item">Looking For: ${current.lookingFor}</li>
          <li class="list-group-item">Location : ${current.location}</li>
          </ul>
        
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${current.image}">`;
    }
   else
   {
       window.location.reload();
   }
}