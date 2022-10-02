function Tape(elem){
    this.tape = []
    this.index = 0
    this.readTape = (index)=>{
        return this.tape[index] ?? "*"
    }
    this.writeTape = (index, value)=>{
        this.tape[index] = value;
    }
    this.initTape = (w)=>{
        this.tape = []
        this.tape[-1] = "#"
        let o = w.split("")
        for (let i=0; i<o.length; i++){
            this.tape[i]=o[i]
        }
        this.tape[o.length]="#"
    }
    this.read = ()=>this.readTape(this.index)
    this.write = value=>this.writeTape(this.index, value)
    this.render = ()=>{
        let elems = []
        let {width} = elem.getBoundingClientRect()
        let compWidth = Math.floor(width/40)
        for(let i=-compWidth; i<compWidth; i++){
            let o=this.index+i;
            let div = document.createElement('div');
            div.textContent = this.readTape(o)
            div.classList.add('tapeElement')
            div.classList.add(i == 0 ? 'mainTapeElement' : '-')
            div.classList.add(({[div.textContent]:'-','*':'tapeVoid','#':'tapeBoundry'}[div.textContent]))
            elems.push(div)
        }
        elem.replaceChildren(...elems)
    }
    this.move = direction => this.index+=({'>':1,'<':-1,'-':0})[direction]
    return this;
}
function TuringMachine(elem, w, deltamap){
    this.rootElem = elem
    this.tapes = [...this.rootElem.getElementsByClassName('tapeView')].map(tape=>new Tape(tape))
    this.stepButton = this.rootElem.getElementsByClassName('turingStep')[0]
    this.stateElem = this.rootElem.getElementsByClassName('turingState')[0]
    this.width=40
    this.state='Init'
    this.machineState = 'stopped'
    this.render = ()=>{
        this.stateElem.textContent = this.machineState + ' : ' + this.state;
        this.stateElem.classList.remove('running')
        this.stateElem.classList.remove('stopped')
        this.stateElem.classList.remove('rejected')
        this.stateElem.classList.remove('accepted')
        this.stateElem.classList.add(this.machineState)
        this.tapes.forEach(tape=>tape.render())
    }
    this.advanceState = ()=>{
        let key = `${this.state}_${this.tapes.map(tape=>tape.read()).join('_')}`
        let result = deltamap[key]
        if (result === undefined){
            this.machineState = 'rejected'
            console.warn('Rejected');
            return [false, false];
        }
        let [newState, ...actions] = result.split("_")
        let move = actions.splice(actions.length/2)
        let write = actions
        let changedState = this.state != newState
        this.state=newState
        for(let i=0; i<this.tapes.length; i++){
            this.tapes[i].write(write[i])
            this.tapes[i].move(move[i])
        }
        this.render()
        let evalResult = [changedState, !move.every(x=>x=='-')]
        if (!evalResult[0] && !evalResult[1]){
            console.log("Accepted")
            this.machineState = "accepted"
        }
        return evalResult
    }
    this.advanceUntilChange = ()=>{
        this.machineState = 'running'
        let [changedState, moved] = this.advanceState()
        if (!changedState && (changedState || moved)){
            setTimeout(this.advanceUntilChange.bind(this), 50)
        }else{
            if (this.machineState == 'running') this.machineState = 'stopped'
            this.render()
        }
    }
    this.advanceUntilEnd = ()=>{
        this.machineState = 'running'
        let [changedState, moved] = this.advanceState()
        if (changedState || moved){
            setTimeout(this.advanceUntilEnd.bind(this), 75)
        }else{
            if (this.machineState == 'running') this.machineState = 'stopped'
            this.render()
        }
    }
    this.stepButton.addEventListener('contextmenu', event=>{
        event.preventDefault(); return false;
    })
    this.stepButton.addEventListener('mousedown', event=>{
        if (this.machineState !== 'stopped') return;
        switch(event.button){
            case 0:
            this.advanceState()
            break;
            case 1:
            this.advanceUntilChange()
            break;
            case 2:
            this.advanceUntilEnd()
        }
        event.preventDefault()
        return false;
    })
    this.tapes[0].initTape(w)
    this.render();
    return this
}

window.ui=[];

window.createTuringMachine = (name, ntapes=1, w, deltamap)=>{
    let newMachine = document.createElement('div');
    newMachine.innerHTML = `
    <div class="turingInfo">
    <div class="turingName">Machine name: ${name}</div>
    <button class="turingStep">Step</button>
    <div class="turingTitle">State: <span class="turingState">Init</span></div>
    </div>
    ` + `<div class="tapeView"></div>`.repeat(ntapes)
    document.body.appendChild(newMachine)
    window.ui.push(new TuringMachine(newMachine, w, deltamap))
}