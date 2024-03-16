import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_USER_STATE = {
    loading: false,
    data: {
        _id: null,
        email: null,
        firstname: null,
        lastname: null,
        age: null,
        role: null,
        verified: null,
    },
    auth: null,
};

export const userSlice = createSlice({
    name: 'users',
    initialState: DEFAULT_USER_STATE,
    reducers: {},
});

//action....
export default userSlice.reducer;
