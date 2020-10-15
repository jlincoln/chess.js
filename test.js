console.log('BEGIN');
const { Chess } = require('./echess.js');
var chess = new Chess('rnbqkbnr/pp1ppppp/8/3e4/8/8/PP1PPPPP/RNBQKBNR w KQkq - 0 1');
console.log('ASCII');
chess.ascii();
chess.move({from: 'd5', to: 'd4'});
console.log('ASCII');
chess.ascii();
console.log('END');
