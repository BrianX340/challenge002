export default function InputPassword(props) {
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <>
            <div className="field">
                <label className="label">Password</label>
                <p className="control has-icons-left">
                    <input
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