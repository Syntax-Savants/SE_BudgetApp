
export default function DecorCircle({ x, y, size, color }) {
    return (
        <div
            className="login-decor"

            top={y}
            left={x}
            style={{ backgroundColor: color, width: size, height: size, top: y, left: x }}>
        </div>
    );
}
