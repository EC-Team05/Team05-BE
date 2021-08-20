import React from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
	
    render() {
        const exclusionArray = [
			'/chat',
			'/chat-stylist',
			'/voice-call',
			'/video-call'
		]
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		const pathname = this.props.location.pathname;

        return (
			<footer className={`footer ${(pathname === ('/') ? 'footer-padding' : '')}`}>
				
				{/* Footer Top */}
				<div className="footer-top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-about">
									<h2 className="footer-title">About us</h2>
									<div className="footer-about-content">
										<p>Chào mừng bạn đến với Nàng Beauty, trải nghiệm làm đẹp hoàn toàn mới cho bộ móng của bạn. Một môi trường độc đáo để cho phép bạn trẻ hóa, thư giãn và bộc lộ hình tượng bên trong của bạn. Chúng tôi tin rằng mọi người đều cảm thấy tuyệt vời trên bộ móng của chính mình. Phá bỏ truyền thống, chúng tôi đã tạo ra một không gian chào đón, an toàn và vui vẻ để kết nối lại với con người cửa bạn.</p>
									</div>
								</div>
								{/* Footer Widget */}
								
							</div>
							
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Quick links</h2>
									<ul>
										
										<li>
											<Link to="/login">Login</Link>
										</li>
										<li>
											<Link to="/stylist-register">Register</Link>
										</li>
									</ul>
								</div>
								{/* Footer Widget */}
								
							</div>
							
							
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-menu">
									<h2 className="footer-title">Useful links</h2>
									<ul>
										<li>
											<Link to="/search">Tìm kiếm Stylist</Link>
										</li>
										<li>
											<Link to="/booking">Booking</Link>
										</li>
									</ul>
								</div>
								{/* Footer Widget */}
								
							</div>
							<div className="col-lg-3 col-md-6">
							
								{/* Footer Widget */}
								<div className="footer-widget footer-contact">
									<h2 className="footer-title">Get in touch</h2>
									<div className="footer-contact-info">
										<div className="footer-address">
											<p className="title"> Ask us a Question </p>
											<p>(02) - 123 - 456 - 789</p>
										</div>	
										<div className="social-icon">
											<p className="title">Connect with us</p>
											<ul>
												<li>
													<a href="https://www.facebook.com/N%C3%A0ng-Beauty-105131045177329" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> </a>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /> </Link>
												</li>
												<li>
													<Link href="https://www.youtube.com/channel/UCQM6BH9ZEZmNUl4zpYfMs-Q" target="_blank"><FontAwesomeIcon icon={faYoutube} /> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* Footer Widget */}
								
							</div>
							
						</div>
					</div>
				</div>
				{/* Footer Top */}
				
				{/* Footer Bottom */}
                <div className="footer-bottom">
					<div className="container-fluid">
					
						{/* Copyright */}
						<div className="copyright">
							<div className="row">
								<div className="col-md-12 col-lg-12">
									<div className="copyright-text text-center">
										<p className="mb-0">&copy; 2021 Nàng Beauty. Đã được đăng ký bản quyền.</p>
									</div>
								</div>
							</div>
						</div>
						{/* Copyright */}
						
					</div>
				</div>
				{/* Footer Bottom */}
				
			</footer>
		)
    }
}

export { Footer };