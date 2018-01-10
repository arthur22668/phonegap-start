class MainApp {
	constructor() {
		this.set = {
			nLength: 1,
			cType: "add"
		}
		this.init()
	}
	init() {
		this.setRndType()
		this.x = 0;
		this.y = 0;
	}
	getN() {
		const min = Math.ceil(Math.pow(10, this.set.nLength - 1));
		const max = Math.floor(Math.pow(10, this.set.nLength) - 1);
		// const isPositive = Math.round(Math.random())
		const result = Math.floor(Math.random() * (max - min +1)) + min;
		return result
	}
	getOp() {
		this.x = this.getN();
		this.y = this.getN();
		const x = this.x;
		const y = this.y;
		let operation = "";
		let result = 0;
		switch (this.set.cType) {
			case "mul":
					operation = `<mn>${x}</mn><mo>&#xD7;</mo><mn>${y}</mn>`
					result = x * y
				break;
			case "div":
					operation = `<mi>${x}</mi><mo>&#xF7;</mo><mi>${y}</mi>`
					result = x / y
				break;
			case "add":
					operation = `<mn>${x}</mn><mo>+</mo><mn>${y}</mn>`
					result = x + y
				break;
			case "sub":
					operation = `<mn>${x}</mn><mo>-</mo><mn>${y}</mn>`
					result = x - y
				break;
			default:
				operation = "undefined"
				result = 0
		}
		return [operation, result]
	}
	isClose(val, actual, precision=1) {
		return Math.abs(val - actual) < Math.pow(10, -precision) / 2
	}
	setRndType() {
		const types = ["mul", "div", "add", "sub"]
		const rnd = Math.floor(Math.random() * 4)
		this.set.cType = types[rnd]
	}
}