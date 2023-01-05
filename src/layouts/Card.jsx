import EmptyPage from "../pages/EmptyPage";
import {useEffect, useState} from "react";
import StudentCardPage from "../pages/StudentCardPage";
import isEmpty from "lodash.isempty";

const Card = () => {
    const [student, setStudent] = useState({});
    useEffect(() => {
        const user = localStorage.getItem("user");
        user && setStudent(student);
    }, []);
    return (
        <>
            <h1 className="my-2">Карточка студента</h1>
            {isEmpty(student) ? <EmptyPage/> : <StudentCardPage/>}
        </>
    );
};

export default Card;