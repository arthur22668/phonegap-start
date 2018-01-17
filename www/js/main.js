const app = new MainApp();
let calcul = document.querySelector(".calcul")
let result = document.querySelector(".out")
let form = document.querySelector("form")
let score = document.querySelector(".score")
let digits = document.querySelector(".digits")
let buttons = document.querySelectorAll(".button")
let game = document.querySelector(".game")
let keyboard = document.querySelector(".keyboard")
let op = []
let life = 3
function init() {

	app.init()
	op = app.getOp();
	calcul.innerHTML = op[0];
}
form.addEventListener("submit", e => {
	e.preventDefault()
	if(Math.abs(op[1] - parseFloat(result.value)) < Math.pow(10, -1) / 2 && life > 0) {
		score.innerHTML = parseInt(score.innerHTML) + Math.min(Math.abs(app.x),Math.abs(app.y))
		result.value = "";
		life = 3
		init()
	} else {
		life -= 1
	}

	if (life <= 0) {
		score.innerHTML = 0
		life = 3
		init()
	}
})
// digits.addEventListener("change", e => {
//	app.set.nLength = parseInt(digits.value)
//	init()
// })
init()


document.querySelector(".del").addEventListener("click", e => {
	result.value = result.value.slice(0, -1)
})
document.querySelector(".dot").addEventListener("click", e => {
	result.value += "."
})
document.querySelector(".min").addEventListener("click", e => {
	result.value = parseInt(result.value) * -1;
})
buttons.forEach(el => {
	el.addEventListener("click", e => {
		el.parentElement.style.top = "-50%";
		game.style["z-index"] = 1;
		keyboard.style["z-index"] = 100
	})
})
