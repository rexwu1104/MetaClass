class ClassNameError extends Error {
	constructor() {
		super('class name cannot have space.')
	}
}

module.exports = class metacls extends Object {
	constructor(name, base, attr) {
		super()
		if(name.indexOf(' ') !== -1)
			throw new ClassNameError()
		eval(`this.cls = class ${name} {}`)

		let base_prototype_properties = Object.getOwnPropertyDescriptors(base.prototype)
		if(base_prototype_properties)
			for(let k of Object.getOwnPropertyNames(base_prototype_properties)) {
				let descriptor = base_prototype_properties[k]
				if(descriptor.writable && k !== 'constructor')
					Object.defineProperty(this.cls.prototype, k, descriptor)
			}

		let base_properties = Object.getOwnPropertyDescriptors(base)
		if(base_properties)
			for(let k of Object.getOwnPropertyNames(base_properties)) {
				let descriptor = base_properties[k]
				if(descriptor.writable)
					Object.defineProperty(this.cls, k, descriptor)
			}

		for(let k in attr) {
			let descriptor = Object.getOwnPropertyDescriptor(attr, k)
			Object.defineProperty(this.cls.prototype, k, descriptor)
		}

		return new this.cls()
	}
}