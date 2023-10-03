import React, { useState } from 'react'
import mall from '../img_homepage/mall.png'
import kredivo from '../img_homepage/kredivo.png'
import { TbShoppingBag } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { ImInfo } from 'react-icons/im'
import { RiShieldCheckLine } from 'react-icons/ri'
import { toast } from 'react-toastify'

const ProductPrice = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  }

  const handleBag = () => {
    if (localStorage.getItem("quantity")) {
      const sum = parseInt(localStorage.getItem("quantity")) + parseInt(quantity);
      localStorage.setItem("quantity", sum);
    } else {
      localStorage.setItem("quantity", quantity);
    }
  }

  const increase = () => {
    setQuantity(quantity + 1);
  }
  const decrease = () => {
    if (quantity === 1) {
      toast('Số lượng không được nhỏ hơn 1', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className='ml-10'>
      <ul className='flex items-center mt-4'>
        <li className='mr-2'>
          <img src={mall} alt='mall' className='w-9 h-4' />
        </li>
        <li className='font-bold text-xl text-black'>Nồi áp suất Elmich PCE-1802 (5L) - 4021802</li>
      </ul>
      <p className='text-sm text-gray-950 mt-3'>Thương hiệu:
        <span className='text-blue-600 cursor-pointer'> Elmich</span>
      </p>
      <p className='text-2xl text-red-600 font-bold mt-1'>2.250.000đ</p>
      <div className='flex items-center text-gray-500 mt-20'>
        <TbShoppingBag className='w-5 h-5 mr-1' /> 2 lượt mua
      </div>
      <div className='mt-3 flex items-center'>
        <lable className='mr-20 text-gray-500'>Chọn số lượng:</lable>
        <div>
          <button onClick={() => decrease()} className='bg-gray-200 hover:bg-slate-100 rounded p-2 mr-1'>
            <AiOutlineMinus />
          </button>
          <input type='number' className='border-1 h-8 w-10 pt-0.5 border-gray-200 rounded text-center'
            onChange={(e) => handleChange(e)} min={1} value={quantity} />
          <button onClick={() => increase()} className='bg-gray-200 hover:bg-slate-100 rounded p-2 ml-1'>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className='mt-3 border-bottom pb-4'>
        <button onClick={() => handleBag()} className='w-80 h-12 mr-3 border-1 rounded bg-gray-100 hover:bg-gray-50 font-bold text-gray-600'>
          Thêm vào giỏ
        </button>
        <button className='w-80 h-12 border-1 rounded bg-red-500 hover:bg-red-400 font-bold text-gray-50'>
          Mua ngay
        </button>
      </div>
      <div>
        <div className='flex mt-4'>
          <p className='text-gray-800 tracking-tight font-bold text-sx'>Ưu đãi dành cho bạn</p>
          <button className='ml-96'>
            <ImInfo className='w-5 h-5 ml-24 text-gray-500' />
          </button>
        </div>
        <div className='flex mt-4 border-bottom pb-4'>
          <img src={kredivo} alt="kredivo" className='w-5 h-6  mr-3' />
          <p className='text-gray-700 text-sm'>Trả góp Kredivo</p>
        </div>
      </div>

      <div>
        <div className='flex mt-4'>
          <p className='text-gray-800 tracking-tight font-bold text-sx'>Quyền lợi khách hàng và Bảo hành</p>
          <button className='ml-72'>
            <ImInfo className='w-5 h-5 ml-24 text-gray-500' />
          </button>
        </div>
        <div className='flex mt-4'>
          <RiShieldCheckLine className='w-6 h-6 mr-2 text-green-700 bg-lime-50 ' />
          <p className='text-gray-700 text-sm mr-14'>7 ngày hoàn trả</p>
          <RiShieldCheckLine className='w-6 h-6 text-green-700 bg-lime-50 mr-2' />
          <p className='text-gray-700 text-sm w-36'>Bảo hành theo chính sách từ Nhà bán hàng</p>
        </div>
      </div>
    </div>

  )
}

export default ProductPrice