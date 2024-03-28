import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {defectSlice} from './defect/defectSlice';
import {userSlice} from './user/userSlice';

const rootReducer = combineReducers({user: userSlice.reducer, defect: defectSlice.reducer});

export const setupStore = () => configureStore({reducer: rootReducer, devTools: true});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
