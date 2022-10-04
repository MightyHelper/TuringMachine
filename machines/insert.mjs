// Lo que hacemos es Verificar tachando desde los extremos
let deltamap = {
	'Init_&': 'Init_&_-', // Accept lambda
	// Drag humbers over &
	'Init_0': '1SF0_*_>',
	'1SF0_0': '1SF0_0_>',
	'1SF0_1': '1SF1_0_>',
	'1SF0_&': '2SE_0_>',
	'Init_1': '1SF1_*_>',
	'1SF1_0': '1SF0_1_>',
	'1SF1_1': '1SF1_1_>',
	'1SF1_&': '2SE_1_>',
	// Move to part 3
	'2SE_a': '2SE_a_>',
	'2SE_b': '2SE_b_>',
	'2SE_&': '2SE_&_>',
	'2SE_*': '2SE_*_>',
	'2SE_1': '3SH_*_<',
	'3SH_*': '3SH_*_<',
	'3SH_&': '4SH_&_<',
	// Slide
	'4SH_a': '4SH_a_<',
	'4SH_b': '4SH_b_<',
	'4SH_0': '4SH_0_<',
	'4SH_1': '4SH_1_<',
	'4SH_*': '5SF_*_>',
	// Shift
	// '5SF_[10]': '5SF[10]_*_>',
	// '5SF[10]_{10}': '5SF{10}_[10]_>',
	// '5SF[10]_{ab}': '6SF{ab}_[10]_<',
	// '6SF{ab}_[10]': '6SF{ab}_[10]_<',
	// '6SF{ab}_*': '2SE_{ab}_>',
	//
	'5SF_0': '5SF0_*_>',
	'5SF0_1': '5SF1_0_>',
	'5SF0_a': '6SFa_0_<',
	'6SFa_0': '6SFa_0_<',
//
	'5SF0_0': '5SF0_0_>',
	'5SF0_b': '6SFb_0_<',
	'6SFb_0': '6SFb_0_<',
	'6SFa_*': '7RE_a_>',
	//
	'5SF_1': '5SF1_*_>',
	'5SF1_1': '5SF1_1_>',
	'5SF1_a': '6SFa_1_<',
	'6SFa_1': '6SFa_1_<',
//
	'5SF1_0': '5SF0_1_>',
	'5SF1_b': '6SFb_1_<',
	'6SFb_1': '6SFb_1_<',
	'6SFb_*': '7RE_b_>',
	// Repeat
	'7RE_0': '7RE_0_>',
	'7RE_a': '2SE_a_>',
	'7RE_1': '7RE_1_>',
	'7RE_b': '2SE_b_>',
}
window.addEventListener('DOMContentLoaded', () => {
	window.createTuringMachine("insert", 1, "1011&aabbaaabbab&11111", deltamap)
})
