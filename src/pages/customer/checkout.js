//reactjs js if checkbox choose this để chọn phương thức thanh toan

import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

class Checkout extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Checkout</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Checkout</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-7 col-lg-8">
								<div className="card">
									<div className="card-body">
									
										{/* Checkout Form */}
										<form action="/booking-success">
										
											{/* Personal Information */}
											<div className="info-widget">
												<h4 className="card-title">Thông tin cá nhân</h4>
												<div className="row">
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Họ và tên đệm</label>
															<input className="form-control" type="text" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Tên</label>
															<input className="form-control" type="text" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Email</label>
															<input className="form-control" type="email" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="form-group card-label">
															<label>Số diện thoại</label>
															<input className="form-control" type="text" />
														</div>
													</div>
													<div className="col-md-12 col-sm-12">
														<div className="form-group card-label">
															<label>Thông tin khác</label>
															<input className="form-control" type="text" />
														</div>
													</div>
												</div>
												<div className="exist-customer">Khách hàng hiện tại? <Link to="#">Click tại đây để đăng nhập</Link></div>
											</div>
											{/* Personal Information */}
											
											<div className="payment-widget">
												<h4 className="card-title">Phương thức thanh toán</h4>
												{/* Momo Payment */}
												<div className="payment-list">
													<label className="payment-radio paypal-option">
														<input type="radio" name="radio" />
														<span className="checkmark"></span>
														Momo
													</label>
												</div>
												{/* Momo Payment */}

												{/* Momo Payment */}
												<div className="payment-list">
													<label className="payment-radio paypal-option">
														<input type="radio" name="radio" />
														<span className="checkmark"></span>
														Thanh toán tại cửa hàng
													</label>
												</div>
												{/* Momo Payment */}

												{/* Terms Accept */}
												<div className="terms-accept">
													<div className="custom-checkbox">
													<input type="checkbox" id="terms_accept" />
													<label>Tôi đã đọc và chấp nhận <Link to="#">Điều khoản &amp; Điều kiện</Link></label>
													</div>
												</div>
												{/* Terms Accept */}
												
												{/* Submit Section */}
												<div className="submit-section mt-4">
                            						<Link to="/booking-success" className="btn btn-primary submit-btn">Xác nhận</Link>
                        						</div>
                        						{/* Submit Section */}

											</div>
										</form>
										{/* Checkout Form */}
										
									</div>
								</div>
								
							</div>
							
							<div className="col-md-5 col-lg-4 theiaStickySidebar">
							
								{/* Booking Summary */}
								<div className="card booking-card">
									<div className="card-header">
										<h4 className="card-title">Tổng</h4>
									</div>
									<div className="card-body">
									
										{/* Booking professor Info */}
										<div className="booking-doc-info">
											<Link to="/stylist-profile" className="booking-doc-img">
												<img src={UserImg} alt="User Image" />
											</Link>
											<div className="booking-info">
												<h4><Link to="/stylist-profile">Urban Mauldin</Link></h4>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">35</span>
												</div>
											</div>
										</div>
										{/* Booking professor Info */}
										
										<div className="booking-summary">
											<div className="booking-item-wrap">
												<ul className="booking-date">
													<li>Ngày <span>16 Nov 2019</span></li>
													<li>Giờ <span>10:00 AM</span></li>
												</ul>
												<ul className="booking-fee">
													<li>Phí dịch vụ <span>$100</span></li>
													<li>Phí đặt lịch <span>$10</span></li>
												</ul>
												<div className="booking-total">
													<ul className="booking-total-list">
														<li>
															<span>Tổng</span>
															<span className="total-cost">$160</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Booking Summary */}
							</div>
						</div>
					</div>
				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { Checkout };