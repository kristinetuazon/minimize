import { configureStore, AnyAction, Store, combineReducers} from '@reduxjs/toolkit'
import counter from './slices/counterSlice';
import listOfItems from './slices/listSlice';
// import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
// import { ConfigureStoreOptions, ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
// import type { Reducer } from '@reduxjs/toolkit';

const combinedReducer = combineReducers ({
counter,
listOfItems,
})

export const store = configureStore({
  reducer: {
    combinedReducer
  },
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch