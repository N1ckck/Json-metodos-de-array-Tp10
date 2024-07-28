const datosBici=require("./datosBici.js")

const dhBici={
    bicicletas:datosBici.leerJSON(),
    buscarBici:function(id){
    const biciEnc= this.bicicletas.filter((bici)=>{
        return bici.id===id
    })
    if(biciEnc.length===0){
        return null
    }
    else{return biciEnc};
},
venderBici:function(id){
        const biciEnc=this.buscarBici(id)
        if(biciEnc===null){
            return "Bici no encontrada"
        }
        biciEnc[0].Vendida=true;
        return biciEnc[0]   
},
biciParaLaVenta:function(){
    const biciNoVend=this.bicicletas.filter((bici)=>{
        return !bici.Vendida
    })
    return biciNoVend
},
totalDeVentas:function(){
    const total=this.bicicletas.reduce((acum,bici)=>{
    if(bici.Vendida){
        acum +=bici.Precio
    }
    return acum
},0)
return total
}
}


//console.log(dhBici.buscarBici(1))
//console.log(dhBici.venderBici(2))
//console.log(dhBici.biciParaLaVenta())
//console.log(dhBici.totalDelVentas())