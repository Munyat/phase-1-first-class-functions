function receivesAFunction (chai){
    return chai();
}
function returnsANamedFunction(){
    const fn = receivesAFunction
    return fn
}
function returnsAnAnonymousFunction() {
    return function (){
        
    }
}