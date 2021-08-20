import React from 'react';

// Import Sidebar
import { StylistSidebar } from './stylist-sidebar';

import Slot from './slot';

// Import Components
import { Tabs, Tab, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusCircle, faTimes } from '@fortawesome/fontawesome-free-solid';

class ScheduleTimings extends React.Component {
	constructor(props){
        super(props);
        this.state={
            key: 1,
            activeModal: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

 	handleSelect (key) {       
        this.setState({key})
    }

    openModal = (id) => {
        this.setState({activeModal: id}); 
    }
	
	handleCloseModal = () => {
		this.setState({activeModal: false}, () => {}); 
	};

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
										<li className="breadcrumb-item active" aria-current="page">Lên lịch</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Lên lịch</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <StylistSidebar />
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Lên lịch</h4>
                                                <div className="profile-box">
                                                    <div className="row">

                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Lượng thời gian làm đẹp</label>
                                                                <select className="select form-control">
                                                                    <option>-</option>
                                                                    <option>15 phút</option>
                                                                    <option defaultValue="selected">30 phút</option>
                                                                    <option>45 phút</option>
                                                                    <option>1 tiếng</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="card schedule-widget mb-0">
                                                                <div className="schedule-header">
                                                                    <div className="schedule-nav">
                                                                        <Tabs
                                                                            className="tab-view"
                                                                            activeKey={this.state.key}
                                                                            onSelect={this.handleSelect}
                                                                            id="controlled-tab-example"
                                                                        >

																			<Tab className="nav-item" eventKey={1} title="Thứ 2">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}>
																					<FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>      
																			</Tab>

                                                        					<Tab className="nav-item" eventKey={2} title="Thứ 3">
                                                        						<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#edit_time_slot" onClick={()=>this.openModal('edit')}><FontAwesomeIcon icon={faEdit} className="mr-1" />Chỉnh sửa</a>
																				</h4>			
																
																				<div className="doc-times">
																					<div className="doc-slot-list">
																						8:00 pm - 11:30 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="doc-slot-list">
																						11:30 pm - 1:30 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="doc-slot-list">
																						3:00 pm - 5:00 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="doc-slot-list">
																						6:00 pm - 11:00 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																				</div>	
                                                        					</Tab>

																			<Tab className="nav-item" eventKey={3} title="Thứ 4"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm khoảng thời gian</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={4} title="Thứ 5"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm khoảng thời gian</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={5} title="Thứ 6"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm khoảng thời gian</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={6} title="Thứ 7">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm khoảng thời gian</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={7} title="Chủ nhật">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Khoảng thời gian</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Thêm khoảng thời gian</a>
																				</h4>
																				<p className="text-muted mb-0">Không có sẵn</p>
																			</Tab>
                                                                        </Tabs>
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
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal for add slot*/}
				<Modal show={this.state.activeModal === 'add'} centered>
                    <Modal.Header>
                        <h5 className="modal-title">Chỉnh sửa khoảng thời gian</h5>
						<button type="button" className="close" onClick={()=>this.openModal()}><span aria-hidden="true">&times;</span></button>
                    </Modal.Header>
                    <Modal.Body>	
                    	<form>
				         	<Slot />
							<div className="submit-section text-center">
								<button className="btn btn-primary submit-btn" onClick={this.handleCloseModal}>Lưu thay đổi</button>
							</div>
						</form>
                    </Modal.Body>
                 </Modal>  

                 {/* Modal for edit slot*/}
				<Modal show={this.state.activeModal === 'edit'} centered>
                    <Modal.Header>
                      <h5 className="modal-title">Chỉnh sửa khoảng thời gian</h5>
					  <button type="button" className="close" onClick={()=>this.openModal()}><span aria-hidden="true">&times;</span></button>
                    </Modal.Header>
                    <Modal.Body>
                    	<form>
					      	<Slot />
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn" onClick={this.handleCloseModal}>Lưu thay đổi</button>
							</div>
						</form>
                    </Modal.Body>
                </Modal>	 	
            </div>
        );
    }
}
export { ScheduleTimings };