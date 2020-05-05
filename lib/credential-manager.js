const Configstore = require('configstore')
const inquirer = require('inquirer')
const keytar = require('keytar')

class CredentialManager {
  constructor(name) {
    this.conf = new Configstore(name)
    this.service = name
  }
  getConfig() {
    // get config
  }
  clearKeyAndSecret() {
    this.conf.delete('apiKey')
  }
  storeConfig(config) {
    this.conf.set('auth-server-url', config[0]);
    this.conf.set('confidential-port', config[1]);
    this.conf.set('realm', config[2]);
    this.conf.set('ssl-required', config[3]);
    this.conf.set('verify-token-audience', config[4]);
    this.conf.set('confidential-portuse-resource-role-mappings', config[5]);
    this.conf.set('resource', config[6]);
    this.conf.set('public-client', config[7]);
  }
}

module.exports = CredentialManager
