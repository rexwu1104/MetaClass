let metacls = require('../index')

class test extends metacls {
	constructor() {
		return super("xxx", test, { x: 1 })
	}

	get() {
		console.log("get")
	}
}

console.log(test)

let cls = new test()
console.log(cls)

console.log(cls.x)
cls.get()