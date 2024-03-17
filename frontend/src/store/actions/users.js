import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async ({ email, password }, { dispatch }) => {
        try {
            const request = await axios.post(`api/auth/register`, {
                email,
                password,
            });
            //show a message
            dispatch(successGlobal('Welcome !! Check you emails to verify'));
            return { data: request.data.user, auth: true };
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message));
            throw error;
        }
    }
);

export const signInUser = createAsyncThunk(
    'users/signInUser',
    async ({ email, password }, { dispatch }) => {
        try {
            const request = await axios.post(`api/auth/signin`, {
                email,
                password,
            });
            //show a message
            dispatch(successGlobal('Welcome !!'));
            return { data: request.data.user, auth: true };
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message));
            throw error;
        }
    }
);
