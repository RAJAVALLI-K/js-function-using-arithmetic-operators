// arithmetic operator

let num = parseInt(prompt("Enter a number:"));
let num1 = parseInt(prompt("Enter a number:"));
let value = prompt("enter a string:");
if (value == 'add') {
    function add(num, num1) {
        let c = num + num1;
        return c
    }
    console.log(add(num, num1));
}
else if (value == 'sub') {
    function sub(num, num1) {
        let c = num - num1;
        return c
    }
    console.log(sub(num, num1));
}
else if (value == 'mul') {
    function mul(num, num1) {
        let c = num * num1;
        return c
    }
    console.log(mul(num, num1));
}
else if (value == 'div') {
    function div(num, num1) {
        let c = num / num1;
        return c
    }
    console.log(div(num, num1));

}
else if (value == 'mod') {
    function mod(num, num1) {
        let c = num % num1;
        return c
    }
    console.log(mod(num, num1));

}