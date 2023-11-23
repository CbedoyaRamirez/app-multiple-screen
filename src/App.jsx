import { useEffect } from 'react';
import Screen from './screen/screen';
import Menu from './menu/menu';
import Swal from 'sweetalert2'


import './App.css'

function App() {
  useEffect(() => {
    Swal.fire({
      title: "!! Hola ¡¡, esto es importante",
      text: "Si te gusta la plataforma puedes donarnos un cafe para seguir generando mas valor a la pagina !!",
    });
  })

  return (
    <main className="contenedor">
      <Menu />
      <Screen />
    </main>
  )
}

export default App
