let deltamap={
	'Init_1':'Del#_#_<',
	'Del#_#':'Del#_*_>',
	'Del#_#':'Del#_*_>',
}
window.addEventListener('DOMContentLoaded', ()=>{
	window.createTuringMachine("max", 1, "1111&111", deltamap)
	window.createTuringMachine("max", 1, "1111&111111", deltamap)
	window.createTuringMachine("max", 1, "1&1", deltamap)
})
