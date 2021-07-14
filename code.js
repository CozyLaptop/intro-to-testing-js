// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input){
    if (input === false){
        return helloWorld();
    }
    return `Hello, ${input}!`;
}