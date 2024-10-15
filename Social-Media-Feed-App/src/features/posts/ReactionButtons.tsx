import { useAppDispatch } from '@/app/hooks'
import { reactionAdded, type Post, type ReactionName } from './postsSlice'

const reactionEmoji: Record<ReactionName, string> = {
  thumbsUp: '👍',
  tada: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

interface ReactionButtonsProps {
  post: Post
}

export const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useAppDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([stringName, emoji]) => {
      const reaction = stringName as ReactionName

      const handleClick = () =>
        dispatch(reactionAdded({ postId: post.id, reaction }))

      return (
        <button
          key={reaction}
          type="button"
          className="muted-button reaction-button"
          onClick={handleClick}
        >
          {emoji} {post.reactions[reaction]}
        </button>
      )
    }
  )

  return <div>{reactionButtons}</div>
}
