function insert(symbol) {
    document.form.textview.value = document.form.textview.value + symbol; 
}

function equal() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function clean() {
    document.form.textview.value = null;
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}