const Fse = require('fs-extra');

try {
    console.log('\x1b[0m' + '\x1b[34m' + `copy ./dist to ./docs start` + '\x1b[0m');

    Fse.copySync('./dist', './docs');

    console.log();
    console.log('\x1b[0m' + '\x1b[32m' + `copy ./dist to ./docs done` + '\x1b[0m');
    console.log();
} catch (e) {
    console.log();
    console.log('\x1b[0m' + '\x1b[31m' + `${e instanceof Error ? e.message : e}` + '\x1b[0m');
    console.log();
}
