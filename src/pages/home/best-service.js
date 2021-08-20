import React from 'react';
import { Link } from 'react-router-dom'

// Import Slick Slider
import Slider from "react-slick";

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class BestService extends React.Component {

	// state= {
    //     responsive:{
    //         0: {
    //             items: 1,
    //         },
    //         450: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 2,
    //         },
    //         1000: {
    //             items: 2,
    //         },
    //     },
    // }

	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  services: []
		};
	  }
	
	  componentDidMount() {
		fetch("http://localhost:3000/")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				services: result.service 
			  });
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error 
			  });
			}
		  )
	  }


    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };

        return (
            <div>
                {/* Top Courses */}
                <section className="section services">
                    <div className="container">
						<div className="row justify-content-center">	
							<div className="section-header text-center">						
								<h2>Những dịch vụ tốt nhất của chúng tôi</h2>
								<p className="sub-title">Nàng Beauty cung cấp các dịch vụ làm đẹp chuyên nghiệp với mức giá hợp lý. Bạn sẽ trở nên xinh đẹp và tiết kiệm túi tiền của bạn với mức giá tuyệt vời của chúng tôi.</p>
							</div>
						</div>

						<Slider {...settings} className="stylist-slider">

							{
								this.state.services.slice(0, 8).map(service => (
									<div className="profile-widget">
										<div className="doc-img">
											<Link to="/service-details">
												<img 
													className="img-fluid" 
													alt="User Image" 
													src={service.img}
												/>
												<div className="wrap-sec">
													<div>
														<h3>{service.name}</h3>
													</div>
												</div>
											</Link>
										</div>
									</div>
								))
							}
							

						</Slider>

						<div className="row justify-content-center">
							<Link to="/service-details" className="btn-pink">tất cả dịch vụ</Link>
						</div>
					</div>
                </section>
                
                {/* Top Stylist */}
            </div>
        )
    }
}
export { BestService };