let _cls

function getConstructor(obj) {
	if(obj === null) return Object
	if(obj.toString().split(' ')[0] === 'class') return obj
	if(typeof obj === 'function') return obj
	return obj.constructor
}

exports.AddMetaClass = (mcls) => {
	return function(cls) {
		_cls = cls
		mcls.__new__(cls.name, cls.prototype)
	}
}

exports.CreateClass = (name, ...attr) => {
	let base = getConstructor(_cls)
	let attrs = attr.entries()
	
	eval(`global['${name}'] = class ${name} extends base {

		constructor(...args) {
			if(base !== null)
				super(...args)
			else
				super()
		}
	}`)

	for(let [key, value] of attrs) {
		global[name].prototype[key] = value
	}

	return global[name]
}