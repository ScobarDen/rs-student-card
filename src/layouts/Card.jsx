import EmptyPage from "../components/pages/EmptyPage";
import {useEffect, useState} from "react";
import StudentCardPage from "../components/pages/StudentCardPage";
import isEmpty from "lodash.isempty";

const Card = () => {
    const [student, setStudent] = useState({});
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        user && setStudent(user);
    }, []);
    return (
        <>
            <h1 className="my-2">Карточка студента</h1>
            {isEmpty(student) ? <EmptyPage/> : <StudentCardPage student={student}/>}
        </>
    );
};

export default Card;