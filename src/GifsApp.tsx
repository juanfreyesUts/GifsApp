import './index.css'

import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearch } from './gifs/components/PreviousSearch'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {
  const { data, previousTerms, handleTermClicked, handleSearch} = useGifs()

  return (
    <>
      {/* title */}
      <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />
      
      {/* SearchBar */}
      <SearchBar 
        placeholder='Buscar gifs'
        onQuery={handleSearch}
      />

      {/* búsquedas previas */}
      <PreviousSearch searches={previousTerms} onLabelClicked={handleTermClicked} />

      { /* contenedor de gifs */}
      <GifList gifs={data} />
    </>
  )
}
