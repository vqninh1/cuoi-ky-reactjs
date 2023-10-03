import React, { useState } from 'react'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { Gi3DHammer } from "react-icons/gi";
import electric_cooker from '../img_homepage/electric_cooker.png'
import surface from '../img_homepage/surface.png'
import innerpot from '../img_homepage/innerpot.png'

const ElmichImagin = () => {
    // Chuyển ảnh và Thay đổi 1/3
    const [imgbutton, setImgbutton] = useState(electric_cooker);

    const [imgnumber, setImgnumber] = useState(1);

    function RightButton() {
        if (imgbutton === electric_cooker) {
            setImgbutton(surface)
            setImgnumber(2)
        }
        else if (imgbutton === surface) {
            setImgbutton(innerpot)
            setImgnumber(3)
        }
        else {
            setImgbutton(innerpot)
        }

    }
    function LeftButton() {
        if (imgbutton === innerpot) {
            setImgbutton(surface)
            setImgnumber(3)
        }
        else if (imgbutton === surface) {
            setImgbutton(electric_cooker)
            setImgnumber(2)
        }
        else {
            setImgbutton(electric_cooker)
            setImgnumber(1)
        }
    }
    //Click vào ảnh to
    const [show, setShow] = useState(false)

    // Click vào ảnh nhỏ
    const [bgfirst, setBgfirst] = useState(false);
    const [bgsecond, setBgSecond] = useState(false);
    const [bgthird, setBgthird] = useState(false);

    function ElectricCooker() {
        setImgbutton(electric_cooker)
        setImgnumber(1)
        setBgfirst(!bgfirst)
        setBgSecond(false)
        setBgthird(false)
    }
    function Surface() {
        setImgbutton(surface)
        setImgnumber(2)
        setBgSecond(!bgsecond)
        setBgfirst(false)
        setBgthird(false)
    }
    function Innerpot() {
        setImgbutton(innerpot)
        setImgnumber(3)
        setBgthird(!bgthird)
        setBgfirst(false)
        setBgSecond(false)
    }

    // Chức năng like
    const [heart, setHeart] = useState(false)
    function LikeHeart() {
        setHeart(!heart)
    }
    return (
        <div className='ml-0  relative'>
            <div className='flex justify-center'>
                <button className='hover:bg-slate-50 h-8 px-2.5 rounded mt-72
                                     text-zinc-200 hover:text-zinc-900 delay-100 ease-in-out duration-700'
                    style={{ marginRight: '-5px' }}
                    onClick={LeftButton}>
                    <AiOutlineLeft />
                </button>
                <img src={imgbutton} alt={imgbutton} className='mt-9 mb-4 cursor-pointer'
                    style={{ width: '480px', height: '480px' }}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)} />
                {show &&
                    <div className='items-center bg-teal-200'>
                        <span className=' py-2 w-56 pl-3 rounded-lg absolute left-44 bottom-40 bg-gray-900 text-white text-sm'>
                            Bấm vào ảnh để xem rõ hơn nhé
                        </span>
                        <p className='bottom-36 absolute'
                            style={{
                                borderWidth: '10px',
                                borderColor: 'rgb(17 24 39) transparent transparent transparent',
                                left: '280px',
                            }}>
                        </p>
                    </div>}
                <button className='hover:bg-slate-50 h-8 p-2 rounded mt-72 ml-0
                                     text-zinc-200 hover:text-zinc-900 delay-100 ease-in-out duration-700'
                    style={{ marginLeft: '-40px' }}
                    onClick={RightButton}>
                    <AiOutlineRight />
                </button>
            </div>

            <ul className='flex'>
                <li className='rounded-full bg-slate-200 w-11 h-6 pl-2.5 ml-7 mr-96'>{imgnumber}/3</li>
                <button className='bg-slate-200 mr-3 p-2 rounded'><FiShare2 /></button>
                <button className='bg-slate-200 p-2 rounded' onClick={LikeHeart}>
                    <AiOutlineHeart style={heart === true ?
                        {color: '#e11d48'} : null} />
                </button>
            </ul>

            <div className='flex mt-3 '>
                <img src="https://media3.scdn.vn/img4/2022/05_31/I1qbSQQnpTMmWOTG68Rq_simg_de2fe0_70x70_maxb.png"
                    alt='Nồi áp suất' className='cursor-pointer ml-6 border-slate-50 hover:border-red-500 border-2 rounded delay-75 ease-in-out duration-700'
                    onClick={ElectricCooker} style={bgfirst === true ? { borderColor: "red" } : null} />
                <img src="https://media3.scdn.vn/img4/2022/05_31/S1Cn4ujZCtvrlIWpaIpe_simg_de2fe0_70x70_maxb.png" alt=""
                    className='cursor-pointer ml-6 border-slate-50 hover:border-red-500 border-2 rounded delay-75 ease-in-out duration-700'
                    onClick={Surface} style={bgsecond === true ? { borderColor: "red" } : null} />
                <img src="https://media3.scdn.vn/img4/2022/05_31/o0rEFXiGJxZ2bXMdrC2u_simg_de2fe0_70x70_maxb.png" alt=""
                    className='cursor-pointer ml-6 border-slate-50 hover:border-red-500 border-2 rounded delay-75 ease-in-out duration-700'
                    onClick={Innerpot} style={bgthird === true ? { borderColor: "red" } : null} />
            </div>
        </div >

    )
}

export default ElmichImagin