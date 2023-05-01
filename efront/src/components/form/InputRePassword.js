export default function InputRePassword(props) {
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <>
            <div className="field">
                <label className="label">Confirmar Password</label>
                <p className="control has-icons-left">
                    <input
                        style={{ borderColor: props.valid === '' ? '' : props.valid ? 'green' : 'red' }}
                        onChange={handleChange}
                        className="input"
                        type="password"
                        placeholder="Password"
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
        </>
    )
}