import {rerenderEntireTree} from "../render";

let state = {
    students: [
        {name:'Kate', gender: 'w', activity: 'low', glasses: 'no', height: 'high'},
        {name:'Maxim', gender: 'm', activity: 'high', glasses: 'yes', height: 'low'}
    ]
}

export let addStudents = (name, gender,activity, glasses, height) => {
    let newStudent = {
        name: name,
        gender: gender,
        activity: activity,
        glasses: glasses,
        height: height
    }
    state.students.push(newStudent)
    rerenderEntireTree(state);

};


export default state;
