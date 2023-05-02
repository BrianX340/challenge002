export default function ErrorMessage({message}) {
    return (
        <>
            <p style={{ height: 10 }} className="help is-danger has-text-centered">{message ? message : ''}</p>
        </>
    )
}