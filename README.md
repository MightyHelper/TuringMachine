# TuringMachine
A simple Turing machine emulator in js

This emulator works with single-tape and multi-tape machines.

Only the first tape has content at the start of the execution.

`*` is treated as empty.\
`#` always surrounds the initial input.

The Turing machine rejects if it reaches a status and tape combination not specified in its instructions (deltamap)

The Turing machine accepts if it didn't change state and hasn't moved any tape since the last cycle.

## Using an existing machine
To view existing machines, see `/machines`, each `.mjs` file represents a Turing machine

To load a Turing machine add this to the `head` element in `index.html` and then view main.html through a browser.

```html
<script type=module src="machines/YOUR_MACHINE_HERE.mjs"></script>
```

> **HINT**: (You may start a simple http server with `python3 -m http.server <PORT>`)

For each Turing machine, there may be many preset input tapes.

Each tape can only be run once. You must refresh the page to run it again.

### Controls

Single **left-click** the "Step" button to advance a _single step_.

Single **right-click** the "Step" button to advance until _accept or reject_.

Single **middle-click** the "Step" button to advance until the _next state change_.

You may view the current state of the machine to the right of the "Step" button.

## Creating a new machine

To create a new machine, create a new `.mjs` file inside `/machines`.

This file must contain the deltamap which defines the transition table of the machine and the calls to `createTuringMachine` (from `main.js` that creates the UI elements for the Turing machine with a preset input tape).

A very basic example can be seen in `sum.mjs` which adds two numbers in unary (1=0, 11 = 1, 111 = 2, ...)

A basic multi-tape example can be seen in `anbambanm.mjs` which verifies `length(section a) * length(section b) = length(section c)` where each section is a run of only `a`s and is delimited by `b`s

### The deltamap
The deltamap is just a javascript object in which the keys and values hold tuples represented as strings, delimited by underscores.

The keys contain the state name, and then one entry for each tape containing the values that are required to apply the rule.

The values contain the state to transition to, and then an element for each tape representing the character to write, and an element for each tape indicating how to move `>` (Move right) `<` (Move left) `-` (Halt)

### Single-tape Example

```js
{
  ...
  'Init_1':'ab_0_<'
  ...
}
```
This rule will activate if the current state is `"Init"` and _tape 0_ has a `1`.\
It will transition to state `ab`, write a `0` into _tape 0_ and move it left

### Multi-tape Example
```js
{
 ...
 's2_a_*_a': 's2_a_*_a_>_-_<',
 ...
}
```

Will activate if the current state is `"s2"` and _tape 0_ reads `a`, _tape 1_ reads `*`, _tape 2_ reads `a`.\
It will transition to state `"s2"`\
It will write `a` to _tape 0_, `*` to _tape 1_, `a` to _tape 2_.\
Move _tape 0_ right, Not move _tape 1_, Move _tape 2_ left.
