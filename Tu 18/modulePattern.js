// Module pattern ...
// structuer 
// (
// function()
// {
// // declare private vars and function
// return {
//     // declare public functions and vars
    
// }
// }
// )();

const UICtr  = (
function()
{
    let text = "Hello World!!";

    const changeText = function()
    {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChange : function()
        {
            changeText();
            // console.log(text);
        }
    }



}


)();

// hrere 
// UICtr.callChange();


// Revealing pattern 
ItemCtrl = (function(){
    let items = [];
    let add = function(item)
    {
        items.push(item);
        console.log('Item added ..');
    }
    let get = function(id)
    {
        return items.find(item=>{return item.id === id});
    }

    return{
        add ,
        get
    }
})();

ItemCtrl.add({id:1,name:"Jhone"});
ItemCtrl.add({id:2,name:"Jane"});
ItemCtrl.add({id:3,name:"Jue"});

console.log(ItemCtrl.get(2));









