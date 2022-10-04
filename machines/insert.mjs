// Lo que hacemos es Verificar tachando desde los extremos
let deltamap = {
    'Init_&': 'Init_&_-',
    'Init_0': '>0_#_>',
    'Init_1': '>1_#_>',

    '>0_0': '>0_0_>',
    '>0_1': '>1_0_>',
    '>0_&': '>_&_-',

    '>1_0': '>0_1_>',
    '>1_1': '>1_1_>',
    '>1_&': '>_&_-',

    // '>'


    '>_#': '<_#_<',
    '<_*': '<_*_<',
    '<_&': 'end_&_-', // Housekeeping end
    '<_1': '<<_*_<',
    '<<_1': '<<_1_<',
    '<<_&': 'Shift'
}
window.addEventListener('DOMContentLoaded', () => {
    window.createTuringMachine("insert", 1, "1011&aabbaaabbab&11111", deltamap)
})