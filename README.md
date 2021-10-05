# @jspy-code/metacls
---
export two `things`

the `AddMetaClass` and `CreateClass`

---
example to use this package

```js
let { AddMetaClass, CreateClass } = require('@jspy-code/metacls')

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
```

output: 
```js
true
get
```