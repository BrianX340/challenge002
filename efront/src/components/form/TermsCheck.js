export default function InputText(props) {
    const handleChange = (e) => {
        props.setValue(!props.isChecked)
    }
    return (
        <>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input
                            onChange={handleChange}
                            type="checkbox"
                            className="mr-2"/>
                        Acepto <a href="#">terminos y condiciones</a>
                    </label>
                </div>
            </div>
        </>
    )
}