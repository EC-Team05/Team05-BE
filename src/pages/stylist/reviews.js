import React from 'react';
import { Link } from 'react-router-dom'

import { StylistSidebar } from './stylist-sidebar';

// Import Images
import UserImg from '../../assets/img/stylists/stylist-thumb-02.jpg';
import CustomerImg from '../../assets/img/customers/customer.jpg';
import CustomerImg1 from '../../assets/img/customers/customer2.jpg';
import CustomerImg2 from '../../assets/img/customers/customer3.jpg';
import CustomerImg3 from '../../assets/img/customers/customer4.jpg';
import CustomerImg4 from '../../assets/img/customers/customer5.jpg';
import CustomerImg5 from '../../assets/img/customers/customer9.jpg';
import CustomerImg6 from '../../assets/img/customers/customer8.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp, faThumbsDown, faReply } from '@fortawesome/fontawesome-free-solid';


class Reviews extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Đánh giá</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Đánh giá</h2>
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
								<div className="doc-review review-listing">
								
									{/* Review Listing */}
									<ul className="comments-list">
									
										{/* Comment List */}
										<li>
											<div className="comment">
												<img className="avatar rounded-circle" alt="User Image" src={CustomerImg} />
												<div className="comment-body">
													<div className="meta-data">
														<span className="comment-author">Gordan Whelan</span>
														<span className="comment-date">Đánh giá 2 ngày trước</span>
														<div className="review-count rating">
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} />
														</div>
													</div>
													<p className="recommended"><FontAwesomeIcon icon={faThumbsUp} /> Tôi giới thiệu nhà tạo mẫu</p>
													<p className="comment-content">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit,
														sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														Ut enim ad minim veniam, quis nostrud exercitation.
														Curabitur non nulla sit amet nisl tempus
													</p>
													<div className="comment-reply">
														<Link to="#" className="comment-btn">
															<FontAwesomeIcon icon={faReply} /> Trả lời
														</Link>
													<p className="recommend-btn">
														<span>Giới thiệu?</span>
														<Link to="#" className="like-btn">
															<FontAwesomeIcon icon={faThumbsUp} /> Yes
														</Link>
														<Link to="#" className="dislike-btn">
															<FontAwesomeIcon icon={faThumbsDown} /> No
														</Link>
													</p>
													</div>
												</div>
											</div>
											
											{/* Comment Reply */}
											<ul className="comments-reply">
											
												{/* Comment Reply List */}
												<li>
													<div className="comment">
														<img className="avatar rounded-circle" alt="User Image" src={UserImg} />
														<div className="comment-body">
															<div className="meta-data">
																<span className="comment-author">Urban Mauldin</span>
																<span className="comment-date">Đánh giá 4 ngày trước</span>
															</div>
															<p className="comment-content">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit,
																sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
																Ut enim ad minim veniam.
																Curabitur non nulla sit amet nisl tempus
															</p>
															<div className="comment-reply">
																<Link to="#" className="comment-btn">
																	<FontAwesomeIcon icon={faReply} /> Trả lời
																</Link>
															</div>
														</div>
													</div>
												</li>
												{/* Comment Reply List */}
												
											</ul>
											{/* Comment Reply */}
											
										</li>
										{/* Comment List */}
										
										{/* Comment List */}
										<li>
											<div className="comment">
												<img className="avatar rounded-circle" alt="User Image" src={CustomerImg1} />
												<div className="comment-body">
													<div className="meta-data">
														<span className="comment-author">Achav Ryder</span>
														<span className="comment-date">Đánh giá 4 ngày trước</span>
														<div className="review-count rating">
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
														</div>
													</div>
													<p className="comment-content">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit,
														sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														Ut enim ad minim veniam, quis nostrud exercitation.
														Curabitur non nulla sit amet nisl tempus
													</p>
													<div className="comment-reply">
														<Link to="#" className="comment-btn">
															<FontAwesomeIcon icon={faReply} /> Trả lời
														</Link>
														<p className="recommend-btn">
															<span>Giới thiệu?</span>
															<Link to="#" className="like-btn">
																<FontAwesomeIcon icon={faThumbsUp} /> Yes
															</Link>
															<Link to="#" className="dislike-btn">
																<FontAwesomeIcon icon={faThumbsDown} /> No
															</Link>
														</p>
													</div>
												</div>
											</div>
										</li>
										{/* Comment List */}
										
										{/* Comment List */}
										<li>
											<div className="comment">
												<img className="avatar rounded-circle" alt="User Image" src={CustomerImg1} />
												<div className="comment-body">
													<div className="meta-data">
														<span className="comment-author">Achav Ryder</span>
														<span className="comment-date">Đánh giá 4 ngày trước</span>
														<div className="review-count rating">
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
															<FontAwesomeIcon icon={faStar} className="filled" />
														</div>
													</div>
													<p className="comment-content">
														Lorem ipsum dolor sit amet, consectetur adipisicing elit,
														sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														Ut enim ad minim veniam, quis nostrud exercitation.
														Curabitur non nulla sit amet nisl tempus
													</p>
													<div className="comment-reply">
														<Link to="#" className="comment-btn">
															<FontAwesomeIcon icon={faReply} /> Trả lời
														</Link>
														<p className="recommend-btn">
															<span>Giới thiệu?</span>
															<Link to="#" className="like-btn">
																<FontAwesomeIcon icon={faThumbsUp} /> Yes
															</Link>
															<Link to="#" className="dislike-btn">
																<FontAwesomeIcon icon={faThumbsDown} /> No
															</Link>
														</p>
													</div>
												</div>
											</div>
										</li>
										{/* Comment List */}
									</ul>
									{/* Comment List */}
									
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
export { Reviews };