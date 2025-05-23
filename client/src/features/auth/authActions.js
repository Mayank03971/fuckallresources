import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './../../API/api';

export const userLogin = createAsyncThunk('user/login', async (loginInfo, { rejectWithValue }) => {
   try {
      const { data } = await axiosInstance.post(`users/login`, loginInfo);
      localStorage.setItem('userToken', data.token);
      return data;
   } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
         return rejectWithValue(error.response.data.message);
      } else {
         return rejectWithValue(error.message);
      }
   }
});

export const userLogout = createAsyncThunk('user/logout', async () => {
   const response = await axiosInstance.post('users/logout');
   return response;
});

export const registerUser = createAsyncThunk('user/register', async (userInfo) => {
   const response = await axiosInstance.post('users/register', userInfo);
   return response;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (tag) => {
   const response = await axiosInstance.get('users/me');
   return response.data;
});
