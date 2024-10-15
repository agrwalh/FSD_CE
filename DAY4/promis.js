const promise = new Promise(function (resolve, reject) {
    console.log("My first Promise");
    resolve("Resolved");
  
});

promise.then(() => { 
    console.log("My first then");
}).catch(() => {
    console.log("My first catch");
});