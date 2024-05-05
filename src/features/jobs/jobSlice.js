import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({limit, offset}) => {
    try {
      //I like to keep all the links and credentials in the .env file but just in case if you run my code
      // you dont have create seperate env for that.

      // const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({limit, offset}),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching jobs: " + error.message);
    }
  }
);

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    totalCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalCount = action.payload.totalCount;
        state.jobs = [...state.jobs, ...action.payload.jdList];
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
