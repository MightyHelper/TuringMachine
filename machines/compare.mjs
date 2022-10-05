let deltamap={
// Estrategia #11111&1111#:
// Vamos sacando de a 1 de cada borde.
// Si nos topamos con el & a la izquierda - entonces n1<n2
//  - Lo que hacemos es borrar todo a la derecha dell & y reemplazar el & por un 1, y resetear n1 y ponerle el # al final
// Sino, computamos n1-n2 y simplemente queda mover el comienzo y el final y borrar el resto
	'Init_1':'RemR_0_>',
	'RemR_1':'RemR_1_>',
	'RemR_0':'RemR_0_>',
	'RemR_&':'RemR_&_>',
	'RemR_#':'DelF_#_<',
	'DelF_0':'DelF_0_<',
	'DelF_1':'ToSt_0_<',
	'ToSt_1':'ToSt_1_<',
	'ToSt_0':'ToSt_0_<',
	'ToSt_&':'ToSt_&_<',
	'ToSt_#':'Ftch_#_>',
	'Ftch_0':'Ftch_0_>',
	'Ftch_1':'Init_1_-',
	'DelF_&':'cmp_&_>',
	'Ftch_&':'cmp_&_>',
	'cmp_0':'subtr_&_<', // x-y
	'cmp_1':'resetA_#_>', // x+1
	'resetA_1':'resetA_*_>',
	'resetA_0':'resetA_*_>',
	'resetA_#':'resetA_*_<',
	'resetA_*':'resetA_*_<',
	'resetA_&':'endA_1_>',
	'endA_*':'endA_#_<',
	'endA_1':'endA_1_<',
	'endA_0':'endA_1_<',
	'endA_#':'endA_#_-',
	'subtr_1':'subtr_0_<',
	'subtr_&':'subtr_&_<',
	'subtr_0':'rem_0_>',
	'rem_0':'rem_0_>',
	'rem_&':'rem_&_>',
	'rem_#':'begdel_#_<',
	'begdel_0':'postdel_*_<',
	'postdel_0':'postdel_0_<',
	'postdel_&':'postdel_&_<',
	'postdel_#':'delb1_#_>',
	'postdel_*':'delb1_*_>',
	'delb1_0':'delb2_*_>',
	'delb2_0':'delb2_0_>',
	'delb2_&':'delb2_&_>',
	'delb2_*':'begdel_*_<',
	'begdel_&':'fs0_*_>',
	'fs0_*':'fs0_*_>',
	'fs0_#':'fs1_*_<',
	'fs1_*':'fs1_*_<',
	'fs1_&':'fs2_#_<',
	'fs2_0':'fs2_0_<',
	'fs2_*':'fs2_*_<',
	'fs2_#':'fs3_*_>',
	'fs3_*':'fs3_*_>',
	'fs3_0':'fs4_0_<',
	'fs4_*':'fs5_#_>',
	'fs5_0':'fs5_1_>',
	'fs5_#':'fs5_#_-',
}
window.addEventListener('DOMContentLoaded', ()=>{
	window.createTuringMachine("ww", 1, "111&111111", deltamap)
	window.createTuringMachine("ww", 1, "111&1111", deltamap)
	window.createTuringMachine("ww", 1, "1111&111", deltamap)
	window.createTuringMachine("ww", 1, "1111111&111", deltamap)
	window.createTuringMachine("ww", 1, "111&111", deltamap)
})

