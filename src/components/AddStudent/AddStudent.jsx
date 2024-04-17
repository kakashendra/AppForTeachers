import React from 'react';
import s from "./AddStudent.module.css";
import {useNavigate} from "react-router-dom";

const AddStudent = (props) => {
    const navigate = useNavigate();

    let name= React.createRef();
    let gender= React.createRef();
    let activity= React.createRef();
    let glasses= React.createRef();
    let height= React.createRef();
    const addStudent = () => {
        props.addStudents(
            name.current.value,
            gender.current.value,
            activity.current.value,
            glasses.current.value,
            height.current.value);
        navigate("/table")

    }
    return (
        <div className={s.Page}>
            <h2>Добавить ученика</h2>
            <div>
                <input className='name' type="text" required="required" placeholder='name' ref={name}></input>
            </div>

            <div className={s.gender}>
                    {/*<label htmlFor="gender">gender</label>*/}
                    <select name="gender" ref={gender}>
                        <option value="">-- gender --</option>
                        <option value="man">man</option>
                        <option value="woman">woman</option>
                    </select>
            </div>

            <div className={s.activity}>
                    <select name="activity" ref={activity}>
                        <option value="">-- activity --</option>
                        <option value="low">low</option>
                        <option value="average">average</option>
                        <option value="high">high</option>
                    </select>
            </div>

            <div className={s.glasses}>
                    <select name="glasses" ref={glasses}>
                        <option value="">-- glasses --</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
            </div>

            <div className={s.height}>
                    <select name="height" ref={height}>
                        <option value="">-- height --</option>
                        <option value="low">low</option>
                        <option value="average">average</option>
                        <option value="high">high</option>
                    </select>
            </div>

            <div className={s.addStudents}>
                <button className={s.addStudents} type="submit" onClick={addStudent}>Готово</button>
            </div>
        </div>
    );
}
export default AddStudent;