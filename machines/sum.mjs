let deltamap={
	'Init_1':'Del#_#_<',
	'Del#_#':'Del#_*_>',
	'Del#_1':'End_#_>',
	'Del#_&':'End_#_-',
	'End_1':'End_1_>',
	'End_&':'End_1_>',
	'End_#':'End_#_-',
}
window.addEventListener('DOMContentLoaded', ()=>{
	window.createTuringMachine("sum", 1, "1111&1", deltamap)
	window.createTuringMachine("sum", 1, "1&111", deltamap)
	window.createTuringMachine("sum", 1, "1&1", deltamap)
})
