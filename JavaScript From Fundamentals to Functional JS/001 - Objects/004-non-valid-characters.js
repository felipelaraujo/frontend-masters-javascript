function f() {
    return 3;
}

var obj = {}

obj[f()] = false;

console.log(obj);