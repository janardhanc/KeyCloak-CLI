const inquirer = require('inquirer')
const CredentialManager = require('../lib/credential-manager')
const util = require('../lib/util')


const generate = {
  async all(name) {
    let creds = new CredentialManager(name)
    let answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'auth-server-url',
        message: 'Authentication server url:',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'confidential-port',
        message: 'Confidential port:',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'public-client',
        message: 'Public client(true/false):',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'realm',
        message: 'realm:',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'resource',
        message: 'Resource:',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'ssl-required',
        message: 'ssl-required(external/internal):',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'use-resource-role-mappings',
        message: 'use-resource-role-mappings(true/false):',
        validate: util.notEmpty
      },
      {
        type: 'input',
        name: 'verify-token-audience',
        message: 'Verify-token-audience(true/false):',
        validate: util.notEmpty
      }
    ])
    await creds.storeConfig(
      [answers["auth-server-url"],
      answers["confidential-port"],
      answers.realm,
      answers["ssl-required"],
      answers["verify-token-audience"],
      answers["use-resource-role-mappings"],
      answers.resource,
      answers["public-client"]
      ]
    )
  }
}

module.exports = generate
