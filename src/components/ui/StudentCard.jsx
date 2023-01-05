import {useNavigate} from "react-router-dom";

export const StudentCard = ({student}) => {
    const navigate = useNavigate();

    const getAge = (birthday) => {
        const yearToday = new Date().getFullYear();
        const age = yearToday - birthday;
        let ending = "лет";
        const endingOfAge = age.toString().at(-1);
        if (endingOfAge === "1") ending = "год";
        if (["2", "3", "4"].includes(endingOfAge)) ending = "года";
        if (["11", "12", "13", "14"].includes(age.toString().slice(-2))) ending = "лет";
        return `(${age} ${ending})`
    }

    return (
        <>
            <div className="list-group mt-4">
                <div className="list-group-item list-group-item-action"><strong> Имя:</strong> {student.name}</div>
                <div className="list-group-item list-group-item-action"><strong> Фамилия:</strong> {student.surname}
                </div>
                <div className="list-group-item list-group-item-action"><strong> Год
                    рождения</strong>: {student.birthday} {getAge(student.birthday)}</div>
                <div className="list-group-item list-group-item-action"><strong> Портфолио:</strong> <a
                    href={student.potfolioLink}>{student.potfolioLink}</a></div>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/edit")}>Редактировать</button>
        </>
    );
};