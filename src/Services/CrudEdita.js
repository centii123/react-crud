export function CrudEditar(id, nombre ,lista) {
    
    let listas=lista
    let ids=id

    for (let i = 0; i < listas.length; i++) {
        if(listas[i].id==ids){
            listas[i].nombre=nombre
        }
        
    }

    let newlista=[...listas]

    return newlista
}

