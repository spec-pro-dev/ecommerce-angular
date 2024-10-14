// loading.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { showLoading, hideLoading } from './../actions/loading.action';

export interface LoadingState {
  loading: boolean;
}

export const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(showLoading, (state) => ({ ...state, loading: true })),
  on(hideLoading, (state) => ({ ...state, loading: false }))
);
