import { createSlice } from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface listState {
  listOfItems: {}[],
  deletedList: {}[],
  maybeList: {}[],
  finalList: {}[],
}

const initialState: listState = {
  listOfItems: [],
  deletedList: [],
  maybeList: [],
  finalList: [], 
}

export const listSlice = createSlice({
  name: "listOfItems",
  initialState,
  reducers: {
    addItemToList: (state, action) => {
      state.listOfItems = [...state.listOfItems, action.payload]
    },
    addItemToDeletedList: (state, action) => {
      state.deletedList = [...state.deletedList, action.payload]
    },
    addItemToMaybeList: (state, action) => {
      state.maybeList = [...state.maybeList, action.payload]
    },
    addItemToFinalList: (state, action) => {
      state.finalList = [...state.finalList, action.payload]
    }
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     console.log('HYDRATE', state, action.payload);
  //     return {
  //       ...state,
  //       ...action.payload.subject,
  //     };
  //   },
  // },
})

// Action creators are generated for each case reducer function
export const { addItemToList, addItemToDeletedList,addItemToFinalList,addItemToMaybeList } = listSlice.actions

export default listSlice.reducer