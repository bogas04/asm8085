# asm8085

A two-pass assembler written in NodeJS for 8085
It's a school project.
Feel free to use `instructionSet.js` for any purpose!
__NOTE:__ This project is still in development.

# Usage
```bash
# To get plain instructions in sequence of code
node cli fileName
# To get addresses for each instruction
node cli fileName true
```

I plan to publish this on npm once it becomes something useful.

You can still use:

```bash
npm link
```
to use `asm8085` instead of `node cli`

# Test
```bash
npm test
```

# Todo
* [ ] Support for Directives like 
   - [x] # ORG 1234
   - [ ] # DB 45,35,34,53,55
* [x] Support for labels
* [x] Support for large portion of instruction set (pretty much everything)

I've tried to design the assembler in a modular way,
so one can build assembler for any architecture by just changing the `instructionSet.js`
as per the processor and maybe write some extra functions for advanced assembler directives.

License
==
MIT
