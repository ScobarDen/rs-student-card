import {Route, Routes} from "react-router-dom";
import Card from "./layouts/Card";
import FillData from "./layouts/FillData";
import {createContext, useEffect, useState} from "react";

export const StudentContext = createContext({});

function App() {
    const [student, setStudent] = useState({});
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        user && setStudent(user);
    }, []);

    return (
        <StudentContext.Provider value={student}>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Card/>}/>
                    <Route path="/edit" element={<FillData/>}/>
                    <Route path="*" element={<Card/>}/>
                </Routes>
            </div>
        </StudentContext.Provider>
    );
}

export default App;
