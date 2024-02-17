setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//sama kuin edellä

setTimeout(function doSomething(){
    console.log("V2. Demonstrating the callbacks");
},2000);

console.log("The application is started");

//edellä funktion nimeä ei tarvi, eli voidaan käyttää anonyymifunktiota


setTimeout(function(){
    console.log("V3. Demonstrating the callbacks");
},2000);

console.log("The application is started");

//ns. lambdafunktiolla
setTimeout(()=>{
    console.log("V4. Demonstrating the callbacks");
},2000);

console.log("The application is started");
