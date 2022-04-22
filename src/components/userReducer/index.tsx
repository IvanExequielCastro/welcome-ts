import { useReducer } from 'react';

const initialState = {
  counter: 10,
}

type ActionType =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom', payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'decrementar':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'custom':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state;
  }
}

export const CounterWithReduce = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h3>Reduce</h3>
      <span>{counter}</span>
      <div>
        <button onClick={() => dispatch({ type: 'incrementar' })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: 'decrementar' })}>
          -1
        </button>
        <button onClick={() => dispatch({ type: 'custom', payload: 100 })}>
          100
        </button>
      </div>
    </>
  );
};
