import React, { useState } from 'react'
import elmich_small from '../about/img_about/elmich_small.png'
import pressure_pot_footer from '../about/img_about/pressure_pot_footer.png'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BiMessageDetail } from 'react-icons/bi'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'
import { RiCodeBoxLine } from 'react-icons/ri'
import { FaChevronRight } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { NumericFormat } from 'react-number-format';

const About = () => {
  const localQuantity = localStorage.getItem("quantity");
  const [quantity, setQuantity] = useState(localQuantity);
  const [totalPrice, setTotalPrice] = useState(quantity * 2250000);

  if (localQuantity) {
    localStorage.setItem("quantity", quantity);
  }

  const handleChange = (e) => {
    if (e.target.value < 1) {
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
    } else {
      // console.log(typeof(e.target.value), e.target.value);
      setQuantity(parseInt(e.target.value));
      setTotalPrice(parseInt(e.target.value) * 2250000);
      // localStorage.setItem("quantity", quantity);
    }
  }

  const increase = () => {
    setQuantity(parseInt(quantity) + 1);
    setTotalPrice((quantity + 1) * 2250000);

    // localStorage.setItem("quantity", quantity);
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
      setTotalPrice((quantity - 1) * 2250000);
      // localStorage.setItem("quantity", quantity);
    }
  }
  return (
    <div className='bg-slate-100 rounded-sm' style={{ height: "800px" }}>
      {
        localQuantity ? (
          <>
            <div className='flex pt-4 ml-6'>
              <h1 className='font-bold text-xl mr-3 tracking-tight'>Giỏ hàng của bạn (2)</h1>
              <button className='text-gray-600 bg-white font-bold w-16 h-8 rounded text-sm'>
                Sửa
              </button>
            </div>
            <div className='flex mt-3'>
              <div className=' ml-6 bg-white' style={{ width: "64%" }}>
                <div className='rounded pt-2 ml-1'>
                  <div className='flex justify-between'>
                    <div className='flex items-center'>
                      <img src={elmich_small} alt={elmich_small} className='w-12 h-7' />
                      <b className='text-sm mr-1'>Elmich Official Store</b>
                      <HiOutlineMailOpen />
                    </div>
                    <div className='flex mr-5 text-gray-600 font-bold text-sm items-center'>
                      <BiMessageDetail className='w-5 h-4' />
                      <p className='ml-1.5'>Chat với Shop</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-start mt-4 '>
                    <p className='border-2 w-4 h-4 border-gray-500 rounded-sm ml-4'></p>
                    <img src={pressure_pot_footer} alt={pressure_pot_footer} className='w-20 h-20 ml-3' />
                    <div style={{ marginLeft: '7px', marginTop: '-40px', marginRight: '20px' }}>
                      <p className='font-bold border-1 rounded-full text-center text-xs w-32 h-6 pt-0.5 text-blue-800 bg-blue-100'>
                        Mua trước trả sau
                      </p>
                      <p className='text-sm text-gray-500 mt-1 font-medium'>Nồi áp suất Elmich PCE-1802 (5L)</p>
                    </div>
                    <p className='ml-36 font-bold text-gray-700' style={{ marginTop: '-70px' }}>2.250.000đ</p>
                    <div style={{ marginTop: '-60px', marginLeft: '38px' }}>
                      <button onClick={() => decrease()} className='bg-gray-200 hover:bg-slate-100 rounded p-2 mr-1'>
                        <AiOutlineMinus />
                      </button>
                      <input type='number' className='border-1 h-8 w-10 pt-0.5 border-gray-200 rounded text-center'
                        onChange={(e) => handleChange(e)} min={1} value={quantity} />
                      <button onClick={() => increase()} className='bg-gray-200 hover:bg-slate-100 rounded p-2 ml-1'>
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className='flex ml-11' style={{ marginTop: '-65px' }}>
                      <AiOutlineHeart className='mr-6' />
                      <RiDeleteBinLine />
                    </div>
                  </div>
                  <div className='flex mt-3 ml-2.5 pb-2.5'>
                    <p className='w-10 h-7'>
                      <RiCodeBoxLine className='mr-3 w-8 h-6 text-gray-500' />
                    </p>
                    <p className='text-gray-600 text-sm font-semibold'>Mã giảm giá của Shop</p>
                    <p className='w-10 h-7' style={{ marginTop: '2px' }}>
                      <FaChevronRight className='ml-3 w-5 h-4 text-gray-500 font-thin' />
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-sm ml-5' style={{ width: "32%" }}>
                <div className='mt-3 flex border-b-2 border-gray-100'
                  style={{
                    width: '100%',
                    paddingBottom: '12px',
                  }}>
                  <p className='w-10 h-7 ml-3'>
                    <RiCodeBoxLine className=' w-8 h-6 text-gray-500' />
                  </p>
                  <b className='text-sm text-gray-800' style={{ marginLeft: '-5px' }}>Mã ưu đãi Sendo</b>
                  <p className='text-blue-600 text-sm ml-40'>Chọn/nhập mã</p>
                </div>
                <div className='flex ml-4 mt-2.5'>
                  <p className='mr-56 text-sm font-medium'>Tạm tính: </p>
                  <p className='text-xl font-bold'>
                    <NumericFormat
                      value={totalPrice}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}/>
                    đ
                  </p>
                </div>
                <button
                  className='h-12 w-96 rounded font-bold shadow-inner text-white bg-red-600 hover:bg-red-400 
            mt-3 ml-6 px-24 delay-75 ease-out-in duration-700'
                  style={{
                    fontWeight: '500',
                    fontSize: '15px',
                  }}>
                  Mua ngay
                </button>
              </div>
            </div>
          </>
        ) : (
          <img src="https://media3.scdn.vn/img4/2021/02_02/JikA6AqzCC55LcNmcHjZ.png" alt="" />
        )
      }

    </div>
  )
}

export default About