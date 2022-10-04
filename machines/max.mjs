let deltamap={
	'Init_1':'Rem_2_>',
	'Rem_1':'Rem_1_>',
	'Rem_&':'Del_&_>',
	'Del_2':'Del_2_>',
	'Del_1':'Get_2_<',
	'Get_2':'Get_2_<',
	'Get_&':'Fet_&_<',
	'Fet_1':'Fet_1_<',
	'Fet_2':'Mov_2_>',
	'Mov_1':'Rem_2_>',
	'Mov_&':'Delete2_#_<', //first is longer
	'Del_#':'Delete1_*_<', //second is longer
	'Delete2_1':'Delete2_*_<',
	'Delete2_2':'Delete2_*_<',
	'Delete2_#':'MoveBack2_*_>',
	'MoveBack2_*':'MoveBack2_*_>',
	'MoveBack2_#':'FC2_#_>',
	'FC2_2':'FC2_1_>',
	'FC2_#':'FC2_#_-',
	'FC2_1':'FC2_1_<',
	'Delete1_2':'Delete1_*_<',
	'Delete1_&':'Convert_#_<',
	'Convert_2':'Convert_1_<',
	'Convert_#':'Convert_#_-',
}
window.addEventListener('DOMContentLoaded', ()=>{
	window.createTuringMachine("max", 1, "1111&111", deltamap)
	window.createTuringMachine("max", 1, "1111&111111", deltamap)
	window.createTuringMachine("max", 1, "1&1", deltamap)
})
