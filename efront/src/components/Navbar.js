import Image from 'next/image'
import NavbarDropdown from './navbar/NavbarDropdown'
import NavbarItem from './navbar/NavbarItem'
import Link from 'next/link'
import ExitButton from './ExitButton'

export default function Navbar({appData, setAppData}) {

    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand" style={{ height: '100%' }}>
                    <a className="navbar-item" href="https://bulma.io">
                        <Image src="/img/logoNavbar.png" width={50} height={50} />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start is-flex is-justify-content-center" style={{ width: '90%' }}>
                        <NavbarItem text={'INICIO'} to={''} />
                    </div>

                    <div className="navbar-end" style={{ width: '10%' }}>
                        <div className="navbar-item">
                            {
                                appData.loged
                                    ?
                                    <>
                                        <ExitButton setAppData={setAppData}/>
                                    </>
                                    :
                                    <>
                                        <Link href='/login'>
                                            <button className="button">Ingresar</button>
                                        </Link>
                                        <Link href='/register'>
                                            <button className="button ml-3">Registrarse</button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}