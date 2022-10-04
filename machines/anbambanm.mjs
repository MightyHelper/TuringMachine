// ponemos a^n en la cinta 1, a^m en la cinta 2, y verificamos n*m en la cinta 0 contando la cinta 2 por cada a en la cinta 1
let deltamap = {
    'Init_a_*_*': 'Init_a_a_*_>_>_-',
    'Init_b_*_*': 's1_b_*_*_>_-_-',
    's1_a_*_*': 's1_a_*_a_>_-_>',
    's1_b_*_*': 's2_b_*_*_>_<_<',
    's2_#_a_*': 's4_#_a_*_-_<_-',
    's2_#_*_a': 's2_#_*_a_-_-_-',
    's2_#_*_*': 's2_#_*_*_-_-_-',
    's2_a_a_a': 's2_a_a_a_>_-_<',
    's2_a_*_a': 's2_a_*_a_>_-_<',
    's2_b_*_*': 's2_b_*_*_-_-_-',
    's2_a_a_*': 's3_a_a_*_-_-_>',
    's3_a_a_a': 's3_a_a_a_-_-_>',
    's3_a_a_*': 's2_a_a_*_-_<_<',
    's4_#_*_*': 's4_#_*_*_-_-_-',
}
window.addEventListener('DOMContentLoaded', () => {
    window.createTuringMachine("banbam", 3, "aabaaabaaaaaa", deltamap)
    window.createTuringMachine("banbam", 3, "aaaabaaabaaaaaaaaaaaa", deltamap)
    window.createTuringMachine("banbam", 3, "aabaaabaaaaaaaaaaaa", deltamap)
    window.createTuringMachine("banbam", 3, "aabaaabaaa", deltamap)
})