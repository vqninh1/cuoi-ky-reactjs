import React from 'react'
import bag_footer from '../image_footer/bag_footer.png'
import credibility from '../image_footer/credibility.png'
import convenience from '../image_footer/convenience.png'
import economy from '../image_footer/economy.png'
import appstore from '../image_footer/appstore.png'
import googleplay from '../image_footer/googleplay.png'
import huawei from '../image_footer/huawei.png'
import already_registered from '../image_footer/already_registered.png'
import genuine from '../image_footer/genuine.png'

const Footer = () => {
  return (
    <div >
      <div className='bg-white h-96 ml-5 mt-4' style={{ width: '96.5%', height: '180px' }}>
        <ul className='flex justify-start mr-64 ml-5' style={{ width: '100%' }}>
          <li className='w-52 h-40 text-center mr-28 cursor-pointer' >
            <img src={bag_footer} alt={bag_footer} className='w-32 h-24 ml-9 mb-1' />
            <b className='text-xs'>Siêu nhiều hàng tốt</b>
            <p className='text-xs text-gray-500'>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</p>
          </li>
          <li className='w-48 h-40 text-center mr-32 cursor-pointer' >
            <img src={credibility} alt={credibility} className='w-32 h-20 ml-8 mb-3' />
            <b className='text-xs'>Siêu yên tâm</b>
            <p className='text-xs text-gray-500'>Miễn phí đổi trả 48h</p>
          </li>
          <li className='w-48 h-40 text-center mr-28 cursor-pointer' >
            <img src={convenience} alt={convenience} className='w-32 h-24 ml-8 mb-0.5' />
            <b className='text-xs'>Siêu tiện lợi</b>
            <p className='text-xs text-gray-500'>Mang thế gới mua sắm của Sendo trong tầm tay của bạn</p>
          </li>
          <li className='w-52 h-40 text-center cursor-pointer' >
            <img src={economy} alt={economy} className='w-32 h-20 ml-10 mb-3' />
            <b className='text-xs'>Siêu tiết kiệm</b>
            <p className='text-xs text-gray-500'>Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi</p>
          </li>
        </ul>
      </div>
      <div className='bg-slate-50 flex justify-around h-56 ml-0'>
        <div className='text-sm mt-4 leading-6' style={{ marginLeft: '-25px' }}>
          <b className='text-xs'>VỀ CHÚNG TÔI</b>
          <p className='mt-2'>Giới thiệu Sendo.vn</p>
          <p>Giới thiệu SenMall</p>
          <p>Quy chế hoạt động</p>
          <p>Chính sách bảo mật</p>
          <p>Giao hàng và Nhận hàng</p>
        </div>
        <div className='text-sm mt-4 leading-6'>
          <b className='text-xs'>DÀNH CHO NGƯỜI MUA</b>
          <p className='mt-2'>Giải quyết khiếu nại</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách đổi trả</p>
          <p>Chăm sóc khách hàng</p>
          <p>Nạp tiền điện thoại</p>
        </div>
        <div className='text-sm mt-4 leading-6'>
          <b className='text-xs'>DÀNH CHO NGƯỜI BÁN</b>
          <p className='mt-2'>Quy định đối với người bán</p>
          <p>Chính sách bán hàng</p>
          <p>Hệ thống tiêu chí kiểm duyệt</p>
          <p>Mở shop trên Sendo</p>
        </div>
        <div className='text-sm mt-4'>
          <b className='text-xs'>TẢI ỨNG DỤNG SENDO</b>
          <p className='mt-2 w-56'>Mang thế giới mua sắm của Sendo trong tầm tay bạn</p>
          <div className='flex mt-3'>
            <div className='mr-2 cursor-pointer'>
              <img src={appstore} alt={appstore} className='w-32 h-11 mb-2' />
              <img src={huawei} alt={huawei} className='w-32 h-11' />
            </div>
            <img src={googleplay} alt={googleplay} className='w-32 h-11 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='flex h-64' style={{ backgroundColor: '#27343e' }}>
        <div className='text-white text-xs mt-4 ml-7' style={{ width: '41%' }}>
          <b>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</b>
          <p className='mt-2.5'>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
          <p className='mt-2.5'>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
          <p className='mt-2.5'>Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
          <p className='mt-2.5'>Email: lienhe@sendo.vn</p>
          <div className='flex mt-2.5 cursor-pointer'>
            <img src={already_registered} alt={already_registered} className='w-28 h-9 mr-4' />
            <img src={genuine} alt={genuine} className='w-28 h-9' />
          </div>
        </div>
        <div className='text-white mt-3 ml-44 h-72' style={{ width: '59%' }}>
          <b className='text-xs'>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</b>
          <div className='flex mt-2.5'>
            <input placeholder='Email của bạn là' className='form-control h-8 text-sm'
              style={{width: '334px'}} />
            <button className='text-sm bg-red-600 hover:bg-red-500 rounded font-medium w-28 ml-1 text-white cursor-pointer'>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer