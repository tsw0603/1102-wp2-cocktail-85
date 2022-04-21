import React from 'react'
import Cocktail_85 from './Cocktail_85'
import Loading_85 from './Loading_85'
import { useGlobalContext } from '../context_85'

const CocktailList_85 = () => {
  const { loading, cocktails } = useGlobalContext();
  if(loading){
    return <Loading_85 />
  }

  if(cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map( (item) => {
            return <Cocktail_85 key={item.id} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList_85
