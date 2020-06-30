// Iterator 
function nameIterator(names)
{
   let nexIndex = 0;
   
   return {
      next : function()
      {
          return nexIndex< names.length? {value:names[nexIndex++],done:false}:{done:true}
      }
   
   }

}

// create array 
const nameArr = ['Ababa', 'Kabde', 'Bekele'];

const names = nameIterator(nameArr);

// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)

// Generatoers 
function* sayNames()
{
    yield 'Ababa';
    yield 'kebede';
    yield 'Jill';
}

const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

function* generateId()
{

    let index = 1;
    while(true)
    {
        yield index++;
    }
}
const geId = generateId();
console.log(geId.next().value);
console.log(geId.next().value);
console.log(geId.next().value);
console.log(geId.next().value);
console.log(geId.next().value);