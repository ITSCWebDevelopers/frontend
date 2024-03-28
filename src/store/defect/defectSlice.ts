import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
export type Defect = {
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
  address: string | null;
  defectType: string | null;
  defectView: string | null;
  square: number | null;
  photos: string[] | null;
};

const INIT_DATA: Defect[] = [];

export const defectSlice = createSlice({
  name: 'defectSlice',
  initialState: INIT_DATA,
  reducers: {
    setDefect(state, actions: PayloadAction<Defect>) {
      state.push(actions.payload);
    },
  },
});

export const {setDefect} = defectSlice.actions;
export default defectSlice.reducer;
