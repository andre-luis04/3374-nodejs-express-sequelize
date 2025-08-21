const { where } = require('sequelize');
const dataSource = require('../models');

class Services {
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async getAllRegistry(){
        return dataSource[this.model].findAll();
    }

    async getOneRegistry(id){
        const getData = await dataSource[this.model].findOne({where: {id: id}});
        if (getData[0] === 0){
            return false;
        }
        return getData;
    }

    async updateRegistry(dadosAtualizados, id){
        const listadeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listadeRegistroAtualizado[0] === 0){
            return false;
        }
        return true;
    }

}

//REGRAS DE NEGOCIO EM GERAL

module.exports = Services;