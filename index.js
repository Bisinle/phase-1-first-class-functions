function receivesAFunction(funky){
    funky()
}
function funky(){
    console.log("collar bone that is pink");
}
receivesAFunction(funky)

/*********************************/
function returnsANamedFunction(){
return function namedfunky(){
    console.log("i have a name, do  you?");
}
}

returnsANamedFunction()

/*********************************/
function returnsAnAnonymousFunction(){
    return function(){
        console.log("me so sad, i have no name");
    }
}