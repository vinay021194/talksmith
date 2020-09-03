import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import axios from "axios";


class CarrierDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCarrier: []
        }
    }

    componentDidMount() {
        axios.get("/api/carrier/getallCarrier").
            then(res => {
                console.log(res.data.carieer)
                this.setState({ allCarrier: res.data.carieer })
                console.log(this.state.allCarrier)

            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (<div>
            {/* <div className="left-sidebar-pro">
                <nav id="sidebar" className="">
                    <div className="sidebar-header">
                        <a href="index.html"><img className="main-logo" src="../../../public/img/logo/LOGO.png" alt="" /></a>
                    </div>
                    <div className="left-custom-menu-adp-wrap comment-scrollbar">
                        <nav className="sidebar-nav left-sidebar-menu-pro">
                            <ul className="metismenu" id="menu1">
                                <li className="active">
                                    <a className="has-arrow" href="index.html">
                                        <span className="educate-icon educate-home icon-wrap"></span>
                                        <span className="mini-click-non">Dashboard</span>
                                    </a>
                                    <ul className="submenu-angle" aria-expanded="true">
                                        <li><a title="Dashboard v.1" href="index.html"><span className="mini-sub-pro">Dashboard v.1</span></a></li>
                                        <li><a title="Dashboard v.3" href="index-2.html"><span className="mini-sub-pro">Dashboard v.2</span></a></li>
                                        <li><a title="Widgets" href="widgets.html"><span className="mini-sub-pro">Widgets</span></a></li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </nav>
        </div> */}
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

                                                            <li className="nav-item"><Link className="/nav-link" to='/report'><b>Report</b></Link></li>

                                                            <li className="nav-item"><Link className="navbar-brand2" to='alert system'><b>Alert System</b></Link></li>

                                                            <li className="nav-item"><Link className="nav-link" to='credit monitoring'><b>Credit Monitoring</b></Link></li>

                                                            <li className="nav-item"><Link className="nav-link" to='rout testing'><b>Rout Testing</b></Link></li>

                                                            <li className="nav-item"><Link className="/navlink" to='ratesheet'><b>Rate Sheet</b></Link></li>
                                    </ul>
                                    
                                    
                                   
                                </div>
                                
                             
                            </div>
                          
                           
                        </div>
                        
                       
                        
            </div>
               
                    <div className="container1"><br />
                        <h2 className="carrier-name"> Carrier Information</h2><br />


                        <form>
                            <div className="container">
                                <div className="form-inline">
                                    <label for="carrier">Carrier Name</label>
                                    <select id="carrier" name="carrier">
                                        <option value="select">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>




                                    <div className="form-group">
                                        <label for="tec">Tec prefix:</label>
                                        <input type="text" className="form-control" id="text" />
                                    </div>
                                    <div className="form-group">
                                        <label for="endpoint">End Point:</label>
                                        <input type="text" className="form-control" id="text" />
                                    </div>
                                    <div className="form-group">
                                        <label for="carrier">Carrier Type</label>
                                        <select id="carrier" name="carrier">
                                            <option value="select">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>


                                    <button type="submit" id="search submit" className="btn btn-default">search</button>
                                </div>
                                <Link to={"/Carrier"} className="btn btn-carrier" role="button">Add new carrier</Link>
                            </div>
                        </form>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Carrier Name</th>
                                    <th scope="col">Tec prefix</th>
                                    <th scope="col">End Point</th>
                                    <th scope="col">Carrier Type</th>
                                    <th scope="col">Edit</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allCarrier ? this.state.allCarrier.map((data) =>
                                    < tr >
                                        <th scope="row">{data.name}</th>
                                        <td>{data.nocemailid}</td>
                                        <td>{data.accountmanager}</td>
                                        <td>{data.accountmanager}</td>
                                        <td><Link to={"/carrier/edit/" + data._id}>Edit</Link></td>

                                    </tr>
                                ) : ''}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        

        )
    }
}


export default CarrierDashboard;