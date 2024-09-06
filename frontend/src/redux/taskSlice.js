
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks as apiFetchTasks } from '../api/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const tasks = await apiFetchTasks();
    return tasks;
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectTasks = (state) => state.tasks;

export default taskSlice.reducer;
