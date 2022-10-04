let deltamap={
    'Init_0':'Cfg1_0_<',
    'Init_1':'Cfg1_1_<',
    'Init_#':'Init_#_-', // Accept lambda
    'Cfg1_#':'Cfg2_a_>',
    'Cfg2_1':'Cfg2_1_>','Cfg2_0':'Cfg2_0_>',
    'Cfg2_#':'<Toa_b_<',

    '<Toa_1':'<Toa_1_<','<Toa_0':'<Toa_0_<','<Toa_b':'<Toa_b_<','<Toa_*':'<Toa_*_<',
    '<Toa_a':'FetchCharToMove<_a_>',
    
    'FetchCharToMove<_*':'FetchCharToMove<_*_>',
    'FetchCharToMove<_1':'MoveChar<1_*_<','FetchCharToMove<_0':'MoveChar<0_*_<',
    'FetchCharToMove<_b':'CheckChar<_b_<', // End copy
    
    'MoveChar<0_*':'MoveChar<0_*_<',
    'MoveChar<0_a':'Write<0_a_<',
    'Write<0_0':'Write<0_0_<','Write<0_1':'Write<0_1_<',
    'Write<0_*':'>Tob_0_>',

    'MoveChar<1_*':'MoveChar<1_*_<',
    'MoveChar<1_a':'Write<1_a_<',
    'Write<1_0':'Write<1_0_<','Write<1_1':'Write<1_1_<',
    'Write<1_*':'>Tob_1_>',

    '>Tob_0':'>Tob_0_>','>Tob_1':'>Tob_1_>','>Tob_a':'>Tob_a_>','>Tob_*':'>Tob_*_>',
    '>Tob_b':'FetchCharToMove>_b_<',


    'FetchCharToMove>_*':'FetchCharToMove>_*_<',
    'FetchCharToMove>_1':'MoveChar>1_*_>','FetchCharToMove>_0':'MoveChar>0_*_>',

    'MoveChar>0_*':'MoveChar>0_*_>',
    'MoveChar>0_b':'Write>0_b_>',
    'Write>0_0':'Write>0_0_>','Write>0_1':'Write>0_1_>',
    'Write>0_*':'<Toa_0_<',

    'MoveChar>1_*':'MoveChar>1_*_>',
    'MoveChar>1_b':'Write>1_b_>',
    'Write>1_0':'Write>1_0_>','Write>1_1':'Write>1_1_>',
    'Write>1_*':'<Toa_1_<',

    

    'CheckChar<_*':'CheckChar<_*_<',
    'CheckChar<_b':'CheckChar<_b_<',

    'CheckChar<_a':'GetCmpChar<_a_<',
    'GetCmpChar<_0':'GetCmpChar<_0_<','GetCmpChar<_1':'GetCmpChar<_1_<',
    'GetCmpChar<_*':'UseCmpChar_*_>',
    'UseCmpChar_a':'UseCmpChar_a_-', // end
    

    'UseCmpChar_1':'EnsureCmpChar1_*_>','UseCmpChar_0':'EnsureCmpChar0_*_>',
    'EnsureCmpChar1_1':'EnsureCmpChar1_1_>','EnsureCmpChar1_0':'EnsureCmpChar1_0_>','EnsureCmpChar1_a':'EnsureCmpChar1_a_>','EnsureCmpChar1_*':'EnsureCmpChar1_*_>',
    'EnsureCmpChar1_b':'CheckCmpChar1_b_>',
    'CheckCmpChar1_*':'CheckCmpChar1_*_>',
    'CheckCmpChar1_1':'CheckChar<_*_<',

    'EnsureCmpChar0_1':'EnsureCmpChar0_1_>','EnsureCmpChar0_0':'EnsureCmpChar0_0_>','EnsureCmpChar0_a':'EnsureCmpChar0_a_>','EnsureCmpChar0_*':'EnsureCmpChar0_*_>',
    'EnsureCmpChar0_b':'CheckCmpChar0_b_>',
    'CheckCmpChar0_*':'CheckCmpChar0_*_>',
    'CheckCmpChar0_0':'CheckChar<_*_<',


    // #001001#
    // a001001b
    // a*01001b
    // 0a*01001b
    // 
    // 0#*0100*#1
    
    
    
}
window.addEventListener('DOMContentLoaded', ()=>{
    window.createTuringMachine("ww", 1, "10011001", deltamap)
    window.createTuringMachine("w1", 1, "10001000", deltamap)
    window.createTuringMachine("ww2", 1, "01100110", deltamap)
    window.createTuringMachine("ww3", 1, "0110010", deltamap)
    window.createTuringMachine("ww4", 1, "101010111000101010111000", deltamap)
})
