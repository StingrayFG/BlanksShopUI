import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "api";

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ phoneNumber, password }, thunkAPI) => {
    try {
      const response = await fetch(
        api.baseUrl + "customer/get/bylogin?login=" + phoneNumber + "&password=" + password, {method: "GET"}
      );
      let data = await response.json();
      console.log("response", data);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, phoneNumber, password }, thunkAPI) => {
    try {
      const response = await fetch(
        api.baseUrl + "customer/add?name=" + name + "&phoneNumber=" + phoneNumber + "&password=" + password, {method: "POST"}
      );
      let data = await response.json();
      console.log("data", data);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, name: name, phoneNumber: phoneNumber };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    name: "",
    phoneNumber: "",
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },

    clearUser: (state) => {
      state.id = 0;
      state.name = "";
      state.phoneNumber = "";
      state.password = "";

      return state;
    },

  },
  extraReducers: {
    // Extra reducer comes here
    [signupUser.fulfilled]: (state, { payload }) => {
      state.name = payload.user.name;
      state.phoneNumber = payload.user.phoneNumber;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      //state.errorMessage = payload.message;
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      state.id = payload.id
      state.name = payload.name;
      state.phoneNumber = payload.phoneNumber;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      //state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;
export const { clearUser } = userSlice.actions;

export const userSelector = (state) => state.user;

