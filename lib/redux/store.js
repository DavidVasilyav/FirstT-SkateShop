import { configureStore } from '@reduxjs/toolkit'
import darkOrLightSlice from './reducers/setDarkOrLightMode'
export default configureStore({
  reducer: {
    darkOrLightMode : darkOrLightSlice,
  }
})