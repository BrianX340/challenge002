import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import InputEmail from '@/components/form/InputEmail';
import InputPassword from '@/components/form/InputPassword';
import InputRePassword from '@/components/form/InputRePassword';
import InputText from '@/components/form/InputText';
import TermsCheck from '@/components/form/TermsCheck';
import AuthService from '../services/AuthService';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState('')
    const { push } = useRouter();

    const registerProcess = async () => {
        if (!terms){
            return setError('Debe aceptar terminos y condiciones')
        }
        if (password !== repassword){
            return setError('Ambas contrasenas deben coincider')
        }
        try{
            let res = await AuthService.register({name,email,password})
            if(res.status!=='success'){
                return setError(res.message)
            }
            return push('/login')
        }
        catch(e){
            console.error(e)
        }
    }

    return (
        <>
            <section className="is-flex is-justify-content-center is-align-items-center" style={{ width: '100vw', height: '80vh' }}>
                <div style={{ width: '300px' }}>
                    <InputText text={'Nombre'} placeholder={'Nombre'} value={name} setValue={setName}/>

                    <InputEmail setValue={setEmail} />

                    <InputPassword setValue={setPassword}/>

                    <InputRePassword valid={password !== '' ? password === repassword : ''} setValue={setRePassword}/>

                    <TermsCheck setValue={setTerms} isChecked={terms} />

                    <p style={{height:18}} className="help is-danger has-text-centered mb-5">{error ? error : ''}</p>


                    <div className="field is-grouped is-flex is-justify-content-center">
                        <div className="control">
                            <button onClick={registerProcess} className="button is-link">Registrarme</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}