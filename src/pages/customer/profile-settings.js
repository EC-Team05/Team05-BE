import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

// Import Images
import UserImg from '../../assets/img/customers/customer.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/fontawesome-free-solid';

class ProfileSettings extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Cài đặt cấu hình</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Cài đặt cấu hình</h2>
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
								<div className="card">
									<div className="card-body">
										
										{/* Profile Settings Form */}
										<form>
											<div className="row form-row">
												<div className="col-12 col-md-12">
													<div className="form-group">
														<div className="change-avatar">
															<div className="profile-img">
																<img src={UserImg} alt="User Image" />
															</div>
															<div className="upload-img">
																<div className="change-photo-btn">
																	<span><FontAwesomeIcon icon={faUpload} /> Tải ảnh lên</span>
																	<input type="file" className="upload" />
																</div>
																<small className="form-text text-muted">Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 2MB</small>
															</div>
														</div>
													</div>
												</div>
												<div className="col-12 col-md-6">
													<div className="form-group">
														<label>Họ và tên đệm</label>
														<input type="text" className="form-control" defaultValue="Richard" />
													</div>
												</div>
												<div className="col-12 col-md-6">
													<div className="form-group">
														<label>Tên</label>
														<input type="text" className="form-control" defaultValue="Wilson" />
													</div>
												</div>
												<div className="col-12 col-md-6">
													<div className="form-group">
														<label>Ngày sinh</label>
														<input type="date" className="form-control datetimepicker" defaultValue="24-07-1983" />
													</div>
												</div>
												<div className="col-12 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" defaultValue="richard@example.com" />
													</div>
												</div>
												<div className="col-12 col-md-6">
													<div className="form-group">
														<label>Số điện thoại</label>
														<input type="text" defaultValue="+1 202-555-0125" className="form-control" />
													</div>
												</div>
												<div className="col-12">
													<div className="form-group">
													<label>Địa chỉ</label>
														<input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
													</div>
												</div>
											</div>
											<div className="submit-section">
												<button type="submit" className="btn btn-primary submit-btn">Lưu thay đổi</button>
											</div>
										</form>
										{/* Profile Settings Form */}
										
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
export { ProfileSettings };