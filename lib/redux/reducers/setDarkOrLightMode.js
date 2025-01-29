import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    darkOrLight: 'light',
}

export const darkOrLightSlice = createSlice({
    name: 'setDarkLightTheme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            if(state.darkOrLight === 'light') {
                 state.darkOrLight = 'dark'
                 console.log(state.darkOrLight);
            } else {state.darkOrLight = 'light'
        console.log(state.darkOrLight);
        }
            // state.darkOrLight === 'light' ? 'dark' : 'light'
        }
    }
})

export const {setTheme} = darkOrLightSlice.actions

export default darkOrLightSlice.reducer