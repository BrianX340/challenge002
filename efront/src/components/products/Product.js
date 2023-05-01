import React, { useState } from 'react'
import { deleteProduct } from '../../services/ApiServices'
import EditProductModal from '../admin/EditProductModal'
import {API_URL} from '../../config'

export default function Product({ product, isAdmin, reload }) {
    const [showOptions, setShowOptions] = useState(false)
    const [showDeletoConfirm, setShowDeletoConfirm] = useState(false)
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [showOkMessage, setShowOkMessage] = useState('')

    const deleteProductProcess = async () => {
        await deleteProduct(product._id);
        return reload()
    }

    return (
        <>
            <div className="product" style={{ position: 'relative' }}>
                {
                    showOkMessage
                        ?
                        <>
                            <div
                                className='is-flex is-align-items-center is-justify-content-center'
                                style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 2, backgroundColor: '#0000008c' }}>
                                <div
                                    className="is-flex is-align-items-center is-justify-content-center notification is-primary" style={{ width: '300px', height: '100px' }}>
                                    <button
                                        onClick={() => setShowOkMessage(false)}
                                        className="delete"></button>
                                    {showOkMessage}
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }
                {
                    showDeletoConfirm
                        ?
                        <>
                            <div
                                className='is-flex is-align-items-center is-justify-content-center'
                                style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: 4, backgroundColor: '#0000008c' }}>
                                <div
                                    className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center notification is-primary" style={{ width: '500px', height: '200px' }}>
                                    <button
                                        onClick={() => setShowDeletoConfirm(false)}
                                        className="delete"></button>
                                    <span style={{ fontSize: 22, fontWeight: 'bold' }}>Desea eliminar este producto?</span>
                                    <div className='mt-6'>
                                        <button
                                            onClick={deleteProductProcess}
                                            style={{ width: '80px' }} className="button mr-3">SI</button>
                                        <button
                                            onClick={() => setShowDeletoConfirm(false)}
                                            style={{ width: '80px' }} className="button">NO</button>
                                    </div>

                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                }
                {
                    showEditProduct
                        ?
                        <EditProductModal reload={reload} setShowOkMessage={setShowOkMessage} setShow={setShowEditProduct} product={product} />
                        :
                        <>
                        </>
                }
                {
                    isAdmin
                        ?
                        <div
                            onClick={() => { setShowOptions(true) }}
                            style={{ position: 'absolute', top: 0, left: 10, color: 'green', cursor: 'pointer', zIndex: 3 }}>
                            <i style={{ fontSize: 45 }} className="fas fa-ellipsis-h"></i>
                        </div>
                        :
                        null
                }
                {
                    showOptions
                        ?
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 3,
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#000000b5',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                color: 'white',
                                borderRadius: 15
                            }}>
                            <i
                                onClick={() => { 
                                    setShowEditProduct(true)
                                    setShowOptions(false)
                                }}
                                style={{ fontSize: 45, cursor: 'pointer' }}
                                className="fas fa-edit"></i>
                            <i
                                onClick={() => { setShowDeletoConfirm(true) }}
                                style={{ fontSize: 45, cursor: 'pointer' }}
                                className="fas fa-trash"></i>
                        </div>
                        :
                        null
                }
                <div
                    style={{
                        height: '50%',
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15
                    }}>
                    <div
                        style={{
                            height: '90%',
                            width: '90%',
                            backgroundImage: `url(${API_URL}/public/img/products/${product.imgPath})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>
                    <div style={{ position: 'absolute', top: '5px', right: '5px', fontSize: 25 }}>
                        ${product.price}
                    </div>
                </div>
                <div
                    className="is-flex is-align-items-center pl-3 has-text-weight-bold"
                    style={{ height: '15%', width: '100%', fontSize: '1.2rem' }}>
                    {product.name}
                </div>
                <div
                    className="p-4 has-text-black has-text-justified"
                    style={{
                        height: '35%',
                        width: '100%',
                        fontSize: '.8rem',
                        overflowWrap: 'break-word',
                        borderTop: '1px #80808040 solid'
                    }}>
                    {product.description}
                    {
                        //73 chars
                    }
                </div>
            </div>
        </>
    )
}