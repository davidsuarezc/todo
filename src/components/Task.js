
function Task(props) {
    const { id, tittle, description } = props.task
    const { deleteTask } = props

    return <div style={{ border: 'gray dotted 1px', padding: '10px' }}>
        <div style={{ display: "inline-block" }}>
            <p><b>{tittle}</b></p>
            <p>{description}</p>
        </div>
        <button className="btn btn-danger" onClick={() => deleteTask(id)} style={{ float: "right" }}>
            X
        </button>
    </div>
}

export default Task
