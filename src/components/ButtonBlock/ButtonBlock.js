import Button from "../Button/Button";

import "./buttonBlock.css";

function ButtonBlock() {
    return (
        <div className="ButtonBlock">
            <Button text="Play with computer" />
            <Button text="Play with friend (offline)" />
        </div>
    );
}

export default ButtonBlock;
