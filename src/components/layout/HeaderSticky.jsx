import React from 'react'
import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg"
import { AiOutlineRight } from 'react-icons/ai'
import { FcGoogle, FcCdLogo } from "react-icons/fc"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal } from 'antd';


const HeaderSticky = () => {
    const quantity = localStorage.getItem("quantity");

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleExit = (e) => {
        console.log(e);
        setOpen(false);
    };
    return (
        <div className='bg-slate-800 h-16 sticky top-0 z-40'>
            <ul className='flex text-white items-center ml-7'>
                <li className='text-3xl italic font-bold mt-2 tracking-tight cursor-pointer'>Sendo</li>
                <li className='ml-6 mt-2.5'>
                    <BiCategory className='text-3xl hover:bg-red-600 w-10 h-6 rounded' />
                </li>
                <li className='mt-2 ml-2'>
                    <input placeholder='Tìm trên Sendo' className='form-control h-10 text-sm pb-2.5 pl-4 font-normal' style={{ paddingRight: '760px' }} />
                </li>
                <li className='mt-2 ml-1'>
                    <button className='btn px-2 py-2 bg-slate-50'>
                        <BsSearch className='text-xl' />
                    </button>
                </li>
                <li className='text-2xl mt-2.5 ml-5 flex'>
                    <Link to={"/about"}> <CgShoppingBag /> </Link>
                    <p className='h-5 w-5 border-red-600 rounded-full border-2 text-xs text-center text-red-500 bg-white'
                        style={{ marginTop: '-10px', marginLeft: '-10px' }}>
                        {quantity ? quantity : 0}
                    </p>
                </li>
                <li className='mt-3 pb-1 ml-4'>
                    <button className='btn bg-slate-50 py-1.25 px-3 font-semibold text-sm'
                        type="primary" onClick={showModal}>
                        Đăng nhập
                    </button>
                    <Modal
                        title=""
                        open={open}
                        onCancel={handleExit}
                        okButtonProps={{ disabled: true }}
                        cancelButtonProps={{ disabled: true }}
                    >
                        <b className='text-2xl mb-40 mt-20'>Xin chào,</b>
                        <p className='mb-3 mt-2 tracking-tighter text-zinc-600'>Đăng nhập hoặc đăng ký tài khoản</p>
                        <input placeholder='Nhập số điện thoại' className='form-control h-11 text-sm mb-3 rounded' style={{width: '430px'}}/>
                        <div className='flex cursor-no-drop'>
                            <button className='flex items-center tracking-tight h-11 border-1 rounded bg-gray-100 hover:bg-gray-50 font-bold text-gray-300'
                            style={{width: '430px'}}>
                                <p className='ml-48 text-base'>Tiếp tục</p>
                                <AiOutlineRight className='ml-2 text-lg font-semibold'/>
                            </button>            
                        </div>
                        <p className='mt-44 text-xs text-zinc-500'>Hoặc thông qua:</p>
                        <div className='flex mt-2 items-center'>
                            <FcGoogle className='w-8 h-8 mr-4'/>
                            <FcCdLogo className='w-10 h-10'/>
                        </div>
                        <p className='text-sm mt-3'>
                            Khi dùng tài khoản Sendo, bạn đã đồng ý  
                            <span className='text-blue-600 ml-1 cursor-pointer'>về điều khoản dịch vụ.</span>
                        </p>
                    </Modal>
                </li>
            </ul>

        </div>
    )
}

export default HeaderSticky