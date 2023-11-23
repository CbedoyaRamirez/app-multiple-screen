import Swal from 'sweetalert2'

import './menu.css';
import LogoMenu from '../assets/LogoMenu.jpg';

function Menu() {
    function openModalSettings() {
        Swal.fire({
            title: "Realizar Donación",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Agregar",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
                try {
                    console.log(login);
                } catch (error) {
                    console.log(error);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result);
            }
        });
    }

    return (
        <ul className="lista">
            <img className="item LogoMenu" src={LogoMenu} />
            <li className="item" onClick={openModalSettings}>Buenas tardes</li>
            <li className="item" onClick={openModalSettings}>Canales</li>
            <li className="item" onClick={openModalSettings}>Sobre la pagina</li>
        </ul >
    )
}

export default Menu;