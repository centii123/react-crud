import Editar from "./Components/editar"
import Main from "./Components/main"
import Nav from "./Components/nav"
import CrudContext from "../Context/Crudcontext"

export default function Crud() {
  return (
    <CrudContext>
      <Nav/>
      <Editar/>
      <Main/>
    </CrudContext>
  )
}
