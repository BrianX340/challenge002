import DropdownItem from "./DropdownItem";


export default function NavbarDropdown(props) {
    return (
        <>
            <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                    SERVICIOS
                </div>

                <div className="navbar-dropdown" style={{ backgroundColor: 'black' }}>
                    <DropdownItem text={'ECCOMERCE'} to={'ecommerce'} />
                    <DropdownItem text={'IDENTIDAD CORPORATIVA'} to={'identidad'} />
                    <DropdownItem text={'DESARROLLO Y DISENO DE PAGINA WEB'} to={'desarrollo'} />
                    <DropdownItem text={'COMUNITY MANAGER'} to={'community'} />
                    <DropdownItem text={'CONTENIDO AUDIOVISUAL'} to={'contenido'} />
                    <DropdownItem text={'CAMPAÑAS PUBLICITARIAS'} to={'camp'} />
                    {
                        /*
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item">
                                            Report an issue
                                        </div>
                                    */
                    }
                </div>
            </div>
        </>
    )
}