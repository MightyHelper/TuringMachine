// Lo que hacemos es copiar la parte de w1 y w2r en la cinta 1 y despues verificar que w2w1r=(w1w2r)r
let deltamap = {
    'Init_1_*': 'Init_1_1_>_<',
    'Init_0_*': 'Init_0_0_>_<',
    'Init_2_*': 'GotoEnd1p_2_*_>_-',
    'GotoEnd1p_2_*': 'GotoEnd1p_2_*_>_-',
    'GotoEnd1p_3_*': 'GotoEnd1p_3_*_>_-',

    // 'GotoEnd1p_[10]_[10*]':'GotoEnd1p_[10]_[10*]_>_[>-]',
    'GotoEnd1p_0_*': 'GotoEnd2p_0_*_>_-',
    'GotoEnd1p_0_0': 'GotoEnd2p_0_0_>_>',
    'GotoEnd1p_0_1': 'GotoEnd2p_0_1_>_>',
    'GotoEnd1p_1_*': 'GotoEnd2p_1_*_>_-',
    'GotoEnd1p_1_0': 'GotoEnd2p_1_0_>_>',
    'GotoEnd1p_1_1': 'GotoEnd2p_1_1_>_>',

    'GotoEnd2p_0_*': 'GotoEnd2p_0_*_>_-',
    'GotoEnd2p_0_0': 'GotoEnd2p_0_0_>_>',
    'GotoEnd2p_0_1': 'GotoEnd2p_0_1_>_>',
    'GotoEnd2p_1_*': 'GotoEnd2p_1_*_>_-',
    'GotoEnd2p_1_0': 'GotoEnd2p_1_0_>_>',
    'GotoEnd2p_1_1': 'GotoEnd2p_1_1_>_>',


    'GotoEnd2p_2_*': 'GotoEnd2p_2_2_>_<',
    'GotoEnd2p_3_*': 'GotoEnd2p_3_3_>_<',

    'GotoEnd2p_#_*': 'MoveC2End_#_*_-_>',

    // 'MoveC2End_0_[1023]':'MoveC2End_[10]_[1023]',

    'MoveC2End_#_3': 'MoveC2End_#_3_-_>',
    'MoveC2End_#_2': 'MoveC2End_#_2_-_>',
    'MoveC2End_#_1': 'MoveC2End_#_1_-_>',
    'MoveC2End_#_0': 'MoveC2End_#_0_-_>',

    'MoveC2End_0_*': 'Compare_0_*_-_<',
    'MoveC2End_1_*': 'Compare_1_*_-_<',

    'Compare_0_0': 'Compare_0_0_<_<',
    'Compare_1_1': 'Compare_1_1_<_<',
    'Compare_2_2': 'Compare2_2_2_<_<',
    'Compare_3_3': 'Compare2_3_3_<_<',
    'Compare2_2_2': 'Compare_2_2_<_<',
    'Compare2_3_3': 'Compare_3_3_<_<',
    'Compare2_0_*': 'Compare2_0_*_-_-',
    'Compare2_1_*': 'Compare2_1_*_-_-',

    'MoveC2End_#_*': 'MoveC1P2_#_*_<_-',
    'MoveC1P2_2_*': 'MoveC1P2_2_*_<_-',
    'MoveC1P2_3_*': 'MoveC1P2_3_*_<_-',
    'MoveC1P2_1_*': 'FinalCMP1_1_*_-_<',
    'MoveC1P2_0_*': 'FinalCMP1_0_*_-_<',

    'FinalCMP1_1_1': 'FinalCMP1_1_1_<_<',
    'FinalCMP1_0_0': 'FinalCMP1_0_0_<_<',

    'FinalCMP1_2_2': 'FinalCMP2_2_2_<_<',
    'FinalCMP1_3_3': 'FinalCMP2_3_3_<_<',

    'FinalCMP2_2_2': 'FinalCMP2_2_2_<_<',
    'FinalCMP2_3_3': 'FinalCMP2_3_3_<_<',
    'FinalCMP2_0_*': 'FinalCMP2_0_*_-_-',
    'FinalCMP2_1_*': 'FinalCMP2_1_*_-_-',
}
window.addEventListener('DOMContentLoaded', () => {
    window.createTuringMachine("121r2r", 2, "10011233221100122332", deltamap)
    window.createTuringMachine("121r2r", 2, "0122310322", deltamap)
})