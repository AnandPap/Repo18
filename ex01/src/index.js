let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for (let i = 0; i < x; i++) {
        x = x * 2;
        myArr.push(x);
        yield x;
    }
}
// Only change code above this line
var num = multiplication(3);
for (let i = 0; i < 3; i++) {
    console.log(num.next().value);
}
module.exports = multiplication;