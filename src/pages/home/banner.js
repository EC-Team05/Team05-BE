import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import BannerImg1 from '../../assets/img/banner-1.jpg';
import BannerImg2 from '../../assets/img/banner-2.jpg';

class Banner extends React.Component {
    render() {
        return (
            <div>
                {/* Home Banner */}
                <section className="section-search">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="banner-wrapper">
                                    <div className="banner-header">
                                        <p>Hãy chọn nhà tạo mẫu và tạo cuộc hẹn</p>
                                        <h1>Chăm sóc và nâng niu đôi tay bạn với những dịch vụ tốt nhất</h1>
                                        <Link to="/booking" className="btn-pink">ĐẶT LỊCH HẸN</Link>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-md-12 col-lg-4">
                                <div className="banimg-sec">
                                    <div className="circle"></div>
                                    <div className="circle1"></div>
                                    <img src={BannerImg2} className="banner-bottom" alt="circle2" />
                                  <img src={BannerImg1} className="banner-top" alt="circle1" />
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </section>
                {/* Home Banner */}
            </div>
        )
    }
}
export { Banner };