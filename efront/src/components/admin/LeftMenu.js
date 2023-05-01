import React, { useState } from 'react'
import CreateProductModal from "./CreateProductModal"

export default function LeftMenu({reload}) {
    const [showCreate, setShowCreate] = useState(false)
    const [showOkMessage, setShowOkMessage] = useState('')

    return (
        <>
            <aside className="menu" style={{ position: 'fixed', borderRight: '1px solid black', height: '100%' }}>
                <p className="menu-label mt-6">
                    Administrar
                </p>
                <ul className="menu-list">
                    <li><a onClick={() => { setShowCreate(!showCreate) }}>Crear Producto</a></li>
                </ul>
            </aside>
            {
                showCreate
                    ?
                    <CreateProductModal reload={reload} setShowOkMessage={setShowOkMessage} show={showCreate} setShow={setShowCreate} />
                    :
                    null
            }
            {
                showOkMessage
                    ?
                    <>
                    <div
                        className='is-flex is-align-items-center is-justify-content-center'
                        style={{position:'absolute', width:'100vw', height:'100vh', top:0, left:0, zIndex:2, backgroundColor:'#0000008c'}}>
                    <div
                        className="is-flex is-align-items-center is-justify-content-center notification is-primary" style={{width:'300px', height:'100px'}}>
                            <button
                                onClick={()=>setShowOkMessage(false)}
                                className="delete"></button>
                            {showOkMessage}
                        </div>
                    </div>
                    </>
                    :
                    <></>
            }
        </>
    )
}