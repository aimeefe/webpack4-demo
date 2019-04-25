// demo1
const funA = () => {
	console.log('funA!!');
}
funA();


// demo2
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

let student = new Person('lily', 20);
console.log(student);


// demo3
var arr = [1, 2, 3, 4];
var sum = arr.reduce((prev, cur) => prev + cur)
console.log(sum)


// demo4
console.log(['a', 'b', 'c'].includes('a')) // true


// demo5
let n = 4;
n **= 3;
console.log(n)