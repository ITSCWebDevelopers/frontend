import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userSlice} from './user/userSlice';

const rootReducer = combineReducers({user: userSlice.reducer});

export const setupStore = () => configureStore({reducer: rootReducer, devTools: true});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
