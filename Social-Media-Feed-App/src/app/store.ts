import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { postsSlice } from '@/features/posts/postsSlice'
import { usersSlice } from '@/features/users/usersSlice'

const rootReducer = combineSlices(postsSlice, usersSlice)

export const store = configureStore({
  reducer: rootReducer,
})

export type AppStore = typeof store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
