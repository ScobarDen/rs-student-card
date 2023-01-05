import React, {useContext, useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/TextField";
import {useNavigate} from "react-router-dom";
import NumberField from "../common/form/NumberField";
import Modal from "../common/Modal";
import {StudentContext} from "../../App";

const EditForm = () => {
    const {student, setStudent} = useContext(StudentContext);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [needToCreate, setNeedToCreate] = useState(true);
    useEffect(()=>{
        if (student.name) setNeedToCreate(false);
    },[]);

    const handleChange = (target) => {
        setStudent((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
        },
        surname: {
            isRequired: {
                message: "Фамилия обязательна для заполнения"
            },
        },
        potfolioLink: {
            isRequired: {
                message: "Ссылка на портфолио обязательна для заполнения"
            },
            isValidLink: {
                message: "Заполненное поле должно быть ссылкой"
            }
        },
        birthday: {
            isValidBirthDay: {
                message: "Год рождения введен некорректно"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [student]);
    const validate = () => {
        const errors = validator(student, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("user", JSON.stringify(student));
        setShowModal(true);
    };
    const handleModal = (e) => {
        setShowModal(false);
        navigate("/");
    }
    return (
        <>
            <h1>{needToCreate ? "Создать" : "Редактировать"}</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Фамилия"
                    name="surname"
                    value={student.surname}
                    onChange={handleChange}
                    error={errors.surname}
                />
                <NumberField
                    label="Год рождения"
                    name="birthday"
                    value={student.birthday}
                    onChange={handleChange}
                    error={errors.birthday}
                />
                <TextField
                    label="Ссылка на портфолио"
                    name="potfolioLink"
                    value={student.potfolioLink}
                    onChange={handleChange}
                    error={errors.potfolioLink}
                />
                {needToCreate
                    ? <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={!isValid}
                    >
                        Создать
                    </button>
                    : <>
                        <button
                            className="btn btn-dark"
                            onClick={() => {
                                navigate("/")
                            }}
                        >
                            Назад
                        </button>
                        <button
                            className="btn btn-primary mx-2"
                            type="submit"
                            disabled={!isValid}
                        >
                            Обновить
                        </button>
                    </>
                }
            </form>
            {showModal && <Modal title={needToCreate ? "Создано" : "Обновлено"} handleModal={handleModal}/>}
        </>
    );
};

export default EditForm;