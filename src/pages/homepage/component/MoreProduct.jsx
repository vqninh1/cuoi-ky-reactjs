import React, { useEffect, useState } from 'react'
import electricpot1 from '../img_homepage/electricpot1.png'
import electricpot2 from '../img_homepage/electricpot2.png'
import electricpot3 from '../img_homepage/electricpot3.png'
import electricpot4 from '../img_homepage/electricpot4.png'
import electricpot5 from '../img_homepage/electricpot5.png'
import electricpot6 from '../img_homepage/electricpot6.png'
import electricpot7 from '../img_homepage/electricpot7.png'
import electricpot8 from '../img_homepage/electricpot8.png'
import electricpot9 from '../img_homepage/electricpot9.png'
import electricpot10 from '../img_homepage/electricpot10.png'
import electricpot11 from '../img_homepage/electricpot11.png'
import electricpot12 from '../img_homepage/electricpot12.png'
import electricpot13 from '../img_homepage/electricpot13.png'
import electricpot14 from '../img_homepage/electricpot14.png'
import electricpot15 from '../img_homepage/electricpot15.png'
import electricpot16 from '../img_homepage/electricpot16.png'
import electricpot17 from '../img_homepage/electricpot17.png'
import electricpot18 from '../img_homepage/electricpot18.png'
import electricpot19 from '../img_homepage/electricpot19.png'
import electricpot20 from '../img_homepage/electricpot20.png'
import electricpot21 from '../img_homepage/electricpot21.png'
import electricpot22 from '../img_homepage/electricpot22.png'
import electricpot23 from '../img_homepage/electricpot23.png'
import electricpot24 from '../img_homepage/electricpot24.png'
import electricpot25 from '../img_homepage/electricpot25.png'
import electricpot26 from '../img_homepage/electricpot26.png'
import electricpot27 from '../img_homepage/electricpot27.png'
import electricpot28 from '../img_homepage/electricpot28.png'
import electricpot29 from '../img_homepage/electricpot29.png'
import electricpot30 from '../img_homepage/electricpot30.png'
import electricpot31 from '../img_homepage/electricpot31.png'
import electricpot32 from '../img_homepage/electricpot32.png'
import electricpot33 from '../img_homepage/electricpot33.png'
import electricpot34 from '../img_homepage/electricpot34.png'
import electricpot35 from '../img_homepage/electricpot35.png'
import electricpot36 from '../img_homepage/electricpot36.png'
import electricpot37 from '../img_homepage/electricpot37.png'
import electricpot38 from '../img_homepage/electricpot38.png'
import electricpot39 from '../img_homepage/electricpot39.png'
import electricpot40 from '../img_homepage/electricpot40.png'
import electricpot41 from '../img_homepage/electricpot41.png'
import electricpot42 from '../img_homepage/electricpot42.png'
import electricpot43 from '../img_homepage/electricpot43.png'
import electricpot44 from '../img_homepage/electricpot44.png'
import electricpot45 from '../img_homepage/electricpot45.png'
import electricpot46 from '../img_homepage/electricpot46.png'
import electricpot47 from '../img_homepage/electricpot47.png'
import electricpot48 from '../img_homepage/electricpot48.png'
import electricpot49 from '../img_homepage/electricpot49.png'
import electricpot50 from '../img_homepage/electricpot50.png'
import electricpot51 from '../img_homepage/electricpot51.png'
import electricpot52 from '../img_homepage/electricpot52.png'
import electricpot53 from '../img_homepage/electricpot53.png'
import electricpot54 from '../img_homepage/electricpot54.png'
import electricpot55 from '../img_homepage/electricpot55.png'
import electricpot56 from '../img_homepage/electricpot56.png'
import electricpot57 from '../img_homepage/electricpot57.png'
import electricpot58 from '../img_homepage/electricpot58.png'
import electricpot59 from '../img_homepage/electricpot59.png'
import electricpot60 from '../img_homepage/electricpot60.png'
import { getProducts } from '../../../service/product.service'
//import { getProductmore } from '../../../service/productmore.service'

const MoreProduct = () => {
  const [products, setProducts] = useState([])
  //const [productmore, setProductmore] = useState([])
  const imglist = [
    electricpot1, electricpot2, electricpot3, electricpot4, electricpot5,
    electricpot6, electricpot7, electricpot8, electricpot9, electricpot10,
    electricpot11, electricpot12, electricpot13, electricpot14, electricpot15,
    electricpot16, electricpot17, electricpot18, electricpot19, electricpot20,
    electricpot21, electricpot22, electricpot23, electricpot24, electricpot25,
    electricpot26, electricpot27, electricpot28, electricpot29, electricpot30,
  ];
  const imglistmore = [
    electricpot31, electricpot32, electricpot33, electricpot34, electricpot35,
    electricpot36, electricpot37, electricpot38, electricpot39, electricpot40,
    electricpot41, electricpot42, electricpot43, electricpot44, electricpot45,
    electricpot46, electricpot47, electricpot48, electricpot49, electricpot50,
    electricpot51, electricpot52, electricpot53, electricpot54, electricpot55,
    electricpot56, electricpot57, electricpot58, electricpot59, electricpot60,
  ]
  console.log(imglist);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products)})
    }, []);

  const [productmore, setProductmore] = useState(false)
  function Hideproduct() {
    setProductmore(!productmore)
  }
  return (
    <div className='mb-5'>
      <h1 className='font-semibold text-black text-lg tracking-tight mb-3'>Ở đây có sản phẩm bạn thích</h1>
      <ul className='flex flex-wrap justify-between' style={{ width: '100%' }}>
        {products.map((e, index) => {
          return (
            <li key={e.id} className=' w-52 h-36 rounded mb-60 shadow-2xl shadow-slate-600' >
              <img src={imglist[index]} alt={imglist[index]} className='w-52 h-48 rounded cursor-pointer' />
              <div className='bg-white pt-2'>
                <p className='h-28 text-sm ml-2 '>{e.description}</p>
                <p className='text-red-600 font-semibold text-sm ml-2'>
                  Discount: -{e.discountPercentage}%
                </p>
                <p className='text-gray-800 font-semibold text-base ml-2 pb-2'>
                  Price: {e.price}$
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      {(productmore === true) ?
        <ul className='flex flex-wrap justify-between' style={{ width: '100%' }}>
          {products.map((e, index) => {
            return (
              <li key={e.id} className=' w-52 h-36 rounded mb-60 shadow-2xl shadow-slate-600' >
                <img src={imglistmore[index]} alt={imglistmore[index]} className='w-52 h-48 rounded  cursor-pointer' />
                <div className='bg-white pt-2'>
                  <p className='h-28 text-sm ml-2 '>{e.description}</p>
                  <p className='text-red-600 font-semibold text-sm ml-2'>
                    Discount: -{e.discountPercentage}%
                  </p>
                  <p className='text-gray-800 font-semibold text-base ml-2 pb-2'>
                    Price: {e.price}$
                  </p>
                </div>
              </li>
            )
          })}
        </ul> : null}
      <button
        className='h-10 rounded font-bold shadow-inner text-black bg-white hover:bg-zinc-200 
              delay-75 ease-in-out duration-700 mt-3 px-24'
        style={{
          width: '30%',
          fontWeight: '500',
          fontSize: '15px',
          marginLeft: '36.5%'
        }}
        onClick={Hideproduct}>
        {(productmore === true) ? 'Thu gọn' : 'Xem thêm'}
      </button>
    </div>
  )
}

export default MoreProduct