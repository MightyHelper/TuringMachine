// Lo que hacemos es Verificar tachando desde los extremos
let deltamap = {
    'Init_a': 'Seeka_*_>',
    'Init_b': 'Seekb_*_>',
    'Init_#': 'Init_#_-',
    'Init_*': 'Init_*_-',

    'Seeka_a': 'Seeka_a_>',
    'Seeka_b': 'Seeka_b_>',
    'Seeka_#': 'Ensurea_#_<',
    'Seeka_*': 'Ensurea_*_<',
    'Ensurea_*': 'Ensurea_*_<',
    'Ensurea_a': 'Return_*_<',

    'Seekb_a': 'Seekb_a_>',
    'Seekb_b': 'Seekb_b_>',
    'Seekb_#': 'Ensureb_#_<',
    'Seekb_*': 'Ensureb_*_<',
    'Ensureb_*': 'Ensureb_*_<',
    'Ensureb_b': 'Return_*_<',


    'Return_a': 'Return_a_<',
    'Return_b': 'Return_b_>',
    'Return_*': 'Init_*_>',
}
window.addEventListener('DOMContentLoaded', () => {
    window.createTuringMachine("w=wr", 1, "baaaab", deltamap)
})