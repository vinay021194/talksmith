import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dropdown, MenuItem, DropdownButton, ButtonGroup } from "react-bootstrap";


class Ratesheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCarriers: ''
        }
    }
    
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let newRatesheet = this.state
        axios
            .post("/api/ratesheet/create", newRatesheet)
            .then(res => console.log(res)) // re-direct to login on successful register
            .catch(err =>
                console.log(err)
            );
    }

    componentWillMount() {
        axios
            .get("/api/carrier/getallCarrier")
            .then(res => {
              
                this.setState({ allCarriers: res.data.carieer })
                console.log(res.data.carieer)
            }) // re-direct to login on successful register
            .catch(err =>
                console.log(err)
            );
    }

    getTechprefix = (e) => {
        console.log(e.target.value)
    }

    render() {
      
        console.log(this.state.allCarriers);
        return (
           <div className="all-content-wrapper">
            <div className="header-advance-area">
                <div className="header-top-area">
                    <div className="container-fluid">
                        <a className="navbar-image" href="#"> <img src="img/logo/talk2.png"/></a>
                           <div className="col-lg-10 col-md-5 col-sm-4 col-xs-6">
                             <div className="header-top-menu tabl-d-n">
                         </div>
                        </div>
                   </div>
                    <hr className="line"/>
                        <div className="col-lg-10 col-md-5 col-sm-4 col-xs-6">
                            <div className="header-top-menu tabl-d-n">
                                 <ul className="nav navbar-nav mai-top-nav">
                                     
                                  
                                                            <li className="nav-item"><Link class="nav-link" to='/homepage'><b>Home</b></Link>
                                                            </li>
                                                            <li className="nav-item"><Link className="/nav-link" to='/CarrierDashboard'><b>Carrier</b></Link>
                                                            </li>
                                                            <li className="nav-item"><Link className="nav-link" to='invoice'><b>Invoice</b></Link></li>

                                                            <li className="nav-item"><Link className="/nav-link" to='/repor t'><b>Report</b></Link></li>

                                                            <li className="nav-item"><Link className="navbar-brand2" to='alert system'><b>Alert System</b></Link></li>

                                                            <li className="nav-item"><Link className="nav-link" to='credit monitoring'><b>Credit Monitoring</b></Link></li>

                                                            <li className="nav-item"><Link className="nav-link" to='rout testing'><b>Rout Testing</b></Link></li>

                                                            <li className="nav-item"><Link className="/navlink" to='ratesheet'><b>Rate Sheet</b></Link></li>
                                    </ul>
                                    
                                    
                                   
                                </div>
                                
                             
                            </div>
                          
                           
                        </div>
                        
                       
                        
            </div>
    
           
          
                    <div className="container1"><br/>
                        <h2 className="carrier-name"> Upload Rate Sheet</h2>
                        <form onChange={this.onSubmit}>
                            <div className="container">

                                <div className="form-inline">
                                    <div className="form-group col-lg">

                                        <label for="Customer">Customer</label>
                                        <input type="radio" id="Customer" name="carrier" value="" />

                                        <label for="Vendor">Vendor</label>
                                        <input type="radio" id="Vendor" name="carrier" value="" />

                                    </div>
                                </div>



                                <div className="form-row">
                                    <div className="form-group col-lg-3"> 
                                        <label for="carrier">Carrier Name</label>
                                        <select id="carrier" onChange={this.getTechprefix} className="form-control" name="carrier">
                                            <option value="select">Select</option>
                                            {
                                                this.state.allCarriers ? this.state.allCarriers.map(element =>
                                                    <option value={element.name}> {element.name}</option>

                                                ) : ''
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <label for="Tecprefix">Techprefix</label>
                                        <select id="Tecprefix"  onChange={this.getTechprefix}  className="form-control" name="Tecprefix">
                                            <option value="select">Select</option> 
                                            {
                                                this.state.allCarriers ? this.state.allCarriers.map(element =>
                                                    <option value={element.nocemailid}> {element.nocemailid}</option>

                                                ) : ''
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-lg-3">
                                        <label for="Quality">Quality</label>
                                        <select id="Quality" onChange={this.getTechprefix} className="form-control" name="Quality">
                                            <option value="select">Select</option>
                                            {
                                                this.state.allCarriers ? this.state.allCarriers.map(element =>
                                                    <option value={element.name}> {element.name}</option>

                                                ) : ''
                                            }
                                        </select>
                                    </div>

                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={1212121}
                                        id={12121212}
                                        title={1212121}
                                    >  <ul>
                                        <Dropdown.Item eventKey="1"><li>Action</li></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><li>Another action</li></Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                           <li> Active Item</li>
                                         </Dropdown.Item>
                                        <Dropdown.Divider /> 
                                        <Dropdown.Item eventKey="4"><li>Separated link</li></Dropdown.Item>
                                   </ul> </DropdownButton>
                                    <div className="form-group col-lg-3">
                                        <label for="UploadDate">Upload Date</label>
                                        <input type="date"  id="UploadDate" name="UploadDate" />
                                    </div>
                                    <div className="form-group col-lg-3">
                                        <input type="file" id="myFile" name="filename2" />
                                    </div>
                                </div>
                                <button type="submit" id="submit" className="btn btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            
        

        )
    }
}





export default Ratesheet;
