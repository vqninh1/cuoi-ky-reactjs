import React from 'react'
import { useState } from 'react'

const Header = ({load, setLoad, care, setCare, check, setCheck}) => {
  //const [load, setLoad] = useState(false);
  // const [care, setCare] = useState(false);
  // const [check, setCheck] = useState(false);
  function downloadApp() {
    setLoad(!load)
    setCare(false)
    setCheck(false)
  }
  function customerService() {
    setCare(!care)
    setLoad(false)
    setCheck(false)
  }
  function ordersCheck() {
    setCheck(!check)
    setCare(false)
    setLoad(false)
  }
  return (
    <div className='box-border m-0 p-0'>
      <div className='h-8' style={{ backgroundColor: '#455261' }}>
        <ul className='flex ml-5 text-xs tracking-tighter font-bold text-white cursor-pointer'>
          <li className='mr-6 ml-1.5 mt-1.5' onClick={downloadApp}>Tải ứng dụng</li>
          <li className='mr-6 mt-1.5' onClick={customerService}>Chăm sóc khách hàng</li>
          <li className=' mt-1.5' onClick={ordersCheck}>Kiểm tra đơn hàng</li>
        </ul>
      </div>
      <div style={{ zIndex: '100' }} className='absolute'>
        {
          load &&
          <div className='bg-white w-36 h-44 border-2 ml-6 pt-2 pl-1 rounded'>
            <img src='https://media3.scdn.vn/img2/2018/5_23/R842FO.png' alt='QRcode' className='ml-1'/>
            <p className='text-xs text-gray-500 ml-3 mt-2 tracking-tighter font-medium'>Quét để tải ứng dụng</p>
          </div>
        }
        {
          care &&
          <div className='bg-white w-44 h-20 pl-4 pt-3 rounded text-sm font-normal text-gray-600 cursor-pointer'
            style={{ marginLeft: '118px' }}>
            <p className='mb-2.5'>Trung tâm hỗ trợ</p>
            <p>Trả hàng hoàn tiền</p>
          </div>
        }
        {
          check &&
          <div className='rounded w-60 border-1 border-white bg-white shadow-md'
            style={{
              marginLeft: '253px',
              height: '137px'
            }}>
            <p><input placeholder='Nhập mã đơn hàng' className='form-control w-56 h-9 mt-2 mb-2 ml-1.5 text-sm text-gray-600 font-normal' /></p>
            <p><input placeholder='Email / Số điện thoại' className='form-control w-56 h-9 mb-2 ml-1.5 text-sm text-gray-600 font-normal' /></p>
            <button className='w-56 h-8 ml-1.5 text-sm rounded text-white bg-red-600 hover:bg-red-500 font-medium ease-in-out duration-700'>Kiểm tra</button>
          </div>
        }
      </div>
    </div>

  )
}

export default Header