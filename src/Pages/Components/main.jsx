import { useState } from "react";
import { actualizarData } from "../../Context/Crudcontext"; 
import { CrudAgregar } from "./../../Services/CrudAgregar"
import Mostrar from "./mostrar";

export default function Main() {
  let animalesList= actualizarData()
  let [animal, setAnimal]=useState('')
  
  return (
    <main>
      <form className="formulario" onSubmit={(e)=>{
        e.preventDefault()
        let newlist = CrudAgregar(animalesList.ListaAnimalesBase,animal)
        animalesList.setListaAnimalesBase(newlist)
        document.querySelector('#animales').value=""
      }}>
        <label htmlFor="animal">
          <h3>Digite un animal</h3>
        </label>
        <input type="text" id="animales" onChange={(e)=>{
          setAnimal(e.target.value)
        }}/>
        <button id="boton" type="submit">
          <h4>Agregar</h4>
        </button>
      </form>

      <Mostrar lista={animalesList.ListaAnimalesBase}/>
    </main>
  );
}
