import { CrudBorrar } from "../../Services/CrudBorrar";
import { actualizarData } from "../../Context/Crudcontext";


export default function Mostrar(props) {
  let lista = props.lista;
  let data= actualizarData()
  return (
    <div className="animales">
      <h2>ANIMALES</h2>
      <ol className="infinito" id="animales">
        {lista.map((e) => {
            //return es obligatorio si no no imprime nada
          return (
            <div className="opcionAnimal" key={e.id}>
              <h4>
                <li>{e.nombre}</li>
              </h4>
              <div>
                <button className="borrar" onClick={()=>{
                  let newlist=CrudBorrar(e.id,lista)
                  console.log(newlist)
                  data.setListaAnimalesBase(newlist)
                }} >Borrar</button>
                <button className="editar" onClick={()=>{
                  let editPart=document.querySelector('#PEditar')
                  data.setEditarAnimal({
                    nombre:e.nombre,
                    id:e.id
                  })

                  editPart.classList.add('active')
                }}>Editar</button>
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
