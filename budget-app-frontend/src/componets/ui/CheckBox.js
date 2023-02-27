export default function Checkbox({ text, textColor, onChange }) {
    return (

        <div>
            <label style={{ display: "inline-block", color: textColor }}>
                <input onChange={onChange} style={{ display: "inline-block", }} type={"checkbox"}></input>
                {text}</label>
        </div>
    );
}