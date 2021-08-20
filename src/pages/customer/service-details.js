import React from 'react';
import { Link } from 'react-router-dom'

import BlogImg from '../../assets/img/blog/blog-11.jpg';

class ServiceDetails extends React.Component {
	
    render() {
        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar service-bg">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb justify-content-center">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Service</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title text-center">Service Details</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							
								{/* Search Filter */}
								<div className="card search-filter">
									<div className="card-header">
										<h4 className="card-title mb-0">Search Filter</h4>
									</div>
									<div className="card-body">
										<div className="filter-widget">
											<input type="date" className="form-control datetimepicker" placeholder="Select Date" />		
										</div>
										<div className="filter-widget">
											<h4>Gender</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" defaultChecked />
													<span className="checkmark"></span> Male stylist
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="gender_type" />
													<span className="checkmark"></span> Female stylist
												</label>
											</div>
										</div>
										<div className="filter-widget">
											<h4>Select Departments</h4>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Hands
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" defaultChecked />
													<span className="checkmark"></span> Paraffin Wax
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Nail Art
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Nail Filling
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Drying Polish
												</label>
											</div>
											<div>
												<label className="custom_check">
													<input type="checkbox" name="select_specialist" />
													<span className="checkmark"></span> Foot Care
												</label>
											</div>
										</div>
										<div className="btn-search">
											<button type="button" className="btn btn-block">Search</button>
										</div>	
									</div>
								</div>
								{/* Search Filter */}
								
							</div>

							<div className="col-md-12 col-lg-8 col-xl-9">
								<div className="blog-view">
									<div className="blog blog-single-post">
										<div className="blog-image">
											<Link to="#"><img alt="" src={BlogImg} className="img-fluid" /></Link>
										</div>
										<h3 className="blog-title">Nail Dry Polishing</h3>
										<div className="blog-content">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
											<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
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
export { ServiceDetails };