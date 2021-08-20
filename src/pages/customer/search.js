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

class Search extends React.Component {

	render() {
		return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-8 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Tìm kiếm nhà tạo mẫu</li>
									</ol>
								</nav>
							</div>
							<div className="col-md-4 col-12 d-md-block d-none">
								<div className="sort-by">
									<span className="sort-title">Sắp xếp theo</span>
									<span className="sortby-fliter">
										<select className="select">
											<option>Chọn</option>
											<option className="sorting">Đánh giá</option>
											<option className="sorting">Phổ biến</option>
											<option className="sorting">Tên</option>
											<option className="sorting">Miền phí</option>
										</select>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

								{/* Search Filter */}
								<div className="card search-filter">
									<div className="card-header">
										<h4 className="card-title mb-0">Bộ lọc</h4>
									</div>
									<div className="card-body">
										<div className="filter-widget">
											<input type="date" className="form-control datetimepicker" placeholder="Select Date" />
										</div>
										<div className="filter-widget">
											<h4>Giới tính</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Nam
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Nữ
												</label>
											</div>
										</div>
										<div className="filter-widget">
											<h4>Chọn dịch vụ</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Hands
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Wax
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Tất cả dịch vụ
												</label>
											</div>
										</div>
										<div className="btn-search">
											<button type="button" className="btn btn-block">Tìm kiếm</button>
										</div>
									</div>
								</div>
								{/* Search Filter */}
							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">
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
													<p className="doc-speciality">Nail Art</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(4)</span>
														<div className="clini-infos">
															<ul>
																<li><FontAwesomeIcon icon={faThumbsUp} /> 97%</li>
																<li><FontAwesomeIcon icon={faComments} /> 4 Feedback</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">Xem hồ sơ</Link>
													<Link to="/booking" className="apt-btn">Đặt lịch hẹn</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Professor Widget */}
								<div className="load-more text-center">
									<Link to="" className="btn btn-primary btn-sm">Tải thêm</Link>
								</div>
							</div>
						</div>
					</div>

				</div>
				{/* Page Content */}
			</div>
		)
	}
}
export { Search };