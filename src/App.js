import {Route, Routes} from "react-router-dom";
import Card from "./layouts/Card";
import FillData from "./layouts/FillData";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Card/>}/>
                <Route path="/edit" element={<FillData/>}/>
                <Route path="*" element={<Card/>}/>
            </Routes>
        </div>

    );
}

export default App;
