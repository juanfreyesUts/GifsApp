import { useState } from "react"

export interface Props {
  initialValue: number,
}

export const useCounter = ({initialValue = 0}: Props) => {
  const [counter, setCounter] = useState(initialValue)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubtract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset,
  }
}
