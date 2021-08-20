import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

// Import Images
import Img from '../../assets/img/stylists/stylist-01.jpg';
import Img1 from '../../assets/img/stylists/stylist-02.jpg';
import Img2 from '../../assets/img/stylists/stylist-03.jpg';
import Img3 from '../../assets/img/stylists/stylist-04.jpg';
import Img4 from '../../assets/img/stylists/stylist-05.jpg';
import Img5 from '../../assets/img/stylists/stylist-06.jpg';
import Img6 from '../../assets/img/stylists/stylist-07.jpg';
import Img7 from '../../assets/img/stylists/stylist-08.jpg';
import Img8 from '../../assets/img/stylists/stylist-09.jpg';
import Img9 from '../../assets/img/stylists/stylist-10.jpg';
import Img10 from '../../assets/img/stylists/stylist-11.jpg';
import Img11 from '../../assets/img/stylists/stylist-12.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faCheckCircle, faClock, faColumns, faComment, faInfoCircle, faLock, faMapMarkerAlt, faMoneyBillAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';


class Favourites extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Yêu thích</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Yêu thích</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">

						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="row row-grid">
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Sorell Sexton</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Paraffin Wax</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
													<FontAwesomeIcon icon={faMoneyBillAlt} /> $300 - $1000 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img1} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Urban Mauldin</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Glitter Nail Art</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(35)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $300 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img2} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Cela Spence</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Pedicure</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(27)</span>
												</div>
												<ul className="available-info">
													<li>
													<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
													</li>
													<li>
													<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img3} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Litia Green</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Nail Filling</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(4)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Louisiana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $250 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img4} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Aditi Menard</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Get Nail Art</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(66)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Michigan, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $700 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img5} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Vix Schneider</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Manicure</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(52)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $500 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img6} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Jonalyn Graff</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Foot Care</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(43)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Kansas, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $1000 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngayw</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img7} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Yara Sauls</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Paraffin Wax</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(49)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> California, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img8} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Jaydee Mack</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Paraffin Wax</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(112)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Oklahoma, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $500 - $2500 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img9} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Lorissa Peters</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Paraffin Wax</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(65)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Montana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $75 - $250 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img10} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Gilian Nixon</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Maincure</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(5)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Oklahoma, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $275 - $450 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="doc-img">
												<Link to="/stylist-profile">
													<img className="img-fluid" alt="User Image" src={Img11} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/stylist-profile">Emlin Kunz</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Foot Care</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(5)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Indiana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $350 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/stylist-profile" className="btn view-btn">Xem hồ sơ</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Đặt ngay</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
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
export { Favourites };