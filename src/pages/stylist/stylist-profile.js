import React from 'react';
import { Link } from 'react-router-dom'
import { Modal, Tabs, Tab } from 'react-bootstrap';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import SplImg from '../../assets/img/specialities/specialities-05.png';
import GalleryImg1 from '../../assets/img/features/feature-01.jpg';
import GalleryImg2 from '../../assets/img/features/feature-02.jpg';
import GalleryImg3 from '../../assets/img/features/feature-03.jpg';
import GalleryImg4 from '../../assets/img/features/feature-04.jpg';
import CustomerImg from '../../assets/img/customers/customer.jpg';
import CustomerImg1 from '../../assets/img/customers/customer1.jpg';
import CustomerImg2 from '../../assets/img/customers/customer2.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faCommentAlt, faMapMarkerAlt, faMoneyBillAlt, faStar, faThumbsUp, faPhone, faPhoneSlash, faVideo, faThumbsDown, faReply } from '@fortawesome/fontawesome-free-solid';

class StylistProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			showModalVideo: false
		}
	}

	openVoiceModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	openModal = () => {
		this.setState({
			showModalVideo: !this.state.showModalVideo
		})
	}
	
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
										<li className="breadcrumb-item active" aria-current="page">Hồ sơ nhà tạo mẫu</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Hồ sơ nhà tạo mẫu</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content professor-pro">
					<div className="container">
						{/* Professor Widget */}
						<div className="card">
							<div className="card-body">
								<div className="stylist-widget">
									<div className="doc-info-left">
										<div className="stylist-img">
											<img src={UserImg} className="img-fluid" alt="User Image" />
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name">Urban Mauldin</h4>
											<p className="doc-speciality">Glitter Nail Art</p>
											<div className="rating">
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} className="filled" />
												<FontAwesomeIcon icon={faStar} />
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="clinic-details">
												<ul className="clinic-gallery">
													<li>
														<a href={GalleryImg1} data-fancybox="gallery">
															<img src={GalleryImg1} alt="Feature" />
														</a>
													</li>
													<li>
														<a href={GalleryImg2} data-fancybox="gallery">
															<img  src={GalleryImg2} alt="Feature Image" />
														</a>
													</li>
													<li>
														<a href={GalleryImg3} data-fancybox="gallery">
															<img src={GalleryImg3} alt="Feature" />
														</a>
													</li>
													<li>
														<a href={GalleryImg4} data-fancybox="gallery">
															<img src={GalleryImg4} alt="Feature" />
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="doc-info-right">
										<div className="clini-infos">
											<ul>
												<li><FontAwesomeIcon icon={faThumbsUp} /> 99%</li>
												<li><FontAwesomeIcon icon={faComment} /> 35 Feedback</li>
											</ul>
										</div>
										<div className="stylist-action">
											<Link to="#" className="btn btn-white fav-btn">
												<FontAwesomeIcon icon={faBookmark} />
											</Link>
											<Link to="/chat" className="btn btn-white msg-btn">
												<FontAwesomeIcon icon={faCommentAlt} />
											</Link>

											<a className="btn btn-white call-btn">
												<FontAwesomeIcon icon={faPhone} onClick={()=>this.openVoiceModal()} />
											</a>

											{/* Voice Call Modal */}
											<Modal show={this.state.showModal} className="call-modal">
												<Modal.Body>
													{/* Outgoing Call */}
													<div className="call-box incoming-box">
														<div className="call-wrapper">
															<div className="call-inner">
																<div className="call-user">
																	<img alt="User Image" src={UserImg} className="call-avatar" />
																	<h4>Prof. Darren Elder</h4>
																	<span>Connecting...</span>
																</div>							
																<div className="call-items">
																	<Link to="#" className="btn call-item call-end" onClick={()=>this.openVoiceModal()}>
																		<FontAwesomeIcon icon ={faPhoneSlash} />
																	</Link>
																	<Link to="/voice-call" className="btn call-item call-start">
																		<FontAwesomeIcon icon ={faPhone} />
																	</Link>
																</div>
															</div>
														</div>
													</div>
													{/* Outgoing Call */}
												</Modal.Body>											
											</Modal>
											{/* Voice Call Modal */}

											<a className="btn btn-white call-item call-end">
												<FontAwesomeIcon icon={faVideo} onClick={()=>this.openModal()} />
											</a>

											{/* Video Call Modal */}
											<Modal show={this.state.showModalVideo} className="call-modal">
												<Modal.Body>
													{/* Outgoing Call */}
													<div className="call-box incoming-box">
														<div className="call-wrapper">
															<div className="call-inner">
																<div className="call-user">
																	<img alt="User Image" src={UserImg} className="call-avatar" />
																	<h4>Prof. Darren Elder</h4>
																	<span>Connecting...</span>
																</div>							
																<div className="call-items">
																	<Link to="#" className="btn call-item call-end" onClick={()=>this.openModal()}>
																		<FontAwesomeIcon icon ={faPhoneSlash} />
																	</Link>
																	<Link to="/voice-call" className="btn call-item call-start">
																		<FontAwesomeIcon icon ={faVideo} />
																	</Link>
																</div>
															</div>
														</div>
													</div>
													{/* Outgoing Call */}
												</Modal.Body>											
											</Modal>
											{/* Video Call Modal */}
										</div>
										<div className="clinic-booking">
											<Link to="/booking" className="apt-btn">Đặt lịch hẹn</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Professor Widget */}

						{/* Professor Details Tab */}
						<div className="card">
							<div className="card-body pt-0">
								<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
									<Tab eventKey="overview" title="Tổng quan">
										<div className="row">
											<div className="col-md-12 col-lg-9">
											
												{/* About Details */}
												<div className="widget about-widget">
													<h4 className="widget-title">Về tôi</h4>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>
												{/* About Details */}
												
												{/* Experience Details */}
												<div className="widget experience-widget">
													<h4 className="widget-title">Kinh nghiệm làm việc</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Roose Nails Beauty Clinic</Link>
																		<span className="time">2010 - Present (5 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Salon Next Beauty Parlour</Link>
																		<span className="time">2007 - 2010 (3 years)</span>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<Link to="#/" className="name">Dream Nails Center</Link>
																		<span className="time">2005 - 2007 (2 years)</span>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												{/* Experience Details */}
									
												{/* Awards Details */}
												<div className="widget awards-widget">
													<h4 className="widget-title">Giải thưởng</h4>
													<div className="experience-box">
														<ul className="experience-list">
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">July 2020</p>
																		<h4 className="exp-title">Social Media Hair & Beauty Awards</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">March 2011</p>
																		<h4 className="exp-title">The Scratch Stars Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
															<li>
																<div className="experience-user">
																	<div className="before-circle"></div>
																</div>
																<div className="experience-content">
																	<div className="timeline-content">
																		<p className="exp-year">May 2008</p>
																		<h4 className="exp-title"> Scottish Nail Art & Glitter Award</h4>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
												{/* Awards Details */}
											</div>
										</div>
									</Tab>
									
									<Tab eventKey="reviews" title="Đánh giá">
										{/* Review Listing */}
										<div className="widget review-listing">
											<ul className="comments-list">
											
												{/* Comment List */}
												<li>
													<div className="comment">
														<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg} />
														<div className="comment-body">
															<div className="meta-data">
																<span className="comment-author">Gordan Whelan</span>
																<span className="comment-date">Đánh giá 2 ngày trước</span>
																<div className="review-count rating">
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} />
																</div>
															</div>
															<p className="recommended"><FontAwesomeIcon icon={faThumbsUp} /> Tôi đã giới thiệu nhà tạo mẫu này.</p>
															<p className="comment-content">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																Ut enim ad minim veniam, quis nostrud exercitation.
																Curabitur non nulla sit amet nisl tempus
															</p>
															<div className="comment-reply">
																<Link to="#" className="comment-btn">
																	<FontAwesomeIcon icon={faReply} /> Trả lời
																</Link>
															<p className="recommend-btn">
																<span>Giới thiệu?</span>
																<Link to="#" className="like-btn">
																	<FontAwesomeIcon icon={faThumbsUp} /> Yes
																</Link>
																<Link to="#" className="dislike-btn">
																	<FontAwesomeIcon icon={faThumbsDown} /> No
																</Link>
															</p>
															</div>
														</div>
													</div>
													
													{/* Comment Reply */}
													<ul className="comments-reply">
														<li>
															<div className="comment">
																<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg1} />
																<div className="comment-body">
																	<div className="meta-data">
																		<span className="comment-author">Terilynn Toler</span>
																		<span className="comment-date">Đánh giá 3 ngày trước</span>
																		<div className="review-count rating">
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} className="filled" />
																			<FontAwesomeIcon icon={faStar} />
																		</div>
																	</div>
																	<p className="comment-content">
																		Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																		Ut enim ad minim veniam.
																		Curabitur non nulla sit amet nisl tempus
																	</p>
																	<div className="comment-reply">
																		<Link to="#" className="comment-btn">
																			<FontAwesomeIcon icon={faReply} /> Trả lời
																		</Link>
																		<p className="recommend-btn">
																			<span>Giới thiệu?</span>
																			<Link to="#" className="like-btn">
																				<FontAwesomeIcon icon={faThumbsUp} /> Yes
																			</Link>
																			<Link to="#" className="dislike-btn">
																				<FontAwesomeIcon icon={faThumbsDown} /> No
																			</Link>
																		</p>
																	</div>
																</div>
															</div>
														</li>
													</ul>
													{/* Comment Reply */}
													
												</li>
												{/* Comment List */}
												
												{/* Comment List */}
												<li>
													<div className="comment">
														<img className="avatar avatar-sm rounded-circle" alt="User Image" src={CustomerImg2} />
														<div className="comment-body">
															<div className="meta-data">
																<span className="comment-author">Achav Ryder</span>
																<span className="comment-date">Đánh giá 4 ngày trước</span>
																<div className="review-count rating">
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} className="filled" />
																	<FontAwesomeIcon icon={faStar} />
																</div>
															</div>
															<p className="comment-content">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																Ut enim ad minim veniam, quis nostrud exercitation.
																Curabitur non nulla sit amet nisl tempus
															</p>
															<div className="comment-reply">
																<Link to="#" className="comment-btn">
																	<FontAwesomeIcon icon={faReply} /> Trả lời
																</Link>
																<p className="recommend-btn">
																	<span>Giới thiệu?</span>
																	<Link to="#" className="like-btn">
																	<FontAwesomeIcon icon={faThumbsUp} /> Yes
																	</Link>
																	<Link to="#" className="dislike-btn">
																		<FontAwesomeIcon icon={faThumbsDown} /> No
																	</Link>
																</p>
															</div>
														</div>
													</div>
												</li>
												{/* Comment List */}
												
											</ul>
											
											{/* Show All */}
											<div className="all-feedback text-center">
												<Link to="#" className="btn btn-primary btn-sm">
													Xem tất cả phản hồi <strong>(167)</strong>
												</Link>
											</div>
											{/* Show All */}
											
										</div>
										{/* Review Listing */}

										{/* Write Review */}
										<div className="write-review">
											<h4>Viết đánh giá về <strong>Urban Mauldin</strong></h4>
											
											{/* Write Review Form */}
											<form>
												<div className="form-group">
													<label>Đánh giá</label>
													<div className="star-rating">
														<input id="star-5" type="radio" name="rating" value="star-5" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-4" type="radio" name="rating" value="star-4" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-3" type="radio" name="rating" value="star-3" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-2" type="radio" name="rating" value="star-2" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
														<input id="star-1" type="radio" name="rating" value="star-1" />
														<label>
															<FontAwesomeIcon icon={faStar} />
														</label>
													</div>
												</div>
												<div className="form-group">
													<div className="terms-accept">
														<div className="custom-checkbox">
														<input type="checkbox" id="terms_accept" />
														<label>Tôi đã đọc và chấp nhận <Link to="#">Điều khoản &amp; Điều kiện</Link></label>
														</div>
													</div>
												</div>
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Đánh giá</button>
												</div>
											</form>
											{/* Write Review Form */}
											
										</div>
										{/* Write Review */}
									
									</Tab>
									<Tab eventKey="business-hours" title="Giờ làm việc">
										<div className="row">
											<div className="col-md-6 offset-md-3">
											
												{/* Business Hours Widget */}
												<div className="widget business-widget">
													<div className="widget-content">
														<div className="listing-hours">
															<div className="listing-day current">
																<div className="day">Hôm nay <span>5 / 10 / 2019</span></div>
																<div className="time-items">
																	<span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 2</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 3</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 4</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 5</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 6</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day">
																<div className="day">Thứ 7</div>
																<div className="time-items">
																	<span className="time">07:00 AM - 09:00 PM</span>
																</div>
															</div>
															<div className="listing-day closed">
																<div className="day">Chủ nhật</div>
																<div className="time-items">
																	<span className="time"><span className="badge bg-danger-light">Off</span></span>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* Business Hours Widget */}
										
											</div>
										</div>
									</Tab>
								</Tabs>
							</div>
						</div>
						{/* Professor Details Tab */}

					</div>
				</div>		
				{/* Page Content */}

			</div>
        )
    }
}
export { StylistProfile };