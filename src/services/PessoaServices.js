const Pessoa = require('../models/Pessoa.js');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor(){
        super('Pessoa');
    }
}

module.exports = PessoaServices;