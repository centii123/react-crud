import { NewAnimal } from "./interfaces/Animal";

export function CrudAgregar(lista,nombre) {
    let listaAnimales=lista 
    let listaAnimalesTotal=listaAnimales.length - 1
    let idGenerate=0

    if(listaAnimales[0]){
        idGenerate= listaAnimales[listaAnimalesTotal].id + 1
    }else{
        idGenerate=0
    }

    let nuevoAnimal=NewAnimal(nombre,idGenerate)
    let listanueva= [...listaAnimales,nuevoAnimal] //no usar el push usar esto
    return listanueva
}

