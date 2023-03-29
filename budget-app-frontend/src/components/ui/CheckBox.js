export default function Checkbox({ text, textColor, onChange,intitalValue = false }) {

    function clickHandler(value) {
        var isChecked = value.target.checked;

        onChange(isChecked);
    }
    return (

        <div>
            <label style={{ display: "inline-block", color: textColor }}>
                <input  checked  = {intitalValue}onChange={clickHandler} style={{ display: "inline-block", }} type={"checkbox"}></input>
                {text}</label>
        </div>
    );
}