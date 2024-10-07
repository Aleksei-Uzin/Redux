import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export interface Post {
  id: string
  title: string
  content: string
}

const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(title: Post['title'], content: Post['content']) {
        return {
          payload: { id: nanoid(), title, content },
        }
      },
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const { content, id, title } = action.payload
      const existingPost = state.find(post => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
  selectors: {
    selectAllPosts(sliceState) {
      return sliceState
    },
    selectPostById(sliceState, postId: string) {
      return sliceState.find(post => post.id === postId)
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export const { selectAllPosts, selectPostById } = postsSlice.selectors
