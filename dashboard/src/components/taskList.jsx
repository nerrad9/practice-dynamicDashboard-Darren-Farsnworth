import Task from "./task.jsx"

export default function TaskList() {
    const tasks = [{name:"Prepare trap for Perry", status:true},
        {name:"Setup backstory monologue", status:true},
        {name:"Reveal latest -inator", status:false},
        {name:"Install self destruct button", status:true},
        {name:"Takeover the Tri-State area", status:false}]
    return (
        <ul>
            {tasks.map(t => <Task name = {t.name} status = {t.status}/>)}
        </ul>
    )
}