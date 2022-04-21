import React from 'react'
import { useGlobalContext } from '../context_85'

const SearchForm_85 = () => {
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm_85
