import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import InputEmail from '@/components/form/InputEmail';
import InputPassword from '@/components/form/InputPassword';
import AuthService from '../services/AuthService';

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setError] = useState('')
    const { push } = useRouter();

    const loginProcess = async () => {
        try{
            if(!email){
                return setError('Debe ingresar un email.')
            }
            if(!password){
                return setError('Debe ingresar una contrasena.')
            }
            let res = await AuthService.login({email,password})
            if(res.status!=='success'){
                console.log(res.message);
                return setError(res.message)
            }
            props.setAppData({
                loged: true,
                user: res.user
            })
            switch (res.user.role?.type) {
                case 'user':
                    return push('/')                    
                case 'admin': 
                    return push('/admin')                    
                default:
                    break;
            }
        }
        catch(e){
            console.error(e)
        }
    }

    return (
        <>
            <section className="is-flex is-justify-content-center is-align-items-center" style={{ width: '100vw', height: '80vh' }}>
                <div style={{ width: '300px' }}>
                    <InputEmail setValue={setEmail} />

                    <InputPassword setValue={setPassword} />
                    <p style={{height:18}} className="help is-danger has-text-centered mb-5">{errorMessage ? errorMessage : ''}</p>
                    <div className="field">
                        <p className="control is-flex is-justify-content-center">
                            <button onClick={loginProcess} className="button is-success">
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}