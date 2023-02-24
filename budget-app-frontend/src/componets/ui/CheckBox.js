export default function Checkbox({ text, textColor }) {
    return (

        <div>
            <label style={{ display: "inline-block", color: textColor }}>
                <input style={{ display: "inline-block", }} type={"checkbox"}></input>
                {text}</label>
        </div>
    );
}