import {useNavigate} from "react-router-dom";

export const StudentCard = ({student}) => {
    const navigate = useNavigate();

    const getAge = (birthday) => {
        const date = new Date();

    }

    return (
        <>
            <div className="list-group mt-4">
                <div className="list-group-item list-group-item-action"><strong> Имя:</strong> {student.name}</div>
                <div className="list-group-item list-group-item-action"><strong> Фамилия:</strong> {student.surname} {}
                </div>
                <div className="list-group-item list-group-item-action"><strong> Год
                    рождения</strong>: {student.birthday}</div>
                <div className="list-group-item list-group-item-action"><strong> Портфолио:</strong> <a
                    href={student.potfolioLink}>{student.potfolioLink}</a></div>
            </div>
            <button className="btn btn-primary mt-3" onClick={()=>navigate("/edit")}>Редактировать</button>
        </>
    );
};