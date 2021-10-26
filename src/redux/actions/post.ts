import {createAction} from '@reduxjs/toolkit';

// types
import {IPost} from '../../types/post';

// actions
import {PostActions} from '../constants/postActions';

export const request = createAction(PostActions.REQUEST);
export const loading = createAction(PostActions.LOADING);
export const error = createAction<{error: string}>(PostActions.FAILURE);
export const success = createAction<IPost[]>(PostActions.SUCCESS);
