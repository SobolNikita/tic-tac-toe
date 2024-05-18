import Home from "./components/Home/Home";
import TicTacBoard from "./components/TicTacBoard/TicTacBoard";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

import "./reset.css";
import "./main.css";

function App() {
    return (
        <>
            <Header />
            {/* <Home /> */}
            {/* <About/> */}
            <Contacts />
            {/* <TicTacBoard /> */}
        </>
    );
}

export default App;
