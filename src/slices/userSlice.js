import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://reqres.in/api/users?page=1")
    return await response.json().data
})

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(fetchUsers.rejected, state => {
            state.loading = false
        })
    }
})

export default usersSlice.reducer