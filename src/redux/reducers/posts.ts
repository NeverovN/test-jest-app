import {createReducer} from '@reduxjs/toolkit';

// types
import {IPostReducerState} from '../../types/state';

// actions
import {loading, error, success} from '../actions/post';

// utils
import {normalizeData} from '../../utils/normalizeData';

const initialState: IPostReducerState = {
  loading: false,
  error: null,
  posts: {byIds: {}, ids: []},
};

export const postReducer = createReducer<IPostReducerState>(
  initialState,
  builder => {
    builder
      .addCase(loading, state => ({
        ...state,
        error: null,
        loading: true,
      }))
      .addCase(error, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload.error,
      }))
      .addCase(success, (state, action) => ({
        ...state,
        loading: false,
        posts: {
          byIds: normalizeData(action.payload),
          ids: action.payload.map(post => post.id),
        },
        error: null,
      }));
  },
);
