import { combineSlices, configureStore } from "@reduxjs/toolkit"
import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { counterSlice } from "../components"

const reducer = combineSlices(counterSlice)

export const store = configureStore({
  reducer,
})

export type AppStore = typeof store

export type AppDispatch = AppStore["dispatch"]

export type RootState = ReturnType<AppStore["getState"]>

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
