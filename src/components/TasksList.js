/* import Task from "./Task"; */
import { connect } from "react-redux";

function TasksList({ tasks, deleteTask }) {

    return (
        <>
            {
                tasks.map(e => {
                    /* return <div key={e.id}><Task task={e} /></div> */
                    return <div key={e.id} style={{ border: 'gray dotted 1px', padding: '10px', marginTop: '10px' }}>
                        <div style={{ display: "inline-block" }}>
                            <p><b>{e.tittle}</b></p>
                            <p>{e.description}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => deleteTask(e.id)} style={{ float: "right" }}>
                            X
                        </button>
                    </div>
                })
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask(taskId) {
        dispatch({
            type: 'DELETE_TASK',
            payload: taskId
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
