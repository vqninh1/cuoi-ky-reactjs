import React, { useState } from 'react'
import { TbFlag3 } from 'react-icons/tb'
import { BiMessageDetail } from 'react-icons/bi'

const ProductDescription = () => {
    const [current, setCurrent] = useState(false)
    const [color, setColor] = useState(false)
    const [more, setMore] = useState(false)
    function HideCurrent() {
        setCurrent(!current);
        setColor(!color)
        setMore(!more)
    }
    return (
        <div style={{
            width: "61%",
            height: '700px',
            marginLeft: '5px',
            overflowY: 'hidden',
            overflowX: 'hidden',
        }}>
            <div style={{
                marginRight: '-20px',
                height: '700px',
                overflowY: 'auto',
            }}>
                <div className='rounded-xl ml-6 bg-white'>
                    <div className='ml-8 mr-9 pb-4' >
                        <p className='text-gray-800 font-bold mb-3 pt-4'>Mô tả sản phẩm</p>
                        <p className='leading-4 text-sm font-medium text-gray-700' >Giới thiệu sản phẩm  Đặc điểm nổi bật:- Dễ dàng sử dụng với hệ thống điều khiển cơ, tiện lợi với chương trình nấu đã được cài đặt sẵn. - Tiện lợi với khe dựng đứng nắp trên quai nồi - An toàn tuyệt đối cho sức khỏe với lòng nồi được làm từ nhôm nguyê...</p>
                        <p className='text-gray-800 font-bold text-sm mt-3'>Thông tin cơ bản</p>
                        <div className='mt-3'>
                            <p className='bg-gray-100 h-11 rounded-t-lg pt-2 pl-3 text-slate-500'>
                                <span className='mr-40'>Dung tích</span>
                                <span>4L - 5L</span>
                            </p>
                            <p className='h-11 pt-2 pl-3 text-slate-500	'
                                style={color === false ? {
                                    color: 'rgb(100 116 139)',
                                    boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
                                    backgroundColor: 'rgb(250 250 250)',
                                } : null}>
                                <span className='mr-32'>Hãng sản xuất</span>
                                <span>ELMICH</span>
                            </p>
                            <p className='bg-gray-100 h-11 pt-2 pl-3 text-slate-500'
                                style={color === false ? {
                                    backgroundColor: 'rgb(249 250 251 / var(--tw-bg-opacity))',
                                    color: 'rgb(228 228 231)',
                                    boxShadow: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)'
                                } : null}>
                                <span className='mr-40'>Kiểu nắp</span>
                                <span className='ml-2'>Nắp gài</span>
                            </p>
                            {
                                (current === true) ?
                                    <div className='text-slate-500'>
                                        <p className='h-11 pt-2 pl-3'>
                                            <span className='mr-40'>Kiểu nồi</span>
                                            <span className='ml-3'>Nồi thông thường</span>
                                        </p>
                                        <p className='bg-gray-100 h-11 rounded-b-lg pt-2 pl-3' style={{ display: current }}>
                                            <span className='mr-44'>Xuất xứ</span>
                                            <span>Trung Quốc</span>
                                        </p>
                                    </div> : null}
                        </div>
                        {
                            (current === true) ?
                                <div>
                                    <p className='text-gray-800 font-bold text-sm mt-3 mb-2'>Chi tiết sản phẩm</p>
                                    <p className='leading-5 text-sm font-medium text-gray-800' >Giới thiệu sản phẩm </p>
                                    <p className='leading-5 text-sm font-medium text-gray-800' >Đặc điểm nổi bật: </p>
                                    <ul className='list-none text-sm text-gray-700 font-medium leading-4'>
                                        <li>- Dễ dàng sử dụng với hệ thống điều khiển cơ, tiện lợi với chương trình nấu đã được cài đặt sẵn.</li>
                                        <li>- Tiện lợi với khe dựng đứng nắp trên quai nồi</li>
                                        <li> - An toàn tuyệt đối cho sức khỏe với lòng nồi được làm từ nhôm nguyên chất, sử dụng chất chống dính cao cấp của Whitford</li>
                                        <li> - Đa chức năng : Nấu cơm, nấu súp, nấu cháo, nấu đậu, làm bánh, hầm gân, hấp cá…</li>
                                        <li> - Dễ dàng vệ sinh và vận hành với các chi tiết có thể tháo rời</li>
                                        <li>- Sản phẩm đạt tiêu chuẩn chất lượng châu Âu. Được sản xuất và giám sát bởi Tập đoàn Elmich Cộng hòa Séc</li>
                                    </ul>
                                    <p className='leading-5 text-sm font-medium text-gray-800 mt-1' >Thông số kỹ thuật:</p>
                                    <ul className='list-none text-sm text-gray-800 font-medium'>
                                        <li>- Thương hiệu: Elmich</li>
                                        <li>- Xuất xứ: Trung Quốc </li>
                                        <li>- Kích thước: 36 x 36 x 41 cm</li>
                                        <li>- Chất liệu: Inox </li>
                                    </ul>
                                    <p className='leading-5 text-sm font-medium text-gray-800 mt-1' >Thông tin thương hiệu</p>
                                    <p className='tracking-tighter text-sm text-slate-800 font-medium'>Phát huy thế mạnh về sản xuất mặt hàng gia dụng cao cấp xuất xứ từ Châu Âu, Elmich chính thức có mặt tại Việt Nam vào năm 2011 và nhanh chóng xây dựng được mạng lưới phân phối với quy mô lớn trên toàn quốc.</p>
                                    <p className=' text-sm text-gray-800 font-medium'>Mang đến cho người tiêu dùng Việt những sản phẩm chất lượng đạt chuẩn Châu Âu, là sự kết hợp hoàn hảo giữa 3 yếu tố: PHONG CÁCH – CHẤT LƯỢNG – SỰ HOÀN HẢO, tập đoàn Elmich ghi điểm tuyệt đối trong lòng các bà nội trợ. Elmich tiếp tục thực hiện mục tiêu khẳng định, duy trì vị thế dẫn đầu ngành hàng đồ gia dụng phân khúc trung và cao cấp. Qua đó, khơi dậy đam mê và truyền cảm hứng nấu nướng trong mỗi gian bếp hiện đại. </p>
                                </div> : null}
                        <button
                            className='h-10 rounded border-1 bg-zinc-300 hover:bg-zinc-200 delay-75 ease-in-out duration-700 mt-3'
                            style={{
                                width: '100%',
                                fontWeight: '500',
                                fontSize: '15px'
                            }}
                            onClick={HideCurrent}>
                            {(more === true)? 'Thu gọn' : 'Xem thêm'}
                        </button>
                    </div>
                </div>
                <div className='rounded-xl ml-6 bg-white mt-4'>
                    <div className='ml-8 mr-9 pb-4' >
                        <img src="https://web-static.scdn.vn/sendo-communication-rating/ef5bd2e-web/media/rating-empty.f56ae9e22805ed6a864d1a540bea0947.svg"
                            className='ml-64' />
                        <p className='ml-52 leading-5 text-gray-900 font-semibold text-base'>Sản phẩm chưa có đánh giá</p>
                        <p className='ml-24 leading-5 text-gray-400 font-medium text-sm'>Chọn mua sản phẩm để là người đầu tiên đánh giá sản phẩm này.</p>
                    </div>
                </div>
                <div className='rounded-xl ml-6 bg-white mt-4'>
                    <div className='ml-8 mr-9 pb-4' >
                        <div className='flex justify-between items-center'>
                            <p className='text-gray-800 font-bold mb-2 pt-4'>Mô tả sản phẩm</p>
                            <button className=' border-1 p-2 mt-4 rounded bg-zinc-300 hover:bg-zinc-200 delay-75'>
                                <TbFlag3 />
                            </button>
                        </div>
                        <p className='text-gray-700 text-base'>Bạn có thắc mắc cần giải đáp?</p>
                        <button
                            className='h-10 rounded border-1 bg-zinc-300 hover:bg-zinc-200 delay-75 ease-in-out duration-700 mt-3'
                            style={{
                                width: '100%',
                                fontWeight: '500',
                                fontSize: '15px'
                            }}>
                            <div className='flex items-center justify-center'>
                                <BiMessageDetail className='mr-1 w-6 h-6 text-gray-700' />
                                <p>Hỏi shop ngay</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription