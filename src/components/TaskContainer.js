import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskForm from './TaskForm'
import TasksList from './TasksList'

const TaskContainer = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    const handleAddTask = (newTask) => {
        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: taskId
        })
    }

    return (
        <div className="row" style={{ margin: '20px 20px' }}>
        <div className="col-md-4">
          <TaskForm onAddTask={handleAddTask} />
        </div>
        <div className="col-md-8">
          <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </div>
      </div>
    )
}

export default TaskContainer