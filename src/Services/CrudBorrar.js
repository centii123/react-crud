export function CrudBorrar(id,lista) {
    let listar=lista
    let ids=id 
    for (let i = 0; i < listar.length; i++) {
        if(listar[i].id==ids){
            listar.splice(i,1)
        }
        
    }
    let newlist=[...listar]
    return newlist
}


