import {useState, useCallback} from 'react';
import {findWords} from '../../utils/game-engine';

export function useResults(matrix){
  const [results, setResults] = useState(null);

  const calculateResults = useCallback(() => {
    setResults(findWords(matrix));
  }, []);

  return { results, calculateResults };
}