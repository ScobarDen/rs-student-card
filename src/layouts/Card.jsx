import EmptyPage from "../components/pages/EmptyPage";
import {useContext} from "react";
import StudentCardPage from "../components/pages/StudentCardPage";
import {StudentContext} from "../App";

const Card = () => {
    const {student} = useContext(StudentContext);
    return (
        <>
            <h1 className="my-2">Карточка студента</h1>
            {!student.name ? <EmptyPage/> : <StudentCardPage/>}
        </>
    );
};

export default Card;