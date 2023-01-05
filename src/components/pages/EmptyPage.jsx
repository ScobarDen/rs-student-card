import {useNavigate} from "react-router-dom";

export const EmptyPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>Нет данных</p>
            <button className="btn btn-primary" onClick={()=>navigate("/edit")}>Добавить</button>
        </>
    );
};

export default EmptyPage;