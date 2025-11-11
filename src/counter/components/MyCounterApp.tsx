import { useCounter, type Props } from "../hooks/useCounter"

export const MyCounterApp = ({initialValue = 0}: Props) => {

  const {counter, handleAdd, handleSubtract, handleReset} = useCounter({initialValue})

  return (
    <div>
      <h1>Contador: { counter }</h1>
      <button onClick={handleAdd}> + 1 </button>
      <button onClick={handleSubtract}> - 1 </button>
      <button onClick={handleReset}> Reset </button>
    </div>
  )
}
