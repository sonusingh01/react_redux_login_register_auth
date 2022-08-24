import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ name, email, password }, { rejectWithValue }) => {
    try {
    // configure header's Content-Type as JSON
    const config = {
    headers: {
    'Content-Type': 'application/json',
    },
    }
    // make request to backend
    await axios.post("https://e-commerce-backend-sigma.vercel.app/api/register",
    { name, email, password },
    config
    )
    } catch (error) {
    // return custom error message from API if any
    if (error.response && error.response.data.message) {
    return rejectWithValue(error.response.data.message)
    } else {
    return rejectWithValue(error.message)
    }
    }
    
    }
    )