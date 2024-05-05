import {combineReducers} from "redux";
import jobsReducer from "../features/jobs/jobSlice";

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
