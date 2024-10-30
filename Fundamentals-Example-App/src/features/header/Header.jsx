import { useState } from 'react'

const Header = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be dode?"
        value={text}
        onChange={handleChange}
      />
    </header>
  )
}

export default Header
