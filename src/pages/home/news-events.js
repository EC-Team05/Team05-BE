import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import EventImg1 from '../../assets/img/profile/blog-01.jpg';
import EventImg2 from '../../assets/img/profile/blog-02.jpg';
import EventImg3 from '../../assets/img/profile/blog-03.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid';

class NewsandEvents extends React.Component {
    render() {
        return (
            <div>
                {/* Events Section */}
                <section className="section event">
                    <div className="container">
                    
                        {/* Section Header */}
                        <div className="section-header text-center">
                            <h2>Blog</h2>
                            <p className="text-center">Xem những bài blog mới nhất</p>
                        </div>
                        {/* Section Header */}
                        
                        <div className="row blog-grid-row">
                            <div className="col-md-6 col-lg-4 col-sm-12">
                            
                                {/* Blog Post */}
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details"><img className="img-fluid" src={EventImg1} alt="Post Image" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h3 className="blog-title"><Link to="/blog-details">Top Colors for Nail Polish</Link></h3>
                                        <p className="mb-0">Considering just how much women love diversity, especially when it comes to a visual appearance - America's nail polish companies have come up with numerous ways to create new shades and colors.</p>
                                        <Link to="/blog-details" className="btn btn-pink">Đọc thêm</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}
                                
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                            
                                {/* Blog Post */}
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details"><img className="img-fluid" src={EventImg2} alt="Post Image" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h3 className="blog-title"><Link to="/blog-details">What a Non-toxic Nail Polish Is?</Link></h3>
                                        <p className="mb-0">In the last few years the world's gone mad (in a good sense) for all things organic. This includes all things essential, natural, counting things essential for women, such as their nail polish right in.</p>
                                        <Link to="/blog-details" className="btn btn-pink">Đọc thêm</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}
                                
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-12">
                            
                                {/* Blog Post */}
                                <div className="blog grid-blog">
                                    <div className="blog-image">
                                        <Link to="/blog-details"><img className="img-fluid" src={EventImg3} alt="Post Image" /></Link>
                                    </div>
                                    <div className="blog-content">
                                        <h3 className="blog-title"><Link to="/blog-details">Top Colors for Nail Polish</Link></h3>
                                        <p className="mb-0">It's not always possible to have a nail polish remover on you, everywhere. This is why we're gonna guide you on a couple of other ways to take it off, just as well as the overall hands skin care treatments…</p>
                                        <Link to="/blog-details" className="btn btn-pink">Đọc thêm</Link>
                                    </div>
                                </div>
                                {/* Blog Post */}
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* Events Section */}
            </div>
        )
    }
}
export { NewsandEvents };