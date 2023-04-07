import { useState, useEffect } from "react"

const Formulario = ({setPacientes}) => {

  const [ nombre, setNombre] = useState("")
  const [ propietario, setPropietario ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ alta, setAlta ] = useState("")
  const [ sintomas, setSintomas ] = useState("")

  const [ error, setError ] = useState(false)
  
  const handleSubmitForm = (e) => {
      e.preventDefault()

      // Validacion de formulario
      if ([nombre, propietario, email, alta, sintomas].includes("")){
        setError(true)
        return;
      } 
        setError(false)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {""}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

          <form onSubmit={handleSubmitForm} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {error && (
              <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded">
                <p>Todos los campos deben estar completados</p>
              </div>
            )}
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                Nombre Mascota
              </label>
              <input id="mascota" type="text" value={nombre} onChange= {(e)=>{setNombre(e.target.value)}} placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
              </label>
              <input id="propietario" type="text" value={propietario} onChange= {(e)=>{setPropietario(e.target.value)}} placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email de Contacto
              </label>
              <input id="email" type="email" value={email} onChange= {(e)=>{setEmail(e.target.value)}} placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Alta
              </label>
              <input id="alta" type="date"  value={alta} onChange= {(e)=>{setAlta(e.target.value)}}className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                Sintomas
              </label>
              <textarea 
                id="sintomas"
                value={sintomas}
                onChange= {(e)=>{setSintomas(e.target.value)}}
                placeholder="Describe los sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              />
            </div>
            <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value="Agregar Paciente" 
            />
          </form>
    </div>
  )
}

export default Formulario