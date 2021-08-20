import React from 'react';
import { Link } from 'react-router-dom'

// Import Sidebar
import { StylistSidebar } from './stylist-sidebar';

// Import Image
import CustomerImg from '../../assets/img/customers/customer.jpg';
import CustomerImg1 from '../../assets/img/customers/customer1.jpg';
import CustomerImg2 from '../../assets/img/customers/customer2.jpg';
import CustomerImg3 from '../../assets/img/customers/customer3.jpg';
import CustomerImg4 from '../../assets/img/customers/customer4.jpg';
import CustomerImg5 from '../../assets/img/customers/customer5.jpg';
import CustomerImg6 from '../../assets/img/customers/customer6.jpg';
import CustomerImg7 from '../../assets/img/customers/customer7.jpg';
import CustomerImg8 from '../../assets/img/customers/customer8.jpg';
import CustomerImg9 from '../../assets/img/customers/customer9.jpg';
import CustomerImg10 from '../../assets/img/customers/customer10.jpg';
import CustomerImg11 from '../../assets/img/customers/customer11.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';


class MyCustomers extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Khách hàng của tôi</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Khách hàng của tôi</h2>
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
								<StylistSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="row row-grid">
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile pat-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/customer-profile" className="booking-doc-img">
															<img src={CustomerImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/customer-profile">Gordan Whelan</Link></h3>
															
															<div className="customer-details">
																<h5><b>ID khách hàng :</b> P0016</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="customer-info">
													<ul>
														<li>SDT <span>+1 952 001 8563</span></li>
														<li>Tuổi <span>38 Years, Male</span></li>
													</ul>
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
export { MyCustomers };