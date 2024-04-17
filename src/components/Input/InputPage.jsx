import React from "react";
import s from './InputPage.module.css';
import {useNavigate} from "react-router-dom";
import state from '../../redux/state';


const InputPage = () => {

    const navigate = useNavigate();

    let rows = React.createRef()
    let cols = React.createRef()

    const createDesks = () => {
        state.rows = rows.current.value;
        state.cols = cols.current.value;
        navigate("/addStudents")
    }

    return (
        <div className={s.InputPage}>
            <h2>Введите количество рядов:</h2>
            <input type="number" ref={rows}></input>
            <h2>Введите количество парт в одном ряду:</h2>
            <input type="number" ref={cols}></input>
            <button onClick={createDesks}>Готово</button>
        </div>
    )

}

export default InputPage;