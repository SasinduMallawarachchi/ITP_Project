import React, { Component } from 'react';

export default class DashBoard extends Component {




  render() {
    return (

                
              <div className="dash_container">	
                <div className="dashbtnbox">               
                    <button type="button" className="dashbtn01"><a href="/" style={{textDecoration:'none', color:'black'}}>Home</a></button>
                    <button type="button" className="dashbtn02">Customer Management</button>
                    <button type="button" className="dashbtn03">Admin Management</button>
                    <button type="button" className="dashbtn04">Stock Management</button>
                    <button type="button" className="dashbtn05">Reservation Management</button>
                    <button type="button" className="dashbtn06">History Management</button>
                    <button type="button" className="dashbtn07">Dilivery Management</button>
                    <button type="button" className="dashbtn08">Inquiry Management</button>
                </div>
              </div>
    )
  }
}