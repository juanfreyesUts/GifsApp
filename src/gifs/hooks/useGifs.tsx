// hooks react
import { useRef, useState } from 'react';
// gifs example
import { mockGifs } from '../../mock-data/gifs.mock';
// api
import { getGifsByQuery } from '../../gifs/actions/get-gifs-by-query.action';
// type Gif (interface)
import type { Gif } from '../../gifs/interfaces/gif.interface';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [data, setData] = useState<Gif[]>(mockGifs);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term:string) => {
    if (gifsCache.current[term]) {
      setData(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setData(gifs);
  }

  const handleSearch = async (query: string = '') => {
    // convertir el query a minusculas sin espacios en blanco
    const newQuery = query.trim().toLowerCase();

    // validar que el query no este vacio
    if (newQuery === '') return;

    // filtrar si existe el elemento buscado
    const filtro = previousTerms.includes(newQuery);
    if (filtro) return;
    
    // agregar al inicio del array
    setPreviousTerms([newQuery, ...previousTerms].splice(0,7));

    const gifs = await getGifsByQuery(query);
    setData(gifs);

    gifsCache.current[query] = gifs;
  }

  return {
    data,
    previousTerms,
    handleTermClicked,
    handleSearch,
  }
}
