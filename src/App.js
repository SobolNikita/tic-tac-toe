import Wrapper from "./components/Wrapper/Wrapper";
import TicTacBoard from "./components/TicTacBoard/TicTacBoard";
import Header from "./components/Header/Header";

import "./reset.css";
import "./main.css";

function App() {
    return (
        <>
            <Header />
            {/*<Wrapper />*/}
            <TicTacBoard />
        </>
    );
}

export default App;
