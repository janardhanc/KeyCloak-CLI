const program = require('commander')
const pkg = require('../package.json')
const generate = require('../commands/generate')

program
  .version(pkg.version)

program
  .command('all')
  .description('generate keycloak config and load configuration')
  .action(async () => {
    await generate.all(pkg.name)
  })


program
  .parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
