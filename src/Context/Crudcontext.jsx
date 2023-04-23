import { createContext, useState, useContext } from "react";
import { listaAnimales } from "../data/ListaAnimales";

const contexto=createContext()

export function actualizarData() {
    return useContext(contexto)
}

export default function CrudContext(params) {
    let [ListaAnimalesBase, setListaAnimalesBase] = useState(listaAnimales)

    let [EditarAnimal, setEditarAnimal] =useState({
        nombre:"",
        id:0,
    })
    return (
        <contexto.Provider value={{ListaAnimalesBase, setListaAnimalesBase,EditarAnimal, setEditarAnimal}}>
            {params.children}
        </contexto.Provider>
    )
}