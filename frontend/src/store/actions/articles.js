import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader } from '../../utils/tools';
import axios from 'axios';

export const addArticle = createAsyncThunk(
    'articles/addArticle',
    async (article, { dispatch }) => {
        try {
            const request = await axios.post(
                `/api/articles`,
                article,
                getAuthHeader()
            );
            dispatch(successGlobal('Post created!!'));
            return request.data;
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message));
            throw error;
        }
    }
);

export const updateArticle = createAsyncThunk(
    'articles/updateArticle',
    async({values,articleId},{dispatch})=>{
        try{
            await axios.patch(`/api/articles/article/${articleId}`,values,getAuthHeader())
            dispatch(successGlobal('Article updated !!'))
            return true
        }catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }
)

export const getAdminArticle = createAsyncThunk(
    'articles/getAdminArticle',
    async (_id, { dispatch }) => {
        try {
            const request = await axios.get(
                `/api/articles/article/${_id}`,
                getAuthHeader()
            );
            return request.data;
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message));
            throw error;
        }
    }
);

export const getCategories = createAsyncThunk(
    'articles/getCategories',
    async (obj, { dispatch }) => {
        try {
            const request = await axios.get(
                '/api/articles/categories',
                getAuthHeader()
            );
            return request.data;
        } catch (error) {
            dispatch(errorGlobal(error.response.data.message));
            throw error;
        }
    }
);
