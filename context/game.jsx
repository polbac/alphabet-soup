import React, { createContext } from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../components/loading';

export const GameContext = createContext({});

const queryGetLevels = () => fetch('/api/game')
  .then((res) => res.json());

export function GameContextProvider({ children }) {
  const { loading, error, data } = useQuery('getLevels', queryGetLevels);
  return <GameContext.Provider value={{data}}>
    {error && <h2>Ups! ocurrio un error, recarga el navegador</h2>}
    {loading && <Loading />}
    {data && children}
  </GameContext.Provider>;
}