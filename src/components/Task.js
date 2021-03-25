import { connect } from "react-redux";

function Task(props) {
    const { id, tittle, description, deleteTask } = props
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

const mapDispatchToProps = (dispatch) => ({
    deleteTask(taskId) {
        dispatch({
            type: 'DELETE_TASK',
            payload: taskId
        })
    }
})

export default connect(null, mapDispatchToProps)(Task)
