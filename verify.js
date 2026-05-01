const solc = require('solc');
const fs = require('fs');
const src = fs.readFileSync('holon.sol', 'utf8');
const result = JSON.parse(solc.compile(src, 1));
const rt = result.contracts[':holon'].runtimeBytecode;
const target = fs.readFileSync('target_runtime.txt', 'utf8').trim();
const diffs = [...Array(Math.min(rt.length, target.length))].filter((_, i) => rt[i] !== target[i]).length;
console.log('Runtime length:', rt.length / 2, 'bytes');
console.log('Target length:', target.length / 2, 'bytes');
console.log('Byte diffs:', diffs);
if (diffs === 0 && rt.length === target.length) {
    console.log('✓ EXACT MATCH');
} else {
    console.log('✗ MISMATCH');
}
