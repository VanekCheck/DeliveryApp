import './shops.styles.scss'

import React from 'react'
import { ShopList, ProductList } from '../../components'

const Shops = () => {
  return (
    <div className='shops'>
      <div className='shops__list'>
        <header className='shops__list-header'>
          <h2>Shops</h2>
        </header>
        <ShopList />
      </div>
      <div className='shops__products'>
        <ProductList />
      </div>
    </div>
  )
}

export default Shops