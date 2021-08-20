import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import StylistImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faColumns, faComments, faFileAlt, faHourglassStart, faLock, faShareAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class StylistSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-doc-img">
                                <img src={StylistImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>Urban Mauldin</h3>
                                
                                <div className="customer-details">
                                    <h5 className="mb-0">Glitter Nail Art</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/stylist-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/appointments">
                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                        <span>Lịch hẹn</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-customers">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Khách hàng của tôi</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schedule-timings">
                                        <FontAwesomeIcon icon={faHourglassStart} />
                                        <span>Lên lịch</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/invoices">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Hóa đơn</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/reviews">
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>Đánh giá</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/chat-stylist">
                                        <FontAwesomeIcon icon={faComments} />
                                        <span>Trò chuyện</span>
                                        <small className="unread-msg">23</small>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/stylist-profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Cài đặt cấu hình</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/stylist-change-password">
                                        <FontAwesomeIcon icon={faLock} />
                                        <span>Thay đổi mật khẩu</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        <span>Đăng xuất</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Profile Sidebar */}
            </div>
        )
    }
}
export { StylistSidebar };