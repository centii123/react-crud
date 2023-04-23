import { useEffect, useState } from "react"
import { actualizarData } from "../../Context/Crudcontext"
import { CrudEditar } from "../../Services/CrudEdita"

export default function Editar() {
    const editar = actualizarData(); // asumiendo que actualizarData() está definido
    let texto=editar.EditarAnimal.nombre
    let [newAnimal, setNewAnimal] = useState('');
    
    useEffect(()=>{
        setNewAnimal(texto)
    },[texto])

    return (
        <div className="PEditar" id="PEditar">
            <div className="formulario">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const newLista = CrudEditar(editar.EditarAnimal.id, newAnimal, editar.ListaAnimalesBase);
                    editar.setListaAnimalesBase(newLista);
                    const editPart = document.querySelector('#PEditar');
                    editPart.classList.remove('active');
                }}>
                    <label htmlFor="animalEdit"><h3>Animal</h3></label>
                    <input type="text" id="animalEdit" value={newAnimal} onChange={(e) => {
                        const newAnimalValue = e.target.value;
                        setNewAnimal(newAnimalValue)
                    }}/>
                    <button type="submit"><h4>Editar</h4></button>
                </form>
                <button id="regresar" onClick={() => {
                    const editPart = document.querySelector('#PEditar');
                    editPart.classList.remove('active');
                    setNewAnimal(texto)
                }}>Regresar</button>
            </div>
        </div>
    );
  }