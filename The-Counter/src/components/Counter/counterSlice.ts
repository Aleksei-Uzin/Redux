import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { AppThunk } from "../../app/store"
import { fetchCount } from "./counterAPI"

interface CounterState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = "loading"
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = "failed"
      })
  },
  selectors: {
    selectValue(sliceState) {
      return sliceState.value
    },
    selectStatus(sliceState) {
      return sliceState.status
    },
  },
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions

export const { selectStatus, selectValue } = counterSlice.selectors

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectValue(getState())

    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount)
    return response.data
  },
)
