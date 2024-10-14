import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/userActions';

export interface State {
  data: any;
  error: any;
}

export const initialState: State = {
  data: null,
  error: null,
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.loadDataSuccess, (state, { data }) => ({ ...state, data })),
  on(DataActions.loadDataFailure, (state, { error }) => ({ ...state, error }))
);
