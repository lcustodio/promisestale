var listOf3 = [1,2,3,4,5,6];

listOf3.map(printer).reduce(function(previousPromise, currentPromise) {

    console.log("return previousPromise.then...");
    return previousPromise.then(function () {
        console.log("return currentPromise...");
        return currentPromise;
    }).then(function (chapter) {
        console.log("chapter " + chapter);
    }).catch(function(err){
        console.error("Shit happens -> " + err);
    });
}, Promise.resolve());


function printer(x){
    return new Promise(function(resolve, reject){

        var startTime = Date.now();
        var waitTime = 1000 * x;

        while (waitTime > Date.now() - startTime);

        console.log("inside the promise");
        resolve("Stuff " + x);
    })
}