import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETINGS = 'greetings';

const initialState = {
    greetings: [],
    loading: true,
    error: false
};


export const fetchGreetings = createAsyncThunk(
  GREETINGS,
  async (_, {rejectWithValue}) => {
    try {
        const res = await axios.get("http://127.0.0.1:3000/api/v1/greetings");
        return { greetings: res.data };
    } catch (error) {
        return rejectWithValue(error)
    }
}
)

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GREETINGS}/pending`:
      return {
        loading: true,
        greetings: [],
        error: false
      }
      case `${GREETINGS}/fulfilled`:
      return {
        loading: false,
        greetings: action.payload,
        error: false
      }
      case `${GREETINGS}rejected`:
        return {
          loading: false,
          greetings: [],
          error: true
        }
        default:
          return {...state}
  
  }
}
   

