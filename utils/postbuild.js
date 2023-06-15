import {series} from 'async';
const {exec} = require('child_process');

series([
    () => exec('npm run not-found-patch'),
    () => exec('npm run prerender'),
]); 
