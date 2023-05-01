export default function TextArea(props) {
    const handleChange = (e)=>{
        props.setValue(e.target.value)
    }
    return (
        <>
            <div className="field">
                <label className="label">{props.text}</label>
                <div className="control">
                    <textarea
                        onChange={handleChange}
                        defaultValue={props.defaultValue}
                        className="textarea"
                        placeholder={props.placeholder}
                        />
                </div>
            </div>
        </>
    )
}