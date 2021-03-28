function Task(props) {
    const { task, onDeleteTask } = props
    return <div style={{ border: 'gray dotted 1px', padding: '10px' }}>
        <div style={{ display: "inline-block" }}>
            <p><b>{task.tittle}</b></p>
            <p>{task.description}</p>
        </div>
        <button className="btn btn-danger" onClick={() => onDeleteTask(task.id)} style={{ float: "right" }}>
            Delete    
        </button>
    </div>
}

export default Task

