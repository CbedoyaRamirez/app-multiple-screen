import Swal from 'sweetalert2'

import './menu.css';

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
                    setGlobalState(login);
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
            <li className="item" onClick={openModalSettings}>Donaciones</li>
        </ul >
    )
}

export default Menu;