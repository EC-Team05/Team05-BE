import React from 'react';
import { Link } from 'react-router-dom'

// Import Image
import UserImg from '../../assets/img/customers/customer.jpg';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                {/* Profile Widget */}
                <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                        <div className="pro-widget-content">
                            <div className="profile-info-widget">
                                <Link to="#" className="booking-doc-img">
                                    <img src={UserImg} alt="User Image" />
                                </Link>
                                <div className="profile-det-info">
                                    <h3><Link to="/customer-profile">Richard Wilson</Link></h3>
                                    <div className="customer-details">
                                        <h5><b>customer ID :</b> PT0016</h5>
                                        <h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer-info">
                            <ul>
                                <li>Phone <span>+1 952 001 8563</span></li>
                                <li>Age <span>38 Years, Male</span></li>
                                <li>Blood Group <span>AB+</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Profile Widget */}
            </div>
        )
    }

}
export { Sidebar };