import React, { useState } from 'react'
import InputText from "../form/InputText"
import TextArea from "../form/TextArea"
import InputNumber from "../form/InputNumber"
import InputImage from '../form/InputImage'
import { createProduct } from '../../services/ApiServices'

export default function CreateProductModal(props) {
    const [name, setName] = useState('')
    const [barcode, setBarcode] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageCharged, setImageCharged] = useState(null);
    const [errorMessage, setShowErrorMessage] = useState('')

    const processCreate = async () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('barcode', barcode);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', imageCharged);

        let created = await createProduct(formData);
        if(created.status === 'success'){
            props.setShowOkMessage('Producto Creado!')
            props.reload()
            return props.setShow(false)
        }
        setShowErrorMessage(created.message)
    }

    return (
        <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Crear Producto</p>
                        <button
                            onClick={() => props.setShow(false)}
                            className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <InputImage image={imageCharged} setImage={setImageCharged} />
                        <div className='is-flex is-justify-content-space-between'>
                            <InputText text={'Nombre'} placeholder={'Nombre'} setValue={setName} />
                            <InputNumber text={'Precio'} setValue={setPrice} />
                        </div>
                        <InputText text={'Barcode / Id'} placeholder={'Barcode / Id'} setValue={setBarcode} />
                        <TextArea text={'Descripcion'} placeholder={'Descripcion'} setValue={setDescription} />
                        <p style={{height:10}} className="help is-danger has-text-centered">{errorMessage ? errorMessage : ''}</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button
                            onClick={processCreate}
                            className="button is-success">Crear</button>
                        <button
                            onClick={() => props.setShow(false)}
                            className="button">Cancelar</button>
                    </footer>
                </div>
            </div>
        </>
    )
}