import "./App.css";
import {Provider} from "react-redux";
import store from "./store/store";
import AllJobs from "./components/AllJobs";

function App() {
  return (
    <Provider store={store}>
      <AllJobs />
    </Provider>
  );
}

export default App;
