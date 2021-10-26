import {combineReducers} from '@reduxjs/toolkit';

// reducers
import {postReducer} from './posts';

export const rootReducer = combineReducers({
  posts: postReducer,
});
