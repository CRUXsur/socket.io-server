const {v4: uuidV4} = require ('uuid'); //lo importo , ver documentacion



class Band{
    constructor(name = 'no-name'){
        this.id = uuidV4(); //identificador unico
        this.name = name;
        this.votes = 0; 
    }
}


module.exports = Band; //exportacion directa 