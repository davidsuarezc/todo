/* import { useState } from "react"; */
import TaskForm from "./components/TaskForm"
import TasksList from "./components/TasksList"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux"
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <div className="row" style={{ margin: '20px 20px' }}>
        <div className="col-md-4">
          <TaskForm />
        </div>
        <div className="col-md-8">
          <TasksList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
