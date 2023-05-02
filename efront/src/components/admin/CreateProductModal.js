import React, { useState } from 'react'
import InputText from "../form/InputText"
import TextArea from "../form/TextArea"
import InputNumber from "../form/InputNumber"
import InputImage from '../form/InputImage'
import { createProduct } from '../../services/ApiServices'
import Modal from '../Modal'
import Header from '../modal/Header'
import Body from '../modal/Body'
import DuoField from '../modal/body/DuoField'
import ErrorMessage from '../modal/body/ErrorMessage'
import Footer from '../modal/Footer'

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
        if (created.status === 'success') {
            props.setShowOkMessage('Producto Creado!')
            props.reload()
            return props.setShow(false)
        }
        setShowErrorMessage(created.message)
    }

    return (
        <>
            <Modal setShowModal={props.setShow} title={'Crear producto'} errorMessage={errorMessage}>
                <Body>
                    <InputImage enableLoad={true}  image={imageCharged} setImage={setImageCharged} />
                    <DuoField>
                        <InputText text={'Nombre'} placeholder={'Nombre'} setValue={setName} />
                        <InputNumber text={'Precio'} setValue={setPrice} />
                    </DuoField>
                    <InputText text={'Barcode / Id'} placeholder={'Barcode / Id'} setValue={setBarcode} />
                    <TextArea text={'Descripcion'} placeholder={'Descripcion'} setValue={setDescription} />
                    <ErrorMessage message={errorMessage}/>
                </Body>
                <Footer>
                    <button
                        onClick={processCreate}
                        className="button is-success">Crear</button>
                    <button
                        onClick={() => props.setShow(false)}
                        className="button">Cancelar</button>
                </Footer>
            </Modal>
        </>
    )
}