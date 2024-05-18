import github from "../../svg/github.svg";
import telegram from "../../svg/telegram.svg";
import codeforces from "../../svg/codeforces.svg";

import "./contacts.css";

function Contacts() {
    return (
        <div className="social_container">
            <div className="social_wrapper">
                <a href="https://github.com/SobolNikita">
                    <img src={github} alt="github" className="social github" />
                </a>
                <a href="https://t.me/SobolNikita">
                    <img
                        src={telegram}
                        alt="telegram"
                        className="social telegram"
                    />
                </a>
                <a href="https://codeforces.com/profile/xlebyshek2020">
                    <img
                        src={codeforces}
                        alt="codeforces"
                        className="social codeforces"
                    />
                </a>
            </div>
        </div>
    );
}

export default Contacts;
