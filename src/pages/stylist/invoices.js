import React from 'react';
import { Link } from 'react-router-dom'

import { StylistSidebar } from './stylist-sidebar';

// Import Image
import UserImg from '../../assets/img/customers/customer.jpg';
import UserImg1 from '../../assets/img/customers/customer1.jpg';
import UserImg2 from '../../assets/img/customers/customer2.jpg';
import UserImg3 from '../../assets/img/customers/customer3.jpg';
import UserImg4 from '../../assets/img/customers/customer4.jpg';
import UserImg5 from '../../assets/img/customers/customer5.jpg';
import UserImg6 from '../../assets/img/customers/customer6.jpg';
import UserImg7 from '../../assets/img/customers/customer7.jpg';
import UserImg8 from '../../assets/img/customers/customer8.jpg';
import UserImg9 from '../../assets/img/customers/customer9.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrint } from '@fortawesome/fontawesome-free-solid';

class Invoices extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Hóa đơn</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Hóa đơn</h2>
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
								<div className="card card-table">
									<div className="card-body">
									
										{/* Invoice Table */}
										<div className="table-responsive">
											<table className="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>ID hóa đơn</th>
														<th>Khách hàng</th>
														<th>Chi phí</th>
														<th>Được trả vào</th>
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Gordan Whelan <span>#PT0016</span></Link>
															</h2>
														</td>
														<td>$450</td>
														<td>14 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg1} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Terilynn Toler <span>#PT0001</span></Link>
															</h2>
														</td>
														<td>$200</td>
														<td>13 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg2} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Achav Ryder <span>#PT0002</span></Link>
															</h2>
														</td>
														<td>$100</td>
														<td>12 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg3} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Corydon Brittain <span>#PT0003</span></Link>
															</h2>
														</td>
														<td>$350</td>
														<td>11 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg4} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Jinnie Escamilla <span>#PT0004</span></Link>
															</h2>
														</td>
														<td>$275</td>
														<td>10 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
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
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg5} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Ozie Mcgraw <span>#PT0005</span></Link>
															</h2>
														</td>
														<td>$600</td>
														<td>9 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<Link to="/invoice-view">#INV-0004</Link>
														</td>
														<td>
															<h2 className="table-avatar">
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg6} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Doralia Vigil <span>#PT0006</span></Link>
															</h2>
														</td>
														<td>$50</td>
														<td>8 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<Link to="/invoice-view">#INV-0003</Link>
														</td>
														<td>
															<h2 className="table-avatar">
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg7} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Kaylia Elias <span>#PT0007</span></Link>
															</h2>
														</td>
														<td>$400</td>
														<td>7 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<Link to="/invoice-view">#INV-0002</Link>
														</td>
														<td>
															<h2 className="table-avatar">
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg8} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Cleon Champion <span>#PT0008</span></Link>
															</h2>
														</td>
														<td>$550</td>
														<td>6 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<Link to="/invoice-view">#INV-0001</Link>
														</td>
														<td>
															<h2 className="table-avatar">
																<Link to="/customer-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg9} alt="User Image" />
																</Link>
																<Link to="/customer-profile">Kiril Fine <span>#PT0009</span></Link>
															</h2>
														</td>
														<td>$100</td>
														<td>5 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										{/* Invoice Table */}
										
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
export { Invoices };