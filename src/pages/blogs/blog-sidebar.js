import React from 'react';
import { Link } from 'react-router-dom'

// Import Images
import BlogThumb1 from '../../assets/img/blog/blog-thumb-01.jpg';
import BlogThumb2 from '../../assets/img/blog/blog-thumb-02.jpg';
import BlogThumb3 from '../../assets/img/blog/blog-thumb-03.jpg';
import BlogThumb4 from '../../assets/img/blog/blog-thumb-04.jpg';
import BlogThumb5 from '../../assets/img/blog/blog-thumb-05.jpg';
import Ads from '../../assets/img/blog/ads.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid';

class BlogSidebar extends React.Component {
    render() {
        return (
            <div>
                {/* Search */}
                <div className="card search-widget">
                    <div className="card-body">
                        <form className="search-form">
                            <div className="input-group">
                                <input type="text" placeholder="Tìm kiếm..." className="form-control" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Search */}

                {/* Latest Posts */}
                <div className="card post-widget">
                    <div className="card-header">
                        <h4 className="card-title">Bài viết mới nhất</h4>
                    </div>
                    <div className="card-body">
                        <ul className="latest-posts">
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb1} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">How to strengthen brittle nails naturally</Link>
                                    </h4>
                                    <p>4 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb2} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">Why You Should Use  Non-Toxic Nail Polish?</Link>
                                    </h4>
                                    <p>3 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb3} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">25 Easy Nail Art Ideas</Link>
                                    </h4>
                                    <p>3 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb4} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">What’s the Future of Nail Art?</Link>
                                    </h4>
                                    <p>2 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb5} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">The Top-Selling Nail Polish colors</Link>
                                    </h4>
                                    <p>1 Dec 2020</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Latest Posts */}

                {/* Categories */}
                <div className="card category-widget">
                    <div className="card-header">
                        <h4 className="card-title">Danh mục blog</h4>
                    </div>
                    <div className="card-body">
                        <ul className="categories">
                            <li><Link to="#">Tips <span>(62)</span></Link></li>
                            <li><Link to="#">Sản phẩm, dụng cụ <span>(27)</span></Link></li>
                            <li><Link to="#">Nghệ thuật nail <span>(41)</span></Link></li>
                        </ul>
                    </div>
                </div>
                {/* Categories */}
                {/* Blog Post */}
                <div className="blog">
                    <div className="blog-image">
                        <a href="https://www.maxfactor.com/en"><img className="img-fluid" src={Ads} alt="Post Image" /></a>
                    </div>
                </div>
                {/* Blog Post */}
            </div>
        )
    }
}
export { BlogSidebar };