import React, { Component } from 'react';

 class User extends Component {
  render() {
    //Destructing 
    const {name,department,salary} = this.props;
    return (
    <div className='col-md-8 mb-4 '>
      <div className = "card">
        <div className='card-header d-flex justify-content-between'>

          <h4 className='d-inline'>{name}</h4>
          <h4 className='d-inline'>{department}</h4>
          <h4 className='d-inline'>{salary}</h4>

        </div>
      </div>
    </div>
    )
  }
}

export default User