import React, { useState, useEffect } from 'react'
import elmich from '../img_homepage/elmich.png'
import mall from '../img_homepage/mall.png'
// import pressure_cooker1 from '../img_homepage/pressure_cooker1.png'
// import pressure_cooker2 from '../img_homepage/pressure_cooker2.png'
// import pot_set from '../img_homepage/pot_set.png'
// import knife from '../img_homepage/knife.png'
// import thermos_bottle from '../img_homepage/thermos_bottle.png'
// import premium_knife from '../img_homepage/premium_knife.png'
import { HiStar } from 'react-icons/hi'
import { TbHeartPlus } from 'react-icons/tb'
import { BsShopWindow } from 'react-icons/bs'
import { LuPhoneCall } from 'react-icons/lu'
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { getPhones } from '../../../service/phone.service'


const SupplierInfo = () => {
    const [phones, setPhones] = useState([]);
    const arr = [
        'http://localhost:3000/static/media/pressure_cooker1.e9ef36d9ea7659835e37.png',

        "http://localhost:3000/static/media/pressure_cooker2.b5c4dee296dde88f2572.png",

        "http://localhost:3000/static/media/pot_set.a0f0fd42bf3a041397d0.png",

        "http://localhost:3000/static/media/knife.7a77246b1d33214ef5ac.png",

        "http://localhost:3000/static/media/thermos_bottle.2a0e197cb7badf354fdc.png",

        "http://localhost:3000/static/media/premium_knife.2fe84313b571859f97ee.png"
    ];
    useEffect((() => {
        getPhones().then((data) => {
            setPhones(data.products)
        })
    }
    ), []);

    const [move, setMove] = useState('-40px');

    function LeftHandle() {
        setMove('-40px');
        console.log(move);
    }
    function RightHandle() {
        setMove('-370px');
        console.log(move);
    }
    return (
        <div className='bg-white rounded-xl' style={{ width: "46.5%" }}>
            <div className='mt-4 ml-8 mr-9 pb-4 border-bottom'>
                <b> Thông tin nhà cung cấp </b>
                <ul className='flex mt-3'>
                    <img src={elmich} alt='elmich' className='w-20 h-20 mr-2' />
                    <div>
                        <b>Elmich Official Store</b>
                        <img src={mall} alt='mall' className='w-9 h-4 mt-1' />
                        <div className='flex items-end'>
                            <p className='text-xs mr-1 mt-1 text-gray-500'>Hà Nội | 4.8</p>
                            <HiStar className='text-yellow-400' />
                        </div>
                    </div>
                </ul>
                <div className='flex mt-3 ml-3 text-center align-middle'>
                    <div className='mr-8'>
                        <b>1 năm</b>
                        <p className='text-xs text-gray-800 mt-1'>Bán ở Sendo</p>
                    </div>
                    <div className='mr-8'>
                        <b>220</b>
                        <p className='text-xs text-gray-800 mt-1'>Sản phẩm</p>
                    </div>
                    <div className='mr-8'>
                        <b>2 ngày</b>
                        <p className='text-xs text-gray-800 mt-1'>Chuẩn bị hàng</p>
                    </div>
                    <div className='mr-8'>
                        <b>--</b>
                        <p className='text-xs text-gray-800 mt-1'>Tỉ lệ phản hồi</p>
                    </div>
                    <div>
                        <b>--</b>
                        <p className='text-xs text-gray-800 mt-1'>Shop phản hồi</p>
                    </div>
                </div>
                <div className='mt-4 flex'>
                    <button className='px-10 py-1.5 bg-zinc-200 hover:bg-zinc-100 rounded mr-2'>
                        <div className='flex items-center'>
                            <TbHeartPlus className='w-7 h-7 mr-2' />
                            <p className='text-base font-medium tracking-tight'>Theo dõi shop</p>
                        </div>
                    </button>
                    <button className='px-16 py-2 bg-zinc-200 hover:bg-zinc-100 rounded'>
                        <div className='flex items-center'>
                            <BsShopWindow className='w-5 h-5 mr-2' />
                            <p className='text-base font-medium tracking-tight'>Vào shop</p>
                        </div>
                    </button>
                    <button className='px-2.5 py-2 ml-2 bg-zinc-200 hover:bg-zinc-100 rounded '>
                        <LuPhoneCall className='w-5 h-5' />
                    </button>
                </div>
            </div>

            <div className='mt-2 ml-8 mr-9 pb-4'>
                <b className='text-sm'>Gợi ý thêm từ Shop</b>
                <div className='mt-3  bg-red-50' style={{
                    height: '330px',
                    width: '490px',
                    padding: '15px',
                    overflowX: 'hidden',
                }}>
                    <ul className='flex rounded'
                        style={{
                            width: '850px',
                            marginLeft: move,
                            transitionDelay: '0.05s',
                        }}>
                        {
                            move === '-370px' ?
                                <button className='hover:bg-slate-100 bg-white px-2 mt-32 p-2.5 rounded
                                     text-zinc-200 hover:text-zinc-900 sticky left-0 delay-100 ease-in-out duration-700'
                                    onClick={LeftHandle}>
                                    <AiOutlineLeft />
                                </button> : null
                        }

                        {
                            phones.map((e, index) => {
                                return (
                                    <li key={e.id} className='ml-6 w-44 h-32 cursor-pointer shadow-inner hover:shadow-2xl'>
                                        <img src={arr[index]} alt={arr[index]} className='w-44 h-32 rounded' />
                                        <div className='bg-white pt-2'>
                                            <p className='h-28 text-xs ml-2 '>{e.description}</p>
                                            <p className='text-red-600 font-semibold text-xs ml-2'>
                                                Discount: -{e.discountPercentage}%
                                            </p>
                                            <p className='text-gray-800 font-semibold text-base ml-2 '>
                                                Price: {e.price}$
                                            </p>
                                        </div>
                                    </li>)
                            })
                        }

                        {
                            move === '-40px' ?
                                <button className='hover:bg-slate-100 bg-white px-2 mt-32 p-2.5 rounded
                                     text-zinc-200 hover:text-zinc-900 sticky right-0 delay-100 ease-in-out duration-700'
                                    onClick={RightHandle}>
                                    <AiOutlineRight />
                                </button> : null
                        }
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default SupplierInfo