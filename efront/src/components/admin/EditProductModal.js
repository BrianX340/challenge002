import React, { useState } from 'react'
import InputText from "../form/InputText"
import TextArea from "../form/TextArea"
import InputNumber from "../form/InputNumber"
import InputImage from '../form/InputImage'
import { editProduct } from '../../services/ApiServices'

export default function EditProductModaljs(props) {
    const [name, setName] = useState(props.product.name)
    const [barcode, setBarcode] = useState(props.product.barcode)
    const [description, setDescription] = useState(props.product.description)
    const [price, setPrice] = useState(props.product.price)
    const [imageCharged, setImageCharged] = useState(props.product.imgPath);
    const [errorMessage, setShowErrorMessage] = useState('')

    const processSave = async () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('barcode', barcode);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', imageCharged);

        let modified = await editProduct(formData, props.product._id);
        if(modified.status === 'success'){
            props.setShowOkMessage('Producto modificado!')
            props.reload()
            return props.setShow(false)
        }
        setShowErrorMessage(modified.message)
    }

    return (
        <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modificar Producto</p>
                        <button
                            onClick={() => props.setShow(false)}
                            className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <InputImage image={imageCharged} setImage={setImageCharged} />
                        <div className='is-flex is-justify-content-space-between'>
                            <InputText text={'Nombre'} placeholder={'Nombre'} defaultValue={name} setValue={setName} />
                            <InputNumber text={'Precio'} defaultValue={price} setValue={setPrice} />
                        </div>
                        <InputText text={'Barcode / Id'} defaultValue={barcode} placeholder={'Barcode / Id'} setValue={setBarcode} />
                        <TextArea text={'Descripcion' } defaultValue={description} placeholder={'Descripcion'} setValue={setDescription} />
                        <p style={{height:10}} className="help is-danger has-text-centered">{errorMessage ? errorMessage : ''}</p>
                    </section>
                    <footer className="modal-card-foot">
                        <button
                            onClick={processSave}
                            className="button is-success">Guardar cambios</button>
                        <button
                            onClick={() => props.setShow(false)}
                            className="button">Cancelar</button>
                    </footer>
                </div>
            </div>
        </>
    )
}