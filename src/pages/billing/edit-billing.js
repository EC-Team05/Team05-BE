import React from 'react';
import { Link } from 'react-router-dom'

import { Sidebar } from './sidebar';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class EditBilling extends React.Component {
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
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Edit Billing</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Edit Billing</h2>
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
                                <Sidebar />
                            </div>

                            <div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title mb-0">Edit Billing</h4>
									</div>
									<div className="card-body">
										<div className="row">
											<div className="col-sm-6">
												<div className="biller-info">
													<h4 className="d-block">Urban Mauldin</h4>
													<span className="d-block text-sm text-muted">Manicure</span>
													<span className="d-block text-sm text-muted">Newyork, United States</span>
												</div>
											</div>
											<div className="col-sm-6 text-sm-right">
												<div className="billing-info">
													<h4 className="d-block">1 November 2021</h4>
													<span className="d-block text-muted">#INV0001</span>
												</div>
											</div>
										</div>

										{/* Add Item */}
										<div className="add-more-item text-right">
											<Link to="#"><FontAwesomeIcon icon={faPlusCircle}/> Add Item</Link>
										</div>
										{/* Add Item */}

										{/* Billing Item */}
										<div className="card card-table">
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-hover table-center">
														<thead>
															<tr>		
																<th>Title</th>					
																<th>Amount</th>		
																<th></th>
															</tr>
														</thead>

														<tbody>
															<tr>
																<td>	
																	<input type="text" className="form-control" defaultValue="Consulting Fee" />
																</td>
																<td>
																	<input type="text" className="form-control" defaultValue="$330" />
																</td>							
																<td>
																	<Link to="#" className="btn bg-danger-light trash"><FontAwesomeIcon icon={faTrashAlt} /></Link>
																</td>
															</tr>
															<tr>
																<td>	
																	<input type="text" className="form-control" defaultValue="Video Calling Appointment" />
																</td>
																<td>
																	<input type="text" className="form-control" defaultValue="$100" />
																</td>							
																<td>
																	<Link to="#" className="btn bg-danger-light trash"><FontAwesomeIcon icon={faTrashAlt} /></Link>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										{/* Billing Item */}

										{/* Signature */}
										<div className="row">
											<div className="col-md-12 text-right">
												<div className="signature-wrap">
													<div className="signature">
														Click here to sign
													</div>
													<div className="sign-name">
														<p className="mb-0">( Urban Mauldin )</p>
														<span className="text-muted">Signature</span>
													</div>
												</div>
											</div>
										</div>
										{/* Signature */}

										{/* Submit Section */}
										<div className="row">
											<div className="col-md-12">
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Save</button>
													<button type="reset" className="btn btn-secondary submit-btn">Clear</button>
												</div>
											</div>
										</div>
										{/* Submit Section */}

									</div>
								</div>
                            </div>
						</div>
                    </div>
                </div>
            </div>
        )
    }
}
export { EditBilling };