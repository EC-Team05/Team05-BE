import React from 'react';
import { Link } from 'react-router-dom'

import { CustomerSidebar } from './customer-sidebar';

class ChangePassword extends React.Component {
    render() {
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Thay đổi mật khẩu</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Thay đổi mật khẩu</h2>
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6">
                                            
                                                {/* Change Password Form */}
                                                <form>
                                                    <div className="form-group">
                                                        <label>Mật khẩu cũ</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Mật khẩu mới</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Xác nhận mật khẩu mới</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    {/* Submit Section */}
                                                    <div className="submit-section">
                                                        <Link to="/change-password-success" className="btn btn-primary submit-btn">Lưu thay đổi</Link>
                                                    </div>
                                                    {/* Submit Section */}

                                                </form>
                                                {/* Change Password Form */}
                                                
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
export { ChangePassword };