const opt = {
    base:{
        demand: true,
        alias: 'b'
    },
    limit:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('list', 'List in console the multiplication table', opt)
                .command('create', 'Create a file with the multiplication table', opt)
                .help()
                .argv;

module.exports = {
    argv
}