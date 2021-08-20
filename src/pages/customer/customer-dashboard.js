import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/stylists/stylist-thumb-01.jpg';
import UserAvatar1 from '../../assets/img/stylists/stylist-thumb-02.jpg';
import UserAvatar2 from '../../assets/img/stylists/stylist-thumb-03.jpg';
import UserAvatar3 from '../../assets/img/stylists/stylist-thumb-04.jpg';
import UserAvatar4 from '../../assets/img/stylists/stylist-thumb-05.jpg';
import UserAvatar5 from '../../assets/img/stylists/stylist-thumb-06.jpg';
import UserAvatar6 from '../../assets/img/stylists/stylist-thumb-07.jpg';
import UserAvatar7 from '../../assets/img/stylists/stylist-thumb-08.jpg';
import UserAvatar8 from '../../assets/img/stylists/stylist-thumb-09.jpg';
import UserAvatar9 from '../../assets/img/stylists/stylist-thumb-10.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEye, faPrint, faTimes } from '@fortawesome/fontawesome-free-solid';

class CustomerDashboard extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dashboard</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						
						<div className="row">
							{/* Profile Sidebar */}
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />
							</div>
							{/* Profile Sidebar */}

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card database-tbl">
									<div className="card-body">
										<Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
											<Tab eventKey="appointments" title="Lịch hẹn">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Nhà tạo mẫu</th>
																		<th>Ngày đặt lịch</th>
																		<th>Ngày làm đẹp</th>
																		<th>Chi phí</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Sorell Sexton <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$160</td>
																		<td><span className="badge badge-pill bg-success-light">Xác nhận</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>12 Nov 2019 <span className="d-block text-info">8.00 PM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$250</td>
																		<td><span className="badge badge-pill bg-success-light">Xác nhận</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$400</td>
																		<td><span className="badge badge-pill bg-danger-light">Đã hủy</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td>10 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$350</td>
																		<td><span className="badge badge-pill bg-warning-light">Đang xử lí</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Glitter</span></Link>
																			</h2>
																		</td>
																		<td>9 Nov 2019 <span className="d-block text-info">7.00 PM</span></td>
																		<td>8 Nov 2019</td>
																		<td>$75</td>
																		<td><span className="badge badge-pill bg-success-light">Xác nhận</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">9.00 AM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$175</td>
																		<td><span className="badge badge-pill bg-danger-light">Đã hủy</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Jonalyn Graff <span>Paraffin Hands	</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">6.00 PM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$450</td>
																		<td><span className="badge badge-pill bg-success-light">Xác nhận</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																				<Link to="/cancel-booking" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTimes} /> Hủy
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="customer-history" title="Lịch sử của khách hàng">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID hóa đơn</th>
																		<th>Ngày </th>
																		<th>Dịch vụ</th>
																		<th>Được thực hiện bởi</th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td><Link to="/invoice-view">#MR-0010</Link></td>
																		<td>14 Nov 2020</td>
																		<td>Nail Filling</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Sorell Sexton <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="/invoice-view">#MR-0009</Link></td>
																		<td>13 Nov 2020</td>
																		<td>Nail Art</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="/invoice-view">#MR-0008</Link></td>
																		<td>12 Nov 2020</td>
																		<td>Gel Nail Art</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="/invoice-view">#MR-0007</Link></td>
																		<td>11 Nov 2020</td>
																		<td>Paraffin Wax</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>  	
															</table>
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="billing" title="Hóa đơn">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID hóa đơn</th>
																		<th>Nhà tạo mẫu</th>
																		<th>Chi phí</th>
																		<th>Ngày trả</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0010</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Ruby Perrin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$450</td>
																		<td>14 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0009</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Urban Mauldin <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$300</td>
																		<td>13 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0008</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Cela Spence <span>Nail Art</span></Link>
																			</h2>
																		</td>
																		<td>$150</td>
																		<td>12 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0007</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Litia Green <span>Paraffin Hands</span></Link>
																			</h2>
																		</td>
																		<td>$50</td>
																		<td>11 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0006</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Aditi Menard <span>Glitter</span></Link>
																			</h2>
																		</td>
																		<td>$600</td>
																		<td>10 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0005</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/stylist-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/stylist-profile">Vix Schneider <span>Pedicure</span></Link>
																			</h2>
																		</td>
																		<td>$200</td>
																		<td>9 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/invoice-view" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> Xem
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</Tab>
										</Tabs>
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
export { CustomerDashboard };