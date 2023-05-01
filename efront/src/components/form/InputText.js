export default function InputText(props) {
    const handleChange = (e)=>{
        props.setValue(e.target.value)
    }
    return (
        <>
            <div className="field">
                <label className="label">{props.text}</label>
                <div className="control">
                    <input
                        onChange={handleChange}
                        defaultValue={props.defaultValue}
                        className="input"
                        type="text"
                        placeholder={props.placeholder}
                        />
                </div>
            </div>
        </>
    )
}