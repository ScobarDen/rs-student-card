import EditForm from "../ui/EditForm";
import {useEffect, useState} from "react";

export const EditPage = () => {
    const [student, setStudent] = useState({});
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        user && setStudent(user);
    }, []);
    return (
        <div className="w-50 mx-auto">
            <EditForm student={student}/>
        </div>
    );
};

export default EditPage;