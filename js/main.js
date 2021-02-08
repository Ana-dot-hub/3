let value1 = prompt('Enter the first number');
let value2 = prompt('Enter (+, -, *, /)');
let value3 = prompt('Enter the second number');
let r;

if(!isNaN(parseFloat(r)) && isFinite(r));

switch (value2) {

    case '+' : {
        r = +value3 + +value1;
        alert(r);
    }break
    case '-' : {
        r = value3 - value1;
        alert(r);
    }break
    case '*' : {
        r = value3 * value1;
        alert(r);
    }break
    case '/' : {
        r = value3 / value1;
        alert(r);
    }break
    default:
    alert('Enter (+, -, *, /)')
}


