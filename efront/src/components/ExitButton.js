import Link from 'next/link'

export default function ExitButton({setAppData}) {
    const deleteToken = () => {
        localStorage.removeItem('token')
        return setAppData({
            login: false,
            user:{}
        })
    }
    return (
        <Link href='/'>
            <button onClick={deleteToken} className="button ml-3">Salir</button>
        </Link>
    )
}