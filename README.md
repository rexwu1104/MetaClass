# @jspy-code/metacls
---
export one `thing`

the `metacls`

---
example to use this package

```js
let metacls = require('@jspy-code/metacls')

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
```

output: 
```yml
[class test extends metacls]
xxx {}
1
get
```