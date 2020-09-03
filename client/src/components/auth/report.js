import React, { Component } from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";





class Report extends Component {
     constructor(props) {
        super(props);
        this.state = {
             allCarriers:""
        }
    }
   

    render(){
        console.log(this.state.allCarriers);
        return(
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

                                                            <li className="nav-item"><Link className="nav-link" to='routtesting'><b>Rout Testing</b></Link></li>

                                                            <li className="nav-item"><Link className="/navlink" to='ratesheet'><b>Rate Sheet</b></Link></li>
                             
                                    </ul>
                                    
                                    
                                   
                                </div>
                                
                             
                            </div>
                          
                           
                        </div>
                        
                       
                        
            </div>
                  <div className="container1"><br/>
                  
                  <h2 className="carrier-name">Margin Information</h2><br/>
                <form>
                <div className="container">
                    <div className="form-row">
                      <div className="form-group col-md">
      
                       
                       <input type="radio" id="Customer" name="carrier" value=""/>
                       <label for="Customer">Customer</label>
      
                       
                       <input type="radio" id="Vendor" name="carrier" value=""/>
                       <label for="Vendor">Vendor</label>
      
                       </div>
                     </div>
                      <div className="form-row">
                          <div className="form-group col-md">
      
                            <input type="radio" id="Margin" name="carrier" value=""/>
                            <label for="Margin">Margin</label>
      
                      
                      <input type="radio" id="Ncgativc" name="carrier" value=""/>
                      <label for="Ncgativc">Ncgativc Margin</label>
                  
                      
                     
                        </div>
                      </div>
                     
          
                  
                      <div className="form-row">
              
                        <div className="form-group col-md-2">
                            <label for="carriername">Carrier Name</label>
                            <select id="carriername" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="tecprefix">Tec Prefix</label>
                            <select id="tecprefix" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
      
                        </div>
                        <div className="form-row">
              
                          <div className="form-group col-md-2">
                              <label for="country">Country</label>
                              <select id="country" className="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                              </select>
                          </div>
                          <div className="form-group col-md-2">
                              <label for="Breakout">Breakout</label>
                              <select id="Breakout" className="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                              </select>
                             </div>
                          </div>
                          <div className="form-row">
                          <div className="form-group col-md-3">
                            <label for="StartDate">Start Date</label>
                              <input type="Date" id="startDate" name=" start Date"/>
                            </div>
                            <div className="form-group col-md-3">
                              <label for="End Date">End Date</label>
                                <input type="date" id="End Date" name="End Date"/>
                              </div>
                            </div>
                            <button type="submit" id="submit" className="btn btn-submit">SEARCH</button>
                          
                          </div>
                          </div>
                          </form>
                          </div>
                          </div>
                          
        )
    }
}
export default Report;