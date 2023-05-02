import React, { useState } from 'react'
import InputText from "../form/InputText"
import TextArea from "../form/TextArea"
import InputNumber from "../form/InputNumber"
import InputImage from '../form/InputImage'
import { editProduct } from '../../services/ApiServices'
import Modal from '../Modal'
import Header from '../modal/Header'
import Body from '../modal/Body'
import DuoField from '../modal/body/DuoField'
import ErrorMessage from '../modal/body/ErrorMessage'
import Footer from '../modal/Footer'
import ModalProduct from '../products/ModalProductDetail'

export default function EditProductModaljs(props) {
    const [errorMessage, setShowErrorMessage] = useState('')
    const [name, setName] = useState('')
    const [barcode, setBarcode] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageCharged, setImageCharged] = useState(props.product.imgPath);

    const processSave = async () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('barcode', barcode);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', imageCharged);

        let modified = await editProduct(formData, props.product._id);
        if (modified.status === 'success') {
            props.setShowOkMessage('Producto modificado!')
            props.reload()
            return props.setShow(false)
        }
        setShowErrorMessage(modified.message)
    }

    return (
        <>
            <Modal setShowModal={props.setShow} title={'Modificar producto'} errorMessage={errorMessage}>
                <Body>
                    <InputImage enableLoad={true} image={imageCharged} setImage={setImageCharged} />
                    <DuoField>
                        <InputText text={'Nombre'} placeholder={'Nombre'} defaultValue={name} setValue={setName} />
                        <InputNumber text={'Precio'} defaultValue={price} setValue={setPrice} />
                    </DuoField>
                    <InputText text={'Barcode / Id'} defaultValue={barcode} placeholder={'Barcode / Id'} setValue={setBarcode} />
                    <TextArea text={'Descripcion'} defaultValue={description} placeholder={'Descripcion'} setValue={setDescription} />
                    <ErrorMessage message={errorMessage} />
                </Body>
                <Footer>
                    <button
                        onClick={processSave}
                        className="button is-success">Guardar cambios</button>
                    <button
                        onClick={() => props.setShow(false)}
                        className="button">Cancelar</button>
                </Footer>
            </Modal>
        </>
    )
}