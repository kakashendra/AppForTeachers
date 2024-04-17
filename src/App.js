import React from "react";
import InputPage from "./components/Input/InputPage";
import Students from "./components/Students/Students";
import Table from './components/Table/Table';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import s from './App.module.css';
import AddStudent from "./components/AddStudent/AddStudent";
import state from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className={s.Pages}>
            <Routes>
                <Route path="/" element={<InputPage state={state} />} />
                <Route path="/addStudents" element={<AddStudent addStudents={props.addStudents}/>} />
                <Route path="/table" element={
                    <div className={s.secondPage}>
                        <div className={s.Table}><Table
                            state={state}
                        /></div>
                        <div>
                            {/*<div className={s.AddStudent}><AddStudent addStudents={props.addStudents}/></div>*/}
                            <div className={s.Students} state={state}><Students
                                students={props.state.students}
                                addStudents={props.addStudents}/></div>
                        </div>
                    </div>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}


export default App;
