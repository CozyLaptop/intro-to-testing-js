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
function isFive(input){
    return input === 5;
}