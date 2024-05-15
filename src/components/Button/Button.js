import "./button.css";

function Button(props) {
    return (
        <button className={`button ${props.modify}`} onClick={props.click}>
            {props.text}
        </button>
    );
}

export default Button;
