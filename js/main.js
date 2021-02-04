let value1 = prompt('Enter the first number');
let value2 = prompt('Enter (+, -, *, /)');
let value3 = prompt('Enter the second number');
let r;

if (value2 !== '+') {
    alert('Pleae enter (+, -, *, /)');
} else if (value2 !== '-') {
    alert('Pleae enter (+, -, *, /)');
} else if (value2 !== '*') {
    alert('Pleae enter (+, -, *, /)');
} else if (value2 !== '/') {
    alert('Pleae enter (+, -, *, /)');
} else if (value2 == '') {
    alert('Please enter (+, -, *, /)')
} else if (value2 !== Number) {
    alert ('NaN')
}

if (value1 !== Number) {
    alert('Please eneter the first number')
} else if (value1 = '') {
    alert('Please eneter the first number')
}

if (value3 !== Number) {
    alert('Please eneter the first number')
} else if (value3 = '') {
    alert('Please eneter the first number')
}

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
}


