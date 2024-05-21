function cal() {
    var one = document.getElementById('first').value;
    var two = document.getElementById('second').value;
    var ope = document.getElementById('ope').value;

    var result;
    switch (ope) {
        case '+':
            result = parseFloat(one) + parseFloat(two);
            break;
        case '-':
            result = parseFloat(one) - parseFloat(two);
            break;
        case '*':
            result = parseFloat(one) * parseFloat(two);
            break;
        case '/':
            result = parseFloat(one) / parseFloat(two);
            break;
        case '%':
            result = parseFloat(one) % parseFloat(two);
            break;
        default:
            result = 'Invalid operator';
            break;
    }

    document.getElementById('result').value = result;
}
