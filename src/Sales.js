import React, { Component } from 'react';

class Sales extends Component {
  render() {
    	console.log(this.props.items)
    return (
      <div>
        This is Sales Component
      </div>
    );
  }
}

export default Sales;