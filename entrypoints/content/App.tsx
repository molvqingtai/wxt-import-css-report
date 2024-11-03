import { useState } from 'react'
import { Toaster, toast } from 'sonner'

export default () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    toast('Hello, world!')
    setCount((count) => count + 1)
  }

  return (
    <div>
      <Toaster richColors visibleToasts={1} duration={100000} position="top-center"></Toaster>
      <p>This is React. {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
