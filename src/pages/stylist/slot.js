import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class Slot extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [{value: 'one', label: 'One'}]
        };
        this.removeClick = this.removeClick.bind(this);
    }

    removeClick = (e, i) => {
        e.preventDefault();
        let users = [...this.state.users];
        users.splice(i, 1);
        this.setState({ users });
    }

    addClick() {
        this.setState(prevState => ({ 
           users: [...prevState.users, {value: 'one', label: 'One'}]
        }))
    }

    createUI() {

        return this.state.users.map((el, i) => (
            <div key={i}> 
                <div className="row form-row">
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Start Time</label>
                            <select className="form-control">
                                <option>-</option>
                                <option>12.00 am</option>
                                <option>12.30 am</option>  
                                <option>1.00 am</option>
                                <option>1.30 am</option>
                            </select>
                        </div> 
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>End Time</label>
                            <select className="form-control">
                                <option>-</option>
                                <option>12.00 am</option>
                                <option>12.30 am</option>  
                                <option>1.00 am</option>
                                <option>1.30 am</option>
                            </select>
                        </div> 
                    </div>
            
                    {  parseInt(i) !== 0 ? 
                        <div className="col-12 col-md-2 col-lg-1">
                            <div className="delete-icon">
                                <label className="d-md-block d-sm-none d-none">&nbsp;</label>
                                <Link to="#0" className="btn btn-danger trash" onClick={e => this.removeClick(e, i)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </Link>
                            </div>  
                        </div>: ''
                    }
                </div>
            </div>
            
        ))
    }

    render() {
        return(
            <>
            <div className="hours-info">
                <div className="row form-row hours-cont">
                        <div className="col-12 col-md-10">
                            {this.createUI()}
                        </div>
                </div>
            </div>
        
            <div className="add-more mb-3">
                <Link to="#0" className="add-hours" onClick={()=>this.addClick('add')}>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add More
                </Link>
            </div>
        </>
        );
    }
}
export default Slot;