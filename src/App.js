import 'bootstrap/dist/css/bootstrap.min.css'
import TaskContainer from './components/TaskContainer';
import { Provider } from "react-redux"
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <TaskContainer />
    </Provider>
  );
}

export default App;
