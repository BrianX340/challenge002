export default function InputNumber(props) {
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
                        type="number"
                        />
                </div>
            </div>
        </>
    )
}