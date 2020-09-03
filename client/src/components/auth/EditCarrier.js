import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom"

class EditCarrier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactnumber: '',
            Shortcarriername: '',
            location: '',
            nocloc: '',
            nocemailid: '',
            accountmanager: '',
            amcontactnumber: '',
            amemailid: '',
            rateemailid: '',
            billingemailid: '',
            GSTcompany: '',
            status: '',
            GSTaccountmanager: '',
            gstcategory: '',
            financestatus: '',
            retail: '',
            banificaryname: '',
            bankname: '',
            accountnumber: '',
            ifsccode: '',
            swiftcode: '',
            bankaddress: '',
            Billduration: '',
            billdurationdays: '',
            Duedays: '',
            carriertype: '',
            contractcreditlimit: '',
            dynamiccreditlimit: '',

        }

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let newCarieer = this.state
        const obj = {
            accountmanager: this.state.accountmanager,
        }
        axios
            .post("/api/carrier/carrier/update/" + this.props.match.params.id, obj)
            .then(res => console.log(res)) // re-direct to login on successful register
            .catch(err =>
                console.log(err)
            );
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("/api/carrier/carrier/edit/" + this.props.match.params.id)
            .then(res => {
                console.log(res.data.carieer.accountmanager)
                this.setState({
                    accountmanager: res.data.carieer.accountmanager,
                    endpoint: res.data.carieer.endpoint
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        const { user
        } = this.props.auth;


        //console.log(user);
        return (
            <div>
               
                <div className="all-content-wrapper">
                <div className="header-advance-area">
                <div className="header-top-area">
                    <div className="container-fluid">
                        <a className="navbar-image" href="#"> <img src="/img/logo/talk2.png"/></a>
                           <div className="col-lg-10 col-md-5 col-sm-4 col-xs-6">
                           
                             <div className="header-top-menu tabl-d-n">
                                 
                         </div>
                        </div>
                   </div>
                   
                    <hr className="line"/>
                     <button
                                style={{
                                    width: "80px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: ""
                                }}
                                onClick={this.onLogoutClick}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Logout
                            </button> 
                    
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
                            <h2 class="carrier-name"> Carrier Information</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="container">
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="name">Carrier Name</label>
                                            <input type="text" className="form-control" id="name" onChange={this.onChange}
                                                value={this.state.name} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputnumber">Contact number</label>
                                            <input type="text" className="form-control" id="contactnumber" onChange={this.onChange}
                                                value={this.state.contactnumber} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="inputname">Short Carrier Name</label>
                                            <input type="text" className="form-control" id="Shortcarriername" onChange={this.onChange}
                                                value={this.state.Shortcarriername} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputlocation">Location</label>
                                            <input type="text" className="form-control" id="location" onChange={this.onChange}
                                                value={this.state.location} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputnocloc">NOC Loc</label>
                                            <input type="text" className="form-control" id="nocloc" onChange={this.onChange}
                                                value={this.state.nocloc} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="emailid" className="mb-2 mr-sm-2">NOC Emailid</label>
                                            <input type="text" className="form-control mb-2 mr-sm-2" id="nocemailid" placeholder="Enter email"
                                                name="email" onChange={this.onChange}
                                                value={this.state.nocemailid} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputaccount">Account Manager</label>
                                            <input type="text" className="form-control" id="accountmanager" onChange={this.onChange}
                                                value={this.state.accountmanager} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputZip">AM contact number</label>
                                            <input type="text" className="form-control" id="amcontactnumber" onChange={this.onChange}
                                                value={this.state.amcontactnumber} />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="email2" className="mb-2 mr-sm-2">AM Email id</label>
                                            <input type="text" className="form-control mb-2 mr-sm-2" id="amemailid"
                                                name="email" onChange={this.onChange}
                                                value={this.state.amemailid} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="email2" className="mb-2 mr-sm-2">Rate Email id</label>
                                            <input type="text" className="form-control mb-2 mr-sm-2" id="rateemailid" placeholder="Enter email"
                                                name="email" onChange={this.onChange}
                                                value={this.state.rateemailid} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="email2" className="mb-2 mr-sm-2">Billing Email id</label>
                                            <input type="text" className="form-control mb-2 mr-sm-2" id="billingemailid" placeholder="Enter email"
                                                name="email" onChange={this.onChange}
                                                value={this.state.billingemailid} />
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label for="inputgst">GST Company</label>
                                            <select id="GSTcompany" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputStatus">Status</label>
                                            <select id="status" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputStatus">GST Account manager</label>
                                            <select id="GSTaccountmanager" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>

                                        </div>

                                    </div>
                                    <div className="form-row">

                                        <div className="form-group col-md-3">
                                            <label for="input">GST category</label>
                                            <select id="gstcategory" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputState">Finance status</label>
                                            <select id="financestatus" className="form-control">
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>

                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label for="address">Billing Emailid CC:</label>
                                            <textarea className="form-control" id="address"></textarea>
                                        </div>


                                    </div>
                                </div>
                                <div className="container">


                                <button type="button" className="btn btn-success" data-toggle="collapse" data-target="#form-row" >+ </button> <span className="carrier-name2"> Bank Detail Info.</span>
                                    <hr />
                                    <div className="collapse" id="form-row">

                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label for="inputname">banificiary Name</label>
                                                <input type="text" className="form-control" id="banificaryname"
                                                    onChange={this.onChange}
                                                    value={this.state.banificaryname}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputname">Bank Name</label>
                                                <input type="text" className="form-control" id="bankname"
                                                    onChange={this.onChange}
                                                    value={this.state.bankname}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputname">Account Number</label>
                                                <input type="text" className="form-control" id="accountnumber" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label for="inputcode">IFSC code</label>
                                                <input type="text" className="form-control" id="ifsccode"
                                                    onChange={this.onChange}
                                                    value={this.state.ifsccode}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputcode">Swift code</label>
                                                <input type="text" className="form-control" id="swiftcode"
                                                    onChange={this.onChange}
                                                    value={this.state.swiftcode}
                                                />
                                            </div>
                                            <div className="form-group col-sm-3">
                                                <label for="address"> Bank Address:</label>
                                                <textarea className="form-control" id="bankaddress"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container"><br />
                                <button type="button" className="btn btn-success" data-toggle="collapse" data-target="#form-row2" >+ </button> <span className="carrier-name2"> Billing Cycle.</span>
                                    <hr />

                                    <div className="collapse" id="form-row2">

                                        <div className="form-row2">
                                            <div className="form-group col-md-3">
                                                <label for="inputbill">Billduration</label>
                                                <select id="Billduration" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option value="status">days</option>
                                                    <option value="status">weekly</option>
                                                    <option value="status">fortnight</option>
                                                    <option value="status">monthly</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputays">Billduuration Days</label>
                                                <input type="text" className="form-control" id="billdurationdays"
                                                    onChange={this.onChange}
                                                    value={this.state.ifsccode}

                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputdays">Due days</label>
                                                <input type="text" className="form-control" id="Duedays"
                                                    onChange={this.onChange}
                                                    value={this.state.Duedays}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row2">
                                            <div className="form-group col-md-3">
                                                <label for="inputcarrier">Carrier Type</label>
                                                <select id="carriertype" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputcreditlimit">Dynamic Credit Limit</label>
                                                <input type="text" className="form-control" id="dynamiccreditlimit"
                                                    onChange={this.onChange}
                                                    value={this.state.dynamiccreditlimit}
                                                />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="contractcreditlimit">Contract Credit Limit</label>
                                                <input type="text" className="form-control" id="contractcreditlimit"
                                                    onChange={this.onChange}
                                                    value={this.state.contractcreditlimit}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" className="btn btn-submit">Submit</button>

                            </form>


                        </div>


                           
                        </div>
                    </div>
                
            

        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { logoutUser }
)((EditCarrier));
