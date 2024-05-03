function runThisLater(){
    console.log("Hi Mom!")
}

function doStuff(functionToRun){
    console.log("Do this first");
    //then run the callback
    functionToRun()
}

doStuff(runThisLater)


function useCallback(callback) {
  // calling the function passed as a parameter
  callback();
}

useCallback(function () {
  console.log("Printing to the console from the callback function");
});


