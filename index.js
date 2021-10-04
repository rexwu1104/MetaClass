let { AddMetaClass, CreateClass } = require('./MetaClass')

class metaclass {
	static __new__(name, attr) {
		name = "xxx"
		return CreateClass(name, attr)
	}
}

@AddMetaClass(metaclass)
class test {
	constructor() {
		console.log(true)
	}

	get() {
		console.log("get")
	}
}

setTimeout(() => {
	(new xxx()).get();
}, 2000)