// store.js
import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice'; // Update import

const store = configureStore({
  reducer: {
    post: postReducer, // Use the post reducer
  },
});

export default store;
