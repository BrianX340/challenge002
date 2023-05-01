export default function InputEmail(props) {
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    return (
        <>
            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        onChange={handleChange}
                        className="input"
                        type="email"
                        placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                {
                    //<p className="help is-danger">This email is invalid</p>
                }
            </div>
        </>
    )
}