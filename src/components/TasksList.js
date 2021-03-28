import Task from "./Task";

function TasksList({ tasks, onDeleteTask }) {

    return (
        <>
            {tasks.map(e => {
                return <div key={e.id}><Task task={e} onDeleteTask={onDeleteTask} /></div>
            })}
        </>
    )
}

export default TasksList
