import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/fontawesome-free-solid';

class BookingSuccess extends React.Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Đặt lịch</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Đặt lịch</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content success-page-cont">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-6">

                                {/* Success Card */}
                                <div className="card success-card">
                                    <div className="card-body">
                                        <div className="success-cont">
                                            <FontAwesomeIcon icon={faCheck} />
                                            <h3>Đặt lịch hẹn thành công!</h3>
                                            <p>Quý khách vui lòng chờ nhân viên xác nhận lịch hẹn</p>
                                            <p>Trong thời gian tối đa 1 tiếng tính từ thời gian đặt lịch hẹn,
                                                nhân viên sẽ kiểm tra và cập nhật tình trạng lịch hẹn của quý khách.</p>
                                            <p>(Quý khách vui lòng kiểm tra tình trạng lịch hẹn ở mục Lịch hẹn trong trang DashBoard cá nhân).</p>
                                            <Link to="/invoice-view" className="btn btn-primary view-inv-btn">Xem hóa đơn</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Success Card */}

                            </div>
                        </div>

                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BookingSuccess };