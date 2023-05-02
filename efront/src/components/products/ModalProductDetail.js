import React, { useState } from 'react'
import Modal from '../Modal'
import Header from '../modal/Header'
import Body from '../modal/Body'
import DuoField from '../modal/body/DuoField'
import ErrorMessage from '../modal/body/ErrorMessage'
import InputText from "../form/InputText"
import TextArea from "../form/TextArea"
import InputNumber from "../form/InputNumber"
import InputImage from '../form/InputImage'

export default function ModalProductDetail({product, setShow}){
    return (
        <>
            <Modal>
                <Header setShowModal={setShow}>
                    Detalle de producto
                </Header>
                <Body>
                    <InputImage enableLoad={false} image={product.imgPath}/>
                    <DuoField>
                        <InputText text={'Nombre'} placeholder={'Nombre'} defaultValue={product.name} />
                        <InputNumber text={'Precio'} defaultValue={product.price} />
                    </DuoField>
                    <InputText text={'Barcode / Id'} defaultValue={product.barcode} placeholder={'Barcode / Id'} />
                    <TextArea text={'Descripcion'} defaultValue={product.description} placeholder={'Descripcion'} />
                </Body>
            </Modal>
        </>
    )
}