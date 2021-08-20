import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import Logo from '../../assets/img/logo.png';

class InvoiceView extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Xem hóa đơn</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Xem hóa đơn</h2>
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
								<div className="invoice-content">
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-6">
												<div className="invoice-logo">
													<img src={Logo} alt="logo" />
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-12">
												<div className="invoice-info">
													<strong className="customer-text">Phương thức thanh toán</strong>
													<p className="invoice-details invoice-details-two">
														Thanh toán tại cửa hàng <br />
														Order: #00124 <br />
														Issued: 20/07/2020 <br />
														Invoice From: Nàng Beauty <br />
														Invoice To: Quỳnh Như <br />
													</p>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									
									{/* Invoice Item */}
									<div className="invoice-item invoice-table-wrap">
										<div className="row">
											<div className="col-md-12">
												<div className="table-responsive">
													<table className="invoice-table table table-bordered">
														<thead>
															<tr>
																<th>Dịch vụ</th>
																<th className="text-center">Số lượng</th>
																<th className="text-center">VAT</th>
																<th className="text-right">Tổng</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>Sơn gel</td>
																<td className="text-center">1</td>
																<td className="text-center">0</td>
																<td className="text-right">80.000</td>
															</tr>
															<tr>
																<td>Vẽ gel</td>
																<td className="text-center">1</td>
																<td className="text-center">0</td>
																<td className="text-right">20.000</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="col-md-6 col-xl-4 ml-auto">
												<div className="table-responsive">
													<table className="invoice-table-two table">
														<tbody>
														<tr>
															<th>Tổng tạm tính:</th>
															<td><span>100.000 VND</span></td>
														</tr>
														<tr>
															<th>Giảm giá:</th>
															<td><span>-10%</span></td>
														</tr>
														<tr>
															<th>Tổng số tiền:</th>
															<td><span>90.000 VND</span></td>
														</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									
									{/* Invoice Information */}
									<div className="other-info">
										<h4>Thông tin khác</h4>
										<p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
									</div>
									{/* Invoice Information */}
									
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
export { InvoiceView };