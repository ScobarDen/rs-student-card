import React, {useEffect, useState} from "react";
import {validator} from "../../utils/validator";
import TextField from "../common/form/TextField";
import isEmpty from "lodash.isempty";
import {useNavigate} from "react-router-dom";
import NumberField from "../common/form/NumberField";

const EditForm = ({student}) => {
    const navigate = useNavigate();
    const needToCreate = isEmpty(student);
    const [data, setData] = useState({
        name: "",
        surname: "",
        birthday: 1999,
        potfolioLink: "",
    });

    if (!needToCreate) setData(student);

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
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
        birthday:{
            isValidBirthDay: {
                message: "Год рождения введен некорректно"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("user", JSON.stringify(data));
    };
    return (
        <>
            <h1>{needToCreate ? "Создать" : "Редактировать"}</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <TextField
                    label="Фамилия"
                    name="surname"
                    value={data.surname}
                    onChange={handleChange}
                    error={errors.surname}
                />
                <NumberField
                    label="Год рождения"
                    name="birthday"
                    value={data.birthday}
                    onChange={handleChange}
                    error={errors.birthday}
                />
                <TextField
                    label="Ссылка на портфолио"
                    name="potfolioLink"
                    value={data.potfolioLink}
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
                            onClick={() => {navigate("/")}}
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
        </>
    );
};

export default EditForm;