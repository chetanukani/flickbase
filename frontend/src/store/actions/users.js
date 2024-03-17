import { createAsyncThunk } from '@reduxjs/toolkit';
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

            return { data: request.data.user, auth: true };
        } catch (error) {
            //show a message
            console.log(error);
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

            return { data: request.data.user, auth: true };
        } catch (error) {
            //show a message
            console.log(error);
            throw error;
        }
    }
);
