const { countData } = require('./countMethod.js');
const { filterData } = require('./filterMethod.js');
const { data } = require('./data.js');

let arg = process.argv[2];
let parameter = '';

if (arg && arg.includes('--filter')) {
  parameter = 'filter';
} 
if (arg && arg.includes('--count')) {
  parameter = 'count';
} 

if (parameter === 'filter') {
  const filter = arg.split('=')[1];
  console.log(JSON.stringify(filterData(data, filter)));
}
else if ((parameter === 'count')) {
  console.log(JSON.stringify(countData(data)));
}
else {
  console.log('Use argument');
  console.log('$ node app.js --filter=ry');
  console.log('$ node app.js --count');
}
