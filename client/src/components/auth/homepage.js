import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames"; 
import { logoutUser } from "../../actions/authActions";



class Homepage extends Component{
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
    
             
          
         
             
             
     
              
         
     
     
                       
                           
                        
                 
                
                 
                 
                 
               
                
             <div className="analytics-sparkle-area">
                
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="analytics-sparkle-line reso-mg-b-30">
                                 <div className="analytics-content">
                                     <h5>CLI Routes</h5>
                                     <h2>$<span className="counter">5000</span> <span className="tuition-fees"> Fees</span></h2>
                                     <span className="text-success">20%</span>
                                     <div className="progress m-b-0">
                                         <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}> <span className="sr-only">20% Complete</span> </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="analytics-sparkle-line reso-mg-b-30">
                                 <div className="analytics-content">
                                     <h5>NCLI Routes</h5>
                                     <h2>$<span className="counter">3000</span> <span className="tuition-fees">Fees</span></h2>
                                     <span className="text-danger">30%</span>
                                     <div className="progress m-b-0">
                                         <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}> <span className="sr-only">230% Complete</span> </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="analytics-sparkle-line reso-mg-b-30 table-mg-t-pro dk-res-t-pro-30">
                                 <div className="analytics-content">
                                     <h5>TDM Routes</h5>
                                     <h2>$<span className="counter">2000</span> <span className="tuition-fees"> Fees</span></h2>
                                     <span className="text-info">60%</span>
                                     <div className="progress m-b-0">
                                         <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}> <span className="sr-only">20% Complete</span> </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="analytics-sparkle-line table-mg-t-pro dk-res-t-pro-30">
                                 <div className="analytics-content">
                                     <h5>Call Center Routes</h5>
                                     <h2>$<span className="counter">3500</span> <span className="tuition-fees"> Fees</span></h2>
                                     <span className="text-inverse">80%</span>
                                     <div className="progress m-b-0">
                                         <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"  style={{width:"80%"}}> <span className="sr-only">230% Complete</span> </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="product-sales-area mg-tb-30">
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                             <div className="product-sales-chart">
                                 <div className="portlet-title">
                                     <div className="row">
                                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                             <div className="caption pro-sl-hd">
                                                 <span className="caption-subject"><b>Earnings</b></span>
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                             <div className="actions graph-rp graph-rp-dl">
                                                 <p>All Earnings are in million $</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <ul className="list-inline cus-product-sl-rp">
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#006DF0"}}></i>CLI</h5>
                                     </li>
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#933EC5"}}></i>NCLI</h5>
                                     </li>
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#65b12d"}}></i>TDM</h5>
                                     </li>
                                 </ul>
                                 <div id="extra-area-chart" style={{height:"356px"}}></div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                             <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                                 <h3 className="box-title">Total Visit</h3>
                                 <ul className="list-inline two-part-sp">
                                     <li>
                                         <div id="sparklinedash"></div>
                                     </li>
                                     <li className="text-right sp-cn-r"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter text-success">1500</span></li>
                                 </ul>
                             </div>
                             <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                                 <h3 className="box-title">Page Views</h3>
                                 <ul className="list-inline two-part-sp">
                                     <li>
                                         <div id="sparklinedash2"></div>
                                     </li>
                                     <li className="text-right graph-two-ctn"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter text-purple">3000</span></li>
                                 </ul>
                             </div>
                             <div className="white-box analytics-info-cs mg-b-10 res-mg-b-30 tb-sm-res-d-n dk-res-t-d-n">
                                 <h3 className="box-title">Unique Visitor</h3>
                                 <ul className="list-inline two-part-sp">
                                     <li>
                                         <div id="sparklinedash3"></div>
                                     </li>
                                     <li className="text-right graph-three-ctn"><i className="fa fa-level-up" aria-hidden="true"></i> <span className="counter text-info">5000</span></li>
                                 </ul>
                             </div>
                             <div className="white-box analytics-info-cs table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n">
                                 <h3 className="box-title">Bounce Rate</h3>
                                 <ul className="list-inline two-part-sp">
                                     <li>
                                         <div id="sparklinedash4"></div>
                                     </li>
                                     <li className="text-right graph-four-ctn"><i className="fa fa-level-down" aria-hidden="true"></i> <span className="text-danger"><span className="counter">18</span>%</span>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="traffic-analysis-area">
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="social-media-edu">
                                 <i className="fa fa-facebook"></i>
                                 <div className="social-edu-ctn">
                                     <h3>50k Likes</h3>
                                     <p>You main list growing</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="social-media-edu twitter-cl res-mg-t-30 table-mg-t-pro-n">
                                 <i className="fa fa-twitter"></i>
                                 <div className="social-edu-ctn">
                                     <h3>30k followers</h3>
                                     <p>You main list growing</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="social-media-edu linkedin-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                                 <i className="fa fa-linkedin"></i>
                                 <div className="social-edu-ctn">
                                     <h3>7k Connections</h3>
                                     <p>You main list growing</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                             <div className="social-media-edu youtube-cl res-mg-t-30 res-tablet-mg-t-30 dk-res-t-pro-30">
                                 <i className="fa fa-youtube"></i>
                                 <div className="social-edu-ctn">
                                     <h3>50k Subscribers</h3>
                                     <p>You main list growing</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
           
             <div className="product-sales-area mg-tb-30">
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                             <div className="product-sales-chart">
                                 <div className="portlet-title">
                                     <div className="row">
                                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                             <div className="caption pro-sl-hd">
                                                 <span className="caption-subject"><b>Adminsion Statistic</b></span>
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                             <div className="actions graph-rp actions-graph-rp">
                                                 <a href="#" className="btn btn-dark btn-circle active tip-top" data-toggle="tooltip" title="Refresh">
                                                         <i className="fa fa-reply" aria-hidden="true"></i>
                                                     </a>
                                                 <a href="#" className="btn btn-blue-grey btn-circle active tip-top" data-toggle="tooltip" title="Delete">
                                                         <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                     </a>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <ul className="list-inline cus-product-sl-rp">
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#006DF0"}}></i>Total clients</h5>
                                     </li>
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#933EC5"}}></i>Happy clients</h5>
                                     </li>
                                     <li>
                                         <h5><i className="fa fa-circle" style={{color: "#65b12d"}}></i>Wining Awards</h5>
                                     </li>
                                 </ul>
                                 <div id="morris-area-chart"></div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                             <div className="analysis-progrebar res-mg-t-30 mg-ub-10 res-mg-b-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
                                 <div className="analysis-progrebar-content">
                                     <h5>Usage</h5>
                                     <h2 className="storage-right"><span className="counter">90</span>%</h2>
                                     <div className="progress progress-mini ug-1">
                                         <div style={{width: "68%"}} className="progress-bar"></div>
                                     </div>
                                     <div className="m-t-sm small">
                                         <p>Server down since 1:32 pm.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="analysis-progrebar reso-mg-b-30 res-mg-b-30 mg-ub-10 tb-sm-res-d-n dk-res-t-d-n">
                                 <div className="analysis-progrebar-content">
                                     <h5>Memory</h5>
                                     <h2 className="storage-right"><span className="counter">70</span>%</h2>
                                     <div className="progress progress-mini ug-2">
                                         <div style={{width: "78%"}} className="progress-bar"></div>
                                     </div>
                                     <div className="m-t-sm small">
                                         <p>Server down since 12:32 pm.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="analysis-progrebar reso-mg-b-30 res-mg-b-30 res-mg-t-30 mg-ub-10 tb-sm-res-d-n dk-res-t-d-n">
                                 <div className="analysis-progrebar-content">
                                     <h5>Data</h5>
                                     <h2 className="storage-right"><span className="counter">50</span>%</h2>
                                     <div className="progress progress-mini ug-3">
                                         <div style={{width: "38%"}} className="progress-bar progress-bar-danger"></div>
                                     </div>
                                     <div className="m-t-sm small">
                                         <p>Server down since 8:32 pm.</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="analysis-progrebar res-mg-t-30 table-dis-n-pro tb-sm-res-d-n dk-res-t-d-n">
                                 <div className="analysis-progrebar-content">
                                     <h5>Space</h5>
                                     <h2 className="storage-right"><span className="counter">40</span>%</h2>
                                     <div className="progress progress-mini ug-4">
                                         <div style={{width: "28%"}} className="progress-bar progress-bar-danger"></div>
                                     </div>
                                     <div className="m-t-sm small">
                                         <p>Server down since 5:32 pm.</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="courses-area mg-b-15">
                 <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                             <div className="white-box">
                                 <h3 className="box-title">Browser Status</h3>
                                 <ul className="basic-list">
                                     <li>Google Chrome <span className="pull-right label-danger label-1 label">95.8%</span></li>
                                     <li>Mozila Firefox <span className="pull-right label-purple label-2 label">85.8%</span></li>
                                     <li>Apple Safari <span className="pull-right label-success label-3 label">23.8%</span></li>
                                     <li>Internet Explorer <span className="pull-right label-info label-4 label">55.8%</span></li>
                                     <li>Opera mini <span className="pull-right label-warning label-5 label">28.8%</span></li>
                                     <li>Mozila Firefox <span className="pull-right label-purple label-6 label">26.8%</span></li>
                                     <li>Safari <span className="pull-right label-purple label-7 label">31.8%</span></li>
                                 </ul>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                             <div className="white-box res-mg-t-30 table-mg-t-pro-n">
                                 <h3 className="box-title">Visits from countries</h3>
                                 <ul className="country-state">
                                     <li>
                                         <h2><span className="counter">1250</span></h2> <small>From Australia</small>
                                         <div className="pull-right">75% <i className="fa fa-level-up text-danger ctn-ic-1"></i></div>
                                         <div className="progress">
                                             <div className="progress-bar progress-bar-danger ctn-vs-1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}> <span className="sr-only">75% Complete</span></div>
                                         </div>
                                     </li>
                                     <li>
                                         <h2><span className="counter">1050</span></h2> <small>From USA</small>
                                         <div className="pull-right">48% <i className="fa fa-level-up text-success ctn-ic-2"></i></div>
                                         <div className="progress">
                                             <div className="progress-bar progress-bar-info ctn-vs-2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"48%"}}> <span className="sr-only">48% Complete</span></div>
                                         </div>
                                     </li>
                                     <li>
                                         <h2><span className="counter">6350</span></h2> <small>From Canada</small>
                                         <div className="pull-right">55% <i className="fa fa-level-up text-success ctn-ic-3"></i></div>
                                         <div className="progress">
                                             <div className="progress-bar progress-bar-success ctn-vs-3" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"55%"}}> <span className="sr-only">55% Complete</span></div>
                                         </div>
                                     </li>
                                     <li>
                                         <h2><span className="counter">950</span></h2> <small>From India</small>
                                         <div className="pull-right">33% <i className="fa fa-level-down text-success ctn-ic-4"></i></div>
                                         <div className="progress">
                                             <div className="progress-bar progress-bar-success ctn-vs-4" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"33%"}}> <span className="sr-only">33% Complete</span></div>
                                         </div>
                                     </li>
                                     <li>
                                         <h2><span className="counter">3250</span></h2> <small>From Bangladesh</small>
                                         <div className="pull-right">60% <i className="fa fa-level-up text-success ctn-ic-5"></i></div>
                                         <div className="progress">
                                             <div className="progress-bar progress-bar-inverse ctn-vs-5" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}> <span className="sr-only">60% Complete</span></div>
                                         </div>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                       
                         </div>
                     </div>
                 </div>
             </div>
            
        )
    }

    
    
}
export default Homepage;
