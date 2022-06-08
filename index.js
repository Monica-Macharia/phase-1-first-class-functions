const receivesAFunction = (chai) => chai();  
    chai();
    
function returnsANamedFunction (){
    return function fn() {
    console.log('named funtion');
    };
}
function returnsAnAnonymousFunction(){
    return function(){
    console.log ("before all");
};
}