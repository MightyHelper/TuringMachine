let deltamap={
    'Init_a':'SearchB_*_>',
    'SearchB_a':'SearchB_a_>',
    'SearchB_*':'SearchB_*_>',
    'SearchB_b':'SearchC_*_>',
    'SearchC_b':'SearchC_b_>',
    'SearchC_*':'SearchC_*_>',
    'SearchC_c':'SearchD_*_>',
    'SearchD_c':'SearchD_c_>',
    'SearchD_*':'SearchD_*_>',
    'SearchD_d':'Return_*_<',
    'Return_c':'Return_c_<',
    'Return_a':'Return_a_<',
    'Return_b':'Return_b_<',
    'Return_*':'Return_*_<',
    'Return_#':'SearchA_#_>',
    'SearchA_*':'SearchA_*_>',
    'SearchA_a':'SearchB_*_>',
    'SearchA_#':'SearchA_#_-',
}
window.addEventListener('DOMContentLoaded', ()=>{
    window.createTuringMachine("anbncndn", 1, "aaaabbbbccccdddd", deltamap)
    window.createTuringMachine("anbncndn2", 1, "aaaabbbbcccdddd", deltamap)
})