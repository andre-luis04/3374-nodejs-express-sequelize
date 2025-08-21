class Controller {
    constructor (entidadeService){
        this.entidadeService = entidadeService;
    }
    async getAll(req, res){
        try{
            const listaDeRegistros = await this.entidadeService.getAllRegistry();
            return res.status(200).json(listaDeRegistros);
        }catch(err){

        }
    }

    async getOne(req, res){
        const { id } = req.params;
        try{
            const elementoId = await this.entidadeService.getOneRegistry(Number(id));
            if(!elementoId){
                return res.status(404).json({message: 'pessoa não encontrada'});
            }
            return res.status(200).json([elementoId]);
        }catch(err){

        }
    }

    async update(req, res){
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try{
            const wasUpdated = await this.entidadeService.updateRegistry(dadosAtualizados, Number(id));
            if(!wasUpdated){
                return res.status(400).json({ message: `registro não atualizado`});
            }
            return res.status(200).json({ message: `Atualizado com sucesso`});
        }catch(err){

        }
    }
}


module.exports = Controller