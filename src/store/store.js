import {configureStore} from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    root: rootReducer,
  },
});

export default store;
