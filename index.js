// function receivesAFunction(code){
//     return code();
// }
// receivesAFunction

// function returnsANamedFunction(newFunction){
//     return newFunction();
// }
// returnsANamedFunction()





// function receivesAFunction (funk) {
//     return funk()
// }

// function returnsANamedFunction () {
//     return function named() {
//     return 'returns a named function'
//     }
// }

// function returnsAnAnonymousFunction (){
//     return () => console.log('this is an anonymous function')
// }





const receivesAFunction = callBack => callBack()

const returnsANamedFunction = () => returnsANamedFunction

const returnsAnAnonymousFunction = () => () => returnsAnAnonymousFunction