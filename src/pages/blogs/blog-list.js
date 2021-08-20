import React from 'react';
import { Link } from 'react-router-dom'

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faClock, faComments, faTags } from '@fortawesome/fontawesome-free-solid';

class BlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogs: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        blogs: result.blog
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
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Danh sách blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">

                                {/* Blog Post */}
                                <ul>
                                    {
                                        this.state.blogs.map(blog =>
                                            <div className="blog">
                                                <div className="blog-image">
                                                    <Link to="/blog-details">
                                                        <img
                                                            className="img-fluid"
                                                            src={blog.img}
                                                            alt="Post Image" />
                                                    </Link>
                                                </div>
                                                <h3 className="blog-title"><Link to="/blog-details">How to strengthen brittle nails naturally</Link></h3>
                                                <div className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li><FontAwesomeIcon icon={faClock} />{blog.date}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-content">
                                                    <p>{blog.content}</p>
                                                    <Link to="/blog-details" className="read-more">Đọc thêm</Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                </ul>

                                {/* Blog Post */}


                            </div>

                            {/* Blog Sidebar */}
                            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                                <BlogSidebar />
                            </div>
                            {/* Blog Sidebar */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BlogList };