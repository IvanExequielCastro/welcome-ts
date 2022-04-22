import { createContext } from 'react';

type T = {
  number: number
}

const data: T = {
  number: 3
};

export const Context = createContext<T>({} as T); // Se utiliza el "as" para definir el tipo y no tener que inicializarlo

interface props {
  children: JSX.Element | JSX.Element[]
}

export const ContextProvider = (props: props) => {
  const { children } = props;

  return (
    <Context.Provider value={{number: data.number}}>
      {children}
    </Context.Provider>
  )
};
