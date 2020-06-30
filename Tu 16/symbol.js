let value = Symbol("Test");
val = Symbol() === Symbol();

// convert to string 
val = `Hello ${String(Symbol('Abea'))}`;
val = `Hello ${Symbol('Abea').toString()}`;

// Unique 
const key1 = Symbol()
const key2 = Symbol();

val = {}
val[key1] = "One";
val[key2] = "Two";
val.key3 = "Three";
// Not iteratable in a for in loop
for (const key in val) {
    if (val.hasOwnProperty(key)) {
        // console.log(key +':' + val[key]);
        
    }
}

// ignored on json stringfy 


console.log(JSON.stringify(val))


