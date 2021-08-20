import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import StylistThumb from '../../assets/img/stylists/stylist-thumb-01.jpg';
import StylistThumb1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import StylistThumb2 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import StylistThumb3 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import StylistThumb4 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import SpecialityImg from '../../assets/img/specialities/specialities-05.png';
import SpecialityImg1 from '../../assets/img/specialities/specialities-04.png';
import SpecialityImg2 from '../../assets/img/specialities/specialities-01.png';
import SpecialityImg3 from '../../assets/img/specialities/specialities-03.png';
import GalleryImg1 from '../../assets/img/features/feature-01.jpg';
import GalleryImg2 from '../../assets/img/features/feature-02.jpg';
import GalleryImg3 from '../../assets/img/features/feature-03.jpg';
import GalleryImg4 from '../../assets/img/features/feature-04.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faMapMarkerAlt, faMoneyBillAlt, faStar, faThumbsUp, faComments } from '@fortawesome/fontawesome-free-solid';

class BookingStylist extends React.Component {

    render() {
        return (
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Booking Stylist</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Booking Stylist</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}
                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                {/* Professor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link to="/stylist-profile">
                                                        <img src={StylistThumb3} className="img-fluid" alt="User Image" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
                                                    <div className="rating">
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Kinh nghiệm: 6 năm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                    <Link to="/checkout" className="apt-btn">Đặt lịch hẹn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Professor Widget */}
                                {/* Professor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link to="/stylist-profile">
                                                        <img src={StylistThumb3} className="img-fluid" alt="User Image" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
                                                    <div className="rating">
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Kinh nghiệm: 6 năm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                    <Link to="/checkout" className="apt-btn">Đặt lịch hẹn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Professor Widget */}
                                {/* Professor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link to="/stylist-profile">
                                                        <img src={StylistThumb3} className="img-fluid" alt="User Image" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
                                                    <div className="rating">
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Kinh nghiệm: 6 năm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                    <Link to="/checkout" className="apt-btn">Đặt lịch hẹn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Professor Widget */}
                                {/* Professor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link to="/stylist-profile">
                                                        <img src={StylistThumb3} className="img-fluid" alt="User Image" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
                                                    <div className="rating">
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Kinh nghiệm: 6 năm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                    <Link to="/checkout" className="apt-btn">Đặt lịch hẹn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Professor Widget */}
                                {/* Professor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stylist-widget">
                                            <div className="doc-info-left">
                                                <div className="stylist-img">
                                                    <Link to="/stylist-profile">
                                                        <img src={StylistThumb3} className="img-fluid" alt="User Image" />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
                                                    <div className="rating">
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} className="filled" />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <div className="clini-infos">
                                                            <ul>
                                                                <li>Kinh nghiệm: 6 năm</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
                                                    <Link to="/checkout" className="apt-btn">Đặt lịch hẹn</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Professor Widget */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { BookingStylist };