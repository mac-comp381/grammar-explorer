'use strict';
(() => {

let g = new Grammar({
  name: "Toy",
  docLinks: [
  ],
  startSymbols: [
    'Expression'
  ]
});

addGrammar(g);

g.productions = {
  Identifier: [
     [g.textInput("identifier", "[A-Za-z_][A-Za-z0-9_]+")]
  ],

  IntegerLiteral:       [[g.textInput("integer")]],
  FloatingPointLiteral: [[g.textInput("floating")]],
  BooleanLiteral:       [[g.textInput("boolean")]],
  CharacterLiteral:     [[g.textInput("character")]],
  StringLiteral:        [[g.textInput("string")]],
  NullLiteral:          [[g.literal("null")]],

  Literal: [
     ['IntegerLiteral'],
     ['FloatingPointLiteral'],
     ['BooleanLiteral'],
     ['CharacterLiteral'],
     ['StringLiteral'],
     ['NullLiteral']
  ],

  Expression: [
     ['Literal'],
     ['Identifier'],
     ['Expression', g.literal('+'), 'Expression'],
     ['Expression', g.literal('-'), 'Expression'],
     ['Expression', g.literal('*'), 'Expression'],
     ['Expression', g.literal('/'), 'Expression'],
     ['Expression', g.literal('%'), 'Expression'],
     ['Expression', g.literal('||'), 'Expression'],
     ['Expression', g.literal('&&'), 'Expression'],
     ['Expression', g.literal('=='), 'Expression'],
     ['Expression', g.literal('!='), 'Expression'],
     ['Expression', g.literal('&lt;'), 'Expression'],
     ['Expression', g.literal('&gt;'), 'Expression'],
     ['Expression', g.literal('&lt;='), 'Expression'],
     ['Expression', g.literal('&gt;='), 'Expression'],
  ],
};

})();
