const { createFile, list } = require('./multiply');
const { argv } = require('./config/yargs');
const colors = require('colors');


let command = argv._[0];
switch (command) {
    case 'list':
        list(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`The file '${colors.green(file)}' has been created`))
            .catch(e => colors.red(console.log(e)))

        break;

    default:
        console.log('The command does not exists'.red);
        break;
}


