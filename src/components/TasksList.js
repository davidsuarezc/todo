import Task from "./Task"
import { connect } from "react-redux";

function TasksList({ tasks, deleteTask }) {

    return (
        <>
            {
                tasks.map(e => {
                    return <div key={e.id} style={{ marginTop: '20px' }}><Task task={e} deleteTask={deleteTask} /></div>
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
