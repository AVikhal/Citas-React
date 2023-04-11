import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})

  //Almacenando en el LocalStorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS)

    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  // Eliminando pacientes

  const eliminarPaciente = (id) => {
    const nuevosPacientes = pacientes.filter(eachPaciente => eachPaciente.id !== id)
    setPacientes(nuevosPacientes)
  }
  

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
      
    </div>
  )
}

export default App
