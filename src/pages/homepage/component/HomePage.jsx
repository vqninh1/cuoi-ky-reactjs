import React from 'react'
import ElmichImagin from './ElmichImagin'
import ProductPrice from './ProductPrice'
import SupplierInfo from './SupplierInfo'
import ProductDescription from './ProductDescription'
import MoreProduct from './MoreProduct'

//import noicom from '../images/bestseller.png'
const HomePage = () => {
  return (
    <div className='bg-slate-100'>
      <div>
        <ul className='flex ml-6 pt-3 text-sm'>
          <li className='mr-1'>Sendo.vn /</li>
          <li className='mr-1'>Đồ điện gia dụng /</li>
          <li className='mr-1'>Nồi điện, nồi cơm điện /</li>
          <li className='mr-1'>Nồi áp suất điện</li>
        </ul>
      </div>
      <div className='flex bg-while border-black bg-white rounded-xl ml-6 mt-3' style={{ width: '96.5%' }}>
        <ElmichImagin />
        <ProductPrice />
      </div>
      <div className='flex bg-while border-black ml-6 mt-3' style={{ width: '96.5%' }}>
        <SupplierInfo />
        <ProductDescription/>
      </div>
      <div className='flex bg-while border-black ml-6 mt-3' style={{ width: '96.5%' }}>
        <MoreProduct/>
      </div>
    </div>
  )
}

export default HomePage