import React, { useState } from 'react'
import {API_URL} from '../../config'
export default function InputImage(props) {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        props.setImage(file);
    };



    return (
        <>
            <div class="card-image">
                <figure class="image is-165x165 m-auto">
                    {
                        typeof props.image === "string"
                            ?
                            <>
                              <img src={`${API_URL}/public/img/products/${props.image}`} />
                            </>
                            :
                            <>
                                <img src={props.image ? URL.createObjectURL(props.image) : '/img/128x128.png'} />
                            </>
                    }

                </figure>
                <div className='m-auto is-flex is-align-items-center pt-3 is-justify-content-center'>
                    {
                        props.enableLoad
                        ?
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} />        
                        :
                        <></>                
                    }
                </div>
            </div>
        </>
    )
}