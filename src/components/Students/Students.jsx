import React from 'react';
import Draggable from 'react-draggable';
import s from './Students.module.css';

const Students = (props) => {
    let listOfStudents = props.students.map (st => {
        return (
            <div className={s.student}>
                <Draggable>
                    <button >
                        <div>{st.name}</div>
                        <div>{st.gender}</div>
                        <div>{st.activity}</div>
                        <div>{st.glasses}</div>
                        <div>{st.height}</div>
                    </button>
                </Draggable>
            </div>
        )
    });
    return (
        <div>
            {listOfStudents}
        </div>
    )
}

export default Students;