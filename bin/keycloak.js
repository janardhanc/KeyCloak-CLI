#! /usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('generate', 'generate configuration related to keycloak and load config')
    .parse(process.argv)
