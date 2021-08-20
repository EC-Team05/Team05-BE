import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import UserImg1 from '../../assets/img/stylists/stylist-01.jpg';
import UserImg2 from '../../assets/img/stylists/stylist-02.jpg';
import UserImg3 from '../../assets/img/stylists/stylist-03.jpg';
import UserImg4 from '../../assets/img/stylists/stylist-04.jpg';
import UserImg5 from '../../assets/img/stylists/stylist-05.jpg';
import UserImg6 from '../../assets/img/stylists/stylist-06.jpg';
import UserImg7 from '../../assets/img/stylists/stylist-07.jpg';
import UserImg8 from '../../assets/img/stylists/stylist-08.jpg';
import UserImg9 from '../../assets/img/stylists/stylist-09.jpg';
import UserImg10 from '../../assets/img/stylists/stylist-10.jpg';
import UserImg11 from '../../assets/img/stylists/stylist-11.jpg';
import UserImg12 from '../../assets/img/stylists/stylist-12.jpg';
import SpecialityImg from '../../assets/img/specialities/specialities-05.png';
import FeatureImg from '../../assets/img/features/feature-01.jpg';
import FeatureImg1 from '../../assets/img/features/feature-02.jpg';
import FeatureImg2 from '../../assets/img/features/feature-03.jpg';
import FeatureImg3 from '../../assets/img/features/feature-04.jpg';


// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faThLarge, faBars, faStar, faMoneyBillAlt, faInfoCircle, faThumbsUp, faComment } from '@fortawesome/fontawesome-free-solid';

const data = [{
	id:"01",
	doc_name:"Sorell Sexton",
	"speciality":"Paraffin Wax",
	"address":"Florida, USA",
	"next_available":"Available on Fri, 22 Mar",
	"amount":"$300 - $1000",
	lat:-33.847927,
	lng:150.6517938,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"17",
	"image":UserImg1
	}, {
		
	id:"02",
	doc_name:"Urban Mauldin",
	"speciality":"Glitter Nail Art",
	"address":"Newyork, USA",
	"next_available":"Available on Fri, 23 Mar",
	"amount":"$50 - $300",
	lat:-37.9722342,
	lng:144.7729561,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"35",
	"image":UserImg2
	}, {
	id:"03",
	doc_name:"Cela Spence",
	"speciality":"Pedicure",
	"address":"Georgia, USA",
	"next_available":"Available on Fri, 24 Mar",
	"amount":"$100 - $400",
	lat:-31.9546904,
	lng:112.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"27",
	"image":UserImg3
	}, {
	id:"04",
	doc_name:"Litia Green",
	"speciality":"Nail Filling",
	"address":"Louisiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $250",
	lat:-32.9546904,
	lng:115.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"4",
	"image":UserImg4
	}, {
	id:"05",
	doc_name:"Aditi Menard",
	"speciality":"Get Nail Art",
	"address":"Michigan, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$50 - $700",
	lat:-34.9546904,
	lng:125.8650292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"66",
	"image":UserImg5
	}, {
	id:"06",
	doc_name:"Vix Schneider",
	"speciality":"Manicure",
	"address":"Texas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $500",
	lat:-35.9546904,
	lng:153.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"52",
	"image":UserImg6
	}, {
	id:"07",
	doc_name:"Jonalyn Graff",
	"speciality":"Foot Care",
	"address":"Kansas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $1000",
	lat:-36.9548904,
	lng:105.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"43",
	"image":UserImg7
	}, {
	id:"08",
	doc_name:"Yara Sauls",
	"speciality":"Paraffin Wax",
	"address":"California, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $400",
	lat:-38.9556904,
	lng:110.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"49",
	"image":UserImg8
	}, {
	id:"09",
	doc_name:"Jaydee Mack",
	"speciality":"Pedicure",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$500 - $2500",
	lat:-33.2191198,
	lng:120.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"112",
	"image":UserImg9
	}, {
	id:"10",
	doc_name:"Lorissa Peters",
	"speciality":"Nail Art",
	"address":"Montana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$75 - $250",
	lat:-37.1382198,
	lng:115.9359404,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"65",
	"image":UserImg10
	}, {
	id:"11",
	doc_name:"Gilian Nixon",
	"speciality":"Manicure",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$275 - $450",
	lat:-31.1546904,
	lng:145.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"5",
	"image":UserImg11
	}, {
	id:"12",
	doc_name:"Emlin Kunz",
	"speciality":"Waxing",
	"address":"Indiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $350",
	lat:-35.1586194,
	lng:155.8350292,
	"icons":"default",
	"profile_link":"/stylist-profile",
	"total_review":"5",
	"image":UserImg12
	}
];

class StylistList extends React.Component {

	componentDidMount(){
        document.body.classList.add('map-page');
    }
    componentWillUnmount(){
        document.body.classList.remove('map-page');
    }
	
    render() {
        return (
			<div>
				{/* Page Content */}
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
								<div className="row align-items-center mb-4">
									<div className="col-md-6 col">
										<h4>2245 Stylists found</h4>
									</div>

									<div className="col-md-6 col-auto">
										<div className="view-icons ">
											<Link to="/map-grid" className="grid-view"><FontAwesomeIcon icon={faThLarge} /></Link>
											<Link to="/map-list" className="list-view active"><FontAwesomeIcon icon={faBars} /></Link>
										</div>
										<div className="sort-by d-sm-block d-none">
											<span className="sortby-fliter">
												<select className="select">
													<option>Sort by</option>
													<option className="sorting">Rating</option>
													<option className="sorting">Popular</option>
													<option className="sorting">Latest</option>
													<option className="sorting">Free</option>
												</select>
											</span>
										</div>
									</div>
								</div>

								{/* Stylist Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={UserImg1} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Sorell Sexton</Link></h4>
													<p className="doc-speciality">Paraffin Wax</p>
													<h5 className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Nail Art</h5>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(17)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={FeatureImg} data-fancybox="gallery">
																	<img src={FeatureImg} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg1} data-fancybox="gallery">
																	<img src={FeatureImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg2} data-fancybox="gallery">
																	<img src={FeatureImg2} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg3} data-fancybox="gallery">
																	<img src={FeatureImg3} alt="Feature" />
																</a>
															</li>
														</ul>
													</div>
													<div className="clinic-services">
														<span>Nail Fillings</span>
														<span> Waxing</span>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clini-infos">
													<ul>
														<li><FontAwesomeIcon icon={faThumbsUp} /> 98%</li>
														<li><FontAwesomeIcon icon={faComment} /> 17 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $300 - $1000 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /> </li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link href="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Stylist Widget */}

								{/* Stylist Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={UserImg2} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Urban Mauldin</Link></h4>
													<p className="doc-speciality">Glitter Nail Art</p>
													<h5 className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Nail Art</h5>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(35)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={FeatureImg} data-fancybox="gallery">
																	<img src={FeatureImg} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg1} data-fancybox="gallery">
																	<img src={FeatureImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg2} data-fancybox="gallery">
																	<img src={FeatureImg2} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg3} data-fancybox="gallery">
																	<img src={FeatureImg3} alt="Feature" />
																</a>
															</li>
														</ul>
													</div>
													<div className="clinic-services">
														<span>Nail Fillings</span>
														<span> Waxing</span>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clini-infos">
													<ul>
														<li><FontAwesomeIcon icon={faThumbsUp} /> 100%</li>
														<li><FontAwesomeIcon icon={faComment} /> 35 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $300 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Stylist Widget */}

								{/* Stylist Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={UserImg3} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Cela Spence</Link></h4>
													<p className="doc-speciality">Pedicure</p>
													<p className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Glitter</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(27)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={FeatureImg} data-fancybox="gallery">
																	<img src={FeatureImg} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg1} data-fancybox="gallery">
																	<img src={FeatureImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg2} data-fancybox="gallery">
																	<img src={FeatureImg2} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg3} data-fancybox="gallery">
																	<img src={FeatureImg3} alt="Feature" />
																</a>
															</li>
														</ul>
													</div>
													<div className="clinic-services">
														<span>Nail Fillings</span>
														<span> Waxing</span>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clini-infos">
													<ul>
														<li><FontAwesomeIcon icon={faThumbsUp} /> 99%</li>
														<li><FontAwesomeIcon icon={faComment} /> 35 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Stylist Widget */}

								{/* Stylist Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={UserImg4} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Litia Green</Link></h4>
													<p className="doc-speciality">Nail Filling</p>
													<p className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Paraffin Hands</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(4)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Louisiana, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={FeatureImg} data-fancybox="gallery">
																	<img src={FeatureImg} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg1} data-fancybox="gallery">
																	<img src={FeatureImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg2} data-fancybox="gallery">
																	<img src={FeatureImg2} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg3} data-fancybox="gallery">
																	<img src={FeatureImg3} alt="Feature" />
																</a>
															</li>
														</ul>
													</div>
													<div className="clinic-services">
														<span>Nail Fillings</span>
														<span> Waxing</span>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clini-infos">
													<ul>
														<li><FontAwesomeIcon icon={faThumbsUp} /> 97%</li>
														<li><FontAwesomeIcon icon={faComment} /> 4 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $250 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Stylist Widget */}

								{/* Stylist Widget */}
								<div className="card">
									<div className="card-body">
										<div className="stylist-widget">
											<div className="doc-info-left">
												<div className="stylist-img">
													<Link to="/stylist-profile">
														<img src={UserImg6} className="img-fluid" alt="User Image" />
													</Link>
												</div>
												<div className="doc-info-cont">
													<h4 className="doc-name"><Link to="/stylist-profile">Vix Schneider</Link></h4>
													<p className="doc-speciality">Get Nail Art</p>
													<p className="doc-department"><img src={SpecialityImg} className="img-fluid" alt="Speciality" />Pedicure</p>
													<div className="rating">
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} className="filled" />
														<FontAwesomeIcon icon={faStar} />
														<span className="d-inline-block average-rating">(52)</span>
													</div>
													<div className="clinic-details">
														<p className="doc-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA</p>
														<ul className="clinic-gallery">
															<li>
																<a href={FeatureImg} data-fancybox="gallery">
																	<img src={FeatureImg} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg1} data-fancybox="gallery">
																	<img src={FeatureImg1} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg2} data-fancybox="gallery">
																	<img src={FeatureImg2} alt="Feature" />
																</a>
															</li>
															<li>
																<a href={FeatureImg3} data-fancybox="gallery">
																	<img src={FeatureImg3} alt="Feature" />
																</a>
															</li>
														</ul>
													</div>
													<div className="clinic-services">
														<span>Nail Fillings</span>
														<span> Waxing</span>
													</div>
												</div>
											</div>
											<div className="doc-info-right">
												<div className="clini-infos">
													<ul>
														<li><FontAwesomeIcon icon={faThumbsUp} /> 100%</li>
														<li><FontAwesomeIcon icon={faComment} /> 52 Feedback</li>
														<li><FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA</li>
														<li><FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $500 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" /></li>
													</ul>
												</div>
												<div className="clinic-booking">
													<Link to="/stylist-profile" className="view-pro-btn">View Profile</Link>
													<Link to="/booking" className="apt-btn">Book Appointment</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Stylist Widget */}
								
								<div className="load-more text-center">
									<Link to="#" className="btn btn-primary btn-sm">Load More</Link>	
								</div>
							</div>

							<div className="col-xl-5 col-lg-12 map-right">
								<div id="map" className="map-listing">
									<div style={{ height: '100vh', width: '100%' }}>
										<Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
									</div>
								</div>

								{/* Map */}
							</div>

						</div>
					</div>

				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { StylistList };